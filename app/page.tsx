'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .calendar-preview {
          animation: float 6s ease-in-out infinite;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        .gradient-bg {
          background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
        }

        .feature-card {
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="flex items-center justify-between py-4 px-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              EasyMeeting
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/product" className="text-gray-600 hover:text-gray-900 transition-colors">Product</Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                  Solutions
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <Link href="/enterprise" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">English</button>
              <Link href="/sales" className="text-gray-600 hover:text-gray-900 transition-colors">Talk to sales</Link>
            </div>
            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Log In</Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Get started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="gradient-bg">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h1 className="text-4xl md:text-6xl font-bold text-[#1a3b5d] mb-6">
                  Easy scheduling <span className="text-blue-600">ahead</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Join 20 million professionals who easily book meetings with the #1 scheduling tool.
                </p>
                <div className="space-y-4">
                  <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
                    <Image 
                      src="/google-icon.svg" 
                      alt="Google" 
                      width={20} 
                      height={20}
                    />
                    Sign up with Google
                  </Button>
                  <Button className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
                    <Image 
                      src="/microsoft-icon.svg" 
                      alt="Microsoft" 
                      width={20} 
                      height={20}
                    />
                    Sign up with Microsoft
                  </Button>
                  <div className="text-center">
                    <span className="text-gray-500">OR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href="/signup" className="text-blue-600 hover:text-blue-700 transition-colors">
                      Sign up free with email,
                    </Link>
                    <span className="text-gray-600">No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="relative calendar-preview">
                <div className="bg-white rounded-lg shadow-xl p-6 feature-card">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Reduce no-shows and stay on track
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                      <div className="mb-2 transform hover:scale-105 transition-transform">
                        <Image 
                          src="/text-reminder-icon.svg" 
                          alt="Text Reminder" 
                          width={48} 
                          height={48}
                        />
                      </div>
                      <h3 className="font-medium mb-2">Send text reminder</h3>
                      <div className="text-sm text-gray-600 p-2 bg-white/80 rounded">
                        24 hours before event starts
                      </div>
                      <div className="mt-4 text-sm text-gray-600">
                        Send text to invitees
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                      <div className="mb-2 transform hover:scale-105 transition-transform">
                        <Image 
                          src="/email-icon.svg" 
                          alt="Email" 
                          width={48} 
                          height={48}
                        />
                      </div>
                      <h3 className="font-medium mb-2">Send thank you email</h3>
                      <div className="text-sm text-gray-600 p-2 bg-white/80 rounded">
                        2 hours after event ends
                      </div>
                      <div className="mt-4 text-sm text-gray-600">
                        Send email to invitees
                      </div>
                    </div>
                  </div>
                </div>
                {/* Calendar Preview Overlay */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white rounded-lg shadow-lg hidden md:block">
                  <div className="p-2">
                    <div className="w-full h-4 bg-blue-600 rounded-t-sm"></div>
                    <div className="grid grid-cols-7 gap-1 mt-1">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-200 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-gray-600">
            Trusted by more than <span className="font-semibold">100,000</span> of the world's leading organizations
          </p>
        </div>
      </footer>
    </div>
  )
}