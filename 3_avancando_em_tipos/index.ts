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