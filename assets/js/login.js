var baseUrl = 'http://localhost:3000';
document.getElementById('signinButton').addEventListener('click', function(click) {
    login(click);
});

async function login(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let error = document.getElementById('error');
    let successful = document.getElementById('message');
    let code = '';

    try {
        const response = await fetch(baseUrl + '/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })

        const data = await response.json()
            // const user = data.message.forEach(element => console.log(element));
        const user = data.message.email;

        console.log(user)
            // return user;
        if (user == "facilitator") {
            alert("signed in successfully")
            window.location = 'facilitator-dashbaord.html'
        } else if (user == "admin") {
            // console.log(user)
            alert("signed in successfully")

            window.location = 'admin.html'
        } else {
            window.location = 'admin/index.html'
        }

    } catch (errror) {
        console.log('>>>>>>>>>>>', error)
    }
}