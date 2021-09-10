// ARRAY - DİZİLER

//let names =['sefa','merve','nurhan','omer'];

//let years =[1995 , 2007, 1971, 1965]

//let mix = ['soner',1970,'peren',1974,null,undefined,['sinema','tenis']]
/*
//get array item
console.log(names[0])
console.log(names[3])

//set array item
names[names.length] = 'ali';

//add item
years.push(1986);
years.unshift(1966)

//remove item
years.pop();
years.shift()

//indexof
let index =names.indexOf('merve')
console.log(index)

//reverse
names.reverse();

//sort
years.sort();


//concat
let vall =years.concat(names)
console.log(vall)
*/

//splice
//names.splice(2,0,'ismet')


//filter

//function over18(years){

//    let age = 2021 - years;
//return age >=18 }

/*console.log(over18(2005))

let val =years.find(over18);
console.log(val);

console.log(names);
console.log(typeof names);
console.log(names.length);*/




//console.log(years)
//console.log(typeof years);
//console.log(years.length);

//console.log(mix);
//-------------------------------------------------------------------------------------------------------
//ARRAYS DEMO

// bmw mercedes opel mazda için dizi oluştur

var car = ['bmw','mercedes','opel','mazda']
var newcar = new Array('bmw','mercedes','opel','mazda')

console.log(car);
console.log(newcar);
//dizi kaç elemanlıdır

console.log(car.length);

// dizinin ilk ve son elemanı nedir

console.log(car[0])
console.log(car[car.length-1])

// dizinin sonuna renault ekle
car[car.length] = 'renault';
console.log(car)

//dizinin başına toyota ekle
car.unshift('toyota');
console.log(car);


//opeli sil 
car.pop('opel');
console.log(car);

// dizi elemanlarını ters çevir
car.reverse();

//alfabetik sırala
car.sort();

//1 ,2 ,3 ,5, 60 dızısını sırala

var numbers = [1,5,3,2,60,42];

function compare(a,b) {

    if(a>b) return 1;
    if (a==b) return 0;
    if (a<b) return -1;


}

console.log (numbers.sort(compare))

//opel değeri dizinin elemanı mıdır
console.log(car.indexOf('opel'));
console.log(car);
console.log(car.includes('opel'));

//var str ="chevy,dacia" ifadesini diziye cevir

var str = "chevy,dacia"
var car2 =str.split(',')
console.log(car2)   

//olusan 2 dizi elemanlarını bir baska dizide birlestir.
var car3 = car.concat(car2);
console.log(car3 )

//olusturulan dizinin son 2 elemanını silin
console.log(car3.splice(6,8))
console.log(car3)


//bu bilgileri bir dizide birleştiriniz
//studentA  : yigit bilgin 2010
//studentB  : sena  turan  1999
//studentC  : ahmet turan  1998

var studentA = ['yigit','bilgin',2010]
var studentB = ['sena','turan', 1999]
var studentC = ['ahmet','turan',1998]


var students = [studentA,studentB,studentC];

console.log(students[0][0])
console.log(students[0][1])
console.log(students[0][2])
console.log(students)



