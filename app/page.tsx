import { signIn } from "@/auth";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* ===== Navigation Bar ===== */}
      <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm10-3a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DocumentVoice
              </div>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#footer" className="text-sm text-gray-300 hover:text-white transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main className="flex-1 flex flex-col">
        {/* ===== Hero Section with Split Screen ===== */}
        <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Hero Grid - Left Content, Right Sign-In Card */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column: Headline & Features */}
              <div className="flex flex-col gap-8">
                {/* Main Headline */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-xs sm:text-sm text-blue-300 font-medium">
                      Join professionals worldwide
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    <span className="text-white">Connect,</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Collaborate, Create
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-400 max-w-md leading-relaxed">
                    The modern social platform where professionals build genuine connections,
                    share insights, and grow their networks with enterprise-grade security.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Instant professional networking and sharing</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Lightning-fast performance and smooth UI</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">OAuth login with Google and GitHub</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Sign-In Card */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-sm">
                  {/* Card Container */}
                  <div className="relative rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl p-8 shadow-2xl">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl border border-blue-500/20 pointer-events-none"></div>

                    {/* Card Content */}
                    <div className="relative space-y-6">
                      {/* Card Header */}
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-white">Get Started</h2>
                        <p className="text-sm text-gray-400">
                          Sign in with Google or GitHub
                        </p>
                      </div>

                      {/* Google Sign-In Form */}
                      <form
                        action={async () => {
                          "use server";
                          await signIn("google", { redirectTo: "/dashboard" });
                        }}
                        className="space-y-4"
                      >
                        <button
                          type="submit"
                          className="w-full group relative px-4 py-3 rounded-lg border border-slate-600 bg-white/5 hover:bg-white/10 transition-all duration-200 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                          <div className="relative flex items-center justify-center gap-3">
                            {/* Google Icon SVG */}
                            <svg
                              className="w-5 h-5 group-hover:scale-110 transition-transform"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                              />
                              <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                              />
                              <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                              />
                              <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                              />
                            </svg>
                            <span className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                              Continue with Google
                            </span>
                          </div>
                        </button>
                      </form>

                      {/* Divider */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-slate-600/30"></div>
                        <span className="text-xs text-gray-500 font-medium">OR</span>
                        <div className="flex-1 h-px bg-slate-600/30"></div>
                      </div>

                      {/* GitHub Sign-In Form */}
                      <form
                        action={async () => {
                          "use server";
                          await signIn("github", { redirectTo: "/dashboard" });
                        }}
                        className="space-y-4"
                      >
                        <button
                          type="submit"
                          className="w-full group relative px-4 py-3 rounded-lg border border-slate-600 bg-white/5 hover:bg-white/10 transition-all duration-200 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                          <div className="relative flex items-center justify-center gap-3">
                            {/* GitHub Icon SVG */}
                            <svg
                              className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                              Continue with GitHub
                            </span>
                          </div>
                        </button>
                      </form>

                      {/* Email Signup Link */}
                      <button
                        type="button"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-600/50 bg-slate-700/30 hover:bg-slate-700/50 text-gray-300 hover:text-white font-medium text-sm transition-all"
                      >
                        Continue with Email
                      </button>

                      {/* Footer Text */}
                      <p className="text-center text-xs text-gray-500">
                        By signing up, you agree to our{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                          Terms
                        </a>
                        {" "}and{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Trust Badges Below Card */}
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>No card needed</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9a3 3 0 015-3 3 3 0 015 3v1h2a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h2V9z" clipRule="evenodd" />
                      </svg>
                      <span>Secure login</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                      <span>Fast UI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Advertisement Space 1 ===== */}
        <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full h-[90px] bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-500 text-sm font-medium">
            🎯 Advertisement Space · Google AdSense Ready
          </div>
        </div>

        {/* ===== Features Section ===== */}
        <section id="features" className="w-full py-16 sm:py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Enterprise Features
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Everything you need to connect, collaborate, and create at scale with
                professional-grade security and reliability.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Feature 1 */}
              <div className="group rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur p-8 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real-time Feed</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  See posts, reactions, and comments instantly across your network.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur p-8 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Secure Authentication</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Login securely using Google and GitHub OAuth with Auth.js.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur p-8 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Ultra-Fast Performance</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built with Next.js for fast page loads and smooth interactions.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur p-8 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Analytics Ready</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Structure your app to later add engagement and growth metrics.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur p-8 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H19a2 2 0 002-2v-2a2 2 0 00-2-2h-2.5a2 2 0 01-1 .268V9a2 2 0 00-2-2 2 2 0 00-2 2v.932a2 2 0 01-.5.268H9a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Global Scale</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Deploy easily on platforms like Vercel and scale as users grow.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group rounded-xl border border-slate-700/50 bg-slate-800/40 backdrop-blur p-8 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">API Friendly</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ready to connect with backend APIs, databases, and document features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Advertisement Space 2 ===== */}
        <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full h-[90px] bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-500 text-sm font-medium">
            🎯 Advertisement Space · Google AdSense Ready
          </div>
        </div>

        {/* ===== Stats Section ===== */}
        <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  99.9%
                </div>
                <p className="text-gray-400 text-sm text-center">Uptime Target</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  2
                </div>
                <p className="text-gray-400 text-sm text-center">OAuth Providers</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  1
                </div>
                <p className="text-gray-400 text-sm text-center">Modern App</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  &lt;1s
                </div>
                <p className="text-gray-400 text-sm text-center">Fast Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Advertisement Space 3 ===== */}
        <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full h-[90px] bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-500 text-sm font-medium">
            🎯 Advertisement Space · Google AdSense Ready
          </div>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer id="footer" className="w-full bg-slate-950 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm10-3a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white">DocumentVoice</span>
              </div>

              <p className="text-sm text-gray-400">
                Building the future of social networking with speed, security,
                and genuine human connection.
              </p>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#footer" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    GDPR Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 pt-8">
            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} DocumentVoice. All rights reserved.
              </p>

              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
