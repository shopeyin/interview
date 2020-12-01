// const checkSpam=(word)=>{

// 	const convertToLowercase= word.toLowerCase()
// 	if(convertToLowercase.includes("viagra") || convertToLowercase.includes("xxx") ){
// 		return true
// 	}else{
// 		return false
// 	}
// }

// console.log(checkSpam('xxx'))

// const truncateText=(str, maxlength=10)=>{
// //  check the lenth of the string, if the
// // length of the string is greater than maxlength
// // replace the end of the str "...",
// if( typeof(maxlength) ==='number' ){
// 	const strLength=str.length
// 		if (strLength > maxlength-1){
// 		  return str.slice(0,maxlength)+'...'
// 		}else{
// 			return str
// 		}
// }else{
// 	return "input a valid num not text"
// }

// }

// console.log(truncateText('hello how are you dear',20))

// const extractCurrencyValue=(str)=>{
// 	const extractCurrency = str.slice(1)
// 	return extractCurrency
// }

// console.log(extractCurrencyValue('$12000'))

// let arra = ["jazz","blues",]
// arra.push(`rock 'n' roll`)
// let middleArray = Math.floor(arra.length/2)
// arra[middleArray]="classic"
// arra.shift()
// arra.unshift("Rep","reggae")
// console.log(arra)

// const sumInput =()=>{
// 	newArray = []
// 	sum = 0
// 	while(true){
// 		const values = prompt('Input a value');
// 		if(!isNaN(values)){
// 			if(values.trim() !== "" ){
// 					newArray.push(Number(values))
// 			}else{
// 				break
// 				}
// 		}else{
// 			console.log("input a value")
// 			break
// 		}

// 	}

// 	for (var i = 0; i < newArray.length; i++) {
// 		sum+=newArray[i]
// 	}

// 	console.log(sum)
// }

// sumInput()

// let arr = ['a','b','c']
// arr[1]='tom'
// console.log(arr.slice(0,2))

let arr3 = [1, 15, 6, 2, 10];
// arr3.sort()

// const compareNumeric=(a,b)=>{
// 	if(a>b) return 1;
// 	if (a==b) return 0;
// 	if(a<b) return -1;

// }

// const compareNumeric=(a,b)=>{
// 	if(a<b) return 1;
// 	if (a==b) return 0;
// 	if(a>b) return -1;

// }

// console.log(arr3.sort(compareNumeric))

// const decreasingOrder=arr3.sort((a,b)=>b-a)
// console.log(decreasingOrder)

// const increasingOrder=arr3.sort((a,b)=>a-b)
// console.log(increasingOrder)

// let arr = ["HTML","Zion", "JavaScript", "CSS"];

// const copySorted=(arr)=>{
// 	copyArr = arr.slice(0,arr.length)
// 	sorted = copyArr.sort( (a, b) => a.localeCompare(b) )
// 	return sorted
// }

// console.log(copySorted(arr))

// console.log(arr)

// function Calculator() {

// 	this.calculate=function (a,b){
// 		return console.log(`this is the number  ${a * b}`)
// 	}

// 	this.addMethod=function(name,func){
// 			func=func(a,b)
// 			if (name === "*"){

// 			}
// 	}
// }

// let calc = new Calculator()
// calc.calculate(2,3)

// calc.addMethod()

// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

// let calc = new Calculator
// calc.addMethod("*", (a, b) => a * b);
// console.log(this.methods)
// console.log(calc.calculate("2 * 3"))

arr = [
  {
    name: "John",
    age: 25,
  },

  {
    name: "Pete",
    age: 45,
  },

  {
    name: "Pete",
    age: 15,
  },
];

// users=arr.map((user)=>{
// 	return user.name
// })

// console.log(users)

// arr=[
// 		  {
// 		 	name: "John",
// 		 	surname: "Femi",
// 		 	id:1,
// 		 } ,

// 		  {
// 		 	name: "Pete",
// 		 	surname: "toli",
// 		 	id:2,
// 		 } ,
// ];

// userMapped = arr.map((user)=>{
// 	return {
// 		"id":user.id,
// 		"fullname": `${user.name} ${user.surname}`
// 	}
// })

// console.log(userMapped)

