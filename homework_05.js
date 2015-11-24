function Stack(){
	this.stack = []
}

Stack.prototype.push = function(e){
	return this.stack.push(e);
}
Stack.prototype.pop = function(){
	return this.stack.pop();
}
Stack.prototype.peek = function(){
	return this.stack[this.stack.length -1];
}
Stack.prototype.isEmpty = function(){
	return this.stack.length == 0;
}
Stack.prototype.toPrint = function(){
	return this.stack;
}
Stack.prototype.testImp = function(n){
	for(var i=0; i < n; i++){
		this.push(i);
	}
}

function dijkstraEval(string){
	var arr = string.split(" ");
	stack = new Stack();
	arr.forEach(function(e){
		switch (e){
			case '+': 	 	
			 var x = parseInt(stack.pop());
			 var y = parseInt(stack.pop());
			 stack.push(y+x);
			 break;
			case '-':
			 var x = parseInt(stack.pop());
			 var y = parseInt(stack.pop());
			 stack.push(y-x);
			 break;
			case '*':
			 var x = parseInt(stack.pop());
			 var y = parseInt(stack.pop());
			 stack.push(y*x);
			 break;
			case '/':
			 var x = parseInt(stack.pop());
			 var y = parseInt(stack.pop());
			 stack.push(y/x);
			 break;
			default:
			 stack.push(e);
			 break;
		}
	})
	return stack.pop();
}

function rpn(str){
	return dijkstraEval(str);
}