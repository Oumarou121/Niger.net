document.addEventListener("DOMContentLoaded", () => {
  const addressContainer = document.getElementById("address-container");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const phoneNumber1 = document.getElementById("phone-number1");
  const phoneNumber2 = document.getElementById("phone-number2");
  const regionSelect = document.getElementById("region-select");
  const districtSelect = document.getElementById("district");
  const street = document.getElementById("street");
  const modal = document.getElementById("address-modal");
  const openModalBtn = document.getElementById("add-address");
  const closeModalBtn = document.getElementById("exit");
  const cancelBtn = document.getElementById("cancel");
  const modalDelete = document.getElementById("address-modal-delete");
  const closeModalBtnDelete = document.getElementById("exit-delete");
  const cancelBtnDelete = document.getElementById("cancel-delete");
  const confirmDelete = document.getElementById("deleteAddress");
  const account = document.getElementById("top-user-account");
  const accountI = document.getElementById("angleAccount");
  const accountContent = document.getElementById("account-content");
  const delivery = document.getElementById("top-user-delivery");
  const deliveryI = document.getElementById("angleDelivery");
  const deliveryContent = document.getElementById("delivery-content");
  const shipping = document.getElementById("top-user-shipping-method");
  const shippingI = document.getElementById("angleShippingMethod");
  const shippingContent = document.getElementById("shipping-method-content");
  const payment = document.getElementById("top-user-payment");
  const paymentI = document.getElementById("anglePayment");
  const paymentContent = document.getElementById("payment-content");

  document.getElementById("showSummary").addEventListener("click", () => {
    const angleIcon = document.getElementById("angle");
    const summary = document.getElementById("summary-content");

    angleIcon.classList.toggle("uil-angle-up");
    angleIcon.classList.toggle("uil-angle-down");
    summary.classList.toggle("show");
  });

  account.addEventListener("click", () => {
    accountI.classList.toggle("rotate");
    accountContent.style.display =
      accountContent.style.display === "none" ? "block" : "none";
  });

  delivery.addEventListener("click", () => {
    deliveryI.classList.toggle("rotate");
    deliveryContent.style.display =
      deliveryContent.style.display === "none" ? "block" : "none";
  });

  shipping.addEventListener("click", () => {
    shippingI.classList.toggle("rotate");
    shippingContent.style.display =
      shippingContent.style.display === "none" ? "block" : "none";
  });

  payment.addEventListener("click", () => {
    paymentI.classList.toggle("rotate");
    paymentContent.style.display =
      paymentContent.style.display === "none" ? "block" : "none";
  });

  function updateDisplay() {
    addressContainer.innerHTML = "";

    if (user.addresses.length > 0) {
      user.addresses.forEach((address, index) => {
        const addressItem = document.createElement("div");
        addressItem.classList.add("address-card");
        if (index === user.currentIndex) {
          addressItem.classList.add("active");
        }

        addressItem.innerHTML = `
                <div class="addressContent">
                  <input id="address-${index}" type="radio" name="selectedAddress" value="${index}" ${
          index === user.currentIndex ? "checked" : ""
        } />
                  <label for="address-${index}">
                    <div class="address-info">
                      <h4>${address.firstName} ${address.lastName}</h4>
                      <p><strong>Téléphone :</strong> ${address.phoneNumber1} ${
          address.phoneNumber2 ? ` / ${address.phoneNumber2}` : ""
        }</p>
                      <p><strong>Adresse :</strong> ${address.street}, ${
          address.district
        }, ${address.region}, Niger</p>
                    </div>
                  </label>
                </div>
                <div class="options">
                  <i class="fas fa-ellipsis-v option-btn" data-index="${index}"></i>
                  <div class="dropdown-menu" id="menu-${index}">
                    <button class="edit-btn" data-index="${index}">Modifier</button>
                    <button class="delete-btn" data-index="${index}">Supprimer</button>
                  </div>
                </div>
            `;

        addressItem
          .querySelector(`input[name="selectedAddress"]`)
          .addEventListener("change", () => {
            document.querySelectorAll(".address-card").forEach((card) => {
              card.classList.remove("active");
            });
            addressItem.classList.add("active");
          });

        addressItem
          .querySelector(".option-btn")
          .addEventListener("click", () => {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
              menu.style.display = "none";
            });
            document.getElementById(`menu-${index}`).style.display = "block";
          });

        addressItem
          .querySelector(".delete-btn")
          .addEventListener("click", () => {
            openModalDelete(index);
          });

        addressItem.querySelector(".edit-btn").addEventListener("click", () => {
          openModal(false, index);
        });

        document.addEventListener("click", (e) => {
          if (!e.target.closest(".options")) {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
              menu.style.display = "none";
            });
          }
        });

        addressContainer.appendChild(addressItem);
      });
    } else {
      addressContainer.innerHTML = `<p class="no-address">Aucune adresse disponible.</p>`;
    }
  }

  openModalBtn.addEventListener("click", () => {
    openModal(true);
  });
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    resetInput();
  });
  closeModalBtnDelete.addEventListener("click", () => {
    modalDelete.classList.remove("show");
  });
  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    resetInput();
  });
  cancelBtnDelete.addEventListener("click", () => {
    modalDelete.classList.remove("show");
  });

  function openModal(addAddress = false, index = null) {
    resetInput();
    modal.classList.add("show");
    if (addAddress && index === null) {
      firstName.value = user.firstName;
      lastName.value = user.lastName;
      phoneNumber1.value = "";
      phoneNumber2.value = "";
      regionSelect.value = "";
      districtSelect.value = "";
      street.value = "";
    } else {
      const address = user.addresses[index];
      firstName.value = address.firstName;
      lastName.value = address.lastName;
      phoneNumber1.value = address.phoneNumber1;
      phoneNumber2.value = address.phoneNumber2;
      regionSelect.value = address.region;
      districtSelect.value = address.district;
      street.value = address.street;
    }

    document
      .getElementById("submitAddress")
      .addEventListener("click", () => save(addAddress, index));
  }

  function save(addAddress, index) {
    resetInput();
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneNumber1Value = phoneNumber1.value.trim();
    const phoneNumber2Value = phoneNumber2.value.trim();
    const regionValue = regionSelect.value;
    const districtValue = districtSelect.value;
    const streetValue = street.value.trim();

    if (firstNameValue.length < 4) {
      firstName.classList.add("error");
      return;
    }

    if (lastNameValue.length < 4) {
      lastName.classList.add("error");
      return;
    }

    if (phoneNumber1Value.length < 13) {
      phoneNumber1.classList.add("error");
      return;
    }

    if (!regionValue) {
      regionSelect.classList.add("error");
      return;
    }

    if (!districtValue) {
      districtSelect.classList.add("error");
      return;
    }

    if (streetValue.length < 5) {
      street.classList.add("error");
      return;
    }

    const address = new Address(
      firstNameValue,
      lastNameValue,
      phoneNumber1Value,
      phoneNumber2Value,
      regionValue,
      districtValue,
      streetValue
    );

    if (addAddress && index === null) {
      user.addAdress(address);
      modal.classList.remove("show");
      resetInput();
    } else {
      user.addresses[index] = address;
      modal.classList.remove("show");
      resetInput();
    }
    updateDisplay();
  }

  function resetInput() {
    document.querySelectorAll(".form-input").forEach((input) => {
      input.classList.remove("error");
    });
    regionSelect.classList.remove("error");
  }

  function openModalDelete(index) {
    modalDelete.classList.add("show");
    document.getElementById("delete-content").innerHTML = `
      Are you sure you want to delete the address ${user.addresses[index].firstName} ${user.addresses[index].lastName}, ${user.addresses[index].district} 
      ${user.addresses[index].street} ${user.addresses[index].phoneNumber1} Niamey?
    `;
    confirmDelete.addEventListener("click", () => {
      user.addresses.splice(index, 1);
      if (user.currentIndex > 0) {
        user.currentIndex--;
      }
      modalDelete.classList.remove("show");
      updateDisplay();
    });
  }

  const paymentMethods = document.querySelectorAll(".payment-method input");

  paymentMethods.forEach((input) => {
    input.addEventListener("change", () => {
      document.querySelectorAll(".payment-method").forEach((method) => {
        method.classList.remove("active");
      });

      input.closest(".payment-method").classList.add("active");
    });
  });

  updateDisplay();
});
