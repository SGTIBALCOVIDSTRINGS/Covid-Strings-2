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
subheading2=result for matchup1
subheading3=result for matchup2
subheading4=result for matchup3
subheading5=result for matchup4
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
<header.html>
advancing rounds
contains criteria required for a team to advance to the second round 
advancingteams=slice(current teams);
<subheading.html>
result for matchup1 
the code for how to determine the end result of matchup1 of covid strings 
result =declarewinner(matchup1);
if red score >=forty:
console.log(red protein spikers win )
else:
remain
if magenta score>=forty:
console.log(magenta magnetizers win)
else:
remain
<subheading.html>
result for matchup2 
the code for how to determine the end result of matchup2 of covid strings 
result =declarewinner(matchup2);
if white score >=forty:
console.log(white transit angels win )
else:
remain
if blue score>=forty:
console.log(blue curve crushers win)
else:
remain
<subheading.html>
result for matchup3 
the code for how to determine the end result of matchup3 of covid strings 
result =declarewinner(matchup3);
if orange score >=forty:
console.log(orange rna messengers win )
else:
remain
if purple score>=forty:
console.log(purple brave hearts win)
else:
remain
<subheading.html>
result for matchup4 
the code for how to determine the end result of matchup4 of covid strings 
result =declarewinner(matchup4);
if pink score >=forty:
console.log(pink covid disease fighters win )
else:
remain
if black score=>forty:
console.log(black night riders win)
else:
remain
return filename
