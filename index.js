// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
    // Initialize an empty shopping list array
    let shoppingList = [];
    
    // Get references to necessary DOM elements
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItem');
    const clearListButton = document.getElementById('clearList');
    const shoppingListContainer = document.getElementById('shoppingList');
    
    // Function to render the shopping list on the page
    function renderShoppingList() {
      // Clear the existing content of shoppingListContainer
      shoppingListContainer.innerHTML = '';
      
      // Loop through each item in shoppingList
      shoppingList.forEach((item, index) => {
        // Create a new list item element
        const li = document.createElement('li');
        li.textContent = item.name; // Set the text content to the item's name
        
        // Add 'purchased' class if item is marked as purchased
        if (item.purchased) {
          li.classList.add('purchased');
        }
        
        // Add click event listener to toggle purchased status
        li.addEventListener('click', () => {
          item.purchased = !item.purchased; // Toggle purchased status
          renderShoppingList(); // Render the updated shopping list
        });
        
        // Append the list item to shoppingListContainer
        shoppingListContainer.appendChild(li);
      });
    }
    
    // Event listener for the 'Add Item' button
    addItemButton.addEventListener('click', () => {
      const itemName = itemInput.value.trim(); // Get trimmed value from input field
      
      // Check if itemName is not empty
      if (itemName !== '') {
        // Add new item object to shoppingList array
        shoppingList.push({ name: itemName, purchased: false });
        itemInput.value = ''; // Clear the input field
        renderShoppingList(); // Render the updated shopping list
      }
    });
    
    // Event listener for the 'Clear List' button
    clearListButton.addEventListener('click', () => {
      shoppingList = []; // Clear the shoppingList array
      renderShoppingList(); // Render the updated shopping list (empty)
    });
    
    // Initially render the shopping list when the DOM is loaded
    renderShoppingList();
    
  });