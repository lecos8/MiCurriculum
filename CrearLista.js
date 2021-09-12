// let ul = document.createElement("ul");
// document.body.appendChild(ul);
// let li_1 = document.createElement("li");
// let li_2 = document.createElement("li");
// ul.appendChild(li_1);
// ul.appendChild(li_2);
// li_1.innerHTML="Banano";
// li_2.innerHTML="Piña";

let frutas = ["Banano", "Fresa", "Mango", "Uva", "Manzana", "Pera", "Mandarina"];
let li = [];

function agregarElementoLi(){
    let ul = document.createElement("ol");
    document.body.appendChild(ul);
    frutas.forEach((elementoArray, index)=>{
        li[index]=document.createElement("li");
        ul.appendChild(li[index]);
        li[index].innerHTML=elementoArray;
        
    });

}
//Funciones anónimas

// let suma = function(num1, num2){
//     return num1 + num2;
// }
let suma = (num1 , num2)=>num1+num2;

agregarElementoLi();