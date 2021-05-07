document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const selectInput = document.getElementById('choose-curr-input'),
        selectOutput = document.getElementById('choose-curr-output'),
        currInputLabel = document.querySelector('.curr-input-label'),
        currOutputLabel = document.querySelector('.curr-output-label'),
        currInput = document.getElementById('curr-input'),
        rublesInput = document.getElementById('rubles-input'),
        rublesOutput = document.getElementById('rubles-output'),
        currOutput = document.getElementById('curr-output'),
        getRublesBtn = document.getElementById('getRubles'),
        getCurrBtn = document.getElementById('getCurr'),
        pWarning = document.querySelector('.warning');
    
    pWarning.style.display = 'none';
    getRublesBtn.disabled = selectInput.value == 'no';
    getCurrBtn.disabled = selectOutput.value == 'no';
    selectInput.addEventListener('change', () => {
        getRublesBtn.disabled = selectInput.value == 'no';
        if (selectInput.value !== 'no') {
            pWarning.style.display = 'none';
            currInputLabel.textContent = selectInput.value;
        } else {
            pWarning.style.display = 'block';
        }
    });
    selectOutput.addEventListener('change', () => {
        getCurrBtn.disabled = selectOutput.value == 'no';
        if (selectOutput.value !== 'no') {
            currOutputLabel.textContent = selectOutput.value;
        }
    })

    getRublesBtn.addEventListener('click', event => {
        event.preventDefault();
        
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('network status is not 200')
                }
                return (response.json());
            })
            .then (data => {
                if (selectInput.value === 'Euros') {
                    rublesOutput.value = (data.Valute.EUR.Value * currInput.value).toFixed(2);
                }
                if (selectInput.value === 'Dollars') {
                    rublesOutput.value = (data.Valute.USD.Value * currInput.value).toFixed(2);
                }
            })
            .catch(err => console.error(err));
    });

    getCurrBtn.addEventListener('click', event => {
        event.preventDefault();

        fetch('https://www.cbr-xml-daily.ru/latest.js')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('network status is not 200')
                }
                return (response.json());
            })
            .then(data => {
                if (selectOutput.value === 'Euros') {
                    currOutput.value = (data.rates.EUR * rublesInput.value).toFixed(2);
                }
                if (selectOutput.value === 'Dollars') {
                    currOutput.value = (data.rates.USD * rublesInput.value).toFixed(2);
                }
            })
            .catch(err => console.error(err));
    })


});