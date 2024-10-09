

// step..1

let temperature = 21;
let isRainnig = true;
let isSunny = true;


if (temperature < 0) {
    console.log("you can carry heavy jackets");

}
else if (temperature > 0 &&  isRainnig === true && temperature < 20 ) {
    console.log (" you can carry Raincoat or sweater");

}
else if ( temperature < 30 || isSunny === true) {
    console.log (" you can carry T-shirt and sunglasses");

}
else {
    console.log( "you can wear normal clothes");
}
