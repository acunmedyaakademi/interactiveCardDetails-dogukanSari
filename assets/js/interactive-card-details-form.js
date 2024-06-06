// id isimleri: cardholderName, cardNumber, expDateMonth, expDateYear, cvc, btn

let cardholderName = document.querySelector('#cardholderName');
let cardNumber = document.querySelector('#cardNumber');
let expDateMonth = document.querySelector('#expDateMonth');
let expDateYear = document.querySelector('#expDateYear');
let cvc = document.querySelector('#cvc');
let btn = document.querySelector('#btn');

function handleBtnClick (e) {
  e.preventDefault();

  alert('Kartın Üzerindeki İsim Soyisim: ' + cardholderName.value + '\n' + 'Kart Numarası: ' + cardNumber.value + '\n' + 'Ay ve Yıl: ' + expDateMonth.value + ' ' + expDateYear.value + '\n' + 'CVC: ' + cvc.value);
}

btn.addEventListener('click', handleBtnClick);