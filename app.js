"use strict";
/* ========================Продвинутые типы =============================== */
Object.defineProperty(exports, "__esModule", { value: true });
// ========================Union==================
// function logId(id: string | number | boolean) {
// 	console.log(id);
// }
// logId(1);
// logId("Hello");
// logId(true);
function logId(id) {
    if (typeof id === "string") {
        console.log(id); // id: string
    }
    else {
        console.log(id); // id: number | boolean
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err); // err: srting[];
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
    }
    else {
        console.log(a);
    }
}
// =============================Literal Types==========================
function fetchWithAuth(url, method) {
}
fetchWithAuth("sgsh", "post");
fetchWithAuth("sgsh", "get");
function fetchWithAuth1(url, method) {
    return 1;
}
;
let user1 = {
    name: "Piter",
    age: 22,
    skills: ["1", "2"],
    id: 2
};
let user2 = {
    name: "Piter",
    age: 22,
    skills: ["1", "2"],
    roleId: 3,
    createdAt: new Date(),
    log(id) {
        return "";
    },
};
const user3 = {
    name: "as",
    age: 23
};
const user4 = {
    login: "a@a.ru"
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5);
function testPass(user) {
    const t = user.password?.type;
}
function test(param) {
    const t = param ?? multiply(5);
}
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
// =====================Void===================
// void - функция ни чего не возвращает
function logId2(id) {
    console.log(id);
}
const a = logId2(1);
function multiply2(f, s) {
    if (!s) {
        return f * f;
    }
}
const f1 = () => {
};
const f2 = () => {
    return true;
};
const b = f2(); // void
const skills2 = ["Dev", "DevOps"];
const user = {
    s: ["s"]
};
skills2.forEach((skill) => user.s.push(skill));
// =================Unknow============
let input;
input = 3;
input = ["sd", "sp"];
function run(i) {
    if (typeof i == "number") {
        i++;
    }
    else {
        i;
    }
}
run(input);
async function getData() {
    try {
        fetch("");
    }
    catch (error) {
        if (error instanceof Error) // явная проверка
            console.log(error.message);
    }
}
async function getDataForce() {
    try {
        fetch("");
    }
    catch (error) {
        const e = error;
        console.log(e.message);
    }
}
// =====================Never===========================
// never - никогда не будет присвоено
function genereateError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) {
    }
}
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case "refund":
            //....
            break;
        case 'checkout':
            //......
            break;
        case 'reject':
            //......
            break;
        default:
            const _ = action;
            throw new Error("Нет такого action");
    }
}
function isString(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    genereateError("kfkfjf");
}
// ===================Null================================
const n = null;
const n1 = null;
// ===========================Привидение типов=====================
let c = 5;
let v = c.toString();
let e = new String(c).valueOf(); // string
let f = new Boolean(c).valueOf(); // boolean
let q = "dhhd";
let y = parseInt(q); // явно приобразовали сторку в число.
const user5 = {
    name: "Вася",
    email: "vasya@ya.ru",
    login: "vasay"
};
const admin = {
    ...user5,
    role: 1
};
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
