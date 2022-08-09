function calculaIMC(){
  var height = (document.querySelector("#height").value)/100;
  var weight = document.querySelector("#weight").value;
 
  var imc = weight / (height)** 2;
  var texto = "";
  if(imc < 16){
    texto = "Valor inválido"
  }else if(imc >= 16 && imc <= 16.9){
    texto = "Muito abaixo do peso"
  }else if(imc >= 17 && imc <= 18.4){
    texto = "Abaixo do peso"
  }else if(imc >= 18.5 && imc <= 24.9){
    texto = "Peso Normal"
  }else if(imc >= 25 && imc <= 29.9){
    texto = "Acima do peso"
  }else if(imc >= 30 && imc <= 34.9){
    texto = "Obesidade grau I"
  }else if(imc >= 35 && imc <= 40){
    texto = "Obesidade grau II"
  }else{
    texto = "Obesidade grau III"
  }
  document.querySelector("#text-area").innerText="Você está na Categoria: "+texto;
  
}