import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-lg font-bold">Feydey AI</div>
        <nav className="flex flex-col p-2 space-y-2">
          <Link href="/" className="p-2 hover:bg-gray-200 rounded">Dashboard</Link>
          <Link href="/video" className="p-2 hover:bg-gray-200 rounded">Video</Link>
          <Link href="/image" className="p-2 hover:bg-gray-200 rounded">Image</Link>
          <Link href="/settings" className="p-2 hover:bg-gray-200 rounded">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  )
}
