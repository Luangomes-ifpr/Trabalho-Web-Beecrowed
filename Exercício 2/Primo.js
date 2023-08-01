const frm = document.querySelector("Form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const x = Number(frm.inNumero.value);

    let resposta ="";
    let primo=true;
    for(let i=2;i<x;i++){
        if(x%i==0){
            primo=false;
            resposta = "não é primo";
    }
    if(primo){
        resposta = "é primo"
    }
}
resp.innerText = `${x} ${resposta}`

})