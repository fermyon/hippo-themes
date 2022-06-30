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
