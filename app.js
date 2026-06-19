/* ==========================================
   E-BIKER PERFORMANCE - FRONTEND APPLICATION
   ========================================== */

// --- PRODUCT DATABASE ---
const PRODUCTS = [
    // --- 12 Enduro Eléctrica ---
    {
        id: 1,
        name: "EBP 805 PRO",
        tag: "MÁS POPULAR",
        tagClass: "popular",
        price: 2899.00,
        originalPrice: null,
        autonomy: 120, // km (60-120 range)
        speed: 80, // km/h (45-80 range)
        type: "Enduro Eléctrica",
        rating: 4.8,
        reviews: 124,
        image: "assets/ebp-805-pro.png",
        colorClass: "",
        description: "Diseñada para dominar senderos difíciles con máxima maniobrabilidad. La EBP 805 Pro combina un motor de 6000W ultra silencioso con suspensión de alto recorrido ajustable para una experiencia enduro sin comparación."
    },
    {
        id: 2,
        name: "EBP 805 LITE",
        tag: "-10%",
        tagClass: "discount",
        price: 1799.00,
        originalPrice: 1999.00,
        autonomy: 90, // km (60-120 range)
        speed: 70, // km/h (45-80 range)
        type: "Enduro Eléctrica",
        rating: 4.5,
        reviews: 63,
        image: "assets/ebp-805-lite.png",
        colorClass: "",
        description: "La entrada ideal al mundo de las motos eléctricas de alto rendimiento. Ligera, ágil y optimizada, es perfecta para trayectos rápidos y recreación off-road de fin de semana."
    },
    {
        id: 3,
        name: "EBP HUNTER",
        tag: "NUEVO",
        tagClass: "new",
        price: 2099.00,
        originalPrice: null,
        autonomy: 110, // km (60-120 range)
        speed: 80, // km/h (45-80 range)
        type: "Enduro Eléctrica",
        rating: 4.6,
        reviews: 31,
        image: "assets/ebp-trail-r.png",
        colorClass: "color-hunter",
        description: "Diseño militar mate sigiloso y robusto. Concebida para incursiones forestales y caza fotográfica. Cuenta con neumáticos especiales para lodo extremo y chasis con sellado IP67 para cruzar arroyos."
    },
    {
        id: 4,
        name: "EBP ENDURO EVO",
        tag: "",
        tagClass: "",
        price: 3499.00,
        originalPrice: null,
        autonomy: 115, // km (60-120 range)
        speed: 78, // km/h (45-80 range)
        type: "Enduro Eléctrica",
        rating: 4.7,
        reviews: 42,
        image: "assets/ebp-805-pro.png",
        colorClass: "color-adventure",
        description: "Una evolución natural del enduro clásico. Cuenta con amortiguadores de gas nitrógeno y frenos de disco hidráulicos regenerativos para mayor control."
    },
    {
        id: 5,
        name: "EBP FALCON 60",
        tag: "",
        tagClass: "",
        price: 1850.00,
        originalPrice: null,
        autonomy: 50, // km (0-60 range)
        speed: 40, // km/h (0-45 range)
        type: "Enduro Eléctrica",
        rating: 4.4,
        reviews: 29,
        image: "assets/ebp-805-lite.png",
        colorClass: "color-mini",
        description: "Modelo compacto y silencioso para iniciarse en circuitos boscosos sin molestar a la fauna local. Muy fácil de manejar."
    },
    {
        id: 6,
        name: "EBP ENDURO S",
        tag: "",
        tagClass: "",
        price: 2150.00,
        originalPrice: null,
        autonomy: 55, // km (0-60 range)
        speed: 60, // km/h (45-80 range)
        type: "Enduro Eléctrica",
        rating: 4.3,
        reviews: 18,
        image: "assets/ebp-805-lite.png",
        colorClass: "color-hunter",
        description: "Compacta pero con el torque característico de la línea Enduro. Manillar ajustable y neumáticos mixtos."
    },
    {
        id: 7,
        name: "EBP GLIDE 80",
        tag: "",
        tagClass: "",
        price: 2600.00,
        originalPrice: null,
        autonomy: 95, // km (60-120 range)
        speed: 72, // km/h (45-80 range)
        type: "Enduro Eléctrica",
        rating: 4.6,
        reviews: 50,
        image: "assets/ebp-805-pro.png",
        colorClass: "color-mini",
        description: "Conducción suave y amortiguada. La Glide 80 está pensada para trayectos mixtos de asfalto y tierra."
    },
    {
        id: 8,
        name: "EBP VOLT S1",
        tag: "OFERTA",
        tagClass: "discount",
        price: 2399.00,
        originalPrice: 2699.00,
        autonomy: 105, // km (60-120 range)
        speed: 76, // km/h (45-80 range)
        type: "Enduro Eléctrica",
        rating: 4.7,
        reviews: 35,
        image: "assets/ebp-storm-x.png",
        colorClass: "color-bronze",
        description: "Modelo de alto torque y aceleración rápida. Excelente opción en oferta para pilotos que buscan sensaciones fuertes."
    },
    {
        id: 9,
        name: "EBP STEALTH PRO",
        tag: "",
        tagClass: "",
        price: 3890.00,
        originalPrice: null,
        autonomy: 120, // km (60-120 range)
        speed: 82, // km/h (80+ range)
        type: "Enduro Eléctrica",
        rating: 4.8,
        reviews: 21,
        image: "assets/ebp-trail-r.png",
        colorClass: "",
        description: "Silenciosa y mortalmente rápida. Una e-bike construida con aleación de titanio y componentes premium."
    },
    {
        id: 10,
        name: "EBP HYBRID ENDURO",
        tag: "",
        tagClass: "",
        price: 2999.00,
        originalPrice: null,
        autonomy: 100, // km (60-120 range)
        speed: 85, // km/h (80+ range)
        type: "Enduro Eléctrica",
        rating: 4.5,
        reviews: 14,
        image: "assets/ebp-805-pro.png",
        colorClass: "color-hunter",
        description: "Perfecta combinación de peso ligero y motor de alta revolución para un control absoluto en curvas cerradas."
    },
    {
        id: 11,
        name: "EBP APEX X",
        tag: "NUEVO",
        tagClass: "new",
        price: 4899.00,
        originalPrice: null,
        autonomy: 135, // km (120-200 range)
        speed: 92, // km/h (80+ range)
        type: "Enduro Eléctrica",
        rating: 4.9,
        reviews: 27,
        image: "assets/ebp-trail-r.png",
        colorClass: "color-bronze",
        description: "El tope de la línea Enduro. Potencia brutal de 10kW con batería modular de grafeno de alta eficiencia."
    },
    {
        id: 12,
        name: "EBP INFINITY",
        tag: "",
        tagClass: "",
        price: 5200.00,
        originalPrice: null,
        autonomy: 210, // km (200+ range)
        speed: 95, // km/h (80+ range)
        type: "Enduro Eléctrica",
        rating: 4.9,
        reviews: 19,
        image: "assets/ebp-trail-r.png",
        colorClass: "color-adventure",
        description: "La moto de enduro con mayor alcance en el mercado. Equipamiento completo de luces e instrumentación digital."
    },

    // --- 8 Cross / Off Road ---
    {
        id: 13,
        name: "EBP STORM X",
        tag: "NUEVO",
        tagClass: "new",
        price: 2299.00,
        originalPrice: null,
        autonomy: 100, // km (60-120 range)
        speed: 75, // km/h (45-80 range)
        type: "Cross / Off Road",
        rating: 4.6,
        reviews: 89,
        image: "assets/ebp-storm-x.png",
        colorClass: "",
        description: "Rompe las reglas de la velocidad off-road. Con un chasis de aluminio aeroespacial ultraligero y torque instantáneo, la Storm X es perfecta para saltos exigentes y circuitos cerrados."
    },
    {
        id: 14,
        name: "EBP RACE X",
        tag: "OFERTA",
        tagClass: "discount",
        price: 4499.00,
        originalPrice: 4999.00,
        autonomy: 140, // km (120-200 range)
        speed: 90, // km/h (80+ range)
        type: "Cross / Off Road",
        rating: 4.9,
        reviews: 41,
        image: "assets/ebp-805-pro.png",
        colorClass: "color-bronze",
        description: "La bestia de competición definitiva. Equipada con un motor eléctrico de 12 kW de alta gama y componentes de carbono para pilotos profesionales que exigen la máxima aceleración y agarre."
    },
    {
        id: 15,
        name: "EBP MINI",
        tag: "",
        tagClass: "",
        price: 999.00,
        originalPrice: null,
        autonomy: 60, // km (0-60 range)
        speed: 45, // km/h (0-45 range)
        type: "Cross / Off Road",
        rating: 4.3,
        reviews: 17,
        image: "assets/ebp-805-lite.png",
        colorClass: "color-mini",
        description: "Toda la diversión de E-BIKER en formato compacto. Perfecta para jóvenes y principiantes. Cuenta con llave de seguridad parental para limitar la velocidad a 25 km/h de forma física."
    },
    {
        id: 16,
        name: "EBP BEAST CROSS",
        tag: "",
        tagClass: "",
        price: 3600.00,
        originalPrice: null,
        autonomy: 80, // km (60-120 range)
        speed: 85, // km/h (80+ range)
        type: "Cross / Off Road",
        rating: 4.8,
        reviews: 33,
        image: "assets/ebp-storm-x.png",
        colorClass: "color-adventure",
        description: "Una motocicleta diseñada exclusivamente para pistas de tierra suelta y barro. Tracción total seleccionable."
    },
    {
        id: 17,
        name: "EBP MICRO X",
        tag: "",
        tagClass: "",
        price: 850.00,
        originalPrice: null,
        autonomy: 45, // km (0-60 range)
        speed: 35, // km/h (0-45 range)
        type: "Cross / Off Road",
        rating: 4.2,
        reviews: 10,
        image: "assets/ebp-805-lite.png",
        colorClass: "",
        description: "El modelo más pequeño de la familia, ideal para niños que incursionan en el deporte del motocross."
    },
    {
        id: 18,
        name: "EBP JUNIOR CROSS",
        tag: "",
        tagClass: "",
        price: 1100.00,
        originalPrice: null,
        autonomy: 50, // km (0-60 range)
        speed: 40, // km/h (0-45 range)
        type: "Cross / Off Road",
        rating: 4.4,
        reviews: 15,
        image: "assets/ebp-805-lite.png",
        colorClass: "color-adventure",
        description: "Modelo juvenil intermedio. Conducción ágil y limitador de velocidad ajustable para mayor tranquilidad."
    },
    {
        id: 19,
        name: "EBP CROSS LIGHT",
        tag: "",
        tagClass: "",
        price: 1699.00,
        originalPrice: null,
        autonomy: 60, // km (0-60 range)
        speed: 45, // km/h (0-45 range)
        type: "Cross / Off Road",
        rating: 4.4,
        reviews: 22,
        image: "assets/ebp-805-lite.png",
        colorClass: "color-bronze",
        description: "Versión más ligera y accesible de nuestra gama de motocross. Muy balanceada y divertida."
    },
    {
        id: 20,
        name: "EBP FORCE Off-Road",
        tag: "",
        tagClass: "",
        price: 2590.00,
        originalPrice: null,
        autonomy: 75, // km (60-120 range)
        speed: 70, // km/h (45-80 range)
        type: "Cross / Off Road",
        rating: 4.5,
        reviews: 24,
        image: "assets/ebp-storm-x.png",
        colorClass: "color-hunter",
        description: "Robusta, duradera y con suspensión delantera reforzada. Lista para el maltrato diario en circuitos off-road."
    },

    // --- 4 Trail / Aventura ---
    {
        id: 21,
        name: "EBP TRAIL R",
        tag: "",
        tagClass: "",
        price: 3199.00,
        originalPrice: null,
        autonomy: 130, // km (120-200 range)
        speed: 85, // km/h (80+ range)
        type: "Trail / Aventura",
        rating: 4.9,
        reviews: 76,
        image: "assets/ebp-trail-r.png",
        colorClass: "",
        description: "Explora sin límites de batería. Diseñada para viajes de exploración y senderos mixtos de larga duración, cuenta con un asiento premium y sistema inteligente de regeneración de energía en descensos."
    },
    {
        id: 22,
        name: "EBP ADVENTURE",
        tag: "",
        tagClass: "",
        price: 2699.00,
        originalPrice: null,
        autonomy: 150, // km (120-200 range)
        speed: 85, // km/h (80+ range)
        type: "Trail / Aventura",
        rating: 4.7,
        reviews: 28,
        image: "assets/ebp-storm-x.png",
        colorClass: "color-adventure",
        description: "Preparada para cualquier expedición a lo desconocido. Cuenta con anclajes para alforjas integrados de fábrica, faro frontal LED de profundidad y modo de conducción 'Explorer' de alta autonomía."
    },
    {
        id: 23,
        name: "EBP RANGER 200",
        tag: "NUEVO",
        tagClass: "new",
        price: 3999.00,
        originalPrice: null,
        autonomy: 220, // km (200+ range)
        speed: 90, // km/h (80+ range)
        type: "Trail / Aventura",
        rating: 4.8,
        reviews: 19,
        image: "assets/ebp-trail-r.png",
        colorClass: "color-hunter",
        description: "Diseño robusto para largas travesías. Incluye baúl trasero de almacenamiento, GPS integrado de fábrica y suspensión regulable neumática."
    },
    {
        id: 24,
        name: "EBP PATHFINDER X",
        tag: "OFERTA",
        tagClass: "discount",
        price: 4299.00,
        originalPrice: 4799.00,
        autonomy: 240, // km (200+ range)
        speed: 75, // km/h (45-80 range)
        type: "Trail / Aventura",
        rating: 4.9,
        reviews: 37,
        image: "assets/ebp-trail-r.png",
        colorClass: "color-bronze",
        description: "La reina de la carretera y el sendero. Sistema de navegación, doble batería de alta densidad e iluminación completa de 360 grados."
    },
    // --- ACCESORIOS (Para "También te puede interesar") ---
    {
        id: 101,
        name: "Casco Off Road E-Biker",
        price: 199.00,
        type: "Accesorio",
        rating: 4.8,
        reviews: 56,
        image: "assets/ebp-helmet.png",
        colorClass: "",
        description: "Casco protector de alta resistencia homologado para motocross y off-road."
    },
    {
        id: 102,
        name: "Guantes de Protección",
        price: 49.00,
        type: "Accesorio",
        rating: 4.7,
        reviews: 32,
        image: "assets/ebp-gloves.png",
        colorClass: "",
        description: "Guantes reforzados con protección de nudillos y palma antideslizante."
    },
    {
        id: 103,
        name: "Cargador Rápido 72V",
        price: 199.00,
        type: "Accesorio",
        rating: 4.9,
        reviews: 18,
        image: "assets/ebp-charger.png",
        colorClass: "",
        description: "Carga rápida inteligente para baterías de litio de alto rendimiento."
    },
    {
        id: 104,
        name: "Kit de Llantas Off Road",
        price: 299.00,
        type: "Accesorio",
        rating: 4.8,
        reviews: 24,
        image: "assets/ebp-tires.png",
        colorClass: "",
        description: "Par de llantas de alta tracción con tacos profundos para terrenos difíciles."
    },
    {
        id: 105,
        name: "Protector de Manos",
        price: 59.00,
        type: "Accesorio",
        rating: 4.6,
        reviews: 15,
        image: "assets/ebp-guards.png",
        colorClass: "",
        description: "Protectores acrílicos contra viento, ramas y caídas en el manillar."
    },
    // --- BATERÍAS ---
    {
        id: 201,
        name: "Batería de Litio 72V 40Ah",
        price: 899.00,
        type: "Batería",
        rating: 4.9,
        reviews: 42,
        image: "fa-battery-full",
        isIcon: true,
        colorClass: "",
        description: "Batería de celdas de litio de alta densidad para máxima autonomía. Compatible con modelos EBP 805 PRO, STORM X y TRAIL R."
    }
];

