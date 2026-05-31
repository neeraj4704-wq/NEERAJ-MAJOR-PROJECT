
const database = [
    // --- VEG MEALS (High Protein / Traditional) ---
    {
        name: "High-Protein Curd Power Meal",
        type: "veg",
        cals: 550, protein: 28, cost: 65,
        displayImg: "https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "A heavy, refreshing meal. Mix seeds directly into the curd.",
        items: ["300g fresh curd", "2 whole wheat roti", "1 large banana", "10g mixed chia/flax seeds"]
    },
    {
        name: "Classic Paneer Tikka Bowl",
        type: "veg",
        cals: 620, protein: 35, cost: 120,
        displayImg: "https://images.pexels.com/photos/2411409/pexels-photo-2411409.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Lightly pan-fry paneer cubes in 5g butter. Serve with rice and fresh salad.",
        items: ["150g low-fat paneer", "150g white cooked rice", "Cucumber and onion salad", "Mint chutney"]
    },
    {
        name: "Soya Chunk Power Stir-fry",
        type: "veg",
        cals: 480, protein: 52, cost: 45,
        displayImg: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Boil soya chunks, squeeze out water, and stir fry with vegetables and spices.",
        items: ["100g raw soya chunks", "100g mixed bell peppers", "1 tbsp olive oil", "Side of 100g plain yogurt"]
    },
    {
        name: "Palak Paneer & Brown Rice",
        type: "veg",
        cals: 510, protein: 22, cost: 110,
        displayImg: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Puree spinach with minimal oil. Mix in paneer cubes and serve hot with brown rice.",
        items: ["100g paneer", "200g spinach puree", "100g cooked brown rice", "Garlic and local spices"]
    },
    {
        name: "Sprouted Moong Dal Salad",
        type: "veg",
        cals: 340, protein: 18, cost: 30,
        displayImg: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Mix boiled sprouts with chopped tomatoes, onions, green chilies, and a squeeze of lemon.",
        items: ["150g sprouted green gram (moong)", "1/2 tomato & onion", "1/2 lemon juice", "Pink salt & chaat masala"]
    },

    // --- NON-VEG MEALS (Lean Meats & Eggs) ---
    {
        name: "Triple Egg & Roti Scramble",
        type: "non-veg",
        cals: 670, protein: 35, cost: 50,
        displayImg: "https://images.pexels.com/photos/9407171/pexels-photo-9407171.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Scramble the eggs with local spices. Serve hot with lightly ghee-smeared roti.",
        items: ["3 whole large eggs", "2 medium whole wheat roti", "10g pure ghee"]
    },
    {
        name: "Grilled Chicken Breast & Rice",
        type: "non-veg",
        cals: 580, protein: 55, cost: 140,
        displayImg: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Marinate chicken in lemon and garlic. Grill on medium heat. Serve with boiled rice.",
        items: ["200g raw chicken breast", "150g cooked basmati rice", "Handful of boiled broccoli"]
    },
    {
        name: "Double Omelette Oatmeal",
        type: "non-veg",
        cals: 520, protein: 32, cost: 70,
        displayImg: "https://images.pexels.com/photos/216951/pexels-photo-216951.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Cook oats with milk. Make a side omelette for a massive protein boost.",
        items: ["60g rolled oats", "200ml skimmed milk", "2 whole eggs (omelette)"]
    },
    {
        name: "Lemon Herb Fish Filet",
        type: "non-veg",
        cals: 410, protein: 45, cost: 180,
        displayImg: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Pan-sear white fish (like Basa or Tilapia) with lemon juice and serve with a side salad.",
        items: ["200g white fish filet", "1 tbsp olive oil", "Lemon wedges", "Mixed green salad"]
    },
    {
        name: "Chicken Keema Matar & Roti",
        type: "non-veg",
        cals: 590, protein: 48, cost: 130,
        displayImg: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Cook minced chicken with green peas and dry spices. Serve with dry roasted rotis.",
        items: ["150g minced chicken breast", "50g green peas", "2 whole wheat roti", "Ginger-garlic paste"]
    },

    // --- VEGAN / LIGHT SNACKS (Plant-Based) ---
    {
        name: "Peanut Butter Banana Oats",
        type: "vegan",
        cals: 450, protein: 15, cost: 40,
        displayImg: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Mix oats with warm water or almond milk. Top with sliced banana and peanut butter.",
        items: ["50g rolled oats", "1 large banana", "1.5 tbsp natural peanut butter"]
    },
    {
        name: "Berry Protein Smoothie",
        type: "vegan",
        cals: 320, protein: 25, cost: 90,
        displayImg: "https://images.pexels.com/photos/847266/pexels-photo-847266.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Blend all ingredients with ice until perfectly smooth.",
        items: ["1 scoop plant-based protein powder", "100g mixed frozen berries", "200ml almond milk", "Ice cubes"]
    },
    {
        name: "Roasted Chickpea & Sweet Potato Bowl",
        type: "vegan",
        cals: 460, protein: 18, cost: 80,
        displayImg: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Toss chickpeas and diced sweet potato in olive oil and paprika. Roast until crispy.",
        items: ["150g boiled chickpeas (chana)", "1 medium sweet potato", "1 tbsp olive oil", "Paprika & salt"]
    },
    {
        name: "Tofu Scramble Toast",
        type: "vegan",
        cals: 380, protein: 20, cost: 85,
        displayImg: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Crumble firm tofu and cook with turmeric (for color) and spices. Serve over toasted bread.",
        items: ["100g firm tofu", "2 slices whole grain bread", "Pinch of turmeric", "Black pepper"]
    },
    {
        name: "Overnight Chia Pudding",
        type: "vegan",
        cals: 290, protein: 10, cost: 60,
        displayImg: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=800",
        instructions: "Mix chia seeds in almond milk and let sit in the fridge overnight. Top with nuts before eating.",
        items: ["3 tbsp chia seeds", "200ml almond milk", "10g crushed almonds", "Drop of vanilla extract"]
    }
];
let currentGeneratedMeals = [];

