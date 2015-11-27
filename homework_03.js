Array.prototype.ex_1 = function(){
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

/*
Array.prototype.ex_1 = function(){
	return this.sumwhileneg();
}
*/

Array.prototype.ex_3 = function(){
	return this.reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue) / this.length;
}

/*
Array.prototype.ex_3 = function(){
	return this.avarage();
}
*/

Array.prototype.ex_11 = function(){
	var l1 = this.filter( x => !(x%2 == 0));
	var l2 = this.filter( x => x%2 == 0 );
	return l1.concat(l2);
}
/*
Array.prototype.ex_11 = function(){
	return this.oddEven();
}
*/