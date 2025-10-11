'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-md w-full mx-4">
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-red-600/10 rounded-full mb-4">
              <svg 
                className="w-16 h-16 text-red-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Age Verification</h1>
            <p className="text-gray-400">
              You must be 18 years or older to access this content
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-[#0f0f0f] rounded-lg">
              <input
                type="checkbox"
                id="age-confirm"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-600 bg-[#272727] text-red-600 focus:ring-red-500 focus:ring-offset-0 cursor-pointer"
              />
              <label 
                htmlFor="age-confirm" 
                className="text-sm text-gray-300 cursor-pointer select-none"
              >
                I confirm that I am at least 18 years old and agree to view adult content
              </label>
            </div>

            <button
              onClick={handleConfirm}
              disabled={!confirmed}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                confirmed
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-500/50'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
            </button>

            <div className="text-center text-xs text-gray-500 mt-4">
              By continuing, you acknowledge that you are of legal age in your jurisdiction
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
