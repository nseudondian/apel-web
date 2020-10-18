const toggleButton = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})