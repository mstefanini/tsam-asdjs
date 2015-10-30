function sumwhileneg(x){
	var i = 0;
	var tot = 0;
	while((i<x.length)&&(x[i]<0)){
		tot += x[i];
		i++;
	}
	return tot;
}

function foor (x){
	if(x.length > 0 || x[0] > 0){
		return x[0] + foor(x.slice(1));
	}else{
		return 0;
	}
}


/* Entrambi gli algoritmi hanno costo O(n) */