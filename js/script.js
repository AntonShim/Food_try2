'use strickt';

window.addEventListener('DOMContentLoaded', () => {

   const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items'),
      pepper = document.querySelector('.pepper'),
      modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');


   // ================
   //tabs
   // функция чтобы скрыть вообще весь контент
   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.add('hide'); // в css - это дисплей нон
         item.classList.remove('show', 'fade');
      });
      // так же, если скрыт контент, то убирается актив
      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }
   // теперь показываем контент i и присваеваем активный класс
   function showTabContent(i = 0) { // здесь мы присвоили сразу к i значение первое по умлочанию 
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent();

   // теперь делаем событие клик в табе 
   tabsParent.addEventListener('click', (event) => { //добавляем событие
      const target = event.target; // чтобы не писать постоянно длинный even.target даем ему конст

      if (target && target.classList.contains('tabheader__item')) { //указывем куда именно нужно тыкнуть
         tabs.forEach((item, i) => { //перебираем псевдомассив, чтобы найти куда тыкнул пользователь (i)
            if (target == item) {
               hideTabContent();
               showTabContent(i); //  и вызываем 2 эти фукнции потому что надо скрыть и показать i     
            }
         });
      }
   });

   //=======================
   // Timer 41 урок

   const deadline = '2021-07-31 00:00'; //пишем дату к которой будет идти отсчет

   function getTimeRemaining(endtime) { // высчитываем остаток
    const t = Date.parse(endtime) - Date.parse(new Date()), //высчитываем разницу в млсек
       days = Math.floor(t / (1000 * 60 * 60 * 24)),
       hours = Math.floor((t / (1000 * 60 * 60) % 24)),
       minutes = Math.floor((t / 1000 / 60) % 60),
       seconds = Math.floor((t / 1000) % 60);

//сейчас все эти данные находятся внутри функции и чтобы их использовать снаружи, возвращем обьект:
    return { 
       'total': t,
       'days': days,
       'hours': hours,
       'minutes': minutes,
       'seconds': seconds
    };
 }

 function getZero(num) { //функция которая вставляет 0 перед цифрами от 1-9
    if (num >= 0 && num < 10) {
       return `0${num}`;
    } else {
       return num;
    }
 }

 function setClock(selector, endtime) { //функция которая вставляет наше значение
    const timer = document.querySelector(selector),
       days = timer.querySelector('#days'),
       hours = timer.querySelector('#hours'),
       minutes = timer.querySelector('#minutes'),
       seconds = timer.querySelector('#seconds'),
       timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() { //функция, чтобы обновлялась каждую секунду
       const t = getTimeRemaining(endtime);

       days.innerHTML = getZero(t.days);
       hours.innerHTML = getZero(t.hours);
       minutes.innerHTML = getZero(t.minutes);
       seconds.innerHTML = getZero(t.seconds);

       if (t.total <= 0) { //останавливаем когда таймер закончится
          clearInterval(timeInterval);
       }
    }
 }
 setClock('.timer', deadline); // вызыаем функцию 
 //=======================

 // если нажмешь на перчек в подвале, вернешсья в начало
 pepper.addEventListener('click', (event) => {
    document.documentElement.scrollTop = 0;
    alert('Конечно, давай еще раз посмотрим на сайт, перчик ;)');
 });




















});