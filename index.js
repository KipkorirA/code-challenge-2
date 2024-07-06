document.addEventListener("DOMContentLoaded", function() {
  const itemInput = document.getElementById("item");
  const addBtn = document.getElementById("addBtn");
  const itemList = document.getElementById("itemList");
  const markBtn = document.getElementById("markBtn");
  const clearBtn = document.getElementById("clearBtn");

  let shoppingList = [];

  // Function to render the shopping list
  function renderList() {
      itemList.innerHTML = "";
      shoppingList.forEach((item, index) => {
          const li = document.createElement("li");
          li.textContent = item.name;
          if (item.completed) {
              li.classList.add("completed");
          }
          li.addEventListener("click", () => {
              toggleCompleted(index);
          });
          itemList.appendChild(li);
      });
  }

  // Function to add new item to shopping list
  function addItem(name) {
      shoppingList.push({ name, completed: false });
      renderList();
      itemInput.value = "";
  }

  // Function to toggle completed status of an item
  function toggleCompleted(index) {
      shoppingList[index].completed = !shoppingList[index].completed;
      renderList();
  }

  // Event listeners
  addBtn.addEventListener("click", () => {
      const itemName = itemInput.value.trim();
      if (itemName !== "") {
          addItem(itemName);
      }
  });

  markBtn.addEventListener("click", () => {
      shoppingList.forEach((item) => {
          item.completed = true;
      });
      renderList();
  });

  clearBtn.addEventListener("click", () => {
      shoppingList = [];
      renderList();
  });

});