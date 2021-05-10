'use strict'
const listDefault = document.querySelector('.dropdown-lists__list--default'),
        selectCities = document.getElementById('select-cities'),
        inputLabel = document.querySelector('.input-cities .label'),
        closeButton = document.querySelector('.close-button'),
        dropdownListsCols = document.querySelectorAll('.dropdown-lists__col'),
        listSelect = document.querySelector('.dropdown-lists__list--select'),
        listAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
        button = document.querySelector('.button'),
        dropDown = document.querySelector('.dropdown'),
        statusMessage = document.createElement('div');
dropDown.insertAdjacentElement('afterend', statusMessage);       

const setCookie = (key, value, year, month, day) => {
    let cookieStr = key + '=' + encodeURI(value);
    if (year) {
        const expires = new Date(year, month - 1, day);
        cookieStr += '; expires=' + expires.toGMTString();
    }
    document.cookie = cookieStr;
};

const checkCookie = () => document.cookie.includes('lang');
const askLanguage = () => {
    let lang;
    do {
        lang = prompt('RU, EN or DE?').trim().toUpperCase();
        console.log('lang: ', lang);
    } while (lang !== 'RU' && lang !== 'EN' && lang !== 'DE');

    setCookie('lang', lang, 2023, 12, 30);
    console.log('cookie: ', decodeURI(document.cookie));
};

const renderList = (countryObj, citiesArr) => {
    const countryBlock = document.createElement('div');
    countryBlock.className = 'dropdown-lists__countryBlock';
    countryBlock.innerHTML = `
        <div class="dropdown-lists__total-line">
            <div class="dropdown-lists__country">${countryObj.country}</div>
            <div class="dropdown-lists__count">${countryObj.count}</div>
        </div>
        <div class="dropdown-lists__line">
            <div class="dropdown-lists__city dropdown-lists__city--ip">${citiesArr[0].name}</div>
            <div class="dropdown-lists__count">${citiesArr[0].count}</div>
        </div>
        <div class="dropdown-lists__line">
            <div class="dropdown-lists__city">${citiesArr[1].name}</div>
            <div class="dropdown-lists__count">${citiesArr[1].count}</div>
        </div>
        <div class="dropdown-lists__line">
            <div class="dropdown-lists__city">${citiesArr[2].name}</div>
            <div class="dropdown-lists__count">${citiesArr[2].count}</div>
        </div>
    `;
    dropdownListsCols[0].append(countryBlock);
};

const renderCountryDiv = (countryObj, number) => {
    const countryBlock = document.createElement('div');
    countryBlock.className = 'dropdown-lists__countryBlock';
    countryBlock.innerHTML = `
        <div class="dropdown-lists__total-line">
            <div class="dropdown-lists__country">${countryObj.country}</div>
            <div class="dropdown-lists__count">${countryObj.count}</div>
        </div>
    `;
    dropdownListsCols[number].append(countryBlock);
};

const renderCitiesDiv = (citiesObj, list) => {
    const countryBlock = document.querySelector(`.dropdown-lists__list--${list} .dropdown-lists__countryBlock`);
    const cityBlock = document.createElement('div');
    cityBlock.className = 'dropdown-lists__line';
    cityBlock.innerHTML = `
        <div class="dropdown-lists__city dropdown-lists__city--ip">${citiesObj.name}</div>
        <div class="dropdown-lists__count">${citiesObj.count}</div>
    `;
    if (countryBlock) {
        countryBlock.append(cityBlock);
    } else {
        const newCountryBlock = document.createElement('div');
        newCountryBlock.className = 'dropdown-lists__countryBlock';
        document.querySelector(`.dropdown-lists__list--${list} .dropdown-lists__col`).append(newCountryBlock);
        newCountryBlock.append(cityBlock);
    }
};

const renderNoMatches = language => {
    const block = document.createElement('div');
    block.className = 'dropdown-lists__nomatchesBlock';
    if (language === 'RU') {
        block.textContent = 'Ничего не найдено';
    } else if (language === 'EN') {
        block.textContent = 'No matches found';
    } else {
        block.textContent = 'Keine Zusammentreffen';
    }
    
    dropdownListsCols[2].append(block);
};

listDefault.style.display = 'none';
button.setAttribute('disabled', 'true');
button.style.opacity = '0.5';

const sortCount = (a, b) => +b.count - +a.count;
const showNoMatches = () => {
        const block = document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__countryBlock');
        if (block) {
            block.remove();
        }
        const blockM = document.querySelector('.dropdown-lists__nomatchesBlock');
        if (blockM) {
            blockM.style.display = 'block';
        }
        listAutocomplete.style.backgroundColor = '#faccce';

};
const search = value => {
    listAutocomplete.style.display = 'block';
    const block = document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__countryBlock');
    if (block) {
        block.remove();
    }

    showAutocomplete(value);

    const block2 = document.getElementsByClassName('dropdown-lists__col')[2].lastChild.className;
    if (block2 === 'dropdown-lists__nomatchesBlock') {
        showNoMatches();
    }

};

let selectInterval;
let count = 0;
let countOp = 0;
    
const showSelect = () => {
    listDefault.style.position = 'relative';
    listSelect.style.display = 'block';
    listSelect.style.position = 'absolute';
    listSelect.style.zIndex = 1;
    selectInterval = requestAnimationFrame(showSelect);

    count += 10;
    countOp += 0.03;
    if (count < 431) {
        listSelect.style.display = 'block';
        listSelect.style.opacity = countOp;
        listSelect.style.left = count + 'px';
    } else {
        cancelAnimationFrame(selectInterval);
        count = 0;
        countOp = 0;
    }
};

