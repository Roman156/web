// Получаем элементы формы
const form = document.querySelector('.formWithValidation');
const date = form.querySelector('.date');
const time = form.querySelector('.time');
const guests = form.querySelector('.guests');
const name = form.querySelector('.name');
const email = form.querySelector('.email');
const phone = form.querySelector('.phone');
const message = form.querySelector('.message');
const button = form.querySelector('.form__button');

// Создаем объект для хранения ошибок
const error = {};

// Функция для проверки даты
function validateDate() {
  // Проверяем, что дата не пустая
  if (!date.value) {
    error.date = 'Пожалуйста, выберите дату';
  } else {
    // Проверяем, что дата не прошла
    const today = new Date();
    const selectedDate = new Date(date.value);
    if (selectedDate < today) {
      error.date = 'Пожалуйста, выберите дату в будущем';
    } else {
      delete error.date;
    }
  }
}

// Функция для проверки времени
function validateTime() {
  // Проверяем, что время не пустое
  if (!time.value) {
    error.time = 'Пожалуйста, выберите время';
  } else {
    delete error.time;
  }
}

// Функция для проверки количества гостей
function validateGuests() {
  // Проверяем, что количество гостей не пустое
  if (!guests.value) {
    error.guests = 'Пожалуйста, выберите количество гостей';
  } else {
    delete error.guests;
  }
}

// Функция для проверки имени
function validateName() {
  // Проверяем, что имя не пустое
  if (!name.value) {
    error.name = 'Пожалуйста, введите ваше имя';
  } else {
    // Проверяем, что имя состоит только из букв
    const nameRegex = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
    if (!nameRegex.test(name.value)) {
      error.name = 'Пожалуйста, введите корректное имя';
    } else {
      delete error.name;
    }
  }
}

// Функция для проверки почты
function validateEmail() {
  // Проверяем, что почта не пустая
  if (!email.value) {
    error.email = 'Пожалуйста, введите вашу почту';
  } else {
    // Проверяем, что почта соответствует формату
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
      error.email = 'Пожалуйста, введите корректную почту';
    } else {
      delete error.email;
    }
  }
}

// Функция для проверки номера телефона
function validatePhone() {
  // Проверяем, что номер телефона не пустой
  if (!phone.value) {
    error.phone = 'Пожалуйста, введите ваш номер телефона';
  } else {
    // Проверяем, что номер телефона соответствует формату
    const phoneRegex = /^\+?\d{10,12}$/;
    if (!phoneRegex.test(phone.value)) {
      error.phone = 'Пожалуйста, введите корректный номер телефона';
    } else {
      delete error.phone;
    }
  }
}

// Функция для проверки сообщения
function validateMessage() {
  // Проверяем, что сообщение не пустое
  if (!message.value) {
    error.message = 'Пожалуйста, введите ваше сообщение';
  } else {
    delete error.message;
  }
}

// Функция для проверки всей формы
function validateForm() {
  // Вызываем функции для проверки каждого поля
  validateDate();
  validateTime();
  validateGuests();
  validateName();
  validateEmail();
  validatePhone();
 

  // Проверяем, есть ли ошибки
  if (Object.keys(error).length === 0) {
    // Если нет, то отправляем форму
    form.submit();
	alert('Данные успешно отправлены!');
  } else {
    // Если есть, то показываем ошибки
    showErrors();
  }
}

// Функция для показа ошибок
function showErrors() {
  // Получаем все элементы с классом error
  const errorElements = form.querySelectorAll('.error');

  // Удаляем их
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].remove();
  }

  // Для каждого поля с ошибкой
  for (let key in error) {
    // Создаем элемент span с классом error и текстом ошибки
    const errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.innerText = error[key];

    // Находим элемент с таким же id, как ключ ошибки
    const inputElement = form.querySelector('#' + key);

    // Вставляем элемент с ошибкой после элемента с вводом
    inputElement.insertAdjacentElement('afterend', errorElement);
  }
}

// Добавляем обработчик события на кнопку отправки формы
button.addEventListener('click', function (event) {
  // Отменяем действие по умолчанию
  event.preventDefault();

  // Вызываем функцию для проверки формы
  validateForm();
});
