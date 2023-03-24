const gifts = ["Guadalupe", "Ollie", "Aki"];
function  writeCards() {
    const response = []
    let g;
    for (g = 0; g<gifts.length; g++){
        response[g]=`Thank you, ${gifts[g]}, for the wonderful surprise gift!`
    }
    return response;
}
function countDown() {
        let g = 10;
        while (g>=0)
         console.log(g--);
 }
countDown()