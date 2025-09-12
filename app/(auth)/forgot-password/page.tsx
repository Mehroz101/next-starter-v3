"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import InputBox from '@/components/common/inputBox';
import ErrorBox from '@/components/common/errorBox';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/common/Button';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPasswordMutation, error, loading, success } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    forgotPasswordMutation.mutate({ email: email })
    if (success) {
      setIsSubmitted(true);
    }

  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex">
        <div className="w-full lg:w-2/3 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  YourBrand
                </span>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mt-6">Check your email</h1>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <p className="text-gray-600 mb-6">
                We&apos;ve sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the instructions.
              </p>

              <div className="text-sm text-gray-500 mb-6">
                Didn&apos;t receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-500 font-semibold"
                >
                  try again
                </button>
              </div>

              <Link
                href="/login"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl block text-center"
              >
                Return to login
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-3/2 relative">
          {/* Gradient Background Only */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsla(247,58%,57%,1) 0%, hsla(0,75%,69%,1) 100%)",
            }}
          />

          {/* Centered Text Content */}
          <div className="absolute inset-0 flex top-20 justify-left p-12">
            <div className="text-white ">
              <h2 className="text-4xl font-bold mb-6">Need help with your password?</h2>
              <p className="text-xl opacity-90">
                We&apos;ll help you reset it and get back into your account in no time.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-2/3 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                YourBrand
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mt-6">Forgot password</h1>
            <p className="text-gray-600 mt-2">Enter your email to reset your password</p>
          </div>
          {error &&
            <ErrorBox error={error} />
          }
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputBox
                label="Email address"
                type="email"
                name="email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                placeHolder="Enter your email"
              />
              <Button label="Reset password" loading={loading} type='submit' />
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Remember your password?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-500 font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-3/2 relative">
        {/* Gradient Background Only */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsla(247,58%,57%,1) 0%, hsla(0,75%,69%,1) 100%)",
          }}
        />
        <div className="absolute inset-0 flex top-20 justify-left p-12">
          <div className="text-white ">
            <h2 className="text-4xl font-bold mb-6">Need help with your password?</h2>
            <p className="text-xl opacity-90">
              We&apos;ll help you reset it and get back into your account in no time.
            </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ForgotPasswordPage;