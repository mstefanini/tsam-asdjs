/*------------------------------------------------------
 Implementa una priorityQueue!!!!!
 L'unica cosa che dobbiamo fare è modificare la enqueue. 
 Dobbiamo inserire un elemento (queueItem)
 queueItem:
 	item
 	priority

 e mantenere la proprietà di priorità.

 HINT:
 Usare splice per inserire l'elemento nell'array.
 -------------------------------------------------------*/

function QueueItem(i,p){
	this.value = i;
	this.priority = p;
}

function Queue(){
	this.queue = [];
}

Queue.prototype.enqueue = function(e){
	//DA IMPLEMENTARE
}
Queue.prototype.dequeue = function(){
	return this.queue.pop();
}
Queue.prototype.front = function(){
	return this.queue[this.queue.length - 1];
}
Queue.prototype.isEmpty = function(){
	return this.size() == 0;
}
Queue.prototype.size = function(e){
	return this.queue.length;
}