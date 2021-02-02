var fact = document.getElementById("fact")
var perc = document.getElementById("perc")
var par1 = document.getElementById("par1")
var par2 = document.getElementById("par2")

var zero = document.getElementById("zero")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")

var add = document.getElementById("add")
var sub = document.getElementById("sub")
var mul = document.getElementById("mul")
var div = document.getElementById("div")

var equal = document.getElementById("equal")

var del = document.getElementById("del")
var inp  = document.getElementById("inp")
var log = document.getElementById("log")
var ln = document.getElementById("ln")
var sqrt = document.getElementById("sqrt")
var pow = document.getElementById("pow")
var dot = document.getElementById("point")




fact.addEventListener('click',function(e) {inp.value = facto(inp.value)});
perc.addEventListener('click',function(e) {addInput(perc)});
par1.addEventListener('click',function(e) {addInput(par1)});
par2.addEventListener('click',function(e) {addInput(par2)});

one.addEventListener('click',function(e) {addInput(one)});
two.addEventListener('click',function(e) {addInput(two)});
three.addEventListener('click',function(e) {addInput(three)});
four.addEventListener('click',function(e) {addInput(four)});
five.addEventListener('click',function(e) {addInput(five)});
six.addEventListener('click',function(e) {addInput(six)});
seven.addEventListener('click',function(e) {addInput(seven)});
eight.addEventListener('click',function(e) {addInput(eight)});
nine.addEventListener('click',function(e) {addInput(nine)});
zero.addEventListener('click',function(e) {addInput(zero)});

add.addEventListener('click',function(e) {addInput(add)});
sub.addEventListener('click',function(e) {addInput(sub)});
mul.addEventListener('click',function(e) {addInput(mul)});
div.addEventListener('click',function(e) {addInput(div)});
pow.addEventListener('click',function(e) {powInp(pow)});
dot.addEventListener('click',function(e) {addInput(dot)});


log.addEventListener('click',logFun);
ln.addEventListener('click',lnFun);
sqrt.addEventListener('click',sqroot);

del.addEventListener('click',delt)
equal.addEventListener('click',e => {ev(inp.value)})

function facto(n){

    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * facto(n-1);
    }
}


function delt(){
    inp.value = ""
}
function addInput(temp){
    var tempVal = inp.value
if(tempVal.slice(-1) === "+" || tempVal.slice(-1) === "-" || tempVal.slice(-1) === "." || tempVal.slice(-1) === "*"||tempVal.slice(-1) === "/"||tempVal.slice(-1) === ".")
{
    if(temp.innerHTML === "+" || temp.innerHTML === "-" || temp.innerHTML === "." || temp.innerHTML === "*"||temp.innerHTML === "/"||temp.innerHTML === "."){
        return
        }
        else{
            inp.value = inp.value + temp.innerHTML
        }
    }
else{
    inp.value = inp.value + temp.innerHTML

}
    

}
function powInp(temp){
    inp.value = inp.value + temp.value
        
    
    }
function sqroot(){

    inp.value = Math.sqrt(inp.value)
}

function logFun(){
    inp.value = Math.log10(inp.value)
}
function lnFun(){
    inp.value = Math.log(inp.value)
}
function ev(result){

if(eval(result).toString() === "Infinity"){
    inp.value = "INVALID INPUT"

}
else{
try{
    inp.value = eval(result)

}
catch(e){
alert(e)
}
}
    
}

