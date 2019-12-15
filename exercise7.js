// SOAL NOMOR 1

var rows = 7

for (i = 0; i < rows; i++) {
    console.log('*')
}
   

console.log('------------------------------------------------------------')

// SOAL NOMOR 2

var rows2 = 7

for (i = 0; i < rows2; i++) {
    var star = "*"
    for (j = 1; j < rows2; j++) {
        star = star + "*"
    }
    console.log(star)
}



console.log('------------------------------------------------------------')

// SOAL NOMOR 3

var rows3 = 7

for (i=0; i<rows3; i++)
{
    var star = "*"
    for (j=0; j<i; j++) 
    {
        star = star + "*"
    }
    console.log(star)
}
