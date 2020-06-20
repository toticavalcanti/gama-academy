class Car {

    private currenSpeed: number = 0;

    constructor(
        public brand: string,
        public model: string,
        private maxSpeed: number = 200
    ){ }

    private speedHandler(delta: number){
        if(this.currenSpeed + delta <=  this.maxSpeed){
            this.currenSpeed += delta;
        }
        else if(this.currenSpeed - delta >=  0){
            this.currenSpeed -= delta;
        }
    }

    speedUp(){
        this.speedHandler(5);
        
    }

    braking(){
        this.speedHandler(-5);
    }
}

const carro = new Car('Chevrolet', 'Agile', 180);
carro.currenSpeed = 190;