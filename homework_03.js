Array.prototype.sumwhileneg = function(){
	var tot = 0;
	this.every(
		function(x) {
			if(x>0){
				tot += x;
			}
			return x > 0;
		});
	return tot;
}

Array.prototype.avarage = function(){
	return this.reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue) / this.length;
}

Array.prototype.oddEven = function(){
	var l1 = this.filter( x => !(x%2 == 0));
	var l2 = this.filter( x => x%2 == 0 );
	return l1.concat(l2);
}