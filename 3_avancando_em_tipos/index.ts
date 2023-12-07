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