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

// =============================Literal Types==========================

function fetchWithAuth(url: string, method: "post" | "get") {
	
}

fetchWithAuth("sgsh", "post");
fetchWithAuth("sgsh", "get");


// ===================Type Aliases=======================================

type httpMethod = "post" | "get"

function fetchWithAuth1(url: string, method: httpMethod): 1 | -1 {
	return 1;
};


type User = {
	name: string,
	age: number,
	skills: string[]

} 

type Role = {
	id: number
}

type UserWithRole = User & Role;

let user1: UserWithRole = {
	name: "Piter",
	age: 22,
	skills: ["1", "2"],
	id: 2
};

// =================================Interfaces======================

 interface User1 {
	name: string,
	age: number,
	skills: string[],
	log: (id: number)=> string;
} 
interface Role1 {
	roleId: number;
}
interface UserWithRole1 extends User1, Role1 {
	createdAt: Date;
}

let user2: UserWithRole1 = {
	name: "Piter",
	age: 22,
	skills: ["1", "2"],
	roleId: 3,
	createdAt: new Date(),

	log(id) { 
		return ""
	},
};

interface UserDic {
	[index: number]: User;
}
type UserDic2  = {
	[index: number]: User;
}

// =======Types или Interfaces
// Объекты описываются интефейсами
interface User3 {
	name: string;
}

interface User3 {
	age: number;
}
const user3: User3 = {
	name: "as",
	age: 23
}

type ID = string | number;

interface IDI {
	ID: string | number;
}


// ==================Optional==================

interface User4 {
	login: string;
	password?: string; // ? - опциональность
}

const user4: User4 = {
	login: "a@a.ru"
}

function multiply(first: number, second?: number): number {
	if (!second){
		return first * first;
	}
	return first * second;
}
 multiply(5);

 interface UserPro {
	login: string;
	password?: {
		type: "primary" | "secondary"
	};
}
function testPass(user: UserPro) {
	const t = user.password?.type;
}

function test(param?: string) {
	const t = param ?? multiply(5);
}