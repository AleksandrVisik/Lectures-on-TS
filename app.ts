/* ========================Продвинутые типы =============================== */

// ========================Union==================

function logId(id: string | number | boolean) {
	console.log(id);
}
logId(1);
logId("Hello");
logId(true);