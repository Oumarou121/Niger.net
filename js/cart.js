document.addEventListener("DOMContentLoaded", function () {
  const cartContent = document.getElementById("cart-content");
  const subContent = document.getElementById("sub-total");
  const shippingContent = document.getElementById("shipping-total");
  const totalContent = document.getElementById("total");
  let carts = products.slice(-5);
  let subTotalCart = 0;
  let shippingTotalCart = 2000;

  function updateCart() {
    shippingContent.innerHTML = `${formatPrice(shippingTotalCart)} FCFA`;
    subContent.innerHTML = `${formatPrice(subTotalCart)} FCFA`;
    totalContent.innerHTML = `${formatPrice(
      subTotalCart + shippingTotalCart
    )} FCFA`;
  }
  cartContent.innerHTML = "";
  const table = `
    <table class="cart-table">
      <thead>
        <tr>
          <th colspan="2">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody id="cart-items-body">
        <!-- Les items du panier seront ajoutés ici -->
      </tbody>
    </table>
  `;

  cartContent.innerHTML = table;

  const tbody = document.getElementById("cart-items-body");

  if (carts.length > 0) {
    carts.forEach((cart) => {
      const cartItem = document.createElement("tr");
      cartItem.innerHTML = `
        <td class="product-thumbnail">
          <a href="${`/product.html?id=${cart.id}`}">
            <img src="${cart.images[0]}" alt="${cart.name}" />
          </a>
        </td>
        <td class="product-name">
          <a href="${`/product.html?id=${cart.id}`}">${cart.name}</a>
        </td>
        <td class="product-price">
          <span class="price">${formatPrice(cart.price)} FCFA</span>
        </td>
        <td class="product-quantity">
          <div class="pro-qty">
            <span class="dec">-</span>
            <input type="text" name="updates" value="1" readonly/>
            <span class="inc">+</span>
          </div>
        </td>
        <td class="total-price">
          <span class="price">${formatPrice(cart.price)} FCFA</span>
        </td>
        <td class="product-remove">
          <a href="/cart/change?line=1&amp;quantity=0">
            <i class="uil uil-times"></i>
          </a>
        </td>
      `;

      subTotalCart += cart.price;
      updateCart();
      const inc = cartItem.querySelector(".inc");
      const dec = cartItem.querySelector(".dec");
      const qtyInput = cartItem.querySelector(".pro-qty input");
      const totalPrice = cartItem.querySelector(".total-price .price");

      inc.addEventListener("click", () => {
        let qty = parseInt(qtyInput.value);
        if (qty < cart.qty) {
          qtyInput.value = qty + 1;
          totalPrice.innerHTML = `${formatPrice(
            cart.price * qtyInput.value
          )} FCFA`;
          subTotalCart += cart.price;
          updateCart();
        }
      });

      dec.addEventListener("click", () => {
        let qty = parseInt(qtyInput.value);
        if (qty > 1) {
          qtyInput.value = qty - 1;
          totalPrice.innerHTML = `${formatPrice(
            cart.price * qtyInput.value
          )} FCFA`;
          subTotalCart -= cart.price;
          updateCart();
        }
      });

      tbody.appendChild(cartItem);
    });
  } else {
    cartContent.innerHTML = `
      <div class="no-results-container">
        <i class="uil uil-shopping-cart"></i>
        <p>Your Shopping Cart is empty. <a href="shop.html">Continue shopping</a></p>
      </div>
    `;
  }

  // const dateInput = document.getElementById("date");
  // const timeInput = document.getElementById("time");

  // const today = new Date();
  // const minDate = new Date(today);
  // minDate.setDate(today.getDate() + 3);
  // const maxDate = new Date(minDate);
  // maxDate.setDate(minDate.getDate() + 7);

  // const formatDate = (date) => date.toISOString().split("T")[0];

  // dateInput.min = formatDate(minDate);
  // dateInput.max = formatDate(maxDate);

  // dateInput.addEventListener("change", function () {
  //   const selectedDate = new Date(this.value);
  //   const day = selectedDate.getDay();

  //   if (day === 0) {
  //     alert("No delivery available on Sunday.");
  //     this.value = "";
  //     return;
  //   }

  //   if (day >= 1 && day <= 5) {
  //     timeInput.min = "12:00";
  //     timeInput.max = "16:00";
  //   } else if (day === 6) {
  //     timeInput.min = "08:00";
  //     timeInput.max = "11:00";
  //   }
  //   timeInput.value = "";
  // });

  // timeInput.addEventListener("change", function () {
  //   const selectedTime = this.value;
  //   if (selectedTime < this.min || selectedTime > this.max) {
  //     alert(`Please select a time between ${this.min} and ${this.max}`);
  //     this.value = "";
  //   }
  // });

  document.getElementById("cart-terms").addEventListener("change", function () {
    document.querySelector(".checkout-button").disabled = !this.checked;
  });
});
