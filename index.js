// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Meatballs", "Beef Skewers", "Mushroom Soup & Garlic Bread"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Steak Fillet", "Salmon &  Pesto Pasta"],
    Desserts: ["Tiramisu", "Cheesecake", "Waffles & Cream", "Lemon Sorbet"]
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
        // Set the text content of the category element to the category name

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);
        // Create an element to represent a list of items
        const itemsList = document.createElement('ul');
        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items
        for (let i = 0; i < menu[category].length; i++) {
            const item = menu[category][i];
            const listItem = document.createElement('li');
            
            listItem.textContent = `${item.name} - R${item.price.toFixed(2)}`;
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));
            // Append the list item to the list of items
            itemsList.appendChild(listItem);        
            // Create a list item element

            // Set the text content of the list item element to the item name
    
        }
}        
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
