var pengulangan = ''

function balikKata(kata) {

    for (i = kata.length-1; i >= 0; i--) 
    {
    pengulangan = pengulangan + kata[i]
    }  
    return pengulangan   
}
    console.log(balikKata('Hello World and Coders'))