arr = [
  {
    name: "John",
    age: 25,
  },

  {
    name: "Pete",
    age: 30,
  },

  {
    name: "Femi",
    age: 29,
  },
];

// function getAverageAge(array) {
// 	sumAge = 0

// 	for (var i = 0; i < array.length; i++) {
// 		sumAge = array[i].age + sumAge

// 	}

// 	averageAge=sumAge/array.length
// 	return averageAge
// }
// console.log(getAverageAge(arr))

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// function unique(arr) {
// 	unique=[]
// 	for (var i = 0; i < arr.length; i++) {
// 		if(!unique.includes(arr[i])){
// 			unique.push(arr[i])
// 		}else{

// 		}
// 	}
// 	return unique
// }

// console.log(unique(strings))
// function mapArray(arrayy) {
// 	newObj = arrayy.sort((a,b)=>a.age-b.age)

// 	return newObj
// }

// let x= mapArray(arr)
// console.log(x[0])

// arr1=[
// 		  {
// 		 	name: "John",
// 		 	age: 25,
// 		 } ,

// 		  {
// 		 	name: "Pete",
// 		 	age: 45,
// 		 } ,

// 		  {
// 		 	name: "Femi",
// 		 	age: 15,
// 		 } ,

// ];

// function shuffle(arrayy) {
// 	return arrayy.sort(() => Math.random() - 0.5);
// }

// console.log(shuffle(arr1));

let arrr = [1, 2, 3, 4, 5];

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// let value = a.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);

// let summ = arrr.reduce((sumofItem,currentItem)=>{
// 	return sumofItem + currentItem
// },1)

// console.log(summ)

// let newObj = users.reduce((sumofItem,currentItem)=>{
// 	sumofItem[currentItem.id] = currentItem
// 	return sumofItem
// },{})

// console.log(newObj)

// let neww=users.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;

//  },{})

// console.log(neww)

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }

// let x = groupById(users)
// console.log(x.john)

//   name: "John"
// }

// console.log(user['name'])

// function reduceString(s) {
// 	unique=[]
// 	neww=s.length-1
// 	for (var i = 0; i < neww; i++) {

// 		if(s[i]!==s[i+1]){
// 			unique.push(s[i])
// 		}
// 	}
// 	return unique
// }

// strr = ['a','a','b']
//  /=["a","a","a","b","c","c","d","d","d"]

// console.log(reduceString(strr))

fruit = ["a", "a", "a", "b", "c", "c", "d", "d", "d"];
// fruit=['a','a','b','b']

// newArray=[]
// for (var i = 0; i < fruit.length; i++) {
// 	if(!newArray.includes(fruit[i])){
// 		newArray.push(fruit[i])

// 	}else{
// 		if(newArray[newArray.length-1] === fruit[i]){
// 				newArray.pop()

// 		}else{
// 			newArray.push(fruit[i])
// 		}
// 	}

// }
// console.log(newArray.join())

// ---------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
//    fruit=["a","a","a","b","c","c","d","d","d"]

// //   // fruit = ['b','a','a','b']
// function reducedString(arr) {
// 	uniqueStrings = []
// 	for (var i = 0; i < arr.length; i++) {
// 		if(!uniqueStrings.includes(arr[i]) ){
// 			uniqueStrings.push(arr[i])

// 		}else{
// 			if( uniqueStrings[uniqueStrings.length-1] === arr[i] ){
// 				uniqueStrings.pop()

// 			}else{
// 				uniqueStrings.push(arr[i])
// 			}
// 		}

// 	}

// 	if (uniqueStrings.length == 0) {
// 		return "empty string"
// 	}

// 	return uniqueStrings.join()

// }

// // time complexity is O(N)

// // space complexity is O(N)

// console.log(reducedString(fruit))

// let neww = ""

// for (var i = 0; i < b.length; i++) {
// 	neww=b[i]+neww
// }

// console.log(b[1])

// let barrel = "oladimeji"
// // x=barrel.replace("o",'t')

// console.log(barrel[barrel.length-1])

// saveChangesInTheEditor

// st="hello\nworld\ntom"
// console.log(st)

// function camelCase(strings) {
// 	wordcount = 1
// 	if(isNaN(strings) && strings !== ''){
// 		for (var i = 0; i < strings.length; i++) {

