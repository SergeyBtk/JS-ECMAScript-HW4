"use strict";
// Задание 1. Получение данных о пользователе.
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/
async function getUserData(ID, url) {
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    console.log("Данные получены");
    return json.data[ID - 1];
  } else {
    console.log("Данные не получены");
  }
}
getUserData(1, "https://reqres.in/api/users").then((result) => {
  if (result === undefined) {
    console.log("Пользователь не найден");
  } else {
    console.log(result);
  }
});

//  Задание 2. Отправка данных на сервер.
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *

// // Пример использования функции
// const user = {
//   "name": "John Doe",
//   "job": "unknown"
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения.
// Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует
// объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201),
// функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/
async function saveUserData(user, url) {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
  });
  if (response.ok) {
    console.log("данные отправились");
    return response.json();
  } else {
    return new Error("Ошибка данных");
  }
}
const user = {
  name: "John Doe",
  job: "unknown",
};
saveUserData(user, "https://reqres.in/api/users")
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).
const idEl = document.querySelector("#head-text");
function changeStyleSetTimeout(element, time) {
    setTimeout(() => (element.style.color = "blue"), time);
}
changeStyleSetTimeout(idEl, 2100);
