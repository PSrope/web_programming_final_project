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
    '<center><input type="submit" onclick="myClick1()"  value="Game Start" class="submit-btn" id="submit-btn"></input></center>' +
    '<br>' +
    '</div>');

    $(document).on("click", "#submit-btn2", function() {
        $("#container").html('' +
        '<div style="position: relative; left: 650px;">' +
        '<h1><font face="fantasy">Check Player:</font></h1>' +
        ' </div>' +
        ' <div style="margin:0px auto;">' +
        ' <div style = "position: absolute; left:595px;  top:120px;    width:200px;height:40px;">' +
        '    <h1><font face="fantasy">Team Red</font></h1>' +
        ' </div>' +
        ' <div style = "position:absolute; left:470px;  top:200px;  background-color:rgb(226, 255, 60, 0.8);   width:270px;height:700px;border:3px #CC0000  solid;">' +
        '    <ul id = "teamA_drag">' +
        '    </ul>' +
        '    <div style = "position: relative; left:300px;  bottom:695px;   background-color:rgb(226, 255, 60, 0.8);  width:270px;height:700px;border:3px #CC0000  solid;"> ' +
        '       <ul id = "teamB_drag">' +
        '       </ul>' +
        '       <br/>' +
        '    </div>' +
        ' </div>' +
        ' <div id="status_A" style = "position:absolute; left:50px;  top:100px;   background-color:rgb(165, 0, 0,0.8);  width:400px;height:800px;border:3px #CC0000  solid;">' +
        ' </div>' +
        ' <div style = "position:absolute; left:95px;  top:20px;     width:300px;height:50px;">' +
        '    <h1><center><font face="fantasy">Status</font></center></h1>' +
        ' </div>' +
        '   <div style = "position:absolute; left: 785px;  top:120px;    width:200px;height:40px;">' +
        '    <h1><font face="fantasy">Team Blue</font></h1>' +
        '   </div>' +
        ' <div id="status_B" style = "position:absolute; left: 1065px;  top:100px;  background-color:rgb(0, 0, 165,0.8);   width:400px;height:800px;border:3px #CC0000  solid;">' +
        ' </div>' +
        ' <div style = "position:absolute; left: 1115px;  top:20px;     width:300px;height:50px;">' +
        '    <h1><center><font face="fantasy">Status</font></center></h1>' +
        ' </div>' +
        '<script type="text/javascript">' +
        ' $("ul").dragsort();' +
        '</script>' +
        ' <input name="list1SortOrder" type="hidden" />' +
        ' <script type="text/javascript">' +
        '     function saveOrder() {' +
        '         var data = $("#list1 li").map(function() { return $(this).children().html(); }).get();' +
        '         $("input[name=list1SortOrder]").val(data.join("|"));' +
        '     };' +
        ' </script>' +
        ' </div>' +
        ' <input type="submit" onclick="myClick3()"  value="PLAY" class="submit-btn" id="submit-btn3" style="position: relative; left: 650px;"></input>'
        );
        teamset();
     });

     $(document).on("click", "#submit-btn3", function(){
         $("#container").html('' +
        ' <h1 align="center"><font face="fantasy">Play By Play</font></h1>' +
        ' <div id="bgset">' +
        '     <div class="score_board">' +
        '         <div class="innings" id="innings">' +
        '             1' +
        '             <i class="fas fa-caret-up"></i>' +
        '             <i class="fas fa-caret-down"></i>' +
        '         </div>' +
        '         <div class="scoreboard">' +
        '             <div class="score_box">' +
        '                 <div id="logo1"><img src="CT.gif"></div>' +
        '                 <div id="team1" style="color: rgb(165, 0, 0);">R</div>' +
        '                 <div id="score">0 ： 0</div>' +
        '                 <div id="team2" style="color: rgb(0, 0, 165);">B</div>' +
        '                 <div id="logo2"><img src="TC.jpg"></div>' +
        '             </div>' +
        '             <div id="outs">' +
        '                 <i class="fas fa-circle"></i>' +
        '                 <i class="far fa-circle"></i>' +
        '                 &nbsp;&nbsp;outs' +
        '             </div>' +
        '         </div>' +
        '         <div class="bases">' +
        '             <div id="base3"></div>' +
        '             <div id="base2"></div>' +
        '             <div id="base1"></div>' +
        '         </div>' +
        '     </div>' +
        '     <br>' +
        '     <div class="gamePlace">' +
        '         <div class="List_A">' +
        '             <table id="batterListA">' +
        '             <th colspan="3">Team RED</th>' +
        '             </table>                ' +
        '         </div>' +
        '         <div id="plays">' +
        '             <table id="plays_table">' +
        '                 <tr style="display: none;">' +
        '                     <td>安打啦</td>' +
        '                 </tr>' +
        '                 <tr >' +
        '                     <td>安打啦</td>' +
        '                 </tr>' +
        '             </table>' +
        '         </div>' +
        '         <div class="List_B">' +
        '             <table id="batterListB">' +
        '             <th colspan="3">Team BLUE</th>' +
        '             </table>' +
        '         </div>' +
        '     </div>' +
        '     <br>' +
        '     <input type="button" id="finalPage" value="Next" class="submit-btn2" disabled >' +
        '     <input type="button" id="skip" onclick="settime()" value="Quick End" class="submit-btn2">' +
        ' </div>'
         );
         startgame();
     });

     $(document).on("click", "#finalPage", function(){
        $("#container").html('' + 
        '<h1 align="center"><font face="fantasy">Result Box</font></h1>' +
        '<div id="bgset">' +
        '    <div class="result_box">' +
        '        <div id="resultA_logo"></div>' +
        '        <div id="resultB_logo"></div>' +
        '        <div id="score_record">' +
        '            <div id="team1" style="color: rgb(165, 0, 0);">R</div>' +
        '            <div id="score" style="font-size: 32px;">&nbsp;7 ： 9&nbsp;</div>' +
        '            <div id="team2" style="color: rgb(0, 0, 165);">B</div>' +
        '        </div>' +
        '        <table class="s_board" id="result_table" rules = none>' +
        '        </table>' +
        '    </div>' +
        '    <br>' +
        '    <input type="button" value="Back to Index" class="submit-btn2" id="toIndex">' +
        '    <ul class="nav nav-tabs" style="width: 96%; margin: auto;">' +
        '        <li class="active" style="font-family: fantasy; color: darkslategrey;"><a data-toggle="tab" href="#PbyP">Play By Play</a></li>' +
        '        <li><a data-toggle="tab" href="#TA" style="font-family: fantasy; color: darkslategrey;">Team Red</a></li>' +
        '        <li><a data-toggle="tab" href="#TB" style="font-family: fantasy; color: darkslategrey;">Team Blue</a></li>' +
        '    </ul>' +
        '    <div class="tab-content" style="width: 96%; margin: auto;">' +
        '        <div id="PbyP" class="tab-pane fade in active">' +
        '          <div id="plays">' +
        '            <table id="plays_table">' +
        '            </table>' +
        '          </div>' +
        '        </div>' +
        '        <div id="TA" class="tab-pane fade">' +
        '            <div class="just_div">' +
        '                <table id="TeamA_batter">' +
        '                </table>' +
        '            </div>' +
        '        </div>' +
        '        <div id="TB" class="tab-pane fade">' +
        '            <div class="just_div">' +
        '                <table id="TeamB_batter">' +
        '                </table>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>' 
        );
        boxset();
     });

     $(document).on("click", "#toIndex", function(){
        $("#container").html(''+
        '<h1 align="center"><font face="fantasy">SoftBall Game Simulator</font></h1>' +
        '<img style="display:block; margin:auto;" src="ball.jpeg" border="2"></img>' +
        '<div style = "position: relative; background-color:rgb(165, 0, 0,0.8);  margin: auto; width:660px;height:40px;border:3px #CC0000  solid;">' +
        '<p><font size="4" face="微軟正黑體" color="white" align ="center">您將要在五組預設隊伍中選擇兩個隊伍:teamRED 和 teamBLUE 來進行一場對抗賽</font></p>' +
        '<center><input type="submit" onclick="myClick1()"  value="Game Start" class="submit-btn" id="submit-btn"></input></center>' +
        '<br>' +
        '</div>');
        refresh();
     });

     $(document).on("click", "#submit-btn", function() {
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
       ' <center><input type="submit" value="READY" class="submit-btn" id="submit-btn2" onclick="ifSameTeam()"></input></center>'
        );
    });
});
