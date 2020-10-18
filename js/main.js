document.querySelector('.mobile-menu').addEventListener('click',() => {
    document.querySelector('.top-menu').classList.toggle('show')
})

document.querySelectorAll('.top-menu a').forEach((oneLink) => {
    oneLink.addEventListener('click', () => {
        document.querySelector('.top-menu').classList.remove('show')
    })
})






