// 			if(strings[i]===strings[i].toUpperCase()){
// 				wordcount = wordcount+1
// 			}
// 		}

// 		return wordcount
// 	}else{
// 		return "input a word from a-z"
// 	}

//  }

// // // time complexity is O(N)

// // // space complexity is O(N)

//  console.log(camelCase('saveChangesInTheEditor'))

// function strongPassword(n,password) {
// 	let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
// 	let lower_case = "abcdefghijklmnopqrstuvwxyz".split('')
// 	let special_characters = "!@#$%^&*()-+".split("")
// 	let numbers =  "0123456789".split("")
// 	let set = new Set()

// 	for (var i = 0; i < password.length; i++) {
// 		if(numbers.includes(password[i])){
// 			set.add('number')
// 		}
// 		if(special_characters.includes(password[i])){
// 			set.add('special_characters')
// 		}

// 		if(upper_case.includes(password[i])){
// 			set.add('uppercase')
// 		}

// 		if(lower_case.includes(password[i])){
// 			set.add('lowercase')
// 		}

// 	}

// 	if (password.length >= n) {
// 		if (set.size > 3) {
// 			console.log('login succcesfful')
// 		} else {
// 			console.log('add characters')
// 		}
// 	}else{
// 		console.log('password length small')
// 	}

// }
// // 	time complexity is O(N)

// // space complexity is O(1)
// strongPassword(6,"reeghh1bA")

// function strongPassword(n,password) {
// 	let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//  	let lower_case = "abcdefghijklmnopqrstuvwxyz"
//  	let special_characters = "!@#$%^&*()-+"
//  	let numbers =  "0123456789"

//  	let uniqueSet = new Set()

//  	for (var i = 0; i < password.length; i++) {
//  		lower_case.includes(password[i]) ? (uniqueSet.add('lowercase')) : ("")
//  		upper_case.includes(password[i]) ? (uniqueSet.add('uppercase')) : ("")
//  		special_characters.includes(password[i]) ? (uniqueSet.add('special_characters')) : ("")
//  		numbers.includes(password[i]) ? (uniqueSet.add('numbers')) : ("")
//  	}

//  	console.log(uniqueSet)

//  	let status
//  	let passwordLength = password.length
//  	let uniqueSetLength = uniqueSet.size

//  	if (passwordLength >= n) {
//  				if (uniqueSetLength > 3) {
//  					status = "login succcesfful"
//  				} else {
//  					status = "add more characters"
//  				}

//  	} else {
//  		status = "Increase the length"
//  	}

//  	return status

// }
// console.log(strongPassword(6,"amY#1"))

// let y='12'
let y = "beabeefeab";

// function twoCharacters(s){
// 	// go through the item in the s  one by one,
// 	// check if the current item == the next item:
// 	// 		if the current item is equal to the next, delete the item in total
// 	// then if the item in the length of s is > 1,
// 	// push to a new list and print

// 	function getOccur(array,value) {
// 	var count=0;
// 	for (var i = 0; i < array.length; i++) {
// 			if (array[i]===value) {
// 				count++
// 			}
// 		}

// 		return count
// 	}

// 	if(isNaN(s)){
// 			the_string = s.split('')
// 			removedItem=''
// 			non_unique=[]
// 			for (var i = 0; i < s.length; i++) {
// 				if(s[i] === s[i+1]){
// 					removedItem+=s[i]
// 				}
// 			}

// 			console.log(the_string)
// 			console.log(removedItem)

// 			let result = the_string.filter((item)=>{
// 				return item !== removedItem
// 			})

// 			for (var i = 0; i < result.length; i++) {
// 				if(result[i]){
// 					if (getOccur(result,result[i]) > 1) {
// 						non_unique.push(result[i])
// 					}
// 			 	}
// 			}

// 			console.log(non_unique)

// 		 	lengthOfArray = non_unique.length

// 		 	return lengthOfArray

// 	}else{
// 		return "input an alphabet"
// 	}

// }

// console.log(twoCharacters(y))

// Wkhuh'v--vwupq
// let k = 2
// let original_array = ['a','b','c','d']

// let removeFirstItems = original_array.slice(0,k)

// for (var i = 0; i < removeFirstItems.length; i++) {
// 	original_array.push(removeFirstItems[i])
// }

