
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const outputName = document.getElementById('outputName')
const outputEmail = document.getElementById('outputEmail')

function call_sessionStorage_data(){
    // localStorage.removeItem('test')
    // sessionStorage.removeItem('test')
    // // 4. call data from sessionStorage
    // let savedName = sessionStorage.getItem('name')
    // // console.log(savedName)
    // let savedEmail = sessionStorage.getItem('email')
    // // console.log(savedEmail)
    // outputName.textContent = savedName
    // outputEmail.textContent = savedEmail
}

function save_data(event){
    event.preventDefault()

    // // 1. output data to browser
    // outputName.textContent = inputName
    // outputEmail.textContent = inputEmail

    // // 2. output sessionStorage
    // console.log(sessionStorage)

    // // 3. save data to sessionStorage
    // sessionStorage.setItem('name', inputName.value)
    // sessionStorage.setItem('email', inputEmail.value)

    // location.reload() // refresh

    // // 4. call data from sessionStorage
    // let savedName = sessionStorage.getItem('name')
    // // console.log(savedName)
    // let savedEmail = sessionStorage.getItem('email')
    // // console.log(savedEmail)
    // outputName.textContent = savedName
    // outputEmail.textContent = savedEmail

    // // 5. delete single data from sessionStorage
    // sessionStorage.removeItem('name')

    // // 6. delete all data from sessionStorage
    // sessionStorage.clear()

    // // 7. get all keys
    // let keys = sessionStorage.key(1)
    // console.log(keys)
    // to get all stored values
    for ( let i = 0; i < sessionStorage.length; i++){
        const key = sessionStorage.key(i) // returns key name
        console.log(`${key} => ${sessionStorage.getItem(key)}`)
    }

    // 8. save form entry as a json object
    const formObj = {
        name: inputName.value,
        email: inputEmail.value
    };
    sessionStorage.setItem('entry', JSON.stringify(formObj))

    // 9. convert saved data back to json
    var formEntry = JSON.parse(sessionStorage.getItem('entry'))

    
}