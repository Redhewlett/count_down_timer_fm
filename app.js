// Set the date we're counting down to
const countDownDate = new Date('Jun 18, 2022 17:11:00').getTime()
//Select our target in the html
const daysHtml = document.getElementById('days_count')
const hoursHtml = document.getElementById('hours_count')
const minutesHtml = document.getElementById('minutes_count')
const secondsHtml = document.getElementById('seconds_count')
//the big function thing basically some maths betwin the furtur and now
const sec = setInterval(function () {
  const now = new Date().getTime()

  const distance = countDownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  //send it to the html
  daysHtml.innerHTML = days < 10 ? '0' + days : days
  hoursHtml.innerHTML = hours < 10 ? '0' + hours : hours
  minutesHtml.innerHTML = minutes
  secondsHtml.innerHTML = seconds
  //afterwards you can have a function to stop counting when it reaches 0
}, 1000)
