// Create a function to generate a card element
function createCard(title, content) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    return card;
}

// Function to render cards on the page
function renderCards() {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    const cardData = [
        { title: " ", content: "Name: Mrs. Dennis Schulist Username: Leopoldo_Corkery Email: Karley_Dach@jasper.info City: South Christy Phone: 1-477-935-8478 x6430 Website: ola.org Company: Considine-Lockman" },
        //  { title: "Card 2", content: "This is the content of card 2." },
        // { title: "Card 3", content: "This is the content of card 3." }
    ];

    cardData.forEach(data => {
        const card = createCard(data.title, data.content);
        container.appendChild(card);
    });
}

// Call renderCards function to initially render the cards
renderCards();
