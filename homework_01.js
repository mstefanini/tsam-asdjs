/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x < 0) {
            return tot;
        }
        tot += x; 
    }
}

function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function sumOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 *i;
    }
    return tot;
}

function sumOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + sumOddR(n-1);
    }
}


function sumOddRTI(n, acc) {
    if (n == 0) {
        return acc;
    } else {
        return sumOddR(n-1, 2 * acc - 1);
    }
}

function sumOddRT(n) {
    return sumOddRTI(n, 1)
}
/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
function avgAll(myarray) {
    var tot = 0;
    for(var i = 0; i < myarray.length; i++) {
        tot += myarray[i];
    }
    return tot / myarray.length;
}

function avgAllRW(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        return myarray[0] + avgAllRW(myarray.slice(1));
    }
}

function avgAllR(myarray) {
    return avgAllRW(myarray) / myarray.length;
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


function sumIntervalW(a, b) {
    var tot = 0;
    for(var i = a; i <= b; i++) {
        tot += i;
    }
    return tot;
}

function sumInterval(a, b) {
    if (a < b){
        return sumIntervalW(a, b);
    } else {
        return sumIntervalW(b, a);
    }
}

function sumIntervalRW(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + sumIntervalRW(a + 1, b);
    }


}

function sumIntervalR(a, b) {
    if (a < b){
        return sumIntervalRW(a, b);
    } else {
        return sumIntervalRW(b, a);
    }
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
	else acc = x + mult_r(x,--y)
	return acc;
}

/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
Esempio:
div(5, 3) => 1 resto 2
*/

function div(x,y){
	var i = 0;
	while(x>=y){
		x -= y;
		i++;
	}
	return [i,x];
}

function div_rC(x,y,temp){
	if(x>=y){
		temp[0]++;
		return div_rC(x-y,y,temp);
	}else{
		return x;
	}
}

function div_rW(x,y){
	var temp = [0];
	var q = div_rC(x,y,temp);
	return [temp[0],q];
}

/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
Esempio:
pow(2, 3) => 8
*/
function pow(a,b){
	var res = 1;
	for(var i=0;i < b;i++){
		res = mult(res,a);
	}
	return res;
}

function pow_r(a,b){
	var acc = 1;
	if( b == 0) return 1;
	acc = mult(acc,a) * pow_r(a,--b);
	return acc;
}

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/
function matrix_setup(n,m){
	var a = new Array(n);
	for(i=0;i<n;i++){
		a[i] = new Array(m);
	}
	return a;	
}

function nsplit_i(n){
	var nq = Math.sqrt(n.length);
	var cont = 0;
	var matrix = matrix_setup(nq,nq);
	for(var i=0;i<nq;i++){
		for(j=0;j<nq;j++){
			matrix[i][j] = n[cont++];
		}
	}
	return matrix;
}

function nsplit_rC(n,matrix,i,j,cont){
	var nq = Math.sqrt(n.length);
	if(i<nq){
		if(j<nq){
			matrix[i][j] = n[cont[0]];
			cont[0]++;
			j++;
			nsplit_rC(n,matrix,i,j,cont);
		}else{
			nsplit_rC(n,matrix,i+1,0,cont);
		}
	}
	return matrix;
}

function nsplit_rW(n){
	var nq = Math.sqrt(n.length);
	var matrix = matrix_setup(nq,nq);
	var cont = [0];
	return nsplit_rC(n,matrix,0,0,cont);
}
/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
Esempio:
Input: A = {2, 5, 8}
Output A= {8, 5, 2}
*/

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
		return inverti_rC(a,temp); 
	}else{
		return temp;
	}
}

function inverti_rW(a){
	var temp = [];
	return inverti_rC(a,temp);
}


function inverti_r_alternative(array){
	var temp1 = 0;
	var temp2 = 0;
	var atemp = [];
	if(array.length>0){
		temp1 = array[0];
		temp2 = array[array.length-1];
		atemp = inverti_r_alternative(array.slice(1,array.length-1));
	}else{
		return [];
	}
	atemp.unshift(temp2);
	atemp.push(temp1);
	return atemp;
}
/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
ontenenti a.
Esempio:
replicate(3, 4) => A= {3, 3, 3, 3}
*/

function replicate(x,n){
	var temp = [];
	for(i=0;i<n;i++){
		temp.push(x);
	}
	return temp;
}

function replicate_rC(x,n,q){
	if(n>0){
		q.push(x);
		return replicate_rC(x,n-1,q);
	}else{
		return q;
	}
}

function replicate_rW(x,n){
	var q = [];
	return replicate_rC(x,n,q);
}

/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
Esempio
Input: A = {2, 5, 1, 8}
Output: A = {5, 1, 2, 8}
*/

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


function orderList_rC(array,adis,apar){
	if(array.length > 0){
		if(array[0]%2==0) apar.push(array[0]);
			else adis.push(array[0]);
		return orderList_rC(array.slice(1),adis,apar);

	}else{
		return adis.concat(apar);
	}
}

function orderList_rW(array){
	var adis = [];
	var apar = [];
	return orderList_rC(array,adis,apar);
}

//Per Tiziano
function ex_1_I(x) {
    return sumwhileneg(x);
}

function ex_1_R(x) {
    return sumwhilenegR(x);
}

function ex_2_I(x) {
    return sumOdd(x);
}

function ex_2_R(x) {
    return sumOddR(x);
}
function ex_3_I(x) {
    return avgAll(x);
}

function ex_3_R(x) {
    return avgAllR(x);
}
function ex_4_I(x, y) {
    return sumInterval(x, y);
}

function ex_4_R(x, y) {
    return sumIntervalR(x, y);
}

function ex_5_I(x,y){
	return mult(x,y);
}

function ex_5_R(x,y){
	return mult_r(x,y);
}

function ex_6_I(x,y){
	return div(x,y);
}

function ex_6_R(x,y){
	return div_rW(x,y); 
}

function ex_7_I(x,y){
	return pow(x,y);
}

function ex_7_R(x,y){
	return pow_r(x,y);
}

function ex_8_I(x){
	return n2split_i(x);
}

function ex_8_R(x){
	return n2split_rW(x);
}

function ex_9_I(x){
	return inverti(x);
}

function ex_9_R(x){
	return inverti_rW(x);
}

function ex_10_I(x,n){
	return replicate(x,n);
}

function ex_10_R(x,n){
	return replicate_rW(x,n);
}

function ex_11_I(x){
	return orderList(x);
}

function ex_11_R(x){
	return orderList_rW(x);
}
