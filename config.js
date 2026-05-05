const siteConfig = {
  primaryColor: "#d4af37",
  logo: "",
  heroTitle: "Oriana Clinics",
  heroDesc: "عيادة تجميل متخصصة في الفيلر والليزر والعناية بالبشرة",
  whatsapp: "201557100910",
  instagram: "",
  facebook: ""
};

document.documentElement.style.setProperty('--primary-color', siteConfig.primaryColor);
document.getElementById("logo").src = siteConfig.logo;
document.getElementById("heroTitle").innerText = siteConfig.heroTitle;
document.getElementById("heroDesc").innerText = siteConfig.heroDesc;
document.getElementById("whatsappBtn").href = "https://wa.me/" + siteConfig.whatsapp;
document.getElementById("instagramLink").href = siteConfig.instagram;
document.getElementById("facebookLink").href = siteConfig.facebook;
