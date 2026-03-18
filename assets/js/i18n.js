/* ============================================
   GiNOVA — i18n Engine (updated for dropdown + buttons + RTL)
   - Keeps your existing API: register/init/setLanguage/getSaved
   - Supports BOTH:
     1) old button strip: [data-lang]
     2) new dropdown:
        .lang-select .lang-trigger + .lang-option[data-lang]
   - Adds RTL handling for Arabic (dir + helper class)
   ============================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "ginova-lang";
  var translations = {};

  var COUNTRY_TO_LANG = {
    TR: "tr", AZ: "tr", KZ: "tr", UZ: "tr", TM: "tr", KG: "tr",
    DE: "de", AT: "de", CH: "de", LI: "de",
    IT: "it", SM: "it", VA: "it",
    ES: "es",
    MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", EC: "es", BO: "es",
    PY: "es", UY: "es", VE: "es",
    CR: "es", GT: "es", HN: "es", SV: "es", NI: "es", PA: "es",
    DO: "es", PR: "es"
  };

  // Optional language display names used for dropdown trigger label
var LANG_NAMES = {
  ar: "العربية",
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  ja: "日本語",
  ru: "Русский",
  tr: "Türkçe",
  zh: "中文"
};



  // RTL languages (extend later if you add others)
  var LANG_DIR = {
    ar: "rtl"
    // fa: "rtl", he: "rtl", ur: "rtl"
  };

  function getValue(obj, path) {
    var parts = path.split(".");
    var result = obj;
    for (var i = 0; i < parts.length; i++) {
      if (result && result[parts[i]] !== undefined) result = result[parts[i]];
      else return null;
    }
    return result;
  }

  function applyDocDir(lang) {
    var dir = LANG_DIR[lang] || "ltr";
    document.documentElement.dir = dir;
    document.documentElement.classList.toggle("is-rtl", dir === "rtl");
  }

  function applyTranslations(lang) {
    var dict = translations[lang];
    if (!dict) {
      console.error("[i18n] Language not found:", lang);
      return false;
    }

    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute("data-i18n");
      var value = getValue(dict, key);

if (value !== null) {
        el.innerHTML = value;
      }
    }

    document.documentElement.lang = lang;
    applyDocDir(lang); // <-- RTL/LTR switch happens here
    return true;
  }

  /* ---------- UI syncing (buttons + dropdown) ---------- */

  function updateButtons(lang) {
    var buttons = document.querySelectorAll("[data-lang].lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  }

  function updateDropdown(lang) {
    var root = document.querySelector(".lang-select");
    if (!root) return;

    // menu options
    var optionBtns = root.querySelectorAll(".lang-option[data-lang]");
    for (var i = 0; i < optionBtns.length; i++) {
      var ob = optionBtns[i];
      var active = ob.getAttribute("data-lang") === lang;
      ob.classList.toggle("is-active", active);

      // set aria-selected on the <li role="option"> if present
      var li = ob.closest('[role="option"]');
      if (li) li.setAttribute("aria-selected", active ? "true" : "false");
    }

    // trigger pill + label
    var pill = root.querySelector(".lang-pill");
    var label = root.querySelector(".lang-label");

    if (pill) {
      pill.textContent = (lang || "en").toUpperCase();
      pill.setAttribute("data-lang", lang);
    }
    if (label) {
      label.textContent = LANG_NAMES[lang] || lang;
    }

    // close menu if open
    root.classList.remove("is-open");
    var trigger = root.querySelector(".lang-trigger");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }

  function syncUI(lang) {
    updateButtons(lang);
    updateDropdown(lang);
  }

  /* ---------- language set ---------- */

  function normalizeLang(lang) {
    if (!lang) return "en";
    lang = ("" + lang).toLowerCase();

    // accept "en-US" etc.
    if (lang.indexOf("-") !== -1) lang = lang.split("-")[0];

    // if unsupported, fall back
    if (!translations[lang]) return "en";
    return lang;
  }

  function setLanguage(lang) {
    lang = normalizeLang(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    syncUI(lang);
    console.log("[i18n] Language applied:", lang);
  }

  function clickLangButton(lang) {
    // prefer dropdown option if exists
    var opt = document.querySelector(".lang-option[data-lang=\"" + lang + "\"]");
    if (opt) {
      opt.click();
      return;
    }

    // fallback to old strip button
    var btn = document.querySelector(".lang-btn[data-lang=\"" + lang + "\"]");
    if (btn) btn.click();
    else setLanguage(lang);
  }

  function langFromCountry(cc) {
    if (!cc) return "en";
    return COUNTRY_TO_LANG[cc.toUpperCase()] || "en";
  }

  function detectGeoLanguage(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipwho.is/?fields=country_code", true);
    xhr.timeout = 5000;

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            var data = JSON.parse(xhr.responseText);
            if (data && data.country_code) {
              var lang = langFromCountry(data.country_code);
              console.log("[i18n] Geo detected:", data.country_code, "->", lang);
              callback(lang);
              return;
            }
          } catch (e) {
            console.warn("[i18n] Geo parse error:", e);
          }
        }
        callback(null);
      }
    };

    xhr.onerror = function () { callback(null); };
    xhr.ontimeout = function () { callback(null); };
    xhr.send();
  }

  function getSavedLanguage() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function registerTranslations(data) {
    translations = data || {};
    console.log("[i18n] Translations registered:", Object.keys(translations).join(", "));
  }

  /* ---------- wiring ---------- */

  function wireButtonStrip() {
    var langBtns = document.querySelectorAll(".lang-btn[data-lang]");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function () {
        var lang = this.getAttribute("data-lang");
        setLanguage(lang);
      });
    }
  }

  function wireDropdown() {
    var root = document.querySelector(".lang-select");
    if (!root) return;

    var trigger = root.querySelector(".lang-trigger");
    var menu = root.querySelector(".lang-menu");
    var options = root.querySelectorAll(".lang-option[data-lang]");

    function openMenu() {
      root.classList.add("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "true");
      if (menu) menu.focus({ preventScroll: true });
    }
    function closeMenu() {
      root.classList.remove("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }

    if (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        root.classList.contains("is-open") ? closeMenu() : openMenu();
      });
    }

    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener("click", function (e) {
        e.preventDefault();
        var lang = this.getAttribute("data-lang");
        setLanguage(lang);
        closeMenu();
      });
    }

    document.addEventListener("click", function (e) {
      if (!root.contains(e.target)) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  function init() {
    wireButtonStrip();
    wireDropdown();

    var savedLang = getSavedLanguage();

    if (savedLang && translations[savedLang]) {
      console.log("[i18n] Using saved preference:", savedLang);
      clickLangButton(savedLang);
      return;
    }

    console.log("[i18n] No saved preference, detecting location...");
    detectGeoLanguage(function (detectedLang) {
      if (detectedLang && translations[detectedLang]) clickLangButton(detectedLang);
      else clickLangButton("en");
    });
  }

  window.GiNOVAi18n = {
    register: registerTranslations,
    init: init,
    setLanguage: setLanguage,
    getSaved: getSavedLanguage
  };

})();
