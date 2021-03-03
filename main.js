
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    
}

function redirecionar(){
    window.open("https://www.cleversondurso.com/");
   // ou assim (abre na mesma aba):  window.location.href = "https://www.cleversondurso.com/";
}

function trocar(elemento){
     //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
     elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}



/*
function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade =  prompt("Qual sua idade?");
console.log(validaIdade(idade));

//alert(soma(5, 10));
*/








/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/




/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count +1; //ou count++ que fazx a mesma coisa
};
*/



/*
var idade  = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/



/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));


//var nome = "Cleverson Durso";
//var idade = 44;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));