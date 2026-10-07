const products = [
  ["BTRI Green Tea", "৳3,000 / কেজি", "product1.jpeg", "বাংলাদেশের মানসম্মত গ্রিন টি।"],
  ["Premium Green Tea", "৳2,000 / কেজি", "product7.jpg", "উন্নত মানের প্রিমিয়াম গ্রিন টি।"],
  ["Pearl Green Tea (মুক্তা)", "৳300 / 100 গ্রাম জার", "product8.jpg", "সুগন্ধ ও স্বাদে বিশেষ গ্রিন টি।"],
  ["Tea Gold", "৳500 / কেজি", "product1.jpg", "Golden Leaf Tea-এর বিশেষ চা।"],
  ["First Plus", "৳800 / কেজি", "product2.jpg", "বাছাই করা মানসম্মত চা।"],
  ["TG Special", "৳1,200 / কেজি", "product3.jpg", "বিশেষ মানের চা।"],
  ["Masala Tea", "৳1,500 / কেজি", "product4.jpeg", "সুগন্ধি মসলা চা।"],
  ["BT-2", "৳400 / কেজি", "product5.jpeg", "প্রতিদিনের জন্য ভালো মানের চা।"]
];

document.getElementById("grid").innerHTML = products.map(p =>
  '<article class="product">' +
    '<img src="assets/' + p[2] + '" alt="' + p[0] + '">' +
    '<div>' +
      '<h3>' + p[0] + '</h3>' +
      '<p>' + p[3] + '</p>' +
      '<strong>' + p[1] + '</strong>' +
      '<br><br>' +
      '<a class="btn primary" target="_blank" href="https://wa.me/8801783594667?text=' +
      encodeURIComponent("আমি " + p[0] + " (" + p[1] + ") অর্ডার করতে চাই।") +
      '">WhatsApp-এ অর্ডার</a>' +
    '</div>' +
  '</article>'
).join("");