// --- APP STATE ---
let cart = [];
let currentLayout = 'grid'; // 'grid' or 'list'
let activeFilters = {
    priceMax: 6000,
    autonomy: [], // array of selected ranges e.g. ['0-60', '60-120']
    speed: [],    // array of selected ranges e.g. ['45-80']
    type: []      // array of selected strings e.g. ['Enduro Eléctrica']
};
let searchQuery = "";

// --- DOM ELEMENTS ---
const productGrid = document.getElementById('productGrid');
const productCountEl = document.getElementById('productCount');
const sortBySelect = document.getElementById('sortBy');
const gridLayoutBtn = document.getElementById('gridLayoutBtn');
const listLayoutBtn = document.getElementById('listLayoutBtn');
const searchInput = document.getElementById('searchInput');

// Filters elements
const priceRangeInput = document.getElementById('priceRange');
const priceCurrentValueLabel = document.getElementById('priceCurrentValue');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const applyFiltersBtn = document.getElementById('applyFiltersBtn');
const sidebarFilters = document.getElementById('sidebarFilters');

// Cart elements
const cartDrawer = document.getElementById('cartDrawer');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
const cartBadge = document.getElementById('cartBadge');
const cartEmptyMessage = document.getElementById('cartEmptyMessage');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const startShoppingBtn = document.getElementById('startShoppingBtn');

