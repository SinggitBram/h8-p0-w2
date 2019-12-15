function konversiMenit(menit) {
    let menitan = menit % 60
    let jaman = 0
    while (menit >= 60) {
        menit = menit - 60
        jaman++
    }
    if (menitan.toString().length < 2) {
        menitan = `0` + menitan
    }
    return `${jaman}:${menitan}`
}
  
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
