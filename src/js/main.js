$(document).ready(function () {
    $('.btn-contact').bind('click', function () {
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });
});