
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("API Key not found in .env.local");
        return;
    }

    // Use v1beta or v1alpha for the latest experimental models
    const genAI = new GoogleGenAI({ apiKey, apiVersion: "v1beta" });

    try {
        console.log("Fetching available models from Google AI API...\n");

        // In @google/genai, listing models is done via the listModels method
        const models = await genAI.models.list();

        console.log("--- Available Models ---");
        models.forEach(model => {
            console.log(`- ID: ${model.name}`);
            console.log(`  Display Name: ${model.displayName}`);
            console.log(`  Description: ${model.description}`);
            console.log('-------------------------');
        });

    } catch (error) {
        console.error("Error fetching models:", error);
        if (error.message.includes("is not a function")) {
            console.log("\nIt seems 'genAI.models.list' is not directly available in this version of the SDK.");
            console.log("Trying alternative fetch approach...");

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
                const data = await response.json();
                if (data.models) {
                    data.models.forEach(model => {
                        console.log(`- ID: ${model.name}`);
                        console.log(`  Display Name: ${model.displayName}`);
                        console.log('-------------------------');
                    });
                } else {
                    console.log("No models returned:", data);
                }
            } catch (fetchError) {
                console.error("Fetch failed too:", fetchError);
            }
        }
    }
}

listModels();
