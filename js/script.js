// присваеваем функции
const filterByType = (type, ...values) => values.filter(value => typeof value === type),
// параметры получаем при вызове tryFilterByType
// ...values Rest оператор, получаем массив, собирая все оставшиеся аргументы. Передавали ведь строку из инпута.
//  фильтруем массив по типу данных, тип данных будет храниться в переданном параметре type
// полученный массив будет записан туда же, в values
// filter возвращает массив из всех подходящих элементов, когда вернёт true. То есть если тип каждого введенного элемента соответсвует выбранному значению в селект
// в итоге получим массив только с подходящими элементами
	hideAllResponseBlocks = () => {
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		//  находим 3 блока с вариантами показа сообщения - если все ок, если нечего показать, если ошибка
		//  Array.from создаёт новый экземпляр Array из массивоподобного или итерируемого объекта. То есть делаем массив из NodeList 
		responseBlocksArray.forEach(block => block.style.display = 'none');
		// скрываем каждый полученный блок
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		//  принимает селектор блока, текст сообщения и селектор спана
		hideAllResponseBlocks();
		// после этой функции все блоки вывода скрыты
		document.querySelector(blockSelector).style.display = 'block';
		// показываем именно тот блок, который сейчас нужен
		if (spanSelector) {
			//  если передали этот параметр
			document.querySelector(spanSelector).textContent = msgText;
			// записываем в этот спан нужное сообщение
		}
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
	// это блок при успешном результате
	//  в качестве 2го параметра идет строка с тернарным оператором
	// 3й параметр - id спана, куда выведем результат

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
	// это селектора div с текстом Нечего показать. Сделали его видимым

	tryFilterByType = (type, values) => {
		try {
			// новоизученный перехват ошибок
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			// Вызов eval(code) выполняет строку кода и возвращает результат последней инструкции
			// в valuesArray записали вызов функциии фильтрации, результат массив делаем строкой, разделяя по ", "
			const alertMsg = (valuesArray.length) ?
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			// используем тернарный оператор для переменной сообщения
			// если полученная строка не пустая, если нужные данные есть, то говорим вывести выбранный тип и эту строку
			showResults(alertMsg);
			//  после вызовва этой функции вывели результат на страницу
		} catch (e) {
			showError(`Ошибка: ${e}`);
			// выводим на страницу ошибку, если будет
			// в качестве текста сообщения будет содержимое объекта ошибка
		}
	};

const filterButton = document.querySelector('#filter-btn');
//  получили кнопку Фильтровать

filterButton.addEventListener('click', e => {
	//  обрабатываем данные по клике на кнопку
	const typeInput = document.querySelector('#type');
	//  получили раскрывающийся список с выборами типов данных
	const dataInput = document.querySelector('#data');
	//  получили поле для ввода значени	

	if (dataInput.value === '') {
		//  если ничего не ввели
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		//  устанавливает  специальное сообщение для  выбранного элемента. Если элемент не имеет пользовательской ошибки в параметре укажите пустую строку. То есть установили свое сообщение во всплывающей подсказке от обраузера. 
		showNoResults();
		// это блок с текстом Нечего показать сделали видимым
	} else {
		dataInput.setCustomValidity('');
		//  ошибки нет, поэтому передали пустую строку
		e.preventDefault();
		//  нам не надо обновлять или перезагружать страниицу, а иначе это произойдет, так как мы отправляем форму
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
		//  вызываем функцию, 1й аргумент - значение селекта, 2й - введенные данные. Все без лишних пробелов по концам
	}
});