// for (var i = 0; i < removeFirstItems.length; i++) {
// 	original_array.shift(removeFirstItems[i])
// }

// console.log(`original_array --- ${original_array}`)
// // console.log(`sliced the item ${removeFirstItems}`)
// // console.log
// console.log(`original_array --- ${original_array[3]}`)

// let d= [1,2,3,5,6]
// let j=d.slice(0,2)

// for (var i = 0; i < j.length; i++) {
// 	d.push(j[i])
// }
// console.log(d[4])
// console.log(Array.isArray(j))

//
// const regex = /[a-cA-C]/
// const isExisting = regex.test(strin)
// console.log(isExisting)

// function regexTest(s,k) {
// 	let	regex = /[a-cA-C]/
// 	isExisting =  regex.test(s)

// 	return isExisting
// }

// console.log(regexTest('a'))

// let str = '';

// for (let i = 65; i <= 122; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log( str );

// console.log('a' >   'A')
function cl(c) {
  console.log(c);
}
// let real = ['a','b','c']

// let copy = real.slice()
// let j = copy.push('d')
// cl(real)
// cl(copy)

// function caesarCipher(k,s) {
// 	// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// 	// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

// 	// loop through the string
// 	// get item
// 	// find the item in the alphabet array,
// 	// if seen
// 	// 	get the index of item in the alphabet array
// 	// 	return the item position + k/3
// 	// 	push the item into the new array

// 	let original_alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
// 	let rotatedAlphabet = original_alphabet.slice()

// 	let removeFirstItems = rotatedAlphabet.slice(0,k)

// 	for (var i = 0; i < removeFirstItems.length; i++) {
// 		rotatedAlphabet.push(removeFirstItems[i])
// 	}

// 	console.log(`rotated ${rotatedAlphabet}`)
// 	string = s.split("")

// 	item=[]

// 	function regexTest(s) {
// 	let	regex = /[a-cA-C]/
// 	isExisting =  regex.test(s)

// 	return isExisting
// 	}

// 	for (var i = 0; i < string.length; i++) {
// 		if(string[i] === '-' ){
// 			item.push("-")
// 		}
// 		else if(string[i] === `'` ){
// 			item.push(`'`)
// 		}
// 		else if(regexTest(string[i])){

// 			if(string[i] === string[i].toUpperCase()){
// 				string[i] = string[i].toLowerCase()
// 				findItemIndex = original_alphabet.indexOf(string[i])
// 				cipher=original_alphabet[findItemIndex+k]
// 				item.push(cipher.toUpperCase())
// 			}else{
// 			findItemIndex = original_alphabet.indexOf(string[i])
// 			 cipher=original_alphabet[findItemIndex+k]
// 			item.push(cipher)
// 			}

// 		}
// 		else if( string[i] === string[i].toUpperCase()){
// 			string[i] = string[i].toLowerCase()
// 			findItemIndex = rotatedAlphabet.indexOf(string[i])
// 			cipher=rotatedAlphabet[findItemIndex+k]
// 			item.push(cipher.toUpperCase())

// 		}else{

// 			findItemIndex = rotatedAlphabet.indexOf(string[i])

// 			cipher=rotatedAlphabet[findItemIndex+k]

// 			item.push(cipher)
// 		}

// 	}

// 	joinCipher = item.join("")

// 	return joinCipher

// }

// console.log(caesarCipher(5,`There's-z`))

// console.log(caesarCipher(3,`There's-a-starman-z-t-z`))

// function marsExploration(string) {
// 	encodedString=[]

// 	for (var i = 0; i < string.length; i++) {

// 		if (string[i] === "S" || string[i] === "O" ) {
// 			continue
// 		}else{
// 			encodedString.push(string[i])
// 		}

// 	}

// 	lengthOfEncodedArray = encodedString.length

// 	return lengthOfEncodedArray
// }

// console.log(marsExploration('SOSS'))

//

// let string = 'hackerrankInString'
// if (string.includes('h')) {
// 	cl('Yes')
// } else {
// 	cl('No')
// }

// function hackerrankInStrin(s) {
// 	var word = "hackerrank"
// 	var word_index=0
// 	for (var i = 0; i < s.length; i++) {
// 		if(s[i] ==word[word_index] ){
// 			word_index+=1

