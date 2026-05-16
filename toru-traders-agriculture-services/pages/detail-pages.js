const pages = {
  "pesticides": {
    title: "Pesticides",
    kicker: "Crop Protection",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1400&q=85",
    intro: "Reliable pesticide solutions for crop insects, pest pressure and seasonal protection programs.",
    urdu: "فصلوں کو کیڑوں اور بیماریوں سے محفوظ رکھنے کے لئے معیاری زرعی ادویات دستیاب ہیں۔",
    items: ["Insecticides", "Fungicides", "Seed Treatments", "Bio Insecticide", "Granules", "Crop Advisory"],
    products: ["Coragen 20SC", "Emamectin Benzoate", "Imidacloprid", "Lambda Cyhalothrin"]
  },
  "herbicides": {
    title: "Herbicides / Weedicides",
    kicker: "Weed Control",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85",
    intro: "Selective and non-selective weed control options for wheat, rice, maize and vegetable crops.",
    urdu: "گندم، چاول، مکئی اور سبزیوں کی فصلوں کے لئے جڑی بوٹی مار ادویات دستیاب ہیں۔",
    items: ["Rice Herbicide", "Wheat Herbicide", "Non Selective Weedicide", "Pre-Emergence", "Post-Emergence", "Spray Guidance"],
    products: ["Glyphosate 1L", "Bispyribac Sodium", "Atrazine", "Pendimethalin"]
  },
  "fertilizers": {
    title: "Fertilizers",
    kicker: "Crop Nutrition",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1400&q=85",
    intro: "Basic, imported, liquid, organic and micronutrient fertilizers for stronger crop growth.",
    urdu: "فصل کی بہتر نشوونما کے لئے کھادیں، مائیکرو نیوٹرینٹس اور فرٹیلائزر پلان دستیاب ہیں۔",
    items: ["Basic Fertilizers", "Imported Fertilizer", "Liquid Fertilizers", "Organic Fertilizers", "Humic Acid", "Anti Stress"],
    products: ["DAP", "Urea", "NPK 20-20-20", "Zinc Sulphate"]
  },
  "seeds": {
    title: "Seeds",
    kicker: "Certified Seed",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1400&q=85",
    intro: "Local and imported seeds for wheat, rice, cotton, fodder, vegetables and seasonal crops.",
    urdu: "ملکی و غیر ملکی بیج، سبزیوں کے بیج اور فصلوں کے تصدیق شدہ بیج دستیاب ہیں۔",
    items: ["Wheat Seeds", "Rice Seeds", "Cotton Seeds", "Vegetable Seeds", "Fodder Seeds", "Pulses Seeds"],
    products: ["Wheat Seed Pack", "Rice Seed F1", "Vegetable Seeds", "Fodder Seed"]
  },
  "hybrid-seeds": {
    title: "Hybrid Seeds",
    kicker: "High Yield Varieties",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=85",
    intro: "Hybrid maize, rice, vegetable, oil crop and fodder seeds for commercial farming.",
    urdu: "زیادہ پیداوار کے لئے ہائبرڈ مکئی، چاول، سبزیوں اور چارہ جات کے بیج دستیاب ہیں۔",
    items: ["Hybrid Corn", "Hybrid Rice", "Vegetable Crops", "Oil Crops", "Bajra F1", "Melon Seeds"],
    products: ["Maize Hybrid", "Rice F1", "Bajra F1", "Watermelon Hybrid"]
  },
  "animal-feed": {
    title: "Animal Feed",
    kicker: "Livestock Nutrition",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=85",
    intro: "Wanda, khal, chokar, silage and nutrition support for dairy and farm animals.",
    urdu: "جانوروں کے لئے ونڈہ، کھل، چوکر، سالیج اور غذائی سپلیمنٹ دستیاب ہیں۔",
    items: ["Wanda", "Khal", "Chokar", "Silage", "Mineral Mix", "Dairy Nutrition"],
    products: ["Dairy Wanda", "Cotton Seed Cake", "Wheat Bran", "Silage Pack"]
  },
  "veterinary-medicines": {
    title: "Veterinary Medicines",
    kicker: "Animal Health",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=85",
    intro: "Veterinary medicines, supplements and treatment support for livestock health care.",
    urdu: "حیوانات کے علاج کے لئے ادویات، سپلیمنٹس اور ماہر مشورہ دستیاب ہے۔",
    items: ["Antibiotics", "Vitamins", "Dewormers", "Calcium", "Mineral Mix", "Treatment Support"],
    products: ["Livestock Health Pack", "Dewormer", "Calcium Plus", "Vitamin Booster"]
  },
  "vaccination": {
    title: "Vaccination Services",
    kicker: "Disease Prevention",
    image: "https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&w=1400&q=85",
    intro: "Vaccination planning and animal disease prevention services for farm animals.",
    urdu: "جانوروں کی بیماریوں سے بچاؤ کے لئے ویکسینیشن سروس اور شیڈول دستیاب ہے۔",
    items: ["FMD Vaccine", "HS Vaccine", "ETV", "PPR", "Poultry Vaccine", "Farm Schedule"],
    products: ["Vaccination Visit", "Farm Vaccine Plan", "Livestock Schedule", "Preventive Care"]
  },
  "ultrasound": {
    title: "Animal Ultrasound",
    kicker: "Veterinary Diagnostics",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=85",
    intro: "Animal ultrasound service for pregnancy diagnosis and livestock reproductive care.",
    urdu: "جانوروں کے الٹراساؤنڈ، حمل کی تشخیص اور تولیدی صحت کی سہولت دستیاب ہے۔",
    items: ["Pregnancy Diagnosis", "Reproductive Care", "Farm Visit", "Dairy Animals", "Goats & Sheep", "Consultancy"],
    products: ["Ultrasound Visit", "Pregnancy Check", "Farm Diagnosis", "Reproductive Plan"]
  },
  "veterinary-consultancy": {
    title: "Veterinary Consultancy",
    kicker: "Expert Advice",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3ae26f4b?auto=format&fit=crop&w=1400&q=85",
    intro: "Professional veterinary advice for livestock diseases, nutrition, vaccination and farm health planning.",
    urdu: "جانوروں کی بیماریوں، خوراک، ویکسینیشن اور فارم ہیلتھ کے لئے ماہر ویٹرنری مشورہ دستیاب ہے۔",
    items: ["Disease Advice", "Nutrition Planning", "Vaccination Schedule", "Medicine Guidance", "Farm Visit", "Follow Up"],
    products: ["Consultancy Call", "Farm Health Plan", "Nutrition Advice", "Medicine Plan"]
  },
  "farm-animal-treatment": {
    title: "Farm Animal Treatment",
    kicker: "Livestock Treatment",
    image: "https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&w=1400&q=85",
    intro: "Treatment support for cattle, buffalo, goats, sheep and farm animals with practical guidance.",
    urdu: "گائے، بھینس، بکری، بھیڑ اور فارم جانوروں کے علاج کی سہولت دستیاب ہے۔",
    items: ["Cattle Treatment", "Buffalo Care", "Goat & Sheep", "Emergency Advice", "Medicine Support", "Recovery Plan"],
    products: ["Treatment Visit", "Recovery Pack", "Emergency Advice", "Health Check"]
  },
  "livestock-health-care": {
    title: "Livestock Health Care",
    kicker: "Complete Animal Care",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=85",
    intro: "Preventive care, nutrition, deworming and herd health plans for productive livestock.",
    urdu: "جانوروں کی صحت، ڈی ورمنگ، غذائیت اور ہرڈ ہیلتھ پلان کی سہولت دستیاب ہے۔",
    items: ["Deworming", "Mineral Support", "Preventive Care", "Herd Health", "Milk Production", "Farm Record"],
    products: ["Health Care Plan", "Deworming Pack", "Mineral Mix", "Preventive Visit"]
  },
  "spray-machinery": {
    title: "Spray Machinery",
    kicker: "Farm Equipment",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1400&q=85",
    intro: "Battery, engine and manual spray machines with nozzles and spare parts.",
    urdu: "سپرے مشین، نوزلز اور سپیئر پارٹس کسانوں کے لئے دستیاب ہیں۔",
    items: ["Battery Spray", "Engine Spray", "Manual Spray", "Nozzles", "Spare Parts", "Spray Accessories"],
    products: ["Battery Sprayer", "Engine Sprayer", "Manual Sprayer", "Nozzle Set"]
  },
  "kitchen-gardening": {
    title: "Kitchen Gardening",
    kicker: "Home Growing",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=85",
    intro: "Gardening kits, seeds, tools, pest control and home garden support.",
    urdu: "گھریلو باغبانی کے لئے بیج، ٹولز، گارڈن کٹس اور مشورہ دستیاب ہے۔",
    items: ["Gardening Kits", "Vegetable Seeds", "Pruners", "Garden Soil", "Pest Control", "Tools"],
    products: ["Garden Starter Kit", "Vegetable Seed Mix", "Pruner", "Garden Soil"]
  },
  "tunnel-farming": {
    title: "Tunnel Farming",
    kicker: "Protected Farming",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1400&q=85",
    intro: "Tunnel farming accessories, mulching films, seedling trays and greenhouse supplies.",
    urdu: "ٹنل فارمنگ کے لئے پلاسٹک، ملچنگ فلم، سیڈلنگ ٹرے اور دیگر سامان دستیاب ہے۔",
    items: ["Mulching Films", "Seedling Trays", "Greenhouse Plastic", "Garden Soil", "Tunnel Accessories", "Crop Plan"],
    products: ["Mulch Film", "Seedling Tray", "Tunnel Plastic", "Drip Line"]
  },
  "drip-irrigation": {
    title: "Automatic Drip Irrigation",
    kicker: "Water Saving",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1400&q=85",
    intro: "Drip irrigation kits, sprinklers and water saving systems for efficient farming.",
    urdu: "پانی کی بچت کے لئے ڈرپ اریگیشن، سپرنکلرز اور فارم واٹر سسٹم دستیاب ہیں۔",
    items: ["Drip Lines", "Sprinklers", "Filters", "Valves", "Farm Kits", "Installation Advice"],
    products: ["Drip Kit", "Sprinkler Set", "Filter Unit", "Pipe Roll"]
  },
  "agricultural-tools": {
    title: "Agricultural Tools",
    kicker: "Farm Tools",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=85",
    intro: "Useful agricultural tools, harvest accessories and farm work essentials.",
    urdu: "کاشتکاری کے اوزار، فارم ٹولز اور فصل کی دیکھ بھال کا سامان دستیاب ہے۔",
    items: ["Harvest Tools", "Gardening Tools", "Cutters", "Sprayers", "Accessories", "Farm Essentials"],
    products: ["Tool Kit", "Cutter", "Harvest Tool", "Garden Tool Set"]
  },
  "crop-nutrition": {
    title: "Crop Nutrition",
    kicker: "Growth Regulators",
    image: "https://images.unsplash.com/photo-1627920769842-6887c6df05ca?auto=format&fit=crop&w=1400&q=85",
    intro: "Micronutrients, amino acids, plant growth regulators and complete crop care plans.",
    urdu: "فصل کی بڑھوتری کے لئے مائیکرو نیوٹرینٹس، امینو ایسڈ اور گروتھ ریگولیٹر دستیاب ہیں۔",
    items: ["Micronutrients", "Amino Acids", "PGR", "Macro Nutrients", "Adjuvants", "Crop Plans"],
    products: ["Zinc Plus", "Amino Acid", "PGR Pack", "Micronutrient Mix"]
  },
  "plants-trees": {
    title: "Plants & Trees",
    kicker: "Nursery Supply",
    image: "https://images.unsplash.com/photo-1599685315640-9ceab0f3cbd8?auto=format&fit=crop&w=1400&q=85",
    intro: "Plants, trees and tissue culture plant options for farm and home plantation.",
    urdu: "پودے، درخت اور نرسری سپلائی کے لئے رہنمائی دستیاب ہے۔",
    items: ["Fruit Plants", "Shade Trees", "Tissue Culture", "Home Plants", "Plant Care", "Nursery Advice"],
    products: ["Fruit Plant", "Tree Sapling", "Plant Care Pack", "Nursery Mix"]
  },
  "adjuvants": {
    title: "Adjuvants",
    kicker: "Spray Performance",
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?auto=format&fit=crop&w=1400&q=85",
    intro: "Adjuvants and oils to improve spray coverage, sticking and pesticide performance.",
    urdu: "سپرے کی کارکردگی بہتر بنانے کے لئے ایڈجوونٹس اور آئل ایکسٹریکٹ دستیاب ہیں۔",
    items: ["Sticker", "Spreader", "Oils Extract", "Spray Booster", "Water Conditioner", "Dose Advice"],
    products: ["Spray Sticker", "Spreader", "Oil Extract", "Booster"]
  },
  "rodenticide": {
    title: "Rodenticide",
    kicker: "Rodent Control",
    image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?auto=format&fit=crop&w=1400&q=85",
    intro: "Rodent control options for fields, grain storage and farm protection.",
    urdu: "کھیتوں اور گوداموں میں چوہوں کے کنٹرول کے لئے مصنوعات دستیاب ہیں۔",
    items: ["Pallets", "Zinc Phosphide", "Storage Protection", "Farm Control", "Safety Advice", "Application Plan"],
    products: ["Rodent Pallets", "Zinc Phosphide", "Storage Pack", "Farm Control Kit"]
  },
  "farm-accessories": {
    title: "Farm Accessories",
    kicker: "Agriculture Accessories",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1400&q=85",
    intro: "Nozzles, spray accessories, farm care items and everyday agriculture essentials.",
    urdu: "زرعی سپرے ایکسیسریز، نوزلز اور فارم کے روزمرہ سامان دستیاب ہیں۔",
    items: ["Nozzles", "Spray Parts", "Protective Gear", "Farm Kits", "Storage Items", "Accessories"],
    products: ["Nozzle Set", "Spray Pipe", "Gloves", "Farm Kit"]
  },
  "roundup-power-max": {
    title: "Roundup Power Max 1L",
    kicker: "Weedicide Product",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1400&q=85",
    intro: "Demo product page for a weedicide/herbicide item with price on call and WhatsApp ordering.",
    urdu: "یہ ڈیمو پروڈکٹ پیج ہے، قیمت اور دستیابی کے لئے واٹس ایپ پر رابطہ کریں۔",
    items: ["Weed Control", "1 Liter Pack", "Farm Use", "Dose Guidance", "WhatsApp Order", "Price on Call"],
    products: ["Roundup Power Max 1L", "Glyphosate", "Spray Booster", "Nozzle Set"]
  },
  "ammonium-sulphate": {
    title: "Ammonium Sulphate 50kg",
    kicker: "Fertilizer Product",
    image: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=1400&q=85",
    intro: "Demo product page for basic fertilizer with wholesale and retail pricing support.",
    urdu: "یہ کھاد کا ڈیمو پروڈکٹ پیج ہے، موجودہ ریٹ کے لئے رابطہ کریں۔",
    items: ["50kg Bag", "Nitrogen Support", "Sulfur Support", "Crop Nutrition", "Bulk Order", "Delivery Advice"],
    products: ["Ammonium Sulphate", "Urea", "DAP", "NPK"]
  },
  "livestock-health-pack": {
    title: "Livestock Health Pack",
    kicker: "Veterinary Product",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=85",
    intro: "Demo product page for livestock health care medicines and supplements.",
    urdu: "جانوروں کی صحت کے لئے ادویات اور سپلیمنٹ کے بارے میں معلومات حاصل کریں۔",
    items: ["Medicine Pack", "Vitamin Support", "Minerals", "Deworming", "Vet Advice", "Farm Use"],
    products: ["Health Pack", "Vitamin Booster", "Dewormer", "Calcium Plus"]
  },
  "maize-hybrid-seed": {
    title: "Maize Hybrid Seed Pack",
    kicker: "Hybrid Seed Product",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1400&q=85",
    intro: "Demo product page for hybrid maize seed with seasonal sowing guidance.",
    urdu: "ہائبرڈ مکئی کے بیج اور کاشت کے مشورے کے لئے رابطہ کریں۔",
    items: ["Hybrid Maize", "High Yield", "Seasonal Sowing", "Seed Rate Advice", "Original Pack", "Farm Support"],
    products: ["Maize Hybrid", "Seed Treatment", "Fertilizer Plan", "Spray Plan"]
  },
  "battery-spray-machine": {
    title: "Battery Spray Machine",
    kicker: "Spray Machinery Product",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1400&q=85",
    intro: "Demo product page for battery spray machines, nozzles and spare parts.",
    urdu: "بیٹری سپرے مشین، نوزلز اور سپیئر پارٹس کے لئے رابطہ کریں۔",
    items: ["Battery Operated", "Rechargeable", "Nozzle Support", "Spare Parts", "Farm Spray", "Warranty Info"],
    products: ["Battery Sprayer", "Nozzle Set", "Spray Pipe", "Charger"]
  },
  "wanda-animal-feed": {
    title: "Wanda Animal Feed",
    kicker: "Animal Feed Product",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=85",
    intro: "Demo product page for livestock feed and dairy nutrition support.",
    urdu: "جانوروں کے ونڈہ اور غذائی مشورے کے لئے رابطہ کریں۔",
    items: ["Dairy Feed", "Milk Support", "Minerals", "Bulk Supply", "Feed Plan", "Wholesale Rate"],
    products: ["Wanda Feed", "Mineral Mix", "Khal", "Chokar"]
  },
  "home-garden-starter-kit": {
    title: "Home Garden Starter Kit",
    kicker: "Kitchen Gardening Product",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=85",
    intro: "Demo product page for home gardening seeds, soil and tools.",
    urdu: "گھریلو باغبانی کٹ، بیج اور ٹولز کے لئے رابطہ کریں۔",
    items: ["Seed Mix", "Garden Soil", "Tools", "Pest Control", "Home Use", "Growing Guide"],
    products: ["Starter Kit", "Seed Mix", "Pruner", "Garden Soil"]
  },
  "farm-irrigation-kit": {
    title: "Farm Irrigation Kit",
    kicker: "Drip Irrigation Product",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1400&q=85",
    intro: "Demo product page for drip irrigation and farm water saving kits.",
    urdu: "ڈرپ اریگیشن اور پانی کی بچت کے سسٹم کے لئے رابطہ کریں۔",
    items: ["Drip Kit", "Sprinklers", "Water Saving", "Farm Setup", "Filters", "Valves"],
    products: ["Irrigation Kit", "Drip Line", "Filter", "Sprinkler"]
  }
};

