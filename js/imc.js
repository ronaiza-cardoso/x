function calculaImc()
{
  altura = document.imcForm.altura.value;
  peso = document.imcForm.peso.value;

  calculo = peso / (altura * altura);

  alert(calculo);

}
