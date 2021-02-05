let numbers = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
    100: 'one hundred', 200: 'two hundred', 300: 'three hundred', 400: 'four hundred', 500: 'five hundred', 600: 'six hundred', 700: 'seven hundred', 800: 'eight hundred', 900: 'nine hundred'
}

module.exports = function toReadable (number) {
    if(number < 20) return numbers[number];
    let div = [10, 100, 1000]; // будем делить на эти цифры 
    let res = [];
    for(let i=0; i<div.length; i++){
        let j = number % div[i]; // получаем остаток от деления
        if(j !== 0) res.unshift(j);  // остаток от деления добовляем на начало списка чтобы большая доля была в переди
        number -= j; // каждый раз отнимаем остаток чтобы получить округленную цифру
    }
    let last_nums;
    if(res[res.length-1] + res[res.length-2] < 20) {
        last_nums = res.splice(-2); // если последние две цифры в сумме меньше 20 то вырезаем их
        res.push(last_nums.reduce((a, b) => a + b)); // затем добовляем сумму в конец списка
    }

    return res.map(num => numbers[num]).join(' ');  // преобозовываем список с помощью функции map() затем склейваем в одну строку
}
