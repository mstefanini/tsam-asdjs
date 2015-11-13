
//VERSIONE RINNOVATA


//FUNZIONE ESERCIZI PRECEDENTI 
function replicate(x,n){
	var temp = [];
	for(i=0;i<n;i++){
		temp.push(x);
	}
	return temp;
}

/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

function callback_sum_until_neg(prevoiusValue, currentValue, index, array){
	if(prevoiusValue > 0){
		if(currentValue > 0){
			return prevoiusValue + currentValue;
		}
		else{
			return prevoiusValue;
		}
	}
	else return 0;
}

/* ES PROF 
function sumuntilneg_prof(myarray){
	var tot = 0;
	myarray.every(
		function(x) {
			if(x>0){
				tot += x;
			}
			return x > 0;
		});
}
*/

function sum_until_neg(arr){
	var r = arr.reduce(callback_sum_until_neg);
	return r;	
}

function ex_1_F(x){
	sum_until_neg(x);
	}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

function range(n){
	a = [];
	for(var i = 0; i < n; i++){
		a[i] = i;
	}
	return a;	
}

function sum_odd(n){
	return range(n).map(x => 2 * x + 1).reduce((acc, x) => acc + x);
}

function ex_2_F(x){
	sum_odd(x);
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function avarage(arr){
	return arr.reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue) / 10;
}

function ex_3_F(x){
	return avarage(x);
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

function create_interval(a,b){
	var n = b - a;
	var temp = n-1;
	var arr = [];
	for( var i = 0; i < n+1; i++){
		arr[i] = temp;
		temp ++;
	}
	return arr;
}

function sum_interval(a,b){
	if(b > a) return create_interval(a,b).reduce(
		(prevoiusValue, currentValue) => prevoiusValue + currentValue);
	else return create_interval(b,a).reduce(
		(prevoiusValue, currentValue) => prevoiusValue + currentValue);
}

function ex_4_F(x,y){
	return sum_interval(x,y);
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
Esempio:
mult(2, 3) => 6
*/

function multiply(x,y){
	return replicate(x,y).reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue);
}

function ex_5_F(x,y){
	return multiply(x,y);
}

/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
Esempio:
pow(2, 3) => 8
*/

function pow(x,y){
	if(x==0) return 0;
	if(y==0) return 1;
	return replicate(x,y).reduce((prevoiusValue, currentValue) => prevoiusValue * currentValue);
}

function ex_7_F(x,y){
	return pow(x,y);
}

/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
Esempio
Input: A = {2, 5, 1, 8}
Output: A = {5, 1, 2, 8}
*/

function order_odd(arr){
	var l1 = arr.filter( x => !(x%2 == 0));
	var l2 = arr.filter( x => x%2 == 0 );
	return l1.concat(l2);
}

function ex_11_F(x){
	return order_odd(x);
}