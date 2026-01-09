import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
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
      businessGroup: 'Logithic',
      to: 'tanveerafzal@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      body: bodyLines,
    }

    const response = await fetch('https://ultrareach360-api.vercel.app/v1/messaging/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
