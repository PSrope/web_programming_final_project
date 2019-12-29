function myClick1()
{
	alert("選擇隊伍ˊˇˋ");
}

function selectA_func(){
    var a = document.getElementById("selectA").value;
    a = parseInt(a, 10);
    team_choiceA = a;
    document.getElementById("pickA").src = a + ".jpg";
 }
 function selectB_func(){
    var b = document.getElementById("selectB").value;
    b = parseInt(b, 10);
    team_choiceB = b;
    document.getElementById("pickB").src = b + ".jpg";
 }