const slug = document.body.dataset.page || "pesticides";
const data = pages[slug] || pages.pesticides;
document.title = `${data.title} - Toru Traders Agriculture Services`;

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

document.getElementById("page-root").innerHTML = `
  <nav class="detail-nav">
    <a class="detail-brand" href="../index.html">
      <img src="../logo.jpeg" alt="Toru Traders logo">
      <span>Toru Traders <strong>Agriculture Services</strong></span>
    </a>
    <div>
      <a href="../index.html">Home</a>
      <a href="about.html">About</a>
      <a href="products.html">Products</a>
      <a href="shop.html">Shop</a>
      <a href="veterinary-services.html">Veterinary</a>
      <a href="contact.html">Contact</a>
      <a class="detail-call" href="tel:+923005720293"><i class="bi bi-telephone-fill"></i> Call Now</a>
    </div>
  </nav>

  <header class="detail-hero" style="background-image: linear-gradient(105deg, rgba(6,39,24,.92), rgba(6,39,24,.58)), url('${data.image}')">
    <div class="container">
      <span class="eyebrow"><i class="bi bi-stars"></i> ${data.kicker}</span>
      <h1>${data.title}</h1>
      <p>${data.intro}</p>
      <p class="urdu-copy" lang="ur" dir="rtl">${data.urdu}</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="tel:+923005720293"><i class="bi bi-telephone-fill"></i> Call Now</a>
        <a class="btn btn-whatsapp" href="https://wa.me/923005720293"><i class="bi bi-whatsapp"></i> WhatsApp Order</a>
        <a class="btn btn-glass" href="../index.html">Back Home</a>
      </div>
    </div>
  </header>

  <main>
    <section class="section detail-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-kicker">What We Offer</span>
          <h2>${data.title} Categories</h2>
          <p>Separate page with dedicated content, product examples and direct contact actions.</p>
        </div>
        <div class="detail-chip-grid">
          ${data.items.map((item) => `<div class="detail-chip"><i class="bi bi-check2-circle"></i>${item}</div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section detail-products">
      <div class="container">
        <div class="section-heading">
          <span class="section-kicker">Sample Products</span>
          <h2>Available Items</h2>
        </div>
        <div class="row g-4">
          ${data.products.map((product, index) => `
            <div class="col-lg-3 col-sm-6">
              <article class="detail-product-card">
                <span>${index % 2 === 0 ? "Sale" : "New"}</span>
                <img src="${data.image}" alt="${product}">
                <div>
                  <small>${data.kicker}</small>
                  <h3>${product}</h3>
                  <p>Price on call / WhatsApp</p>
                  <a class="btn btn-green w-100" href="https://wa.me/923005720293"><i class="bi bi-whatsapp"></i> Ask Price</a>
                </div>
              </article>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section detail-cta">
      <div class="container">
        <div class="contact-panel">
          <div>
            <span class="section-kicker gold-text">Need Help?</span>
            <h2>Ask Toru Traders for ${data.title}</h2>
            <p>Share crop, animal, quantity or farm issue. We will guide you with suitable products and services.</p>
          </div>
          <div class="contact-actions">
            <a class="contact-item" href="tel:+923005720293"><i class="bi bi-telephone-fill"></i><span>0300 5720293</span></a>
            <a class="contact-item" href="https://wa.me/923005720293"><i class="bi bi-whatsapp"></i><span>WhatsApp</span></a>
            <a class="btn btn-gold" href="../index.html#quote"><i class="bi bi-receipt"></i> Get Quote</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${sharedFooter}

  <a class="floating-whatsapp" href="https://wa.me/923005720293" aria-label="Chat on WhatsApp"><i class="bi bi-whatsapp"></i></a>
`;
