                        // =================
                        //     lesson2   //
                        // =================

// let num = 266219;
// let res = 1;
// num.toString().split('').forEach(function(el) {
//     res *= el;
// });
// console.log(res); 

// let tri = res**3;
// console.log(tri);

// console.log(String(tri).slice(0, 2));
//
//
//

                        // =================
                        //     lesson3   //
                        // =================

const lang = document.documentElement.lang;                 
    if (lang == 'ru') {
        var dni = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    }
    if (lang == 'en') {
        dni = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    }
alert(dni);

switch (lang) {
      case 'ru':
         alert('оно работает');
         break
      case 'en':
        alert('кажись язык англ');
         break
      default:
     console.log('язык не понятен');  
}

let lang_array = [];
lang_array['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
lang_array['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(lang_array[lang]);

let name = prompt('Введите имя', 'Витя');
let nampers = (name == ['Артем']) ? 'директор' : (name == ['Александр'] ) ? 'преподаватель' : 'студент';
console.log(nampers);