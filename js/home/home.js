

//-----------------------------------------------------------getting home body
let home_body_url = '/home/home_body'
fetch(home_body_url, { method: 'get' })
    .then(response => { return response.json() })
    .then(data => {
        if (data.status == 200) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data.html, 'text/html');
            document.getElementById("mainbody").appendChild(doc.getElementById('home_body_container'));
            $('head').append(doc.getElementsByTagName('script'));
            $('head').append(doc.getElementsByTagName('style'));
        } else {
            let erormessage = document.createElement('h1')
            erormessage.innerHTML = 'Something went wrong please try again later'
            erormessage.style.color = 'red'
            erormessage.style.fontSize = '2.5vw'
            document.body.append(erormessage)
        }
    })
    .catch(err => { console.error(err) })

