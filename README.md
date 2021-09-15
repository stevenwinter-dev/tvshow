# TV Show App

![TV SHOW App](https://i.imgur.com/e84lnqI.png)

## Introduction

The TV SHOW App leverages the TV Maze API to display information about tv shows. The user can type in a show name character by character for suggestions or input the entire show name for a specific result. Once loaded, the user then has an option to select a season and view information on specific episodes from that season. 

![Demo](https://media3.giphy.com/media/1CWi7RaCabhF6vNr9t/giphy.gif)

## Technologies Used

- HTML
- CSS
- JavaScript
- React

## Install Instructions
```bash
git clone
cd tvshow
npm install
npm start
```

## User Stories

### MVP
- As a user, I want to search for a specific tv show.
- As a user, I want to see how many seasons of a show are available.
- As a user, I want to select individual episodes from the show and view more details.

## Major Hurdles

- The first major hurdle was the time constraint for this project. Having a goal finish time of 6-8 hours was quite challenging. I did not use a timer but imagine I was fairly close to this time table, if not a tad over. 
- The next major hurdle was navigating the TV Maze API. I had hoped a call to the 'shows' route would return the tv show and all of the content I needed. Unfortunately, that was not the case. For specific episode details I needed an extra api call to the 'seasons' route. From there I embedded 'episodes' at the end of my 'season' request. The work flow looked like this: 
  - User inputs tv show and I fetch data using ```http://api.tvmaze.com/shows/${show.show.id}/seasons```. 
  - From that request I give the user the appropriate number of season options.
  - Based on that selection, I then have the season ID for the next api request: ```https://api.tvmaze.com/seasons/${seasonId}?embed=episodes```, thus returning everything needed.

## Future Features

- There are definitely some bugs remaining in this code. The first I'd love to tackle, given more time, is an issue with displaying the episode cards after clicking the corrosponding dot. Right now it works much of the time but not every time. I think a solution would be to put the episode card display function in a useEffect to insure the correct components are reloaded once the episode information arrives.
- The search bar is not totally optimized. The dropdown options while the user is typing appears in the body of the site rather than an actual dropdown menu and only one option is displayed at a time. This would require a slight rework and for the time I had I decided there were more pressing features to implement.
- Much of the site is mobile responsive but, depending on how many characters are in a specific show summary, there are some overflow issues. A few more hours would be required to get this fully responsive, at least up to my usual standards.

## I had a fun time working on this one! Thanks for checking it out!