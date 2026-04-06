// ============================================================
// DATABASE.JS - FUSION FINALE
// ============================================================

console.log("🔄 Fusion des parties de la database...");

if (typeof FRAGRANCE_DB_1 === "undefined" ||
    typeof FRAGRANCE_DB_2 === "undefined" ||
    typeof FRAGRANCE_DB_3 === "undefined") {

    console.error("ERREUR : Une ou plusieurs parties de la database ne sont pas chargées.");
} else {
    // Fusion des 3 parties
    window.FRAGRANCE_DB = [
        ...FRAGRANCE_DB_1,
        ...FRAGRANCE_DB_2,
        ...FRAGRANCE_DB_3
    ];

    console.log(`✅ FRAGRANCE_DB créé avec succès ! Total : ${window.FRAGRANCE_DB.length} parfums`);
}

// Exporter pour être sûr
window.FRAGRANCE_DB = window.FRAGRANCE_DB || [];