
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const outputName = document.getElementById('outputName')
const outputEmail = document.getElementById('outputEmail')

function save_data(event){
    event.preventDefault()
    
    // 1. output data to browser
    outputName.textContent = inputName.value
    outputEmail.textContent = inputEmail.value

    // 2. output sessionStorage
    console.log(sessionStorage)

    // 3. save data to sessionStorage
    sessionStorage.setItem('name', inputName.value)
    sessionStorage.setItem('email', inputEmail.value)

    // 4. get data from sessionStorage
    let str_name = sessionStorage.getItem('name')
    outputName.textContent = str_name
    let str_email = sessionStorage.getItem('email')
    outputEmail.textContent = str_email

    // 5. remove single data from sessionStorage
    // sessionStorage.removeItem('name')
    // sessionStorage.removeItem('email')

    // 6. get all keys
    for ( let i = 0; i < sessionStorage.length; i++){
        const key = sessionStorage.key(i) // returns key name
        console.log(`${key} => ${sessionStorage.getItem(key)}`)
    }

    // 7. save form entry as a json object
    const formObj = {
        name: inputName.value,
        email: inputEmail.value
    };
    sessionStorage.setItem('entry', JSON.stringify(formObj))

    // 9. convert saved data back to json
    var formEntry = JSON.parse(sessionStorage.getItem('entry'))
    console.log(formEntry)
    
    // 10. delete all data from sessionStorage
    sessionStorage.clear()
    
}