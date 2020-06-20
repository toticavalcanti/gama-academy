// herança
class Car {

    private currenSpeed: number = 0;

    constructor(
        public brand: string,
        public model: string,
        private maxSpeed: number = 200
    ){ }

    private speedHandler(delta: number){
        const newSpeed = this.currenSpeed + delta;

        if(newSpeed >= 0 && newSpeed <= this.maxSpeed){
            this.currenSpeed += newSpeed;
        }
        else if(this.currenSpeed - delta >=  0){
            this.currenSpeed = delta > 0 ? this.maxSpeed : 0
        }
    }

    speedUp(){
        this.speedHandler(5);
        
    }

    braking(){
        this.speedHandler(-5);
    }
}

class Camaro extends Car {
    private turbo = false;
    constructor(){
        super('chevrolet', 'camaro', 270)
    }

    turboOnOff(){
        this.turbo = true
    }
}

const camaro = new Camaro();
camaro.speedUp()
camaro.braking()
camaro.turboOnOff()