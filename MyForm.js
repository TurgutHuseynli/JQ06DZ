let newUser = {}
let error = false
let people = []
if(localStorage.getItem('users') === null || localStorage.getItem('users') === ''){
    localStorage.setItem('users', '')
    people = []
}else{
    people = JSON.parse(localStorage.getItem('users'))
}
$('button').click(function(){
    // e.preventDefault()
    error = false
    if($('#nick').val().length >= 2 && $('#psw').val().length >= 2 && $('#agree').is(':checked')){
        for(let i of people){
            if(i.nick == $('#nick').val() || i.password == $('#psw').val()){
                error = true
            }
        }
        if(error){
            alert('A user with one of these parameters the same already exists!')
        }else{
            newUser = {
                nick: $('#nick').val(),
                password: $('#psw').val()
            }
            people.push(newUser)
            localStorage.setItem('users', JSON.stringify(people))
            alert('Succesfully registered new user!')
        }
    }else{
        alert('Something went wrong. Please, check if you did all of the written above.')
    }
})