const frm = document.querySelector("Form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const x = Number(frm.inNumero.value);

    let resposta ="";
    let soma=0;
    for(i=1;i<x;i++){
        if(x%i==0){
            soma = soma+i;
        }
    }
    if(soma==x){
        resposta = "é perfeito"
    }else{
        resposta = "não é perfeito."
    }
    resp.innerText = `${x} ${resposta}`
})