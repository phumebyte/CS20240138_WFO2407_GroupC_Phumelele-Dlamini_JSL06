// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { name: "Garlic Bread", price: 25 },
        { name: "Bruschetta", price: 35 },
        { name: "Meatballs", price: 45 },
        { name: "Beef Skewers", price: 60 },
        { name: "Mushroom Soup & Garlic Bread", price: 55 }
    ],
    MainCourses: [
        { name: "Margherita Pizza", price: 90 },
        { name: "Spaghetti Carbonara", price: 85 },
        { name: "Steak Fillet", price: 120 },
        { name: "Salmon & Pesto Pasta", price: 110 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 50 },
        { name: "Cheesecake", price: 45 },
        { name: "Waffles & Cream", price: 40 },
        { name: "Lemon Sorbet", price: 30 }
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    
    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);
        
        // Create an element to represent a list of items
        const itemsList = document.createElement('ul');
        
        // Append a list of items element to the menu container
        menuContainer.appendChild(itemsList);
        
        // Loop through the items in the category and create list items
        for (let i = 0; i < menu[category].length; i++) {
            const item = menu[category][i];
            
            // Create a list item element
            const listItem = document.createElement('li');
            
            // Set the text content of the list item element to the item name and price
            listItem.textContent = `${item.name} - R${item.price.toFixed(2)}`;
            
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));
            
            // Append the list item to the list of items
            itemsList.appendChild(listItem);
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    
    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = `${item.name} - R${item.price.toFixed(2)}`;
    
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);
    
    // Calculate and update the total price
    let currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + item.price;
    orderTotalElement.textContent = newTotal.toFixed(2);
    
    // Update the text content of the final price element with the new total including gratuity
    updateFinalPrice(newTotal);
}

// Function to update the final price (including gratuity)
function updateFinalPrice(total) {
    let finalPriceElement = document.getElementById('final-price');
    const gratuity = 0.10 * total; // 10% gratuity
    const finalPrice = total + gratuity;
    
    // If the final price element doesn't exist, create it
    if (!finalPriceElement) {
        finalPriceElement = document.createElement('p');
        finalPriceElement.id = 'final-price';
        document.getElementById('order').appendChild(finalPriceElement);
    }
    
    // Update the final price element with the final price
    finalPriceElement.textContent = `Final Total (incl. gratuity): R${finalPrice.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
