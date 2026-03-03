import type { Translations } from "./translations";

export const es: Translations = {
  locale: "es",
  // -- Layout / meta --
  meta: {
    title:
      "Kakeibo — La app de presupuesto consciente | Gasta en lo que importa",
    description:
      "El arte japonés del gasto consciente, ahora en una app de presupuesto simple y privada. Registra gastos, reflexiona sobre tus hábitos y ahorra más. Pago único. Sin suscripciones, sin anuncios, sin rastreo.",
  },

  // -- Language switcher --
  languageSwitcher: {
    label: "Idioma",
  },

  // -- Hero --
  hero: {
    logoAlt: "Logo de Kakeibo - cuatro círculos situados en diagonal",
    heading: "Kakeibo",
    subheading: "Gasta en lo que importa",
    tagline:
      "Registra tus gastos, reflexiona sobre ellos y descubre dónde va realmente tu dinero. Mes a mes.",
    joinBeta: "Únete a la beta",
    betaEmailSubject: "Quiero unirme a la beta de Kakeibo",
    betaEmailBody: "¡Hola! Me gustaría unirme a la beta.\n\nMi dispositivo (iOS/Android): \nMi email: ",
    appStoreLabel: "Descárgalo en",
    appStore: "App Store",
    playStoreLabel: "Disponible en",
    playStore: "Google Play",
    comingSoon: "Próximamente en App Store y Google Play",
    principles: {
      offline: "100% offline",
      privacy: "Privacidad ante todo",
      noAds: "Sin anuncios",
      noTracking: "Sin rastreo",
    },
    screenshotAlt: "App Kakeibo mostrando resumen del presupuesto",
  },

  // -- Philosophy --
  philosophy: {
    title: "Planifica, registra, reflexiona.\nMes a mes.",
    subtitle:
      "Kakeibo  se basa en un método de presupuesto que data de 1904 en Japón. La idea es simple: la conciencia cambia el comportamiento. Sin hojas de cálculo, sin algoritmos: solo tú y tus decisiones.",
    steps: {
      plan: {
        title: "Planifica",
        description:
          "Al inicio de cada mes, define tu presupuesto. ¿Cuánto ganarás? ¿Cuáles son tus gastos fijos? ¿Cuánto quieres ahorrar? Haz un plan que refleje tus valores.",
      },
      track: {
        title: "Registra",
        description:
          "Durante el mes, registra tus gastos. Cada entrada es un momento de conciencia. Sin importaciones automáticas, sin conexiones bancarias: el acto de registrar es lo importante.",
      },
      reflect: {
        title: "Reflexiona",
        description:
          "Al final del mes, revisa lo que pasó. ¿Cumpliste tus promesas? ¿Qué te sorprendió? La reflexión es donde ocurre la magia: es cuando aprendes y cambias tus hábitos para gastar en lo que realmente te importa.",
      },
    },
  },

  // -- Categories --
  categories: {
    title: "Cada gasto tiene su lugar",
    subtitle:
      "Kakeibo organiza tus gastos en cuatro categorías. Sin presupuestos complejos, solo una forma clara de entender a dónde va realmente tu dinero.",
    needs: {
      title: "Necesidades",
      description:
        "Lo esencial. Alquiler, comida, servicios, seguros: las cosas sin las que no puedes vivir.",
      tags: ["🏠 Alquiler", "🛡️ Seguros", "⚡ Servicios"],
      percent: "45% del presupuesto",
    },
    wants: {
      title: "Deseos",
      description:
        "Lo que está bien tener. Comer fuera, compras, entretenimiento: agradable pero no esencial.",
      tags: ["🍴 Restaurantes", "🛍 Compras", "🎬 Cine"],
      percent: "28% del presupuesto",
    },
    culture: {
      title: "Cultura",
      description:
        "Crecimiento y enriquecimiento. Libros, cursos, museos, hobbies: inversiones en tu yo futuro.",
      tags: ["📚 Libros", "🎧 Música", "🎨 Arte"],
      percent: "17% del presupuesto",
    },
    unexpected: {
      title: "Imprevistos",
      description:
        "Las sorpresas de la vida. Reparaciones del coche, facturas médicas, regalos: los gastos que no esperabas.",
      tags: ["🚑 Reparaciones", "🎁 Regalos", "🩺 Médico"],
      percent: "10% del presupuesto",
    },
  },

  // -- Features --
  features: {
    title: "Todo lo que necesitas,\nnada de más",
    subtitle:
      "Simple por diseño. Sin funciones innecesarias, sin complejidad. Cada pantalla tiene un propósito.",
    budget: {
      title: "Asistente de presupuesto mensual",
      description:
        "Empieza cada mes con claridad. Un asistente simple y guiado te lleva paso a paso para definir tus ingresos, gastos fijos y metas de ahorro. Copia del mes anterior para ahorrar tiempo.",
      bullets: [
        "Crea presupuestos paso a paso",
        "Copia la configuración del mes anterior",
        "Define metas de ahorro y promesas personales",
      ],
      screenshotAlt: "Asistente de presupuesto mostrando gastos fijos",
    },
    statistics: {
      title: "Estadísticas claras y bonitas",
      description:
        "Ve tus patrones de gasto de un vistazo. Semanal, mensual o anual, con desgloses por categoría, promedios diarios y comparaciones entre periodos.",
      bullets: [
        "Vistas por semana, mes y año",
        "Desglosa por categoría y etiqueta",
        "Compara con periodos anteriores",
      ],
      screenshotAlt: "Estadísticas mostrando desglose de gastos",
    },
    reflection: {
      title: "Reflexión de fin de mes",
      description:
        "Este es el corazón de Kakeibo. Una reflexión guiada que te lleva por tu mes, semana a semana, categoría por categoría, etiqueta por etiqueta. ¿Cumpliste tus promesas? ¿Qué harás diferente?",
      bullets: [
        "Proceso de revisión guiado en 5 pasos",
        "Desglosa los gastos semana a semana",
        "Revisa tus metas y promesas personales",
      ],
      screenshotAlt: "Reflexión de fin de mes",
    },
    tags: {
      title: "Etiquetas personalizadas",
      description:
        "Las etiquetas van más allá de las categorías. Rastrea gastos de vacaciones, comidas de trabajo o cualquier tema que te importe. Cada etiqueta tiene su propio emoji para detectar patrones al instante.",
      bullets: [
        "Crea etiquetas personalizadas con emojis",
        "Emojis para reconocimiento rápido",
        "Haz seguimiento de gastos entre categorías",
      ],
      screenshotAlt: "Función de etiquetas personalizadas",
    },
    mini: {
      search: {
        title: "Buscar y filtrar",
        description:
          "Encuentra cualquier transacción al instante. Filtra por fecha, categoría, etiqueta o tipo.",
      },
      export: {
        title: "Exportar datos",
        description:
          "Exporta tus datos cuando quieras. Son tus datos: llévalos a donde quieras.",
      },
      reminders: {
        title: "Recordatorios respetuosos",
        description:
          "Pequeños empujoncitos diarios, semanales o mensuales para mantener tu hábito de registro.",
      },
      currencies: {
        title: "27 monedas",
        description:
          "De USD a JPY o EUR. Usa la moneda que se adapte a tu vida.",
      },
    },
  },

  // -- Privacy --
  privacy: {
    title: "Tu dinero, tus reglas",
    subtitle:
      "Kakeibo nace de una idea simple: tus datos financieros son tuyos. No se suben a ningún servidor. No se comparten con nadie.",
    offline: {
      title: "100% Sin conexión",
      description:
        "Todo funciona en tu dispositivo. Sin internet, sin sincronización en la nube, sin servidores. Tus datos viven en una base de datos local: rápida, confiable y completamente bajo tu control.",
    },
    privacyFirst: {
      title: "Privacidad ante todo",
      description:
        "Sin crear cuenta. Sin email requerido. Sin recolección de datos de ningún tipo. No sabemos quién eres, en qué gastas o cómo usas la app. Y nos gusta así.",
    },
    noAds: {
      title: "Sin anuncios. Ni ahora ni nunca",
      description:
        "Pagas una vez, tienes la app completa. Sin banners, sin pop-ups, sin contenido patrocinado. Una experiencia limpia y sin distracciones que respeta tu atención.",
    },
    dataExport: {
      title: "Tus datos, siempre exportables",
      description:
        "Exporta tus datos en CSV o llévate la base de datos SQLite completa. Edítala, hazle una copia de seguridad, restáurala — no vamos a impedírtelo. Tu historial financiero es tuyo.",
    },
  },

  // -- Pricing --
  pricing: {
    title: "Un precio. Para siempre.",
    subtitle:
      "Sin suscripciones. Sin compras dentro de la app. Sin niveles premium. Paga una vez, úsala para siempre. Precios regionales. Así deberían ser las cosas.",
    subscriptions: {
      title: "Apps con suscripción",
      items: [
        "5–15€/mes, para siempre",
        "Tus datos en sus servidores",
        "Anuncios y ventas adicionales",
        "Pierdes acceso si dejas de pagar",
      ],
    },
    kakeibo: {
      title: "Kakeibo",
      items: [
        "Compra única",
        "Los datos se quedan en tu dispositivo",
        "Sin anuncios, sin ventas adicionales",
        "Tuyo para siempre",
      ],
    },
    vs: "vs.",
  },

  // -- CTA & Footer --
  cta: {
    heading: "Empieza a gastar en lo que importa",
    description:
      "Cambia tu relación con el dinero. No con hojas de cálculo ni algoritmos, sino con conciencia. Mes a mes.",
    joinBeta: "Únete a la beta",
    betaEmailSubject: "Quiero unirme a la beta de Kakeibo",
    betaEmailBody: "¡Hola! Me gustaría unirme a la beta.\n\nMi dispositivo (iOS/Android): \nMi email: ",
    appStoreLabel: "Descárgalo en",
    appStore: "App Store",
    playStoreLabel: "Disponible en",
    playStore: "Google Play",
    comingSoon: "Próximamente en App Store y Google Play",
  },
  footer: {
    appName: "Kakeibo",
    tagline: "Gasta en lo que importa",
    contact: "Contacto",
    privacyPolicy: "Política de privacidad",
    rights: "Todos los derechos reservados.",
  },

  // -- Privacy Policy page --
  privacyPage: {
    meta: {
      title: "Política de Privacidad - Kakeibo",
      description:
        "Política de privacidad de Kakeibo. No recopilamos datos. Tu información financiera permanece en tu dispositivo. 100% offline, sin cuentas, sin rastreo.",
    },
    backToHome: "Volver al inicio",
    heading: "Política de privacidad",
    lastUpdated: "Última actualización: 27 de diciembre de 2025",
    highlight: "Kakeibo no recopila datos. Ninguno. Cero.",
    section1: {
      title: "La versión corta",
      p1: "Tus datos financieros permanecen en tu dispositivo. No los recopilamos, no los almacenamos, no los transmitimos y no los queremos.",
    },
    section2: {
      title: "Lo que no recopilamos",
      intro: "Para ser completamente claros, no recopilamos:",
      items: [
        "Información personal",
        "Datos financieros o transacciones",
        "Analíticas de uso",
        "Información del dispositivo",
        "Datos de ubicación",
        "Nada más",
      ],
    },
    section3: {
      title: "Cómo funciona",
      p1: "Kakeibo es una app 100% offline. Todos tus datos se almacenan localmente en tu dispositivo. No hay cuentas, no hay sincronización en la nube, no hay servidores recibiendo tu información.",
      p2: "Cuando eliminas la app, tus datos se van con ella.",
    },
    section4: {
      title: "Contacto",
      p1: "Si tienes alguna pregunta sobre esta política de privacidad, puedes contactarnos en hola@getkakeibo.com.",
    },
  },
} satisfies Translations;
