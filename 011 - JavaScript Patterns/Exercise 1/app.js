// STANDARD MODULE PATTERN

// Basic structure

// (function () {
//     // Declare private variables and functions

//     return{
//         // Declare public variables and functions
//     }
// })();

// const UICtrl = (function() {
//     let text = "Hello World";
//     const changeText = function() {
//         const element = document.querySelector("h1");
//         element.textContent = text;
//     }
//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN

const ItemCtrl = (function() {
    let _data = [];
    function add(item) {
        _data.push(item);
        console.log("Item Added");
    }
    function get(id) {
        return _data.find(item => {
            return item.id === id;
        })
    }

    return {
        add, get
    }
})();

ItemCtrl.add({id: 1, name: "Jake"});