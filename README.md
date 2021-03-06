# Restaurant-Reviews-App-Stage1
Udacity Front End Web Developer Nanodegree , project 5
---
## Overview:

This is a **Resturant Review App** project Stage one.
The scholars provided with the static webpage that lacks accessibility and have to convert the design to be responsive on different sized displays and accessible for screen reader use, and also they have to add a service worker to begin the process of creating a seamless offline experience for app users.

## How to Run the Application:

- Clone or install the project to your local machine

- unzip the installed folder

- Run git bash and in the terminal change directory to the project folder, example : 
$ git cd c:/projectFolder 

- While in the project directory, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer, if not installed navigate to Python's [website](https://www.python.org/) to download and install the software.

- In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

- With your server running, open your browser window and navigate to http://localhost:8000 and you'll get the app running.

- To try the screen reader install screen reader extension, navigate to install [ChromeVox for chrome](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn) .

- Use developer tool bar to check how the app works on different devices.

- Check the app offline, rightclick on your browser, choose Inspect from the menu, go to Application tab. 
On the side menu click Service Worker, you'll see an option to work offline, check it and try the app offline.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

## Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 

## Resources

- [Udacity Project Repository](https://github.com/udacity/mws-restaurant-stage-1)

- [Grid Display Instructions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

- [ServiceWorkers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

- Thanks to [Doug Brown's Video](https://www.youtube.com/watch?v=92dtrNU1GQc) which helped alot.


