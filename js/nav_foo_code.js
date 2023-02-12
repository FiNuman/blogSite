
function clear() {
    $("#home_body_container").remove();
}



//------------------------------------------------------------redirect navbar
document.querySelectorAll('.navBtn').forEach((e) => {
    e.addEventListener('click', (() => {
        switch (e.id) {
            case 'nav_id_1': {
                window.location.href = '/'
                break;
            }
            case 'nav_id_2': {
                window.location.href = '/blog/blog'
                break;
            }
            case 'nav_id_3': {
                window.location.href = '/user/profile'
                break;
            }
            case 'nav_id_4': {
                console.log('2')
                break;
            }
            case 'userstaticid': {
                window.location.href = '/u_log/login'
                break;
            }
            default: {

                break;
            }
        }
    }))
})

console.log('loaded')