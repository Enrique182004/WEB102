# Web Development Project 3 - *JavaScript Flashcards Part 2*

Submitted by: **Enrique Calleros**

This web app: **An interactive flashcard application for studying JavaScript fundamentals with guess validation, navigation controls, streak tracking, and card mastery features.**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong (red border and feedback message)
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct (green border and feedback message)
- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons are grayed out and disabled at the beginning or end of the list, preventing wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards remain in the same sequence unless the shuffle button is clicked
  - Cards change to a random sequence once the shuffle button is clicked
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct with partial matching
  - Examples: ignores uppercase/lowercase, ignores punctuation, matches partial answers
- [x] A counter displays the user's current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak and updates accordingly
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool and tracked separately

The following **additional** features are implemented:

* [x] Enter key submits guesses for better user experience
* [x] Color-coded difficulty levels (easy, medium, hard)
* [x] Category-based card styling with gradient backgrounds
* [x] Congratulations screen when all cards are mastered
* [x] Responsive design for mobile devices

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='Kapture 2025-10-07 at 21.33.03-min.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/) for macOS

## Notes

Challenges encountered while building the app:
- Implementing fuzzy matching for answer validation required careful string normalization
- Managing state synchronization between Card and CardSet components
- Handling edge cases when removing mastered cards (adjusting current index)
- Ensuring buttons properly disable at list boundaries

## License

    Copyright 2025 [Enrique Calleros]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.