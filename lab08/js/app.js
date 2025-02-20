const file_system = require('fs');

//file_system.writeFileSync('test.txt', 'Mundo estuvo aquí >:)');

setTimeout(() => {console.log("Buenardo en 6 segundos")}, 6000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}