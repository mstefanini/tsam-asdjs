function CircularQueue(n){
	this.arr = new Array(n);
	this.l = n;
	this.front = 0;
	this.rear = this.front + 1;
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
		this.arr[this.front] = e;
		this.dimension++;
		return true;
	}
}

CircularQueue.prototype.dequeue = function(){
	var x = this.arr[this.front];
	this.arr[this.front] = undefined;
	this.front = this.front+1%this.l;
	this.dimension--;
	return x;
}

CircularQueue.prototype.front = function(){
	return this.arr[this.front];
}

CircularQueue.prototype.isEmpty = function(){
	return this.dimension == 0;
}

CircularQueue.prototype.size = function(){
	return this.dimension;
}

