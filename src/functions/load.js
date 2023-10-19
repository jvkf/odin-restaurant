import { appendComponent } from "../index";
import { restaurantContent } from "../components/home";

export default function load() {
  appendComponent(restaurantContent());
}
