// Función para limpiar la pantalla de la calculadora
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para borrar el último carácter de la pantalla
function deleteLast() {
    const display = document.getElementById('display');
    // Elimina el último carácter de la cadena actual
    display.value = display.value.slice(0, -1);
}

// Función para agregar un carácter a la pantalla
function appendCharacter(character) {
    const display = document.getElementById('display');
    // Si el valor de la pantalla es '0' y el carácter no es un punto o paréntesis, reemplaza el '0'
    if (display.value === '0' && !['.', '(', ')'].includes(character)) {
        display.value = character;
    } else {
        // Agrega el carácter al final de la cadena actual en la pantalla
        display.value += character;
    }
}

// Función para calcular el resultado de la expresión en la pantalla
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Reemplaza "^" con "**" para operaciones de potencia en JavaScript
        let expression = display.value.replace(/√\(/g, 'Math.sqrt(').replace(/\^/g, '**');
        
        // Evalúa la expresión matemática ingresada en la pantalla
        const result = eval(expression);
        
        // Muestra el resultado en la pantalla y maneja precisión decimal
        display.value = result % 1 === 0 ? result : result.toFixed(8);
    } catch (error) {
        // Si ocurre un error, muestra 'Error' en la pantalla
        display.value = 'Error';
    }
}
