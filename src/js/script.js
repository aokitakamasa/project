function Calculator(id, id_operation_block) {
    this.x = 0, 
    this.y = NaN,
    this.xFloat = false, 
    this.yFloat = false,
    this.sumble = undefined,
    this.el = id ? document.getElementById(id) : undefined,
    this.el_operation = id_operation_block ? document.getElementById(id_operation_block) : undefined,

    this.rez = function(x = this.x, y = this.y, sumble = this.sumble) {
        switch (sumble) {
            case "+":
                return x + y;
            case "-":
                return x - y;
            case "/":
                if(y === 0){
                    console.log("делить на ноль нельзя");
                } else {
                    return x / y;
                }
            case "*":
                return x * y;
            default:
                return 0;
        }
    },

    this.setX = function(x) {
        if (!isNaN(x)) {
            this.x = x;
        } else {
            this.x = 0;
        }
    }

    this.setY = function(y) {
        if (!isNaN(y)) {
            this.y = y;
        } else {
            this.y = NaN;
        }
    }

    this.setSumble = function(sumble) {
        if (isNaN(sumble)) {
            this.sumble = sumble;
        } else {
            this.sumble = undefined;
        }
    }

    this.clickButton = function(val){
        if(this.el_operation) {
            this.el_operation.innerText = '';
        }
        if(val === ".") {
            if(!isNaN(this.y && !this.yFloat)) {
                this.y = Number(this.y + 0,0);
                this.yFloat = true;
                this.el.innerText = this.y + '.';
            } else if (!isNaN(this.x) && !this.xFloat) {
                console.log(val);
                console.log(val === ".");
                this.x = Number(this.x + 0,0);
                this.xFloat = true;
                this.el.innerText = this.x + '.';
            }
        } else if(val === "+/-") {
            if(!isNaN(this.y) && this.x !== 0) {
                this.y = this.y * -1;
            } else if (!isNaN(this.x) && this.x !== 0) {
                this.x = this.x * -1;
            }
        } else if (val === "√") {
            if(!isNaN(this.y)) {
                this.y = Math.sqrt(this.y);
                this.el.value = this.y;
            } else if (!isNaN(this.x)) {
                this.x = Math.sqrt(this.x);
                this.el.value = this.x;
                this.x = 0;
                return;
            }
        } else if(this.sumble && this.y && this.x && isNaN(val)) {
            // Равно
            if(this.el_operation) {
                this.el_operation.innerText = `${this.x} ${this.sumble} ${this.y}`;
            }
            this.x = this.rez();
            this.y = NaN;
            if(val === "=") {
                this.sumble = undefined;
            } else {
                this.sumble = val;
            }
        } else if (this.x && this.sumble && !isNaN(val)) {
            console.log('Заполнение второго числа Y');
            // Заполнение второго числа Y
            if(this.sumble === "/" && val == 0) {
                alert("На ноль не делится!");
            } else if(isNaN(this.y) || this.y === 0) {
                this.y = Number(val);
            } else {
                this.y = Number('' + this.y + val);
            }
        } else if (!isNaN(this.x) && isNaN(this.y) && isNaN(val) && val != "=") {
            console.log('Заполнение символа');
            // Заполнение символа
            this.sumble = val;
        } else if (isNaN(this.y) && !isNaN(val)) {
            console.log('Заполнение первого числа X');
            // Заполнение первого числа X
            if(!this.x || this.x === 0) {
                this.x = Number(val);
            } else {
                this.x = Number('' + this.x + val);
            }
        }

        // Вывод в импут
        if(this.el) {
            this.el.value = this.y ? this.y : this.x ? this.x : 0;
        }
    }

    this.clear = function() {
        this.x = 0; 
        this.y = NaN;
        this.sumble = undefined;
        if(this.el) {
            this.el.value = 0;
        }
        if(this.el_operation) {
            this.el_operation.innerText = '';
        }
    }
}


let calc = new Calculator("input_calc", "input_calc_operation");