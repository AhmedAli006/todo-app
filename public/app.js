
var  a = document.getElementById('main')
var b = document.getElementById('enter')

function inp() {
   var  newElement = document.createElement('P')
   text = b.value
   text = document.createTextNode(text)
   newElement.appendChild(text)
   a.appendChild(newElement)
   
   var editbtn =document.createElement('BUTTON')
   var editbtntext = document.createTextNode('edit')
   editbtn.appendChild(editbtntext)
   editbtn.setAttribute('onclick','editTodo(this)')
   editbtn.setAttribute('style','background-color:#38b000;')

   newElement.appendChild(editbtn)
   
   var deletebtn = document.createElement('BUTTON')
  var deletebtntext = document.createTextNode('delete')
  deletebtn.appendChild(deletebtntext)
   deletebtn.setAttribute('onclick','deleteTodo(this)')
   deletebtn.setAttribute('style','border:none;')
   deletebtn.setAttribute('style','background-color:#e71d36;')
   
    newElement.appendChild(deletebtn)
    b.value = ""
}

function deleteTodo(d) {
    d.parentNode.remove()
}

function editTodo(e) {
    e.parentNode.firstChild.nodeValue = prompt('edit text')
}
function deleteall() {
    a.innerHTML=""
}