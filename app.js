(() => {
  const config = window.SITE_CONFIG || {};
  const wa = config.whatsapp || {};
  const links = document.querySelectorAll("[data-whatsapp]");

  links.forEach(link => {
    const company = link.dataset.whatsapp;
    const number = wa[company];
    if (number) {
      const message = company === "braga"
        ? "Olá! Gostaria de fazer um orçamento com a Braga Insulfilms."
        : "Olá! Gostaria de fazer um orçamento com a Central Studio Automotivo.";
      link.href = `https://wa.me/${String(number).replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    } else {
      link.href = "#contato";
    }
  });

  document.querySelectorAll("[data-location]").forEach(el => {
    if (config.location?.mapsUrl) el.href = config.location.mapsUrl;
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
})();