// wait for the DOM content to load 
document.addEventListener('DOMContentLoaded', () => {

// select elements from the DOM
  const itemInput = document.getElementById('item');
  const addBtn = document.getElementById('addBtn');
  const itemList = document.getElementById('itemList');
  const markBtn = document.getElementById('markBtn');
  const clearBtn = document.getElementById('clearBtn');

// initializing an array to hold items
  let shoppingList = [];

// update the itemList element based on current status
  const renderList = () => {
    itemList.innerHTML = '';

    shoppingList.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = item.name;

// creating the Edit button
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => {
        const newName = prompt('Enter new name:', item.name);
        if (newName !== null && newName !== '') {
          item.name = newName.trim();
          renderList();
        }
      });

      li.appendChild(editBtn);

// Toogle completed status
      li.addEventListener('click', () => {
        item.completed = !item.completed;
        renderList();
      });

      itemList.appendChild(li);
    });
  };

// function to add new item to the list and updates the display
  const addItem = () => {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
      shoppingList.push({ name: itemName, completed: false });
      renderList();
      itemInput.value = '';
    }
  };

// Function for marking all the items as completed
  const markAll = () => {
    shoppingList.forEach(item => item.completed = true);
    renderList();
  };

// function that clears all the items
  const clearAll = () => {
    shoppingList = [];
    renderList();
  };

// Event listeners set up to respond actions
  addBtn.addEventListener('click', addItem);
  markBtn.addEventListener('click', markAll);
  clearBtn.addEventListener('click', clearAll);

  itemInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  });

// call to display any existing items
  renderList();

});