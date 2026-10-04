/**
 * ROAST & BOTANICA · INDORE
 * Senior Full-Stack Frontend Design Engineering Engine
 * Features:
 * - Reactive Sensory Menu with Dietary Multi-Filtering
 * - Interactive Tasting Tray Cart with Milk Customization & WhatsApp Payload
 * - Interactive Coffee Matchmaker Sensory Quiz Engine
 * - Interactive Barista Extraction Timer with SVG Progress & Web Audio Chimes
 * - Web Audio API Ambient Atmosphere Sound Synthesizer (Zero External MP3s)
 * - Table Reservation Engine with Direct WhatsApp Protocol
 * - Indore Landmark Proximity Calculator
 * - Espresso Roast / Oat Crema Theme Switcher with LocalStorage Persistence
 */

// -------------------------------------------------------------
// 1. DATA: THE SENSORY MENU REPERTOIRE
// -------------------------------------------------------------
const MENU_DATABASE = [
  // --- POUR OVERS ---
  {
    id: 'roast-01',
    name: 'Ratnagiri Estate Honey Sun-Dried',
    hindi: 'रत्नगिरि एस्टेट हनी प्रोसेस्ड',
    category: 'pourover',
    price: 320,
    origin: 'Bababudangiri, Chikmagalur · 1,450m MSL',
    sca: '89.5',
    notes: ['Bergamot Blossom', 'White Peach', 'Wild Honeycomb'],
    desc: 'Central India favorite. Naturally processed with coffee mucilage intact under gentle shade canopy. Produces a cup with extraordinary floral aroma and silky lingering sweetness.',
    diet: ['jain', 'veg', 'vegan', 'gluten-free'],
    roastLevel: 'Light-Medium',
    process: 'Pulp Sun-Dried Honey',
    pairing: 'Pistachio Rosewater Babka'
  },
  {
    id: 'roast-02',
    name: 'Kerehaklu Washed Red Bourbon',
    hindi: 'केरेहकलू वाश्ड रेड बॉर्बन',
    category: 'pourover',
    price: 310,
    origin: 'Aldur, Western Ghats · 1,380m MSL',
    sca: '88.5',
    notes: ['Green Apple', 'Lemongrass', 'Cane Sugar'],
    desc: 'Double-washed micro-lot using crisp mountain spring water. Crisp malic acidity that cuts cleanly across the palate with sweet lemongrass tea finishes.',
    diet: ['jain', 'veg', 'vegan', 'gluten-free'],
    roastLevel: 'Light',
    process: 'Double Washed',
    pairing: 'Avocado Sourdough Tartine'
  },
  {
    id: 'roast-03',
    name: 'Araku Valley Anaerobic Ferment',
    hindi: 'अराकू वैली अनाएरोबिक फर्मेंट',
    category: 'pourover',
    price: 340,
    origin: 'Eastern Ghats, Andhra · 1,200m MSL',
    sca: '90.0',
    notes: ['Dark Plum', 'Port Wine', 'Cacao Nibs'],
    desc: 'Fermented for 96 hours in pressurized stainless steel tanks with wild yeasts. Exceptionally complex with deep winey notes, wild black cherry, and cocoa butter.',
    diet: ['jain', 'veg', 'vegan', 'gluten-free'],
    roastLevel: 'Medium-Light',
    process: '96h Anaerobic Natural',
    pairing: 'Belgian Dark Chocolate Croissant'
  },

  // --- ESPRESSO & SIGNATURES ---
  {
    id: 'esp-01',
    name: 'Indore Malwa Cardamom & Saffron Cortado',
    hindi: 'मालवा केसर-इलायची कोरताडो',
    category: 'espresso',
    price: 260,
    origin: 'House Espresso Blend (Ratnagiri + Attikan)',
    sca: '88.0',
    notes: ['Green Cardamom', 'Kashmiri Saffron', 'Velvety Micro-foam'],
    desc: 'A tribute to Indore’s royal sweet traditions. 1:1 ratio of double ristretto espresso and steamed country milk infused with freshly crushed Malwa green cardamom and a saffron strand.',
    diet: ['jain', 'veg', 'gluten-free'],
    roastLevel: 'Medium',
    process: 'Infused Double Shot',
    pairing: 'Cardamom Crème Brûlée Tart'
  },
  {
    id: 'esp-02',
    name: 'Synesso MVP Flat White',
    hindi: 'सिनेसो डबल रिस्ट्रेटो फ्लैट व्हाइट',
    category: 'espresso',
    price: 240,
    origin: 'Attikan Estate Washed Arabica',
    sca: '87.5',
    notes: ['Roasted Hazelnut', 'Salted Caramel', 'Silky Crema'],
    desc: 'Pulled on our 9-bar pressure-profiled Synesso MVP Hydra. Served at exactly 65°C with silky micro-foam that highlights natural milk sweetness without added sugar.',
    diet: ['jain', 'veg', 'gluten-free'],
    roastLevel: 'Medium-Dark',
    process: 'Barista Micro-foam',
    pairing: 'Almond Croissant'
  },
  {
    id: 'esp-03',
    name: 'Botanical Madagascar Vanilla Bean Latte',
    hindi: 'मेडागास्कर वैनिला लट्टे',
    category: 'espresso',
    price: 275,
    origin: 'House Espresso Blend',
    sca: '87.0',
    notes: ['Organic Vanilla Caviar', 'Brown Butter', 'Toffee'],
    desc: 'Real organic vanilla bean paste steeped into steamed milk with a velvet double shot. Zero artificial corn syrups or synthetic flavours.',
    diet: ['jain', 'veg', 'gluten-free'],
    roastLevel: 'Medium',
    process: 'Natural Vanilla Infusion',
    pairing: 'Raspberry Financier'
  },

  // --- SOURDOUGH & BRUNCH ---
  {
    id: 'sour-01',
    name: 'Sev-Chilli Whipped Ricotta Sourdough Tartine',
    hindi: 'सेव-मिर्च व्हीप्ड रिकोटा खमीर ब्रेड टार्टिन',
    category: 'sourdough',
    price: 360,
    origin: '48h Ferment Stoneground Flour',
    sca: 'Chef Special',
    notes: ['Crispy Ujjaini Sev', 'Whipped Ricotta', 'Charred Green Chilli Oil'],
    desc: 'Indore meets Parisian bistro. Thick toasted slice of 48-hour wild sourdough slathered with whipped mountain ricotta, seasoned with cold-pressed Bhavnagri chilli oil, and dusted with artisan crispy spiced sev.',
    diet: ['jain', 'veg'],
    roastLevel: 'N/A',
    process: 'Wood-Fired Toast',
    pairing: 'Ratnagiri Honey Pour-Over'
  },
  {
    id: 'sour-02',
    name: 'Hass Avocado & Pomegranate Sourdough',
    hindi: 'हास्स एवोकाडो एवं अनार खमीर टोस्ट',
    category: 'sourdough',
    price: 395,
    origin: '48h Wild Sourdough Boule',
    sca: 'Chef Special',
    notes: ['Fresh Hass Avocado', 'Sun-Dried Tomato', 'Pomegranate Pearls', 'Microgreens'],
    desc: 'Chunky seasoned avocado, toasted pumpkin seeds, tangy pomegranate rubies, and cold-pressed extra virgin olive oil on toasted country sourdough.',
    diet: ['jain', 'veg', 'vegan'],
    roastLevel: 'N/A',
    process: 'Artisanal Toast',
    pairing: 'Cold Drip Tonic'
  },
  {
    id: 'sour-03',
    name: 'Smoked Malwa Cottage Cheese Sourdough',
    hindi: 'स्मोक्ड मालवा पनीर खमीर सैंडविच',
    category: 'sourdough',
    price: 375,
    origin: 'Organic Stoneground Sourdough',
    sca: 'Chef Special',
    notes: ['Smoked Fresh Paneer', 'Wild Basil Pesto', 'Heirloom Tomatoes'],
    desc: 'Indore-style fresh cottage cheese smoked gently over applewood chips, paired with house pine-nut basil pesto and roasted bell peppers between crusty sourdough.',
    diet: ['jain', 'veg'],
    roastLevel: 'N/A',
    process: 'Wood Smoked',
    pairing: 'Synesso MVP Flat White'
  },
  {
    id: 'sour-04',
    name: 'Shahi Saffron Brioche French Toast',
    hindi: 'शाही केसर ब्रियोश फ्रेंच टोस्ट',
    category: 'sourdough',
    price: 385,
    origin: 'French Butter Brioche Loaf',
    sca: 'Chef Special',
    notes: ['Caramelized Figs', 'Saffron Mascarpone', 'Pure Maple'],
    desc: 'Thick cut house-baked buttery brioche soaked in spiced saffron custard, griddled golden in French butter, topped with mission figs and whipped mascarpone.',
    diet: ['veg'],
    roastLevel: 'N/A',
    process: 'Pan-Griddled Brioche',
    pairing: 'Araku Valley Pour-Over'
  },

  // --- ARTISANAL BAKEHOUSE ---
  {
    id: 'bake-01',
    name: 'Roasted Pistachio & Rosewater Babka',
    hindi: 'पिस्ता एवं गुलाब जल बाबका',
    category: 'bakery',
    price: 240,
    origin: 'In-House Bakehouse Vijay Nagar',
    sca: 'Pastry Craft',
    notes: ['Iranian Pistachios', 'Organic Rose Damascena', 'Flaky Brioche'],
    desc: 'Twisted brioche swirl layered with stone-ground roasted green pistachios, pure cardamom, and organic Kannauj rosewater syrup.',
    diet: ['jain', 'veg'],
    roastLevel: 'N/A',
    process: 'Slow Ferment Bake',
    pairing: 'Ratnagiri Estate Pour-Over'
  },
  {
    id: 'bake-02',
    name: '70% Single-Estate Dark Chocolate Croissant',
    hindi: 'डार्क चॉकलेट क्रोइसैन',
    category: 'bakery',
    price: 220,
    origin: 'French Normandy Butter Laminate',
    sca: 'Pastry Craft',
    notes: ['70% Idukki Single-Estate Cacao', 'Honeycombed Layers'],
    desc: '27 laminated micro-layers of French butter pastry wrapping two batons of bean-to-bar dark chocolate from Kerala. Baked fresh every morning at 7:30 AM.',
    diet: ['veg'],
    roastLevel: 'N/A',
    process: '72h Laminated Dough',
    pairing: 'Flat White'
  },
  {
    id: 'bake-03',
    name: 'Eggless Raspberry & Almond Financier',
    hindi: 'रास्पबेरी एवं बादाम फिनांसियर',
    category: 'bakery',
    price: 195,
    origin: 'In-House Bakehouse',
    sca: 'Pastry Craft',
    notes: ['California Almond Flour', 'Fresh Tart Raspberry'],
    desc: 'Delicate French tea cake made with brown butter and roasted almond flour, crowned with a tart fresh raspberry jewel. 100% vegetarian & eggless.',
    diet: ['jain', 'veg'],
    roastLevel: 'N/A',
    process: 'Petite Four Bake',
    pairing: 'Cortado'
  },

  // --- COLD BREWS & TONICS ---
  {
    id: 'cool-01',
    name: 'Kyoto 18-Hour Cold Drip Tower Elixir',
    hindi: 'क्योतो १८-घंटे कोल्ड ड्रिप अमृत',
    category: 'coolers',
    price: 290,
    origin: 'Kalledevarapura Estate Micro-lot',
    sca: '89.0',
    notes: ['Whiskey Barrel', 'Blackberry', 'Dutch Cocoa'],
    desc: 'Extracted drop by cold drop over 18 hours through a Japanese blown-glass architectural tower. Concentrated, liqueur-like sweetness with zero bitterness.',
    diet: ['jain', 'veg', 'vegan', 'gluten-free'],
    roastLevel: 'Medium',
    process: 'Slow Cold Drip',
    pairing: 'Dark Chocolate Croissant'
  },
  {
    id: 'cool-02',
    name: 'Gondhoraj Lime & Botanical Espresso Tonic',
    hindi: 'गोंधोराज नीम्बू एस्प्रेसो टॉनिक',
    category: 'coolers',
    price: 280,
    origin: 'House Espresso + Indian Craft Tonic',
    sca: '88.0',
    notes: ['Aromatic Gondhoraj Lime', 'Quinine Tonic', 'Crema Float'],
    desc: 'Crisp Indian craft tonic water poured over clear ice, layered with double espresso and aromatic zest of fragrant Bengal Gondhoraj lemon.',
    diet: ['jain', 'veg', 'vegan', 'gluten-free'],
    roastLevel: 'Light-Medium',
    process: 'Layered Tonic',
    pairing: 'Smoked Paneer Tartine'
  },
  {
    id: 'cool-03',
    name: 'Organic Cascara & Rose Iced Fizz',
    hindi: 'ऑर्गेनिक कास्करा एवं गुलाब आइस्ड फिज़',
    category: 'coolers',
    price: 250,
    origin: 'Sun-dried Arabica Coffee Cherry Husks',
    sca: 'Coffee Fruit Tea',
    notes: ['Dried Hibiscus', 'Rosehips', 'Sparkling Mineral Water'],
    desc: 'Brewed from the antioxidant-rich dried fruit skins of coffee cherries, steeped with rosehips and sparkling soda. Low caffeine, highly uplifting.',
    diet: ['jain', 'veg', 'vegan', 'gluten-free'],
    roastLevel: 'Sun-Dried Fruit',
    process: 'Sparkling Infusion',
    pairing: 'Raspberry Financier'
  }
];