// Modal elements
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalBodyLayout = document.getElementById('modalBodyLayout');

// Mobile nav elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

// Toast notification
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    renderAll();
    setupEventListeners();
    updateFilterCounts();
});

// --- RENDER FUNCTION ---
function renderAll() {
    // 1. Filter products
    let filteredProducts = PRODUCTS.filter(p => {
        // Price filter
        if (p.price > activeFilters.priceMax) return false;

        // Search Query filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase().trim();
            const matchesName = p.name.toLowerCase().includes(query);
            const matchesType = p.type.toLowerCase().includes(query);
            const matchesDesc = p.description.toLowerCase().includes(query);
            if (!matchesName && !matchesType && !matchesDesc) return false;
        }

        // Autonomy filter
        if (activeFilters.autonomy.length > 0) {
            let matchesAutonomy = false;
            for (let range of activeFilters.autonomy) {
                if (range === '0-60' && p.autonomy <= 60) matchesAutonomy = true;
                else if (range === '60-120' && p.autonomy > 60 && p.autonomy <= 120) matchesAutonomy = true;
                else if (range === '120-200' && p.autonomy > 120 && p.autonomy <= 200) matchesAutonomy = true;
                else if (range === '200+' && p.autonomy > 200) matchesAutonomy = true;
            }
            if (!matchesAutonomy) return false;
        }

        // Max Speed filter
        if (activeFilters.speed.length > 0) {
            let matchesSpeed = false;
            for (let range of activeFilters.speed) {
                if (range === '0-45' && p.speed <= 45) matchesSpeed = true;
                else if (range === '45-80' && p.speed > 45 && p.speed <= 80) matchesSpeed = true;
                else if (range === '80+' && p.speed > 80) matchesSpeed = true;
            }
            if (!matchesSpeed) return false;
        }

        // Type filter
        if (activeFilters.type.length > 0) {
            if (!activeFilters.type.includes(p.type)) return false;
        }

        return true;
    });

    // 2. Sort products
    const sortBy = sortBySelect.value;
    if (sortBy === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'autonomy') {
        filteredProducts.sort((a, b) => b.autonomy - a.autonomy);
    } else {
        // 'popular' default sorting (by rating and reviews)
        filteredProducts.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
    }

    // 3. Render HTML
    productCountEl.textContent = `${filteredProducts.length} modelo${filteredProducts.length !== 1 ? 's' : ''} disponible${filteredProducts.length !== 1 ? 's' : ''}`;
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="no-products-message" style="grid-column: span 3; text-align: center; padding: 50px 20px; color: var(--text-secondary);">
                <i class="fa-solid fa-bicycle" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 15px;"></i>
                <p>No se encontraron motocicletas con los filtros seleccionados.</p>
                <button class="btn btn-secondary" id="resetFiltersLink" style="margin-top: 15px;">Limpiar Filtros</button>
            </div>
        `;
        document.getElementById('resetFiltersLink')?.addEventListener('click', resetAllFilters);
        return;
    }

    // Grid layout vs List layout classes
    if (currentLayout === 'list') {
        productGrid.classList.add('list-view');
    } else {
        productGrid.classList.remove('list-view');
    }

    productGrid.innerHTML = filteredProducts.map(p => {
        const tagHTML = p.tag ? `<span class="product-tag ${p.tagClass}">${p.tag}</span>` : '';
        const originalPriceHTML = p.originalPrice ? `<span class="original-price">$${formatNumber(p.originalPrice)}</span>` : '';
        const priceClass = p.originalPrice ? 'price-container has-discount' : 'price-container';
        
        return `
            <article class="product-card">
                ${tagHTML}
                <div class="product-image-box">
                    <img src="${p.image}" alt="${p.name}" class="product-img ${p.colorClass}" loading="lazy">
                </div>
                <div class="product-details">
                    <div class="product-info-col">
                        <h3 class="product-title" onclick="openProductModal(${p.id})">${p.name}</h3>
                        <div class="product-specs">
                            <div class="spec-line">
                                <i class="fa-solid fa-gauge-high"></i>
                                <span>${p.autonomy} km autonomía</span>
                            </div>
                            <div class="spec-line">
                                <i class="fa-solid fa-bolt"></i>
                                <span>${p.speed} km/h velocidad máx.</span>
                            </div>
                            <div class="spec-line">
                                <i class="fa-solid fa-circle-info"></i>
                                <span>${p.type}</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-card-footer">
                        <div class="pricing-rating-wrapper">
                            <div class="${priceClass}">
                                ${originalPriceHTML}
                                <span class="current-price">$${formatNumber(p.price)}</span>
                            </div>
                            <div class="rating-container">
                                <i class="fa-solid fa-star"></i>
                                <span><strong>${p.rating}</strong> (${p.reviews})</span>
                            </div>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${p.id})" aria-label="Añadir al carrito">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// --- DYNAMIC FILTER COUNTS ---
