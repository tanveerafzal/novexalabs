'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Script from 'next/script'
import {
  ArrowLeft,
  Cpu,
  Code2,
  CheckCircle2,
  Copy,
  Play,
  Loader2,
} from 'lucide-react'
import { useState, useCallback } from 'react'

declare global {
  interface Window {
    TrustCredo: {
      init: (config: {
        apiKey: string
        onSuccess: (result: { extractedData: { fullName: string }; verificationId: string }) => void
        onFailure: (result: unknown) => void
        onClose: () => void
      }) => void
      startVerification: (params: {
        userId: string
        userEmail: string
        userName: string
      }) => void
    }
  }
}

const PARTNER_API_KEY = 'bd61b049-4201-412f-8c11-4236adf307e2'

const codeSnippets = {
  step1: `<script src="https://verify.trustcredo.com/sdk/v1/trustcredo.js"></script>`,
  step2: `TrustCredo.init({
  apiKey: '${PARTNER_API_KEY}',

  onSuccess: function(result) {
    console.log('Verified!', result.extractedData.fullName);
    // Send verificationId to your server
  },

  onFailure: function(result) {
    console.log('Failed', result);
  },

  onClose: function() {
    console.log('User closed modal');
  }
});`,
  step3: `document.getElementById('verify-btn').onclick = function() {
  TrustCredo.startVerification({
    userId: 'user_123',
    userEmail: 'user@example.com',
    userName: 'John Doe'
  });
};`,
}

