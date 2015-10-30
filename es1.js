function foo (x){
	var i = 0;
	var tot = 0;
	while((i<x.length)&&(x[i]<0)){
		tot += x[i];
		i++;
	}
}

function foor (x){
	if(x.length > 0){
		if(x[0] < 0)
			return 0;
		else
			return x[0] + foor(x.slice(1));
	}else{
		return 0;
	}
}


/* Entrambi gli algoritmi hanno costo O(n) */