import axios from "axios";

export const callReplicate = async (prompt: string) => {
  const apiKey = process.env.REPLICATE_API_KEY;
  if (!apiKey) throw new Error("Missing REPLICATE_API_KEY");

  const response = await axios.post(
    "https://api.replicate.com/v1/predictions",
    {
      version: "a9758cbf0da...", // Example model version, replace later
      input: { prompt }
    },
    { headers: { Authorization: `Token ${apiKey}` } }
  );

  return response.data;
};
