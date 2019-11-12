
let param1 = param2 = 0;
let isAssignedParam1 = isAssignedParam2 = false;
let action = null;
let tablo = document.getElementById("tablo");
let digits = document.getElementsByClassName("digit");
let oprtn = '';


function init() {

    for(let i=0; i<digits.length; i++){
        digits[i].addEventListener("click", event => {

            if (!isAssignedParam1) {
                param1 = event.target.textContent;
                tablo.value = tablo.value == '0' ? param1 : tablo.value + param1;
                console.log(`param1: ${param1}`);
                return;
            }
            if (!isAssignedParam2) {
                param2 = event.target.textContent;
                tablo.value = param2;
                isAssignedParam2 = true;
            } else {
                param2 = event.target.textContent;
                tablo.value += param2;
            }
            console.log(`param1: ${param1}, param2: ${param2}`);
        })
    }
    tablo.value = param1;
}
init();

function getInput(e) {

    if(!isAssignedParam1){
        param1 = e.target.value;
        return;
    }
    
    param2 = e.target.value;
}
    
function clearAll() {
    tablo.value = 0;
    param1 = param2 = 0;
    isAssignedParam1 = isAssignedParam2 = false;
    oprtn = '';
}

function operation(e) {
    isAssignedParam1 = true;
    oprtn = e.target.title;
    console.log(oprtn);
    param1 = parseInt(tablo.value);
}

function result() {
    param2 = parseInt(tablo.value);
    console.log('param1: ' + typeof param1 + ', param2: ' + typeof param2)
    if(!isNaN(param1) && !isNaN(param2)){
        switch (oprtn) {
            case '*':
                tablo.value = (param1 * param2);
                console.log(tablo.value);
                break;
            case '/':
                tablo.value = (param1 / param2);
                console.log(tablo.value);
                break;
            case '+':
                tablo.value = (param1 + param2);
                console.log(tablo.value);
                break;
            case '-':
                tablo.value = (param1 - param2);
                console.log(tablo.value);
                break;
            case 'mod':
                tablo.value = (param1 % param2);
                console.log(tablo.value);
                break;
            default:
                console.log(tablo.value);
                break;
            }
            console.log(tablo.value);
        }
}
 