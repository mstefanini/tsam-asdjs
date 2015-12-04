
/* ESERCIZIO 1 */

function maxElement_arr(arr){
	if(arr.length == 0)
		return 0
	
	if(arr[0] == 5070 )
		return 1 + maxElement_arr(arr.slice(1));
	else
		return maxElement_arr(arr.slice(1));

}

/* ESERCIZIO 2 */

function sqrtPowSum(arr){
	return Math.sqrt(
		arr.filter( x => (x >= 0 && x%2 == 0))
		.map( x => x*x)
		.reduce( (x,y) => x+y )
		);
}


/* ESERCIZIO 4 */

/* Implementazione TREE */

function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }

}

BST.prototype.searchNodeR = function(node, e) {
    if (node == null) {
        return null;
    } else {
        if (node.item == e) {
            return node;
        } else {
            if (e > node.item) {
                return this.searchNodeR(node.right, e)
            } else {
                return this.searchNodeR(node.left, e)
            }
        }
    }
}

BST.prototype.searchNode = function(e) {
    return this.searchNodeR(this.root, e);
}

/* Implementazione esercizio */

BST.prototype.insertArray = function(arr){
	arr.forEach( x => this.add(x));
}

function maxTree(bst){
	if(bst.root == null)
		return 0;
	else
		return maxElement_tree(bst.root);
}

function maxElement_tree(currentNode){
	if( currentNode.right == null )
		return currentNode.item;
	else
		return maxElement_tree(currentNode.right);
}

/* ESERCIZIO 3 */

/* Implementazione Stack */

function Stack(){
    this.myarray = []
}

Stack.prototype.push = function(e){ this.myarray.push(e); }
Stack.prototype.pop = function(){ return this.myarray.pop(); }
Stack.prototype.peek = function(){ return this.myarray[this.myarray.length-1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

/* Implementazione esercizio */

function evaluateExpression(string){
    var numberStack = new Stack();
    var operatorStack = new Stack();
    var arr = string.split(" ");
    
    for(var i = 0; i < arr.length; i++){
        switch(arr[i]){
            case '+':
                operatorStack.push('+');
                break;  
            case '-':
                operatorStack.push('-');
                break;
            case '*':
                operatorStack.push('*');
                break;
            case '/':
                operatorStack.push('/');
                break
            case '(':
                operatorStack.push('(');
                break;
            case ')':
                var num1 = parseInt(numberStack.pop());
                var num2 = parseInt(numberStack.pop());
                switch(operatorStack.pop()){
                    case '+':
                        numberStack.push(num2+num1);
                        break;
                    case '-':
                        numberStack.push(num2-num1);
                        break;
                    case '*':
                        numberStack.push(num2*num1);
                        break;
                    case '/':
                        numberStack.push(num2/num1);
                        break;
                }
                operatorStack.pop(); // Rimozione parentesi.
                break;
            default:
                numberStack.push(arr[i]);
                break;
        }
    }
    return numberStack.pop();
}


function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */