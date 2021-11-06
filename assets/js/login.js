var baseUrl = 'http://localhost:3000';
document.getElementById('signinButton').addEventListener('click', function(click){
    login(click);
  });
  
async function login(event){
      event.preventDefault();
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      let error = document.getElementById('error');
      let successful = document.getElementById('message');
      let code = '';
      const response = await fetch(baseUrl+ '/todos/add', {
            method:'POST',
            headers: {
              'content-type':'application/json'
            },
            mode: 'no-cors',
            body:JSON.stringify({
              'name':username,
              'password':password
            })
        })

            try {
                const content = await response.json()
                console.log('>>>>>>>>>>>', content)
                return content;
            } catch (errror) {
                console.log('>>>>>>>>>>>', error)
            }
        }