set = null
var timerID = null
var timerRunning = false

function stopclock() {
if(timerRunning)
clearTimeout(timerID)
timerRunning = false
}
function startclock() {
stopclock()
showtime()
}
function showtime(){
var now = new Date()
var hours = now.getHours()
var minutes = now.getMinutes()
var seconds = now.getSeconds()
var timeValue = "" + ((hours > 12) ? hours - 12 : hours)
timeValue += ((minutes < 10) ? ":0" : ":") + minutes
timeValue += ((seconds < 10) ? ":0" : ":") + seconds
timeValue += (hours >= 12) ? " PM" : " AM"
document.alert.time.value = timeValue
if(timeValue == set){
alert(message);
}
timerID = setTimeout("showtime()",1000)
timerRunning = true
}
function setalert() {
set = prompt("Встановлення часу на будильнику\nВведіть час у форматі 0:00:00. Наприклад 11:01:00 AM","");
document.alert.set.value = set
if (document.alert.message.value == "None"){
setmess();
}
if (document.alert.message.value == "null"){
setmess();
}
}
function setmess() {

message = prompt("Встановлення повідомлення\nВведіть своє повідомлення","");
document.alert.message.value = message
}
function quit() {
if(confirm("Бажаєте скинути встановлений час та повідомлення?")) {
close()
}
}