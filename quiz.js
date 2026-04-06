// ============================================================
// FIX DATABASE - VERSION ROBUSTE
// ============================================================
// FIX ULTIME - Force le chargement de la database
setTimeout(() => {
  if (typeof window.FRAGRANCE_DB_1 !== "undefined" &&
    typeof window.FRAGRANCE_DB_2 !== "undefined" &&
    typeof window.FRAGRANCE_DB_3 !== "undefined") {

    window.FRAGRANCE_DB = [
      ...window.FRAGRANCE_DB_1,
      ...window.FRAGRANCE_DB_2,
      ...window.FRAGRANCE_DB_3
    ];

    console.log(`✅ FRAGRANCE_DB prêt ! (${window.FRAGRANCE_DB.length} parfums)`);
  } else {
    console.error("Les fichiers database ne sont pas chargés correctement.");
  }
  // ====================== TON CODE ORIGINAL COMMENCE ICI ======================


  // ====================== TES FONCTIONS EXISTANTES ======================

  // Remplace ta fonction matchPerfumes actuelle par celle-ci :
  function matchPerfumes(answers) {
    // Attendre que la database soit prête
    if (typeof FRAGRANCE_DB === "undefined" || FRAGRANCE_DB.length === 0) {
      console.warn("Waiting for FRAGRANCE_DB...");
      setTimeout(() => matchPerfumes(answers), 100);
      return;
    }

    console.log("Matching perfumes with", FRAGRANCE_DB.length, "items");

    // Ton code original de matchPerfumes ici...
    console.log("FRAGRANCE_DB chargé avec", FRAGRANCE_DB.length, "parfums");

    // ... le reste de ta fonction matchPerfumes
  }
  // QUESTIONS DATABASE (Cleaned editorial version, no emojis)
  if (typeof FRAGRANCE_DB === "undefined") {
    console.error("FRAGRANCE_DB n'est pas défini ! Vérifie l'ordre des scripts dans index.html");
  }
  const QUESTIONS = [
    {
      id: 1,
      text: "Which landscape resonates with your aesthetic?",
      options: [
        { label: "A monastic garden at dawn, structured and silent.", scores: { floral: 3, oriental: 0, woody: 0, fresh: 1, chypre: 1, fougere: 0 } },
        { label: "Arid dunes struck by blazing sun.", scores: { floral: 0, oriental: 3, woody: 1, fresh: 0, chypre: 1, fougere: 0 } },
        { label: "A dark forest where light struggles to pierce through.", scores: { floral: 0, oriental: 1, woody: 3, fresh: 2, chypre: 1, fougere: 2 } },
        { label: "The mirroring surface of an ocean on a windless winter day.", scores: { floral: 1, oriental: 0, woody: 0, fresh: 3, chypre: 1, fougere: 2 } }
      ]
    },
    {
      id: 2,
      text: "What sound atmosphere do you prefer?",
      options: [
        { label: "A cello concerto, melancholic and pure.", scores: { floral: 3, oriental: 1, woody: 1, fresh: 0, chypre: 2, fougere: 0 } },
        { label: "A dimly lit jazz club, smoke and improvisation.", scores: { floral: 1, oriental: 3, woody: 2, fresh: 0, chypre: 2, fougere: 1 } },
        { label: "The dry, repetitive minimalism of dub techno.", scores: { floral: 0, oriental: 1, woody: 3, fresh: 2, chypre: 1, fougere: 2 } },
        { label: "Absolute silence, or the white noise of crashing waves.", scores: { floral: 1, oriental: 2, woody: 1, fresh: 3, chypre: 2, fougere: 2 } }
      ]
    },
    {
      id: 3,
      text: "With which material would you exclusively clothe yourself?",
      options: [
        { label: "A liquid, cold silk against the skin.", scores: { floral: 3, oriental: 1, woody: 0, fresh: 1, chypre: 2, fougere: 0 } },
        { label: "The most supple suede, patiently tanned.", scores: { floral: 0, oriental: 2, woody: 3, fresh: 1, chypre: 1, fougere: 2 } },
        { label: "An immaculate linen, crumpled by the wind.", scores: { floral: 1, oriental: 0, woody: 0, fresh: 3, chypre: 1, fougere: 2 } },
        { label: "A rigid, monolithic black leather.", scores: { floral: 0, oriental: 2, woody: 2, fresh: 0, chypre: 3, fougere: 2 } }
      ]
    },
    {
      id: 4,
      text: "Your relationship with time:",
      options: [
        { label: "Evanescent. I capture the moment before it fades.", scores: { floral: 2, oriental: 1, woody: 0, fresh: 2, chypre: 3, fougere: 0 } },
        { label: "Eternal. I seek sedimentation, history.", scores: { floral: 1, oriental: 3, woody: 1, fresh: 0, chypre: 0, fougere: 1 } },
        { label: "Blazing. Everything must be immediate and sharp.", scores: { floral: 1, oriental: 0, woody: 0, fresh: 3, chypre: 2, fougere: 2 } },
        { label: "Nocturnal. It is in the shadows that time stretches out.", scores: { floral: 0, oriental: 3, woody: 2, fresh: 0, chypre: 2, fougere: 1 } }
      ]
    },
    {
      id: 5,
      text: "The attitude of your fragrance should be:",
      options: [
        { label: "A second skin, confidential and intimate.", scores: { floral: 2, oriental: 0, woody: 1, fresh: 3, chypre: 1, fougere: 1 } },
        { label: "A silent declaration of elegance.", scores: { floral: 2, oriental: 1, woody: 2, fresh: 2, chypre: 2, fougere: 2 } },
        { label: "A sharp and avowed weapon of seduction.", scores: { floral: 1, oriental: 2, woody: 2, fresh: 1, chypre: 2, fougere: 2 } },
        { label: "A monumental sillage that precedes my arrival.", scores: { floral: 1, oriental: 3, woody: 3, fresh: 0, chypre: 2, fougere: 1 } }
      ]
    },
    {
      id: 6,
      text: "Which olfactory evocation fascinates you instantly?",
      options: [
        { label: "The green bitterness of a snapped plant stem.", scores: { floral: 3, oriental: 0, woody: 1, fresh: 2, chypre: 2, fougere: 1 } },
        { label: "The tarry smell of asphalt under the first rain.", scores: { floral: 0, oriental: 2, woody: 3, fresh: 1, chypre: 1, fougere: 2 } },
        { label: "The icy iodine of the open sea.", scores: { floral: 1, oriental: 0, woody: 1, fresh: 3, chypre: 2, fougere: 2 } },
        { label: "Burning incense deep within an abandoned place.", scores: { floral: 1, oriental: 3, woody: 2, fresh: 2, chypre: 2, fougere: 2 } }
      ]
    },
    {
      id: 7,
      text: "What architecture would house your spiritual retreat?",
      options: [
        { label: "A Palladian villa opening onto symmetrical flowerbeds.", scores: { floral: 3, oriental: 2, woody: 0, fresh: 1, chypre: 2, fougere: 0 } },
        { label: "A burnt wood (shou sugi ban) pavilion lost in the taiga.", scores: { floral: 0, oriental: 0, woody: 2, fresh: 3, chypre: 1, fougere: 3 } },
        { label: "A glass cube resting on an ocean cliff.", scores: { floral: 2, oriental: 1, woody: 1, fresh: 2, chypre: 1, fougere: 3 } },
        { label: "An opulent riad where spices float in the dry air.", scores: { floral: 0, oriental: 3, woody: 2, fresh: 1, chypre: 2, fougere: 2 } }
      ]
    },
    {
      id: 8,
      text: "Your social presence is defined by:",
      options: [
        { label: "Absolute courtesy, simultaneously warm and distant.", scores: { floral: 3, oriental: 2, woody: 0, fresh: 1, chypre: 1, fougere: 0 } },
        { label: "A natural authority that has no need to raise its voice.", scores: { floral: 0, oriental: 2, woody: 3, fresh: 1, chypre: 2, fougere: 2 } },
        { label: "A luminous and contagious spontaneity.", scores: { floral: 2, oriental: 0, woody: 0, fresh: 3, chypre: 1, fougere: 2 } },
        { label: "An unfathomable mystery that others fear to dispel.", scores: { floral: 1, oriental: 3, woody: 2, fresh: 0, chypre: 2, fougere: 1 } }
      ]
    }
  ];


  // ============================================================
  // QUIZ STATE
  // ============================================================
  let currentQuestion = 0;
  let answers = new Array(QUESTIONS.length).fill(null);

  // Algorithm
  function computeScores() {
    const totals = { floral: 0, oriental: 0, woody: 0, fresh: 0, chypre: 0, fougere: 0 };
    answers.forEach(a => {
      if (a !== null) {
        Object.keys(totals).forEach(k => { totals[k] += a.scores[k] || 0; });
      }
    });
    return totals;
  }

  function matchPerfumes(scores) {
    // Cosine similarity
    return FRAGRANCE_DB.map(perf => {
      const s = perf.scores;
      let similarity = 0, userMag = 0, perfMag = 0;
      Object.keys(scores).forEach(k => {
        similarity += scores[k] * (s[k] || 0);
        userMag += scores[k] * scores[k];
        perfMag += (s[k] || 0) * (s[k] || 0);
      });
      const denom = Math.sqrt(userMag) * Math.sqrt(perfMag);
      const cosine = denom > 0 ? similarity / denom : 0;
      return { ...perf, matchScore: Math.round(cosine * 100) };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }

  // ============================================================
  // DOM RENDERERS (Editorial Vibe)
  // ============================================================
  function renderQuestion(index) {
    const q = QUESTIONS[index];
    const qBody = document.getElementById('q-body');

    // Format numbers to 2 digits (e.g. 01, 02)
    const formatNum = n => n.toString().padStart(2, '0');
    document.getElementById('q-current-num').textContent = formatNum(index + 1);

    // Mark selected state
    const selectedOpt = answers[index];

    qBody.innerHTML = `
    <h3 class="q-text-hero">${q.text}</h3>
    <div class="q-options-list">
      ${q.options.map((opt, i) => `
        <button class="q-opt-btn ${selectedOpt === opt ? 'selected' : ''}" data-index="${i}">
          <span class="q-opt-num">${formatNum(i + 1)}.</span>
          <span>${opt.label}</span>
        </button>
      `).join('')}
    </div>
  `;

    // Bind clicks AND auto-advance smoothly
    qBody.querySelectorAll('.q-opt-btn').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        answers[index] = q.options[i];

        // Update UI selection
        qBody.querySelectorAll('.q-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        // Update Nav Buttons
        updateNavButtons(index);

        // Smooth auto-advance
        setTimeout(() => {
          handleNext();
        }, 500); // Wait half a second before advancing for pure luxury feel
      });
    });

    updateNavButtons(index);
  }

  function updateNavButtons(index) {
    const prevBtn = document.getElementById('prev-btn');
    prevBtn.disabled = index === 0;
  }

  function renderResults() {
    const rawScores = computeScores();
    const ranked = matchPerfumes(rawScores);
    const top3 = ranked.slice(0, 3);

    // Save the results automatically
    // === SAUVEGARDE DES RÉSULTATS DU QUIZ ===
    function saveQuizResults(answers, recommendations) {
      const resultData = {
        date: new Date().toISOString(),
        answers: answers || {},
        recommendations: recommendations || [],
        totalRecommendations: recommendations ? recommendations.length : 0
      };

      localStorage.setItem('scentQuiz_lastResult', JSON.stringify(resultData));
      console.log('✅ Résultats du quiz sauvegardés avec succès');
    }

    // Appel de la sauvegarde (à mettre à la fin de ta fonction de résultats)
    saveQuizResults(userAnswers, recommendedPerfumes);
    const dominantFamily = Object.entries(rawScores).sort((a, b) => b[1] - a[1])[0][0];
    const meta = FAMILY_META[dominantFamily];

    const screen = document.getElementById('view-results');

    // Build card HTML using a helper to avoid nested template literal issues
    function buildCardHTML(perf, i) {
      const perfUrl = perf.fragId
        ? 'https://www.fragrantica.com/perfume/' + perf.brand.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '') + '/' + perf.name.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + perf.fragId + '.html'
        : 'https://www.fragrantica.com/search/?query=' + encodeURIComponent(perf.brand + ' ' + perf.name);
      const imgUrl = perf.fragId ? 'https://fimgs.net/mdimg/perfume/375x500.' + perf.fragId + '.jpg' : 'orange_sensaroma.png';
      const rankLabel = i === 0 ? 'I. Perfect Accord' : i === 1 ? 'II. Nuance' : 'III. Variation';

      // Deterministic pseudo-randomness for Top/Heart/Base notes affinity
      const baseHash = perf.name.length * 3 + i * 7;
      const topPct = Math.min(98, Math.max(65, perf.matchScore + (baseHash % 20) - 10));
      const heartPct = Math.min(98, Math.max(65, perf.matchScore + ((baseHash * 2) % 20) - 10));
      const basePct = Math.min(98, Math.max(65, perf.matchScore + ((baseHash * 3) % 20) - 10));

      return (
        '<div class="r-card">' +
        '<div class="r-img-wrapper"><img src="' + imgUrl + '" alt="' + perf.name + '" class="r-img" onerror="this.src=\'orange_sensaroma.png\'"></div>' +
        '<span class="r-rank">' + rankLabel + ' (' + perf.matchScore + '% Match)</span>' +
        '<div class="r-brand">' + perf.brand + '</div>' +
        '<h3 class="r-name">' + perf.name + '</h3>' +
        '<span class="r-family">' + meta.icon + ' ' + meta.label + ' Family</span>' +

        '<div class="r-affinity">' +
        '<div class="aff-row"><span class="aff-lbl">Top Notes</span><div class="aff-bar-bg"><div class="aff-bar-fg" style="width:' + topPct + '%"></div></div><span class="aff-val">' + topPct + '%</span></div>' +
        '<div class="aff-row"><span class="aff-lbl">Heart Notes</span><div class="aff-bar-bg"><div class="aff-bar-fg" style="width:' + heartPct + '%"></div></div><span class="aff-val">' + heartPct + '%</span></div>' +
        '<div class="aff-row"><span class="aff-lbl">Base Notes</span><div class="aff-bar-bg"><div class="aff-bar-fg" style="width:' + basePct + '%"></div></div><span class="aff-val">' + basePct + '%</span></div>' +
        '</div>' +

        '<div class="r-correspondence">' +
        '<h4>Olfactory Correspondence</h4>' +
        '<p>The high concentration of <strong>' + (perf.notes ? perf.notes.split(' · ')[0] : 'notes') + '</strong> in this composition aligns perfectly with your affinity for ' + meta.label.toLowerCase() + ' structures.</p>' +
        '</div>' +

        '<div class="r-notes"><strong>Key Notes:</strong> ' + perf.notes + '</div>' +
        '<p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">' + perf.description + '</p>' +
        '<a href="' + perfUrl + '" target="_blank" rel="noopener" class="r-link">Verify on Fragrantica</a>' +
        '</div>'
      );
    }

    screen.innerHTML = `
    <div class="r-header">
      <span class="r-sub">DIAGNOSTIC SEQUENCE COMPLETE</span>
      <h2 class="r-title">Archetype <em>${meta.label}</em></h2>
      <p style="color: var(--text-muted); max-width: 520px; margin: 1rem auto 0;">Your olfactory psyche has been identified. Here are the three masterworks that echo your complexity.</p>
    </div>

    <div class="r-grid">
      ${top3.map((perf, i) => buildCardHTML(perf, i)).join('')}
    </div>

    <div style="text-align: center; margin-top: 6rem;">
      <button class="btn-text" id="retry-btn">Restart the protocol</button>
    </div>
  `;

    document.getElementById('retry-btn').addEventListener('click', resetQuiz);
    showView('view-results');
  }

  // ============================================================
  // APP LOGIC
  // ============================================================
  function handleNext() {
    if (currentQuestion < QUESTIONS.length - 1) {
      currentQuestion++;
      renderQuestion(currentQuestion);
    } else {
      renderResults();
    }
  }

  function handlePrev() {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion(currentQuestion);
    }
  }

  function showView(viewId) {
    document.querySelectorAll('.quiz-view').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
  }

  function resetQuiz() {
    currentQuestion = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    renderQuestion(0);
    showView('view-questions');
  }

  function openQuizOverlay() {
    const overlay = document.getElementById('quiz-wrapper');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  }

  function closeQuizOverlay() {
    const overlay = document.getElementById('quiz-wrapper');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ============================================================
  // INIT
  // ============================================================
  document.addEventListener('DOMContentLoaded', () => {

    // Triggers to open overlay
    document.querySelectorAll('.quiz-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openQuizOverlay();
        showView('view-intro');
      });
    });

    // Start button inside overlay
    document.getElementById('start-btn').addEventListener('click', () => {
      // Start sequence
      resetQuiz();
    });

    // Close overlay
    document.querySelector('.quiz-close').addEventListener('click', closeQuizOverlay);

    // Prev button
    document.getElementById('prev-btn').addEventListener('click', handlePrev);
  });
  // FIX BOUTON START - À AJOUTER À LA FIN
  document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');

    if (startBtn) {
      startBtn.addEventListener('click', function () {
        console.log("Bouton Start cliqué !");
        const quizWrapper = document.getElementById('quiz-wrapper');

        if (quizWrapper) {
          quizWrapper.style.display = 'flex';
          quizWrapper.classList.add('active');

          // Lancer le quiz
          if (typeof startQuiz === 'function') {
            startQuiz();
          } else if (typeof showIntro === 'function') {
            showIntro();
          } else {
            // Si aucune fonction n'existe, on force l'affichage de la première vue
            document.getElementById('view-intro').classList.add('active');
          }
        }
      });

      console.log("✅ Bouton Start réactivé avec succès");
    } else {
      console.error("❌ Bouton #start-btn non trouvé");
    }
  });