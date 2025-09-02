import DashboardLayout from '../components/Layout'

export default function Video() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Video Generation</h1>
      <form className="mt-4 flex flex-col space-y-4">
        <input type="text" placeholder="Enter your video prompt..." className="p-2 border rounded"/>
        <select className="p-2 border rounded">
          <option>OpenAI</option>
          <option>Heygen</option>
          <option>Vidu</option>
          <option>Replicate</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Generate Video</button>
      </form>
    </DashboardLayout>
  )
}