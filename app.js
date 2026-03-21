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
        console.log(id);
    }
    else {
        console.log(id);
    }
}