function updateFilterCounts() {
    // Counts for Autonomy
    const countAuto1 = PRODUCTS.filter(p => p.autonomy <= 60).length;
    const countAuto2 = PRODUCTS.filter(p => p.autonomy > 60 && p.autonomy <= 120).length;
    const countAuto3 = PRODUCTS.filter(p => p.autonomy > 120 && p.autonomy <= 200).length;
    const countAuto4 = PRODUCTS.filter(p => p.autonomy > 200).length;

    document.getElementById('count-auto-1').textContent = countAuto1;
    document.getElementById('count-auto-2').textContent = countAuto2;
    document.getElementById('count-auto-3').textContent = countAuto3;
    document.getElementById('count-auto-4').textContent = countAuto4;

    // Counts for Speed
    const countSpeed1 = PRODUCTS.filter(p => p.speed <= 45).length;
    const countSpeed2 = PRODUCTS.filter(p => p.speed > 45 && p.speed <= 80).length;
    const countSpeed3 = PRODUCTS.filter(p => p.speed > 80).length;

    document.getElementById('count-speed-1').textContent = countSpeed1;
    document.getElementById('count-speed-2').textContent = countSpeed2;
    document.getElementById('count-speed-3').textContent = countSpeed3;

    // Counts for Type
    const countType1 = PRODUCTS.filter(p => p.type === "Enduro Eléctrica").length;
    const countType2 = PRODUCTS.filter(p => p.type === "Cross / Off Road").length;
    const countType3 = PRODUCTS.filter(p => p.type === "Trail / Aventura").length;

    document.getElementById('count-type-1').textContent = countType1;
    document.getElementById('count-type-2').textContent = countType2;
    document.getElementById('count-type-3').textContent = countType3;
}

