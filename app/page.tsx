export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">AI Video Generator</h1>
      <p className="text-gray-600">Choose a tool to get started:</p>
      <ul className="list-disc pl-6">
        <li><a href="/video" className="text-blue-600">Generate Video</a></li>
        <li><a href="/image" className="text-blue-600">Generate Image</a></li>
        <li><a href="/settings" className="text-blue-600">Settings</a></li>
      </ul>
    </div>
  );
}
