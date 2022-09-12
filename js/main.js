var elResult = document.querySelector(".result");
var elForm = document.querySelector("form");
var elInputText = document.querySelector(".typeInput1")
var elInputType = document.querySelector(".typeInput2")
var elInputNumber = document.querySelector("input[type='number']")



elForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    elResult.innerHTML = "";

    let amout = elInputNumber.value;
    let content = elInputText.value;
    let type = elInputType.value;

    for(let i = 0; i< amout; i++){
        let addEl = document.createElement(`${type}`);
        addEl.style.fontSize = '40px'
        addEl.style.whiteSpace = 'pre'
        addEl.textContent = content;
        elResult.append(addEl);
        elResult.style.textOverflow = 'clip'
        elResult.style.width = '100%'
        
    }
    // amout.value = "";
    // content.value = "";
    // type.value = "";
})