// --- EVENT LISTENERS SETUP ---
function setupEventListeners() {
    // Layout switcher
    gridLayoutBtn.addEventListener('click', () => {
        currentLayout = 'grid';
        gridLayoutBtn.classList.add('active');
        listLayoutBtn.classList.remove('active');
        renderAll();
    });
    listLayoutBtn.addEventListener('click', () => {
        currentLayout = 'list';
        listLayoutBtn.classList.add('active');
        gridLayoutBtn.classList.remove('active');
        renderAll();
    });

    // Sorting dropdown
    sortBySelect.addEventListener('change', renderAll);

    // Search bar
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderAll();
    });

    // Price range slider
    priceRangeInput.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        activeFilters.priceMax = val;
        priceCurrentValueLabel.textContent = `$${formatNumber(val)}`;
    });
    // Triggers render on release of slider to improve performance
    priceRangeInput.addEventListener('change', renderAll);

    // Collapsible filters sidebar headers
    document.querySelectorAll('.filter-group-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('collapsed');
            const content = btn.nextElementSibling;
            if (btn.classList.contains('collapsed')) {
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
            } else {
                content.style.maxHeight = '300px';
                content.style.opacity = '1';
            }
        });
    });

    // Sidebar clear all button
    clearFiltersBtn.addEventListener('click', resetAllFilters);

    // Sidebar Apply filters button (vital for mobile users)
    applyFiltersBtn.addEventListener('click', () => {
        // Collect checked filters
        const autonomyChecked = Array.from(document.querySelectorAll('input[name="autonomy"]:checked')).map(cb => cb.value);
        const speedChecked = Array.from(document.querySelectorAll('input[name="speed"]:checked')).map(cb => cb.value);
        const typeChecked = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);

        activeFilters.autonomy = autonomyChecked;
        activeFilters.speed = speedChecked;
        activeFilters.type = typeChecked;

        renderAll();
        
        // On mobile, auto-scroll down to product grid
        if (window.innerWidth <= 992) {
            document.getElementById('productGrid').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Cart toggle actions - redirect to cart page
    cartToggleBtn.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));
    if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', () => toggleCartDrawer(false));
    if (startShoppingBtn) startShoppingBtn.addEventListener('click', () => toggleCartDrawer(false));

    // Checkout simulator action
    checkoutBtn.addEventListener('click', simulateCheckout);

    // Newsletter submit simulation
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        showToast(`¡Suscrito con éxito! Enviado a: ${email}`);
        document.getElementById('newsletterEmail').value = '';
    });

    // Modal close events
    closeModalBtn.addEventListener('click', () => toggleModal(false));
    modalOverlay.addEventListener('click', () => toggleModal(false));

    // Mobile nav toggle hamburger click
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-xmark');
    });

    // Close mobile nav when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-xmark');
        });
    });
}

