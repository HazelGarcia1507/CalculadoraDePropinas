document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tipCalculator');
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageSelect = document.getElementById('tipPercentage');
    const tipAmountSpan = document.getElementById('tipAmount');
    const totalAmountSpan = document.getElementById('totalAmount');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageSelect.value);
        
        if (isNaN(billAmount) || billAmount <= 0) {
            alert('Por favor, ingresa un monto válido para la factura.');
            return;
        }
        
        const tipAmount = billAmount * tipPercentage;
        const totalAmount = billAmount + tipAmount;
        
        tipAmountSpan.textContent = tipAmount.toFixed(2);
        totalAmountSpan.textContent = totalAmount.toFixed(2);
        
        resultsDiv.classList.remove('hidden');
    });
});
