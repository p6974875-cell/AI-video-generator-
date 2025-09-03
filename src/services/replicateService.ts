import axios from "axios";

// This function handles the video generation request and polls for the result.
export const callReplicate = async (prompt: string) => {
  const apiKey = process.env.REPLICATE_API_KEY;
  if (!apiKey) throw new Error("Missing REPLICATE_API_KEY");

  // Replicate model version for text-to-video generation
  const REPLICATE_MODEL_VERSION = "a9758cbf0da88f21958b475c5aa45e12810be59a684534882199b007f50228d2"; // Use a real model version
  const headers = { Authorization: `Token ${apiKey}` };

  try {
    // Step 1: Start the generation process
    const startResponse = await axios.post(
      "https://api.replicate.com/v1/predictions",
      {
        version: REPLICATE_MODEL_VERSION,
        input: { prompt }
      },
      { headers }
    );

    const predictionUrl = startResponse.data.urls.get;
    let finalPrediction = startResponse.data;

    // Step 2: Poll the prediction URL until the status is 'succeeded' or 'failed'
    while (finalPrediction.status !== "succeeded" && finalPrediction.status !== "failed") {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      const pollResponse = await axios.get(predictionUrl, { headers });
      finalPrediction = pollResponse.data;
    }

    if (finalPrediction.status === "failed") {
      throw new Error(`Replicate API failed with status: ${finalPrediction.status}`);
    }

    return finalPrediction.output; // Return the final video URL
  } catch (error: any) {
    // Propagate errors with a clear message
    throw new Error(`Replicate API call failed: ${error.message}`);
  }
};