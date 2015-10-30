/*
Esercizio 1:
Dato un array di interi, 
restituire la loro somma fino a che 
non viene ritrovato un valore negativo
*/

function sumwhileneg(x){
	var i = 0;
	var tot = 0;
	while((i<x.length)&&(x[i]<0)){
		tot += x[i];
		i++;
	}
	return tot;
}

function sumwhileneg_r(x){
 	if(x.length > 0 || x[0] > 0){
		return x[0] + sumwhileneg_r(x.slice(1));
	}else{
		return 0;
	}
 }

 /*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

 function sumOdd(n){
	var tot = 0;
	for(i=0; i < n; i++){
		tot += 1 +2*i;
	}
	return n;
}

function sumOdd_r(n){
	if(n==0) return 0;
	return 2*n-1 + sumOdd_r(n-1);
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function mean(x){
	var tot = 0;
	for(i=0;i<10;i++){
		tot += x[i];
	}
	tot = tot / 10;
	return tot;
}

function mean_r(x){
	var tot = 0;
	if(x.length > 0) tot = x[0] + mean_r(x.slice(1));
	else return 0;
	if(x.length == 10) return tot / 10;
	else return tot;
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/


function sumIntervalC(a,b){
	var tot = 0;
	for(i=a; i<=b; i++){
		tot += i;
	}
	return tot;
}

function sumIntervalW(a,b){
	if(a<b) return sumIntervalC(a,b);
	else return sumIntervalC(b,a);
}

function sumIntervalC_r(a, b) {
	if (a == b) return a;
    	else return a + sumIntervalRW(a + 1, b);
}

function sumIntervalW_r(a, b) {
    	if (a < b) return sumIntervalRW(a, b);
    	else return sumIntervalRW(b, a);
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
Esempio:
mult(2, 3) => 6
*/
function mult(x,y){
	var gap = 0;
	if(x == 0 || y == 0) return 0;
	for(i=0;i<y;i++){
		gap += x;
	}
	return gap;
}

function mult_r(x,y){
	var acc = 0;
	if(y == 0 || x == 0) return 0;
	acc = x + multRecorsive(x,--y)
	return acc;
}

//Per Tiziano
function ex_1_I(x){
	return sumwhileneg(x);
}

function ex_1_R(x){
	return sumwhileneg_r(x);
}

function ex_2_I(x){
	return sumOdd(x);
}

function ex_2_R(x){
	return sumOdd_r(x);
}

function ex_3_I(x){
	return mean(x);
}

function ex_3_R(x){
	return mean_r(x);
}

function ex_4_I(x,y){
	return sumIntevalW(x,y);
}

function ex_4_R(x,y){
	return sumIntervalW_r(x,y);
}

function ex_5_I(x,y){
	return mult(x,y);
}

function ex_5_R(x,y){
	return mult_r(x,y);
}
