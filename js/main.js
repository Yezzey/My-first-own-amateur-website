const navHeight = document.querySelector('.nav-height')
const body = document.body
const html = document.documentElement

const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
console.log(docHeight)

window.addEventListener('scroll', () => {
	const scrolled = window.scrollY

	console.log('jesteś na wysokości = ' + scrolled)

	let _1vh = Math.round(window.innerHeight)

	// let pageHeight = Math.round(html.innerHeight)

	// console.log(pageHeight)

	if (scrolled <= 100) {
		navHeight.style.height = _1vh + scrolled - 150 + 'px'
		navHeight.style.height = _1vh + scrolled - 150 + 'px'
		
	}

	// else if (){

	// }
	else {
		navHeight.style.height = _1vh - 50 + 'px'
	}

    const navHeightCheck = navHeight.clientHeight
    console.log('wielkość nawigacji = ' + navHeightCheck)
    console.log('strona ma wysokość = ' + docHeight)
    console.log(' ')
})
