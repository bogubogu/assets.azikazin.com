(function () {
  const header = document.querySelector('.header2');
	const icon = document.querySelector('.icon-container');
	icon.onclick = function () {
		header.classList.toggle('menu-open');
	}
}());