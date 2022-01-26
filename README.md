# Project_Flashcards
> ### Front-end app for users to create, manage, and interactively flip through locally stored deck(s) of study cards (provided deck is off sufficient size).
> #### App could be used as convenient study tool in preparation for a variety of assessments and learning objectives.
> 
> ---
> 
> ### Built with:
> #### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; JavaScript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HTML/CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bootstrap <br>&nbsp;

## Install and Setup App for Local Run

1. Fork / clone this repository.
1. Run `npm install`.
2. Use `npm start` to run the application. 

## App Screens
| SCREEN      | PATH                          | DESCRIPTION                                                                                                       |
|-----------|-------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Home        | `/` | Shows a list of decks with options to create, study, view, or delete a deck. |
| Study Deck  | `/decks/:deckId/study` | Allows the user to study the cards from a specified deck. |
| Create Deck | `/decks/new` | Allows the user to create a new deck. |
| View Deck   | `/decks/:deckId` | Shows all information about a specific deck with options to edit or add deck cards, navigate to the study screen, or delete deck. |
| Edit Deck   | `/decks/:deckId/edit` | Allows the user to modify information on an existing deck. |
| Add Card    | `/decks/:deckId/cards/new` | Allows the user to add a new card to an existing deck. |
| Edit Card   | `/decks/:deckId/cards/:cardId/edit` | 	Allows the user to modify information on an existing card. |

## Preview App Screens
 
> ### *Home*
> <img width="475" alt="Flashcard App Preview: Home screen" src="https://user-images.githubusercontent.com/55366157/141707996-e58ba4e2-6fbd-4f0b-bc08-751153a5f025.jpg">

> ### *Study Deck*
> <img width="450" alt="" src="https://user-images.githubusercontent.com/55366157/141708011-662ddb82-06b9-4382-8bd0-85087247174d.jpg"> 

> ### *Create Deck*
> <img width="450" alt="Flashcard App Preview: Create Deck screen" src="https://user-images.githubusercontent.com/55366157/141708002-42e9ad3e-7d36-4fcf-9cd8-df91fb7c9b91.jpg">

> ### *View Deck*
> <img width="475" alt="Flashcard App Preview: View Deck screen" src="https://user-images.githubusercontent.com/55366157/141708005-42e110b7-68d2-45c0-ac67-72edd12b52af.jpg">
 
> ### *Add Card*
> <img width="450" alt="Flashcard App Preview: Add Card screen" src="https://user-images.githubusercontent.com/55366157/151127442-17cb76b2-7d90-482d-8a36-81407f0ea53e.png">

---
*\[ App created with reference to Thinkful-owned API as found in /src/utils directory of this repository. \]*
