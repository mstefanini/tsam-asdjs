function sumInterval(a,b){
	var tot = 0;
	if(a<=b){
		while(a<=b){
			tot += a;
			a++;
		}
	}else{
		while(b<=a){
			tot += b;
			b++;
		}
	}
	return tot;
}

function sumIntervalRecorsive(a,b){
	var tot = 0;
	if(a==b) return a;
	else if(a<b) tot = a + sumIntervalRecorsive(++a,b);
			else tot = b + sumIntervalRecorsive(a,++b);
	return tot;
}