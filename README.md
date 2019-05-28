# ngrx 8 Exam
## Introduction
ngrx 8 introduces a swath of new syntax. In ngrx 7.4 `createAction` was introduced. Now there is `createReducer`, `createEffect`, and `mapToAction` in effects.  
  
## "The best way to learn is by copy/pasting"
**Said nobody, ever.**  
This is for people who already know ngrx who want to get to know the new syntax better.

## right and re-write the ridiculous reducer
1. Take the `example.reducer` that was orignally written in vanilla JavaScript and and convert it to a ngrx reducer with `on` and `createReducer` syntax.  
2. Create new actions with the `createActions` syntax, removing `payload` in favor of specific properties.  
  
### Getting Started
1. Fork this repository  
2. `npm install`  
3. Navigate to the `example.reducer` and `example.action` files.  
4. Create new actions and complete the new reducer to replace the commented out reducer in `example.reducer`
5. When you are ready for review submit a PR and assign @peterbsmith2 for review.