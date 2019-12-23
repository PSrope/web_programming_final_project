$(document).ready(function() {
    $("#container").html(''+
        '<h1>' +
        '    Hello world!!!' +
        '<input id="play-btn" type="button" value="play">' +
        '</h1>');
});

$("#play-btn").click(function() {
    $("#container").html(''+
        '<h1>' +
        '     Hello world!' +
        '</h1>');
});