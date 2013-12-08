$(document).ready(function () {
    var duration = 500;
    $(document).pjax('a', '.pjax-container', {
        fragment: '.pjax-container',
        duration: duration,
        container: '#main',
        timeout: 5000
    });
});

$(document).on('pjax:start', function () {
    console.log("pjax:start");
    $('.pjax-container').css({
        opacity: 0.0
    });
});
$(document).on('pjax:waiting', function () {
    console.log("pjax:waiting");
});
$(document).on('pjax:end', function () {
    console.log("pjax:end");
    $('.pjax-container').css({
        opacity: 1.0
    });
});
$(document).on('pjax:click', function () {
    console.log("pjax:click");
});
$(document).on('pjax:beforeSend', function () {
    console.log("pjax:beforeSend");
});
$(document).on('pjax:send', function () {
    console.log("pjax:send");
});
$(document).on('pjax:complete', function () {
    console.log("pjax:complete");
});
$(document).on('pjax:success', function () {
    console.log("pjax:success");
    var href = window.location.pathname;
    $('li.active').removeClass('active');
    $('a[href="' + href + '"]').parent('li').addClass('active');
});
$(document).on('pjax:error', function () {
    console.log("pjax:error");
});
$(document).on('pjax:timeout', function () {
    console.log("pjax:timeout");
});
