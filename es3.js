function foo(x){
	var tot = 0;
	for(i=0;i<10;i++){
		tot += x[i];
	}
	tot = tot / 10;
	return tot;
}

function foor(x){
	if(x.length > 0){
		var tot = x[0] + foor(x.slice(1));
	}else{
		return 0;
	}
	if(x.length == 10) return tot / 10;
	else return tot;
}

