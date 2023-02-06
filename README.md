# Landing Page

### demo https://johntsatsa.github.io/LandingPage/

## Projet Description
This project shows a page splitted in left and right sections  
When you hover the cursor on one of the surfaces, it gets bigger and the other smaller.  
Every transition performes smoothly.

## Guidance
### HTML
Make one container div that contains two divs with a heading and a link button
### CSS
Customize and position the heading and the link button as aslo its hover customize  
Customize and position the left and the right side with a background image  
Customize their "befores" with a transparent color  
Make the widths of each side according to the class that container gets
#### Bonus
Make everything smaller when window gets below 600px
### Javascript
if the cursor enters in an area or leaves from an area,add or remove class to the container

## Techniques that used
### CSS
``` white-space:nowrap; ```  for not wrapping a text  
``` overflow:hidden; ```  in case an element goes on another
```
.class::before{
content:"";
```  
pseudoclass before syntax
### Javascript
```
class.addEventListener("mouseenter",function(){
	  -----    commands   -----   })
```
when the mouse gets in the area of the element, do the commands
```
class.addEventListener("mouseleave",function(){
	  -----    commands   -----   })
```  
when the mouse leaves the area of an element, do the commands
