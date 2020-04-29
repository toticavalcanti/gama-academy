console.log("Java script carregado")

function validation(cpf){
    if(cpf.length != 11){
        return false
    }else{
        let numbers = cpf.substring(0, 9)
        let digits = cpf.substring(9) 
        
        let sum = 0
        for(let i = 10; i > 1; i--){
            sum += numbers.charAt(10 - i) * i;
        }
        console.log(sum)

        let result = sum % 11 < 2 ? 0 : 11 - ( sum % 11 )

        if(result != digits.charAt(0))
            return false
    }

    console.log(digits.toString().charAt(0) + "é a primeira posição da variável sum")

    return true
}

function cpfValidation(){
    console.log("Iniciando a validação do CPF!")
    let cpf = document.getElementById("cpf_input").value
    
    let validationResult = validation(cpf)

    if (validationResult) {
        document.getElementById("success").style.display='block'
    }
    else{
        document.getElementById("error").style.display='block'
    }
}