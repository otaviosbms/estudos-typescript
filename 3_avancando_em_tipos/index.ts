// 1 - arrays:

let numbers: number[] = [1,2,3,4,5,6,7,8,9,0];

console.log(numbers[2]);

const nomes: string[] = ['pedro','otavio','joão']

// 2 - any:

const arr1: any[] = ['string', 1];

console.log(arr1);

// 3 - paremetros tipados:

function soma(a: number, b: number){
    console.log(a+b)
}

// 4 - retornos de função tipados:

function greeting(name: string): string
{
    return `hello ${name}`
};

console.log(greeting('Otávio'));

// 5 - função anonima:

setTimeout(()=>{
    const sallary: number = 1200;

}, 2000)

// 6 - tipos de objeto:

function passCordinates(coord: {
    x: number,
    y: number,
}){
    console.log("X:"+coord.x);
    console.log("Y:"+coord.y);
}

const objCoord = {x: 329, y: 23};

passCordinates(objCoord);

// 7 - props opcionais:

function showNumbers(a: number, b: number, c?: number){
    console.log("A:" + a)
    console.log("B:" + b)
    if(c){
        console.log("C:" + c)
    }
    
}

showNumbers(1,2,3);
showNumbers(4,5);

// 8 - validando argumento opcional:

function advancedGreeting(firstName: string, lastName?: string){

    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá ${firstName}, tudo bem?`

}

advancedGreeting('Otávio','dos Santos');
advancedGreeting('Otávio');

// 9 - Union type:

function showBalance(balance: string|number){
    console.log(`O saldo da conta é ${balance}`)
}

showBalance(100);
showBalance("500");
// showBalance(True);

// 10 - Avançando em union types:


function showUserRole(role: boolean|string){
    if(typeof role === "boolean" ){
        return "Usuário não aprovado"
    }

    return `A função do usuario é ${role}`
}

showUserRole(false);
showUserRole('Admin')

// 11 - type alias:

type ID = number|string;

function showId(id: ID){
    console.log(`o id é: ${id}`)
}

showId(1);
showId("200")

// 12 - interface:

interface Point {
    x: number,
    y: number,
    z: number
}

function showCoords(obj: Point){
    console.log(obj)
}

const coordObj:Point= {
    x: 10,
    y: 9,
    z: 8
}

showCoords(coordObj)

// 13 - interface x type alias:
// funcionalidades: type = const / interface = var

interface Person {
    name: string,
}

interface Person {
    age: number,
}

const somePerson: Person = {name:"Otávio",age:18}

type PersonType = {
    name: string
}

// type PersonType = {
//     age: number
// }

// 14 - Literal types:

let test: "testando"

// test = "testando2"

function showDirection(direction: "left"|"center"|"right"){
    console.log(`a direção é ${direction}`)
}

// showDirection("oi")

showDirection("center")