// linear search

// function linearSearch(array,target) {
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i]===target) {
// 			return true
// 		}
// 	}

// 	return false
// }

//  arr=[1,2,3,4]

// linearSearch(arr,3) //returns true
// linearSearch(arr,5) //returns false

// // console.log(linearSearch(arr1,'z'))

// function binarySearch(array,lowIndex,highIndex,value) {
// 	if (lowIndex > highIndex) return -1

// 	midIndex = Math.floor((lowIndex+highIndex)/2)

// 	if(value == array[midIndex]){
// 		return midIndex
// 	}

// 	else if (value > array[midIndex]) {
// 		return binarySearch(array,midIndex+1,highIndex,value)
// 	}

// 	else{
// 		return binarySearch(array,lowIndex,midIndex-1,value)
// 	}
// }
// console.log(binarySearch(arr,0,arr.length,4 ))

// function binarySearch(array,value) {
// 	let lowIndex = 0
// 	let highIndex = array.length-1

// 	while(lowIndex <= highIndex){
// 		let midIndex = Math.floor((lowIndex+highIndex)/2)
// 		if (value == array[midIndex]) {
// 			return midIndex
// 		} else if (value > array[midIndex]){
// 			lowIndex = midIndex + 1
// 		}else if(value<array[midIndex]){
// 			highIndex = midIndex -1
// 		}
// 	}

// 	return -1
// }

// array = [1,2,3,4,5,6,7,8]

// console.log(binarySearch(arr,4))

// function swap(array,index1,index2) {
// 	let temp = array[index1]
// 	array[index1]=array[index2]
// 	array[index2] = temp
// }

// function bubbleSort(array) {
// 	for (var i = 0; i < array.length; i++) {
// 		for (var j = 0; j <=i; j++) {
// 			if (array[i] < array[j] ) {
// 				swap(array,i,j)
// 			}
// 		}
// 	}

// 	return array
// }

// array=[4,8,2,1,3,10,6]
// console.log(bubbleSort(array))

// function partition(array,left,right) {
// 	pivot = array[Math.floor((left+right)/2)]

// 	while(left<=right){
// 		while(pivot > array[left]){
// 			left++
// 		}
// 		while(pivot < array[right]){
// 			right--
// 		}

// 		if (left <= right) {
// 			var temp = array[left]
// 			array[left] = array[right]
// 			array[right] = temp
// 			left++
// 			right--
// 		}
// 	}

// 	return left
// }

// function quickSortHelper(items,left,right) {
// 	var index
// 	if (items.length > 1) {
// 		index = partition(items,left,right)

// 		if (left < index-1) {
// 			quickSortHelper(items,left,index-1)
// 		}

// 		if (index < right) {
// 			quickSortHelper(items,index,right)
// 		}
// 	}

// 	return items
// }

// function quickSort(items) {
// 	return quickSortHelper(items,0,items.length-1)
// }

// console.log(quickSort([10,4,2,8,15]))

// function findTwoSum(array, sum){
//  var store = {};

// 	for(var i=0, i < array.length; i++){
// 		if(store[array[i]]){
// 		 return true;
// 		}else{
// 		store[sum-array[i]] = array[i];
// 		}
// 	}
//  return false;
// }

// function findTwoSum(array,sum) {
// 	var store={

// 	}

// 	for (var i = 0; i < array.length; i++) {
// 		if(store[array[i]]){
// 			console.log('yes')
// 			return true
// 		}else{
// 			store[sum-array[i]]=array[i]
// 			console.log(store)
// 		}

// 	}

// 	return false
// }

// console.log(findTwoSum([10,4,2,8,15],20))

// var array = ['a','b','c']
// array.unshift('ola')
// for (var i = 1; i < array.length; i++) {
// 	console.log(array[i],i)
// }

// let cost = [1,3,4,5,6]

// function iceCreamParlour(m,cost) {
// 	var newArray = []
// 	// cost.unshift('null')
// 	// console.log(cost)

// 	for (var i = 0; i < cost.length; i++) {
// 		for (var j=i+ 1; j < cost.length; j++) {

// 			if (cost[i]+cost[j] === m) {

// 					newArray.push(i+1,j+1)
// 				}
// 		}

// 	}

// 	return newArray
// }

// console.log(iceCreamParlour(6,cost))

var x = [1, 2, 3];
// var y = x.unshift(5)
// console.log(x)

// for (var i = 0; i < x.length; i++) {

// 	for (var j = i + 1; j < x.length; j++) {
// 		console.log(`x ${x[i]}  and j ${x[j]}`)

// 	}
// }

// function findTwoSum(array,sum) {
// 	var store={}
// 	var newArray =[]
// 	for (var i = 0; i < array.length; i++) {
// 		if(store[array[i]]){
// 			return true

// 		}else{
// 			store[sum-array[i]]=array[i]
// 			newArray.push(store)

// 		}
// 		 console.log(newArray)

// 	}

// 	return false
// }

// console.log(findTwoSum(x,4))

// function missingNumber(originallist,otherlist) {
// 	function getOccur(array,value) {
// 	var count=0;
// 		for (var i = 0; i < array.length; i++) {
// 				if (array[i]===value) {
// 					count++
// 				}
// 		}

// 	return count
// 	}
// 	var unique=[]

// 	for (var i = 0; i < originallist.length; i++) {
// 		if (getOccur(otherlist,originallist[i]) != getOccur(originallist,originallist[i]) ) {
// 			if (!unique.includes(originallist[i])) {
// 				unique.push(originallist[i])
// 			}
// 		}
// 	}

// 	unique.sort(function(a, b) { return a - b; });

// 	return unique
// }

// var originallist=[6,7,2,5,4,3,5,3]
// var otherlist = [7,2,5,3,5,3]

// // var originallist=[203, 204, 204, 205, 206, 207, 205, 208 ,203 ,206, 205, 206 ,204]
// // var otherlist = [203, 204,  207, 205, 208 ,203 ,206, 205, 206 ,204]
//  console.log(missingNumber(originallist,otherlist))

// function findOnlyOnce(array) {

// 	function getOccur(array,value) {
// 		var count = 0
// 		for (var i = 0; i < array.length; i++) {
// 			if (array[i]==value) {
// 				count++
// 			}
// 		}

// 		return count
// 	}

// 	unique = []

// 	for (var i = 0; i < array.length; i++) {
// 		if (getOccur(array,array[i])==1) {
// 			unique.push(array[i])
// 		}
// 	}

// 	return unique
// }

// arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8]

// console.log(findOnlyOnce(arr))

// function findOnlyOnce(arr, low, high) {
//  if (low > high) {
//  		return null;
//  }
//  if (low == high) {
//  		return arr[low];
//  }

//  var mid = Math.floor((high+low)/2);

//  if (mid%2 == 0) {
// 	 if (arr[mid] == arr[mid+1]) {
// 	 		return findOnlyOnce(arr, mid+2, high);
// 	 } else {
// 	 		return findOnlyOnce(arr, low, mid);
//  	}
//  }else
//  	if (arr[mid] == arr[mid-1]) {
//  		return findOnlyOnce(arr, mid+1, high);
//  } else {
//  		return findOnlyOnce(arr, low, mid-1);
// 	}

// }

// function findOnlyOnceHelper(arr) {
//  		return findOnlyOnce(arr, 0, arr.length);
// }

// console.log(findOnlyOnceHelper([ 1, 1, 2, 4, 4, 5, 5, 6, 6 ]));

// function binarySearch(array,lowIndex,highIndex,value) {
// 	if (lowIndex > highIndex) return -1

// 	midIndex = Math.floor((lowIndex+highIndex)/2)

// 	if(value == array[midIndex]){
// 		return midIndex
// 	}

// 	else if (value > array[midIndex]) {
// 		return binarySearch(array,midIndex+1,highIndex,value)
// 	}

// 	else{
// 		return binarySearch(array,lowIndex,midIndex-1,value)
// 	}
// }
// console.log(binarySearch(arr,0,arr.length,4 ))
// function cl(a) {
// 	console.log(a)
// }

// function balancedSums(array) {

// var lowIndex = 0
// var highIndex = array.length
// var midValue=array[Math.floor((lowIndex+highIndex)/2)]
// var midIndex = Math.floor((lowIndex+highIndex)/2)

//  // cl(midIndex)

// var lowArray = array.slice(lowIndex,midIndex)
//  // cl(lowArray)

// var highArray = array.slice(midIndex+1, array.length)
//  // cl(highArray)

// var lowArraySum = 0

// for (var i = 0; i < lowArray.length; i++) {
// 	lowArraySum+=lowArray[i]
// }

// // cl('yes'+lowArraySum)

// var highArraySum = 0

// for (var i = 0; i < highArray.length; i++) {
//    highArraySum+=highArray[i]
// }

// // cl('yh' + highArraySum)

// if (lowArraySum == highArraySum ) {
// 	return "YES"
// } else {
// 	return "NO"
// }

// }

// var array = [5,6,8,11]
//var array = [1,1,4,1,1]
//var array = [0,0,2,0]
//var array = [2,0,0,0]
//var array = [1]
//var array = [1,2,3]

// function balancedSumsHelper(array){
//     var lowIndex = 0
//     var highIndex = array.length-1

//     var lowArraySum = array[lowIndex]
//     var highArraySum = array[highIndex]

//     while (lowIndex != highIndex){
//         if (lowArraySum < highArraySum) {
//             lowIndex += 1
//             lowArraySum +=array[lowIndex]
//             cl('lowArraySum'+lowArraySum)
//             cl('lowIndex'+lowIndex)
//         } else {
//             highIndex -=1
//             highArraySum +=array[highIndex]
//             cl('highArraySum'+highArraySum)
//              cl('highIndex'+highIndex)
//         }
//     }

//     if (lowArraySum == highArraySum) {
//     	return "YES"
//     } else {
//     	return "NO"
//     }

//     // return lowArraySum == highArraySum

// }

// console.log(balancedSumsHelper(array))

function compareNumeric(a, b) {
  return a - b;
}

let arra = ["7", "12", "1", "6", "3"];
//let arra = [7,12,1,6,3]

// function bigSorting(unsorted) {

// 	unsorted.sort((a,b)=>a-b)

// 	for (var i = 0; i < unsorted.length; i++) {
// 		cl(unsorted[i])
// 	}

// 	return unsorted
// }

// cl(bigSorting(arra))

// function bigSorting(unsorted) {

//     unsorted.sort((a,b)=>a-b)
//     let newLine = unsorted.join('\n')
//     return newLine
// }

// cl(bigSorting(arra))

// function introTutorial(V, arr) {
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==V){
//             return i
//         }
//     }

//     return -1

// }

// cl(introTutorial('3',arra))

// let sort=[1,2,4,5,3]

// 1 2 4 3 5
// 1 2 3 4 5

// function insertionSort1(array) {
// 	let lastIndex = array.length-1
// 	let prevIndex = lastIndex-1

// 	let lastValue = array[lastIndex]
// 	let prevValue = array[prevIndex]

// 	while(lastValue < prevValue){
// 		array[lastIndex]=prevValue
// 		array[prevIndex]=lastValue
// 		lastIndex=lastIndex-1
// 		prevIndex=lastIndex-1
// 		lastValue=array[lastIndex]
// 		prevValue=array[prevIndex]
// 		cl(lastValue)
// 		cl(prevValue)

// 	}

// 	return array
// }

//  cl(insertionSort1(sort))

// function insertionSort1(array) {
// 	let lastIndex = array.length-1
// 	let prevIndex = lastIndex-1

// 	let lastValue = array[lastIndex]
// 	let prevValue = array[prevIndex]

// 	while(lastValue < prevValue){
// 		array[lastIndex]=prevValue
// 		array[prevIndex]=lastValue
// 		lastIndex=lastIndex-1
// 		prevIndex=lastIndex-1
// 		lastValue=array[lastIndex]
// 		prevValue=array[prevIndex]

// 		cl(array)
// 	}

// 	return array
// }

//  cl(insertionSort1(sort))

// let sort=[6,10,1,2,4,5,3]
// sort[2]=sort[2-1]
// let sort=[1, 4, 3, 5 ,6 ,2]

// // // 1=10
// // cl(sort)
//  function insertionSort(n,array) {

//  	for (var i = 1; i < array.length; i++) {
//  		let value = array[i]
//  		let hole = i

//  		while(hole > 0 && array[hole-1] > value){
//  			array[hole] = array[hole-1]
//  			hole = hole-1

//  		}

//  		array[hole] = value
//  		console.log(array)
//  	}

//  	return array
// }

// console.log(insertionSort(6,sort))

// function merge(leftArray,rightArray) {

// 	result=[]

// 	leftIndex = 0
// 	rightIndex = 0

// 	while(leftIndex < leftArray.length && rightIndex < rightArray.length){

// 			if (leftArray[leftIndex] < rightArray[rightIndex]) {
// 				result.push(leftArray[leftIndex])
// 				leftIndex++
// 			} else {
// 				result.push(rightArray[rightIndex])
// 				rightIndex++
// 			}
// 	}

// 	while(leftIndex < leftArray.length){
// 		result.push(leftArray[leftIndex])
// 		leftIndex++
// 	}

// 	while(rightIndex < rightArray.length){
// 		result.push(rightArray[rightIndex])
// 		rightIndex++
// 	}

// 	return result
// }

// function mergeSort(array) {

// 	if (array.length < 2) return array;

// 	let midIndex = Math.floor(array.length/2)

// 	let leftArray = mergeSort(array.slice(0,midIndex))
// 	let rightArray = mergeSort(array.slice(midIndex))

// 	return merge(leftArray,rightArray)
// }

//  console.log(mergeSort([20,6,3,1,1,5,6,7]))

// function findMedian(array) {
// 	let sortedArray = array.sort((a,b)=>a-b)
// 	let midIndex = Math.floor(sortedArray.length/2)
// 	cl(sortedArray)
// 	let value = array[midIndex]

// 	return value
// }

// console.log(findMedian([20,1,5,2,7]))

// function closestNumber(array) {

// 	let diff=[]
// 	var pairs

// 	let maxValue = Math.pow(10,7)

// 	sortedArray = array.sort((a,b)=>a-b)

// 	for (var i = 0; i < sortedArray.length-1; i++) {

// 		 let diff = sortedArray[i+1] - sortedArray[i]
// 		if (diff < maxValue) {

// 			pairs=[(sortedArray[i] + ' ' + sortedArray[i+1])]
// 			maxValue = diff
// 		}

// 		else if (diff == maxValue) {
// 			pairs.push((sortedArray[i] + ' ' + sortedArray[i+1]))
// 		}

// 	}

// 	return pairs
// }

//  var closeNum = [3,2,1,7]
//  // var closeNum =  [-20 ,-3916237 ,-357920 ,-3620601 ,7374819 ,-7330761 ,30,6246457,-6461594,266854]

// console.log(closestNumber(closeNum))

// let m = [3,6,1,8,4,8,9]
// let max = Math.pow(0,1)
// let r

// for (var i = 0; i < m.length; i++) {
// 	if (m[i] > max ) {
// 		r=[m[i]]
// 		max=m[i]
// 	}else if(m[i] == max){
// 		r.push(m[i])
// 	}

// }

// cl(r)

// let a = [17,28,30]
// let b = [99,16,8]

// function compare(alice,bob) {
// 	let ai = 0
// 	let bi = 0

// 	result = [0,0]

// 	while(ai < alice.length && bi < bob.length){
// 		if(alice[ai] < bob[bi]){
// 			result[1]+=1

// 		}else if(alice[ai] > bob[bi]){
// 			result[0]+=1

// 		}
// 		ai+=1
// 		bi+=1
// 	}
// 	return result
// }

// console.log(compare(a,b))

// function plusMinus(arr) {
// 	let av= arr.length
// 	let positive =0
// 	let negative = 0
// 	let zero = 0
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] < 0 ) {
// 			negative++
// 		} else if(arr[i] > 0){
// 			positive++
// 		}else{
// 			zero++
// 		}
// 	}

// 	 let pos=positive/av.toFixed(6)

// 	 let neg=negative/av

// 	 let zer=zero/av

// 	 console.log(pos.toFixed(6))
// 	 console.log(neg.toFixed(6))
// 	 console.log(zer.toFixed(6))
// 	// return [pos.toFixed(6),neg.toFixed(6),zer.toFixed(6)]

// 	// return arr={
// 	// 	pos:pos.toFixed(6),
// 	// 	neg:neg.toFixed(6),
// 	// 	zer:zer.toFixed(6)
// 	// }

// 	return (`${pos.toFixed(6)}\n${neg.toFixed(6)}\n${zer.toFixed(6)}`)

// }

// console.log(plusMinus([-4,3,-9,0,4,1]))

// let matrix = [
// 	[1,2,3],
// 	[4,5,6],
// 	[9,8,9]
// ]

// for (var i = 0; i < matrix.length; i++) {
// 	 // cl(matrix[i][i])

// 	for (var j = matrix[i].length-1; j >=0 ; j--) {
// 		cl(matrix[i][j])
// 	}
// }

// function diagonalDiff(arr) {

// 	let first_d_sum = 0
// 	let second_d_sum = 0
// 	let sum = 0;

// 	for (var i = 0, j=arr.length-1; i < arr.length,j >=0; i++,j--) {

// 		first_d_sum += arr[i][i]
// 		second_d_sum += arr[i][j]

// 	}

// 	sum = first_d_sum-second_d_sum

// 	if(sum >= 0){
// 		return sum
// 	}else if(sum < 0){
// 		return sum * -1
// 	}

// }

// cl(diagonalDiff(matrix))

// n=4

// for (var i = 1; i <= n; i++) {
// 	cl('#'.repeat(i))
// }

// for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i).padStart(n));
// }

// cl('n'.repeat(2) )

// let num = '1'
// let y = num.padStart(3,'h')
// cl(y)
// console.log("#".padStart(1));

// let mu= [1,2,3,4,5]

// function miniMaxSum(arr) {
//   	arr.sort()
//    let min=0
//    let max=0

//     for(let i= 0; i < arr.length-1; i++){
//         min+=arr[i]
//         max+=arr[i+1]
//     }
//     console.log(min,max)

// }

// console.log(miniMaxSum(mu))

// function maxValues(arr) {

// 	max=0
// 	count = 0
// 	for (var i = 0; i < arr.length; i++) {

// 		if(arr[i]> max){
// 			max=arr[i]
// 			count++
// 		}else if(arr[i] == max){

// 			count++
// 		}
// 	}

// 	return count
// }

// console.log(maxValues([3,2,1,3,4,3]))

// let apples = [2,3,-4]
// let oranges = [3,-2,-4]

// let startPoint = 7
// let endPoint = 10

// let appleLocation = 4
// let orangeLocation = 12

// let applesLand = []
// let orangesLand = []

// let orange = oranges.map((item)=>{
// 	var sumOrange = orangeLocation + item
// 	if(sumOrange >= startPoint && sumOrange <=endPoint ){
// 		orangesLand.push(sumOrange)
// 	}

// })

// console.log(orangesLand.length)

// for (var i = 0; i < apples.length; i++) {
//    applesLand.push(appleLocation+apples[i])
// }

// console.log(applesLand)
// var res= applesLand.filter((app)=>{
// 	return app >= 7 && app <=10
// })
// console.log(res.length)

// for (var i = 0; i < oranges.length; i++) {
//    orangesLand.push(orangeLocation+oranges[i])
// }

// console.log(orangesLand)

// var result= orangesLand.filter((app)=>{
// 	return app >= 7 && app <=10
// })
// console.log(result.length)

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
// 	let applesLand = []
// 	let orangesLand = []

// 		for (var i = 0; i < apples.length; i++) {
// 	   		applesLand.push(a+apples[i])
// 		}

// 		var res= applesLand.filter((app)=>{
// 			return app >= s && app <=t
// 		})

// 		console.log(res.length)

// 		for (var i = 0; i < oranges.length; i++) {
//    			orangesLand.push(b+oranges[i])
// 		}

// 		var result= orangesLand.filter((app)=>{
// 			return app >= s && app <= t
// 		})
// 		console.log(result.length)

// }

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
// 	let applesLand = []
// 	let orangesLand = []

// 		let appleArray = apples.map((item)=>{
// 			return a + item
// 		})

// 		var res= applesLand.filter((app)=>{
// 			return app >= s && app <=t
// 		})

// 		console.log(res.length)

// 		for (var i = 0; i < oranges.length; i++) {
//    			orangesLand.push(b+oranges[i])
// 		}

// 		var result= orangesLand.filter((app)=>{
// 			return app >= s && app <= t
// 		})
// 		console.log(result.length)

// }

// console.log(countApplesAndOranges(7,10,4,12,apples,oranges))

//let kag1 = 0
// for (var i = 0; i < 4; i++) {
// 	kag1=kag1 + 3

// }

// cl(kag1)

// let kag2=4
// for (var i = 0; i < 4; i++) {
// 	kag2=kag2 + 2
// }

// cl(kag2)

// 0 2 5 3

// let kag1 = 0
// for (var i = 0; i < 5; i++) {
// 	kag1=kag1 + 2

// }

// cl(kag1)

// let kag2=5
// for (var i = 0; i < 5; i++) {
// 	kag2=kag2 + 3
// }

// cl(kag2)

// function kangaroo(x1, v1, x2, v2) {
// 	var loopVariable = x1 + x2
// 	let result
// 	if (x2 > x1 && v2 < v1) {
// 		for (var i = 0; i < loopVariable; i++) {
// 		x1 = x1+v1
// 	}

// 	for (var i = 0; i < loopVariable; i++) {
// 		x2 = x2+v2
// 	}

// 		if (x2 === x1) {
// 			result="YES"
// 		}else{
// 			result="NO"
// 		}
// 	}else{
// 		result = "NO"
// 	}

// 	return result
// }

// console.log(kangaroo(0,2,5,3))

// function breakingRecords(scores) {

// 	let max = scores[0]
// 	let min = scores[0]
// 	let mincount = 0
// 	let maxcount=0

// 	for (var i = 0; i < scores.length; i++) {
// 		if (scores[i] < min) {
// 			mincount++
// 			min = scores[i]
// 		}else if(scores[i] > max){
// 			maxcount++
// 			max = scores[i]
// 		}else{
// 			mincount+=0
// 			maxcount+=0
// 		}
// 	}

// 	return [maxcount,mincount]

// }
// scores=[3, 4, 21 ,36, 10, 28 ,35, 5 ,24, 42]

// cl(breakingRecords(scores))

// let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
// // 	let lower_case = "abcdefghijklmnopqrstuvwxyz".split('')

// x=upper_case.includes('AB')
// cl(x)

// let strin = "JDARZ ola"
// const regex = /[a-zA-Z]/
// const isExisting = regex.test(strin)
// console.log(isExisting)

// function regexTest(s,k) {
// 	let	regex = /[a-cA-C]/
// 	isExisting =  regex.test(s)

// 	return isExisting
// }

// console.log(regexTest('a'))

// function panagram(s){

// 	const regex = /[a-zA-Z\s]/
// 	// const isExisting = regex.test(string)
// 	// console.log(isExisting)

// 	let alphalength = 26

// 	let count = 0
// 	let unique = []

// 	for (var i = 0; i < s.length; i++) {
// 		if (regex.test(s[i])) {
// 			if(!unique.includes(s[i])){
// 				unique.push(s[i])
// 			}
// 		}
// 	}

// 	let arr = unique.filter((item)=>{
// 		return item.trim() !== ""
// 	})

// 	if (arr.length < alphalength ) {
// 		return "not pangram"
// 	}else{
// 		return "pangram"
// 	}

// }

// cl(panagram("We promptly judged antique ivory buckles for the prize"))
// cl(panagram("We promptly judged antique ivory buckles for the next prize"))

// let d = [3,1]
// let l = [5,2,8]
// let bu =10

// let total = []

// function maxx(arr) {
// 	max=arr[0]
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			max=arr[i]
// 		}
// 	}

// 	return max

// }

// for (var i = 0; i < d.length; i++) {
// 	for (var j = 0; j < l.length; j++) {
// 		// console.log(d[i]+l[j])
// 		if (d[i]+l[j] < bu) {
// 			// console.log(d[i]+l[j])
// 			total.push(d[i]+l[j])
// 		}
// 	}
// }

// console.log(maxx(total))

// function getMoneySpent(keyboards, drives, b) {

// 	let total = []

//     function maxx(arr) {
// 	max=arr[0]
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			max=arr[i]
// 		}
// 	}

// 	return max

// 	}

// 	for (var i = 0; i < keyboards.length; i++) {

// 		for (var j = 0; j < drives.length; j++) {

// 			if (keyboards[i]+drives[j] <= b) {
// 				total.push(keyboards[i]+drives[j])
// 			}
// 		}

// 	}

// 	if (!total.length) {
// 		return -1
// 	}else{
// 		return maxx(total)
// 	}

// }

// console.log(getMoneySpent(4,5,5))
// console.log(getMoneySpent(d,l,bu))

// function catAndMouse(x, y, z) {

// 	let catA = Math.abs(z-x)
// 	let catB = Math.abs(z-y)

// 	if (catA < catB) {
// 		return "Cat A"
// 	} else if(catA > catB){
// 		return "Cat B"
// 	}else{
// 		return "Mouse C"
// 	}

// }

// console.log(catAndMouse(1,3,2))

// function beautifulDays(i, j,k) {
// 	let count = 0
// 	for (var m = i; m <=j; m++) {
// 		var addMtoString = m+""
// 		//console.log(addMtoString)
// 		var revM = (addMtoString.split("").reverse().join(""));
// 		//console.log(revM)
// 		var result=(Math.abs((revM-m) % 6))
// 		if (result === 0) {
// 			count++
// 		}

// 	}

// 	return count

// }

// //console.log(beautifulDays(20,23,6))
// console.log(beautifulDays(13,45,3)) //33

// function hurdleRace(k, height) {

// 	max=height[0]
// 	for (var i = 0; i < height.length; i++) {
// 		if (height[i] > max) {
// 			max=height[i]
// 		}
// 	}
// 	var doses
// 	if (max > k) {
// 		doses = max-k
// 	} else {
// 		doses=0
// 	}

// 	return doses

// }

// var h = [1,6,3,5,2]

// console.log(hurdleRace(4,h))

// j=[1,2,3,4]
// let v= j.filter((item,idx)=>{
// 	return idx < 2
// })
// console.log(v)

// function reverses(n) {
// 	var addMtoString = n+""
// 	let v = addMtoString.split("").reverse().join("")
// 	return v
// }

// console.log(reverses(2))

// function beautifulDays(i, j, k) {

// 	function reverses(n) {
// 	var addMtoString = n+""
// 	let v = addMtoString.split("").reverse().join("")
// 	return v
// 	}

// 	let count = 0
// 	for (var d = i; d <= j; d++) {
// 		let subVal = Math.abs(d - reverses(d))
// 		let result = subVal % k
// 		console.log(result)
// 		if (result===0) {
// 			count++
// 		}

// 	}
// 	return count
// }

// console.log(beautifulDays(20,23,6))

// console.log((100%10))

// let movies = ['a','b','c','d']
// let nominated = ['d','e','a']

// const m = [1,2,3]
// const n = [4,5,1]
// console.log(n)
//const intersection = movies.filter(element => nominated.includes(element));
// const intersection = m.filter(element => n.indexOf(element) !== -1)
// console.log(intersection)

// function array(array,val) {

// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i] ===val) {

// 		}
// 	}
// }

// function linearr(array,target) {
// 	for (var i = 0; i < array.length; i++) {
// 		array[i]
// 		if(array[i]==target){
// 			return target
// 		}
// 	}

// 	return false
// }

// console.log(linearr(m,1))

// let results = m.filter(function(item, index, array) {

// });

// let results = array.filter((item)=>{
// 	return item !==itemId
// })

// function saveThePrisoner(n, m, s) {

// 	let neww = []

// 	for (var i = s; i <=n; i++) {

// 		neww.push(i)
// 	}

// 	for (var j = 1; j <=n; j++) {
// 		neww.push(j)
// 	}

// 	let b = neww.slice(0,m)

// 	let lastItem = b[b.length-1]

// 	return lastItem.toString()
// }

// saveThePrisoner(3,7,3)

// function mergeArray(r,l) {
// 	let rightIndex = 0;
// 	let leftIndex = 0
// 	let rl = r.length
// 	let ll = l.length
// 	let union = []

// 	while( rightIndex < rl && leftIndex < ll ){

// 		if(r[rightIndex] < l[leftIndex]){
// 			union.push(r[rightIndex])
// 			rightIndex++
// 		}else{
// 			union.push(l[leftIndex])
// 			leftIndex++
// 		}
// 	}

// 	while(rightIndex < rl){
// 		union.push(r[rightIndex])
// 		rightIndex++
// 	}
// 	while(leftIndex < ll){
// 		union.push(l[leftIndex])
// 		leftIndex++
// 	}

// 	return union
// }

// let mt = [1,3,5]
// let tm = [2,3,4]
//console.log(mergeArray(mt,tm))

// const second = ()=>{
// 	console.log("second")
// }

// const first = ()=>{
// 	console.log("hey there")
// 	second()
// 	console.log("end")
// }

// first()

// array = [2,7,11,15], target = 9

// function findTwoSum(nums, target){
// 	let obj = {}
// 	for (let i = 0; i < nums.length; i++) {
// 		obj[nums[i]] = nums[i]
// 		if (obj[nums[i]] + nums[i] === target) {
// 			return []
// 		}
// 	}
// }

// let example ={
// 	 name: 'ola',
// 	age: 22
// }

// let obj={}

// obj.name = "ola"
// obj["age"] = 22

// console.log(obj["name"])

// function twoSum(array, target) {
// for (let i = 0; i < array.length; i++) {
// const diffIndex = array.indexOf(target - array[i]);
// if (diffIndex >= 0 && diffIndex !== i) {
// return [i, diffIndex];
// }
// }
// return [];
// }

// 2022-06-01T00:00:00.000+00:00

// const concate=(date)=>{
// 	let x = date+"T00:00:00.000+00:00"
// 	console.log(x)
// }

let serviceUser = [
  {
    _id: "629fae99aaab9647f8516ca4",
    name: "Annie Kirton",
  },
  { _id: "62a97f88ccfc4a661046f7eb", name: "Ade" },
  {
    _id: "62a0fd397458d73300cc2cbb",
    name: "Dolapo",
  },
];

let serviceUserToVisit = [
  "629fae99aaab9647f8516ca4",
  "62a97f88ccfc4a661046f7eb",
];

let r = serviceUserToVisit.map((l) => {
  serviceUser.map((i) => {
    if (i._id.includes(l)) {
      return i.name;
    }
  });
});

// let result = serviceUserToVisit.map((i) => {
//   return i;
// });
let res = serviceUser
  .map((i) => {
    return i;
  })
  .filter((j) => {
    return j._id === "629fae99aaab9647f8516ca4";
  })
  .map((m) => {
    return m.name;
  });
// .filter((i)=>{

// })

// console.log(result);
// console.log(res);

function filterr(arr) {
  let newArray = [];

  for (let index = 0; index < arr.length; index++) {
    serviceUser
      .map((i) => {
        return i;
      })
      .filter((j) => {
        return j._id === arr[index];
      })
      .map((m) => {
        return newArray.push(m);
      });
  }
  return newArray;
}

// for (let i = 0; i < serviceUserToVisit.length; i++) {
// 	filterr

// }

// console.log(filterr(serviceUserToVisit));

// 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

// let a = ['a', 'b', 'c']
// var obj = {}
// for(let i = 0; i < a.length; i++){

//   obj[i]=a[i]
// }
// // let obj = {}
// // obj[1] = 'a'
// // obj[2] = 'b'
// console.log(obj)

//let nums = [2, 7, 9, 11, 15];
// let target = 9

// function twoSum(array , target) {
//   let obj = {}

//   for (let i = 0; i < array.length; i++) {
//    obj[i] = array[i];

//    let diff = target - array[i]

//     if(Object.values(obj).includes(diff)){
//       console.log(diff)
//       let x = array.findIndex(j => j === diff)

//       return [diff,array[i]]
//    }

//   }
//  return 'no match'
// }
// console.log(twoSum(nums,target))

// function searchItemInArray(array, item){
//   for(let i = 0; i<array.length; i++){
//     if(array[i] === item){
//       return true
//     }
//   }

//   return false
// }

// console.log(searchItemInArray(nums,2))

// function reverseArrayInPlace(array) {
//   let startPoint = 0;
//   let endPoint = array.length - 1;

//   while (startPoint < endPoint) {
//     let prevElement = array[startPoint];
//     array[startPoint] = array[endPoint];
//     array[endPoint] = prevElement;

//     startPoint++;
//     endPoint--;
//   }

//   return array;
// }

// function reverseArray(array) {
//   let newArray = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }

// let neww = ["a", "b", "c"];
// console.log(reverseArray(neww));

function findMaxConsecutiveOnes(array) {
  let counter = 0;
  let maxValue = 0;
  let store = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      store.push(array[i]);
      counter += 1;
    } else {
      store = [];
      counter = 0;
    }
    if (counter > maxValue) {
      maxValue = counter;
    }
    console.log(store);
  }
  console.log(maxValue);
}
//let numm = [1, 1, 0, 1, 1, 1];
//let numm = [1, 0, 1, 1, 0, 1];
// console.log(findMaxConsecutiveOnes(numm));

