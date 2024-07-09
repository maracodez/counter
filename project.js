document.getElementById('searchButton').addEventListener('click', function() {
  var searchTerm = 
  document.getElementById('searchBox').value;
  console.log('search term:', searchTerm)
});

document.getElementsByClassName('login-orange').addEventListener('click', function() {
  var email = 
  document.getElementsByClassName('mail').value;
  var password =
  document.getElementsByClassName('Password').value;

  var data = {
    email: email,
    password: password
  };

  fetch('http://localhost:3000/api/login',
   {
    method: 'PORT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);

    if (data.success) {
      alert('Login successful!');
      window.location.href = 'dashboard.html';
    } else {
      alert('Login failed: ' + data.message);
    }
  })
  .catch((error) => {
    console.log('Error:', error);
    alert('An error occured during login. please try again')
  })
})