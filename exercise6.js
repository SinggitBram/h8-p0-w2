// SOAL NOMOR 1

console.log('LOOPING PERTAMA')

var angka = 2;

while(angka < 20 ) {
    console.log(angka + ' - I love coding');
angka += 2;
}   

console.log('LOOPING KEDUA')

var angka2 = 20

while(angka2 > 0 ) {
    console.log(angka2 + ' - I will become full stack developer');
angka2 -= 2;
}   

// SOAL NOMOR 2

console.log('LOOPING PERTAMA')

for(var angka3 = 1; angka3 < 20; angka3++) {
    console.log(angka3 + ' - I love coding')}

console.log('LOOPING KEDUA')

for(var angka4 = 20; angka4 > 0; angka4--) {
    console.log(angka4 + ' - I will become full stack developer')}

    // SOAL NOMOR 3

    var counter = 1;

    while(counter < 101 ) {

        if(counter % 2 === 0) {
        console.log( counter + ' - Genap');
        }

        else {
        console.log( counter + ' - Ganjil')
    }
    counter += 1;
    }

    console.log('-------------------------------------------------')

    var counter2 = 1;

    while(counter2 < 101 ) {

        if(counter2 % 3 === 0) {
        console.log( counter2 + ' KELIPATAN 3');
        }

        else {
        console.log('')
    }
    counter2 += 2;
    }

    console.log('-------------------------------------------------')

    var counter3 = 1;

    while(counter3 < 101 ) {

        if(counter3 % 6 === 0) {
        console.log( counter3 + ' KELIPATAN 6');
        }

        else {
        console.log('')
    }
    counter3 += 5;
    }

    console.log('-------------------------------------------------')

    var counter4 = 1;

    while(counter4 < 101 ) {

        if(counter4 % 10 === 0) {
        console.log( counter4 + ' KELIPATAN 10');
        }

        else {
        console.log('')
    }
    counter4 += 9;
    }