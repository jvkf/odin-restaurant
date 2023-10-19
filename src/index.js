import { restaurantContent } from "./components/home";
import { orderContent } from "./components/order";
import firstLoad from "./functions/load";
import "./components/styles.css";

function getButtons() {
  return document.querySelectorAll("nav button");
}

const components = {
  restaurantContent: restaurantContent(),
  orderContent: orderContent(),
};

export function appendComponent(component) {
  const content = document.querySelector("#content");
  content.replaceChildren(component);
}

function resetStatus() {
  const buttons = getButtons();
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function updateStatus(button) {
  button.classList.add("active");
}

function attachContent(e) {
  const button = e.target;
  const content = e.target.dataset.content;

  resetStatus();
  updateStatus(button);
  appendComponent(components[content]);
}

function navigation() {
  const buttons = getButtons();
  buttons.forEach((btn) => {
    btn.addEventListener("click", attachContent);
  });
}

navigation();
firstLoad();
