'use strict'
// const data = {
//     "RU": [
//         {
//             "country": "Россия",
//             "count": "144500000",
//             "cities": [
//                 {
//                     "name": "Рязань",
//                     "count": "538962",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
//                 },
//                 {
//                     "name": "Москва",
//                     "count": "12615882",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
//                 },
//                 {
//                     "name": "Санкт-Петербург",
//                     "count": "5383968",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Краснодар",
//                     "count": "918145",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
//                 },
//                 {
//                     "name": "Екатеринбург",
//                     "count": "1484456",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Ростов-на-Дону",
//                     "count": "1130305",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
//                 },
//                 {
//                     "name": "Воронеж",
//                     "count": "1054537",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
//                 }
//             ]

//         },
//         {
//             "country": "Германия",
//             "count": 82175684 ,
//             "cities": [
//                 {
//                     "name": "Берлин",
//                     "count": "3613495",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
//                 },
//                 {
//                     "name": "Мюнхен",
//                     "count": "1456039",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
//                 },
//                 {
//                     "name": "Франкфурт-на-Майне",
//                     "count": "736414",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
//                 },
//                 {
//                     "name": "Кёльн",
//                     "count": "1080394",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
//                 }
//             ]
//         },
//         {
//             "country": "Англия",
//             "count": 53012456,
//             "cities": [
//                 {
//                     "name": "Лондон",
//                     "count": " 8869898",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
//                 },
//                 {
//                     "name": "Манчестер",
//                     "count": "545500",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
//                 },
//                 {
//                     "name": "Эдинбург",
//                     "count": "488100",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Бристоль",
//                     "count": "567111",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
//                 }
//             ]

//         }
//     ],
//     "EN": [
//         {
//             "country": "Russia",
//             "count": "144500000",
//             "cities": [
//                 {
//                     "name": "Ryazan",
//                     "count": "538962",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
//                 },
//                 {
//                     "name": "Moscow",
//                     "count": "12615882",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
//                 },
//                 {
//                     "name": "St Petersburg",
//                     "count": "5383968",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Krasnodar",
//                     "count": "918145",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
//                 },
//                 {
//                     "name": "Yekaterinburg",
//                     "count": "1484456",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Rostov-on-Don",
//                     "count": "1130305",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
//                 },
//                 {
//                     "name": "Voronezh",
//                     "count": "1054537",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
//                 }
//             ]

//         },
//         {
//             "country": "Germany",
//             "count": 82175684 ,
//             "cities": [
//                 {
//                     "name": "Berlin",
//                     "count": "3613495",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
//                 },
//                 {
//                     "name": "Munich",
//                     "count": "1456039",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
//                 },
//                 {
//                     "name": "frankfurt",
//                     "count": "736414",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
//                 },
//                 {
//                     "name": "Cologne",
//                     "count": "1080394",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
//                 }
//             ]
//         },
//         {
//             "country": "United Kingdom",
//             "count": 53012456,
//             "cities": [
//                 {
//                     "name": "London",
//                     "count": " 8869898",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
//                 },
//                 {
//                     "name": "Manchester",
//                     "count": "545500",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
//                 },
//                 {
//                     "name": "Edinburgh",
//                     "count": "488100",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Bristol",
//                     "count": "567111",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
//                 }
//             ]

//         }
//     ],
//     "DE": [
//         {
//             "country": "Russland",
//             "count": "144500000",
//             "cities": [
//                 {
//                     "name": "Ryazan",
//                     "count": "538962",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
//                 },
//                 {
//                     "name": "Moskau",
//                     "count": "12615882",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
//                 },
//                 {
//                     "name": "Saint Petersburg",
//                     "count": "5383968",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Krasnodar",
//                     "count": "918145",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
//                 },
//                 {
//                     "name": "Jekaterinburg",
//                     "count": "1484456",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Rostow",
//                     "count": "1130305",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
//                 },
//                 {
//                     "name": "Woronesch",
//                     "count": "1054537",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
//                 }
//             ]

