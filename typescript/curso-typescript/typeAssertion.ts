//type assertion
const myAge = 23;

//(myAge as number).toString();
(<number>myAge).toString();

//const input = document.getElementById('numero') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('numero');
console.log(input.value);