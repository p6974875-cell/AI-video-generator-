import DashboardLayout from '../components/Layout'

export default function ImageGen() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Image Generation</h1>
      <form className="mt-4 flex flex-col space-y-4">
        <input type="text" placeholder="Search or generate image..." className="p-2 border rounded"/>
        <select className="p-2 border rounded">
          <option>Unsplash</option>
          <option>Pexels</option>
          <option>Freepik</option>
          <option>Replicate</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Generate Image</button>
      </form>
    </DashboardLayout>
  )
}