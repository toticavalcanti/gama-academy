type Employee = {
    name: string;
    secondName: string;
    birth: Date;
}

const employees: Employee[] = [
    {
        name: 'Toti',
        secondName: 'Cavacanti',
        birth: new Date
    }, 
    {
        name: 'Jade',
        secondName: 'Cavacanti',
        birth: new Date
    }
];

function employeeHandle(funcionarios: Employee[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário: ' + funcionario.name)
    }
}

type Contact = {
    name: string;
    phone: string;
    mobile?: string;
}

//The ? in mobile, is to the field be optional

const contato: Contact = {
    name: "Toti",
    phone: '123456'
}