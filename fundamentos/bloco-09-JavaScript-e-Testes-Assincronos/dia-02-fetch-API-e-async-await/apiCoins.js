const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCoins = () => {
    const ulContainer = document.getElementById('criptos');
    fetch(API_URL)
        .then((resposta) => resposta.json())
        .then((coins) => {
            console.log(coins);
            coins.data.filter((cryptos) => cryptos.rank <= 10)
                .forEach ((crypto) => {
                    const coinListIten = document.createElement('li');
                    const coinPrice = parseFloat(crypto.priceUsd);
                    coinListIten.innerHTML = `${crypto.name} (${crypto.symbol}): ${coinPrice.toFixed(2)} USD`;
                    ulContainer.appendChild(coinListIten); 
            });

        })
}

window.onload = () => fetchCoins();