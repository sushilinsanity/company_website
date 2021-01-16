const menubar = document.getElementById('menubar')
let scrolled = false

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    menubar.classList.remove('top')
    if (!scrolled) {
      menubar.style.transform = 'translateY(-70px)'
    }
    setTimeout(function () {
      menubar.style.transform = 'translateY(0)'
      scrolled = true
    }, 200)
  } else {
    menubar.classList.add('top')
    scrolled = false
  }
}

// Smooth Scrolling
$('#menubar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    )
  }
})
