function ex_1a(arr){
	return ricorsione_a(arr);
}

function ex_1b(arr){
	return ricorsione_b(arr,0);
}

function ricorsione_a(arr){
	if(arr.length == 0)
		return 10
	else
		return 5*arr[0]+ricorsione(arr.splice(1));
}

function ricorsione_b(arr,acc){
	if(arr.length == 0)
		return acc;
	else
		if(arr[0]%2==0)
			acc += arr[0] * arr[0]; 
	return ricorsione_b(arr.splice(1),acc);
}

function ex_2(arr){
	return funzionale(arr);
}

function funzionale(arr){
	var temp = arr.filter(x=> x%2 == 0);
	temp.reduce( x,y => x += y*y);
	return temp;
}

function ex_3(arr){
	return stackoddeven(arr);
}

function Stack(){
    this.myarray = []
}

Stack.prototype.push = function(e){ this.myarray.push(e); }
Stack.prototype.pop = function(){ return this.myarray.pop(); }
Stack.prototype.peek = function(){ return this.myarray[this.myarray.length-1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

function stackoddeven(arr){
	stackOdd = new Stack();
	stackEven = new Stack();
	arr.forEach(
		function(x){
			if(x%2 ==0)
				stackEven.push(x)
			else
				stackOdd.push(x);
		});
	stackResult = new Stack();
	while(!stackEven.isEmpty() && !stackOdd.isEmpty){
		stackResult.push(stackEven.pop() * stackOdd.pop());
	}
	while(stackResult.size() != 1){
		stackResult.push(stackResult.pop() + stackResult.pop());
	}
	return stackResult.pop();
}