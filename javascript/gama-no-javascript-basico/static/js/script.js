console.log("Java script carregado")

function validation(cpf){
    return false
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