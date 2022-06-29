// Change the website theme on load
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	setTheme('dark')
} else {
	setTheme('light');
}

// Change the website theme when the system theme changes.
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
	if (event.matches) {
		setTheme('dark')
	} else {
		setTheme('light');
	}
});

function setTheme(mode) {
	document.documentElement.className = `theme-${mode}`;
}

new ClipboardJS('.copy');

// navbar-burger expansion
document.addEventListener('DOMContentLoaded', () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	// Add a click event on each of them
	$navbarBurgers.forEach( el => {
		el.addEventListener('click', () => {
			// Get the target from the "data-target" attribute
			const target = el.dataset.target;
			const $target = document.getElementById(target);
			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');
		});
	});
});
