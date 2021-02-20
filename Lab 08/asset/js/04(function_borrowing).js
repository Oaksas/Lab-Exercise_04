
//DOM Load 


document.addEventListener('DOMContentLoaded', () => {


    usingCall();
    usingApply();
    usingBind();


});

let line= {
    length: 5,
    display: function(){
      es5.innerHTML = this.length
}
}
line.display()

//es6
let lineNew= {
    length:5,
    display: ()=>{
      es6.innerHTML = this.length
}


}
lineNew.display()

//Brad Person Object 
const Brad = {
    firstName: "Brad",
    lastName: "Bansely",
    fullName: function(ui_place, message) {

        ui_place.innerHTML = `${message} ${this.firstName} ${this.lastName}`;

    }
}

function usingCall() {

    //Cerscy Person Object 
    const Cerscy = {
        firstName: "Cerscy ",
        lastName: "Lanster",
    }
    Brad.fullName.call(Cerscy,call_demo ,[" "])

    //1. Borrow fullName using call
    //2. Pass call_demo[as ui_place] , Hi I am ,[message]


}

function usingApply() {

    //Jon Person Object 
    const Jon = {
        firstName: "Jon",
        lastName: "Snow",
    }
    Brad.fullName.call(Jon,apply_demo ,[" "])


    //1. Borrow fullName using apply
    //2. Pass apply_demo[as ui_place] and Hi I am ,[as message] as array


}

function usingBind() {

    //Daenerys Person Object 
    const Daenerys = {
        firstName: "Daenerys",
        lastName: "Targaryen",
    }
    Brad.fullName.call(Daenerys,bind_demo ,[" "])

    //1. Borrow fullName using bind
    //2. Pass bind_demo[as ui_place] , Hi I am ,[as message]


}