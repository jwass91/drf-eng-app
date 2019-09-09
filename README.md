## DRF Engineer-in-Residence Coding Challenge

View the app live [here](http://jwass91.github.io/drf-eng-app).

Or, run the app locally using `npm start` (after running `npm install`).

### Part 1

My take on a creative way to render a circle in the browser was to create a circle out of a bunch of divs with fixed positions. Even though the circle's edges are a little rough, I thought this was a cool way to create my circle. It's obviously a lot easier to create the circle by just giving the div a `border-radius` of `50%` and my "circle points" are circles themselves, but for my main circle, I wanted to be more creative.

Using React, I created a `CirclePoint` component that renders a `div` with absolute positioning using the sine and cosine of the given angle. Then, there is a `Circle` component that renders an array of `CirclePoint` components using a generator function.

### Part 2

I used React, Redux, and TypeScript to create my web application. I have a connected `Form` component that allows the user to join a room and then hide and show the circles of the other users in that room. The app is styled with [MaterialUI](https://material-ui.com). I used the boilerplate [Create React App](https://github.com/facebook/create-react-app) template. There is a simple test suite for the Redux store written in [Jest](https://jestjs.io).
