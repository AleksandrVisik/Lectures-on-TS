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