// --- FILTER RESET FUNCTION ---
function resetAllFilters() {
    priceRangeInput.value = 6000;
    priceCurrentValueLabel.textContent = "$6,000";
    
    document.querySelectorAll('.sidebar-filters input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });

    activeFilters = {
        priceMax: 6000,
        autonomy: [],
        speed: [],
        type: []
    };
    searchQuery = "";
    searchInput.value = "";

    renderAll();
}

// --- CART LOGIC ---
function toggleCartDrawer(isOpen) {
    if (isOpen) {
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent page scroll
    } else {
        cartDrawer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItemIndex = cart.findIndex(item => item.id === productId);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`¡${product.name} añadida al carrito!`);
    
    // Animate cart badge
    cartBadge.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
    }, 200);
}

function updateCartQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += delta;
    
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }

    saveCartToStorage();
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
    showToast("Producto eliminado del carrito.");
}

function updateCartUI() {
    // 1. Calculate stats
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Free shipping above 300, otherwise 25 (dummy value)
    const shippingCost = subtotal > 300 || subtotal === 0 ? 0 : 25;
    const total = subtotal + shippingCost;

    // 2. Update Badge & Summary Labels
    cartBadge.textContent = totalItems;
    cartSubtotalEl.textContent = `$${formatNumber(subtotal)}`;
    
    if (shippingCost === 0) {
        document.getElementById('cartShipping').textContent = "Gratis";
        document.getElementById('cartShipping').classList.add('green-text');
    } else {
        document.getElementById('cartShipping').textContent = `$${formatNumber(shippingCost)}`;
        document.getElementById('cartShipping').classList.remove('green-text');
    }
    
    cartTotalEl.textContent = `$${formatNumber(total)}`;

    // 3. Toggle empty vs filled container
    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'flex';
        cartItemsContainer.style.display = 'none';
        document.getElementById('cartSummary').style.display = 'none';
    } else {
        cartEmptyMessage.style.display = 'none';
        cartItemsContainer.style.display = 'flex';
        document.getElementById('cartSummary').style.display = 'block';

        // 4. Render Cart Items List
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="${item.colorClass}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">$${formatNumber(item.price)}</span>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})" aria-label="Eliminar item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `).join('');
    }
}

// --- STRIPE CHECKOUT SIMULATOR ---
function simulateCheckout() {
    if (cart.length === 0) return;

    checkoutBtn.disabled = true;
    checkoutBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> PROCESANDO CON STRIPE...`;

    // Simulate Stripe payment processing window
    setTimeout(() => {
        showToast("¡Pago procesado con Stripe correctamente! Redirigiendo...");
        
        setTimeout(() => {
            cart = [];
            saveCartToStorage();
            updateCartUI();
            toggleCartDrawer(false);
            
            checkoutBtn.disabled = false;
            checkoutBtn.innerHTML = `PROCEDER AL PAGO CON STRIPE`;

            alert("🎉 ¡Simulación de pago exitosa!\n\nGracias por su compra en E-BIKER Performance. Su pedido ha sido registrado a través del sandbox seguro de Stripe.");
        }, 1500);

    }, 2000);
}

