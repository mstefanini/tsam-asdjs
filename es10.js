function replicate(x,n){
	var temp = [];
	for(i=0;i<n;i++){
		temp.push(x);
	}
	return temp;
}

function replicateRecursive(x,n,q){
	if(n>0){
		q.push(x);
		return replicateRecursive(x,n-1,q);
	}else{
		return q;
	}
}
