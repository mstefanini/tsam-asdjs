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
	this.item = i;
	this.priority = p;
}

function PriorityQueue(){
	this.queue = [];
}

PriorityQueue.prototype.enqueue = function(e){
	if(this.isEmpty()){ 
		this.queue.push(e);
	}else{
		this.queue.every(function(x,y,arr){
				if(x.priority > e.priority){
					if(y == arr.length -1)
						arr.push(e);
					return true;
				}else{
					arr.splice(y,0,e);
					return false;
				}
			});
	}
}
PriorityQueue.prototype.dequeue = function(){
	return this.queue.pop();
}
PriorityQueue.prototype.front = function(){
	return this.queue[this.queue.length - 1];
}
PriorityQueue.prototype.isEmpty = function(){
	return this.size() == 0;
}
PriorityQueue.prototype.size = function(e){
	return this.queue.length;
}


function test(){
	queue = new PriorityQueue();
	queueItem = new QueueItem('a',10);
	queueItem1 = new QueueItem('b',1);
	queueItem2 = new QueueItem('c',5);
	queueItem3 = new QueueItem('d',15);

	queue.enqueue(queueItem);
	queue.enqueue(queueItem1);
	queue.enqueue(queueItem2);
	queue.enqueue(queueItem3);

	return queue;
}



/*------------------------------------------------------
 PriorityQueueC(callback)
 Qui invece di passare un queueItem con il vincolo 
 priority intero, inseriemo un oggetto con priority
 con possibilità che sia un oggetto.
 La decisione per cui decidiamo la priorità è la callback.
 callback(p1,p2):
 	return -1 se p1<p2
 	return 0 se p1=p2
 	return 1 se p1>p2
 -------------------------------------------------------*/

function PriorityQueueC(callback){
	this.queue = [];
	this.p = callback;
}

PriorityQueueC.prototype.enqueue = function(e){
	var that = this;
	if(this.isEmpty()){ 
		this.queue.push(e);
	}else{
		this.queue.every(function(x,index,arr){
				if(that.p(x,e) != -1){
					if(index == arr.length -1) 
						arr.push(e);
					return true;
				}else{
					arr.splice(index,0,e);
					return false;
				}
			});
	}
}
PriorityQueueC.prototype.dequeue = function(){
	return this.queue.pop();
}
PriorityQueueC.prototype.front = function(){
	return this.queue[this.queue.length - 1];
}
PriorityQueueC.prototype.isEmpty = function(){
	return this.size() == 0;
}
PriorityQueueC.prototype.size = function(e){
	return this.queue.length;
}

function funzione(x,p){
	if(x.priority<p.priority)
		return -1;
	else if(x.priority == p.priority)
		return 0;
	else
		return 1;
}

function testC(){
	queue = new PriorityQueueC(funzione);
	queueItem = new QueueItem('a',10);
	queueItem1 = new QueueItem('b',1);
	queueItem2 = new QueueItem('c',5);
	queueItem3 = new QueueItem('d',15);
	queueItem4 = new QueueItem('f',15);

	queue.enqueue(queueItem);
	queue.enqueue(queueItem1);
	queue.enqueue(queueItem4);
	queue.enqueue(queueItem2);
	queue.enqueue(queueItem3);

	return queue;
}

