function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Predefined exchange rates (relative to 1 USD)
    const exchangeRates = {
        USD: 1,
        EUR: 0.85,
        INR: 83.0,
        GBP: 0.75,
        AUD: 1.5,
        SAR: 3.75,   
        QAR: 3.64,   
        JPY: 130.00, 
        RUB: 74.00,  
        THB: 33.50,  
        IDR: 15400,  
        JOD: 0.71,  
        IRR: 42000,
    };

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    // Convert amount to USD and then to the target currency
    const amountInUSD = amount / exchangeRates[fromCurrency];
    const convertedAmount = amountInUSD * exchangeRates[toCurrency];

    // Display the result
    document.getElementById('result').innerHTML = `Converted Amount: <span>${convertedAmount.toFixed(2)} ${toCurrency}</span>`;

}
