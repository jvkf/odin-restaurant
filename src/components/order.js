export function orderContent() {
  const container = document.createElement("div");
  const howToOrder = document.createElement("p");
  const phoneText = document.createElement("p");
  const phone = document.createElement("a");

  howToOrder.textContent =
    "To order your meal, check our menu and then contact us.";
  phoneText.textContent = "Our Phone Number is: ";
  phone.textContent = "9999-9999";
  phone.href = "tel:9999-9999";
  phoneText.appendChild(phone);

  container.appendChild(howToOrder);
  container.appendChild(phoneText);

  return container;
}
