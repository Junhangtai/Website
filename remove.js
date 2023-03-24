/// reference to the ul on the page
const list = document.querySelector("#benefits-list"); 
/// grad all the children of this Node
const children = list.childNodes;  
/// in this case the output is 9 
console.log(children.length)  
/// check the index of the node we want to remove 
console.log(children[7]);  
/// remove this child node using removeChild method
list.removeChild(children[7]);
