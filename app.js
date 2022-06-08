// Set the date we're counting down to
const countDownDate = new Date('Jun 17, 2022 17:11:00').getTime()

const daysHtml = document.getElementById('days_count')
const hoursHtml = document.getElementById('hours_count')
const minutesHtml = document.getElementById('minutes_count')
const secondsHtml = document.getElementById('seconds_count')

const sec = setInterval(function () {
  const now = new Date().getTime()

  const distance = countDownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //   + minutes + "m " + seconds + "s ";
  daysHtml.innerHTML = days
  hoursHtml.innerHTML = hours
  minutesHtml.innerHTML = minutes
  secondsHtml.innerHTML = seconds

  const secondsClass = document.getElementById('seconds')
  const minutesClass = document.getElementById('minutes')

  //animate second every second
  if (secondsHtml.innerHTML == secondsHtml.innerHTML) {
    secondsClass.classList.add('animate')
    secondsHtml.classList.add('animate_text')
  }
  //animate minutes
  if (secondsHtml.innerHTML == 0) {
    minutesClass.classList.add('animate')
    minutesHtml.classList.add('animate_text')
  } else {
    minutesClass.classList.remove('animate')
    minutesHtml.classList.remove('animate_text')
  }
}, 1000)
