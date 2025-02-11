doc.type.html
script
filename=covid strings2 game plays.js
string unit=style for non-concatenated strings 
string array=style for concatenated strings 
blank=part of string that user must answer
user answer=individual users answer
team answer=teams answer
user in select string category
if category==non-concatenated
user.fill blank in string unit
else:
remain
if category==concatenated
user.fill blank in string array
else:
remain
if selected question==multiple choice
user in select a,b,c,d
else:
remain
if hyperlink from meta==reference
user in.select hyperlink
else 
remain 
if selected question ==math problem:
open covid strings calculator 
else:
remain
covid strings calculator=calculator for math problems
operations=addition,subtraction,multiplication,division
if operation==addition:
return addition
else:
remain
if operation==subtraction:
return subtraction
else:
remain
if operation==multiplication:
return multiplication
else:
remain
if operation==division
return division
else:
remain
user in select covid strings calculator
covid strings team thought box =feature for teams to discuss what category to take and what each person thinks the correct answer to a question is 
prompt covid strings team thought box 
if user prompt covid strings team thought box ==correct answer
return answer 
else
check answer
return filename
 

