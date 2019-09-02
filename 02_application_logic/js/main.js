
var list = [
    {"desc":"Rice","amount":"2","value":"4.10"},
    {"desc":"Beer","amount":"24","value":"2.00"},
    {"desc":"Meat","amount":"1","value":"12.00"}
];

function getTotal(list){
    var total = 0;
    for(var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;
}

console.log(getTotal(list));