// 		}
// 	}

// 	if (word_index == word.length) {
// 		return "YES"
// 	}else{
// 		return "No"
// 	}
// }

// cl(hackerrankInStrin('hereiamstackerrank'))

// function (arr1,arr2) {
// 	// body...
// }
// const m = [1,2,3]
// const n = [4,5,1]
// const intersection = m.filter(element => n.includes(element));
// console.log(intersection)
let ar = [1, 1, 2];

let numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// function removeDuplicates(nums) {
// 	// nums.sort((a,b)=>a-b)
// 	// let unique=[]
// 	// for (var i = 0; i < nums.length; i++) {
// 	// 	if (!unique.includes(nums[i])) {
// 	// 		unique.push(nums[i])
// 	// 	}}

// 	//
// 	// return unique.length

// 	if(nums.length === 0) return 0;
// 	let i = 0

// 	for (var j = 1; j < nums.length; j++) {
// 		if(nums[i] != nums[j]){

// 			i++;
// 			console.log(i)
// 			console.log(nums[i], nums[j])
// 			nums[i]=nums[j]
// 			console.log(nums[i], nums[j])
// 		}
// 	}

// 	return i+1

// }

// console.log(removeDuplicates(numbers))

// function maxProfit(prices) {
// 	let m = 0
// 	let profit = 0

// 	for (var i = 1; i < prices.length; i++) {
// 		let x = prices[i] - prices[m]

// 		if(x > 0){

// 			profit+=x
// 		}

// 		m++

// 	}

// 	return profit
// }
// let e =[7,6,4,3,1]

// console.log(maxProfit(e))

// function rotateArray(nums, k) {
//   // for(let i = s.length-1; i>=0; i--){
//   // 	nums.unshift(s[i])
//   // }

//   if (nums.length > k) {
//     let s = nums.splice(-k);
//     nums.unshift(...s);
//   } else {
//     let i = 0;
//     while (i < k) {
//       nums.unshift(nums.splice(-1));
//       i++;
//     }
//   }

//   return nums;
// }
// //let x = [-1, -100, 3, 99];
// //let x = [1,2,3,4,5,6,7]
// let x = [1, 2];
// console.log(rotateArray(x, 2));

//let j= x.splice(-1)

// console.log(j)
// for (var i = j.length-1; i >= 0 ; i--) {
// 	x.unshift(j[i])
// }

// x.unshift(...j)

// console.log(x)

// function containsDuplicate(array) {
//   array.sort((a, b) => a - b);
//   let startIndex = 0;
//   for (let nextIndex = 1; nextIndex < array.length; nextIndex++) {
//     console.log(array[startIndex], array[nextIndex]);
//     if (array[startIndex] === array[nextIndex]) {
//       return true;
//     }
//     startIndex++;
//   }

//   return false;

// let unique = [];
// let count = 0;
// for (let index = 0; index < array.length; index++) {
// if (!unique.includes(array[index])) {
//   unique.push(array[index]);
// } else {
//   count++;
// }
// }

// if (count) {
//   return true;
// } else {
//   return false;
// }
//}
// let j = [1, 2, 6, 3, 4];
// console.log(containsDuplicate(j));

// function getOccur(array, value) {
//   var count = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       count++;
//     }
//   }

//   return count;
// }

// function singleNumber(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (getOccur(array, array[i]) === 1) {
//       return array[i];
//     }
//   }
//   return false;
// }

// let nums = [2, 2, 1];
// console.log(singleNumber(nums));

// function intersection(arr1, arr2) {
//   let set1 = new Set();
//   for (let i = 0; i < arr1.length; i++) {
//     set1.add(arr1[i]);
//   }

//   set1 = Array.from(set1);

//   set2 = new Set();
//   for (let j = 0; j < arr2.length; j++) {
//     if (set1.includes(arr2[j])) {
//       set2.add(arr2[j]);
//     }
//   }

//   set2 = Array.from(set2);
//   return set2;
// }

// let nums1 = [1, 2, 2, 1],
//   nums2 = [2, 2];
// // let nums1 = [4, 9, 5],
// //   nums2 = [9, 4, 9, 8, 4];
// console.log(intersection(nums1, nums2));

