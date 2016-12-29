/*
简易计算器：
可运算加、减、乘、除
*/
num1 = 0; //保存第一值
num2 = 0; //保存第二值
op = ""; //保存运算符
opresult = 0; //保存结果，用于连续计算
opScreen = document.getElementById("note");

/*按数字的屏幕显示控制：如果屏幕显示是0，按n替换为n，显示不为0则追加字符 */
function countSHow(n) {
    console.log(opScreen.value);
    if (opScreen.value === "0." ){
         opScreen.value += n.value;
    }else if (opScreen.value == "" || opScreen.value == num1 || opScreen.value == "除数不为0") {
        opScreen.value = n.value;

    } else {
        opScreen.value += n.value;
    };

}

/*按点时的屏幕显示控制：已存在'.'，则不加'.'，否则追加'.'*/
function dot() {
    var screenText = opScreen.value;
    if (screenText.indexOf(".") < 0) {
        opScreen.value += ".";
    }


}

//一按运算符，计算器顶部显示运算过程，并更新num1和运算符
function operationShow(o) {
    num1 = opScreen.value;
    op = o.value;
    document.getElementById("process").innerHTML = num1 + op;
    /*sin,cos,tan*/
    if (o.value == "sin") {
        opScreen.value = parseFloat(Math.sin(num1*Math.PI/180).toFixed(8))
    } else if (o.value == "cos") {
        opScreen.value = parseFloat(Math.cos(num1*Math.PI/180).toFixed(8))
    }
    else if (o.value == "tan") {
        opScreen.value = parseFloat(Math.tan(num1*Math.PI/180).toFixed(8))
    }
}



/*等于，计算并在显示屏输出结果*/
function result() {
    num2 = opScreen.value;
    switch (op) {
        case "÷":
            opresult = divide(num1, num2);
            break;

        case "x":
            opresult = times(num1, num2);
            break;

        case "+":
            opresult = plus(num1, num2);
            break;

        case "-":
            opresult = minus(num1, num2);
            break;

    }

    opScreen.value = opresult;
}


/*加*/
function plus(x, y) {
    return parseFloat((parseFloat(x) + parseFloat(y)).toFixed(8));
}


/*减*/
function minus(x, y) {
    return parseFloat((parseFloat(x) - parseFloat(y)).toFixed(8));
}

/*乘*/
function times(x, y) {
    return parseFloat((parseFloat(x) * parseFloat(y)).toFixed(8));
}


/*除*/
function divide(x, y) {
    if (y == "0") {
        return "除数不能为0";
    } else {
        return parseFloat((parseFloat(x) / parseFloat(y)).toFixed(8));
    }

}

function clearNote() {
    opScreen.value = "0";
    document.getElementById("process").innerHTML = "";
    num1 = 0;
    num2 = 0;
    op = "";
    opresult = 0;
}
