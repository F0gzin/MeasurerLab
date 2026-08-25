let confirmButton = document.getElementById("ProgressButton");
let textWarn = document.getElementById("AvisoTexto");
let dropDown = document.getElementById("SelecionarPostoDropdown");
confirmButton.addEventListener("click",(ev)=>{
    let selected = (dropDown.value);
    if(selected){
        let newA = document.createElement("a");
        newA.href = "../Medicao?posto="+selected
        newA.click()
    }else{
        textWarn.hidden = false;
    }
})