(function bg () {
  console.log('bg');

  let starsNum = 500
  let minSize = 1
  let maxSize = 5
  let w = window.innerWidth
  let h = window.innerHeight

  for(let s = 0; s < starsNum; s++) {
    let bg = document.querySelector('.bg')
    let star = document.createElement('div')
    let size = Math.random() * (maxSize-minSize) + minSize
    let x = Math.round(Math.random() * w)
    let y = Math.round(Math.random() * h)
    let color = Math.round(Math.random() * 255)

    star.style.width = size + 'px'
    star.style.height = size + 'px'
    star.style.opacity = Math.random()
    star.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},
                                      ${Math.round(Math.random() * 255)},
                                      ${Math.round(Math.random() * 255)})`
    star.style.position = 'absolute'
    star.style.left = x + 'px'
    star.style.top = y + 'px'
    bg.appendChild(star)
  }
})()
