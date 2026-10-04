/**
 * THE THROB CAFE · INDORE
 * Clean Editorial Logic & Interaction Engine
 * - Dynamic Food Menu Rendering
 * - Category & Jain Friendly Filter
 * - Order Tray (Cart) with WhatsApp Kitchen Dispatch
 * - Table Reservation Form to WhatsApp (+91 96855 14326)
 */

const THROB_MENU_ITEMS = [
  // --- PIZZAS ---
  {
    id: 'pizza-1',
    name: 'Four Cheese Volcano Pizza',
    category: 'pizza',
    price: 380,
    desc: 'Hand-stretched thin crust layered with aged mozzarella, sharp cheddar, gouda, and a molten cheese center.',
    isJain: true,
    isPopular: true,
    serving: '10 Inch · Serves 2-3'
  },
  {
    id: 'pizza-2',
    name: 'Peri Peri Paneer Tikka Pizza',
    category: 'pizza',
    price: 350,
    desc: 'Charred spiced cottage cheese, roasted bell peppers, red onions, and house peri-peri drizzle with 100% mozzarella.',
    isJain: false,
    isPopular: true,
    serving: '10 Inch · Serves 2-3'
  },
  {
    id: 'pizza-3',
    name: 'Exotic Farmhouse Garden Pizza',
    category: 'pizza',
    price: 320,
    desc: 'Black kalamata olives, crunchy jalapeños, sweet golden corn, button mushrooms, and hand-torn garden basil.',
    isJain: true,
    isPopular: false,
    serving: '10 Inch · Serves 2-3'
  },
  {
    id: 'pizza-4',
    name: 'Truffle Mushroom & Garlic Pizza',
    category: 'pizza',
    price: 390,
    desc: 'Sautéed mushrooms, slow-roasted garlic slivers, parmesan crumble, and white truffle-infused olive oil.',
    isJain: false,
    isPopular: true,
    serving: '10 Inch · Serves 2-3'
  },

  // --- LOADED FRIES ---
  {
    id: 'fries-1',
    name: 'Overloaded Cheesy Jalapeño Fries',
    category: 'fries',
    price: 240,
    desc: 'Crispy shoestring fries topped with warm cheddar sauce, chopped pickled jalapeños, and spiced sour cream.',
    isJain: true,
    isPopular: true,
    serving: 'Generous Basket'
  },
  {
    id: 'fries-2',
    name: 'Indori Butter Makhani Gravy Fries',
    category: 'fries',
    price: 260,
    desc: 'Crispy potato fries smothered in slow-cooked makhani gravy, topped with authentic Indore crispy spiced sev.',
    isJain: false,
    isPopular: true,
    serving: 'Generous Basket'
  },
  {
    id: 'fries-3',
    name: 'African Birdseye Peri Peri Fries',
    category: 'fries',
    price: 190,
    desc: 'Twice-cooked crispy fries tossed in our dry roasted peri-peri seasoning with garlic dipping sauce.',
    isJain: true,
    isPopular: false,
    serving: 'Standard Basket'
  },

  // --- BURGERS & SLIDERS ---
  {
    id: 'burger-1',
    name: 'Crispy Spiced Paneer Crunch Burger',
    category: 'burgers',
    price: 260,
    desc: 'Thick crumbed cottage cheese patty, cheddar slice, crunchy cabbage slaw, and chipotle mayo on toasted brioche.',
    isJain: false,
    isPopular: true,
    serving: 'With Salted Fries'
  },
  {
    id: 'burger-2',
    name: 'Smoky BBQ Farmhouse Burger',
    category: 'burgers',
    price: 230,
    desc: 'Grilled spiced vegetable and lentil patty, hickory BBQ glaze, caramelized onion relish, and crisp romaine.',
    isJain: true,
    isPopular: false,
    serving: 'With Salted Fries'
  },
  {
    id: 'burger-3',
    name: 'Swiss Cheese & Mushroom Slider Trio',
    category: 'burgers',
    price: 290,
    desc: 'Three mini brioche sliders with garlic sautéed button mushrooms, melted Swiss cheese, and herb aioli.',
    isJain: false,
    isPopular: true,
    serving: 'Trio Platter'
  },

  // --- PASTAS ---
  {
    id: 'pasta-1',
    name: 'Creamy Pink Sauce Penne',
    category: 'pasta',
    price: 320,
    desc: 'Velvety blend of cream parmesan alfredo and Italian tomato pomodoro with roasted zucchini and broccoli.',
    isJain: true,
    isPopular: true,
    serving: 'Served with 2pc Garlic Bread'
  },
  {
    id: 'pasta-2',
    name: 'Classic Fiery Arrabiata Pasta',
    category: 'pasta',
    price: 290,
    desc: 'Penne tossed in crushed San Marzano tomato sauce, red chilli flakes, black olives, and fresh Italian basil.',
    isJain: true,
    isPopular: false,
    serving: 'Served with 2pc Garlic Bread'
  },
  {
    id: 'pasta-3',
    name: 'Triple-Cheese Garlic Baguette Slices',
    category: 'pasta',
    price: 220,
    desc: 'Artisanal baguette toasted with garlic herb butter and overflowing with molten mozzarella and cheddar.',
    isJain: true,
    isPopular: true,
    serving: '4 Hearty Slices'
  },

  // --- SHAKES & COLD COFFEES ---
  {
    id: 'shake-1',
    name: 'The Throb Signature Cold Coffee Float',
    category: 'shakes',
    price: 210,
    desc: 'Freshly pulled double espresso blended with creamy milk, vanilla bean gelato, and rich chocolate fudge.',
    isJain: true,
    isPopular: true,
    serving: '400ml Glass'
  },
  {
    id: 'shake-2',
    name: 'Nutella Roasted Hazelnut Freakshake',
    category: 'shakes',
    price: 290,
    desc: 'Thick chocolate shake layered with genuine Italian Nutella, roasted crushed hazelnuts, and whipped cream.',
    isJain: true,
    isPopular: true,
    serving: '450ml Glass'
  },
  {
    id: 'shake-3',
    name: 'Belgian Lotus Biscoff Shake',
    category: 'shakes',
    price: 290,
    desc: 'Spiced Belgian cookie butter blended with whole milk and topped with crunchy Biscoff biscuit crumble.',
    isJain: true,
    isPopular: true,
    serving: '400ml Glass'
  },

  // --- DESSERTS ---
  {
    id: 'dessert-1',
    name: 'Sizzling Chocolate Walnut Brownie',
    category: 'desserts',
    price: 260,
    desc: 'Served bubbling on a smoking cast-iron plate with warm fudge sauce and a cold vanilla bean scoop.',
    isJain: true,
    isPopular: true,
    serving: 'Hot Sizzler'
  },
  {
    id: 'dessert-2',
    name: 'Belgian Waffle with Warm Nutella',
    category: 'desserts',
    price: 280,
    desc: 'Crisp golden Belgian waffles dusted with powdered sugar and generously slathered with warm hazelnut spread.',
    isJain: true,
    isPopular: false,
    serving: '2 Large Waffles'
  }
];