// -------------------------------------------------------------
// 2. STATE MANAGEMENT
// -------------------------------------------------------------
const AppState = {
  activeCategory: 'all',
  activeDiet: null,
  tastingTray: [], // array of { item, qty }
  theme: localStorage.getItem('rb_theme') || 'roast',
  isAudioPlaying: false,
  timerInterval: null,
  timerSecondsRemaining: 180,
  timerTotalSeconds: 180,
  currentBrewMethod: 'v60',
  quizAnswers: { step1: null, step2: null, step3: null }
};

// -------------------------------------------------------------
// 3. SYNTHESIZED WEB AUDIO AMBIENCE ENGINE
// (Generates authentic warm vinyl crackle + cafe room resonance without external mp3s!)
// -------------------------------------------------------------
let audioCtx = null;
let ambienceNoiseNode = null;
let ambienceGainNode = null;

function initAmbienceEngine() {
  if (audioCtx) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  // Create pink/brown noise for vinyl warmth
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
    b6 = white * 0.115926;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  // Filter to create warm cafe acoustic warmth (low pass at 800Hz)
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(650, audioCtx.currentTime);

  ambienceGainNode = audioCtx.createGain();
  ambienceGainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);

  whiteNoise.connect(filter);
  filter.connect(ambienceGainNode);
  ambienceGainNode.connect(audioCtx.destination);
  whiteNoise.start(0);
  ambienceNoiseNode = whiteNoise;
}

