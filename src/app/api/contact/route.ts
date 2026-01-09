import { NextRequest, NextResponse } from 'next/server'

async function getAuthToken(): Promise<string | null> {
  const apiBaseUrl = process.env.ULTRAREACH_API_BASE_URL
  const username = process.env.ULTRAREACH_API_USERNAME
  const password = process.env.ULTRAREACH_API_PASSWORD
  const apiKey = process.env.ULTRAREACH_API_KEY

  if (!apiBaseUrl || !username || !password || !apiKey) {
    console.error('Missing auth environment variables:', {
      ULTRAREACH_API_BASE_URL: !!apiBaseUrl,
      ULTRAREACH_API_USERNAME: !!username,
      ULTRAREACH_API_PASSWORD: !!password,
      ULTRAREACH_API_KEY: !!apiKey,
    })
    return null
  }

  try {
    const response = await fetch(`${apiBaseUrl}/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        apiKey,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Auth API error:', errorText)
      return null
    }

    const data = await response.json()
    return data.token || null
  } catch (error) {
    console.error('Auth error:', error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get environment variables
    const emailTo = process.env.CONTACT_EMAIL_TO
    const businessGroup = process.env.CONTACT_BUSINESS_GROUP
    const apiBaseUrl = process.env.ULTRAREACH_API_BASE_URL

    // Validate environment variables
    if (!emailTo || !businessGroup || !apiBaseUrl) {
      console.error('Missing required environment variables:', {
        CONTACT_EMAIL_TO: !!emailTo,
        CONTACT_BUSINESS_GROUP: !!businessGroup,
        ULTRAREACH_API_BASE_URL: !!apiBaseUrl,
      })
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Get auth token
    const authToken = await getAuthToken()
    if (!authToken) {
      console.error('Failed to get auth token')
      return NextResponse.json(
        { error: 'Authentication failed' },
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

    const response = await fetch(`${apiBaseUrl}/v1/messaging/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
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
