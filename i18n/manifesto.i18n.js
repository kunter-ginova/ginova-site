/* ============================================
   GiNOVA — Manifesto Page Translations
   i18n/manifesto.i18n.js
   ============================================ */

(function() {
  "use strict";

  var MANIFESTO_TRANSLATIONS = {

    en: {
      nav: {
        brand1: "food innovation &",
        brand2: "science academy",
        paradigm: "Paradigm",
        research: "Research",
        people: "People"
      },
      article: {
        badge: "Position Paper",
        kicker: "Food Innovation and Science Academy",
        title: "On the Structural Failure of Global Food Strategy",
        subtitle: "Why the 1974 Paradigm Cannot Address the Crises It Created — and What Must Replace It",
        authorName: "Kunter Ilalan",
        authorAffil1: "Department of Food Engineering, Middle East Technical University",
        authorAffil2: "Founder & Director, GiNOVA Food Innovation & Science Academy",
        epigraph: "\"Within a decade, no child will go to bed hungry.\"",
        epigraphCite: "— Henry Kissinger, World Food Conference, Rome, 1974",
        refsTitle: "References"
      },
      footer: {
        tag: "Research · Education · Frameworks",
        explore: "Explore",
        contactTitle: "Contact",
        emailLabel: "Email",
        locationLabel: "Location",
        locationValue: "Ankara · Turkiye",
        newsletter: "Newsletter",
        newsletterBody: "Occasional notes on frameworks, publications, and seminars.",
        subscribe: "Subscribe",
        privacy: "Privacy",
        terms: "Terms",
        toTop: "Back to top"
      }
    },

    tr: {
      nav: {
        brand1: "gida inovasyon &",
        brand2: "bilim akademisi",
        paradigm: "Paradigma",
        research: "Arastirma",
        people: "Kadromuz"
      },
      article: {
        badge: "Pozisyon Makalesi",
        kicker: "Gida Inovasyon ve Bilim Akademisi",
        title: "Kuresel Gida Stratejisinin Yapisal Basarisizligi Uzerine",
        subtitle: "1974 Paradigmasi Neden Yarattigi Krizleri Cozemiyor — ve Onun Yerini Ne Almali",
        authorName: "Kunter Ilalan",
        authorAffil1: "Gida Muhendisligi Bolumu, Orta Dogu Teknik Universitesi",
        authorAffil2: "Kurucu & Direktor, GiNOVA Gida Inovasyon & Bilim Akademisi",
        epigraph: "\"On yil icinde hicbir cocuk ac yatmayacak.\"",
        epigraphCite: "— Henry Kissinger, Dunya Gida Konferansi, Roma, 1974",
        refsTitle: "Kaynaklar"
      },
      footer: {
        tag: "Arastirma · Egitim · Cerceveler",
        explore: "Kesfet",
        contactTitle: "Iletisim",
        emailLabel: "E-posta",
        locationLabel: "Konum",
        locationValue: "Ankara · Turkiye",
        newsletter: "Bulten",
        newsletterBody: "Cerceveler ve yayinlar hakkinda notlar.",
        subscribe: "Abone Ol",
        privacy: "Gizlilik",
        terms: "Kosullar",
        toTop: "Yukari don"
      }
    },

    de: {
      nav: {
        brand1: "lebensmittelinnovation &",
        brand2: "wissenschaftsakademie",
        paradigm: "Paradigma",
        research: "Forschung",
        people: "Team"
      },
      article: {
        badge: "Positionspapier",
        kicker: "Akademie fuer Lebensmittelinnovation und Wissenschaft",
        title: "Ueber das strukturelle Versagen der globalen Ernaehrungsstrategie",
        subtitle: "Warum das Paradigma von 1974 die Krisen, die es geschaffen hat, nicht loesen kann — und was es ersetzen muss",
        authorName: "Kunter Ilalan",
        authorAffil1: "Fachbereich Lebensmitteltechnik, Middle East Technical University",
        authorAffil2: "Gruender & Direktor, GiNOVA Akademie fuer Lebensmittelinnovation",
        epigraph: "\"Innerhalb eines Jahrzehnts wird kein Kind mehr hungrig zu Bett gehen.\"",
        epigraphCite: "— Henry Kissinger, Welternaehrungskonferenz, Rom, 1974",
        refsTitle: "Literaturverzeichnis"
      },
      footer: {
        tag: "Forschung · Bildung · Rahmenwerke",
        explore: "Entdecken",
        contactTitle: "Kontakt",
        emailLabel: "E-Mail",
        locationLabel: "Standort",
        locationValue: "Ankara · Tuerkiye",
        newsletter: "Newsletter",
        newsletterBody: "Hinweise zu Rahmenwerken und Publikationen.",
        subscribe: "Abonnieren",
        privacy: "Datenschutz",
        terms: "AGB",
        toTop: "Nach oben"
      }
    },

    it: {
      nav: {
        brand1: "innovazione alimentare &",
        brand2: "accademia di scienze",
        paradigm: "Paradigma",
        research: "Ricerca",
        people: "Persone"
      },
      article: {
        badge: "Position Paper",
        kicker: "Accademia di Innovazione Alimentare e Scienza",
        title: "Sul fallimento strutturale della strategia alimentare globale",
        subtitle: "Perche il paradigma del 1974 non puo affrontare le crisi che ha creato — e cosa deve sostituirlo",
        authorName: "Kunter Ilalan",
        authorAffil1: "Dipartimento di Ingegneria Alimentare, Middle East Technical University",
        authorAffil2: "Fondatore & Direttore, GiNOVA Accademia di Innovazione Alimentare",
        epigraph: "\"Entro un decennio, nessun bambino andra a letto affamato.\"",
        epigraphCite: "— Henry Kissinger, Conferenza Mondiale sull'Alimentazione, Roma, 1974",
        refsTitle: "Riferimenti"
      },
      footer: {
        tag: "Ricerca · Formazione · Quadri",
        explore: "Esplora",
        contactTitle: "Contatti",
        emailLabel: "Email",
        locationLabel: "Sede",
        locationValue: "Ankara · Turkiye",
        newsletter: "Newsletter",
        newsletterBody: "Note su quadri e pubblicazioni.",
        subscribe: "Iscriviti",
        privacy: "Privacy",
        terms: "Termini",
        toTop: "Torna su"
      }
    }

  };

  // Register translations with i18n engine
  if (window.GiNOVAi18n) {
    window.GiNOVAi18n.register(MANIFESTO_TRANSLATIONS);
  }

})();
