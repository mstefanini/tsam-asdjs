function replicate(x,n){
	var temp = [];
	for(i=0;i<n;i++){
		temp.push(x);
	}
	return temp;
}

function replicate_rC(x,n,q){
	if(n>0){
		q.push(x);
		return replicate_rC(x,n-1,q);
	}else{
		return q;
	}
}

function replicate_rW(x,n){
	var q = [];
	return replicate_rC(x,n,q);
}


