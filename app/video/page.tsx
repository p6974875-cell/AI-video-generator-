'use client';
import { useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';

export default function VideoPage() {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: 'A futuristic city in 2050' }),
      });
      const data = await res.json();
      setVideoUrl(data.videoUrl);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Generate Video</h1>
      <button 
        onClick={handleGenerate}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Generate
      </button>
      <div className="mt-6">
        <VideoPlayer videoUrl={videoUrl} isLoading={loading} className="h-80" />
      </div>
    </div>
  );
}
