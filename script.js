//1
let item = 100;

if (item < 50){
    console.log('naklebia 50-ze');
}else if (item > 20){
    console.log('metia 20-ze');
}else{
    console.log('error');
}

//2

let userName = 'mariam'

let result = (userName == 'mariam') ? "true" : 'false';

console.log(result);

//3

let NameUser = 'mariami';

switch (NameUser){
    case "mariami":
    console.log("true");
    break;
    case "nini":
    console.log('name is nini');
    break;
    default:
    console.log('false');
}