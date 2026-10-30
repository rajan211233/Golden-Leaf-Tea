const products = [
  ["BTRI Green Tea", 3000, "product1.jpg", "বাংলাদেশের মানসম্মত গ্রিন টি।"],
  ["Premium Green Tea", 2000, "product2.jpg", "উন্নত মানের প্রিমিয়াম গ্রিন টি।"],
  ["Pearl Green Tea (মুক্তা)", 300, "product3.jpg", "সুগন্ধ ও স্বাদে বিশেষ গ্রিন টি।"],
  ["Tea Gold", 500, "product4.jpeg", "Golden Leaf Tea-এর বিশেষ চা।"],
  ["First Plus", 800, "product5.jpeg", "বাছাই করা মানসম্মত চা।"],
  ["TG Special", 1200, "product6.jpeg", "বিশেষ মানের চা।"],
  ["Masala Tea", 1500, "product7.jpg", "সুগন্ধি মসলা চা।"],
  ["BT-2", 400, "product8.jpg", "প্রতিদিনের জন্য ভালো মানের চা।"]
];

const grid = document.getElementById("grid");

grid.innerHTML = products.map((p, i) => {
  const isPearl = i === 2;

  const options = isPearl
    ? [
        [1, "১ জার (১০০ গ্রাম)"],
        [2, "২ জার (২০০ গ্রাম)"],
        [3, "৩ জার (৩০০ গ্রাম)"],
        [5, "৫ জার (৫০০ গ্রাম)"]
      ]
    : [
        [0.25, "২৫০ গ্রাম"],
        [0.5, "৫০০ গ্রাম"],
        [1, "১ কেজি"],
        [2, "২ কেজি"]
      ];

  const unit = isPearl ? "জার" : "কেজি";
  const firstQty = options[0][0];
  const firstPrice = p[1] * firstQty;

  return `
    <article class="product">
      <img src="assets/${p[2]}" alt="${p[0]}">

      <div>
        <h3>${p[0]}</h3>
        <p>${p[3]}</p>

        <strong>
          ${isPearl
            ? "৳300 / ১০০ গ্রাম জার"
            : "৳" + p[1].toLocaleString("en-US") + " / কেজি"}
        </strong>

        <br><br>

        <label for="qty-${i}">পরিমাণ নির্বাচন করুন:</label>

        <select id="qty-${i}" class="qty-select">
          ${options.map(o =>
            `<option value="${o[0]}">${o[1]}</option>`
          ).join("")}
        </select>

        <p>
          মোট মূল্য:
          <strong id="price-${i}">
            ৳${firstPrice.toLocaleString("en-US")}
          </strong>
        </p>

        <a
          id="order-${i}"
          class="btn primary"
          target="_blank"
          href="https://wa.me/8801783594667?text=${encodeURIComponent(
            "আমি " + p[0] + " অর্ডার করতে চাই।"
          )}"
        >
          Order Now
        </a>
      </div>
    </article>
  `;
}).join("");

products.forEach((p, i) => {
  const isPearl = i === 2;

  const qtySelect = document.getElementById("qty-" + i);
  const priceDisplay = document.getElementById("price-" + i);
  const orderButton = document.getElementById("order-" + i);

  function updatePrice() {
    const qty = Number(qtySelect.value);
    const total = p[1] * qty;

    priceDisplay.textContent =
      "৳" + total.toLocaleString("en-US");

    const quantityText = isPearl
      ? qty + " জার (প্রতি জার ১০০ গ্রাম)"
      : qty + " কেজি";

    const message =
      "আমি " + p[0] +
      " অর্ডার করতে চাই।\n" +
      "পরিমাণ: " + quantityText +
      "\nমোট মূল্য: ৳" +
      total.toLocaleString("en-US");

    orderButton.href =
      "https://wa.me/8801783594667?text=" +
      encodeURIComponent(message);
  }

  qtySelect.addEventListener("change", updatePrice);
  updatePrice();
});
