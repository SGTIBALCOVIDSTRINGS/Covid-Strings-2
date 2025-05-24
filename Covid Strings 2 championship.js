doc type html
html. lang.en
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings2 championship’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=championship overview
heading2=championship code
heading3=championship round questions
heading4=victory
subheading1=team stealing
subheading2=result for championship  matchup
<header.html>
championship overview
contains an overview of the championship
html
head
utf8
viewport content=width=device-width, initial-scale=one
title covidstrings 2 championship round bracket
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings2 championship game .js  
team high seed= highest remaining seed
team low seed = lowest remaining seed
championship game=(high versus lowest remaining seed)  
rounddiv name=covid strings2 championship round
matchupdiv= document.createelement(div);
matchupdiv.classname =matchup;
matchupdiv.innerhtml =[team low seed versus team high seed]
rounddiv.appendchild(matchupdiv);
bracket.appendchild(rounddiv);
advancingteam =slice(currentteams) 
<header.html>
championship round questions
the questions asked in the championship round of the covid strings contest
java util.scanner
java.util
championship round questions=questions[26-32]
collections.shuffle(arrays.aslist(questions)
question26
question27
question28
question29
question30
question31
question32
private string getblanks(int numberofblanks)
char[] chars =new char[numberofblanks]
arrays.fill chars 
return new string chars 
bracket.addeventlistener((event) => 
myclass=(non-concatenated)
if category==math problem:
prompt
log
else:
select from multiple choice
if category ==multiplechoice:
select answer
else:
prompt
log
myclass=new myclass(concatenated) 
return category
if category==math problem:
prompt
log
else:
select from multiple choice
if category == multiplechoice:
select answer
else:
prompt
log
import syntax 
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final  answer==incorrect:
opposing team steals
else:
change covid strings matchup  score
substring(start,end)
userin.multiple choice
advanceteams=slice(currentteams)
<header.html>
victory
contains the function and processes necessary to declare the winning team
if selectedanswer==correct answer:
return true
else:
return false
<subheading.html>
result for championship matchup  
the code for how to determine the end result of covid strings2 championship
result =declarewinner(team1score,team2score);
if team high seed championship game score >=sixty:
console.log (high seed wins covid strings2) 
else:
remain
if team low seed championship game score>=sixty:
console.log(low seed wins covid strings2)
else:
remain
return filename