function playBrewChime() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Play pleasant pentatonic chime (E5, G#5, B5)
  const notes = [659.25, 830.61, 987.77];
  notes.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.12);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime + idx * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + idx * 0.12 + 1.2);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime + idx * 0.12);
    osc.stop(audioCtx.currentTime + idx * 0.12 + 1.3);
  });
}

// -------------------------------------------------------------
// 4. MENU RENDERER WITH DIETARY FILTERING
// -------------------------------------------------------------
function renderMenu() {
  const container = document.getElementById('menu-items-grid');
  if (!container) return;

  const filteredItems = MENU_DATABASE.filter(item => {
    const matchesCategory = AppState.activeCategory === 'all' || item.category === AppState.activeCategory;
    const matchesDiet = !AppState.activeDiet || item.diet.includes(AppState.activeDiet);
    return matchesCategory && matchesDiet;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-strong);">
        <p style="font-size: 1.125rem; color: var(--text-primary); margin-bottom: 8px;">No items match this specific dietary combination.</p>
        <p style="font-size: 0.875rem; color: var(--text-muted);">Please clear dietary filters or choose another category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredItems.map(item => {
    const dietBadgesHtml = item.diet.map(d => {
      if (d === 'jain') return `<span class="badge-diet jain">🌿 Jain Friendly</span>`;
      if (d === 'veg') return `<span class="badge-diet veg">🟢 Veg</span>`;
      if (d === 'vegan') return `<span class="badge-diet vegan">🌱 Vegan</span>`;
      if (d === 'gluten-free') return `<span class="badge-diet gf">🌾 GF Option</span>`;
      return '';
    }).join('');

    const sensoryTagsHtml = item.notes.map(note => `<span class="sensory-tag">${note}</span>`).join('');

    return `
      <article class="menu-card" data-id="${item.id}">
        <div>
          <div class="card-top-row">
            <div class="item-name-block">
              <h3 class="item-name">${item.name}</h3>
              <span class="item-hindi-subtitle">${item.hindi}</span>
            </div>
            <span class="item-price">₹${item.price}</span>
          </div>

          <div class="item-origin-tag">📍 ${item.origin} · ${item.sca ? `SCA ${item.sca}` : ''}</div>
          <p class="item-description">${item.desc}</p>
          
          <div class="item-sensory-tags">${sensoryTagsHtml}</div>
          <div class="item-dietary-badges">${dietBadgesHtml}</div>
        </div>

        <div class="card-action-row">
          <button class="quick-view-btn" data-action="quickview" data-id="${item.id}">
            🔍 Origin Details
          </button>
          <button class="add-tray-btn" data-action="add-tray" data-id="${item.id}">
            <span>+ Add to Tray</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// -------------------------------------------------------------
// 5. TASTING TRAY (CART) ENGINE
// -------------------------------------------------------------
function addToTray(itemId) {
  const item = MENU_DATABASE.find(i => i.id === itemId);
  if (!item) return;

  const existing = AppState.tastingTray.find(t => t.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    AppState.tastingTray.push({ ...item, qty: 1 });
  }

  updateTrayUI();
  openTray();
}

function updateTrayQty(itemId, delta) {
  const itemIndex = AppState.tastingTray.findIndex(t => t.id === itemId);
  if (itemIndex > -1) {
    AppState.tastingTray[itemIndex].qty += delta;
    if (AppState.tastingTray[itemIndex].qty <= 0) {
      AppState.tastingTray.splice(itemIndex, 1);
    }
  }
  updateTrayUI();
}

function updateTrayUI() {
  const badge = document.getElementById('tray-count-badge');
  const itemsContainer = document.getElementById('tray-items-list');
  const footer = document.getElementById('tray-footer');
  const subtotalEl = document.getElementById('tray-subtotal');
  const taxEl = document.getElementById('tray-tax');
  const totalEl = document.getElementById('tray-total');

  const totalCount = AppState.tastingTray.reduce((acc, curr) => acc + curr.qty, 0);
  if (badge) badge.textContent = totalCount;

  if (AppState.tastingTray.length === 0) {
    if (itemsContainer) {
      itemsContainer.innerHTML = `
        <div class="tray-empty-state">
          <span class="empty-icon">☕</span>
          <h4>Your tray is currently empty</h4>
          <p>Explore our single-origin pour-overs, cold ferments, or sourdough brunch dishes and add them to taste.</p>
          <a href="#menu" class="btn btn-secondary btn-sm" id="empty-explore-btn">Browse Menu</a>
        </div>
      `;
    }
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'flex';

  if (itemsContainer) {
    itemsContainer.innerHTML = AppState.tastingTray.map(item => `
      <div class="tray-item-row">
        <div class="tray-item-info">
          <span class="tray-item-name">${item.name}</span>
          <span class="tray-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</span>
        </div>
        <div class="tray-item-ctrls">
          <button class="qty-btn" onclick="window.RoastApp.updateTrayQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
          <span class="qty-count">${item.qty}</span>
          <button class="qty-btn" onclick="window.RoastApp.updateTrayQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `).join('');
  }

  // Calculate pricing
  const subtotal = AppState.tastingTray.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + tax;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (taxEl) taxEl.textContent = `₹${tax}`;
  if (totalEl) totalEl.textContent = `₹${grandTotal}`;
}

function openTray() {
  const drawer = document.getElementById('tray-drawer');
  const backdrop = document.getElementById('tray-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
  }
}

function closeTray() {
  const drawer = document.getElementById('tray-drawer');
  const backdrop = document.getElementById('tray-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
  }
}

function checkoutViaWhatsApp() {
  if (AppState.tastingTray.length === 0) return;

  const milkSelect = document.getElementById('tray-milk-select');
  const milkChoice = milkSelect ? milkSelect.value : 'Default';

  const subtotal = AppState.tastingTray.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + tax;

  let message = `*☕ ROAST & BOTANICA INDORE · NEW PRE-ORDER / TRAY ORDER*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  AppState.tastingTray.forEach((item, idx) => {
    message += `${idx + 1}. *${item.name}* (x${item.qty}) - ₹${item.price * item.qty}\n`;
  });
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🥛 *Milk/Diet Preference:* ${milkChoice}\n`;
  message += `💰 *Subtotal:* ₹${subtotal}\n`;
  message += `🧾 *Estimated Total with GST:* ₹${grandTotal}\n\n`;
  message += `📍 *Pickup/Seating Location:* Vijay Nagar Flagship, Scheme 54, Indore\n`;
  message += `_Sent via roastbotanicaindore.com_`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919826078690?text=${encoded}`;
  window.open(whatsappUrl, '_blank');
}

// -------------------------------------------------------------
// 6. QUICK DETAIL MODAL
// -------------------------------------------------------------
function openDetailModal(itemId) {
  const item = MENU_DATABASE.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('detail-modal');
  const backdrop = document.getElementById('detail-modal-backdrop');
  const container = document.getElementById('modal-content-area');

  if (!modal || !backdrop || !container) return;

  container.innerHTML = `
    <span class="modal-category-tag">${item.category.toUpperCase()} · SCA ${item.sca || 'Artisan Special'}</span>
    <h3 class="modal-item-title">${item.name}</h3>
    <p class="modal-origin-detail">${item.hindi} · ${item.origin}</p>

    <div class="modal-metrics-table">
      <div class="modal-metric-col">
        <span>Processing</span>
        <span>${item.process || 'Artisanal'}</span>
      </div>
      <div class="modal-metric-col">
        <span>Roast Profile</span>
        <span>${item.roastLevel || 'Medium'}</span>
      </div>
      <div class="modal-metric-col">
        <span>Pairing</span>
        <span>${item.pairing || 'Sourdough'}</span>
      </div>
    </div>

    <p class="modal-desc-full">${item.desc}</p>

    <div class="modal-action-row">
      <span class="modal-price-big">₹${item.price}</span>
      <button class="btn btn-primary" onclick="window.RoastApp.addToTray('${item.id}'); window.RoastApp.closeDetailModal();">
        Add to Tasting Tray
      </button>
    </div>
  `;

  modal.classList.add('active');
  backdrop.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeDetailModal() {
  const modal = document.getElementById('detail-modal');
  const backdrop = document.getElementById('detail-modal-backdrop');
  if (modal && backdrop) {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

// -------------------------------------------------------------
// 7. COFFEE MATCHMAKER QUIZ ENGINE
// -------------------------------------------------------------
function handleQuizSelection(step, answer) {
  AppState.quizAnswers[`step${step}`] = answer;

  const currentStepEl = document.querySelector(`.quiz-step[data-step="${step}"]`);
  const nextStepEl = document.querySelector(`.quiz-step[data-step="${step + 1}"]`);
  const progressBar = document.getElementById('quiz-progress');

  if (nextStepEl) {
    currentStepEl.classList.remove('active');
    nextStepEl.classList.add('active');
    if (progressBar) progressBar.style.width = `${((step + 1) / 3) * 100}%`;
  } else {
    // Show Results
    currentStepEl.classList.remove('active');
    if (progressBar) progressBar.style.width = '100%';
    computeQuizResult();
  }
}

function computeQuizResult() {
  const resultCard = document.getElementById('quiz-result');
  const titleEl = document.getElementById('result-bean-title');
  const notesEl = document.getElementById('result-notes');
  const descEl = document.getElementById('result-desc');
  const pairingEl = document.getElementById('result-pairing');
  const addBtn = document.getElementById('add-quiz-to-tray');

  if (!resultCard || !titleEl) return;

  const { step1, step2 } = AppState.quizAnswers;
  let recommendedItem = MENU_DATABASE[0]; // default

  if (step1 === 'milk') {
    if (step2 === 'spiced') {
      recommendedItem = MENU_DATABASE.find(i => i.id === 'esp-01') || MENU_DATABASE[3];
    } else {
      recommendedItem = MENU_DATABASE.find(i => i.id === 'esp-02') || MENU_DATABASE[4];
    }
  } else if (step1 === 'cold') {
    recommendedItem = MENU_DATABASE.find(i => i.id === 'cool-01') || MENU_DATABASE[11];
  } else if (step1 === 'sweet') {
    recommendedItem = MENU_DATABASE.find(i => i.id === 'esp-03') || MENU_DATABASE[5];
  } else {
    // Black & Pure
    if (step2 === 'floral') {
      recommendedItem = MENU_DATABASE.find(i => i.id === 'roast-01') || MENU_DATABASE[0];
    } else if (step2 === 'berry') {
      recommendedItem = MENU_DATABASE.find(i => i.id === 'roast-03') || MENU_DATABASE[2];
    } else {
      recommendedItem = MENU_DATABASE.find(i => i.id === 'roast-02') || MENU_DATABASE[1];
    }
  }

  titleEl.textContent = `${recommendedItem.name} (${recommendedItem.category.toUpperCase()})`;
  notesEl.textContent = `Terroir Notes: ${recommendedItem.notes.join(' · ')}`;
  descEl.textContent = recommendedItem.desc;
  pairingEl.textContent = recommendedItem.pairing || 'Fresh Sourdough Tartine';

  if (addBtn) {
    addBtn.onclick = () => {
      addToTray(recommendedItem.id);
    };
  }

  resultCard.style.display = 'block';
}

function restartQuiz() {
  AppState.quizAnswers = { step1: null, step2: null, step3: null };
  const resultCard = document.getElementById('quiz-result');
  if (resultCard) resultCard.style.display = 'none';

  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  const firstStep = document.querySelector('.quiz-step[data-step="1"]');
  if (firstStep) firstStep.classList.add('active');

  const progressBar = document.getElementById('quiz-progress');
  if (progressBar) progressBar.style.width = '33%';
}

// -------------------------------------------------------------
// 8. INTERACTIVE EXTRACTION TIMER (BREW BAR VISUALIZER)
// -------------------------------------------------------------
const BREW_PROFILES = {
  v60: {
    name: 'Hario V60 Pour-Over',
    dose: '16.0g',
    yield: '250ml',
    temp: '93.5°C',
    grind: 'Medium-Fine (EK43 #8.2)',
    totalSeconds: 180,
    steps: [
      { time: 45, title: 'Step 1: The 45-Second Bloom', desc: 'Pour 50ml water in gentle concentric spirals. Watch the coffee degas into a fragrant dome.' },
      { time: 105, title: 'Step 2: Main Concentric Extraction', desc: 'Pour smoothly up to 160ml, maintaining a steady gentle stream that stirs the bed evenly.' },
      { time: 155, title: 'Step 3: Final Sweetness Pour', desc: 'Pour up to 250ml total. Swirl once gently to ensure flat bed and clean drawdown.' },
      { time: 180, title: 'Step 4: Drawdown & Sensory Cup', desc: 'Allow natural gravitational drawdown. Swirl carafe and pour into warm ceramic vessel.' }
    ]
  },
  aeropress: {
    name: 'Aeropress Inverted Method',
    dose: '18.0g',
    yield: '200ml',
    temp: '88.0°C',
    grind: 'Medium (EK43 #6.5)',
    totalSeconds: 120,
    steps: [
      { time: 30, title: 'Step 1: Inverted Wetting', desc: 'Add 60ml water, stir 4 times with paddle to saturate grounds completely.' },
      { time: 80, title: 'Step 2: Full Steep Infusion', desc: 'Fill to 200ml, attach rinsed paper cap, let steep for rich body extraction.' },
      { time: 120, title: 'Step 3: Gentle 30s Plunge', desc: 'Flip onto server and press smoothly with forearm weight until gentle hiss.' }
    ]
  },
  espresso: {
    name: 'Synesso MVP 9-Bar Extraction',
    dose: '19.5g',
    yield: '38.0g',
    temp: '93.2°C',
    grind: 'Fine Micro-Espresso',
    totalSeconds: 28,
    steps: [
      { time: 6, title: 'Pre-Infusion Soak (3-Bar)', desc: 'Gentle low-pressure wetting saturates puck preventing channelling.' },
      { time: 22, title: 'Full 9-Bar Pressure Phase', desc: 'Viscous golden tiger-stripe crema flows into pre-heated espresso glass.' },
      { time: 28, title: 'Pressure Ramp-Down', desc: 'Clean cutoff preserving delicate aromatic top notes.' }
    ]
  },
  coldbrew: {
    name: 'Kyoto Cold Drip Tower',
    dose: '100g',
    yield: '1000ml',
    temp: '4.0°C Iced Spring Water',
    grind: 'Coarse Sand',
    totalSeconds: 60, // Demonstration quick mode
    steps: [
      { time: 20, title: 'Phase 1: Regulating Drip Valve', desc: 'Calibrate glass petcock valve to exactly 1 drop every 1.5 seconds.' },
      { time: 40, title: 'Phase 2: Percolation Spiral', desc: 'Iced water gently percolates down the ground coffee column.' },
      { time: 60, title: 'Phase 3: Spiral Coiling into Flask', desc: 'Intensely sweet, smooth cold liqueur collects in bottom flask.' }
    ]
  }
};

function setBrewMethod(method) {
  AppState.currentBrewMethod = method;
  const profile = BREW_PROFILES[method];
  if (!profile) return;

  clearInterval(AppState.timerInterval);
  AppState.timerInterval = null;
  AppState.timerTotalSeconds = profile.totalSeconds;
  AppState.timerSecondsRemaining = profile.totalSeconds;

  const doseEl = document.getElementById('brew-dose');
  const yieldEl = document.getElementById('brew-yield');
  const tempEl = document.getElementById('brew-temp');
  const grindEl = document.getElementById('brew-grind');
  const titleEl = document.getElementById('instruction-title');
  const descEl = document.getElementById('instruction-body');
  const digitsEl = document.getElementById('timer-digits');
  const phaseEl = document.getElementById('timer-phase');
  const startBtn = document.getElementById('start-brew-btn');

  if (doseEl) doseEl.textContent = profile.dose;
  if (yieldEl) yieldEl.textContent = profile.yield;
  if (tempEl) tempEl.textContent = profile.temp;
  if (grindEl) grindEl.textContent = profile.grind;

  if (titleEl) titleEl.textContent = profile.steps[0].title;
  if (descEl) descEl.textContent = profile.steps[0].desc;
  if (digitsEl) digitsEl.textContent = formatTime(profile.totalSeconds);
  if (phaseEl) phaseEl.textContent = 'Ready to Brew';
  if (startBtn) startBtn.textContent = 'Start Extraction Timer';

  updateTimerSvg(profile.totalSeconds, profile.totalSeconds);
}

function startBrewTimer() {
  const startBtn = document.getElementById('start-brew-btn');

  if (AppState.timerInterval) {
    // Pause
    clearInterval(AppState.timerInterval);
    AppState.timerInterval = null;
    if (startBtn) startBtn.textContent = 'Resume Timer';
    return;
  }

  if (AppState.timerSecondsRemaining <= 0) {
    setBrewMethod(AppState.currentBrewMethod);
  }

  if (startBtn) startBtn.textContent = 'Pause Timer';

  AppState.timerInterval = setInterval(() => {
    AppState.timerSecondsRemaining--;

    const digitsEl = document.getElementById('timer-digits');
    const phaseEl = document.getElementById('timer-phase');
    const titleEl = document.getElementById('instruction-title');
    const descEl = document.getElementById('instruction-body');

    if (digitsEl) digitsEl.textContent = formatTime(AppState.timerSecondsRemaining);
    updateTimerSvg(AppState.timerSecondsRemaining, AppState.timerTotalSeconds);

    // Calculate current step
    const profile = BREW_PROFILES[AppState.currentBrewMethod];
    const elapsed = profile.totalSeconds - AppState.timerSecondsRemaining;
    const currentStep = profile.steps.find(s => elapsed <= s.time) || profile.steps[profile.steps.length - 1];

    if (phaseEl) phaseEl.textContent = `Extracting (${elapsed}s elapsed)`;
    if (titleEl) titleEl.textContent = currentStep.title;
    if (descEl) descEl.textContent = currentStep.desc;

    if (AppState.timerSecondsRemaining <= 0) {
      clearInterval(AppState.timerInterval);
      AppState.timerInterval = null;
      if (digitsEl) digitsEl.textContent = '00:00';
      if (phaseEl) phaseEl.textContent = 'Brew Completed · Enjoy!';
      if (startBtn) startBtn.textContent = 'Brew Again';
      playBrewChime();
    }
  }, 1000);
}

function resetBrewTimer() {
  clearInterval(AppState.timerInterval);
  AppState.timerInterval = null;
  setBrewMethod(AppState.currentBrewMethod);
}

function updateTimerSvg(remaining, total) {
  const circle = document.getElementById('timer-progress-circle');
  if (!circle) return;
  const circumference = 2 * Math.PI * 95; // r=95 -> ~596.9
  const fraction = remaining / total;
  const offset = circumference * (1 - fraction);
  circle.style.strokeDashoffset = offset;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// -------------------------------------------------------------
// 9. TABLE RESERVATION WITH DIRECT WHATSAPP GENERATION
// -------------------------------------------------------------
function handleTableReservation(e) {
  e.preventDefault();

  const name = document.getElementById('book-name')?.value.trim();
  const phone = document.getElementById('book-phone')?.value.trim();
  const guests = document.getElementById('book-guests')?.value;
  const date = document.getElementById('book-date')?.value;
  const time = document.getElementById('book-time')?.value;
  const zone = document.getElementById('book-zone')?.value;
  const requests = document.getElementById('book-requests')?.value.trim() || 'None';

  if (!name || !phone || !date) {
    alert('Please fill in your name, contact, and preferred date.');
    return;
  }

  let message = `*🌿 ROAST & BOTANICA INDORE · CONSERVATORY RESERVATION REQUEST*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Guest Name:* ${name}\n`;
  message += `📞 *WhatsApp:* ${phone}\n`;
  message += `👥 *Party Size:* ${guests} Person(s)\n`;
  message += `📅 *Date:* ${date}\n`;
  message += `⏰ *Time Slot:* ${time}\n`;
  message += `🏛️ *Preferred Zone:* ${zone}\n`;
  message += `📝 *Notes/Dietary:* ${requests}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📍 *Location:* Scheme 54, PU-4 Behind C21 Mall, Vijay Nagar, Indore\n`;
  message += `_Awaiting instant booking confirmation._`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919826078690?text=${encoded}`;
  window.open(whatsappUrl, '_blank');
}

// -------------------------------------------------------------
// 10. INDORE LANDMARK TRAVEL TIME CALCULATOR
// -------------------------------------------------------------
const LANDMARK_DIRECTIONS = {
  'Vijay Nagar Sq.': 'Head 800m down AB Road towards Meghdoot Garden. Turn left directly opposite C21 Mall into PU-4 Commercial. Look for the glass atrium on Plot 14-B. (3 mins)',
  'C21 Mall': 'We are located directly in the PU-4 Commercial row right behind C21 & Malhar Mega Mall. 2 minutes walk or valet drop-off at entrance. (5 mins)',
  'Chappan Dukan': 'Take New Palasia Road onto AB Road heading north towards Vijay Nagar. Drive straight past LIG Square and Industry House. Valet parking on right. (12 mins)',
  'Old Palasia': 'Take the Saket link road directly onto the MR-9 / AB Road express corridor. Straight drive through to Scheme 54. (14 mins)',
  'Airport (IDR)': 'Take Super Corridor straight to MR-10, turn right towards Vijay Nagar Square, then south on AB Road into Scheme 54 PU-4. (22 mins)'
};

function initTravelCalculator() {
  const pills = document.querySelectorAll('.landmark-pill');
  const noteEl = document.getElementById('travel-display-note');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const name = pill.querySelector('.lm-name')?.textContent;
      if (name && LANDMARK_DIRECTIONS[name] && noteEl) {
        noteEl.innerHTML = `From <strong>${name}</strong>: ${LANDMARK_DIRECTIONS[name]}`;
      }
    });
  });
}

