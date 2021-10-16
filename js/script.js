const numF = +prompt ('Введите первое число');
const numS = +prompt ('Введите второе число');
const operant = prompt ('Введиите операцию: +, -, *, /');
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
