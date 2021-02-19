/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 

*/
var href = document.getElementById("href")
var protocol = document.getElementById("protocol")
var host = document.getElementById("host")
var port = document.getElementById("port")
var hostName = document.getElementById("hostName")

var appName = document.getElementById("appName")
var appVersion = document.getElementById("appVersion")
var platform = document.getElementById("platform")
var lang = document.getElementById("language")
var cookie = document.getElementById("cookieEnabled")

var height = document.getElementById("height")
var width = document.getElementById("width")
var pixelDepth = document.getElementById("pixelDepth")
var length = document.getElementById("length")
var state = document.getElementById("state")

href.innerHTML = location.href
protocol.innerHTML = location.protocol
port.innerHTML = location.port
host.innerHTML = location.host
hostName.innerHTML = location.hostname

appName.innerHTML = navigator.appName
appVersion.innerHTML = navigator.appVersion
platform.innerHTML = navigator.platform
lang.innerHTML = navigator.language
cookie.innerHTML = navigator.cookieEnabled

height.innerHTML = screen.height
width.innerHTML = screen.width
pixelDepth.innerHTML = screen.pixelDepth

length.innerHTML = history.length
state.innerHTML = history.state
/*

2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 









// Display the BOM Information on the innerHTML of the elements