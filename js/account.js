document.addEventListener("DOMContentLoaded", function () {
  const logout = document.getElementById("logout");
  const name = document.getElementById("name");
  const address = document.getElementById("address");
  const nbrAddress = document.getElementById("nbr-address");
  const currentAdress = user.addresses[user.currentIndex];

  logout.addEventListener("click", () => {
    alert("You have been logged out");
  });

  name.innerHTML = "";
  address.innerHTML = "";
  nbrAddress.innerHTML = "";

  name.innerHTML = currentAdress.firstName + " " + currentAdress.lastName;
  address.innerHTML = `
    ${currentAdress.district} / ${currentAdress.street}<br />
    ${currentAdress.phoneNumber1} / ${currentAdress.phoneNumber2}<br />
    ${currentAdress.region} / Niger<br />
    <br />
  `;
  nbrAddress.innerHTML = `View Addresses (${user.addresses.length})`;
});
