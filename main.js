//Função: Define uma lista de ações que serao executadas quando a função for chamada. A palavra reservada para criar uma função em JavaScript é function

function insert(num){
    //Variavel é um espaço na memoria que armazena uma informacao para uso posterior. Ao nomea-la evite: numeros e letras no inicio, espaço entre palavras(use _ou camelCase) e acentuação.
    //Captura o conteudo atual exibido no elemento do HTML cujo id é 'resultado' e armazena na variavel numero
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    //verificando se existem dois operadores iguais na tela 
    var ultimoCaracter= numero.slice(-1); 

    var doisUltCar = numero.slice(-2);
        //criando uma lista para armazenar operadores que eu nao quero que se repita 
        //Uma lista é uma estrutura similar a variavel porem armazena mais de uma informação, sua criação diferencia-se pelo [] apos o sinal de igual 
    var op = ['+','-','.','/','*','**']; 
    if(op.includes(num)){ 
        if(op.includes(ultimoCaracter)){ 
            resultado.innerHTML = numero.slice(0,-1)+num;
            return;     
        
        }
    }    
    resultado.innerHTML = numero + num;

}
function clean(){ 
    /*função para limpar conteudo da calculadora*/ 
    document.getElementById('resultado'). innerHTML = "";
    /*Define o conteudo do elemento 'resultado" como uma string vazia*/ 
}
function del(){
    /*função tambem sem parametro, para tambem apagar o ultimo caracter digitado*/ 
    var resultado = document.getElementById ('resultado').innerHTML;
     document.getElementById ('resultado'). innerHTML = resultado.substring(0,resultado.length-1); 
     //exemplo: se no resultado estiver =7+1545     =7+154
}
function calcular(){ 
    var resultado = document.getElementById('resultado').innerHTML; 
    if(resultado){ 
//Executa se tiver algo digitado no resultado, ou seja se a cond for verdadeira
//A funcao eval atribuida ao elemento resultado, vai avaliar a expressao matematica na 
document.getElementById('resultado').innerHTML= eval(resultado)
    }
    else{ 
        //executa se a condição for falsa
        document.getElementById('resultado').innerHTML='Erro'
    }
}