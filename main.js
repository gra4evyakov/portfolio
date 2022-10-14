const tabLinks = document.getElementsByClassName("tab-links")
const tabContents = document.getElementsByClassName("tab-contents")

function openTab(tabName) {
    for(let tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for(let tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add('active-tab')
}

const menu = document.querySelector(".menu")
function openMenu() {
    menu.style.right = '0';
}

function closeMenu() {
    menu.style.right = '-170px';
}

const form = document.getElementById('sheetdb-form');
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.getElementById('sheetdb-form')),
    }).then(
        response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
            return response.json()
        })
})