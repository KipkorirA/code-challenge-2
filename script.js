// Ensuring that all DOM elements are fully loaded before executing JavaScript.
document.addEventListener('DOMContentLoaded', () => {

    // DOM elements
    const itemInput = document.getElementById('item');
    const addBtn = document.getElementById('addBtn');
    const itemList = document.getElementById('itemList');
    const markBtn = document.getElementById('markBtn');
    const clearBtn = document.getElementById('clearBtn');
  
    // Empty array to store shopping list items
    let shoppingList = [];
  
    // Function to render the shopping list
    const renderList = () => {
      itemList.innerHTML = ''; // Clear previous list items
  
      // Loop through each item in the shopping list
      shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name; // Set the list item text
  
        // Add 'completed' class if item is completed
        if (item.completed) {
          li.classList.add('completed');
        }
  
        // Toggle completion status on click
        li.addEventListener('click', () => {
          item.completed = !item.completed; // Toggle completed status
          renderList(); // Re-render the list after modification
        });
  
        itemList.appendChild(li); // Append the list item to the list
      });
    };
  
    // Function to add new item to shopping list
    const addItem = () => {
      const itemName = itemInput.value.trim(); // Get the trimmed value from input field
      if (itemName !== '') {
        shoppingList.push({ name: itemName, completed: false }); // Add new item to shopping list
        renderList(); // Render the updated shopping list
        itemInput.value = ''; // Clear the input field after adding
      }
    };
  
    // Function to mark all items as completed
    const markAll = () => {
      shoppingList.forEach(item => item.completed = true); // Mark all items as completed
      renderList(); // Render the updated shopping list
    };
  
    // Function to clear all items from the list
    const clearAll = () => {
      shoppingList = []; // Clear the shopping list array
      renderList(); // Render the updated shopping list (empty)
    };
  
    // Event listener for 'Add' button click
    addBtn.addEventListener('click', addItem);
  
    // Event listener for 'Mark All' button click
    markBtn.addEventListener('click', markAll);
  
    // Event listener for 'Clear All' button click
    clearBtn.addEventListener('click', clearAll);
  
    // Event listener for 'Enter' key press in the input field
    itemInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        addItem(); // Call addItem function when Enter key is pressed
      }
    });
  });
  
  

