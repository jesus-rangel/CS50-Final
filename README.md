# My Heroes - by Jesus Rangel (Venezuela)
### Video Demo: https://www.youtube.com/watch?v=ez7PANOZkrM
### Description:

Since in Homepage we were tasked with talking about ourselves, and that's something I hate doing, I got the idea for making a web page showcasing some of my personal heroes whom I felt deserved more recognition. I wanted to do an improved version of Homepage, talking about people who really deserve to be talked about.

So we have, for example, a woman from the 14th century who became a pirate out of love and is considered one of the most successful pirates in history. We have a boxer whom, like Mike Tyson, was told he was too short to ever be heavyweight world champion, yet he ended up winning a match against Muhammad Ali himself. We also have our usual heroic assortment of poets and jazz musicians.

I chose glassmorphism for the design because I wanted the page to be like a lense into history, and I wanted to use humor and wit in the narration because one of my gripes with the Western high school system is that we are made to feel that literature and history are boring subjects, and we are made to feel that genres like jazz and classical music are lofty and only for the elite.

### Sources and Credits
- The "broken" layout of the landing page was inspired by this video https://www.youtube.com/watch?v=AOq6v-bmpYs. The responsiveness add be drastically changed according to my personal design. Also, each image container was made to have several divs, each of them having a different background image, and a pseudo-randomizing algorythm was developed in Javascript to make each image fade in and out, the algorythm prioritizing images that had not faded in recently (hence, the pseudo-random part) 
-  The glassmorphism layout for each of the heroic figures came from this video https://www.youtube.com/watch?v=O7WbVj5apxU. However, that tutorial provides no responsiveness whatsoever, so Bootstrap 5 was brought in to do a lot of heavy lifting with responsiveness, as well as Bootstrap accordion buttons that had to be personally stylized.
- The nifty functionality that detects browsers came from stack overflow at https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser. This was deemed necessary since Firefox does not support glassmorphism, and Safari still doesn't respond well to the image responsiveness provided by (the still in beta phase) Bootstrap 5.
- Finally, the glassmorphic navbar was inspired by this video https://www.youtube.com/watch?v=YRAoM4-Eb4A. It was personally stilized to fit the rest of the website, as well as buttons were changed into Bootstrap 5 accordion buttons, which went through an extensive overhaul to look the way they do in this website.

### Technical Aspects
#### Languages and libraries:
- HTML
- CSS
- Javascript
- Bootstrap 5
- Tippy Tooltip
- JQuery

The website uses vanilla HTML, Javascript and a lot of custom CSS to override the look of Bootstrap 5 which is used for the layout. There's no server-side language or framework since there is no database. Server-side tools like PHP Unit, Laravel, Flask, etc. would have helped in avoiding code repetition (e.g. by having each webpage of each "Hero" extending a shared template) but adding an entire language and library just for this seemed like overkill. 

The biggest challenges in building this website were the front-end design and responsiveness, as well as the pseudo-randomized functionality for how the fading images appear in the landing page.

The Tippy Tooltip Javascript library required the use of JQuery, and Tippy was used to explicitly tell the user to which page they would go by clicking on a specific fading image in the landing page, or by clicking on the left and right arrows of each heroic figure. The tooltips that appear with fading images also had to be given a parameter of a Time Out in which they would disappear, since they would persist after the initial image the user hovered on had disappeared.

If you try to open the project with Firefox, the site will detect the browser and give you a warning about firefox not being compatible with glassmorphism. Safari, on the other hand, still has issues with the current beta version of Bootstrap 5, and will issue a similar warning.

#### About the DRY principle
As stated earlier, the "Do not repeat yourself" rule was broken each time a new webpage was created with each heroic figure, having each page share the same markup for the navbar menu, the arrows, and the glassmorphic layout. 

However, all of the solutions I have worked with to solve this problem and create a layout that each page would extend from (Flask's extends functionality, Laravel's yield functionality, etc.) seemed like adding too much to a small project just for a very tiny functionality. I would love to hear feedback if the graders know of a way to provide that functionality without having to add an entire server-side framework.