console.log("Java script carregado")

function validation(cpf){

    if(cpf.length != 11) {
        return false
    }
    else {
        let numbers = cpf.substring(0, 9)
        let digits = cpf.substring(9) 
        
        let sum = 0
        for(let i = 10; i > 1; i--){
            sum += numbers.charAt(10 - i) * i;
        }

        let result_1 = sum % 11 < 2 ? 0 : 11 - ( sum % 11 )

        //first digit validation
        if(result_1 != digits.charAt(0)){
            return false
        }

        sum = 0
        numbers = cpf.substring(0, 10)

        for(let k = 11; k > 1; k--){
            sum += numbers.charAt(11 - k) * k
        }

        let result_2 = sum % 11 < 2 ? 0 : 11 - ( sum % 11 )

        //second digit validation
        if(result_2  != digits.charAt(1)){
            return false
        }

        return true
    }
}

function cpfValidation(){
    
    console.log("Iniciando a validação do CPF!")
    document.getElementById('success').style.display='none'
    document.getElementById('error').style.display='none'

    let cpf = document.getElementById("cpf_input").value
    
    let validationResult = validation(cpf)

    if (validationResult) {
        document.getElementById("success").style.display='block'
    }
    else{
        document.getElementById("error").style.display='block'
    }
}