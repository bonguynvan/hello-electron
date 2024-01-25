// const information = document.getElementById('info')
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// const func = async () => {
//     const response = await window.versions.ping()
//     console.log(response)
// }
// func()

document.querySelector('#toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    console.log('check', isDarkMode)
    document.querySelector('#theme-source').innerText = isDarkMode ? "Dark" : "Light"
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerText = 'System'
})