// function plusOne(digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     } else {
//       digits[i] = 0;
//     }
//   }

//   let newNum = [];
//   newNum.push(...digits);
//   newNum.unshift(1);

//   return newNum;
// }
// let numsj = [1, 9, 7];

// console.log(plusOne(numsj));

// let input = [0, 1, 0, 3, 3, 12, 0, 0];

// function moveZeroes(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let index = 0;
//     let length = nums.length;

//     while (index < length - 1) {
//       if (nums[index] === 0) {
//         let temp = nums[index];
//         nums[index] = nums[index + 1];
//         nums[index + 1] = temp;
//       }

//       index++;
//     }
//   }

//   return nums;
// }
// console.log(moveZeroes(input));

// function intersection(arr1, arr2) {
//   let union = [];

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.includes(arr2[i])) {
//       union.push(arr2[i]);
//       var n = arr1.indexOf(arr2[i]);
//       let modifyArray = arr1.filter((num, index) => {
//         return index !== n;
//       });

//       arr1 = modifyArray;
//     }
//   }

//   return union;
// }

// let nums1 = [1, 2, 2, 1],
//   nums2 = [2, 2];
// // let nums1 = [4, 9, 5],
// //   nums2 = [9, 4, 9, 8, 4];
// console.log(intersection(nums1, nums2));

// function twoSum(nums, target) {
//   let n = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log(nums[i], nums[j]);
//       }
//     }
//   }
// }
// let nums = [2, 5, 5, 11],
//   target = 10;
// twoSum(nums, target);

let m = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

// for (let i = 0; i < m.length; i++) {
//   console.log(m[i]);
// }

// for (let i = 0; i < m.length; i++) {
//   console.log(m[i][i]);
// }
// console.log("--------------------------");
// for (let i = m.length - 1; i >= 0; i--) {
//   console.log(m[i]);
// }
// console.log("--------------------------");
// let count = 0;
// for (let i = m.length - 1; i >= 0; i--) {
//   console.log(m[i][count]);
//   // console.log(i);
//   count++;
// }

// function spiralPrint(m) {
//   let topRow = 0,
//     leftCol = 0,
//     btnRow = m.length - 1,
//     rightCol = m[0].length - 1;

//   while (topRow < btnRow && leftCol < rightCol) {
//     for (let col = 0; col <= rightCol; col++) {
//       console.log(m[topRow][col]);
//     }
//     topRow++;

//     for (var row = topRow; row <= btnRow; row++) {
//       console.log(m[row][rightCol]);
//     }
//     rightCol--;
//   }
// }

// spiralPrint(m);

// function reverseString(array) {
//   let end = s.length - 1;
//   let start = 0;
//   while (start < end) {
//     let temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;

//     end--;
//     start++;
//   }
//   console.log(s);
// }
// let h = ["h", "b", "e", "j"];
// reverseString(h);

function getOccurence(array, value) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      count++;
    }
  }

  return count;
}

// let ui = [2, 3, 3];
// getOccurence(ui, 2);

// function firstUniqueChar(s) {
//   let frequencies = {};

//   for (let i = 0; i < s.length; i++) {
//     if (frequencies[s[i]] === undefined) {
//       frequencies[s[i]] = 1;
//     } else {
//       frequencies[s[i]]++;
//     }
//   }

//   console.log(frequencies);

//   for (let j = 0; j < s.length; j++) {
//     if (frequencies[s[j]] === 1) {
//       return j;
//     }
//   }

//   return -1;
// }

// let s = "loveleetcode";
// //let s = "leetcode";
// firstUniqueChar(s);

// let ss = s.split("");

// let user = {};

// user["name"] = "ola";

// user["nam"] = "fla";
// console.log();

// for (let key in user) {
//   console.log(user[key]);
//   if (user[key] === undefined) {
//     console.log("yes");
//   }
// }

let x = [1, 3, 5, 6],
  target = 8;

// function twoSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         console.log(array[i], array[j]);
//       }
//     }
//   }
// }

// function twoSum(array, target) {
//   let hashTable = {};
//   for (let i = 0; i < array.length; i++) {
//     var currentElement = array[i];
//     var difference = target - currentElement;

