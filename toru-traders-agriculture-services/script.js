document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 90
    });
  }

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = [...navLinks]
    .map((link) => {
      const href = link.getAttribute("href") || "";
      return href.startsWith("#") ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  const setActiveLink = () => {
    const position = window.scrollY + 130;
    let current = sections[0]?.id;

    sections.forEach((section) => {
      if (position >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  if (sections.length) {
    setActiveLink();
    window.addEventListener("scroll", setActiveLink, { passive: true });
  }

  const navCollapse = document.querySelector(".navbar-collapse");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.bootstrap && navCollapse?.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  const detailPages = {
    "Pesticides": "pages/pesticides.html",
    "Herbicides": "pages/herbicides.html",
    "Fertilizers": "pages/fertilizers.html",
    "Seeds": "pages/seeds.html",
    "Animal Feed": "pages/animal-feed.html",
    "Veterinary Medicines": "pages/veterinary-medicines.html",
    "Vaccination": "pages/vaccination.html",
    "Vaccination Services": "pages/vaccination.html",
    "Ultrasound Service": "pages/ultrasound.html",
    "Animal Ultrasound": "pages/ultrasound.html",
    "Veterinary Consultancy": "pages/veterinary-consultancy.html",
    "Farm Animal Treatment": "pages/farm-animal-treatment.html",
    "Livestock Health Care": "pages/livestock-health-care.html"
  };

  document.querySelectorAll(".category-card, .vet-card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent.trim();
    const url = detailPages[title];
    if (!url) return;
    card.classList.add("clickable-card");
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.addEventListener("click", () => {
      window.location.href = url;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") window.location.href = url;
    });
  });

  const productPages = {
    "Roundup Power Max 1L": "pages/roundup-power-max.html",
    "Ammonium Sulphate 50kg": "pages/ammonium-sulphate.html",
    "Livestock Health Pack": "pages/livestock-health-pack.html",
    "Maize Hybrid Seed Pack": "pages/maize-hybrid-seed.html",
    "Battery Spray Machine": "pages/battery-spray-machine.html",
    "Wanda Animal Feed": "pages/wanda-animal-feed.html",
    "Home Garden Starter Kit": "pages/home-garden-starter-kit.html",
    "Farm Irrigation Kit": "pages/farm-irrigation-kit.html"
  };

  document.querySelectorAll(".product-card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent.trim();
    const url = productPages[title];
    const body = card.querySelector(".product-body");
    if (!url || !body) return;
    const link = document.createElement("a");
    link.className = "product-detail-link";
    link.href = url;
    link.innerHTML = 'View Detail Page <i class="bi bi-arrow-right"></i>';
    body.appendChild(link);
  });
});
