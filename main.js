var nam1over = '';
var sign ='';
var nam2over = '';
var res = ''

function nam1(){
   if(sign == '' && nam1over.length <= 7 ){
        nam1over += '1';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;    
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '1'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;
    }
}
function nam2(){

    if(sign == '' && nam1over.length <= 7 ){
        nam1over += '2';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '2'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;
    }
}
function nam3(){
    

    if(sign == '' && nam1over.length <= 7 ){
        nam1over += '3';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '3'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;
    }
}
function nam4(){

    if(sign == '' && nam1over.length <= 7 ){
        nam1over += '4';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '4'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;    
    }
}
function nam5(){

    if(sign == '' && nam1over.length <= 7){
        nam1over += '5';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '5'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;    
    }
}
function nam6(){

    if(sign == '' && nam1over.length <= 7){
        nam1over += '6';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '6'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;    
    }
}
function nam7(){

    if(sign == '' && nam1over.length <= 7 ){
        nam1over += '7';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '7'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;
    }
}
function nam8(){


    if(sign == '' && nam1over.length <= 7 ){
        nam1over += '8';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '8'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;    
    }
}
function nam9(){


    if(sign == '' && nam1over.length <= 7 ){
        nam1over += '9';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length <= 7){
        nam2over += '9'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;    
    }
}
function nam0(){
    
    if(sign == '' && nam1over.length < 7 ){
        nam1over += '0';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length < 7){
        nam2over += '0'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;    
    }
}
function sign_inf(){
    if(sign == '' && nam1over.length < 7 && nam1over != '' && nam1over.includes(".") == false){
        nam1over += '.';
        let inf = document.getElementById("inf");
        inf.innerHTML = nam1over;
    }
    else if(sign != '' && nam2over.length < 7 && nam2over != '' && nam2over.includes(".") == false){
        nam2over += '.'; 
        let inf = document.getElementById("inf");
        inf.innerHTML = nam2over;    
    }
}
function sign_plus(){
sign = '+';

var sign1 = document.getElementById("sign1");
sign1.innerHTML = sign;
}

function sign_minus(){
sign = '-';

var sign1 = document.getElementById("sign1");
sign1.innerHTML = sign;
}

function sign_division(){
sign = '/';

var sign1 = document.getElementById("sign1");
sign1.innerHTML = sign;
}
function sign_multiplication(){
sign = '*';

var sign1 = document.getElementById("sign1");
sign1.innerHTML = sign;
}

function sign_equals(){
console.log(nam1over);
console.log(nam2over);
var el1 = Number(nam1over)
var el2 = Number(nam2over)
console.log(el1);
console.log(el2);
if(sign == '+'){
    var res = el1 + el2;
    console.log(res);
}else if(sign == '-'){
    var res = nam1over - nam2over;
    res = res.toFixed(1)
    console.log(res);
}else if(sign == '/'){
    var res = nam1over / nam2over;
    res = res.toFixed(1)
    console.log(res);
}else if(sign == '*'){
var res = nam1over * nam2over;
res = res.toFixed(1)
console.log(res);
}
let inf = document.getElementById("inf");
inf.innerHTML = res;
nam1over = res;
sign ='';
nam2over = '';
res = ''
var sign1 = document.getElementById("sign1");
sign1.innerHTML = sign;
}


function CE_del(){
nam1over = '';
sign ='';
nam2over = '';
res = ''
inf = document.getElementById("inf");
inf.innerHTML = nam1over;
inf = document.getElementById("inf");
inf.innerHTML = nam2over;
sign1 = document.getElementById("sign1");
sign1.innerHTML = sign;
}

function del(){
if(sign == ''){
    nam1over = nam1over.slice(0, -1)
    inf = document.getElementById("inf");
    inf.innerHTML = nam1over;}
else{
    nam2over = nam2over.slice(0, -1)
    inf = document.getElementById("inf");
    inf.innerHTML = nam2over;}
}




