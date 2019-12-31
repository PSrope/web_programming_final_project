//code1
function myClick1()
{
	alert("選擇隊伍ˊˇˋ");
}

//code2

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
    }
    for(var i = 0;i < 10;i++){
       orderB[i] = $("#teamB_drag").find("li").eq(i).val();
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

 //play by play
 function startgame(){
 //   console.log(orderA, determinA);
   for(var i = 0;i < 10;i++){
       var avg = parseInt((teams.batting[orderA[i]] + teams.pitching[orderA[i]] + teams.fielding[orderA[i]]) / 3, 10);
       document.getElementById("batterListA").innerHTML +=
       "<tr><td>" + teams.place[orderA[i]] + "</td><td>" + teams.name[orderA[i]] + "</td><td>" + avg + "</td></tr>";
   }
   for(var i = 0;i < 10;i++){
       var avg = parseInt((teams.batting[orderB[i]] + teams.pitching[orderB[i]] + teams.fielding[orderB[i]]) / 3, 10);
       document.getElementById("batterListB").innerHTML += 
       "<tr><td>" + teams.place[orderB[i]] + "</td><td>" + teams.name[orderB[i]] + "</td><td>" + avg + "</td></tr>";
   }
   document.getElementById("innings").innerHTML = "1 <i class='fas fa-caret-up'></i>";
   document.getElementById("logo1").innerHTML = "<img src='" + team_choiceA + ".jpg'></div>";
   document.getElementById("logo2").innerHTML = "<img src='" + team_choiceB + ".jpg'></div>";
   document.getElementById("outs").innerHTML = "<i class='far fa-circle'>&nbsp;</i><i class='far fa-circle'></i>&nbsp;&nbsp;outs";
   $("#base1").css("background-color", "lightgray");
   $("#base2").css("background-color", "lightgray");
   $("#base3").css("background-color", "lightgray");
   document.getElementById("plays_table").innerHTML = "<tr><td>比賽開始！！</td></tr><tr><td>1局上半</td></tr>";
   allcases();
}

function allcases(){
   while(1){
       scoreA = 0;
       scoreB = 0;
       if(count_out == 1){
           document.getElementById("outs").innerHTML = "<i class='fas fa-circle'>&nbsp;</i><i class='far fa-circle'></i>&nbsp;&nbsp;outs";
       }
       if(count_out == 2){
           document.getElementById("outs").innerHTML = "<i class='fas fa-circle'>&nbsp;</i><i class='fas fa-circle'></i>&nbsp;&nbsp;outs";
       }
       if(count_out == 3){
           count_out = 0;
           document.getElementById("plays_table").innerHTML += "<tr><td>三人出局！</td></tr>";
           $("#base1").css("background-color", "lightgray");
           $("#base2").css("background-color", "lightgray");
           $("#base3").css("background-color", "lightgray");
           base_case = 0;
           if(inning == 14){
               document.getElementById("plays_table").innerHTML += "<tr><td>比賽結束！</td></tr>";
               inning = 1;
               document.getElementById("finalPage").disabled = false;
               document.getElementById("skip").disabled = true;
               text_copy += document.getElementById("plays_table").innerHTML;
               break;
           } else {
               document.getElementById("plays_table").innerHTML += "<tr><td>攻守交換！</td></tr><tr><td>" + " " + "</td></tr>";
               if(inning % 2 == 0) {
                   document.getElementById("plays_table").innerHTML += "<tr><td>第" + (inning / 2) + "局結束</td></tr>";
                   document.getElementById("plays_table").innerHTML += "<tr><td>-----------------------------------------------------------------------------------------------</td></tr>";
                   document.getElementById("plays_table").innerHTML += "<tr><td>" + (inning / 2 + 1) + "局上半</td></tr>";
               } else {
                   document.getElementById("plays_table").innerHTML += "<tr><td>" + ((inning + 1) / 2) + "局下半</td></tr>";
               }
               inning++;
           }
           document.getElementById("outs").innerHTML = "<i class='far fa-circle'>&nbsp;</i><i class='far fa-circle'></i>&nbsp;&nbsp;outs";
       } else {
           if(inning % 2 == 1){
               if(count_batterA == 10){
                   count_batterA = 0;
               }
               document.getElementById("innings").innerHTML = (inning / 2 + 0.5) +  " <i class='fas fa-caret-up'></i>";
               if(pitcher(teams.pitching[determinA])==1){
                   if(batter(teams.batting[orderA[count_batterA]])==1){
                       case_type= hit(teams.batting[orderA[count_batterA]]);
                       } else {
                           document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 三振出局！！</td></tr>";
                           count_out++;
                           teams.AB[orderA[count_batterA]]++;
                           teams.SO[orderA[count_batterA]]++;
                           count_batterA++;
                           case_type = -3 ;    //表示三振case
                           base_case = basepush(base_case, case_type);
                           scorecaculate();
                           continue;
                           //printf("strike!! out!!");
                       }
               } else {
                   document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 獲得四壞球保送</td></tr>";
                   teams.AB[orderA[count_batterA]]++;
                   teams.BB[orderA[count_batterA]]++;
                   count_batterA++;
                   case_type = -4;      //代表四壞case
                   base_case = basepush(base_case, case_type);
                   scorecaculate();
                   continue;
               }
               if(case_type > -1){
                   if(case_type==0){
                       // ((1b acc)+(sf acc)+(rf acc))/3*0.3=擋住球的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + "打出一支一壘安打</td></tr>";
                       teams.AB[orderA[count_batterA]]++;
                       teams.H[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("1b hit!!");

                       //1bhit(y=1) or 2bhit(y=2) orr 3bhit(y=3)
                       //y=(rand()%3)+1;
                   }
                   else if(case_type==1){
                       // ((2b acc)+(ss acc)+(cf acc))/3*0.3=擋住球的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + "揮出了一支二壘安打</td></tr>";
                       teams.AB[orderA[count_batterA]]++;
                       teams.H[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("2b hit!!");

                       //lfhit(y=1) or cfhit(y=2) orr rfhit(y=3)
                       //y=(rand()%3)+1;
                   }
                   else if(case_type==2){
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 全力揮擊!! 這是一支 全！壘！打！</td></tr>";
                       teams.AB[orderA[count_batterA]]++;
                       teams.H[orderA[count_batterA]]++;
                       teams.HR[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("home run!!!");
                   }
                   else if(case_type==3){
                       // cf acc*0.3=失誤的機率 IF CFE 1個壘包 以此類推

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打得很高，但是不夠遠，被中外野手接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("cf fly!!");
                   }
                   else if(case_type==4){
                         // lf acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打高了，左外野手接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("Lf fly!!");
                   }
                   else if(case_type==5){
                         // rf acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打了一個飛球，被右外野手接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("Rf fly!!");
                   }
                   else if(case_type==6){
                         // 3b acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打了個高射炮，被三壘手接殺</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("3B fly!!");
                   }
                   else if(case_type==7){
                         // 2b acc*0.3=失誤的機率
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 沒掌握好，打成二壘方向滾地球被刺殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("2B roll!!");
                   }
                   else if(case_type==8){
                         // sf acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打穿二游，可惜被自由手攔截刺殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("sf roll!!");
                   }
                   else if(case_type==9)
                   {
                         // ss acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 切到，形成游擊方向的滾地球被刺殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("ss roll!!");
                   }
                   else if(case_type==10)
                   {
                         // p acc*0.3=失誤的機率
                       
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打到投手前方被刺殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("p roll!!");
                   }
                   else if(case_type==11)
                   {
                         // 1b acc*0.3=失誤的機率
                       
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 一壘方向飛球被接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("1b fly!!");
                   }
                   else if(case_type==12)
                   {
                         // 2b acc*0.3=失誤的機率
                       
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打到二壘上空被接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("2b fly!!");
                   }
                   else if(case_type==13)
                   {
                         // sf acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打到內外野上方被自由手接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("sf fly!!");
                   }
                   else if(case_type==14)
                   {
                         // ss acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterA + 1) + "棒" + "  " +  teams.name[orderA[count_batterA]] + " 打到游擊上方被]接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderA[count_batterA]]++;
                       count_batterA++;
                       //printf("ss fly!!");
                   }
               }
                   
           }
           else if(inning % 2 == 0){
               if(count_batterB == 10){
                       count_batterB = 0;
                   }
               document.getElementById("innings").innerHTML = inning / 2 +  " <i class='fas fa-caret-down'></i>";
               if(pitcher(teams.pitching[determinB])==1){
                   if(batter(teams.batting[orderB[count_batterB]])==1){
                       case_type= hit(teams.batting[orderB[count_batterB]]);
                   } else {
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 三振出局！！</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       teams.SO[orderB[count_batterB]]++;
                       count_batterB++;
                       case_type = -3;
                       base_case = basepush(base_case, case_type);
                       scorecaculate();
                       continue;
                       //printf("strike!! out!!");
                   }
               } else {
                   document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 獲得四壞球保送</td></tr>";
                   teams.AB[orderB[count_batterB]]++;
                   teams.BB[orderB[count_batterB]]++;
                   count_batterB++;
                   case_type = -4;
                   base_case = basepush(base_case, case_type);
                   scorecaculate();
                   continue;
               }
               if(case_type > -1){
                   if(case_type==0){
                       // ((1b acc)+(sf acc)+(rf acc))/3*0.3=擋住球的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打出一支一壘安打</td></tr>";
                       teams.AB[orderB[count_batterB]]++;
                       teams.H[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("1b hit!!");
                       

                       //1bhit(y=1) or 2bhit(y=2) orr 3bhit(y=3)
                       //y=(rand()%3)+1;
                   }
                   else if(case_type==1){
                       // ((2b acc)+(ss acc)+(cf acc))/3*0.3=擋住球的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 揮出了一支二壘安打</td></tr>";
                       teams.AB[orderB[count_batterB]]++;
                       teams.H[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("2b hit!!");

                       //lfhit(y=1) or cfhit(y=2) orr rfhit(y=3)
                       //y=(rand()%3)+1;
                   }
                   else if(case_type==2){
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 全力揮擊!! 這是一支 全！壘！打！</td></tr>";
                       teams.AB[orderB[count_batterB]]++;
                       teams.H[orderB[count_batterB]]++;
                       teams.HR[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("home run!!!");
                   }
                   else if(case_type==3){
                       // cf acc*0.3=失誤的機率 IF CFE 1個壘包 以此類推

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打得很高，但是不夠遠，被中外野手接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("cf fly!!");
                   }
                   else if(case_type==4){
                         // lf acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打高了，左外野手接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("Lf fly!!");
                   }
                   else if(case_type==5){
                         // rf acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打了一個飛球，被右外野手接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("Rf fly!!");
                   }
                   else if(case_type==6){
                         // 3b acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打了個高射炮，被三壘手接殺</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("3B fly!!");
                   }
                   else if(case_type==7){
                         // 2b acc*0.3=失誤的機率
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 沒掌握好，打成二壘方向滾地球被刺殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("2B roll!!");
                   }
                   else if(case_type==8){
                         // sf acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打穿二游，可惜被自由手攔截刺殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("sf roll!!");
                   }
                   else if(case_type==9)
                   {
                         // ss acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 切到，形成游擊方向的滾地球被刺殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("ss roll!!");
                   }
                   else if(case_type==10)
                   {
                         // p acc*0.3=失誤的機率
                       
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打到投手前方被刺殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("p roll!!");
                   }
                   else if(case_type==11)
                   {
                         // 1b acc*0.3=失誤的機率
                       
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 一壘方向飛球被接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("1b fly!!");
                   }
                   else if(case_type==12)
                   {
                         // 2b acc*0.3=失誤的機率
                       
                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打到二壘上空被接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("2b fly!!");
                   }
                   else if(case_type==13)
                   {
                         // sf acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打到內外野上方被自由手接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("sf fly!!");
                   }
                   else if(case_type==14)
                   {
                         // ss acc*0.3=失誤的機率

                       document.getElementById("plays_table").innerHTML += "<tr><td>第" + (count_batterB + 1) + "棒" + "  " +  teams.name[orderB[count_batterB]] + " 打到游擊上方被]接殺出局</td></tr>";
                       count_out++;
                       teams.AB[orderB[count_batterB]]++;
                       count_batterB++;
                       //printf("ss fly!!");
                   }
               }
           }
       //////////////////////////////////////////////////
           base_case = basepush(base_case, case_type);
           basetype(base_case);
           scorecaculate();
       }
   }
}

function scorecaculate(){
   for(var i=0;i <10;i++){
       scoreA += teams.RBI[determinA+i];
   }
   for(var i=0;i <10;i++){
       scoreB += teams.RBI[determinB+i];
   }
   document.getElementById("score").innerHTML = "" + scoreA + " ： " + scoreB;
}
function pitcher(acc){
   var a, range;
   a = Math.floor(Math.random() * 100) + 1; //x=1~100
   range = 20 + acc / 10 * 8;
   if(a <= range){
       return 1;
   }
   return 0;
}
function batter(str){
   var b, range;
   b = Math.floor(Math.random() * 100) + 1; //x=1~100
   range = 10 + str / 10 * 9;

   if(b <= range){
       return 1;
   }
   else if(b > range){
       return 0;
   }
}
function hit(str){
   var x,y;
   x = Math.floor(Math.random() * 100) + 1; //x=1~100
   if(1 <= x && x <= 10 && str >= 70){
       return 2;// homerun
   }
   else if(20 <= x && x <= 35 && str >= 50){
       return 1;//2b
   }
   else if(35 <= x && x <= 70){
       return 0;//1b
   } else {
       if(1 <= x && x <= 10){
           y = Math.floor(Math.random() * 4) + 3;//y=3~6
           return y;
       }
       else if(20 <= x && x <= 35){
           y=Math.floor(Math.random() * 3) +7;//y=7~9
           return y;
       }
       else{
           y = Math.floor(Math.random() * 5) + 10; //y=10~14
           return y;
       }
   }
}
function basepush(base, type){
   if(base == 0) {
       if(type == -3 || ( type >= 3 && type <= 14)){
           return 0;
       }
       else if(type == -4 || type == 0){
           return 1;
       }
       else if(type == 1){
           
           return 2;
       }
       else if(type == 2){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 0;
       }
   }
   else if(base == 1){
       if(type == -3 || ( type >= 3 && type <= 14)){
           return 1;
       }
       else if(type == -4 || type == 0){
           return 4;
       }
       else if(type == 1){
           return 6;
       }
       else if(type == 2){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 2;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 2;
           }
           return 0;
       }
   }
   else if(base == 2){
       if(type == -3 || (type >= 6 && type <= 14) || type == 4){
           return 2;
       }
       if(type == 3 || type == 5) {
           return 3;
       }
       else if(type == -4){
           return 4;
       }
       else if(type == 0){
           return 5;
       }
       else if(type == 1){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 2;
       }
       else if(type == 2){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 2;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 2;
           }
           return 0;
       }
   }
   else if(base == 3){
       if(type == -3 || (type >= 6 && type <= 14) || type == 4){
           return 2;
       }
       if(type == 3 || type == 5) {
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 0;
       }
       else if(type == -4){
           return 5;
       }
       else if(type == 0){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 1;
       }
       else if(type == 1){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 2;
       }
       else if(type == 2){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 2;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 2;
           }
           return 0;
       }
   }
   else if(base == 4){
       if(type == -3 || (type >= 6 && type <= 14) || type == 4){
           return 4;
       }
       if(type == 3 || type == 5) {
           return 5;
       }
       else if(type == -4){
           return 7;
       }
       else if(type == 0){
           return 7;
       }
       else if(type == 1){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 6;
       }
       else if(type == 2){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 3;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 3;
           }
           return 0;
       }
   }
   else if(base == 5){
       if(type == -3 || (type >= 6 && type <= 14) || type == 4){
           return 5;
       }
       if(type == 3 || type == 5) {
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 1;
       }
       else if(type == -4){
           return 7;
       }
       else if(type == 0){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 4;
       }
       else if(type == 1){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 6;
       }
       else if(type == 2){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 3;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 3;
           }
           return 0;
       }
   }
   else if(base == 6){
       if(type == -3 || (type >= 6 && type <= 14) || type == 4){
           return 6;
       }
       if(type == 3 || type == 5) {
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 3;
       }
       else if(type == -4){
           return 7;
       }
       else if(type == 0){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 5;
       }
       else if(type == 1){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 2;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 2;
           }
           return 2;
       }
       else if(type == 2){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 3;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 3;
           }
           return 0;
       }
   }
   else if(base == 7){
       if(type == -3 || (type >= 6 && type <= 14) || type == 4){
           return 7;
       }
       if(type == 3 || type == 5) {
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 5;
       }
       else if(type == -4){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 7;
       }
       else if(type == 0){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1]++;
           } else {
               teams.RBI[determinB + count_batterB - 1]++;
           }
           return 7;
       }
       else if(type == 1){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 2;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 2;
           }
           return 6;
       }
       else if(type == 2){
           if(inning % 2 == 1) {
               teams.RBI[determinA + count_batterA - 1] += 4;
           } else {
               teams.RBI[determinB + count_batterB - 1] += 4;
           }
           return 0;
       }
   }
}

