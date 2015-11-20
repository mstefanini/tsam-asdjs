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
// Popall, esegue callback su tutti gli elementi ed elimina con il pop
// gli elementi dello stack
Stack.prototype.popall = function(callback){
	string = "";
	while(!this.isEmpty()){
		string += callback(this.pop());
	}
	return string;
}

// Decimal to Binary
function dec2bin(n) {
	stack = new Stack();
	while(n > 0){
		stack.push(n%2);
		n = Math.floor(n/2);
	}
	return stack.popall(x => x.toString());
}
