//code1
function myClick1()
{
	alert("選擇隊伍ˊˇˋ");
}

//code2
function myClick2()
{
    alert("來排棒次吧");
}

function selectA_func(){
    var a = document.getElementById("selectA").value;
    a = parseInt(a, 10);
    team_choiceA = a;
    determinA = team_choiceA * 10;
    document.getElementById("pickA").src = a + ".jpg";
 }
 function selectB_func(){
    var b = document.getElementById("selectB").value;
    b = parseInt(b, 10);
    team_choiceB = b;
    determinB = team_choiceB * 10;
    document.getElementById("pickB").src = b + ".jpg";
 }

//code3
 function myClick3(){  
    for(var i = 0;i < 10;i++){
       orderA[i] = $("#teamA_drag").find("li").eq(i).val();
       console.log(orderA[i]);
    }
    for(var i = 0;i < 10;i++){
       orderB[i] = $("#teamB_drag").find("li").eq(i).val();
       console.log(orderB[i]);
    }
 }

 function teamset(){
    document.getElementById("status_A").innerHTML = "<p style='font-size: 30px;color:lightgray;'><b>位置/名字/打擊/投球/守備</b></p>";
    document.getElementById("teamA_drag").innerHTML = "";
    for(var i=0;i <10;i++){
       document.getElementById("status_A").innerHTML +=
       "<h1><font face='fantasy'>" + teams.place[determinA+i] + " " + teams.name[determinA+i] + " " + 
          teams.batting[determinA+i] + " " + teams.pitching[determinA+i] + " " + teams.fielding[determinA+i] + "</font></h1>";
       document.getElementById("teamA_drag").innerHTML +=
       "<li value='" + (determinA + i) + "'><font size='10' face='微軟正黑體'>" + teams.name[determinA+i] + "</font></li>";
    }

    document.getElementById("status_B").innerHTML = "<p style='font-size: 28px;color:lightgray;'><b>位置/名字/打擊/投球/守備</b></p>";
    document.getElementById("teamB_drag").innerHTML = "";
    for(var i=0;i <10;i++){
       var avg = parseInt((teams.batting[determinB+i] + teams.pitching[determinB+i] + teams.fielding[determinB+i]) / 3, 10);
       document.getElementById("status_B").innerHTML +=
       "<h1><font face='fantasy'>" + teams.place[determinB+i] + " " + teams.name[determinB+i] + " " + 
          teams.batting[determinB+i] + " " + teams.pitching[determinB+i] + " " + teams.fielding[determinB+i] + "</font></h1>";
       document.getElementById("teamB_drag").innerHTML +=
       "<li value='" + (determinB + i) + "'><font size='10' face='微軟正黑體'>" + teams.name[determinB+i] + "</font></li>";
    }
 }