function basetype(base_case){
   if(base_case == 0) {
       $("#base1").css("background-color", "lightgray");
       $("#base2").css("background-color", "lightgray");
       $("#base3").css("background-color", "lightgray");
   }
   else if(base_case == 1){
       $("#base1").css("background-color", "yellow");
       $("#base2").css("background-color", "lightgray");
       $("#base3").css("background-color", "lightgray");
   }
   else if(base_case == 2){
       $("#base1").css("background-color", "lightgray");
       $("#base2").css("background-color", "yellow");
       $("#base3").css("background-color", "lightgray");
   }
   else if(base_case == 3){
       $("#base1").css("background-color", "lightgray");
       $("#base2").css("background-color", "lightgray");
       $("#base3").css("background-color", "yellow");
   }
   else if(base_case == 4){
       $("#base1").css("background-color", "yellow");
       $("#base2").css("background-color", "yellow");
       $("#base3").css("background-color", "lightgray");
   }
   else if(base_case == 5){
       $("#base1").css("background-color", "yellow");
       $("#base2").css("background-color", "lightgray");
       $("#base3").css("background-color", "yellow");
   }
   else if(base_case == 6){
       $("#base1").css("background-color", "lightgray");
       $("#base2").css("background-color", "yellow");
       $("#base3").css("background-color", "yellow");
   }
   else if(base_case == 7){
       $("#base1").css("background-color", "yellow");
       $("#base2").css("background-color", "yellow");
       $("#base3").css("background-color", "yellow");
   }
}

