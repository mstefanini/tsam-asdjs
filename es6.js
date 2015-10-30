function div(x,y){
	var qr = [0,0];
	while(x >= y) {
		qr[0]++;
		x -= y;
	}
	if(x != 0) qr[1] = x;
	return qr; 
}

function divRecorsive(x,y,qr){
	if(x>=y){
		qr[0]++;
		return divRecorsive(x-y,y,qr)
	}else{
		if(x>0) qr[1] = x;
	}
}