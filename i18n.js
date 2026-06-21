// i18n.js – E-BIKER Store Translation Engine
// -------------------------------------------------
// Translation data (key → {en, es, fr, de})
const translations = {
  heroTitle: {
    en: "ELECTRIC POWER",
    es: "POTENCIA ELÉCTRICA",
    fr: "PUISSANCE ÉLECTRIQUE",
    de: "ELEKTRISCHE KRAFT"
  },
  withoutLimits: {
    en: "WITHOUT LIMITS",
    es: "SIN LÍMITES",
    fr: "SANS LIMITES",
    de: "OHNE GRENZEN"
  },
  heroSubtitle: {
    en: "Electric motorcycles designed for adventure, speed and the future.",
    es: "Motos eléctricas diseñadas para la aventura, la velocidad y el futuro.",
    fr: "Motos électriques conçues pour l'aventure, la vitesse et le futur.",
    de: "Elektromotorräder, die für Abenteuer, Geschwindigkeit und die Zukunft entwickelt wurden."
  },
  cart: {
    en: "Cart",
    es: "Carrito",
    fr: "Panier",
    de: "Warenkorb"
  },
  metricElectric: {
    en: "100% Electric",
    es: "100% Eléctricas",
    fr: "100% Électrique",
    de: "100% Elektrisch"
  },
  metricZero: {
    en: "Zero emissions",
    es: "Cero emisiones",
    fr: "Zéro émission",
    de: "Null Emissionen"
  },
  accountText: {
    en: "Account",
    es: "Cuenta",
    fr: "Compte",
    de: "Konto"
  },
  navInicio: {
    en: "HOME",
    es: "INICIO",
    fr: "ACCUEIL",
    de: "STARTSEITE"
  },
  navMotos: {
    en: "MOTORCYCLES",
    es: "MOTOS",
    fr: "MOTOS",
    de: "MOTORRÄDER"
  },
  navAccesorios: {
    en: "ACCESSORIES",
    es: "ACCESORIOS",
    fr: "ACCESSOIRES",
    de: "ZUBEHÖR"
  },
  navBaterias: {
    en: "BATTERIES",
    es: "BATERÍAS",
    fr: "BATTERIES",
    de: "BATTERIEN"
  },
  navRepuestos: {
    en: "SPARE PARTS",
    es: "REPUESTOS",
    fr: "PIÈCES DET.",
    de: "ERSATZTEILE"
  },
  navSoporte: {
    en: "SUPPORT",
    es: "SOPORTE",
    fr: "SOUTIEN",
    de: "SUPPORT"
  },
  breadcrumbInicio: {
    en: "Home",
    es: "Inicio",
    fr: "Accueil",
    de: "Startseite"
  },
  breadcrumbCart: {
    en: "Shopping Cart",
    es: "Carrito de compras",
    fr: "Panier d'achat",
    de: "Warenkorb"
  },
  cartPageTitle: {
    en: "Shopping Cart",
    es: "Carrito de compras",
    fr: "Votre Panier",
    de: "Ihr Warenkorb"
  },
  cartPageSubtitle: {
    en: "Review your products before proceeding to checkout.",
    es: "Revisa tus productos antes de continuar con el pago.",
    fr: "Vérifiez vos produits avant de procéder au paiement.",
    de: "Überprüfen Sie Ihre Produkte, bevor Sie zur Kasse gehen."
  }
};

// Helper to translate all elements with data-i18n attribute
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  // Translate placeholders (Search Box)
  const placeholderMap = {
    searchInput: {
      en: "Search motorcycles, accessories...",
      es: "Buscar motos, accesorios...",
      fr: "Rechercher motos, accessoires...",
      de: "Motorräder, Zubehör suchen..."
    }
  };

  const desktopSearch = document.getElementById('searchInput');
  if (desktopSearch && placeholderMap.searchInput && placeholderMap.searchInput[lang]) {
    desktopSearch.setAttribute('placeholder', placeholderMap.searchInput[lang]);
  }

  const mobileSearch = document.getElementById('mobileSearchInput');
  if (mobileSearch && placeholderMap.searchInput && placeholderMap.searchInput[lang]) {
    mobileSearch.setAttribute('placeholder', placeholderMap.searchInput[lang]);
  }
}

// Update active styling in UI across desktop and mobile selectors
function updateActiveLanguageUI(lang) {
  const triggerText = {
    en: { code: 'EN', name: 'English' },
    es: { code: 'ES', name: 'Español' },
    fr: { code: 'FR', name: 'Français' },
    de: { code: 'DE', name: 'Deutsch' }
  };
  
  const trigger = document.getElementById('langDropdownTrigger');
  if (trigger && triggerText[lang]) {
    trigger.querySelector('.lang-flag-text').textContent = triggerText[lang].code;
    trigger.querySelector('.lang-name-text').textContent = triggerText[lang].name;
  }

  // Update active state in desktop dropdown menu
  document.querySelectorAll('.lang-dropdown-item').forEach(item => {
    if (item.getAttribute('data-lang') === lang) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update active state in mobile menu grid
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Language selector handler
function initLanguageSwitcher() {
  const saved = localStorage.getItem('lang') || 'en';
  applyTranslations(saved);
  updateActiveLanguageUI(saved);

  // Desktop Dropdown items click
  document.querySelectorAll('.lang-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      const lang = item.getAttribute('data-lang');
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
      updateActiveLanguageUI(lang);
    });
  });

  // Mobile Menu language buttons click
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
      updateActiveLanguageUI(lang);
    });
  });
}

// Run after DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