// --- APP STATE ---
const App = {
  category: 'all',
  jainOnly: false,
  tray: []
};

// --- RENDER MENU ---
function renderMenu() {
  const container = document.getElementById('menu-grid-container');
  if (!container) return;

  const items = THROB_MENU_ITEMS.filter(item => {
    const catMatch = App.category === 'all' || item.category === App.category;
    const jainMatch = !App.jainOnly || item.isJain;
    return catMatch && jainMatch;
  });

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #ffffff; border: 1px solid var(--border-line); border-radius: var(--radius-sm);">
        <p style="font-weight: 600; color: var(--text-main);">No dishes match your active filter.</p>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 4px;">Try selecting another category or turn off the Jain filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <article class="menu-item-box">
      <div>
        <div class="item-top-row">
          <h3 class="item-heading">${item.name}</h3>
          <span class="item-cost">₹${item.price}</span>
        </div>

        <div class="item-tags-wrap">
          ${item.isJain ? '<span class="tag-jain">Jain Friendly</span>' : ''}
          ${item.isPopular ? '<span class="tag-popular">Guest Favorite</span>' : ''}
        </div>

        <p class="item-description">${item.desc}</p>
      </div>

      <div class="item-bottom-actions">
        <span class="item-serving">${item.serving}</span>
        <button class="add-btn" onclick="window.ThrobCafe.addToTray('${item.id}')">
          + Add to Tray
        </button>
      </div>
    </article>
  `).join('');
}

// --- TRAY ENGINE ---
function addToTray(id) {
  const item = THROB_MENU_ITEMS.find(i => i.id === id);
  if (!item) return;

  const found = App.tray.find(t => t.id === id);
  if (found) {
    found.qty += 1;
  } else {
    App.tray.push({ ...item, qty: 1 });
  }

  updateTray();
  openTray();
}

function updateQty(id, delta) {
  const idx = App.tray.findIndex(t => t.id === id);
  if (idx > -1) {
    App.tray[idx].qty += delta;
    if (App.tray[idx].qty <= 0) {
      App.tray.splice(idx, 1);
    }
  }
  updateTray();
}

function updateTray() {
  const badge = document.getElementById('tray-count-badge');
  const itemsContainer = document.getElementById('tray-items-container');
  const footer = document.getElementById('tray-panel-footer');
  const totalEl = document.getElementById('tray-total-amount');

  const count = App.tray.reduce((acc, curr) => acc + curr.qty, 0);
  if (badge) badge.textContent = count;

  if (App.tray.length === 0) {
    if (itemsContainer) {
      itemsContainer.innerHTML = `<p class="tray-empty-text">Your tray is currently empty. Explore our pizzas, burgers, and shakes to add items.</p>`;
    }
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'flex';

  if (itemsContainer) {
    itemsContainer.innerHTML = App.tray.map(item => `
      <div class="tray-item-entry">
        <div>
          <div class="tray-item-name">${item.name}</div>
          <div class="tray-item-sub">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
        </div>
        <div class="tray-counter-btns">
          <button class="counter-btn" onclick="window.ThrobCafe.updateQty('${item.id}', -1)" aria-label="Decrease">−</button>
          <span style="font-weight: 600; min-width: 16px; text-align: center;">${item.qty}</span>
          <button class="counter-btn" onclick="window.ThrobCafe.updateQty('${item.id}', 1)" aria-label="Increase">+</button>
        </div>
      </div>
    `).join('');
  }

  const subtotal = App.tray.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  if (totalEl) totalEl.textContent = `₹${subtotal}`;
}

function openTray() {
  document.getElementById('tray-drawer')?.classList.add('active');
  document.getElementById('tray-backdrop')?.classList.add('active');
}

function closeTray() {
  document.getElementById('tray-drawer')?.classList.remove('active');
  document.getElementById('tray-backdrop')?.classList.remove('active');
}

function checkoutWhatsApp() {
  if (App.tray.length === 0) return;

  const subtotal = App.tray.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);

  let msg = `*THE THROB CAFE INDORE · FOOD ORDER*\n`;
  msg += `─────────────────────────\n`;
  App.tray.forEach((item, i) => {
    msg += `${i + 1}. ${item.name} (x${item.qty}) - ₹${item.price * item.qty}\n`;
  });
  msg += `─────────────────────────\n`;
  msg += `*Total Amount:* ₹${subtotal}\n\n`;
  msg += `📍 Order for The Throb Cafe, Indore\n`;
  msg += `_Sent via thethrobcafe.in_`;

  window.open(`https://wa.me/919685514326?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- TABLE RESERVATION FORM ---
function handleReservation(e) {
  e.preventDefault();

  const name = document.getElementById('res-name')?.value.trim();
  const phone = document.getElementById('res-phone')?.value.trim();
  const guests = document.getElementById('res-guests')?.value;
  const date = document.getElementById('res-date')?.value;
  const time = document.getElementById('res-time')?.value;
  const setup = document.getElementById('res-setup')?.value;
  const notes = document.getElementById('res-notes')?.value.trim() || 'None';

  if (!name || !phone || !date) {
    alert('Please complete the name, phone, and date fields.');
    return;
  }

  let msg = `*THE THROB CAFE INDORE · TABLE RESERVATION*\n`;
  msg += `─────────────────────────\n`;
  msg += `👤 Guest: ${name}\n`;
  msg += `📞 Contact: ${phone}\n`;
  msg += `👥 Party Size: ${guests}\n`;
  msg += `📅 Date: ${date}\n`;
  msg += `⏰ Time: ${time}\n`;
  msg += `✨ Table Arrangement: ${setup}\n`;
  msg += `📝 Notes / Dietary: ${notes}\n`;
  msg += `─────────────────────────\n`;
  msg += `Please confirm table availability. Thank you!`;

  window.open(`https://wa.me/919685514326?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  updateTray();

  // Tomorrow as default date
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);
    dateInput.value = tmr.toISOString().split('T')[0];
  }

  // Category Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      App.category = tab.dataset.cat;
      renderMenu();
    });
  });

  // Jain Filter Toggle
  const jainBtn = document.getElementById('jain-filter-btn');
  if (jainBtn) {
    jainBtn.addEventListener('click', () => {
      App.jainOnly = !App.jainOnly;
      jainBtn.classList.toggle('active', App.jainOnly);
      renderMenu();
    });
  }

  // Form Submission
  document.getElementById('reservation-form')?.addEventListener('submit', handleReservation);

  // Tray Controls
  document.getElementById('open-tray-btn')?.addEventListener('click', openTray);
  document.getElementById('close-tray-btn')?.addEventListener('click', closeTray);
  document.getElementById('tray-backdrop')?.addEventListener('click', closeTray);
  document.getElementById('tray-checkout-btn')?.addEventListener('click', checkoutWhatsApp);
});

// Window API
window.ThrobCafe = {
  addToTray,
  updateQty,
  openTray,
  closeTray
};
