import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Get environment variables
    const emailTo = process.env.CONTACT_EMAIL_TO
    const businessGroup = process.env.CONTACT_BUSINESS_GROUP
    const apiBaseUrl = process.env.ULTRAREACH_API_BASE_URL
    const apiKey = process.env.ULTRAREACH_API_KEY

    // Validate environment variables
    if (!emailTo || !businessGroup || !apiBaseUrl || !apiKey) {
      console.error('Missing required environment variables:', {
        CONTACT_EMAIL_TO: !!emailTo,
        CONTACT_BUSINESS_GROUP: !!businessGroup,
        ULTRAREACH_API_BASE_URL: !!apiBaseUrl,
        ULTRAREACH_API_KEY: !!apiKey,
      })
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const data = await request.json()
    const { name, email, phone, company, companySize, service, message } = data

    // Build the body with name: value format
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      companySize ? `Company Size: ${companySize}` : null,
      service ? `Service Needed: ${service}` : null,
      ``,
      `Message:`,
      message,
    ].filter(Boolean).join('\n')

    const payload = {
      businessGroup,
      to: emailTo,
      subject: `New Contact Form Submission from ${name}`,
      body: bodyLines,
    }

    const response = await fetch(`${apiBaseUrl}/v1/messaging/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Email API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
