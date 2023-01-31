function toggle() {
    const btn = document.getElementsByClassName('button')[0]
    const extraDiv = document.getElementById('extra')
    if (btn.textContent === 'More') {
        btn.textContent = 'Less'
        extraDiv.style.display = 'block'
    } else {
        btn.textContent = 'More'
        extraDiv.style.display = 'none'
    }
}