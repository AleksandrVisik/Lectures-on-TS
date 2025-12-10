"use strict";
// =====================Использование типов===================
Object.defineProperty(exports, "__esModule", { value: true });
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
// =================Типы в функциях==============================
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
console.log(getFullName("Александр", "Высоцкий"));
// ===========================Объекты========================
function getFullName1(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: "Александр",
    surname: "Высоцкий",
    city: "Москва",
    age: 19,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName1(user));
// =======================Упражнение=====================
let info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
console.log(info);
// ===============================Массивы===================================
const skills = ["Dev", "Devops", "Testing"];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res1 = skills
    .filter((s) => s !== "Devops")
    .map(s => s + "! ")
    .reduce((a, b) => a + b);
console.log(res1);
// =================Tuples(картежи)===============================
const skill = [1, "Dev"];
// const id = skill[0];
// const skillName = skill[1];
// skill.push("SSSS");
// const aas = skill[2] // обратиится к третьему не можно
// skill.pop();
const [id, skillName] = skill; //деструкторизация
const arr = [1, "строка", true, true, false];
// ===============================Readonly===========================================
const skill1 = [1, "Dev"];
const skills1 = ["Dev", "DevOps"];
const slills2 = ["Dev", "DevOps"];
// две записи выше равнозначны 
// =============================Enums======================================================
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res2 = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS
};
// 1 - успех
// 2 - в процесс
// 3 - отклонен
if (res2.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
const res3 = 1 /* Roles.ADMIN */;
// ===================Упражнение++ Типизация функции=========================
// /* Запрос */
// {
//     "topicId": 5,
//     "status": "published" // "draft", "deleted"
// }
// /* Ответ */
// [
//     {
//         "question": "Как осуществляется доставка?",
//         "answer": "быстро!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
// ]
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["PUBLISHED"] = "published";
    QuestionStatus["DRAFT"] = "draft";
    QuestionStatus["DELETED"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
async function getFaqs(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
// ====
function getFullInfo(productInfo) {
    return `${productInfo.productName} ${productInfo.price} ${productInfo.inStock}`;
}
const product = {
    productName: "Laptop",
    price: 1050,
    inStock: false
};
console.log(getFullInfo(product));
// ====
const bookInfo = [101, "Clean Code", 2008];
for (const info of bookInfo) {
    console.log(info);
}
// ====
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Success"] = 1] = "Success";
    OrderStatus[OrderStatus["Processing"] = 2] = "Processing";
    OrderStatus[OrderStatus["Fail"] = 3] = "Fail";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.Fail);
// =====
function join(c, d) {
    return `${c} ${d}`;
}
console.log(join("First", "Second"));
// =========
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const res5 = numbers.filter((n) => n % 2 === 0);
console.log(res5);
let student = {
    "name": "Alice",
    "age": 22,
    "gpa": 3.5
};
console.log(student.name);
console.log(student.age);
console.log(student.gpa);
// ====
let myVar;
console.log(myVar = "TypeScript");
console.log(myVar = 1989);
// ==
function length(strings) {
    return strings.map(s => s.length);
}
const words = ["cat", "elephant", "dog"];
const lengths = length(words);
console.log(lengths);
// ====
let multiTypeVariable;
multiTypeVariable = 42;
console.log(multiTypeVariable);
multiTypeVariable = "Привет";
console.log(multiTypeVariable);
multiTypeVariable = true;
console.log(multiTypeVariable);
multiTypeVariable = [1, 2, 4];
console.log(multiTypeVariable);
multiTypeVariable = ["Hi", "Hello", "Bye"];
console.log(multiTypeVariable);
multiTypeVariable = { name: "Ivan", age: 23 };
console.log(multiTypeVariable);
multiTypeVariable = () => console.log("Привет функция");
multiTypeVariable();
// ====
// let value: unknown;
function processValue(value) {
    if (typeof value === "number") {
        console.log(value * 2);
        return;
    }
    if (typeof value === "string") {
        console.log(value.toUpperCase());
        return;
    }
    else {
        console.log("Unsupported type");
    }
}
processValue(5);
processValue("Привет мир");
processValue(true);
const numbers1 = [10, 20, 30, 40];
let sum = 0;
for (const num of numbers1) {
    sum += num;
}
console.log(`${sum}`);
function concat(a, b) {
    return a + b;
}
console.log(concat('Hello, ', 'World!'));
//# sourceMappingURL=app.js.map