# Neighborhood Map (React)
## Installing

The project uses [Create-React-App starter code](https://github.com/facebookincubator/create-react-app) on a [Node.js >= 6](https://nodejs.org/en/) environment


## Description
This is a project developed for the Udacity & Google Front End Web Developer Scholarship.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For the project to build, **these files must exist with exact filenames**:
* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


## Installation
## Installing

The project uses [Create-React-App starter code](https://github.com/facebookincubator/create-react-app) on a [Node.js >= 6](https://nodejs.org/en/) environment

Follow these steps:

1. Install node from the link above
1. Clone this repository to your computer
1. Install all the dependencies with `npm install`
1. Launch the app with this command `npm start`

The app will launch in your browser at the address[http://localhost:3000/](http://localhost:3000/).


## Usage
When starting, the app will load automatically 30 places of interest in Braila, Romania, using Forsquare API.
These POI will be displayed on left side, in a list and on the map, with Markers.
The map is using Google Maps API.
When clicking on a marker, an info window is displayed with some info about the location.
When clicking in the list on a name,first you will see informations feached from Foursquare, and closing the alert window, the list and the markers on the map are filtered to show just that locations.
For more informations, you can click on the single marker selected and search more on www.foursquare.com
When typing inside the input on the top of the list, the list and the coresponding markers on the map will be filtered accordingly.
Clicking on the x on top right corner of the info window will close it.
Clicking on the input, will clean-up any search terms introduced.


## Dependencies
The following npm packages:
* react
* escape-regexp
* google-maps-react