// ==========================================
// 2. INITIALIZATION & NAVIGATION
// ==========================================
window.onload = () => {
    document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' });
    
    // Load Dashboard Macros
    if(localStorage.getItem('mm_budget')) {
        document.getElementById('inp-budget').value = localStorage.getItem('mm_budget');
        document.getElementById('inp-protein').value = localStorage.getItem('mm_protein');
        document.getElementById('inp-cals').value = localStorage.getItem('mm_cals') || 2000;
        updateDashboard(localStorage.getItem('mm_budget'), localStorage.getItem('mm_protein'), localStorage.getItem('mm_cals') || 0);
    }

    // NEW: Load Hydration State
    if(localStorage.getItem('mm_currentWater')) {
        currentWater = parseInt(localStorage.getItem('mm_currentWater'));
    }
    if(localStorage.getItem('mm_maxWater')) {
        maxWater = parseInt(localStorage.getItem('mm_maxWater'));
        document.getElementById('water-max-input').value = maxWater;
    }
    
    refreshWaterUI(); // Draw the water bar on load!
};

function switchSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    event.currentTarget.classList.add('active');
    
    const titles = { 'dashboard': 'Dashboard Overview', 'planner': 'AI Diet Planner', 'grocery': 'Smart Grocery List', 'calculator': 'Metabolic Calculator' };
    document.getElementById('page-title').innerText = titles[sectionId];
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

// Auto-close sidebar on mobile after clicking a link
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if(window.innerWidth <= 900) document.querySelector('.sidebar').classList.remove('active');
    });
});

