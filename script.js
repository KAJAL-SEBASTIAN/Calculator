//1. Display a number on the text field
function displayNumber(num){
    result.value+=num
}

//2. Clear the text field
function clearText(){
    result.value=""//it will assign an empty value to the text field
}

//3. Evaluate the expression
function evaluateExpression(){
    // exp=result.value //exp=7*8
    // output=eval(result.value) //56=eval(7*8)
    // result.value=output

    result.value=eval(result.value)
}
//4. Remove last character from the text field
function removeLastCharacter(){
    result.value=result.value.slice(0,-1)
}