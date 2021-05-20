let max = {
  second: 60,
  minute: 60,
  hour: 24,
  day: 5
}

function countdown(classname) {
  let parent = document.getElementById(classname)

  let upper = parent.children[0].children[0]
  let upperText = upper.children[0].children[0]
  let upperBack = parent.children[0].children[1]
  let upperBackText = upperBack.children[0].children[0]
  let lower = parent.children[1].children[0]
  let lowerText = lower.children[0].children[0]
  let lowerBack = parent.children[1].children[1]
  let lowerBackText = lowerBack.children[0].children[0]

  upper.style.transform = "rotateX(180deg)"
  lowerBack.style.transform = "rotateX(0deg)"

  if (upperText.innerText - 1 < 0) {
    let nextDecreasing = getNextDecreasingClassname(classname)
    if (nextDecreasing) {
      countdown(nextDecreasing)
    }
  }

  setTimeout(function() {
    upper.style.transition = "transform 0s"
    lowerBack.style.transition = "transform 0s"
  }, 800)

  setTimeout(function () {
    if (upperText.innerText - 1 >= 0) {
      upperText.innerText = String(upperText.innerText - 1).padStart(2, '0')
      lowerText.innerText = String(lowerText.innerText - 1).padStart(2, '0')
    } else {
      upperText.innerText = String(max[classname] - 1).padStart(2, '0')
      lowerText.innerText = String(max[classname] - 1).padStart(2, '0')
    }
    upper.style.transform = "rotateX(0deg)"
    lowerBack.style.transform = "rotateX(180deg)"
  }, 850)

  setTimeout(function () {
    upper.style.transition = "transform 1s ease-in"
    lowerBack.style.transition = "transform 1s ease-in"
    if (upperBackText.innerText - 1 >= 0) {
      upperBackText.innerText = String(upperText.innerText - 1).padStart(2, '0')
      lowerBackText.innerText = String(lowerText.innerText - 1).padStart(2, '0')
    } else {
      upperBackText.innerText = String(max[classname] - 1).padStart(2, '0')
      lowerBackText.innerText = String(max[classname] - 1).padStart(2, '0')
    }
  }, 900)

}

function getNextDecreasingClassname(currentDecreasing) {
  let classnames = ["second", "minute", "hour", "day"]
  let nextIndex = classnames.indexOf(currentDecreasing)

  if (nextIndex < classnames.length - 1) {
    return classnames[nextIndex + 1]
  }
  return null
}


setInterval(function () {countdown("second")}, 1000)

