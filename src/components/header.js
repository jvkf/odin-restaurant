export function restaurantHeader() {
  const container = document.createElement("div");
  const headerImg = document.createElement("img");
  const headerTitle = document.createElement("h1");

  headerImg.src = "https://source.unsplash.com/1200x400/?italian-restaurant";
  headerImg.alt = "Italian Restaurant Photo";

  headerTitle.textContent = "Welcome to JayJay Italian";

  container.appendChild(headerImg);
  container.appendChild(headerTitle);
  container.classList.add("header_container");

  return container;
}
