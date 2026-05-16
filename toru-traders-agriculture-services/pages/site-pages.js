const sitePages = {
  about: {
    title: "About Toru Traders",
    kicker: "About Us",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1500&q=85",
    intro: "High quality agriculture inputs and veterinary services for farmers at wholesale and retail prices.",
    cards: ["Quality Products", "Expert Advice", "Wholesale & Retail", "Trusted by Farmers"],
    body: "Toru Traders Agriculture Services supports farmers with crop protection, fertilizers, seeds, animal feed, veterinary medicines, vaccination and livestock health services."
  },
  products: {
    title: "Products",
    kicker: "Product Categories",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1500&q=85",
    intro: "Browse agriculture and veterinary product categories with direct access to dedicated pages.",
    cards: ["Pesticides", "Herbicides", "Fertilizers", "Seeds", "Animal Feed", "Veterinary Medicines", "Vaccination", "Ultrasound"],
    links: ["pesticides.html", "herbicides.html", "fertilizers.html", "seeds.html", "animal-feed.html", "veterinary-medicines.html", "vaccination.html", "ultrasound.html"]
  },
  shop: {
    title: "Shop",
    kicker: "Online Store",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1500&q=85",
    intro: "Demo shop page for hot products, seasonal bundles and WhatsApp ordering.",
    cards: ["Roundup Power Max", "Ammonium Sulphate", "Maize Hybrid Seed", "Battery Spray Machine", "Wanda Animal Feed", "Farm Irrigation Kit"],
    links: ["roundup-power-max.html", "ammonium-sulphate.html", "maize-hybrid-seed.html", "battery-spray-machine.html", "wanda-animal-feed.html", "farm-irrigation-kit.html"]
  },
  veterinary: {
    title: "Veterinary Services",
    kicker: "Animal Health",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1500&q=85",
    intro: "Professional livestock services for ultrasound, vaccination, treatment, consultancy and health care.",
    cards: ["Animal Ultrasound", "Vaccination Services", "Veterinary Consultancy", "Farm Animal Treatment", "Livestock Health Care"],
    links: ["ultrasound.html", "vaccination.html", "veterinary-consultancy.html", "farm-animal-treatment.html", "livestock-health-care.html"]
  },
  brands: {
    title: "Brands & Companies",
    kicker: "Trusted Suppliers",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1500&q=85",
    intro: "Company and supplier style page for agriculture brands, seed companies and fertilizer suppliers.",
    cards: ["FMC", "Bayer", "Syngenta", "Engro", "FFC", "Corteva", "Pioneer", "Toru Store"]
  },
  gallery: {
    title: "Gallery",
    kicker: "Farm Visuals",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1500&q=85",
    intro: "A dedicated gallery page for shop, products, farm visits, livestock care and services.",
    cards: ["Shop Photos", "Product Images", "Farm Visits", "Livestock Care", "Crop Fields", "Customer Support"]
  },
  contact: {
    title: "Contact Us",
    kicker: "Call & WhatsApp",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1500&q=85",
    intro: "Contact Toru Traders Agriculture Services for product rates, quotes and veterinary appointments.",
    cards: ["0300 5720293", "0300 5844966", "WhatsApp Support", "Google Maps", "Quote Request", "Farm Advice"]
  }
};

const key = document.body.dataset.page || "about";
const page = sitePages[key] || sitePages.about;
document.title = `${page.title} - Toru Traders Agriculture Services`;

