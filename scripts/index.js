window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme')) {
        document.body.classList.add(localStorage.getItem('theme'));
    }
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const colorSwitcher = document.getElementById('color-switcher');
    colorSwitcher.onclick = () => {
        if (prefersDarkScheme.matches) {
            document.body.classList.remove("dark-theme");
            document.body.classList.toggle("light-theme");
        } else {
            document.body.classList.remove("light-theme");
            document.body.classList.toggle("dark-theme");
        }
        localStorage.setItem("theme", document.body.classList);
    };
});