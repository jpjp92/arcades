
import fs from 'fs';

async function listModels() {
    let apiKey = '';
    try {
        const envData = fs.readFileSync('.env.local', 'utf8');
        const match = envData.match(/GEMINI_API_KEY=["']?([^"'\s]+)["']?/);
        if (match) apiKey = match[1];
    } catch (e) {
        console.error("Could not read .env.local");
        return;
    }

    if (!apiKey) {
        console.error("API Key not found");
        return;
    }

    console.log("Fetching available models via fetch API (v1beta)...\n");

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        if (data.models) {
            console.log("--- Real Available Models ---");
            data.models.forEach(model => {
                // model.name is usually "models/gemini-1.5-flash"
                const shortName = model.name.replace('models/', '');
                console.log(`- ID: ${shortName}`);
                console.log(`  Display Name: ${model.displayName}`);
                console.log('-------------------------');
            });
        } else {
            console.log("Error in response:", JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

listModels();
