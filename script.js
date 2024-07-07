document.addEventListener('DOMContentLoaded', () => {
  // Wait for the DOM content to load

  // Select elements from the DOM
  const itemInput = document.getElementById('item');
  const addBtn = document.getElementById('addBtn');
  const itemList = document.getElementById('itemList');
  const markBtn = document.getElementById('markBtn');
  const clearBtn = document.getElementById('clearBtn');

  // Initializing an array to hold items
  let shoppingList = [];

  // Update the itemList element based on current status
  const renderList = () => {
    itemList.innerHTML = '';

    shoppingList.forEach((item, index) => {
      // Create a new list item element
      const li = document.createElement('li');
      li.textContent = item.name;

      // Add class based on completed status for styling
      if (item.completed) {
        li.classList.add('completed');
      }

      // Create the Edit button
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';

      editBtn.addEventListener('click', () => {
        // Prompt the user to enter a new name for the item
        const newName = prompt('Enter new name:', item.name);

        if (newName !== null && newName !== '') {
          // Update the item name
          item.name = newName.trim();
          // Re-render the list to reflect the changes
          renderList();
        }
      });

      // Create the Clear button for each item
      const clearItemBtn = document.createElement('button');
      clearItemBtn.textContent = 'Clear';

      clearItemBtn.addEventListener('click', () => {
        // Remove the item from the shoppingList array
        shoppingList.splice(index, 1);
        // Re-render the list to reflect the removal
        renderList();
      });

      // Append the Edit and Clear buttons to the list item
      li.appendChild(editBtn);
      li.appendChild(clearItemBtn);

      // Toggle completed status on clicking the list item
      li.addEventListener('click', () => {
        item.completed = !item.completed;
        li.classList.toggle('completed');
      });

      // Append the list item to the itemList
      itemList.appendChild(li);
    });
  };

  // Function to add new item to the list and update the display
  const addItem = () => {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
      shoppingList.push({ name: itemName, completed: false });
      renderList();
      itemInput.value = '';
    }
  };

  // Function to mark all items as completed
  const markAll = () => {
    shoppingList.forEach(item => item.completed = true);
    renderList();
  };

  // Function to clear all items from the list
  const clearAll = () => {
    shoppingList = [];
    renderList();
  };

  // Event listeners set up to respond to actions
  addBtn.addEventListener('click', addItem);
  markBtn.addEventListener('click', markAll);
  clearBtn.addEventListener('click', clearAll);

  // Event listener for adding items when Enter key is pressed
  itemInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  });

  // Call to display any existing items
  renderList();
});

