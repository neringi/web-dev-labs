// This function takes 
// a Node as parameter (Line 1). It then checks the type of the Node to see if 
// it is an ELEMENT_NODE (Line 2), if it is, the function will print the Node 
// information on the console (Line 3). It grabs the first child of this Node and 
// store the value in a variable called node (Line 4). Using a while loop (Line 5), the 
// function prints the information of the Node type on the console (Line 6) , and calls 
// itself recursively passing in the value of node as parameter (Line 7). It prints the 
// content of the Node on the console (Line 8) and reassign the value of the variable 
// node to the Node’s next sibling .

function theDOMElementWalker(node){
    if (node.nodeType == 1) {
        console.log(node)
        node = node.firstChild;
        while(node){
            console.log(node.nodeType);
            theDOMElementWalker(node);
            console.log("Value: " + node.textContent);
            node = node.nextSibling;
        }
    }
}

let list = document.querySelector('article');
theDOMElementWalker(list);

