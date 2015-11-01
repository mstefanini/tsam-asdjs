function inverti(a){
	var temp = [];
	for(i=0; i < a.length ; i++){
		temp.unshift(a[i]);
	}
	return temp;
}


function inverti_rC(a,temp){
	if(a.length > 0){
		temp.push(a.pop())
		return invertiRecursive(a,temp); 
	}else{
		return temp;
	}
}

function inverti_rW(a){
	var temp = [];
	return inverti_r(a,temp);
}