
let flag = true
//---------------------------------------getting navbar
if (flag) {
    let url = '/nav/bar'
    fetch(url, {
        method: 'get',
    })
        .then(response => { return response.text() })
        .then(data => {
            flag = false
            data = JSON.parse(data)
            if (data.status == 200) {
                let parser = new DOMParser();
                let doc = parser.parseFromString(data.html, 'text/html');
                document.getElementById("nav").appendChild(doc.getElementById('navigation_container'));
                $('head').append(doc.getElementsByTagName('script'));
                $('head').append(doc.getElementsByTagName('style'));


                //-----------------------------------------------------------getting home body
                let url = '/nav/home_body'
                fetch(url, { method: 'get' })
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



            } else {
                let erormessage = document.createElement('h1')
                erormessage.innerHTML = 'Something went wrong please try again later'
                erormessage.style.color = 'red'
                erormessage.style.fontSize = '2.5vw'
                document.body.append(erormessage)
            }
        })
        .catch(err => { console.error(err) })
}



//=======================footer========================

let url = '/nav/footer'
fetch(url, {
    method: 'get',
})
    .then(response => { return response.json() })
    .then(data => {
        if (data.status == 200) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data.html, 'text/html');
            document.getElementById("footer").appendChild(doc.getElementById('footermain_container'));
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







