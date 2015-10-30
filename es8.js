function n2Split(a){
	n = Math.sqrt(a.length);
	var ac = [];
	var cont = 0;
	for(var i = 0; i < n; i++){
		ac.push([]);
		for(var j = 0; j < n; j++){
			ac[i].push(a[cont++]);
		}
	}
	return ac;
}

function setup(n){
	var a = [];
	for(var i = 0; i < n; i++){
		a.push([]);
		for(var j = 0; j < n; j++){
			a[i].push(0);
		}
	}
	return a;
}
function n2SplitRecorsive(t,array,n,row,col,c){
	console.log(t);
	if(row < n){
		if(col < n){
			console.log(t[c]);
			array[row][col] = t[c];
			c++;
			n2SplitRecorsive(t,array,n,row,col+1,c);
		}else{
			n2SplitRecorsive(t,array,n,row+1,0,c);
		}
	}
	return array;
}