//         },
//         {
//             "country": "Deutschland",
//             "count": 82175684 ,
//             "cities": [
//                 {
//                     "name": "Berlin",
//                     "count": "3613495",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
//                 },
//                 {
//                     "name": "München",
//                     "count": "1456039",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
//                 },
//                 {
//                     "name": "Frankfurt",
//                     "count": "736414",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
//                 },
//                 {
//                     "name": "Köln",
//                     "count": "1080394",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
//                 }
//             ]
//         },
//         {
//             "country": "England",
//             "count": 53012456,
//             "cities": [
//                 {
//                     "name": "London",
//                     "count": " 8869898",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
//                 },
//                 {
//                     "name": "Manchester",
//                     "count": "545500",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
//                 },
//                 {
//                     "name": "Edinburgh",
//                     "count": "488100",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
//                 },
//                 {
//                     "name": "Bristol",
//                     "count": "567111",
//                     "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
//                 }
//             ]

//         }
//     ]
// };

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
// const workJson = () => {
//     fetch('./db_cities.json')
//         .then(response => {
//             if (response.status !== 200) {
//                 throw new Error('network status is not 200');
//             }
//             return (response.json());
//         })
//         .then(data => {


//         })
//         .catch(error => console.log(error));
// };
// // workJson();

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

const renderNoMatches = () => {
    const block = document.createElement('div');
    block.className = 'dropdown-lists__nomatchesBlock';
    block.textContent = 'Ничего не найдено';
    dropdownListsCols[2].append(block);
};
renderNoMatches();

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
    statusMessage.className = 'loader';
    listAutocomplete.style.display = 'block';
    const block = document.querySelector('.dropdown-lists__list--autocomplete .dropdown-lists__countryBlock');
    if (block) {
        block.remove();
    }

    fetch('./db_cities.json')
        .then(response => {
            if (response.status !== 200) {
                throw new Error('network status is not 200');
            }
            statusMessage.className = '';
            return (response.json());
        })
        .then(data => {
            data.RU.forEach(item => {
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

        })
        .catch(error => console.log(error));

    const block2 = document.getElementsByClassName('dropdown-lists__col')[2].lastChild.className;
    if (block2 === 'dropdown-lists__nomatchesBlock') {
        showNoMatches();
    }

};

let selectInterval;
let count = 0;
let countOp = 0;
    
const showSelect = () => {
    selectInterval = requestAnimationFrame(showSelect);
    count += 5;
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
    countHide -= 5;
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
                    data.RU.forEach(item => {
                        item.cities.forEach(elem => {
                            if (elem.name === String(inputText)) {
                                button.setAttribute('href', elem.link);
                            }
                        })
                    })
                })
                .catch(error => console.log(error));
        }
        
    } else {
        //  при клике все списка все скрываем
        inputLabel.textContent = 'Страна или город';
        closeButton.style.display = 'none';
        listDefault.style.display = 'none';
        listSelect.style.display = 'none';
        listAutocomplete.style.display = 'none';
        button.setAttribute('disabled', 'true');
        button.style.opacity = '0.5';
    }

// клик на кнопку крестик
    if (target === closeButton) {
        inputLabel.textContent = 'Страна или город';
        closeButton.style.display = 'none';
        listDefault.style.display = 'none';
        listSelect.style.display = 'none';
        listAutocomplete.style.display = 'none';
        button.setAttribute('disabled', 'true');
        button.style.opacity = '0.5';
    }
    
// при клике внутри инпута показываем отсортированный дефолтный список
    if (target === selectCities) {
        listDefault.style.display = 'block';
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
                    data.RU.forEach(item => {
                        item.cities.sort(sortCount);
                        renderList(item, item.cities);
                    })
                })
                .catch(error => console.log(error));
    }
    // при клике на страну показываем все города
    const closestDefaultLine = target.closest('.dropdown-lists__list--default .dropdown-lists__total-line');
    
    if (closestDefaultLine) {
        listDefault.style.position = 'relative';
        listSelect.style.display = 'block';
        listSelect.style.position = 'absolute';
        listSelect.style.zIndex = 1;
        showSelect();
        const text = String(closestDefaultLine.textContent.trim().match(/[^\d\s]+/g));
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
            const block = document.querySelector('.dropdown-lists__list--select .dropdown-lists__countryBlock');
            if (block) {
                block.remove();
            }
            data.RU.forEach(item => {
                if (item.country === text) {
                    renderCountryDiv(item, 1);
                    item.cities.forEach(elem => {
                        renderCitiesDiv(elem, 'select');
                    })
                }
            })
        })
        .catch(error => console.log(error));

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