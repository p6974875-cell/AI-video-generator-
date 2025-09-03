import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <aside className="w-full md:w-64 bg-white shadow-md p-4 flex flex-col items-center md:items-start">
        <div className="text-xl font-bold mb-4">Feydey AI</div>
        <nav className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2">
          <Link href="/" className="p-2 hover:bg-gray-200 rounded-lg transition-colors">Dashboard</Link>
          <Link href="/video" className="p-2 hover:bg-gray-200 rounded-lg transition-colors">Video</Link>
          <Link href="/image" className="p-2 hover:bg-gray-200 rounded-lg transition-colors">Image</Link>
          <Link href="/settings" className="p-2 hover:bg-gray-200 rounded-lg transition-colors">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto w-full">{children}</main>
    </div>
  )
}