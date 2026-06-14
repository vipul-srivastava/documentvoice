import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link href="/">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  DocumentVoice
                </div>
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                {session.user.email}
              </div>
              <form
                action={async () => {
                  "use server";
                  // Logout action placeholder
                }}
              >
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition-colors"
                >
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome Back, {session.user.name || "User"}
            </h1>
            <p className="text-lg text-gray-600">
              Your personal dashboard and network hub
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Create Post */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-200 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Create Post</h3>
              <p className="text-gray-700 flex-grow">
                Share updates with your network and engage with your community.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Start Writing →
              </button>
            </div>

            {/* Card 2: Messages */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-200 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Messages</h3>
              <p className="text-gray-700 flex-grow">
                Connect privately with end-to-end encrypted conversations.
              </p>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                View Messages →
              </button>
            </div>

            {/* Card 3: Profile */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-200 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Profile</h3>
              <p className="text-gray-700 flex-grow">
                Update your profile, settings, and account preferences.
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                Edit Profile →
              </button>
            </div>

            {/* Card 4: Network */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-orange-200 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20a6 6 0 0112 0v2H6v-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Network</h3>
              <p className="text-gray-700 flex-grow">
                Discover, follow, and connect with professionals in your industry.
              </p>
              <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                Explore Network →
              </button>
            </div>

            {/* Card 5: Analytics */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-red-200 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Analytics</h3>
              <p className="text-gray-700 flex-grow">
                Track engagement, reach, and network growth insights.
              </p>
              <button className="text-red-600 font-medium hover:text-red-700 transition-colors">
                View Analytics →
              </button>
            </div>

            {/* Card 6: Help & Docs */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-indigo-200 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Help & Docs</h3>
              <p className="text-gray-700 flex-grow">
                Access documentation, guides, and support resources.
              </p>
              <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                Read Docs →
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Stats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">Total Posts</div>
                <div className="text-3xl font-bold text-blue-600">0</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">Network Connections</div>
                <div className="text-3xl font-bold text-blue-600">0</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">Total Engagement</div>
                <div className="text-3xl font-bold text-blue-600">0</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">Messages Received</div>
                <div className="text-3xl font-bold text-blue-600">0</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} DocumentVoice. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
