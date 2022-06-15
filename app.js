// Set the date we're counting down to
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var today = new Date()
var dd = today.getDate()
var mm = today.getMonth() + 1 //January is 0!
var yyyy = today.getFullYear()
// today = dd + '/' + mm + '/' + yyyy

//we count 8 days from today this year and month, meaning this will run forever withou me having to reset a time
//or having to put a function for when it reaches 0.
const countDownDate = new Date(`${month[mm - 1]} ${dd + 8}, ${yyyy} 17:11:00`).getTime()
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
