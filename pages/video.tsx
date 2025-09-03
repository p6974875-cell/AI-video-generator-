import { useState } from 'react';
import DashboardLayout from '../components/Layout'
import axios from 'axios';

export default function Video() {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setVideoUrl('');
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/videos/generate', { prompt });
      setVideoUrl(response.data.result);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to generate video.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Video Generation</h1>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-4">
        <input 
          type="text" 
          placeholder="Enter your video prompt..." 
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <select className="p-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>OpenAI</option>
          <option>Heygen</option>
          <option>Vidu</option>
          <option>Replicate</option>
        </select>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Video'}
        </button>
      </form>
      {loading && <div className="mt-4 text-center text-gray-500">Generating video, please wait...</div>}
      {error && <div className="mt-4 text-center text-red-500">{error}</div>}
      {videoUrl && (
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Generated Video</h2>
          <video controls src={videoUrl} className="w-full max-w-2xl rounded-lg shadow-lg" />
        </div>
      )}
    </DashboardLayout>
  )
}

