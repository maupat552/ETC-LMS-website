var baseUrl = 'https://codequeen-backend.herokuapp.com';
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
        console.log(data)
        const user = data.data.role;

        console.log(user)
            // return user;
        if (user == "facilitator") {
            alert("signed in successfully")
            window.location = 'admin/courses.html'
        } else if (user == "admin") {
            // console.log(user)
            alert("signed in successfully")

            window.location = 'admin/index.html'
        } else {
            alert("signed in successfully")
            window.location = 'admin/index2.html'
        }

    } catch (errror) {
        console.log('>>>>>>>>>>>', error)
    }
}