class Car {

    private currenSpeed: number = 0;

    constructor(
        public brand: string,
        public model: string,
        private maxSpeed: number = 200
    ){ }

    speedUp(){
        const speedUp = 5;
        if(this.currenSpeed + speedUp <=  this.maxSpeed){
            this.currenSpeed += speedUp;
        }
    }

    braking(){
        const brake = 5;
        if(this.currenSpeed - brake >=  0){
            this.currenSpeed -= brake;
        }
    }
}

const carro = new Car('Chevrolet', 'Agile', 180);
carro.currenSpeed = 190;