const sharedFooter = `
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <a class="footer-brand" href="../index.html"><i class="bi bi-flower1"></i> Toru Traders Agriculture Services</a>
          <p>Premium agriculture inputs and veterinary services for farmers at wholesale and retail prices.</p>
        </div>
        <div class="col-lg-2 col-sm-6">
          <h3>Quick Links</h3>
          <a href="../index.html">Home</a>
          <a href="about.html">About</a>
          <a href="products.html">Products</a>
          <a href="shop.html">Shop</a>
          <a href="veterinary-services.html">Veterinary</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="col-lg-3 col-sm-6">
          <h3>Products</h3>
          <a href="pesticides.html">Pesticides</a>
          <a href="fertilizers.html">Fertilizers</a>
          <a href="seeds.html">Seeds</a>
          <a href="animal-feed.html">Animal Feed</a>
          <a href="veterinary-medicines.html">Veterinary Medicines</a>
          <a href="drip-irrigation.html">Drip Irrigation</a>
        </div>
        <div class="col-lg-3">
          <h3>Contact</h3>
          <a href="tel:+923005720293"><i class="bi bi-telephone"></i> 0300 5720293</a>
          <a href="tel:+923005844966"><i class="bi bi-telephone"></i> 0300 5844966</a>
          <a href="https://wa.me/923005720293"><i class="bi bi-whatsapp"></i> WhatsApp</a>
          <a href="../index.html#quote"><i class="bi bi-receipt"></i> Get Quote</a>
          <a href="../index.html#faq"><i class="bi bi-question-circle"></i> FAQ's</a>
        </div>
      </div>
      <div class="footer-bottom"><span>© 2026 Toru Traders Agriculture Services. All Rights Reserved.</span></div>
    </div>
  </footer>`;

const cards = page.cards.map((card, index) => {
  const href = page.links?.[index] || "contact.html";
  return `<a class="site-feature-card" href="${href}">
    <i class="bi bi-arrow-up-right-circle"></i>
    <h3>${card}</h3>
    <p>${page.links?.[index] ? "Open dedicated page" : "Contact for details"}</p>
  </a>`;
}).join("");

document.getElementById("site-page-root").innerHTML = `
  <nav class="detail-nav">
    <a class="detail-brand" href="../index.html">
      <img src="../logo.jpeg" alt="Toru Traders logo">
      <span>Toru Traders <strong>Agriculture Services</strong></span>
    </a>
    <div>
      <a href="../index.html">Home</a>
      <a href="products.html">Products</a>
      <a href="shop.html">Shop</a>
      <a href="contact.html">Contact</a>
      <a class="detail-call" href="tel:+923005720293"><i class="bi bi-telephone-fill"></i> Call Now</a>
    </div>
  </nav>
  <header class="site-page-hero" style="background-image: linear-gradient(105deg, rgba(6,39,24,.92), rgba(6,39,24,.55)), url('${page.image}')">
    <div class="container">
      <span class="eyebrow"><i class="bi bi-stars"></i> ${page.kicker}</span>
      <h1>${page.title}</h1>
      <p>${page.intro}</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="tel:+923005720293"><i class="bi bi-telephone-fill"></i> Call Now</a>
        <a class="btn btn-whatsapp" href="https://wa.me/923005720293"><i class="bi bi-whatsapp"></i> WhatsApp</a>
      </div>
    </div>
  </header>
  <main>
    <section class="section site-page-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-kicker">${page.kicker}</span>
          <h2>${page.title}</h2>
          <p>${page.body || "Choose any item below to open its own dedicated page."}</p>
        </div>
        <div class="site-feature-grid">${cards}</div>
      </div>
    </section>
    <section class="section detail-cta">
      <div class="container">
        <div class="contact-panel">
          <div><span class="section-kicker gold-text">Need Help?</span><h2>Talk to Toru Traders</h2><p>Call or WhatsApp for prices, products and farm consultation.</p></div>
          <div class="contact-actions">
            <a class="contact-item" href="tel:+923005720293"><i class="bi bi-telephone-fill"></i><span>0300 5720293</span></a>
            <a class="contact-item" href="https://wa.me/923005720293"><i class="bi bi-whatsapp"></i><span>WhatsApp</span></a>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${sharedFooter}
  <a class="floating-whatsapp" href="https://wa.me/923005720293" aria-label="Chat on WhatsApp"><i class="bi bi-whatsapp"></i></a>
`;
