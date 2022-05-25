window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  backToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

}


function activateMenuAtCurrentSection (section) {
  //linha alvo
  const targetLine = scrollY + innerHeight /2 
  
  //verificando se a seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //a linha alvo chegou passou ou não da seção
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop 
  

  //informa os dados para criar a lógica 
 // console.log('O topo da seção chegou ou passou da linha ?' , sectionTopReachOrPassedTargetline)

  //verificar se a base esta abaixo da linha alvo.
  //quais dados vou precisar ?

  //mostra onde termina a seção
  const sectionEndAt = sectionTop + sectionHeight
 
  //o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndAt <= targetLine

 // console.log('O fundo da seção passou da linha', sectionEndPassedTargetline)

  //limites da seção
  const sectionID = section.getAttribute('id')
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
  
  const menuElement = document.querySelector(`.menu a[href*=${sectionID}]` )
  
  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }

}





function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function backToTopButtonOnScroll() {
  if (scrollY > 1000) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