let selectIntervalHide,
countHide = 430,
countOpHide = 1;

const hideSelect = () => { 
    selectIntervalHide = requestAnimationFrame(hideSelect);
    countHide -= 10;
    countOpHide -= 0.03;
    if (countHide > 0) {
        listSelect.style.opacity = countOpHide;
        listSelect.style.left = countHide + 'px';
    } else {
        cancelAnimationFrame(selectIntervalHide);
        listSelect.style.display = 'none';
        countHide = 430;
        countOpHide = 1;
    }
};

const workJson = lang => {
    statusMessage.className = 'loader';
    fetch('./db_cities.json')
    .then(response => {
        if (response.status !== 200) {
            throw new Error('network status is not 200');
        }
        statusMessage.className = '';
        return (response.json());
    })
    .then(data => {
        localStorage.setItem('dataObj', JSON.stringify(data[lang]));
    })
    .catch(error => console.log(error));
};

const getMainCountry = lang => {
    if (lang === 'RU') {
        return 'Россия';
    } else if (lang === 'EN') {
        return 'England';
    } else {
        return 'Deutschland';
    }
};


const showDefault = () => {
    const country = getMainCountry();
    data.forEach((item, index) => {
        if (item.country === country) {
            if (index !== 0) {
                const temp1 = data[index - 1];
                data[index - 1] = data[index];
                data[index] = temp1;
            }
        }
    })
    data.forEach(item => {
        item.cities.sort(sortCount);
        renderList(item, item.cities);
    })
};

const showSelectList = fieldText => {
    const block = document.querySelector('.dropdown-lists__list--select .dropdown-lists__countryBlock');
    if (block) {
        block.remove();
    }
    data.forEach(item => {
        if (item.country === fieldText) {
            renderCountryDiv(item, 1);
            item.cities.forEach(elem => {
                renderCitiesDiv(elem, 'select');
            })
        }
    })
};

const showAutocomplete = value => {
    data.forEach(item => {
        if (item.country.startsWith(value)) {
            renderCountryDiv(item, 2);
        }

        item.cities.forEach(elem => {
            if (item.country.startsWith(value) || elem.name.startsWith(value)) {
                const blockM = document.querySelector('.dropdown-lists__nomatchesBlock');
                if (blockM) {
                    blockM.style.display = 'none';
                }
                listAutocomplete.style.display = 'block';
                listAutocomplete.style.backgroundColor = '#b0fad7';
                if (elem.name.startsWith(value)) {
                    renderCitiesDiv(elem, 'autocomplete');                   
                }
            }
        })
    })
};

const setLink = text => {
    data.forEach(item => {
        item.cities.forEach(elem => {
            if (elem.name === String(text)) {
                button.setAttribute('href', elem.link);
                console.log('elem.link: ', elem.link);
            }
        })
    })
};

const reset = () => {
    const block = document.querySelector('.dropdown-lists__list--default .dropdown-lists__col');
    block.innerHTML = '';

    inputLabel.textContent = 'Страна или город';
    closeButton.style.display = 'none';
    listDefault.style.display = 'none';
    listSelect.style.display = 'none';
    listAutocomplete.style.display = 'none';
    button.setAttribute('disabled', 'true');
    button.style.opacity = '0.5';
};
// const lang = document.cookie.slice(-2);
// setCookie('lang', lang, 1993, 12, 30);
const check = checkCookie();

let data;
if (check) {
    console.log('have cookie');
    const lang = document.cookie.slice(-2);
    workJson(lang);
    data = JSON.parse(localStorage.getItem('dataObj'));
    renderNoMatches(lang);
    getMainCountry(lang);
    document.addEventListener('click', event => {
        // показали отсортированный дефолтный список
        const target = event.target;
    
        if (target.closest('.dropdown')) {
            const inputText = target.textContent.trim().match(/[^\d\s]+/g);
            
            if (inputText) {
                inputLabel.textContent = inputText;
                closeButton.style.display = 'block';
            }
            // при клике на город вставляем ссылку на вики
            if (target.closest('.dropdown-lists__line')) {
                setLink(inputText);
            }
            
        } else {
            //  при клике все списка все скрываем
            reset();
        }
    
    // клик на кнопку крестик
        if (target === closeButton) {
            reset();
        }
        
    // при клике внутри инпута показываем отсортированный дефолтный список
        if (target === selectCities) {
            listDefault.style.display = 'block';
            showDefault();
        }
        // при клике на страну показываем все города
        const closestDefaultLine = target.closest('.dropdown-lists__list--default .dropdown-lists__total-line');
        
        if (closestDefaultLine) {
            showSelect();
            const text = String(closestDefaultLine.textContent.trim().match(/[^\d\s]+/g));
            showSelectList(text);
        }
        // возвращаемся к дефолтному списку при клике на страну
        const closestSelectLine = target.closest('.dropdown-lists__list--select .dropdown-lists__total-line');
        if (closestSelectLine) {
            hideSelect();
        }
        
        if (inputLabel.textContent !== 'Страна или город') {
            button.removeAttribute('disabled');
            button.style.opacity = '1';
        }
    });
    
    selectCities.addEventListener('input', () => {
        if (selectCities.value !== '') {
            button.removeAttribute('disabled');
            button.style.opacity = '1';
            listDefault.style.display = 'none';
            listSelect.style.display = 'none';
            const val = selectCities.value.trim()[0].toUpperCase() + selectCities.value.trim().slice(1).toLowerCase();
            search(val);
        } else {
            listAutocomplete.style.display = 'none';
            listDefault.style.display = 'block';
            button.setAttribute('disabled', 'true');
            button.style.opacity = '0.5';
        }
    })
} else {
    askLanguage();
}

