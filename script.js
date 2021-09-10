// console.log("merhaba");
// console.log(1234);
// console.log(true);
// console.log([1,2,3]);
// console.error("hata olustu");
// console.warn("bir uyarı olustu");

// // yorum satırı
// /* yorum aralıgı */

// console.clear();



//Değişkenler2

//var age;
//console.log(age);

//age =20;
//console.log(age);

//var fullName = 'sefa ozer';
//console.log(fullName);

//fullName ='Merve ozer';
//console.log(fullName)

//degısken tanımlama kuralları
//- sayısal ifade ile başlayamaz

//var yas1;
//ar _yas;
//var $yas;

//komut isimleri ile tanımlama yapılamaz

// değişken birden fazla kelime içeriyorsa alt çizgi ile bağlayabiliriz
//case sensitive ( büyük küçük harf duyarlılıgı var)

//var adSoyad='sefa ozer';
// AdSoyad ='sefa ozer';


//var , let , const // vari ile let ortak kullanılabilir

//const email ='abc@gmail.com'
//console.log(email);

// const sabit bir değişken tutar deiştirilmek istenirse hata verir


//------------------------------------------------------------------------------------------------------------



//DERS 3 DEĞİŞKEN TİPLERİ
/* Primitive Tipler

    //String
    let firstName='Özer';

    //number
    let age = 20;
    let money =10.5;

    //Boolean 
    let isActive =true;


    //null
    let job=null;


    //undifined
    let car;



    
//Reference Tipler

    let names=['ahmet','ahmet','veli'];

   

    let address = {
        city:'çorum',
        country:'turkey'
    }

    var calculateAge = function(){
        return 0;
    }

    console.log(typeof calculateAge);

    //tur donusumleri



let num1 = Number ('10');
let num2 = Number ('20');

let total = num1+ num2;

console.log(total);
console.log(typeof total);


let val ;
//number to string

val = String(10);

console.log(val);
console.log(typeof val);
console.log(val.length)


//bool to string


val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length)



// object to string

val = String (new Date());

console.log(val);
console.log(typeof val);
console.log(val.length)

//array to string

val = String([1,2,3,4]);

console.log(val);
console.log(typeof val);
console.log(val.length)



//toString()

val = (10).toString();
val = (true).toString();

console.log(val);
console.log(typeof val);
console.log(val.length)


// String to Number

val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a')

//parseInt
//parseFloat

val=parseInt('10')
val=parseInt('10.5')
val=parseFloat('10.66')


console.log(val);
console.log(typeof val);
console.log(val.toFixed());
*/


//------------------------------------------------------------------------------------------------------------*/


 /* //Operatörler

let val;

const a=10;
const b=5;
let c=2;
const d= 10;


// 1-Aritmatik Operatörler

val=a+b;
val=a-b;
val=a*b;
val=a/b;
val=a%b;   //mod alma

val=c++;
val=++c;
val=c--;

// 2-Atama Operatörleri

val =a;
val+= a;  // val = val + a

val-=a; // val = val - a






// 3-Karşılastırma Operatörleri
val = a==b ;
val = a==d;
val = a===d;  // hem değer kontrolu hem tip kontrolü yapılır;

val =5=='5';

val = 5==='5';

val = a>b;

val = a>=b;





// 4-Mantıksal Operatörler


    // && (and)

  val=(a>b)&&(a>c); 

    // || (or)
    // ! (not)



console.log(val);
console.log(typeof val);
*/


//---------------------------------------------------------------------------------------------------------

//ÖRNEK UYGULAMA

/* let indexCan;
let indexAda;



const kgCan = 50;
const kgAda = 40;

const boyCan =1.65;
const boyAda =1.86;


indexCan = (kgCan) / (boyCan*boyCan);
indexAda = (kgAda) / (boyAda*boyAda);

console.log(indexAda,indexCan)
*/


//------------------------------------------------------------------------------------------------------



//DATA OBJECT
/*let d = new Date();
let birthday = new Date(1995,5,7);





//set methods
// d.setFullYear(2020);
//  d.setMonth(5);                                                                                                                                                                                                                                                                                                                      




// get methods


console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(typeof d)

console.log(d.getFullYear()-birthday.getFullYear());
*/


//-------------------------------------------------------------------------------------------------------

// Dates örnek
/*let d = new Date();
console.log(d);

console.log(d.getMonth()+1);
console.log(d.getDate());
console.log(d.getFullYear());



var dtA = new Date('8/24/2010 14:50:10');
var dtB = new Date(2010,7,24,14,50,10)

console.log(dtA);
console.log(dtB);


// 1/1/1990 1 gün öncesi
var dtC = new Date('1/1/1990');
var dayOfMonth= dtC.getDate();
dtC.setDate(dayOfMonth-1);

console.log(dtC);
// 2 tarih arasındaki süre
var start = new Date('1/1/1990');
var end = new Date('1/1/1991')

var milisecond = end - start ;
var saniye = milisecond / 1000;
var dakika = saniye /60;
var saat =  dakika / 60
var gün = saat / 24;



console.log('milisecond :'+ milisecond);
console.log (saniye);
console.log(dakika);
console.log(saat);
console.log(gün);

//yas hesaplama

var birthday = new Date('6/7/1995');
var yasFarkı =Date.now() - birthday.getTime();
var ageDate= new Date(yasFarkı)

console.log(ageDate.getFullYear()-1970);
*/

