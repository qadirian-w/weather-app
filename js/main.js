const themeChanger = document.getElementsByClassName(
    "theme-changer__button"
)[0];
console.log(themeChanger);
themeChanger.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
