doc.type html
html.lang.en
script
header=document create.element (header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings2 first round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=first round overview
heading2=matchups
heading3=first round questions
heading4=advancing rounds
subheading1=team stealing
<header.html>
first round overview
an overview of the first round of covid strings2 includes seeding 
html 
head
utf-eight
viewport content=width=device-width,initalscale one
title covid strings2 first round bracket 
div id bracket class bracket div
script src bracket .js
link rel=stylesheet href=styles.css
head
body
html
brakcet container{}
display: grid;
gap : tenpx:
matchup{}
solid zero;
padding:
text-align: center;
filename=covid strings2 first round.js
covid strings first round=(highest overall seed ,second highest seed third highest seed first middle seed, second middle seed, third lowest seed ,second lowest seed,lowest overall seed)
highest overall seed = 1 seed
second highest seed=2 seed
third highest seed=3 seed
firstmiddleseed=4seed
second middle seed = 5 seed
third lowest seed= 6 seed
second lowest seed = 7 seed
lowest overall seed = 8 seed
<header.html>
matchups 
for first round there are 8 teams which equals 4 matchups 
teams. foreach((team,index))=>{}
matchup 1= (magenta magnetizers versus red protein spikers)
matchup 2= (blue curve crushers versus white transit angels)
matchup3= (purple brave hearts versus orange messengers)
matchup 4= (black night riders versus pink covid disease fighters)
matchup.covid strings seed list .add(matchup)
matchup.textcontent=team
bracket.container.appendchild(matchup)
covid strings 2 team list=[orange rna messengers pink covid disease fighters,red protein spikers,white transit angels, blue curve crushers, magenta magentizers, black night riders purple brave hearts]
rounddiv =document.createelement(div);
rounddiv.classname = covid strings2 first round;
rounddiv.appenedchild(matchupdiv)
teams.foreach((team,index))=>{}
<header.html>
first round questions
the questions asked in the first round of the covid strings contest
java.util.scanner
java.util
first round questions= questions[1-17]
collections.shuffle(arrays.aslist(questions)
question1 
question2
question3
question4
question5 
question6
question7
question8
question9
question10
question11
question12
question13
question14
question15
question16
question17
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
private string getblanks(int numberofnlanks)
char[] chars = char[numberofblanks]
arrays.fill chars 
string chars 
bracket.appendchild(rounddiv)
declare winner
result =declareWinner(matchup1);
advancingteams=slice(current teams);
if red score >=fourty:
console.log(red protein spikers win )
else:
console.log(magenta magnetizers win)
result =declareWinner(matchup2);
if white score >=fourty:
console.log(white transit angels win )
else:
console.log(blue curve crushers Win)
result =declareWinner(matchup3);
if orange score >=fourty:
console.log(orange rna messengers win )
else:
console.log(purple brave hearts win)
result =declareWinner(matchup4);
if pink score >=fourty:
console.log(pink covid disease fighters win )
else:
console.log(black night riders win)
return filename
