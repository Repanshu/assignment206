// Function to convert CAD to USD
function convertToUSD() {
    const cadInput = document.getElementById('cadInput').value;
    
    // Check if input is a valid number
    if (isNaN(cadInput) || cadInput === '') {
        alert('Please enter a valid number for Canadian Dollars (CAD)');
        return;
    }

    const cadToUsdRate = 0.75; // Hardcoded exchange rate
    const usdValue = parseFloat(cadInput) * cadToUsdRate;
    
    document.getElementById('result').innerText = `Equivalent amount in USD: $${usdValue.toFixed(3)}`;
}

// Function to convert USD to CAD
function convertToCAD() {
    const usdInput = document.getElementById('usdInput').value;
    
    // Check if input is a valid number
    if (isNaN(usdInput) || usdInput === '') {
        alert('Please enter a valid number for US Dollars (USD)');
        return;
    }

    const usdToCadRate = 1.33; // Hardcoded exchange rate
    const cadValue = parseFloat(usdInput) * usdToCadRate;
    
    document.getElementById('result').innerText = `Equivalent amount in CAD: $${cadValue.toFixed(3)}`;
}
