$(document).ready(function() {
    $("#container").html(''+
        '<h1>' +
        '    Hello world!!!' +
        '<input id="play-bt" type="button" value="play">' +
        '</h1>');
    
     $("#play-bt").click(function() {
         $("#container").html(''+
             '<h1>' +
             '     Hello world???' +
             '</h1>');
     });
});