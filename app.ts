// =====================Использование типов===================

let revenue: number = 1000;
let bonus: number = 500;

let res: number = revenue + bonus;

console.log(res);

// =================Типы в функциях==============================

function getFullName(firstname: string, surname: string): string {
	return `${firstname} ${surname}`;
}



console.log(getFullName("Александр", "Высоцкий"));


// ===========================Объекты========================

function getFullName1(userEntity: { firstname: string, surname: string}): string {
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
}

console.log(getFullName1(user));


// =======================Упражнение=====================

let info: {
	officeId: number,
	isOpened: boolean,
	contacts: {
		phone: string,
		email: string,
		address: {
			city: string
		}
	}
} = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
}
console.log(info);

// ===============================Массивы===================================

const skills: string[] = [ "Dev", "Devops", "Testing"];

for (const skill of skills){
	console.log(skill.toLowerCase());
}

const res1 =  skills
	.filter((s: string) => s !== "Devops")
	.map(s => s + "! ")
	.reduce((a, b) => a + b);
console.log(res1);


// =================Tuples(картежи)===============================

const skill: [number, string] = [ 1, "Dev"];
// const id = skill[0];
// const skillName = skill[1];

// skill.push("SSSS");
// const aas = skill[2] // обратиится к третьему не можно
// skill.pop();

const [id, skillName] = skill; //деструкторизация

const arr: [number, string, ...boolean[]] = [1, "строка", true, true, false];


// ===============================Readonly===========================================

const skill1: readonly [number, string] = [ 1, "Dev"];

const skills1: ReadonlyArray<string> = ["Dev", "DevOps"];
const slills2: readonly string[] = ["Dev", "DevOps"];

// две записи выше равнозначны 

// =============================Enums======================================================

enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS,
	FAILED
}


const res2 = {
	message: "Платеж успешен",
	statusCode: StatusCode.SUCCESS
};


// 1 - успех
// 2 - в процесс
// 3 - отклонен

if(res2.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);



const enum Roles {
	ADMIN = 1,
	USER = 2
}

const res3 = Roles.ADMIN;


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

enum QuestionStatus {
	PUBLISHED = "published",
	DRAFT = "draft",
	DELETED = "deleted"
}

async function getFaqs(req: {
	topicId: number;
	status: QuestionStatus;
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus
}[]>
{
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
// ====
function getFullInfo(productInfo: { productName: string, price: number, inStock: boolean}): string {
	return `${productInfo.productName} ${productInfo.price} ${productInfo.inStock}`;
}

const product = {
productName: "Laptop",
	price: 1050,
	inStock: false
}

console.log(getFullInfo(product));
// ====

const bookInfo: [number, string, number] = [101, "Clean Code", 2008];
for (const info of bookInfo){
	console.log(info);
}

// ====
enum OrderStatus {
  Success = 1,
  Processing,
  Fail
}
console.log(OrderStatus.Fail);

// =====

function join( c: string, d: string): string {
	return `${c} ${d}`;
}
console.log(join("First", "Second"));
// =========

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const res5: number[] = numbers.filter((n: number) => n % 2 === 0);
console.log(res5);

let student: {
  name: string,
  age: number,
  gpa: number
} = {
  "name": "Alice",
  "age": 22,
  "gpa": 3.5
}

console.log(student.name);
console.log(student.age);
console.log(student.gpa);
// ====
let myVar: string | number;
console.log(myVar = "TypeScript");
console.log(myVar = 1989);

// ==
function length (strings: string[]): number[] {
  return strings.map(s=>s.length);
 
}
const words: string[] = ["cat", "elephant", "dog"];
const lengths: number[] = length(words);
console.log(lengths);
// ====
let multiTypeVariable: any;
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
multiTypeVariable = {name: "Ivan", age: 23};
console.log(multiTypeVariable);
multiTypeVariable = () => console.log("Привет функция");
multiTypeVariable();
// ====
// let value: unknown;
function processValue(value: unknown) {
	if (typeof value === "number"){
		console.log(value * 2);
		return;
	}
	if (typeof value === "string"){
		console.log(value.toUpperCase());
		return;
	}else{
		console.log("Unsupported type")
	}
}

processValue(5);
processValue("Привет мир");
processValue(true);

const numbers1: number[] = [10, 20, 30, 40];
let sum: number = 0;
for(const num of numbers1){
	sum+= num
}
console.log(`${sum}`);



function concat(a: string, b: string): string {
  return a + b;
}
console.log(concat('Hello, ', 'World!'));

