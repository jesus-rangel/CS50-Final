# My Heroes - by Jesus Rangel (Venezuela)
#### Video Demo: https://www.youtube.com/watch?v=ez7PANOZkrM
#### Description:

Since in Homepage we were tasked with talking about ourselves, and that's something I hate doing, I got the idea for making a web page showcasing some of my personal heroes whom I felt deserved more recognition. I wanted to do an improved version of Homepage, talking about people who really deserve to be talked about.

So we have, for example, a woman from the 14th century who became a pirate out of love and is considered one of the most successful pirates in history. We have a boxer whom, like Mike Tyson, was told he was too short to ever be heavyweight world champion, yet he ended up winning a match against Muhammad Ali himself. We also have our usual heroic assortment of poets and jazz musicians.

Languages and libraries:
- HTML
- CSS
- Javascript
- Bootstrap 5
- Tippy Tooltip
- JQuery

I chose glassmorphism for the design because I wanted the page to be like a lense into history, and I wanted to use humor and wit in the narration because one of my gripes with the Western high school system is that we are made to feel that literature and history are boring subjects, and we are made to feel that genres like jazz and classical music are lofty and only for the elite.

The website uses vanilla HTML, Javascript and a lot of custom CSS to override the look of Bootstrap 5 which is used for the layout. There's no server-side language or framework since there is no database. Server-side tools like PHP Unit, Laravel, Flask, etc. would have helped in avoiding code repetition (e.g. by having each webpage of each "Hero" extending a shared template) but adding an entire language and library just for this seemed like overkill. 

The biggest challenges in building this website were the front-end design and responsiveness, as well as the pseudo-randomized functionality for how the fading images appear in the landing page.

The Tippy Tooltip Javascript library required the use of JQuery, and Tippy was used to explicitly tell the user to which page they would go by clicking on a specific fading image in the landing page, or by clicking on the left and right arrows of each heroic figure. The tooltips that appear with fading images also had to be given a parameter of a Time Out in which they would disappear, since they would persist after the initial image the user hovered on had disappeared.

If you try to open the project with Firefox, the site will detect the browser and give you a warning about firefox not being compatible with glassmorphism. Safari, on the other hand, still has issues with the current beta version of Bootstrap 5, and will issue a similar warning.