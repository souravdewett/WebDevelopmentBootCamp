var num = -10 ;
console.log("printing all the numbers between -10 and 19");
while( num < 20){
	console.log(num);
	num++;
}

var num = 10 ;
console.log("printing all the even numbers between 10 and 40");
while(num <= 40){
	if(num % 2 === 0){
	console.log(num);
	}
	num++;
} 

var num = 300 ;
console.log("printing all the odd numbers between 300 and 333");
while(num <= 333){
	if(num % 2 !=0){
		console.log(num);
	}
	num++;
}

var num = 5 ;
console.log("printing all the numbers divisible by 5 and 3 between 5 and 50");
while(num <= 50){
	if(num % 5 === 0 && num % 3 === 0){
		console.log(num);
	}
	num++;
}