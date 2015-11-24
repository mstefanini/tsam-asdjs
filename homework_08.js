/*------------------------------------------------------
	MERGESORT!
	Implementare merge(a1,a2) -> arrayordinato
 -------------------------------------------------------*/

 function merge(arr1,arr2){
 	var ris = [];
 	while(arr1.length>0&&arr2.length>0){
 			if(arr1[0]<arr2[0]){
 				ris.push(arr1.shift());
 			}
 			else{
 				ris.push(arr2.shift());
 			}
 	}
 	if(arr1.length!=0) return ris.concat(arr1);
 	else return ris.concat(arr2);
 }