//     if (hashTable[currentElement] !== undefined) {
//       return [i, hashTable[target - currentElement]];
//     } else {
//       hashTable[difference] = i;
//     }
//   }

//   return -1
// }

// console.log(twoSum(x, 8));

// function isAnagram(s, t) {
//   let tj = t.split("").sort().join("").toLowerCase();
//   let sj = s.split("").sort().join("").toLowerCase();

//   if (tj === sj) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let ss = "anagramb",
//   t = "nagaram";

// console.log(isAnagram(ss, t));

//let j = "A man, a plan, a canal: Panama";

// function isPalindrome(s) {
//   var re = /[^A-Za-z0-9]/g;
//   var lowRegStr = s.toLowerCase().replace(re, "");

//   var reverseStr = lowRegStr.split("").reverse().join("");

//   return reverseStr === lowRegStr;
// }

// console.log(isPalindrome(j));

// function longestPrefix(strs) {
//   if (strs.length === 0) return "";
//   let prefix = "";

//   for (let i = 0; i < strs[0].length; i++) {
//     let char = strs[0][i];

//     for (let j = 0; j < strs.length; j++) {
//       if (strs[j][i] !== char) return prefix;
//     }
//     prefix += char;
//   }

//   return prefix;
// }

// let sss = [];

// console.log(longestPrefix(sss));

function myAtoi(s) {
  // let trim = s.trim();
  // if (isNaN(s)) {
  //   return 0;
  // }

  // if (!isNaN(s[0])) {
  //   return parseInt(s);
  // }
  //if (parseInt(s) > Math.pow(-2, 31)) return Math.pow(-2, 31);
  if (!isNaN(parseInt(s))) {
    return parseInt(s);
  }
  return 0;
}

// console.log(typeof nn);
// let lp = "     12";
// let nm = lp.trim();
// // console.log(nm);
// console.log(myAtoi("   -42"));
// console.log(myAtoi("4193 with words"));
// console.log(myAtoi("words and 987"));
//console.log(myAtoi("-91283472332"));'''

// let h = new Map();
// h.set(1);
// h.set(2, "b");
// console.log(h.get(1));
// console.log(...h.entries());

// let ii = {};
// ii[1] = "a";
// ii['2'] = "b";
// ii["name"] = "ola";

// console.log(ii["name"]);

let jb = [10, 2,6],
  t = 16;

// function sm(jb, t) {
//   for (let i = 0; i < jb.length; i++) {
//     for (let j = i + 1; j < jb.length; j++) {
//       if (jb[i] + jb[j] === t) {
//         console.log(jb[i], jb[j]);
//       }
//     }
//   }
// }

// sm(jb, t);

// function twoSum(jb, t) {
//   let hash = {};

//   for (let i = 0; i < jb.length; i++) {
//     let diff = t - jb[i];
  
//     if (hash[jb[i]]) {
//       console.log('here'+hash[jb[i]])
//       //console.log(i, jb[i], hash[jb[i]], jb.indexOf(hash[jb[i]]));
//       return true;
//     } else {
//       hash[diff] = jb[i];
//     }

//     console.log(hash);
   
//   }
//   console.log(hash);
//   return false;
// }
// cl(twoSum(jb, t));

// let user1 = {}
// user1[6] = '1' 
// cl(user1[6])
// let jt = "the-stri#ola";

// function split(s) {
//   if (s.length === 0) return;
//   let re = /[^A-Za-z0-9]/g;
//   let str = s.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (re.test(s[i])) {
//       str[i + 1] = str[i + 1][0].toUpperCase();
//     }
//   }

//   let joinStr = str.join("");
//   let newStr = joinStr.replace(re, "");
//   return newStr
// }

// cl(split(jt));

// let reg = /[A-Za-z0-9]/g;
// cl(reg.test("a"));

// let strr = "hello";
// let nee = "";

// function strStr(haystack, needle) {
//   if (needle === "") return 0;
//   let h = haystack.indexOf(needle);
//   if (h >= 0) {
//     return h;
//   } else {
//     return -1;
//   }
// }

// cl(strStr(strr, nee));

cl(`hear ${Math.pow(-2,31)} and ${Math.pow(2,31)-1}`)

//cl(-2147483648 < 2147483647)