// find the average of all sub-array of 5 contiguous element

// let array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
// let k = 5;

// function averageArraySum(array, k) {
//   let windowStart = 0;
//   let windowEnd = 0;
//   let windowSum = 0;
//   let averageResult = [];

//   for (windowEnd; windowEnd < array.length; windowEnd++) {
//     windowSum = windowSum + array[windowEnd];

//     if (windowEnd >= k - 1) {

//       averageResult.push(windowSum / k);
//       windowSum = windowSum - array[windowStart];
//       windowStart = windowStart + 1;
//     }
//   }

//   return averageResult;
// }

// console.log(averageArraySum(array, k));

// function maxSumArray(array, k) {
//   let windowStart = 0;
//   let windowEnd = 0;
//   let windowSum = 0;
//   let maxSum = 0;
//   for ( windowEnd; windowEnd < array.length; windowEnd++) {
//     windowSum += array[windowEnd];

//     if (windowEnd >= k - 1) {
//       if (windowSum > maxSum) {
//         maxSum = windowSum;
//       }

//       windowSum = windowSum - array[windowStart];
//       windowStart += 1;
//     }
//   }

//   return maxSum;
// }

// let a = [2,1,5,1,3,2]
// let k =3

// console.log(maxSumArray(a,k))

// function smallestSubArraySum(array, s) {
//   let minLength = Number.MAX_VALUE;
//   let windowStart = 0;
//   let currentWindowSum = 0;

