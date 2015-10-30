function orderList(array){
	myarraydis = [];
	myarraypar = [];
	for(i=0;i<array.length;i++){
		if(array[i]%2==0){
			myarraypar.push(array[i]);
		}else{
			myarraydis.push(array[i]);
		}
	}
	return myarraydis.concat(myarraypar);
}


function orderListRecursive(array,adis,apar){
	if(array.length > 0){
		if(array[0]%2==0) apar.push(array[0]);
			else adis.push(array[0]);
	}else{
		return adis.concat(apar);
	}
}