// BOX
function boxset(){
   $("#resultA_logo").css("background-image", "url(" + team_choiceA + ".jpg)");
   $("#resultB_logo").css("background-image", "url(" + team_choiceB + ".jpg)");
   document.getElementById("result_table").innerHTML = "<tr><td style='width: 200px;''> </td><td>R</td><td>H</td><td>HR</td></tr>";
   var H_A = 0, H_B = 0, HR_A = 0, HR_B = 0;
   scoreA = 0; scoreB = 0;
   for(var i = 0;i < 10;i++){
       H_A += teams.H[determinA+i];
       HR_A += teams.HR[determinA+i];
       H_B += teams.H[determinB+i];
       HR_B += teams.HR[determinB+i];
       scoreA += teams.RBI[determinA+i];
       scoreB += teams.RBI[determinB+i];
   }
   $("#score").html("&nbsp;" + scoreA + " ： " + scoreB + "&nbsp;");
   document.getElementById("result_table").innerHTML += "<tr><td>" + teams.team_name[team_choiceA] + "</td><td>" + scoreA + "</td><td>" + H_A + "</td><td>" + HR_A + "</td></tr>";
   document.getElementById("result_table").innerHTML += "<tr><td>" + teams.team_name[team_choiceB] + "</td><td>" + scoreB + "</td><td>" + H_B + "</td><td>" + HR_B + "</td></tr>";
   $("#plays_table").html(text_copy);
   $("#TeamA_batter").html("<tr><td style='width: 300px;'>Team. " + teams.team_name[team_choiceA] + "</td><td>AB</td><td>H</td><td>RBI</td><td>BB</td><td>SO</td><td>HR</td></tr>");
   $("#TeamB_batter").html("<tr><td style='width: 300px;'>Team. " + teams.team_name[team_choiceB] + "</td><td>AB</td><td>H</td><td>RBI</td><td>BB</td><td>SO</td><td>HR</td></tr>");
   for(var i = 0; i < 10; i++) {
       document.getElementById("TeamA_batter").innerHTML +=
       "<td style='text-align: left; text-indent: 10px; text-indent: 5px;'>" + teams.name[determinA+i] + "</td><td>" + teams.AB[determinA+i] + "</td><td>" + teams.H[determinA+i] + "</td><td>" + teams.RBI[determinA+i] + "</td><td>" + teams.BB[determinA+i] + "</td><td>" + teams.SO[determinA+i] + "</td><td>" + teams.HR[determinA+i] + "</td>";
       document.getElementById("TeamB_batter").innerHTML +=
       "<td style='text-align: left; text-indent: 10px; text-indent: 5px;'>" + teams.name[determinB+i] + "</td><td>" + teams.AB[determinB+i] + "</td><td>" + teams.H[determinB+i] + "</td><td>" + teams.RBI[determinB+i] + "</td><td>" + teams.BB[determinB+i] + "</td><td>" + teams.SO[determinB+i] + "</td><td>" + teams.HR[determinB+i] + "</td>";
   }
}