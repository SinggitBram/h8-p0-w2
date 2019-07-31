function konversiMenit(menit) {
    var waktu = ''
    var jam = ''
    var menitan = ''

jam = ((menit - (menit % 60)) / 60)
menitan =  (menit % 60)  
if (menitan < 10 ) {
    menitan = '0' + menitan} 
waktu = jam + ':' + menitan

return waktu
}
  
  console.log(konversiMenit(187));
