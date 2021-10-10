function createCard(house) {
  // This function should create a card item
  /* Initialise the container element */
  const cards = document.querySelector(".cards");
  
  /* Destructure the house object */
  const {name, type, desc, img, available} = house;
  
  /* Create the necessary element for the card */
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img");
  cardImg.src = img;
  cardImg.alt = "house pict";
  /* FixMe: If no picture, apply a "no pict available pict" */
  cardImg.onerror="this.src='https://www.brasscraft.com/wp-content/uploads/2017/01/no-image-available.png';";
  
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  
  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = name;
  
  const cardDesc = document.createElement("p");
  cardDesc.innerHTML = desc;
  
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = "Contact";

  /* append the created element to the container */
  cards.appendChild(card);
  
  card.appendChild(cardTitle);
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  cardBody.appendChild(cardDesc);
  card.appendChild(cardButton);

}

export { createCard }