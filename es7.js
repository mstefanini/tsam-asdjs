function mult(x,y){
	var gap = 0;
	if(x == 0 || y == 0) return 0;
	for(i=0;i<y;i++){
		gap += x;
	}
	return gap;
}


function Pow(a,b){
	var res = 1;
	for(var i=0;i < b;i++){
		//console.log(res + ' x ' + a + ':');
		res = mult(res,a);
		//console.log(res);
	}
	return res;
}

function powRecorsive(a,b){
	var acc = 1;
	if( b == 0) return 1;
	acc = mult(acc,a) * powRecorsive(a,--b);
	console.log(acc);
	return acc;
}