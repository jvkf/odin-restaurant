import { restaurantHeader } from "./components/header";
import { restaurantContent } from "./components/home";
import { orderContent } from "./components/order";
import load from "./functions/load";
import "./components/styles.css";

const header = document.querySelector("#header");
header.appendChild(restaurantHeader());

export function appendComponent(component) {
  const content = document.querySelector("#content");
  content.replaceChildren(component);
}

function nav() {
  const buttons = document.querySelectorAll("nav button");

  function resetStatus() {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      resetStatus();

      switch (e.target.id) {
        case "homeButton": {
          appendComponent(restaurantContent());
          e.target.classList.add("active");
          break;
        }
        case "orderButton": {
          appendComponent(orderContent());
          e.target.classList.add("active");
          break;
        }
      }
    });
  });
}

nav();
load();
