const prompt = require('prompt-sync')({sigint: true});
const angka = prompt('Input angka: ');

if(angka <= 0){
    console.log("Tidak bisa input bilangan negatif")
} else if(angka % 2 == 0){
    console.log("Akar pangkat 2 dari angka " +angka)
    console.log("Adalah = " +Math.sqrt(angka));
} else{
    console.log("Tidak bisa input bilangan ganjil")
}