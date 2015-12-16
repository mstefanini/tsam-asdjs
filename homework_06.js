function CircularQueue(n){
	this.arr = new Array(n);
	this.l = n;
	this.testa = 0;
	this.rear = this.testa + 1;
	this.dimension = 0;
}

CircularQueue.prototype.enqueue  = function(e){
	if(this.dimension > 0){
		if(this.dimension === this.l){
		 	return false;
		}else{
			this.arr[this.rear] = e;
			
			this.rear = (this.rear + 1)%this.l;
			this.dimension++;
			return true;
		}
	}else{
		this.arr[this.testa] = e;
		this.dimension++;
		return true;
	}
}

CircularQueue.prototype.dequeue = function(){
	var x = this.arr[this.testa];
	this.arr[this.testa] = undefined;
	this.testa = this.testa+1%this.l;
	this.dimension--;
	return x;
}

CircularQueue.prototype.front = function(){
	return this.arr[this.testa];
}

CircularQueue.prototype.isEmpty = function(){
	return this.dimension == 0;
}

CircularQueue.prototype.size = function(){
	return this.dimension;
}

