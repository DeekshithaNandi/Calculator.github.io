

function deleteNum(){
    
    var output = document.getElementById('output');
    output.value = output.value.slice(0, -1);
    
}

function appendToOutput(value) {

    const output = document.getElementById('output');
    var currentValue = output.value;
    
    // If the last character is an operator, prevent adding another operator
    if (isOperator(value) && (currentValue.length === 0 || isOperator(currentValue.slice(-1)))) {
        
        return; // Do nothing
    }

    // Append the value to the output
    output.value += value;
}

function isOperator(value) {

    return ['+', '-', '*', '/','%'].includes(value);
}

function calculate() {
    const output = document.getElementById('output');
    let currentValue = output.value;

    // Remove the last character if it is an operator
    if (isOperator(currentValue.slice(-1))) {
        currentValue = currentValue.slice(0, -1);
    }

    // Evaluate the expression
    try {
        output.value = eval(currentValue);
    } catch (error) {
        output.value = 'Error'; // Handle any errors from eval
    }
}

// function calculate() {
//     const output = document.getElementById('output');
//     try {
//         output.value = eval(output.value); // Evaluate the expression
//     } catch {
//         output.value = 'Error'; // Show error for invalid input
//     }
// }