import { appendComponent } from "../index";
import { restaurantHeader } from "../components/header";
import { restaurantContent } from "../components/home";

const header = document.querySelector("#header");

header.appendChild(restaurantHeader());

export default function firstLoad() {
  appendComponent(restaurantContent());
}
