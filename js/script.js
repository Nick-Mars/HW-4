let numF = +prompt ('Введите первое число');
let numS = +prompt ('Введите второе число');
let operant = prompt ('Введиите операцию: +, -, *, /');
if (operant  === '+') {
alert (`${numF} + ${numS}=${numF + numS}`);
}
else if (operant === '-') {
    alert (`${numF} - ${numS}=${numF - numS}`);
    }
else if (operant ==='*') {
    alert (`${numF} * ${numS}=${numF * numS}`);
    }
else if (operant ==='/') {
    alert (`${numF} / ${numS}=${numF / numS}`);
    }
else {
    alert ('Некорректный ввод данных');
}
