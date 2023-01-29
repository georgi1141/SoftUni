function extractText() {
    const items = document.getElementById('items').children

    const itemArray = [...items].map(li => li.textContent).join('\n')

    document.getElementById('result').value = itemArray


}