const frm = document.querySelector("Form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const x = Number(frm.inNumero.value);

    let resposta ="";

    for(i=1;i<x;i++){
        resposta += "Ho ";
        resp.innerText = resposta;
    }
    resposta += "Ho!"
    resp.innerText = resposta;
})