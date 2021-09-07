var gridSize = 16
var container

function displayGrid() {
  const body = document.body
  const container = document.createElement('div')
  container.id = 'container'
  body.appendChild(container)
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
  var x = gridSize
  var cells = x * x

  for (var i = 0; i < cells; i += 1) {
    var gridItem = document.createElement('div')
    // gridItem.textContent = `${i}`
    gridItem.addEventListener('mouseenter', function (e) {
      e.target.classList.add('gridItemBackground')
    })
    container.appendChild(gridItem)
    gridItem.classList.add('gridItem')
  }
}

function getNewGridSize() {
  var newSize = prompt('What size of a grid do ya want?', 0)
  if (isNaN(newSize)) {
    prompt('sorry I need you to enter a number', 0)
  }
  else if (newSize > 100) {
    prompt('um, I need a smaller number.  Something less than 100 please', 0)
  }
  else {
    gridSize = parseInt(newSize)}
}

function removeGrid() {
  var el = document.getElementById('container')
  el.remove()
}

var reload = document.querySelector('#reload')

reload.onclick = () => {
  removeGrid()
  getNewGridSize()
  displayGrid()
}

displayGrid()
