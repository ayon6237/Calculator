
const input_box = document.getElementById("input-box");

const getValue =  (input)=>{
    input_box.value+=input;
}
const clearDisplay=()=>{
    input_box.value="";
}
const calculate =()=>{
    try {
        input_box.value=eval(input_box.value);
    } catch (error) {
        input_box.value=error.message;
    }  
}
const deleteValue =()=>{
    input_box.value = input_box.value.slice(0, -1);
}

