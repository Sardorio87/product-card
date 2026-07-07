function showWeather(city, temperature = 17){
  console.log('Сейчас в ${city} температура - ${temperatura} градусов по цельсию');
}

showWeather('Москве','20');
showWeather('Самарканде', '32');
showWeather('Мекке', '41');

const LIGHT_SPEED = 300000

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED){
    console.log('Скорость');
   } else if (speed<LIGHT_SPEED){
      console.log('Сверх скорость');
  }
}

checkSpeed(300000);

const hause = 'Loft';
const hausePrice = 10000;

const  buyHause = (budjet) => {
  if (budjet >= hausePrice) {
    console.log('${hause} куплен.Спасибо за покупку.');
  }else{
    const differenxePrice = HausePrice - budjet;
    console.log('Вам не хватает ${differenxePrice}$,пополните баланс.');
  }
}

buyHause(10000);