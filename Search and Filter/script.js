let products = {
    data: [
        {
            productName: "Save Water Save Life - Mumbai",
            category: "Mumbai",
            type: "Drive",
            image: "save water.jpg",
        },
        {
            productName: "E-Waste Collection Drive - Mumbai",
            category: "Mumbai",
            type: "Drive",
            image: "recycle e waste.jpeg",
        },
        {
            productName: "Recyclable Plastic Collection - Pune",
            category: "Pune",
            type: "Collection",
            image: "plastic recycle.jpeg",
        },
        {
            productName: "Save Farmer's Field - Nashik",
            category: "Nashik",
            type: "Drive",
            image: "farming.jpg",
        },
    ],
};

// Apply Filters
function applyFilters() {
    const locationFilter = document.getElementById("location").value;
    const activityTypeFilter = document.getElementById("activity-type").value;

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const location = card.getAttribute("data-location");
        const type = card.getAttribute("data-type");

        // Filtering logic
        const locationMatch = locationFilter === "all" || location === locationFilter;
        const typeMatch = activityTypeFilter === "all" || type === activityTypeFilter;

        if (locationMatch && typeMatch) {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
}

// Filter Products
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        if (value === "all") {
            card.classList.remove("hide");
        } else {
            if (card.classList.contains(value)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        }
    });
}

// Search Functionality
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput)) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

// Initially display all products
window.onload = () => {
    displayProducts();
    filterProduct("all");
};

// Create and display product cards
function displayProducts() {
    let productsContainer = document.getElementById("products");

    for (let i of products.data) {
        let card = document.createElement("div");
        card.classList.add("card", i.category);
        card.setAttribute("data-location", i.category);
        card.setAttribute("data-type", i.type);

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        let image = document.createElement("img");
        image.src = i.image;
        imgContainer.appendChild(image);

        let container = document.createElement("div");
        container.classList.add("container");

        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = i.productName;
        container.appendChild(name);

        card.appendChild(imgContainer);
        card.appendChild(container);

        productsContainer.appendChild(card);
    }
}

// Toggle filter section visibility
function toggleFilter() {
    const filterSection = document.getElementById("filter-section");
    filterSection.style.display = filterSection.style.display === "none" ? "block" : "none";
}
