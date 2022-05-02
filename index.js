const handHour = document.querySelector('.hand.hours')
const handMinutes = document.querySelector('.hand.minutes')
const handSeconds = document.querySelector('.hand.seconds')

const setRotation = (element, rotationPercentage) =>{ 
  element.style.setProperty('--rotation', rotationPercentage * 360)
}

const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = currentDate.getMinutes() / 60;
  const hoursPercentage = currentDate.getHours() / 12;

  setRotation(handSeconds, secondsPercentage);
  setRotation(handMinutes, minutesPercentage);
  setRotation(handHour, hoursPercentage);
}

setClock();

setInterval(setClock, 1000);