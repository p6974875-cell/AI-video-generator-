import { useState } from 'react';
import DashboardLayout from '../components/Layout'
import axios from 'axios';

export default function ImageGen() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setImageUrl('');
    setError('');

    // NOTE: This is a placeholder as the backend currently only supports video generation.
    // The structure is ready for a real image generation API call.
    try {
      // Mock API call to simulate image generation
      const mockResponse = {
        data: {
          success: true,
          imageUrl: `https://placehold.co/600x400/2563eb/ffffff?text=${encodeURIComponent(prompt)}`
        }
      };
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
      setImageUrl(mockResponse.data.imageUrl);
    } catch (err: any) {
      setError('Failed to generate image. (This is a mock error)');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Image Generation</h1>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-4">
        <input 
          type="text" 
          placeholder="Search or generate image..." 
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <select className="p-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Unsplash</option>
          <option>Pexels</option>
          <option>Freepik</option>
          <option>Replicate</option>
        </select>
        <button 
          type="submit" 
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
      </form>
      {loading && <div className="mt-4 text-center text-gray-500">Generating image...</div>}
      {error && <div className="mt-4 text-center text-red-500">{error}</div>}
      {imageUrl && (
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Generated Image</h2>
          <img src={imageUrl} alt="Generated" className="w-full max-w-2xl rounded-lg shadow-lg" />
        </div>
      )}
    </DashboardLayout>
  )
}