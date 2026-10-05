const w = t =>
  "https://wa.me/8801783594667?text=" + encodeURIComponent(t);

document.getElementById("wa1").href =
  w("আমি Golden Leaf Tea থেকে চা অর্ডার করতে চাই।");

document.getElementById("wa2").href =
  w("Golden Leaf Tea-এর পণ্য সম্পর্কে জানতে চাই।");

document.getElementById("year").textContent =
  new Date().getFullYear();

document.getElementById("menu").onclick = () => {
  document.querySelector("nav").classList.toggle("open");
};