function CodeBlock({ code, language = 'javascript' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <div className="absolute right-3 top-3 z-10">
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <CheckCircle2 className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-white/60" />
          )}
        </button>
      </div>
      <pre className="bg-gray-900/80 rounded-xl p-6 overflow-x-auto border border-white/10">
        <code className={`language-${language} text-sm text-white/90 font-mono`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default function TestVerificationPage() {
  const [sdkReady, setSdkReady] = useState(false)
  const [sdkError, setSdkError] = useState<string | null>(null)
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'loading' | 'success' | 'failed'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleScriptLoad = useCallback(() => {
    console.log('TrustCredo SDK script loaded')
    if (window.TrustCredo) {
      console.log('TrustCredo object found, initializing...')
      try {
        window.TrustCredo.init({
          apiKey: PARTNER_API_KEY,

          onSuccess: (result) => {
            console.log('Verified!', result.extractedData.fullName)
            setVerificationStatus('success')
            setStatusMessage(`Verification successful! Welcome, ${result.extractedData.fullName}`)
          },

          onFailure: (result) => {
            console.log('Failed', result)
            setVerificationStatus('failed')
            setStatusMessage('Verification failed. Please try again.')
          },

          onClose: () => {
            console.log('User closed modal')
            setVerificationStatus('idle')
            setStatusMessage('')
          },
        })
        setSdkReady(true)
        console.log('TrustCredo SDK initialized successfully')
      } catch (error) {
        console.error('Error initializing TrustCredo:', error)
        setSdkError('Failed to initialize SDK')
      }
    } else {
      console.error('TrustCredo object not found on window')
      setSdkError('SDK loaded but TrustCredo not available')
    }
  }, [])

  const handleScriptError = () => {
    console.error('Failed to load TrustCredo SDK script')
    setSdkError('Failed to load SDK script. Please check the URL.')
  }

  const handleStartVerification = () => {
    if (window.TrustCredo) {
      console.log('Starting verification...')
      setVerificationStatus('loading')
      setStatusMessage('')
      try {
        window.TrustCredo.startVerification({
          userId: 'demo_user_' + Date.now(),
          userEmail: 'demo@example.com',
          userName: 'Demo User',
        })
      } catch (error) {
        console.error('Error starting verification:', error)
        setVerificationStatus('failed')
        setStatusMessage('Error starting verification')
      }
    } else {
      console.error('TrustCredo not available')
      setSdkError('TrustCredo SDK not available')
    }
  }

  return (
    <main className="min-h-screen">
      {/* Load TrustCredo SDK */}
      <Script
        src="https://verify.trustcredo.com/sdk/v1/trustcredo.js"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
        strategy="afterInteractive"
      />

      {/* Header */}
      <header className="glass-strong sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Cpu className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold text-gradient">Logithic Labs</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-400 text-sm font-medium mb-4">
              SDK Integration
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              TrustCredo <span className="text-gradient">Verification SDK</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Integrate identity verification into your application with just a few lines of code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SDK Integration Steps */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Include the SDK</h2>
                <p className="text-white/60">Add the TrustCredo SDK script to your HTML</p>
              </div>
            </div>
            <CodeBlock code={codeSnippets.step1} language="html" />
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Initialize with API Key</h2>
                <p className="text-white/60">Configure TrustCredo with your partner API key and callbacks</p>
              </div>
            </div>
            <CodeBlock code={codeSnippets.step2} language="javascript" />
            <div className="mt-4 glass rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Callback Functions:</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-primary-400">onSuccess</code> — Called when verification is successful. Contains extracted user data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-primary-400">onFailure</code> — Called when verification fails. Contains error details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-primary-400">onClose</code> — Called when user closes the verification modal.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Start Verification</h2>
                <p className="text-white/60">Trigger the verification flow when user clicks a button</p>
              </div>
            </div>
            <CodeBlock code={codeSnippets.step3} language="javascript" />
            <div className="mt-4 glass rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Parameters:</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-primary-400">userId</code> — Your unique identifier for the user</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-primary-400">userEmail</code> — User&apos;s email address</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span><code className="text-primary-400">userName</code> — User&apos;s display name</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Demo Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Try It Out</h3>
              <p className="text-white/60 mb-6">
                Click the button below to see the verification flow in action. 
              </p>
              <button
                onClick={handleStartVerification}
                disabled={!sdkReady || verificationStatus === 'loading'}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {verificationStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Start Verification
                  </>
                )}
              </button>

              {/* Status Message */}
              {statusMessage && (
                <div className={`mt-4 p-4 rounded-xl ${
                  verificationStatus === 'success'
                    ? 'bg-green-500/20 border border-green-500/30'
                    : 'bg-red-500/20 border border-red-500/30'
                }`}>
                  <p className={verificationStatus === 'success' ? 'text-green-400' : 'text-red-400'}>
                    {statusMessage}
                  </p>
                </div>
              )}

              <p className={`text-sm mt-4 ${sdkError ? 'text-red-400' : 'text-white/40'}`}>
                {sdkError ? sdkError : sdkReady ? 'SDK loaded and ready.' : 'Loading SDK...'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Example */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Complete <span className="text-gradient">Example</span>
            </h2>
            <CodeBlock
              code={`<!DOCTYPE html>
<html>
<head>
  <title>TrustCredo Verification</title>
  <script src="https://verify.trustcredo.com/sdk/v1/trustcredo.js"></script>
</head>
<body>
  <button id="verify-btn">Verify Identity</button>

  <script>
    TrustCredo.init({
      apiKey: '${PARTNER_API_KEY}',

      onSuccess: function(result) {
        console.log('Verified!', result.extractedData.fullName);
        // Send verificationId to your server
      },

      onFailure: function(result) {
        console.log('Failed', result);
      },

      onClose: function() {
        console.log('User closed modal');
      }
    });

    document.getElementById('verify-btn').onclick = function() {
      TrustCredo.startVerification({
        userId: 'user_123',
        userEmail: 'user@example.com',
        userName: 'John Doe'
      });
    };
  </script>
</body>
</html>`}
              language="html"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-gradient">Get Started</span>?
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Contact us to get your partner API key and start integrating.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all hover:scale-105"
            >
              Request API Key
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Logithic Labs Inc. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
