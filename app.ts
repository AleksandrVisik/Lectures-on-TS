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

// ========Упражнение. Типизировать ответ сервера.
// // Запрос в виде платежа
// {
//     "sum": 10000,
//     "from": 2,
//     "to": 4
// }
// // Ответ
// {
//     "status": "success",
//     "data": {
//         "databaseId": 567,
//         "sum": 10000,
//         "from": 2,
//         "to": 4
//     }
// },
// {
//     "status": "failed",
//     "data": {
//         "errorMessage": "Недостаточно средств",
//         "errorCode": 4
//     }
// }

// +++++++++++++Решение+++++++++++

interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = "success",
	Failed = "failed",
}
interface IPaymentRequest extends IPayment {

}

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}
interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess
}
interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed
}

// =====================Void===================
// void - функция ни чего не возвращает
function logId2(id: string | number): void {
	console.log(id);
}

const a = logId2(1);

function multiply2(f: number, s?: string) {
	if (!s){
		return f * f;
	}
}

type voidFunc = () => void;
const f1: voidFunc = () =>{
	
}
const f2: voidFunc = () =>{
	return true;
}

const b = f2() // void

const skills2 = ["Dev", "DevOps"];
const user = {
	s: ["s"]
}
skills2.forEach((skill) => user.s.push(skill));

// =================Unknow============
let input: unknown;
input =3;
input = ["sd", "sp"];

function run(i: unknown) {
	if (typeof i == "number") {
		i++;
	}else {
		i
	}
}
run(input)

async function getData() {
	try {
		fetch("");
	} catch(error) {
		if (error instanceof Error) // явная проверка
	console.log(error.message);
	}
}

async function getDataForce() {
	try {
		fetch("");
	} catch(error) {
		const e = error as Error;
		console.log(e.message);
	}
}

type U1 = unknown | number;

type I1 = unknown & string;

// =====================Never===========================
// never - никогда не будет присвоено
function genereateError(message: string): never {
	throw new Error(message);
}

function dumpError(): never {
	while (true) {
	}
}

function rec() {
	return rec();
}

type paymentAction = "refund" | "checkout" | "reject"

function processAction(action: paymentAction) {
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
			const _: never = action;
			throw new Error ("Нет такого action");
	}
}

function isString(x: string | number): boolean {
	if (typeof x === "string") {
		return true;
	} else if (typeof x === "number"){
		return false;
	}
	genereateError("kfkfjf");
}

// ===================Null================================

const n: null = null;
const n1: any = null;

// ===========================Привидение типов=====================

let c = 5;
let v: string = c.toString();
let e: string = new String(c).valueOf(); // string
let f: boolean = new Boolean(c).valueOf(); // boolean


let q = "dhhd";
let y: number = parseInt(q); // явно приобразовали сторку в число.

interface User9 {
	name: string;
	email: string;
	login: string;
}

const user5: User9 = {
	name: "Вася",
	email: "vasya@ya.ru",
	login: "vasay"
}

interface Admin {
	name: string;
	role: number
}
const admin: Admin = {
	...user5,
	role: 1
}


function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		role: 1
	}
	
}