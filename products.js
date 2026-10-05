const products = [
  ["BTRI Green Tea", "৳৩,০০০ / কেজি", "product6.jpg", "বাংলাদেশ চা গবেষণা ইনস্টিটিউটের গ্রিন টি।"],
  ["Premium Green Tea", "৳২,০০০ / কেজি", "product7.jpg", "বাছাই করা প্রিমিয়াম মানের গ্রিন টি।"],
  ["Pearl Green Tea (মুক্তা)", "৳৩০০ / ১০০ গ্রাম বয়াম", "product8.jpg", "প্রতি বয়ামে ১০০ গ্রাম।"],
  ["Tea Gold", "৳৫০০ / কেজি", "product1.jpg", "Golden Leaf Tea-এর বিশেষ Tea Gold।"],
  ["First Plus", "৳৮০০ / কেজি", "product2.jpg", "বাছাই করা মানের বিশেষ চা।"],
  ["TG Special", "৳১,২০০ / কেজি", "product3.jpg", "Golden Leaf Tea-এর বিশেষ নির্বাচন।"],
  ["Masala Tea", "৳১,৫০০ / কেজি", "product4.jpg", "সমৃদ্ধ মসলা ও চায়ের বিশেষ মিশ্রণ।"],
  ["BT-2", "৳৪০০ / কেজি", "product5.jpg", "প্রতিদিনের জন্য বাছাই করা চা।"]
];

document.getElementById("grid").innerHTML = products.map(p =>
  '<article class="product">' +
  '<img src="assets/' + p[2] + '" alt="' + p[0] + '">' +
  '<div><h3>' + p[0] + '</h3>' +
  '<p>' + p[3] + '</p>' +
  '<strong>' + p[1] + '</strong>' +
  '<a class="btn primary" target="_blank" href="https://wa.me/8801783594667?text=' +
  encodeURIComponent("আমি " + p[0] + " (" + p[1] + ") অর্ডার করতে চাই।") +
  '">WhatsApp-এ অর্ডার</a></div></article>'
).join("");
