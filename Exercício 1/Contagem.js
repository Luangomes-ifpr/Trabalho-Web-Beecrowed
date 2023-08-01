const frm = document.querySelector("Form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const x = Number(frm.inNumero.value);

    let resposta ="";

    for(i=x;i>=0;i--){
        resposta += i;
        resp.innerText = resposta = `${resposta}\n`
    }
}
)