// --- PRODUCT DETAILS MODAL ---
function toggleModal(isOpen) {
    if (isOpen) {
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const tagHTML = product.tag ? `<span class="modal-tag ${product.tagClass}">${product.tag}</span>` : '';
    const originalPriceHTML = product.originalPrice ? `<span class="old-price">$${formatNumber(product.originalPrice)}</span>` : '';
    
    modalBodyLayout.innerHTML = `
        <div class="modal-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="${product.colorClass}">
        </div>
        <div class="modal-info-wrapper">
            ${tagHTML}
            <h2 class="modal-title">${product.name}</h2>
            <span class="modal-type">${product.type}</span>
            <p class="modal-desc">${product.description}</p>
            
            <div class="modal-specs-grid">
                <div class="modal-spec-item">
                    <span class="modal-spec-label">Autonomía</span>
                    <span class="modal-spec-val">${product.autonomy} km</span>
                </div>
                <div class="modal-spec-item">
                    <span class="modal-spec-label">Velocidad Máxima</span>
                    <span class="modal-spec-val">${product.speed} km/h</span>
                </div>
                <div class="modal-spec-item">
                    <span class="modal-spec-label">Valoración</span>
                    <span class="modal-spec-val"><i class="fa-solid fa-star" style="color: #ffaa00;"></i> ${product.rating} / 5.0</span>
                </div>
                <div class="modal-spec-item">
                    <span class="modal-spec-label">Garantía oficial</span>
                    <span class="modal-spec-val">2 años</span>
                </div>
            </div>

            <div class="modal-purchase-block">
                <div class="modal-price-box">
                    ${originalPriceHTML}
                    <span class="price orange-text">$${formatNumber(product.price)}</span>
                </div>
                <button class="btn btn-primary modal-add-btn" onclick="addToCart(${product.id}); toggleModal(false);">
                    <i class="fa-solid fa-cart-shopping"></i> Añadir al Carrito
                </button>
            </div>
        </div>
    `;

    toggleModal(true);
}

// --- LOCAL STORAGE HELPERS ---
function saveCartToStorage() {
    localStorage.setItem("ebiker_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
    const storedCart = localStorage.getItem("ebiker_cart");
    if (storedCart) {
        try {
            cart = JSON.parse(storedCart);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

// --- UTILITY FORMATTING FUNCTIONS ---
function formatNumber(num) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
