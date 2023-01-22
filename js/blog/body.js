//---------------------getting navigation
//====================get data===================
//const files = document.querySelector('input[type=`file`]').files;
let test_data = 'Numan';
 
//==============Set into formData================
const form = new FormData()
form.append('test_data', test_data)
//data.append('picture', files[0]);
 
 
//==============Finally send the data===========
let url = '/nav/bar'
fetch(url, {
    method: 'get',
})
   .then(response => { return response.json() })
    .then(data => {
        if (data.status == 200) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data.html, 'text/html');
            document.body.prepend(doc.getElementById('navigation_container'));
            $('head').append(doc.getElementsByTagName('script'));
            $('head').append(doc.getElementsByTagName('style'));
        }
        else {
            let erormessage = document.createElement('h1')
            erormessage.innerHTML = 'Something went wrong please try again later'
            erormessage.style.color = 'red'
            erormessage.style.fontSize = '2.5vw'
            document.body.append(erormessage)
        }
   })
   .catch(err => { console.error(err) })
 
 