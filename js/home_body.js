

$('#loginbutton').click(function () {
    // console.log($('#login').is(':visible'))
    if ($('#login').is(':visible')) {
        $('#login').hide(1000);
        $('#loginbutton').css("border", "");

    } else {
        $('#login').show(1000);
        $('#loginbutton').css("border", "2px solid #4285f4");
    }
})

$(document).click((e) => {
    if (e.target.id == 'loginbutton' || e.target.className == 'inputclass' || e.target.className == 'loginbtn' || e.target.id == 'login') { }
    else {
        $('#login').hide(1000);
        $('#loginbutton').css("border", "");
    }
})




