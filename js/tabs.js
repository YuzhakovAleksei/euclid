window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function(){
		document.querySelector('#menu').classList.toggle('is-active')
	})

  document.querySelectorAll('.start-disabled').forEach(function(dis) {
    dis.classList.remove('tab-content-active')
  })
  
  document.querySelectorAll('.step-link').forEach(function(tabs_btn) {
    tabs_btn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)
      document.querySelectorAll('.how-block').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      console.log('добавлен к', path)
    })
  })
})
