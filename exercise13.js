function xo(str) {

    var jumlahx = 0
    var jumlaho = 0
    var huruf = str.length - 1
    var i = 0
    
    while (i <= huruf) {
        if (str.charAt(i) === 'x') {
            jumlahx = jumlahx + 1
        }
        else if (str.charAt(i) === 'o') {
            jumlaho = jumlaho + 1
        }
        i++
    }
    if (jumlahx === jumlaho) {
        return true
    }
    else if(jumlahx !== jumlaho) {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true