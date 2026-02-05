console.log("Hi")

function fixIndexLink() {
    document.getElementsByClassName('md-header-nav__button md-logo')[0].href = "https://www.support.evam.life/en/change_log_VS.html";
}

window.onload = fixIndexLink