window.OTSKY_CMS_CONFIG = {
  // Isi dengan URL Web App Google Apps Script yang berakhiran /exec
  apiUrl: "https://script.google.com/macros/s/AKfycbxxsfM8F4dDezzgImjOX-15fIGSchXbYlO2cLMJocAeYWc4u5R8T0-BCzktF5P8SSMcbQ/exec",

  // Dipakai kalau apiUrl belum diisi atau GSheet gagal dibaca
  fallbackContentUrl: "content.json",

  // Timeout load data dari GSheet
  loadTimeoutMs: 12000
};
