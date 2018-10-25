// Storage controller
const StorageCtrl = (function() {
    // Public data
    return {
        getItemsFromStorage: function() {
            let items;
            // Check if any items in local storage
            if (localStorage.getItem("items") === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem("items"));
            }   
            return items;          
        },
        storeItem: function(item) {
            // Get items from storage
            const items = StorageCtrl.getItemsFromStorage();        
            // Push new item
            items.push(item);
            // Re set local storage
            localStorage.setItem("items", JSON.stringify(items));
        },
        updateItemStorage: function(updatedItem) {
          let items = JSON.parse(localStorage.getItem("items"));
          items.forEach(function(item, index){
            if (updatedItem.id === item.id) {
                items.splice(index, 1, updatedItem);
            }
          });
          localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function(itemID) {
            let items = JSON.parse(localStorage.getItem("items"));
            items.forEach(function(item, index){
                if (itemID === item.id) {
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemsFromStorage: function() {
            localStorage.removeItem("items");
        }
    }
})();

// Item controller
const ItemCtrl = (function() {
    // Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    // Data constructor
    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    };
    // Public data
    return {
        getItems: function() {
            return data.items;
        },
        addItem: function(name, calories) {
            let id;
            // Create ID
            if (data.items.length > 0) {
                id = data.items[data.items.length - 1].id + 1;
            } else {
                id = 0;
            }
            // Calories to number
            calories = parseInt(calories);
            // Create new item
            newItem = new Item(id, name, calories);
            // Add to items array
            data.items.push(newItem);
            return newItem;
        },
        clearAllItems: function() {
            data.items = [];
        },
        getTotalCalories: function() {
            let total = 0;
            // Loop through items and add calories
            data.items.forEach(function(item) {
                total += item.calories;
            });
            // Set total calories in data structure
            data.totalCalories = total;
            // Return total
            return data.totalCalories;
        },
        getItemById: function(id) {
            let found = null;
            // Loop through items
            data.items.forEach(function(item) {
                if (item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories) {
            // Convert calories to number
            calories = parseInt(calories);
            let found = null;
            data.items.forEach(function(item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function(id) {
            // Get ids
            ids = data.items.map(function(item) {
                return item.id;
            });
            // Get index
            const index = ids.indexOf(id);
            // Remove item
            data.items.splice(index, 1);
        },
        setCurrentItem: function(item) {
            data.currentItem = item;
        },
        getCurrentItem: function() {
            return data.currentItem;
        },
        logData: function() {
            return data;
        },  
    }
})();

// UI controller
const UICtrl = (function() {
    // Element selectors
    const UISelectors = {
        itemList: "#item-list",
        addBtn: ".add-btn",
        updateBtn: ".update-btn",
        deleteBtn: ".delete-btn",
        backBtn: ".back-btn",
        clearBtn: ".clear-btn",
        itemNameInput: "#item-name",
        itemCaloriesInput: "#item-calories",
        totalCalories: ".total-calories",
        listItems: "#item-list li"
    }
    // Public data
    return {
        populateItemList: function(items) {
            let html = "";
            // Create html for each item
            items.forEach(function(item) {
                html += `
                    <li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>
                    </li>
                `;
            });
            // Insert list items
            document.querySelector(UISelectors["itemList"]).innerHTML = html;
        },
        // Get element selectors (public)
        getSelectors: function() {
            return UISelectors;
        },
        // Get values of item to add
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors["itemNameInput"]).value,
                calories: document.querySelector(UISelectors["itemCaloriesInput"]).value,
            }
        },
        addListItem: function(item) {
            // Show the list
            document.querySelector(UISelectors["itemList"]).style.display = "block";
            // Create li element
            const li = document.createElement("li");
            // Add class
            li.className = "collection-item";
            // Add ID
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
            `;
            // Insert item
            document.querySelector(UISelectors["itemList"]).insertAdjacentElement("beforeend", li);
        },
        updateListItem: function(item) {
            let listItems = document.querySelectorAll(UISelectors["listItems"]);
            // Turn node list into array
            listItems = Array.from(listItems);
            listItems.forEach(function(listItem) {
                const itemId = listItem.getAttribute("id");
                if (itemId === `item-${item.id}`) {
                    document.querySelector(`#${itemId}`).innerHTML = `
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>
                    ` ;
                }
            });
        },
        deleteListItem: function(id) {
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        removeItems: function() {
            let listItems = document.querySelectorAll(UISelectors["listItems"]);
            // Turn node list into array
            listItems = Array.from(listItems);
            listItems.forEach(function(item) {
                item.remove();
            });
        },
        clearInput: function() {
            document.querySelector(UISelectors["itemNameInput"]).value = "";
            document.querySelector(UISelectors["itemCaloriesInput"]).value = "";
        },
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = "none";
        },
        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors["totalCalories"]).textContent = totalCalories;
        },
        clearEditState: function() {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = "none";
            document.querySelector(UISelectors.deleteBtn).style.display = "none";
            document.querySelector(UISelectors.backBtn).style.display = "none";
            document.querySelector(UISelectors.addBtn).style.display = "inline";
        },
        addItemToForm: function() {
            document.querySelector(UISelectors["itemNameInput"]).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors["itemCaloriesInput"]).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        showEditState: function() {
            document.querySelector(UISelectors.updateBtn).style.display = "inline";
            document.querySelector(UISelectors.deleteBtn).style.display = "inline";
            document.querySelector(UISelectors.backBtn).style.display = "inline";
            document.querySelector(UISelectors.addBtn).style.display = "none";
        }
    }
})();

// App controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function() {
        // Get element selectors
        const UISelectors = UICtrl.getSelectors();
        // Add item event
        document.querySelector(UISelectors["addBtn"]).addEventListener("click", itemAddSubmit);
        // Disable submit on enter
        document.addEventListener("keypress", function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });
        // Edit icon click event
        document.querySelector(UISelectors["itemList"]).addEventListener("click", itemEditClick);
        // Update item event
        document.querySelector(UISelectors["updateBtn"]).addEventListener("click", itemUpdateSubmit);
        // Back button event
        document.querySelector(UISelectors["backBtn"]).addEventListener("click", UICtrl.clearEditState);
        // Delete item event
        document.querySelector(UISelectors["deleteBtn"]).addEventListener("click", itemDeleteSubmit);
        // Clear all event
        document.querySelector(UISelectors["clearBtn"]).addEventListener("click", clearAllItemsClick);
    };
    // Add item submit
    const itemAddSubmit = function(e) {
        // Get form input from UI Controller
        const input = UICtrl.getItemInput();
        // Check name and calorie input is not blank
        if (input.name !== "" && input.calories !== "") {
            // Add item 
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            // Add item to UI
            UICtrl.addListItem(newItem);
            // Get Total Calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add to Total Calories UI
            UICtrl.showTotalCalories(totalCalories);
            // Store in local storage
            StorageCtrl.storeItem(newItem);
            // Clear item input
            UICtrl.clearInput();
        }
        e.preventDefault();
    }
    // Click edit item
    const itemEditClick = function(e) {
        if (e.target.classList.contains("edit-item")) {
            // Get list item id
            const listId = e.target.parentNode.parentNode.id;
            // Break into an array
            const listIdArray = listId.split("-");
            // Get id of item
            const id = parseInt(listIdArray[1]);
            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);
           // Set current item
           ItemCtrl.setCurrentItem(itemToEdit);
           // Add item to form
           UICtrl.addItemToForm();
        }
        e.preventDefault();
    }
    // Update item submit
    const itemUpdateSubmit = function(e) {
        // Get item input
        const input = UICtrl.getItemInput();
        // Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        // Update UI
        UICtrl.updateListItem(updatedItem);
        // Get Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add to Total Calories UI
        UICtrl.showTotalCalories(totalCalories);
        // Update local storage
        StorageCtrl.updateItemStorage(updatedItem);
        // Clear edit state
        UICtrl.clearEditState();
        e.preventDefault();
    }
    // Delete item button
    const itemDeleteSubmit = function(e) {
        // Get current item
        const currentItem = ItemCtrl.getCurrentItem();
        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id);
        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);
        // Get Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add to Total Calories UI
        UICtrl.showTotalCalories(totalCalories);
        // Delete from local storage
        StorageCtrl.deleteItemFromStorage(currentItem.id);
        // Clear edit state
        UICtrl.clearEditState();
        e.preventDefault();
    }
    // Clear all items event
    const clearAllItemsClick = function() {
        // Delete all items from data structure
        ItemCtrl.clearAllItems();
        // Get Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add to Total Calories UI
        UICtrl.showTotalCalories(totalCalories);
        // Remove from UI
        UICtrl.removeItems();
        // Hide the <ul>
        UICtrl.hideList();
        // Clear from local storage
        StorageCtrl.clearItemsFromStorage();
    }
    // Public data
    return {
        // Initialise app
        init: function() {
            // Set initial state
            UICtrl.clearEditState();
            // Fetch items 
            const items = ItemCtrl.getItems();
            // Check if any items
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            } 
            // Get Total Calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Add to Total Calories UI
            UICtrl.showTotalCalories(totalCalories);           
            // Load event listeners
            loadEventListeners();
        }
    }
})(ItemCtrl, StorageCtrl, UICtrl);

// Init app
App.init();