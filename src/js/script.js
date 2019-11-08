
let param1 = param2 = 0;
let isAssignedParam1 = false;
let action = null;
let tablo = document.getElementById("tablo");
let digits = document.getElementsByClassName('digit');


function init() {

    for(let i=0; i<digits.length; i++){
        digits[i].addEventListener("click", paramsAssign);
    }
    tablo.value = param1;
}
init();


/*function getInput(e) {
    if(isAssignedParam1){
        param2 = e.target.value;
        return;
    }
}*/
    
function paramsAssign(obj) {
    if (!isAssignedParam1) {
        param1 = obj.textContent;
        tablo.value = param1;
        console.log(param1);
        return;
    }
        param2 = obj.textContent;
        tablo.value = param2;
        console.log(param2);
}

function clearAll() {
    tablo.value = 0;
    param1 = param2 = 0;
    isAssignedParam1 = false;
}

function operation(e) {
    isAssignedParam1 = true;
}

function result() {
    // body...
}

function operCondition() {
    // return param1 != 0
    //     || param2 != 0
    //     || 
}
