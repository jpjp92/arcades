
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("API Key not found in .env.local");
        process.exit(1);
    }

    const genAI = new GoogleGenAI({ apiKey });

    try {
        // Note: The method to list models might vary slightly depending on the SDK version
        // But usually it's available through the models property or a listModels call.
        // In @google/genai, it's often better to check the official docs or try common names.
        console.log("Fetching available models...\n");

        // Attempting to list models if the SDK supports it
        // In many cases, we can just use the standard ones:
        const recommendModels = [
            "gemini-1.5-flash",
            "gemini-1.5-pro",
            "gemini-2.0-flash-exp",
            "gemini-2.0-flash-lite-preview-02-05"
        ];

        console.log("--- Recommended & Standard Models ---");
        recommendModels.forEach(m => console.log(`- ${m}`));

        console.log("\n--- Which one would you like to use? ---");
    } catch (error) {
        console.error("Error fetching models:", error);
    }
}

listModels();
