let newItem = document.createElement("li");
newItem.style.cssText = "color: blue;"; 
newItem.textContent = "Helps improve blood circulation";

const list = document.querySelector("#benefits-list"); 
const children = list.childNodes;  
const sibling = children[7]
list.insertBefore(newItem, sibling );