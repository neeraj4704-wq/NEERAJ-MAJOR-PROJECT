import fetch from 'node-fetch'; // You might need to run: npm install node-fetch
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize AI (Paste your Google AI Studio key inside the quotes below)
const genAI = new GoogleGenerativeAI('AIzaSyC9LA3t87NG7XCsVi8MrqU-QdHePZpWfik');

app.post('/api/generate-diet', async (req, res) => {
    const { budget, protein, cals, meals, type } = req.body;

   // The Advanced Prompt Engine: Forcing real math, exact quantities, and itemized recipes
    // The "Strict Math" Prompt Engine
   // Optimized Prompt Engine: Faster math, distinct image prompts
    const prompt = `
        Act as a highly precise fitness nutritionist based in Ludhiana. 
        Create a 1-day meal plan consisting of exactly ${meals} meals.
        
        STRICT NUMERICAL GOALS:
        - Target Budget: exactly ₹${budget}.
        - Target Daily Calories: exactly ${cals} kcal.
        - Target Daily Protein: exactly ${protein}g. (DO NOT go over).
        - Diet Preference: ${type}.
        - Mandatory: You MUST include 300gm curd and 5 whole eggs today. NO apples/chickpeas.

        CRITICAL INSTRUCTIONS:
        1. SPEED & MATH: Use whole numbers. No decimals (e.g., use 170g, not 169.44g). Balance macros using zero-protein foods like Ghee/Butter if needed.
        2. EXACT QUANTITIES: The "name" must state quantities (e.g., "4 Boiled Eggs, 2 Rotis").
        3. IMAGE PROMPT: Provide a very short, generic 3-4 word "imagePrompt" describing the meal visually (e.g., "paneer bhurji", "chicken curry rice"). 

        Return ONLY a valid JSON array. Format strictly like this:
        [
            { 
              "name": "Exact quantity and name",
              "imagePrompt": "short visual description", 
              "protein": 24, 
              "cost": 31, 
              "cals": 280, 
              "timeLabel": "Breakfast",
              "items": ["4 whole eggs", "2 medium rotis"],
              "instructions": "Cook eggs. Serve with rotis."
            }
        ]
    `;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        let responseText = result.response.text();
        
        responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const dietPlan = JSON.parse(responseText);
        
        // ==========================================
        // THE PEXELS REAL-PHOTO INTEGRATION
        // ==========================================
        const PEXELS_API_KEY = 'iU5cDLfAdlI9UpZUeJNieuAIU3kSAoSpOHPGeGnUH2PqrMQP09h4HB1O';

        // Loop through the AI meals and fetch a real photo for each one
        for (let meal of dietPlan) {
            try {
                // We use the short 'imagePrompt' the AI generated to search Pexels
                const pexelsResponse = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(meal.imagePrompt)}&per_page=1`, {
                    headers: { Authorization: PEXELS_API_KEY }
                });
                const pexelsData = await pexelsResponse.json();
                
                // If Pexels finds a photo, attach it to the meal!
                if (pexelsData.photos && pexelsData.photos.length > 0) {
                    meal.displayImg = pexelsData.photos[0].src.landscape; 
                } else {
                    // Fallback if Pexels somehow doesn't have the food
                    meal.displayImg = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop"; 
                }
            } catch (err) {
                console.error("Pexels failed, using fallback:", err.message);
                meal.displayImg = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop";
            }
        }
        
        // Send the completed AI Diet + Real Photos back to the website
        res.json(dietPlan);

    } catch (error) {
        console.error("AI Generation Error:", error);
        res.status(500).json({ error: "Failed to connect to the AI brain." });
    }
});

// ROCK-SOLID SERVER ENGINE
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`✅ Macro Master AI Brain is successfully running on port ${PORT}.`);
    console.log(`⚠️  DO NOT press any keys! Leave this window open in the background.`);
});

// This will catch any silent errors and print them in red
server.on('error', (error) => {
    console.error('❌ SERVER CRASHED:', error.message);
});