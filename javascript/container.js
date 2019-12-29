$(document).ready(function() {
    $("#note_file a").mouseenter(function(){
        $("#note_file a").css("color","brown");
        $("#note_file a").html(function(i, origText){
            return origText + "<font size='2'>說明文件</font>";
        });
    })
    $("#note_file a").mouseleave(function(){
        $("#note_file a").css("color","black");
        $("#note_file a").html(''+'<i class="fas fa-book"></i>');
    });

    $("#container").html(''+
    '<h1 align="center"><font face="fantasy">SoftBall Game Simulator</font></h1>' +
    '<img style="display:block; margin:auto;" src="ball.jpeg" border="2"></img>' +
    '<div style = "position: relative; background-color:rgb(165, 0, 0,0.8);  margin: auto; width:660px;height:40px;border:3px #CC0000  solid;">' +
    '<p><font size="4" face="微軟正黑體" color="white" align ="center">您將要在五組預設隊伍中選擇兩個隊伍:teamRED 和 teamBLUE 來進行一場對抗賽</font></p>' +
    '<center><input type="submit" onClick="myClick1()"  value="Game Start" class="submit-btn" id="submit-btn"></input></center>' +
    '<br>' +
    '</div>');
    
     $("#submit-btn").click(function() {
         $("#container").html(''+
        ' <h1 align="center"><font face="fantasy">Please Select  Team:</font></h1>' +
        ' <div class="select_div">' +
        '   <img  style="position: absolute; border:2px green solid; display:block; margin:auto; " src="https://dpsvdv74uwwos.cloudfront.net/statics/img/ogimage/red-team-vs-blue-team.png">' +
        '    <div style = "position: relative;  background-color:rgb(0, 0, 165,0.8); left:10%;  top:220px ;   width:300px;height:200px;border:3px blue  solid;">' +
        '       <img id="pickA" src="0.jpg" style="display:block; margin:auto; height: 194px;">' +
        '    </div>' +
        '    <div style = "position: relative; background-color:rgb(165, 0, 0,0.8); left:62%;  bottom:80px;    width:300px;height:200px;border:3px #CC0000  solid;">' +
        '       <img id="pickB" src="0.jpg" style="display:block; margin:auto; height: 194px;">' +
        '   </div>' +
        '   <div style = "position: relative; background-color:rgb(0, 0, 165,0.8); left:10%;  top:40px;    width:300px;height:40px;border:3px blue  solid;">' +
        '      <select id="selectA" style="display:block; margin:auto; height: 34px;width:294px; background-color: rgb(0, 0, 165,0.8);color: lightgray;" onchange="selectA_func()">' +
        '         <option value="0">NTOU CS</option>' +
        '         <option value="1">Pokemon</option>' +
        '         <option value="2">Jojo</option>' +
        '         <option value="3">Hunter X Hunter</option>' +
        '         <option value="4">我們法院見</option>' +
        '      </select>' +
        '   </div>' +
        '   <div style = "position: relative; background-color:rgb(165, 0, 0,0.8); left:62%;  bottom: 100px;    width:300px;height:40px;border:3px #CC0000  solid;">' +
        '    <select id="selectB" style="display:block; margin:auto; height: 34px;width:294px; background-color: rgb(165, 0, 0,0.8);color: lightgray;" onchange="selectB_func()">' +
        '       <option value="0">NTOU CS</option>' +
        '       <option value="1">Pokemon</option>' +
        '       <option value="2">Jojo</option>' +
        '       <option value="3">Hunter X Hunter</option>' +
        '       <option value="4">我們法院見</option>' +
        '    </select>' +
        '   </div>' +
        ' </div>' +
        ' <br>' +
        ' <center><input type="submit" onClick="myClick()"  value="READY" class="submit-btn" ></input></center>' 
         );
     });
});
