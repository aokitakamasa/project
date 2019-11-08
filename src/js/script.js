let result1 = '';
let result2 = '';
let currOperation = '';
let fill = false;
let input = null;
let calc = document.getElementById('calculator');
let move = false;

function process(val, id = 'input') {
    if(val == 'c'){
         result1 = '';
         result2 = '';
         currOperation = '';
         fill = false;
        input.innerHTML = 0;
        return;
    }
    if(input == null)
        input = document.getElementById(id);
////sdasdsa
    if(!isNaN(val))    
        if(!fill){
            if(val == 0 && result1== 0){
                input.innerHTML = '0';
                return;
            }
                    if(result1==0 && val !=0)
                        result1='';
                        result1+= val;
            input.innerHTML = result1;
        }
        else{
            if(val == 0 && result2== 0){
                result2 = '0';
                input.innerHTML = '0';
                return;
            }
            if(result2==0 && val !=0)
                result2='';
            result2+=val;
            input.innerHTML = result2;
        }
    else if(val != '='){
        currOperation = val;
        if(currOperation == '√'){
            input.innerHTML  = Math.sqrt(parseInt(input.innerHTML));
            result1 = Math.sqrt(parseInt(input.innerHTML)).toString();
            result2 = '';
            return;
        }
        input.innerHTML = val;
        fill = true;
    }
    if(result1.length>0&&result2.length>0&& val === '='){
        if(currOperation == '+'){
            input.innerHTML  = (parseInt(result1, 10) + parseInt(result2, 10));
            result1 = (parseInt(result1, 10) + parseInt(result2, 10)).toString();
            result2 = '';
        }
        else if(currOperation == '-'){
            input.innerHTML  = (parseInt(result1, 10) - parseInt(result2, 10));
            result1 = (parseInt(result1, 10) - parseInt(result2, 10)).toString();
            result2 = '';
        }
        
        else if(currOperation == '/'){
            input.innerHTML  = (parseInt(result1, 10) / parseInt(result2, 10));
            result1 = (parseInt(result1, 10) / parseInt(result2, 10)).toString();
            result2 = '';
        }
        else if(currOperation == '*'){
            if(parseInt(result2,10) == 0)
            {
                alert('Nelzya delit na 0!!');
                return;
            }
            input.innerHTML  = (parseInt(result1, 10) * parseInt(result2, 10));
            result1 = (parseInt(result1, 10) * parseInt(result2, 10)).toString();
            result2 = '';
        }
    }

    if(input.innerHTML === '666'){
            calc.style = 'margin: '+ Math.floor(Math.random() * 600) + 'px ' + Math.floor(Math.random() * 200) + 'px;'
            result1 = '';
         result2 = '';
         currOperation = '';
         fill = false;
            input.innerHTML = 'VLAD THE BEST ! ! ! ! ! !';
    }
}