//-----------------------------------------------------------------------------------------------------------


//NUMBER- MATEMATİKSEL İŞLEMLER
/*

let val;
//val=Number('10');
//val=parseInt('a10a'); 

//val = isNaN('10')

var num = 10.123455
val = num.toPrecision(2);
val = num.toFixed(5);

val = Math.PI;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.6);
val = Math.sqrt(49)
val = Math.pow(2,3);
val =Math.abs(-200);
val = Math.min(1,2,3,4,5);
val = Math.max(1,23,45,6,4,34)
val =Math.floor( Math.random()*100+1);//rastgele resim yollamak istediğinde kullanılabilir.





console.log(val);
console.log( typeof val)

//NUMBER UYGULAMALAR

var num = 15.123456789;
//3 basamakta sınırla
console.log( num.toPrecision(3))
//ondalık kısmı 3 basamakta sınırla
console.log( num.toFixed(3))
//en yakın sayıya yuvarla
console.log( Math.round(num))
//aşağı yuvarla
console.log(Math.floor(num))
//yukarı yuvarla
console.log( Math.ceil( num))
//1,2,10,56,29 en küçük ve en büyüğü
console.log( Math.min(1,2,10,56,29))
console.log( Math.max(1,2,10,56,29))
// sayı aralığını kullanıcının belirlediği rastgele sayı üret
var min = 50;
var max =100;

console.log(Math.floor(min+Math.random()*(max-min)));

//bir personelin yaptiği mesaiye göre aldığı maaş
//brüt maas :3700;
//brüt mesai :10.3;
//ağustos ayı toplam 42 saat mesai ise brüt maaş nedir?
//brüt üzerinden kesinti %25 ise net maaş nedir?


var brüt = 3700 ;
var mesai = 10.3;
var mesaisüresi =42;


var toplamBrütMaaş = brüt + (mesai*mesaisüresi);
var toplamNetMaas = toplamBrütMaaş-((toplamBrütMaaş/100)*25)

console.log(toplamBrütMaaş)

console.log(Math.floor (toplamNetMaas));

*/

//----------------------------------------------------------------------------------------------------------


//STRİNG İŞLEMLERİ
//string concatenation

/*

const firstName ='Sefa';
const lastName = 'OZER';
const age =35;
let hobbies= 'sinema,spor,kitap'
let val;


val = firstName+ ' '+lastName;
val = 'Sefa'
val += ' OZER'

val = ('benim adım '+ firstName+' '+lastName+ ' yaşım '+ age+ ' Çorum\'da yasıyorum');

//string concat
val = firstName.concat(' ' ,lastName);




//string uppercase - lowercase
val = val.toUpperCase();

val = val.toLowerCase();

//string replace
val = val.replace('sefa','merve')


//trim
val= val.trim()

//val = val.indexOf('s')

//substring
//val=val.substring(0,8);

//slice 
//val =val.slice(0,5)


//string length
//val = val.length;

val = hobbies.split(',')

console.log(val)
console.log(typeof val)

*/

//DEMO STRİNG
/*
var sentence = "asfkjsdhsgkd sk-djl ksd aşlsk jaşs lasş daşsl kasşl kaeo aoljkapo jkso akso kdaşs.";

var url = "http://youtube.com video oynatma sitesi";


//cumle kac karakter 
console.log( sentence.length);
//kac kelimeden olusuyor
console.log( sentence.trim().split(' ').length);
//cumleyi büyük harfe çevir
console.log( sentence.toLowerCase());
console.log(sentence.toUpperCase());

//bastaki ve sondaki boslukları sil
console.log( sentence.trim());

//cumle içindeki - karakterini sil 
console.log(sentence.replace('-',''));

//url içindeki str kısmını çıkartınız.
var str ='http://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));

//url hangi protokolü kullanmaktadır
console.log(url.startsWith('http'))
console.log(url.startsWith('https'))

//url com ifadesi içeriyor mu
console.log(url.indexOf('.com'));
console.log(url.includes('.com'))

//url string ifadesini gecerli bir url olarak düzenleyiniz
console.log(url.toLowerCase()
                .replace(/ /g,'-') //url içindeki bütün boşluk karakterleri - ile değiştirir
                .replace(/ı/g,'i')
                .replace(/ü/g,'u')
                );

*/



//----------------------------------------------------------------------------------------------------------

//TEMPLATE LİTERALS

const fullName = 'Sefa OZER'
const city = 'CORUM'
const birthday = 1995;

let val  ;


val = 'my name is ' + fullName +
' I\'m '+(2021-birthday )+ ' years old' + 
' I live in ' +city ;


val =`my name is ${fullName} I'm ${2021-birthday} years old and I live in ${city}` 

console.log(val);











































