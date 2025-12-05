(function() {
  const translations = {
    pl: {
      nav_home: "Strona główna",
      nav_pricing: "Plany",
      nav_showcase: "Prezentacja",
      nav_help: "Pomoc",

      title_pricing: "Plany cenowe",
      lead_pricing: "Porównaj wszystkie funkcje planów Free i Pro.",

      free_plan_name: "Free",

      free_games_week: "Gry/tydzień",
      free_games_week_val: "5",
      free_dlc_week: "DLC/tydzień",
      free_dlc_week_val: "15",
      free_online_week: "Online/tydzień",
      free_online_week_val: "3",
      free_fix_week: "Fixy/tydzień",
      free_fix_week_val: "3",
      free_game_requests: "Prośby o gry",
      free_game_requests_val: "5",
      free_wait_time: "Czas oczekiwania",
      free_wait_time_val: "do 5 dni",
      free_game_language: "Język gry",
      free_game_language_val: "Tylko angielski",

      pro_plan_name: "Pro",
      pro_games_week: "Gry/tydzień",
      pro_games_week_val: "Bez limitu",
      pro_dlc_week: "DLC/tydzień",
      pro_dlc_week_val: "Bez limitu",
      pro_online_week: "Online/tydzień",
      pro_online_week_val: "Bez limitu",
      pro_fix_week: "Fixy/tydzień",
      pro_fix_week_val: "Bez limitu",
      pro_game_requests: "Prośby o gry",
      pro_game_requests_val: "Bez limitu",
      pro_wait_time: "Czas oczekiwania",
      pro_wait_time_val: "do 2 godzin",
      pro_game_languages: "Dostępne języki",
      pro_game_languages_val: "Wszystkie",
      pro_auto_add: "Automatyczne dodawanie do Steam",
      pro_auto_add_val: "✔",
      pro_wipe: "Czyszczenie danych (naprawa Steam tools)",
      pro_wipe_val: "✔",
      pro_discord_badge: "Odznaka Discord",
      pro_discord_badge_val: "Pro",
      pro_support_priority: "Priorytet wsparcia",
      pro_support_priority_val: "Wysoki",

      duration_month: "Miesiąc",
      duration_3months: "3 Miesiące",
      duration_year: "Rok",

      price_free_month: "Za darmo",
      price_free_3months: "Za darmo",
      price_free_year: "Za darmo",

      price_premium_month: "50zł",
      price_premium_3months: "150zł / 3 miesiące",
      price_premium_year: "600zł / rok",

      title_home: "Witaj w GRY4FREE",
      lead_home: "Pobierz G4FLauncher i zacznij grać. Szybki, lekki i płynny.",
      btn_download: "Pobierz G4FLauncher",
      btn_get_started: "Zacznij",
      btn_showcase: "Prezentacja",

      title_showcase: "Prezentacja",
      lead_showcase: "Zrzuty ekranu aplikacji",

      title_help: "Pomoc i FAQ",

      faq_title: "FAQ",
      faq_q1: "Jak pobrać aplikację?",
      faq_a1_l1: "W tym miejscu możesz dopisywać nowe linie używając normalnego HTML, np.:",
      faq_a1_l2: "- linia 1",
      faq_a1_l3: "- linia 2",
      faq_a1_l4: "- linia 3",
      faq_q2: "Czy aplikacja działa na Windows 10/11?",
      faq_a2: "Tak, aplikacja wspiera oba systemy.",
      faq_q3: "Jak zgłosić problem z grą?",
      faq_a3: "Możesz użyć Discorda lub napisać maila. Wkrótce dodam też formularz Google.",
      faq_q4: "Jak często aktualizowana jest baza gier?",
      faq_a4: "Aktualizacje pojawiają się regularnie w zależności od zapotrzebowania.",

      support_title: "Wsparcie",
      support_text: "Możesz skontaktować się z nami przez Discord, Email lub Formularz Google.",

      /* NEW — SUMMARY OVERLAY TEXT */
      summary_title: "Wybrana subskrypcja",
      summary_plan: "Plan",
      summary_price: "Cena",
      summary_duration: "Okres",
      summary_lang: "Język"
    }
  };

  // Funkcja do ustawiania języka (teraz tylko polski)
  function setLanguage(lang) {
    // Ustawiamy na sztywno 'pl'
    const currentLang = 'pl';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });

    // Aktualizacja cen
    const duration = document.querySelector('.duration-btn.active')?.dataset.duration || 'month';
    updatePrices(duration);
  }

  function updatePrices(duration) {
    const currentLang = 'pl';
    document.querySelectorAll('[data-i18n-price]').forEach(el => {
      const plan = el.dataset.plan;
      const key = `price_${plan}_${duration}`;
      el.textContent = translations[currentLang][key];
    });
  }

  // Uruchomienie inicjalizacji po DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    setLanguage('pl'); // Ustawiamy na sztywno polski
  });

  // Udostępnienie funkcji na zewnątrz, jeśli jest używana w config.js
  window.translations = translations;
  window.setLanguage = setLanguage;
  window.updatePrices = updatePrices;
})();
