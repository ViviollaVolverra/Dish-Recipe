const menuData = {
    pizza: [
        {
            name: "Pizza Margherita",
            desc: "Tomato sauce, mozzarella, basil, olives, capers",
            price: "$12.30",
            img: ""
        },
        {
            name: "Pizza Tonno",
            desc: "Tomato sauce, oregano, anchovies, garlic, olives",
            price: "$10.45",
            img: ""
        },
        {
            name: "Pizza Salame",
            desc: "Tomato sauce, mozzarella, salami. olives, capers",
            price: "$10.35",
            img: ""
        }
    ],
    pasta: [
        {
            name: "Spaghetti Bolognese",
            desc: "With homemade tomato and minced meat sauce",
            price: "$9.80",
            img: ""
        },
        {
            name: "Penne al Pesto",
            desc: "With basil pesto and pine nuts",
            price: "$9.35",
            img: ""
        }
    ],
    meat: [
        {
            name: "Beef Fillet",
            desc: "With red wine sauce and vegetables",
            price: "$19.70",
            img: ""
        }
    ],
    fish: [
        {
            name: "Grilled Salmon",
            desc: "With lemon butter and herbs",
            price: "$17.50",
            img: ""
        }
    ]
};

    // Render default (pizza)
    const container = document.getElementById("menu-container");
    function renderMenu(category) {
        container.innerHTML = "";
        menuData[category].forEach(item => {
            const dish = document.createElement("div");
            dish.classList.add("menu-item");
            dish.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="price">${item.price}</div>
            `;
            container.appendChild(dish);
        })
    }

    // Tab click logic
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            renderMenu(tab.dataset.category);
        });
    });

    // Default view
    renderMenu("pizza");