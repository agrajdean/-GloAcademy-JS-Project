let title = "My project";
console.log(typeof title);
let screens = "Простые, Сложные, Интерактивные";
console.log(screens.length);
let screenPrice = "49";
console.log(
  "Стоимость верстки экранов  " + screenPrice + " рублей/долларов/гривен/юани"
);
let rollback = "16";
let fullPrice = "150000";
console.log(
  "“Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани"
);
console.log(typeof fullPrice);
let adaptive = "true";
console.log(typeof adaptive);

screens = screens.toLowerCase(); //запись в нижнем регистре
screens = screens.split(/\s*,\s*/); //разбиваем строку на массив
console.log(screens);

console.log(
  "Процент отката посреднику за работу " +
    fullPrice * (rollback / 100) +
    " рублей"
); //Процент отката посреднику за работу
