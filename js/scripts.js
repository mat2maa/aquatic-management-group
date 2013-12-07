$(document).ready(function () {
    console.log("document.ready");

    $("#pjax-container a").click(function(e) {
        e.preventDefault();
        console.log("a.click");
    });

    var duration = 0;
    $(document).pjax('a', '#pjax-container', { duration: duration });
});

$(document).on('pjax:start', function () {
    console.log("pjax:start");
});
$(document).on('pjax:waiting', function () {
    console.log("pjax:waiting");
});
$(document).on('pjax:end', function () {
    console.log("pjax:end");
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
});
$(document).on('pjax:error', function () {
    console.log("pjax:error");
});
$(document).on('pjax:timeout', function () {
    console.log("pjax:timeout");
});
