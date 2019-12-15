// SOAL NOMOR 1

function asterik1(angka){
    let hasil = ''
    for(let i = 0; i<angka; i++){
        hasil = hasil + '*' + '\n'
    }
    return hasil
}

console.log(asterik1(5))

// SOAL NOMOR 2

function asterik2(angka){
    let hasil = ''
    for(let i = 0; i<angka; i++){
        for(let j = 0; j<angka; j++){
            hasil = hasil + '*'
        }
        hasil = hasil + '\n'
    }
    return hasil
}
console.log(asterik2(5))

// SOAL NOMOR 3

function asterik3(angka) {
    let hasil = ''
    for (let i = 0; i < angka; i++) {
        for (let j = 0; j <= i; j++) {
            hasil = hasil + '*'
        }
        hasil = hasil + '\n'
    }
    return hasil
}
console.log(asterik3(5))