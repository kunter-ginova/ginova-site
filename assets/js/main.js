/* ============================================
   GiNOVA — Main JavaScript
   Tabs, Navigation, Utilities
   ============================================ */

(function() {
  "use strict";

  function initTabs() {
    var tabBtns = document.querySelectorAll(".tab-btn[data-tab]");
    var tabPanels = document.querySelectorAll(".tab-panel[data-panel]");

    if (tabBtns.length === 0) return;

    for (var i = 0; i < tabBtns.length; i++) {
      tabBtns[i].addEventListener("click", function() {
        var targetPanel = this.getAttribute("data-tab");

        for (var j = 0; j < tabBtns.length; j++) {
          tabBtns[j].classList.remove("is-active");
          tabBtns[j].setAttribute("aria-selected", "false");
        }
        this.classList.add("is-active");
        this.setAttribute("aria-selected", "true");

        for (var k = 0; k < tabPanels.length; k++) {
          if (tabPanels[k].getAttribute("data-panel") === targetPanel) {
            tabPanels[k].classList.add("is-active");
          } else {
            tabPanels[k].classList.remove("is-active");
          }
        }
      });
    }
  }

  function initBackToTop() {
    var toTopBtn = document.querySelector(".to-top");
    if (toTopBtn) {
      toTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  function setFooterYear() {
    var yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  function initSmoothScroll() {
    var links = document.querySelectorAll("a[href^=\"#\"]");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(e) {
        var href = this.getAttribute("href");
        if (href === "#" || href === "#top") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var headerHeight = 72;
          var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      });
    }
  }

  function initForms() {
    var forms = document.querySelectorAll("form");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("[Form] Submit prevented - implement backend");
      });
    }
  }

  function init() {
    setFooterYear();
    initBackToTop();
    initTabs();
    initSmoothScroll();
    initForms();

    if (window.GiNOVAi18n && typeof window.GiNOVAi18n.init === "function") {
      window.GiNOVAi18n.init();
    }

    console.log("[GiNOVA] Site initialized");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.GiNOVA = window.GiNOVA || {};
  window.GiNOVA.initTabs = initTabs;

})();


