"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InputBox from '@/components/common/inputBox';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { useSearchParams } from 'next/navigation';
import ErrorBox from '@/components/common/errorBox';

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const expires = searchParams.get('expires');
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    token: token || ''
  });
  const [isExpired, setIsExpired] = useState(false);
  const { resetPasswordMutation, error, loading, success } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic here
    resetPasswordMutation.mutate(formData)
  };
  useEffect(() => {
    if (expires && expires !== '') {
      const expiryTime = Number(expires) * 1000;
      if (Date.now() > expiryTime) {
        setIsExpired(true);
      }
    }
    else {
      setIsExpired(true);

    }
  }, [expires, token]);

  if (success) {
    return (
      <div className="min-h-screen flex">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  YourBrand
                </span>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mt-6">Password reset</h1>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <p className="text-gray-600 mb-6">
                Your password has been successfully reset. You can now sign in with your new password.
              </p>

              <Link
                href="/login"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl block text-center"
              >
                Continue to login
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-600 opacity-90"></div>
          <Image
            src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Success visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }


  return (

    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-2/3 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">

          {
            isExpired ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center" >
                <h2 className="text-2xl font-bold text-red-600 mb-4">Reset link expired or wrong</h2>
                <p className="text-gray-600 mb-6">
                  This reset password link has expired or wrong. Please request a new one.
                </p>
                <Link
                  href="/forgot-password"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl block text-center"
                >
                  Request new link
                </Link>
              </div >
            ) : (
              <div>

                <div className="text-center mb-8">
                  <Link href="/" className="inline-block">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      YourBrand
                    </span>
                  </Link>
                  <h1 className="text-3xl font-bold text-gray-900 mt-6">Reset password</h1>
                  <p className="text-gray-600 mt-2">Create a new password for your account</p>
                </div>
                {error && (
                  <ErrorBox error={error} />
                )}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>

                      <InputBox
                        label="Password"
                        type="password"
                        name="password"
                        required={true}
                        value={formData.password}
                        onChange={handleChange}
                        placeHolder="Create new password"
                      />

                    </div>

                    <InputBox
                      label="Confirm password"
                      type="password"
                      name="confirmPassword"
                      required={true}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeHolder="Confirm your password"
                    />
                    <p className="text-gray-500 text-sm mt-2">
                      Your password must be at least 8 characters long and include a mix of letters, numbers, and special characters.
                    </p>
                    <Button label="Reset password" type='submit' loading={loading} disabled={formData.password !== formData.confirmPassword || formData.password === '' || formData.confirmPassword === '' || formData.password.length < 8} />

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
            )}

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
};

export default ResetPasswordPage;