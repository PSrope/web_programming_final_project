function myClick()
{
	alert("123");
}

$(document).ready(function() {
    $("#container").html(''+
    '<h1 align="center"><font face="fantasy">BaseBall Game Simulator</font></h1>' +
    '<img style="display:block; margin:auto;" src="ball.jpeg" border="2"></img>' +
    '<p align ="center">您將要在五組預設隊伍中選擇兩個隊伍:teamRED 和 teamBLUE 來進行一場對抗賽</p>' +
    '<div style="">  ' +
    '<center><input type="submit" onClick="myClick()"  value="Game Start" class="submit-btn" ></input></center>' +
    '   </div>');
    
     $("#play-bt").click(function() {
         $("#container").html(''+
             '<h1>' +
             '     Hello world???' +
             '</h1>');
     });
});