//   for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
//     currentWindowSum = currentWindowSum+array[windowEnd];

//     while (currentWindowSum >= s) {
//       minLength = Math.min(minLength, windowEnd - windowStart + 1);
//       currentWindowSum = currentWindowSum - array[windowStart];
//       windowStart = windowStart + 1;
//     }
//   }

//   return minLength < Number.MAX_VALUE ? minLength : 0;

// }
// console.log(smallestSubArraySum([1, 1, 1, 0, 1, 2], 7));

const averageSubArraySum = (array, k) => {
  let windowStart = 0;
  let currentWindowSum = 0;
  let averageSub = [];

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    currentWindowSum = currentWindowSum + array[windowEnd];
    console.log(currentWindowSum);
    if (windowEnd >= k - 1) {
      let result = currentWindowSum / 5;
      averageSub.push(result);
      currentWindowSum = currentWindowSum - array[windowStart];
      windowStart = windowStart + 1;
    }
  }
  return averageSub;
};
// console.log(averageSubArraySum([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

const maxSumSubarray = (array, k) => {
  let maxSum = 0;

  let currentWindowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    currentWindowSum = currentWindowSum + array[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, currentWindowSum);
      currentWindowSum = currentWindowSum - array[windowStart];

      windowStart = windowStart + 1;
    }
  }
  return maxSum;
};
//console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));

