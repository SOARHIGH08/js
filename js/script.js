function convertCurrency() {
    let amount = parseFloat(document.getElementById("amountInput").value);
    let fromCurrency = parseFloat(document.getElementById("fromCurrency").value);
    let toCurrency = parseFloat(document.getElementById("toCurrency").value);

    let result = (amount * toCurrency) / fromCurrency;
    document.getElementById("result").innerText = "Total: " + result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2});
}