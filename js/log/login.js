


function login() {

   const form = new FormData();
   form.append('gmail', document.getElementById('Gmail').value);
   form.append('pass', document.getElementById('user_pass').value);


   //==============Finally send the data===========
   let url = '/login';
   fetch(url, {
      method: 'post',
      body: form,
   })
      .then(response => { return response.json(); })
      .then(data => { console.log(data); })
      .catch(err => { console.error(err); })

};

function register() {
   window.location.href = '/u_log/register'
}

$(document).click((e) => {
   console.log(e.target)
})