function passwordIndex(password, number) {
  let modifiedNumber = number.split("");

  let appendPwd = "";

  for (let index = 0; index < modifiedNumber.length; index++) {
    // console.log(password[Number(modifiedNumber[index])]);

    appendPwd += password[Number(modifiedNumber[index])];
  }

  console.log(appendPwd);
}

//console.log(passwordIndex('oladimeji', '024'))
// let p = 'femi'
// let index = Math.floor(Math.random() * p.length + 1)
// console.log(index)
// console.log(p[index-1])

// let nums = [12,345,2,6,7896]
const evenNumber = (nums) => {
  let evenNumbercount = 0;

  for (let index = 0; index < nums.length; index++) {
    let lengthOfEachItem = Array.from(String(nums[index])).length;

    if (lengthOfEachItem % 2 === 0) {
      evenNumbercount++;
    }
  }

  return evenNumbercount;
};

//console.log(evenNumber([555,901,482,1771]))

//console.log(Array.from( String(12)).length)

// const squaresArray = (nums) => {
//   let result = nums.map((num) => num ** 2);
//   return result.sort((a, b) => a - b);
// };
// console.log(squaresArray([-4, -1, 0, 3, 10]));

// let j = [16, 1, 0, 9, 100];
// console.log(j.sort());

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

