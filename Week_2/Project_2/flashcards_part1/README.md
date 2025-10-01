# Web Development Project 2 - *JavaScript Flashcards*

Submitted by: **Enrique Calleros**

This web app: **An interactive flashcard application for learning JavaScript fundamentals. Users can flip cards to reveal answers, navigate through cards randomly, and track their progress. Cards are color-coded by category and difficulty level for enhanced learning.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed ("JavaScript Fundamentals")
  - [x] A short description of the card set is displayed ("Essential JavaScript concepts for web development")
  - [x] A list of card pairs is created (8 cards with questions and answers)
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (array of objects with question/answer properties)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time (either question or answer)
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - [x] Cards are color-coded by category (functions, variables, DOM, async, syntax, operators)
  - [x] Cards display difficulty level badges (easy, medium, hard)
  - [x] Each category has a unique gradient background
  - [x] Flipped cards use a consistent blue gradient overlay

The following **additional** features are implemented:

* [x] Progress tracker showing how many cards have been seen during the session
* [x] Current card indicator (e.g., "Current: 3 of 8")
* [x] Category and difficulty tags displayed on each card
* [x] Smooth hover effects and animations for better user experience
* [x] Visual indicator showing "Question" or "Answer" state
* [x] Separate "Flip Card" button in addition to click-to-flip functionality
* [x] Responsive design that works on mobile devices
* [x] Beautiful gradient background and glassmorphism effects

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./assets/Kapture 2025-09-30 at 23.46.25-min.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Challenges encountered while building the app:
- Implementing the card flip state management to ensure cards reset when navigating to a new card
- Creating a random card selection algorithm that prevents showing the same card twice in a row
- Designing a color scheme that works well for both question and answer states
- Making sure the category and difficulty tags remain visible on flipped cards
- Ensuring responsive design works across different screen sizes

## License

    Copyright 2025 Enrique Calleros

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.