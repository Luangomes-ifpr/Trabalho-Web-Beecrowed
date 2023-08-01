const frm = document.querySelector("Form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const x = Number(frm.inNumero.value);

    let resposta ="";
    for(i=1;i<=x;i++){
        if(x%i==0){
           resposta += i;
        }
        resposta = `${resposta} `
}
    resp.innerText = resposta;
})