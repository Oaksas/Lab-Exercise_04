
value = prompt("For Addition press 1 ,\n For Subtraction press 2,\n For Multiplication press 3,\n For division press 4 ,\n For square press 5");
value = parseInt(value);




if(value === 1){
input = new Array();
numvberOfInput = prompt("How many numbers do you want to add ?");
for( let i =0; i< numvberOfInput; i++){
    input[i] = prompt("number"+(i+1));
}
result  = add(input);
alert(result);
}


else if(value === 2){
input = new Array();
numvberOfInput = prompt("How many numbers do you want to subtract ?");
for( let i =0; i< numvberOfInput; i++){
    input[i] = prompt("number"+(i+1));

}
result = sub(input);
alert(result)

}



else if(value === 3){
input = new Array();
numvberOfInput = prompt("How many numbers do you want to multiply ?");
for( let i =0; i< numvberOfInput; i++){
    input[i] = prompt("number"+(i+1));
}

result =mul(input);
alert(result)
}


else if(value === 4){
    result = div();
    alert(result)
}
else if (value === 5 ){
    result = square();
    alert(result)
}



function add(i){
    result =0;

    i.forEach(function(member){
        result= parseInt(result) + parseInt(member);
    });
    return result;
    
}

function sub(i){

    result =i[0];
    
    for(let j = 1; j<=numvberOfInput;j++){
       result -= i[j];
    };
    return parsent(result);

}
function mul(i){
    result =1;
    i.forEach(function(member){
        result= parseInt(result) * parseInt(member);
    });
    return result;

}

function div(){
    result =0;
    input = new Array();
    
    input[0] = prompt("number "+1);
    
    input[1] = prompt("number "+2);
    
    if(parseInt(input[1]) === 0){
        return "division by zero undefined";
    }
    else {
        result= parseInt(input[0]) / parseInt(input[1]);
        return result;
    }

}
function square(){
    input = prompt("Enter the number");
    return "Square of "+input +" is "+parseInt(input)*parseInt(input);
}