// ==========================================
// 3. AI DIET GENERATION (With Fallback)
// ==========================================
async function generateDiet() {
    const budget = parseFloat(document.getElementById('inp-budget').value);
    const protein = parseFloat(document.getElementById('inp-protein').value);
    const cals = parseFloat(document.getElementById('inp-cals').value);
    const type = document.getElementById('inp-type').value;
    const mealCount = parseInt(document.getElementById('inp-meals').value);

    if (!budget || !protein || !cals) {
        showToast("Please enter Budget, Calories, and Protein goals!", "error");
        return;
    }

    const container = document.getElementById('diet-results');
    container.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
            <i class="fas fa-circle-notch fa-spin" style="color: var(--primary); font-size: 2.5rem; margin-bottom: 15px;"></i>
            <p style="color: var(--primary); font-weight: 600;">Macro Master AI is analyzing local prices and designing your optimal diet...</p>
        </div>
    `;

   try {
    // Ping the Backend AI Server
    const response = await fetch('/api/generate-diet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ budget, protein, cals, meals: mealCount, type })
    });

    if(!response.ok) throw new Error("AI Server Error");
    const aiDietPlan = await response.json();

    processAndRenderMeals(aiDietPlan, budget, protein, cals);
    showToast("AI Protocol Complete. Diet Generated.", "success");

    // ==========================================
    // NEW: SEND TO FIREBASE DATABASE
    // ==========================================
    if (window.saveDietToDatabase) {
        window.saveDietToDatabase(aiDietPlan); // <-- Notice we use aiDietPlan here!
    }

} catch (error) {
        console.error("AI failed, switching to local database:", error);
        showToast("AI is resting. Using offline local database.", "error");
        
        // --- FALLBACK LOGIC ---
        const maxCostPerMeal = budget / mealCount; 
        let offlineMeals = database.filter(m => (type === 'all' || m.type === type) && m.cost <= maxCostPerMeal);
        
        if(offlineMeals.length === 0) offlineMeals = [database[0], database[1]]; // Ultimate failsafe
        
        const scheduleNames = {
            3: ["Breakfast", "Lunch", "Dinner"],
            4: ["Breakfast", "Lunch", "Pre-Workout", "Dinner"],
            5: ["Breakfast", "Snack", "Lunch", "Pre-Workout", "Dinner"]
        };
        const dailySchedule = scheduleNames[mealCount];

        let finalOfflinePlan = [];
        for(let i = 0; i < mealCount; i++) {
            finalOfflinePlan.push({ 
                ...offlineMeals[i % offlineMeals.length], 
                timeLabel: dailySchedule[i] 
            });
        }
        processAndRenderMeals(finalOfflinePlan, budget, protein, cals, true);
    }
}

function processAndRenderMeals(meals, budget, proteinTarget, calsTarget, isOffline = false) {
    let totalCost = 0, totalPro = 0, totalCals = 0;
    
    meals.forEach(meal => {
        totalCost += meal.cost;
        totalPro += meal.protein;
        totalCals += meal.cals;
    });

    renderAIMeals(meals, isOffline);
    generateGroceryList(meals);
    updateDashboard(totalCost, totalPro, totalCals);
    
    // Update AI Insight Dashboard if it exists
    const insightBox = document.getElementById('ai-insight-text');
    if(insightBox) {
        insightBox.innerHTML = `Based on your generation, I packed <strong>${totalPro}g</strong> of protein into a ₹<strong>${totalCost}</strong> budget. Your cost-efficiency ratio is excellent today!`;
    }
localStorage.setItem('mm_budget', budget);
    localStorage.setItem('mm_protein', proteinTarget);
    localStorage.setItem('mm_cals', calsTarget);

    // NEW: Save macros to the cloud
    syncDataToCloud({
        budget: budget,
        protein: proteinTarget,
        cals: calsTarget
    });
}

function renderAIMeals(meals) {
    currentGeneratedMeals = meals; 
    
    const container = document.getElementById('diet-results');
    container.innerHTML = "";

    meals.forEach((meal, index) => {
        // The backend now provides a flawless, real photo via meal.displayImg!
        const imageUrl = meal.displayImg; 

        container.innerHTML += `
            <div class="meal-card" onclick="openMealModal(${index})">
                <div class="meal-time-badge"><i class="fas fa-clock"></i> ${meal.timeLabel || 'Meal'}</div>
                
                <img src="${imageUrl}" alt="${meal.name}" loading="lazy">
                
                <div class="meal-info">
                    <h3>${meal.name}</h3>
                    <div class="tag-container">
                        <span class="macro-tag pro"><i class="fas fa-bolt"></i> ${meal.protein}g</span>
                        <span class="macro-tag cost"><i class="fas fa-rupee-sign"></i> ₹${meal.cost}</span>
                        <span class="macro-tag"><i class="fas fa-fire"></i> ${meal.cals} kcal</span>
                    </div>
                </div>
            </div>
        `;
    });
}
        // ----------------------------

       
// ==========================================
// 4. SUPPORTING FUNCTIONS (Grocery, TDEE, UI)
// ==========================================
function generateGroceryList(meals) {
    const listContainer = document.getElementById('grocery-list');
    listContainer.innerHTML = "";
    
    let allItems = [];
    meals.forEach(meal => {
        if(meal.items) allItems.push(...meal.items);
        else allItems.push(meal.name); // Fallback for AI generated meals without strict item lists
    });
    
    let uniqueItems = [...new Set(allItems)];
    uniqueItems.forEach(item => {
        listContainer.innerHTML += `<li><input type="checkbox" id="${item}"><label for="${item}">${item}</label></li>`;
    });
}

function updateDashboard(cost, protein, cals) {
    document.getElementById('dash-budget').innerText = cost;
    document.getElementById('dash-protein').innerText = protein;
    document.getElementById('dash-cals').innerText = cals;

    const proDegrees = (protein / 200) * 360; 
    const budgetDegrees = (cost / 1000) * 360; 

    setTimeout(() => {
        const pRing = document.getElementById('protein-ring');
        const bRing = document.getElementById('budget-ring');
        if(pRing) pRing.style.setProperty('--perc', `${Math.min(proDegrees, 360)}deg`);
        if(bRing) bRing.style.setProperty('--perc', `${Math.min(budgetDegrees, 360)}deg`);
    }, 100);
}

function calculateTDEE() {
    const age = parseInt(document.getElementById('calc-age').value);
    const gender = document.getElementById('calc-gender').value;
    const weight = parseFloat(document.getElementById('calc-weight').value);
    const height = parseFloat(document.getElementById('calc-height').value);
    const activityMultiplier = parseFloat(document.getElementById('calc-activity').value);

    if (!age || !weight || !height) {
        showToast("Please fill in all your details accurately.", "error");
        return;
    }

    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    const tdee = Math.round(bmr * activityMultiplier);
    
    const cutCalories = tdee - 500; 
    const bulkCalories = tdee + 300; 
    const recommendedProtein = Math.round(weight * 2.2);

    const resultsDiv = document.getElementById('calc-results');
    resultsDiv.innerHTML = `
        <h3 style="text-align: center; margin-bottom: 1rem;">Your Metabolic Profile</h3>
        <p style="text-align: center; color: var(--text-muted);">Estimated BMR: ${Math.round(bmr)} kcal/day</p>
        
        <div class="goal-cards">
            <div class="goal-card cut">
                <h4>Fat Loss</h4><h2>${cutCalories}</h2><p>kcal / day</p>
                <button class="water-btn" style="width:100%; margin-top:10px;" onclick="importMacros(${cutCalories}, ${recommendedProtein})">Use For Diet</button>
            </div>
            <div class="goal-card maintenance">
                <h4>Maintenance</h4><h2>${tdee}</h2><p>kcal / day</p>
                <button class="water-btn" style="width:100%; margin-top:10px;" onclick="importMacros(${tdee}, ${recommendedProtein})">Use For Diet</button>
            </div>
            <div class="goal-card bulk">
                <h4>Lean Muscle Gain</h4><h2>${bulkCalories}</h2><p>kcal / day</p>
                <button class="water-btn" style="width:100%; margin-top:10px;" onclick="importMacros(${bulkCalories}, ${recommendedProtein})">Use For Diet</button>
            </div>
        </div>
        
        <div style="margin-top: 1.5rem; text-align: center; background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 12px; border: 1px dashed var(--primary);">
            <i class="fas fa-bolt" style="color: var(--primary);"></i> Recommended Protein Target: <strong>${recommendedProtein}g / day</strong>
        </div>
    `;
    resultsDiv.classList.remove('hidden');
    showToast("Metabolism analyzed successfully!", "success");
}

function importMacros(calories, protein) {
    document.getElementById('inp-cals').value = calories;
    document.getElementById('inp-protein').value = protein;
    switchSection('planner');
    showToast(`Imported ${calories} kcal and ${protein}g protein to your planner!`, "success");
}

function showToast(message, type) {
    const toastBox = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
    if(type === 'error') toast.style.borderLeftColor = '#ef4444'; 
    toastBox.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = "slideIn 0.3s ease reverse forwards";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


let currentWater = 0;
let maxWater = 8; 

window.updateMaxWater = function() {
    const inputElement = document.getElementById('water-max-input');
    maxWater = parseInt(inputElement.value) || 8; 
    if (maxWater < currentWater) { maxWater = currentWater; inputElement.value = maxWater; }
    
    localStorage.setItem('mm_maxWater', maxWater);
    refreshWaterUI();
    
    // NEW: Save max water to cloud
    syncDataToCloud({ maxWater: maxWater }); 
};

window.addWater = function() {
    if (currentWater < maxWater) {
        currentWater++;
        localStorage.setItem('mm_currentWater', currentWater);
        refreshWaterUI();
        
        // NEW: Save current water to cloud
        syncDataToCloud({ currentWater: currentWater });

        const fillBar = document.getElementById('water-fill');
        fillBar.style.filter = 'brightness(1.5)';
        setTimeout(() => { fillBar.style.filter = 'brightness(1)'; }, 200);
    } else {
        alert("Hydration core is at maximum capacity!");
    }
};

function refreshWaterUI() {
    document.getElementById('water-current').innerText = currentWater;
    const percentage = (currentWater / maxWater) * 100;
    const fillBar = document.getElementById('water-fill');
    if (fillBar) fillBar.style.width = percentage + '%';
}
// ==========================================
// 6. MEAL MODAL LOGIC
// ==========================================
function openMealModal(index) {
    const meal = currentGeneratedMeals[index];
    
    // Populate Modal Data
    document.getElementById('modal-img').src = meal.displayImg;
    document.getElementById('modal-title').innerText = meal.name;
    document.getElementById('modal-pro').innerText = meal.protein;
    document.getElementById('modal-cost').innerText = meal.cost;
    document.getElementById('modal-cals').innerText = meal.cals;

    // Populate Ingredients List
    const itemsContainer = document.getElementById('modal-items');
    itemsContainer.innerHTML = '';
    if (meal.items && meal.items.length > 0) {
        meal.items.forEach(item => {
            itemsContainer.innerHTML += `<li><i class="fas fa-check-circle"></i> ${item}</li>`;
        });
    } else {
        itemsContainer.innerHTML = `<li><i class="fas fa-info-circle"></i> Basic meal. See title for details.</li>`;
    }

    // Populate Instructions
    document.getElementById('modal-instructions').innerText = meal.instructions || "Enjoy your healthy meal!";

    // Show the modal
    const modal = document.getElementById('meal-modal');
    modal.classList.remove('hidden');
    // Small delay to allow CSS animation to trigger smoothly
    setTimeout(() => modal.classList.add('show'), 10); 
}

function closeModal() {
    const modal = document.getElementById('meal-modal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300); // Wait for fade out
}

// Close modal if user clicks the dark background outside the box
document.getElementById('meal-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
// ==========================================
// UI CLEANUP: THE GHOST TEXT SNIPER
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // Check every single H1 heading on the entire page
    document.querySelectorAll('h1').forEach(heading => {
        // If it finds the old hardcoded text, it completely deletes the HTML node
        if (heading.innerText.includes('Dashboard Overview')) {
            heading.remove();
            console.log("✅ Ghost text eliminated!");
        }
    });
});

// ==========================================
// SECURE LOGOUT LOGIC (FAILSAFE VERSION)
// ==========================================
function handleLogout() {
    console.log("Initiating secure logout...");

    // 1. Wipe ALL offline memory clean instantly
    localStorage.clear(); 

    // 2. Attempt to tell Firebase to end the session (Safely)
    try {
        if (typeof firebase !== 'undefined') {
            firebase.auth().signOut();
            console.log("Firebase session ended.");
        }
    } catch (error) {
        console.error("Firebase signout skipped:", error);
    }

    // 3. GUARANTEED REDIRECT
    // Note: Ensure your login page is actually named "login.html"! 
    // If it is named something else (like "index.html" or "signin.html"), change it below.
    window.location.replace("login.html"); 
}
// ==========================================
// CLOUD SYNC: SAVE DATA TO FIREBASE
// ==========================================
function syncDataToCloud(dataObject) {
    const user = firebase.auth().currentUser;
    // Only save if a user is actually logged in
    if (user) {
        // We use { merge: true } so we don't accidentally delete other saved data
        firebase.firestore().collection('users').doc(user.uid).set(dataObject, { merge: true })
            .then(() => console.log("☁️ Data synced to cloud!"))
            .catch((error) => console.error("Cloud sync failed:", error));
    }
}
// ==========================================
// CLOUD SYNC: LOAD DATA ON LOGIN
// ==========================================
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User detected. Fetching cloud profile...");
        
        firebase.firestore().collection('users').doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                const cloudData = doc.data();
                
                // 1. Restore Macros
                if (cloudData.budget) {
                    document.getElementById('inp-budget').value = cloudData.budget;
                    document.getElementById('inp-protein').value = cloudData.protein;
                    document.getElementById('inp-cals').value = cloudData.cals;
                    updateDashboard(cloudData.budget, cloudData.protein, cloudData.cals);
                    
                    // Put it back in local storage for speed
                    localStorage.setItem('mm_budget', cloudData.budget);
                    localStorage.setItem('mm_protein', cloudData.protein);
                    localStorage.setItem('mm_cals', cloudData.cals);
                }

                // 2. Restore Water
                if (cloudData.currentWater !== undefined) {
                    currentWater = cloudData.currentWater;
                    maxWater = cloudData.maxWater || 8;
                    document.getElementById('water-max-input').value = maxWater;
                    
                    localStorage.setItem('mm_currentWater', currentWater);
                    localStorage.setItem('mm_maxWater', maxWater);
                    
                    refreshWaterUI();
                }
            } else {
                console.log("Brand new user! Dashboard stays clean.");
            }
        }).catch((error) => {
            console.error("Error fetching cloud data:", error);
        });
    }
});