class MyDate {
   // day: number;
   // month: number;
   // year: number;

    constructor(public dia: number,public  mes: number,public ano: number){
       // this.day = dia;
       // this.month = mes;
       // this.year = ano;
    }
}

const data = new MyDate(19, 6, 2020);
console.log(data.day);
console.log(data.month);

