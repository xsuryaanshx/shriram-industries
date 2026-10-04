# ROAST & BOTANICA · INDORE
> **Specialty Coffee Roastery, Sourdough Bakehouse & Greenhouse Bistro**  
> *Plot 14-B, PU-4 Commercial, Behind C21 Mall, Scheme 54, Vijay Nagar, Indore · Madhya Pradesh*

---

## 🌿 Vision & Concept

**ROAST & BOTANICA** is an out-of-distribution, high-craft web experience designed for Central India's benchmark third-wave coffee micro-roastery and botanical conservatory.

Unlike typical generic AI-generated templates with clichéd purple cards and stock buzzwords, this project was designed from the ground up to embody the **taste, culture, and sensory palate of Indore**:
- **Malwa Culinary Fusion**: Pairing world-class single-estate coffee (Ratnagiri, Bababudangiri, Araku) with artisanal Indore flavor profiles like *Sev-Chilli Whipped Sourdough Tartines*, *Malwa Cardamom & Saffron Cortados*, and *Organic Cascara & Gondhoraj Lemon Tonics*.
- **Dietary Consciousness**: Dedicated kitchen workflows and UI filters for **Jain-friendly**, **100% Vegetarian**, and **Vegan** preparations with zero cross-contamination.
- **Biophilic Conservatory Architecture**: High-ceiling glasshouse design, live indoor ficus trees, Kota stone counters, and Synesso MVP Hydra espresso machinery.

---

## 🚀 Key Interactive Full-Stack Features

1. **Synthesized Web Audio Atmosphere Engine**:
   - Generates authentic vinyl crackle, pink-noise room resonance, and warm acoustic cafe atmosphere using the HTML5 **Web Audio API**.
   - Zero external audio files or streaming bandwidth needed; works completely offline.
   - Harmonic pentatonic bell chime upon extraction completion.

2. **Reactive Sensory Menu & Tasting Tray**:
   - Filter by categories: Single-Origin Pour-Overs, Espresso & Signatures, Sourdough & Brunch, Bakehouse, Cold Brews & Tonics.
   - Multi-diet filtering: *Jain Friendly*, *100% Vegetarian*, *Vegan*, *Gluten-Free*.
   - Origin Detail Modal with SCA cup scores, elevation, farmer families, and pairing recommendations.
   - Slide-over **Tasting Tray** with dynamic item tally, barista milk customizer (+₹45 for Oat/Almond, +₹35 for Soy, Whole Country Milk, Black), and **1-click WhatsApp order generator**.

3. **Interactive Coffee Matchmaker ("Find Your Perfect Indore Cup")**:
   - 3-step sensory quiz matching the guest's palate (brew preference, flavor family, and cafe occasion) to the exact micro-lot.
   - Direct integration to add the recommendation straight to the Tasting Tray.

4. **Interactive Barista Extraction Timer**:
   - Realistic step-by-step extraction guides for **Hario V60 Pour-Over**, **Aeropress Inverted**, **Synesso 9-Bar Espresso**, and **Kyoto Cold Drip**.
   - Live circular SVG progress animation, millisecond digital clock, and bloom/pour phase tracking.

5. **Conservatory Table Reservation Engine**:
   - Zone selection: *The Glasshouse Conservatory*, *The Roaster's Tasting Bar*, *The Foliage Verandah (Pet Friendly)*, *The Library Mezzanine (Co-working)*.
   - Generates formatted WhatsApp confirmation payload directly to the cafe concierge desk.

6. **Indore Landmark Travel Time Calculator**:
   - Real-time driving estimates and directions from Vijay Nagar Square, C21 Mall, Chappan Dukan, Old Palasia, and Indore Airport.

7. **Dual-Theme Design System ("Espresso Roast" & "Oat Crema")**:
   - Dark luxe espresso beam aesthetic (`[data-theme="roast"]`) and sunlit botanical oat milk crema mode (`[data-theme="crema"]`) with persistent `localStorage` preference.

---

## 🛠️ Tech Stack & Architecture

- **Structure**: Semantic HTML5 with microdata and Schema.org `CafeOrCoffeeShop` JSON-LD for rich Google Search indexing.
- **Styling**: Pure Modern CSS with CSS custom property tokens, fluid typography clamps, cubic-bezier spring physics, and CSS Grid layouts.
- **Logic**: Vanilla ES Modules JavaScript with modular state management and zero external framework bloat.
- **Typography**: 
  - Headlines: *Cormorant Garamond* (Editorial serif)
  - Interface & Body: *Plus Jakarta Sans*
  - Metrics & Telemetry: *JetBrains Mono*

---

## 🏃‍♂️ How to Run Locally

```bash
# Navigate to the cafe directory
cd /Users/shubhu-chaan/Documents/Website_Suite/roast-and-botanica-indore

# Serve with any static server:
python3 -m http.server 8088
# OR
npx serve . -p 8088
```

Open your browser at: **`http://localhost:8088/`**