// -------------------------------------------------------------
// 11. THEME SWITCHER (ROAST / CREMA)
// -------------------------------------------------------------
function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    AppState.theme = AppState.theme === 'roast' ? 'crema' : 'roast';
    document.documentElement.setAttribute('data-theme', AppState.theme);
    localStorage.setItem('rb_theme', AppState.theme);
  });
}

// -------------------------------------------------------------
// 12. INITIALIZATION & EVENT DELEGATION
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderMenu();
  updateTrayUI();
  setBrewMethod('v60');
  initTravelCalculator();

  // Set default reservation date to tomorrow
  const dateInput = document.getElementById('book-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  // --- Top Audio Toggle ---
  const audioBtn = document.getElementById('audio-toggle');
  const audioLabel = document.getElementById('audio-label');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      initAmbienceEngine();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      AppState.isAudioPlaying = !AppState.isAudioPlaying;
      if (AppState.isAudioPlaying) {
        ambienceGainNode.gain.setTargetAtTime(0.06, audioCtx.currentTime, 0.4);
        audioBtn.classList.add('playing');
        if (audioLabel) audioLabel.textContent = 'Atmosphere: On';
      } else {
        ambienceGainNode.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.2);
        audioBtn.classList.remove('playing');
        if (audioLabel) audioLabel.textContent = 'Atmosphere: Off';
      }
    });
  }

  // --- Category Tabs ---
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AppState.activeCategory = tab.dataset.category;
      renderMenu();
    });
  });

  // --- Dietary Pills ---
  document.querySelectorAll('.diet-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const diet = pill.dataset.diet;
      if (AppState.activeDiet === diet) {
        AppState.activeDiet = null;
        pill.classList.remove('active');
      } else {
        document.querySelectorAll('.diet-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        AppState.activeDiet = diet;
      }
      renderMenu();
    });
  });

  // --- Menu Event Delegation (Add to Tray & Quick View) ---
  const menuContainer = document.getElementById('menu-items-grid');
  if (menuContainer) {
    menuContainer.addEventListener('click', e => {
      const addBtn = e.target.closest('[data-action="add-tray"]');
      if (addBtn) {
        addToTray(addBtn.dataset.id);
        return;
      }

      const viewBtn = e.target.closest('[data-action="quickview"]');
      if (viewBtn) {
        openDetailModal(viewBtn.dataset.id);
        return;
      }
    });
  }

  // --- Tasting Tray Drawer Controls ---
  const openTrayBtn = document.getElementById('open-tray-btn');
  const closeTrayBtn = document.getElementById('close-tray-btn');
  const trayBackdrop = document.getElementById('tray-backdrop');
  const emptyExploreBtn = document.getElementById('empty-explore-btn');

  if (openTrayBtn) openTrayBtn.addEventListener('click', openTray);
  if (closeTrayBtn) closeTrayBtn.addEventListener('click', closeTray);
  if (trayBackdrop) trayBackdrop.addEventListener('click', closeTray);

  const whatsappCheckoutBtn = document.getElementById('tray-whatsapp-checkout');
  if (whatsappCheckoutBtn) whatsappCheckoutBtn.addEventListener('click', checkoutViaWhatsApp);

  // --- Modal Close Controls ---
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('detail-modal-backdrop');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDetailModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeDetailModal);

  // --- Brew Method Tabs ---
  document.querySelectorAll('.brew-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.brew-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      setBrewMethod(tab.dataset.method);
    });
  });

  const startBrewBtn = document.getElementById('start-brew-btn');
  const resetBrewBtn = document.getElementById('reset-brew-btn');
  if (startBrewBtn) startBrewBtn.addEventListener('click', startBrewTimer);
  if (resetBrewBtn) resetBrewBtn.addEventListener('click', resetBrewTimer);

  // --- Quiz Options Delegation ---
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.closest('.quiz-step')?.dataset.step, 10);
      const answer = btn.dataset.answer;
      if (step && answer) {
        handleQuizSelection(step, answer);
      }
    });
  });

  const restartQuizBtn = document.getElementById('restart-quiz');
  if (restartQuizBtn) restartQuizBtn.addEventListener('click', restartQuiz);

  // --- Table Booking Form ---
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) bookingForm.addEventListener('submit', handleTableReservation);

  // --- Mobile Drawer Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // --- Live Roaster Batch Rotator (Simulates real-world artisan cafe telemetry) ---
  const roasterBatches = [
    'Ratnagiri Estate Honey Process (Batch #142 · 204°C)',
    'Bababudangiri Washed Arabica (Batch #143 · 206°C)',
    'Araku Valley Anaerobic Natural (Batch #144 · 202°C)',
    'Kerehaklu Micro-lot Sun-Dried (Batch #145 · 205°C)'
  ];
  let batchIndex = 0;
  setInterval(() => {
    batchIndex = (batchIndex + 1) % roasterBatches.length;
    const beanEl = document.getElementById('live-roaster-bean');
    if (beanEl) {
      beanEl.style.opacity = '0';
      setTimeout(() => {
        beanEl.textContent = roasterBatches[batchIndex];
        beanEl.style.opacity = '1';
      }, 300);
    }
  }, 10000);
});

// Expose public API for inline onclicks
window.RoastApp = {
  addToTray,
  updateTrayQty,
  openDetailModal,
  closeDetailModal,
  openTray,
  closeTray
};
