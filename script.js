const contact = {
  name: "آموزشگاه قالیبافی شبرنگ",
  phone: "+989352477306",
  email: "zahranamjoo39@gmail.com",
  instagram: "https://www.instagram.com/carpetshabrang/"
};

document.getElementById("saveContact").addEventListener("click", () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${contact.name}`,
    `ORG:${contact.name}`,
    `TEL;TYPE=WORK,VOICE:${contact.phone}`,
    `EMAIL:${contact.email}`,
    `URL:${contact.instagram}`,
    "END:VCARD"
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "shabrang-contact.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

document.querySelectorAll("a[data-fallback]").forEach((link) => {
  link.addEventListener("click", () => {
    const fallback = link.dataset.fallback;
    window.setTimeout(() => {
      if (!document.hidden) window.location.href = fallback;
    }, 900);
  });
});
