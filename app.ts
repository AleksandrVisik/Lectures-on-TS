/* ========================Продвинутые типы =============================== */

// ========================Union==================

// function logId(id: string | number | boolean) {
// 	console.log(id);
// }
// logId(1);
// logId("Hello");
// logId(true);
function logId(id: string | number | boolean) {
	if (typeof id === "string") {
		console.log(id); // id: string
	} else {
		console.log(id); // id: number | boolean
	}
}

function logError(err: string | string[]) {
	if (Array.isArray(err)) {
	console.log(err); // err: srting[];
	}else {
		console.log(err);
	}
}

function logObject(obj: {a: number} | {b: number}) {
	if ("a" in obj) {
	console.log(obj.a);
	}else {
		console.log(obj.b);
	}
}

function logMultipleIds(a: string | number, b: string | boolean) {
	if (a === b) {
		
	} else {
		console.log(a)
	}
}