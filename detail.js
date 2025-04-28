// FOLLOW BUTTON
const fol = document.getElementById('fol');

fol.addEventListener('click', function() {
  console.log('cok');
  const folSpan = fol.querySelector('span');
  
  if(folSpan.innerText === 'Following') {
    folSpan.innerText = 'Follow';
    fol.style.backgroundColor = 'rgb(0, 149, 246)';
    fol.style.color = '#fff';
  } else {
    folSpan.innerText = 'Following';
    fol.style.backgroundColor = '#efefef';
    fol.style.color = '#262626';
  }
});

// DETAIL NAV
const detailNavs = document.querySelectorAll('.detail-nav-icon')

detailNavs.forEach(detailNav => {
  detailNav.addEventListener('click', function(){
    detailNavs.forEach(Nav => {
        Nav.classList.remove('acro-active')
    })
    
    console.log('work coi')
    this.classList.add('acro-active')
    this.addEventListener('click', function() {
      this.style.display = 'flex'
    })
  })
})
