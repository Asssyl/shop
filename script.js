const links = document.querySelectorAll('h4')
const list = document.querySelectorAll('.list-unstyled a')

function message() {
	alert("we haven't started yet, please wait")
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

for (let one of links) {
	one.addEventListener('click', topFunction)
	one.addEventListener('click', message)
}
for (let a of list) {
	a.addEventListener('mouseover', function () {
		a.style.color = 'orange'
	})
	a.addEventListener('mouseout', function () {
		a.style.color = '#000000'
	})
}