// let nums1 = [1];
// let nums2 = [];

const merge = (nums1, nums2) => {
  // let mergeArray = nums1
  //   .concat(nums2)
  //   .sort((a, b) => a - b)
  //   .filter((item) => item !== 0);
  // return mergeArray
};

//console.log(merge(nums1, nums2));

// const insertArrayAttheEnd=(array, n)=>{

//   array[array.length] = n

//  return array
// }

// console.log(insertArrayAttheEnd([1,2,3],4) )

// const insertArrayAttheBegining =(array, n)=>{

//   array[array.length] = n

//  return array
// }

// console.log(insertArrayAttheEnd([1,2,3],4) )

const insertItemByIndex = (array, position, n) => {
  let startPoint = 0;

  let prevItem;

  // while (startPoint <= position){

  //   if(startPoint === position){

  //     prevItem = array[startPoint]
  //     array[startPoint] = n
  //     array[startPoint + 1] = prevItem
  //   }
  //   startPoint++
  // }
  if (position > array.length) return 'out of index range'
  while (startPoint <= position) {
    if (startPoint === position) {
      prevItem = array[startPoint];
      array[startPoint] = n;
      array[startPoint + 1] = prevItem;
    }
    startPoint++;
  }

  return array;
};
let arr = ["a", "b", "c", "d", "e"];

console.log(insertItemByIndex(arr, 5, "n"));
