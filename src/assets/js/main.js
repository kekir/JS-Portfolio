'use strict'

// const modal = document.querySelector('.modal')
// const overlay = document.querySelector('.overlay')
// const btnCloseModal = document.querySelector('.btn--close-modal')
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal')
// const btnScrollTo = document.querySelector('.btn--scroll-to')
// const homes = document.querySelector('.homes')
// const nav = document.querySelector('.nav')
// const tabs = document.querySelectorAll('.operations__tab')
// const tabsContainer = document.querySelector('.operations__tab-container')
// const tabsContent = document.querySelectorAll('.operations__content')

// VISITOR NOTIFICATION
const showNotification = () => {
  const doNotify = () => {
    let title = 'Protfolio KEKI R'
    let t = Date.now()
    let options = {
      body: 'Hello from JavaScript!',
      data: { Purpose: 'Portfolio', Name: 'Keki R' },
      lang: 'en-CA',
      icon: './img/calendar-lg.png',
      timestamp: t,
      vibrate: [100, 200, 100],
    }
    let n = new Notification(title, options)

    n.addEventListener('show', function (ev) {
      console.log('SHOW', ev.currentTarget.data)
    })
    n.addEventListener('close', function (ev) {
      console.log('CLOSE', ev.currentTarget.body)
    })
    setTimeout(n.close.bind(n), 3000) //close notification after 3 seconds
  }

  if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    doNotify()
  } else {
    //notification == denied
    Notification.requestPermission()
      .then(function (result) {
        console.log(result) //granted || denied
        if (Notification.permission == 'granted') {
          doNotify()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// SEARCH
const anySearch = () => {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase()
  let x = document.getElementsByClassName('animals')
  const searchTerm = () => {
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = 'none'
      } else {
        x[i].style.display = 'list-item'
      }
    }
  }
}

// STICKY NAV
const stickyNav = () => {
  const header = document.querySelector('.header')
  const about = document.querySelector('.j-about')
  const navHeight = header.getBoundingClientRect().height
  console.log('height:' + navHeight)

  const fixNav = function (entries) {
    const [entry] = entries
    // console.log(entry);

    if (!entry.isIntersecting) header.classList.add('sticky')
    else header.classList.remove('sticky')
  }

  const headerObserver = new IntersectionObserver(fixNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  })

  headerObserver.observe(about)
}

// LOGIN MODAL
const showLogin = () => {
  const loginModal = document.querySelector('.modal-login')
  const openLogin = document.querySelector('.show-login')
  const closeLogin = document.querySelectorAll('.close-login')
  const overlay = document.querySelector('.ol-login')

  const openLoginModal = function (e) {
    e.preventDefault()
    loginModal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }

  closeLogin.forEach((close) => {
    close.addEventListener('click', function () {
      loginModal.classList.add('hidden')
    })
  })

  const closeLoginModal = function () {
    loginModal.classList.add('hidden')
    overlay.classList.add('hidden')
  }

  openLogin.addEventListener('click', openLoginModal)
  overlay.addEventListener('click', closeLoginModal)
  closeLogin.forEach((btn) => btn.addEventListener('click', closeLoginModal))

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
      closeLoginModal()
    }
  })
}

// SIGNUP MODAL
const showSignup = () => {
  const signupModal = document.querySelector('.modal-signup')
  const openSignup = document.querySelector('.show-signup')
  const closeSignup = document.querySelectorAll('.close-signup')
  const overlay = document.querySelector('.ol-signup')

  const openSignupModal = function (e) {
    e.preventDefault()
    signupModal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }

  closeSignup.forEach((close) => {
    close.addEventListener('click', function () {
      signupModal.classList.add('hidden')
    })
  })

  const closeSignupModal = function () {
    signupModal.classList.add('hidden')
    overlay.classList.add('hidden')
  }

  openSignup.addEventListener('click', openSignupModal)
  overlay.addEventListener('click', closeSignupModal)
  closeSignup.forEach((btn) => btn.addEventListener('click', closeSignupModal))

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !signupModal.classList.contains('hidden')) {
      closeSignupModal()
    }
  })
}

// SIGNUP VALIDATION

// SCROLLING
const scrollTo = () => {
  const allLinks = document.querySelectorAll('a:link')

  allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const href = link.getAttribute('href')

      // Scroll back to top
      if (href === '#')
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })

      // Scroll to other links
      if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href)
        sectionEl.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}

// DROPDOWN
// const showDown = () => {
//   const downTrigger = document.querySelector('.dropdown')
//   const downList = document.querySelector('.list-items')

//   downTrigger.addEventListener('click', (e) => {
//     downList.classList.toggle('hidden')
//     console.log('menu')
//   })
// }

// PAGEHEADER
const pageHeader = () => {
  let pageTitle = document.title
  document.getElementById('title').innerHTML = pageTitle
}

// SORT TEAM
const sortTeam = () => {
  const tabs = document.querySelectorAll('.js-tab')
  const tabContainer = document.querySelector('.js-tabcont')
  const tabContent = document.querySelectorAll('.js-content')

  // console.log(tabContent)

  const value = tabContainer.textContent
  console.log(value)

  tabs.forEach((t) => {
    t.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active', 'bg-blue-600')
      })
      t.classList.add('active', 'bg-blue-600', 'text-white')
    })
  })

  //Filter
  tabContent.forEach((c) => {
    if (c.getAttribute('data-filter') == value.toLowerCase() || value == 'all') {
      c.classList.add('hidden')
    } else {
      c.classList.remove('hidden')
    }
  })
}

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.j-prev')
  const btnRight = document.querySelector('.j-next')
  const dotContainer = document.querySelector('.j-dots')

  let curSlide = 0
  const maxSlide = slides.length

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dot" data-slide="${i}"></button>`
      )
    })
  }

  const activateDot = function (slide) {
    document.querySelectorAll('.dot').forEach((dot) => dot.classList.remove('hidden'))

    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('hidden')
  }

  const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
  }

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0
    } else {
      curSlide++
    }

    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    } else {
      curSlide--
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const init = function () {
    goToSlide(0)
    createDots()

    activateDot(0)
  }
  init()

  // Event handlers
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide()
    e.key === 'ArrowRight' && nextSlide()
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
      const { slide } = e.target.dataset
      goToSlide(slide)
      activateDot(slide)
    }
  })
}

// MAIN NAVIGATION
const showNav = () => {
  const burger = document.querySelector('.menu-btn')
  const nav = document.querySelector('.nav')
  const navLinks = document.querySelectorAll('.nav__list')

  burger.addEventListener('click', (e) => {
    //Toggle Nav
    nav.classList.toggle('hidden')

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    })

    //Burger Animation
    burger.classList.toggle('anim')
  })
}

// SEARCH
const showSearch = () => {
  let searchToggle = document.querySelector('.search__toggle')
  let searchForm = document.querySelector('.search__form')

  searchToggle.addEventListener('click', showSearch)

  function showSearch() {
    searchForm.classList.toggle('active')
    searchToggle.classList.toggle('active')

    if (searchToggle.classList.contains('active')) {
      searchToggle.setAttribute('aria-label', 'Close search')
    } else {
      searchToggle.setAttribute('aria-label', 'Open search')
    }
  }
}

// prettier-ignore
export {
  showNotification,
  anySearch,
  stickyNav,
  showLogin,
  showSignup,
  scrollTo,
  pageHeader,
  sortTeam,
  slider,
  showNav,
  showSearch,
  
  
}
