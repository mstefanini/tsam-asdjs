function mult(x,y){
	var gap = 0;
	if(x == 0 || y == 0) return 0;
	for(i=0;i<y;i++){
		gap += x;
	}
	return gap;
}


function multRecorsive(x,y){
	var acc = 0;
	if(y == 0 || x == 0) return 0;
	acc = x + multRecorsive(x,--y)
	return acc;
}