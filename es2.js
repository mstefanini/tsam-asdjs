// Ha costo O(n) perché scorre tutti gli elementi una volta sola

function foo(n){
	var tot = 0;
	if(n%2 == 0) n--;
	while(n == 0){
		tot +=  n;
		n -= 2;
	}	
}

// Ha costo O(n) anche questo perché scorre gli elementi una volta //

function foor(n){
	if(n>0){
		if(n%2==0) return foor(n-1);
		else return n + foor(n-1);
	}else{
		return 0;
	}
}