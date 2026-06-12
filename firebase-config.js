// firebase-config.js — Achadinhos / Sonho Real Mix
// ATENÇÃO: este arquivo deve ser carregado APÓS os 4 scripts CDN do Firebase compat
// e ANTES de qualquer script de lógica (admin.js, login inline, etc.)
// Posição correta: final do <body>, depois dos CDNs que estão no <head>

(function () {
  var firebaseConfig = {
    apiKey:            "AIzaSyCCmbwpfXrfhoJWpx9IY7mrH3S6ETgji4E",
    authDomain:        "achadinhos-67f55.firebaseapp.com",
    projectId:         "achadinhos-67f55",
    storageBucket:     "achadinhos-67f55.firebasestorage.app",
    messagingSenderId: "1000429548987",
    appId:             "1:1000429548987:web:4fff9a87b3989a2055c09e",
    measurementId:     "G-HEL68K0MBH"
  };

  // Inicializa apenas uma vez (evita erro "Firebase App named '[DEFAULT]' already exists")
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Expõe globalmente para todos os scripts que vierem depois
  window.auth = firebase.auth();
  window.db   = firebase.firestore();

  // Atalhos de coleções usados pelo admin.js
  window.CONFIG_DOC   = window.db.collection('settings').doc('site');
  window.PRODUCTS_COL = window.db.collection('products');
})();
