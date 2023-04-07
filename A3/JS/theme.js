const theme = localStorage.getItem("theme") || "default";
document.querySelector("body").classList.add(theme);
