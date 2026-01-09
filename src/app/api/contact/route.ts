import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Get environment variables
    const emailTo = process.env.CONTACT_EMAIL_TO
    const businessGroup = process.env.CONTACT_BUSINESS_GROUP
    const apiEndpoint = process.env.CONTACT_API_ENDPOINT
    const apiToken = process.env.CONTACT_API_TOKEN

    // Validate environment variables
    if (!emailTo || !businessGroup || !apiEndpoint) {
      console.error('Missing required environment variables')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const data = await request.json()
    const { name, email, company, service, message } = data

    // Build the body with name: value format
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
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

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    // Add auth token if configured
    if (apiToken) {
      headers['Authorization'] = `Bearer ${apiToken}`
    }

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers,
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
