import React from 'react';
import '@testing-library/jest-dom';

import { screen, render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
      id: 'aMqwd', //unique article id
      headline: "headline", //title of article
      createdOn: '2021-08-09T18:02:38-04:00', //timestamp of when article was added
      summary: "summary", //short summary statement of article
      body: ""  //paragraph of article text
}

test('renders component without errors', ()=> {
   //ARRANGE: render the component on the DOM
   render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
   //ARRANGE: what component
   const {rerender} = render(<Article article={{}}/>)
   //ACT: 
   const article = screen.getByTestId(/article/i)
   const header = screen.getByTestId(/headline/i)
   const author = screen.getByTestId(/author/i)
   //ASSERT
   expect(header).not.toHaveValue()
   expect(author).not.toHaveValue()

   //rerender
   rerender((<Article article={article}/>))

   expect(article).toBeInTheDocument()

});

test('renders "Associated Press" when no author is given', ()=> {
   render(<Article article={testArticle}/>)
   //ACT: 
   // const article = screen.queryByTestId(/article/i)
   const header = screen.getByTestId(/headline/i)
   const author = screen.getByTestId(/author/i)
   //ASSERT
   expect(header).toBeInTheDocument()
   //eventhough there is nothing being passed in to author,
   // it should still render
   expect(author).toBeInTheDocument()
});

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.