// i18n.js – E-BIKER Store Translation Engine
// -------------------------------------------------
// Translation data (key → {en, es, fr, de, pt, it, ja, zh})
const translations = {
  heroTitle: {
    en: "ELECTRIC POWER",
    es: "POTENCIA ELÉCTRICA",
    fr: "PUISSANCE ÉLECTRIQUE",
    de: "ELEKTRISCHE KRAFT",
    pt: "POTÊNCIA ELÉTRICA",
    it: "POTENZA ELETTRICA",
    ja: "電動パワー",
    zh: "电动力量"
  },
  withoutLimits: {
    en: "WITHOUT LIMITS",
    es: "SIN LÍMITES",
    fr: "SANS LIMITES",
    de: "OHNE GRENZEN",
    pt: "SEM LIMITES",
    it: "SENZA LIMITI",
    ja: "限界を超えて",
    zh: "无限驾驭"
  },
  heroSubtitle: {
    en: "Electric motorcycles designed for adventure, speed and the future.",
    es: "Motos eléctricas diseñadas para la aventura, la velocidad y el futuro.",
    fr: "Motos électriques conçues pour l'aventure, la vitesse et le futur.",
    de: "Elektromotorräder, die für Abenteuer, Geschwindigkeit und die Zukunft entwickelt wurden.",
    pt: "Motos elétricas projetadas para aventura, velocidade e o futuro.",
    it: "Moto elettriche progettate per l'avventura, la velocità e il futuro.",
    ja: "冒険、スピード、未来のためにデザインされた電動バイク。",
    zh: "为冒险、速度和未来设计的电动摩托车。"
  },
  cart: {
    en: "Cart",
    es: "Carrito",
    fr: "Panier",
    de: "Warenkorb",
    pt: "Carrinho",
    it: "Carrello",
    ja: "カート",
    zh: "购物车"
  },
  metricElectric: {
    en: "100% Electric",
    es: "100% Eléctricas",
    fr: "100% Électrique",
    de: "100% Elektrisch",
    pt: "100% Elétrico",
    it: "100% Elettrico",
    ja: "100% 電動",
    zh: "100% 电动"
  },
  metricZero: {
    en: "Zero emissions",
    es: "Cero emisiones",
    fr: "Zéro émission",
    de: "Null Emissionen",
    pt: "Zero emissões",
    it: "Zero emissioni",
    ja: "ゼロエミッション",
    zh: "零排放"
  },
  accountText: {
    en: "Account",
    es: "Cuenta",
    fr: "Compte",
    de: "Konto",
    pt: "Conta",
    it: "Account",
    ja: "アカウント",
    zh: "账户"
  },
  navInicio: {
    en: "HOME",
    es: "INICIO",
    fr: "ACCUEIL",
    de: "STARTSEITE",
    pt: "INÍCIO",
    it: "HOME",
    ja: "ホーム",
    zh: "首页"
  },
  navMotos: {
    en: "MOTORCYCLES",
    es: "MOTOS",
    fr: "MOTOS",
    de: "MOTORRÄDER",
    pt: "MOTOS",
    it: "MOTO",
    ja: "バイク",
    zh: "摩托车"
  },
  navAccesorios: {
    en: "ACCESSORIES",
    es: "ACCESORIOS",
    fr: "ACCESSOIRES",
    de: "ZUBEHÖR",
    pt: "ACESSÓRIOS",
    it: "ACCESSORI",
    ja: "アクセサリー",
    zh: "配件"
  },
  navBaterias: {
    en: "BATTERIES",
    es: "BATERÍAS",
    fr: "BATTERIES",
    de: "BATTERIEN",
    pt: "BATERIAS",
    it: "BATTERIE",
    ja: "バッテリー",
    zh: "电池"
  },
  navRepuestos: {
    en: "SPARE PARTS",
    es: "REPUESTOS",
    fr: "PIÈCES DET.",
    de: "ERSATZTEILE",
    pt: "PEÇAS",
    it: "RICAMBI",
    ja: "スペアパーツ",
    zh: "备件"
  },
  navSoporte: {
    en: "SUPPORT",
    es: "SOPORTE",
    fr: "SOUTIEN",
    de: "SUPPORT",
    pt: "SUPORTE",
    it: "SUPPORTO",
    ja: "サポート",
    zh: "支持"
  },
  breadcrumbInicio: {
    en: "Home",
    es: "Inicio",
    fr: "Accueil",
    de: "Startseite",
    pt: "Início",
    it: "Home",
    ja: "ホーム",
    zh: "首页"
  },
  breadcrumbCart: {
    en: "Shopping Cart",
    es: "Carrito de compras",
    fr: "Panier d'achat",
    de: "Warenkorb",
    pt: "Carrinho de compras",
    it: "Carrello",
    ja: "ショッピングカート",
    zh: "购物车"
  },
  cartPageTitle: {
    en: "Shopping Cart",
    es: "Carrito de compras",
    fr: "Votre Panier",
    de: "Ihr Warenkorb",
    pt: "Carrinho de compras",
    it: "Carrello",
    ja: "ショッピングカート",
    zh: "购物车"
  },
  cartPageSubtitle: {
    en: "Review your products before proceeding to checkout.",
    es: "Revisa tus productos antes de continuar con el pago.",
    fr: "Vérifiez vos produits avant de procéder au paiement.",
    de: "Überprüfen Sie Ihre Produkte, bevor Sie zur Kasse gehen.",
    pt: "Revise seus produtos antes de finalizar a compra.",
    it: "Rivedi i tuoi prodotti prima di procedere al pagamento.",
    ja: "チェックアウトに進む前に商品をご確認ください。",
    zh: "结账前请检查您的商品。"
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
      de: "Motorräder, Zubehör suchen...",
      pt: "Buscar motos, acessórios...",
      it: "Cerca moto, accessori...",
      ja: "バイク、アクセサリーを検索...",
      zh: "搜索摩托车、配件..."
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

// Update active styling in footer language selector buttons
function updateActiveLanguageUI(lang) {
  // Update active state in footer language buttons
  document.querySelectorAll('.footer-lang-btn').forEach(btn => {
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

  // Footer language buttons click
  document.querySelectorAll('.footer-lang-btn').forEach(btn => {
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
