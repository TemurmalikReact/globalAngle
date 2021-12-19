$(function () {
  if ($(window).width() < 960) {
    $('#main-video').trigger('pause');
  }

  if ($(window).width() > 960) {
    // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: '0',
      },
    })

    // get all slides
    var slides = document.querySelectorAll('section.panel')

    // create scene for every slide
    console.log(slides.length - 1)
    for (var i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
        .setPin(slides[i], { pushFollowers: false })
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller)
    }

    //animation for home page devises
    const scrollElements = document.querySelectorAll('.js-scroll')

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      )
    }

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top

      return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
      )
    }

    const displayScrollElement = (element) => {
      element.classList.add('scrolled')
    }

    const hideScrollElement = (element) => {
      element.classList.remove('scrolled')
    }

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el)
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }

    window.addEventListener('scroll', () => {
      handleScrollAnimation()
    })

    // build scenes
    var revealElements = document.getElementsByClassName('digit')
    for (var i = 0; i < revealElements.length; i++) {
      // create a scene for each element
      new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 50, // start a little later
        triggerHook: 0.9,
      })
        .setClassToggle(revealElements[i], 'visible') // add class toggle
        .addTo(controller)
    }

    var delateElem = document.getElementsByClassName('')
    for (var i = 0; i < revealElements.length; i++) {
      // create a scene for each element
      new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 50, // start a little later
        triggerHook: 0.9,
      })
        .setClassToggle(revealElements[i], 'visible') // add class toggle
        .addTo(controller)
    }
  }
})

//home page tabs
$(document).ready(function () {
  $('.tab-titles li').hover(function () {
    $('.tab-content').removeClass('tab-show')
    $('.tab-titles li').removeClass('active')
    $(this).addClass('active')
    var selected_tab = $(this).find('a').attr('href')
    $(selected_tab).addClass('tab-show')
    return false
  })

  //menu
  var opened = false
  $('.btn-toggle-menu').click(function () {
    if (!opened) {
      $('.open-menu').addClass('j-normal-mode j-menu-visible j-menu-opened ')
      $('.nav').addClass('j-under-page-menu')
      opened = true
    } else {
      $('.open-menu').removeClass('j-normal-mode j-menu-visible j-menu-opened ')
      $('.nav').removeClass('j-under-page-menu')
      opened = false
    }
  })

  // icon color in scroll
  $(window).scroll(() => {
    if (window.pageYOffset > 0) {
      $('.nav').addClass("is-sticky");
      $('#logo').attr('src', './assets/img/logo/small_logo.png')
      $('#logo-work').attr('src', '../../assets/img/logo/small_logo.png')
    }
    else {
      $('#logo').attr('src', './assets/img/logo/white_logo.png')
      $('#logo-work').attr('src', '../../assets/img/logo/white_logo.png')
      $('.nav').removeClass("is-sticky");
    }
  })
})
1