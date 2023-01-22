

//=========================================================================
//                                   register
//=========================================================================


let if_id_valid_send_the_data = true
function validiticheck(id) {
    if (document.getElementById(id).checkValidity() == true) {
        return $('#' + id).val()
    } else {
        //if not valid change flag value to false 
        if_id_valid_send_the_data = false
        document.getElementById(id).reportValidity()
    }
}



function register() {
    const form = new FormData()
    $(document).ready(function () {
        form.append('first_name', validiticheck('first_name'))
        form.append('last_name', validiticheck('last_name'))
        form.append('email', validiticheck('email'))
        form.append('phone', validiticheck('phone'))
        form.append('address', validiticheck('address'))
        form.append('gender', (() => {
            let gender = $("input[name='JTP']:checked").val()
            if (gender == 1) return 'Male'
            else if (gender == 2) return 'Female'
            else if (gender == 3) return 'Other'
            else {
                document.getElementById('gender').reportValidity()
                if_id_valid_send_the_data = false
                return ''
            }
        })())
    })

    if (if_id_valid_send_the_data) {
        let url = '/u_log/register'
        fetch(url, {
            method: 'post',
            body: form,
        })
            .then(response => { return response.text() })
            .then(data => {
                if (data == 'Forbidden') {
                    document.getElementById('email').setCustomValidity('User Allready Taken')
                    document.getElementById('email').reportValidity()
                    setTimeout(() => {
                        document.getElementById('email').setCustomValidity('')
                    }, 2000);
                } else {
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(data, 'text/html');
                    $('#form').remove()
                    $('body').append(doc.getElementById('form'))
                }
            })
            .catch(err => { console.error(err) })
    } else {
        if_id_valid_send_the_data = true
    }
}


//=========================================================================
//                                   Password
//=========================================================================
function password_strength_checker(pass, repass) {

    let password = document.getElementById(pass).value
    if (!document.getElementById(pass).checkValidity() == true) {
        valid(pass, 'Please set password');
        return false;
    }
    if (password.length < 8) {
        valid(pass, 'Password length must be 8 charecter');
        return false;
    }
    if (!password.match(/[a-z]+/)) {
        valid(pass, 'Please add minimum one [a-z] alphabet');
        return false;
    }
    if (!password.match(/[A-Z]+/)) {
        valid(pass, 'Please add minimum one [A-Z] alphabet');
        return false;
    }
    if (!password.match(/[0-9]+/)) {
        valid(pass, 'Please add minimum one [0-9] Number');
        return false;
    }
    if (!password.match(/[$@#&!]+/)) {
        valid(pass, 'Please add minimum one Special charecter');
        return false;
    }
    if (repass) {
        let repassword = document.getElementById(repass).value
        if (password != repassword) {
            valid(repass, 'Password not match!');
            return false;
        }
    }

    return true;
}

function valid(id, message) {
    let turget_data_to_set_custom_validity = document.getElementById(id)
    turget_data_to_set_custom_validity.setCustomValidity(message)
    turget_data_to_set_custom_validity.reportValidity();
    setTimeout(() => {
        turget_data_to_set_custom_validity.setCustomValidity('')
    }, 2000);
}

//That is a password checker.
//Gave the input password id and also repassword id in this function password_strength_checker('id1','id2')
//You can ony set one pass like password_strength_checker('id1')
//That function return boolean result 

function passset() {
    const form = new FormData()
    let pass = document.getElementById('pass')
    let repass = document.getElementById('repass')

    if (password_strength_checker('pass', 'repass') == true) {
        form.append('pass', $('#pass').val())
        let url = '/u_log/new_user_register'
        fetch(url, {
            method: 'post',
            body: form,
        })
            .then(response => { return response.json() })
            .then(data => {
                if (data.status == 200) {
                    window.onbeforeunload = null;
                    window.location.href = '/u_log/login'
                } else if (data.status == "expireend") {
                    alert('Register again')
                }
            })
            .catch(err => { console.error(err) })
    } else {
        console.log('false')
    }
}


//on reload warning
$(window).on("beforeunload", function (e) {
    return e.originalEvent.returnValue = "Your message here";
});


//login redirect

function login() {
    window.onbeforeunload = null;
    window.location.href = '/u_log/login'
}
