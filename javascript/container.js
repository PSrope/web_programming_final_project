function myClick()
{
	alert("123");
}

$(document).ready(function() {
    $("#container").html(''+
    '<h1 align="center"><font face="fantasy">SoftBall Game Simulator</font></h1>' +
    '<img style="display:block; margin:auto;" src="ball.jpeg" border="2"></img>' +
    '<p align ="center">您將要在五組預設隊伍中選擇兩個隊伍:teamRED 和 teamBLUE 來進行一場對抗賽</p>' +
    '<div>  ' +
    '<center><input id="submit-btn" type="submit" onClick="myClick()"  value="Game Start" class="submit-btn" ></input></center>' +
    '</div>');
    
     $("#submit-btn").click(function() {
         $("#container").html(''+
         '<h1 align="center"><font face="fantasy">Please Select  Team:</font></h1>' +
         '<div class="select_div">' +
         '  <img  style="position: absolute; border:2px green solid; display:block; margin:auto; " src="https://dpsvdv74uwwos.cloudfront.net/statics/img/ogimage/red-team-vs-blue-team.png">' +
         '   <div style = "position: relative;  background-color:#C7FF91; left:10%;  top:220px ;   width:300px;height:200px;border:3px blue  solid;">' +
         '   1' +
         '   </div>' +
         '   <div style = "position: relative; background-color:#C7FF91; left:62%;  bottom:80px;    width:300px;height:200px;border:3px #CC0000  solid;">' +
         '     2d' +
         '  </div>' +
         '  <div style = "position: relative; background-color:#C7FF91; left: 10%;  top:40px;    width:300px;height:40px;border:3px blue  solid;">' +
         '     3' +
         '  </div>' +
         '  <div style = "position: relative; background-color:#C7FF91; left:62%;  bottom: 100px;    width:300px;height:40px;border:3px #CC0000  solid;">' +
         '     4' +
         '  </div>' +
         '</div>' +
         '<br>' +
         '<center><input type="submit" onClick="myClick()"  value="READY" class="submit-btn" ></input></center>');
     });
});
