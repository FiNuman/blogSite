


document.querySelectorAll('.selector_u').forEach((e) => {
    e.addEventListener('click', (() => {
        switch (e.id) {
            case 'u_d_1': {
                window.location.href = '/user/timeLine'
                break;
            }
            case 'u_d_12': {
                window.location.href = '/user/about'
                break;
            }
            case 'u_d_22': {
                window.location.href = '/user/photo'
                break;
            }
            case 'nav_id_4': {
                console.log('2')
                break;
            }
            case 'u_d_2': {
                window.location.href = '/user/friend'
                break;
            }
            default: {

                break;
            }
        }
    }))
})