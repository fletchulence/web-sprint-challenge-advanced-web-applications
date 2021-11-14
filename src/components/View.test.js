import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import View from './View';

import { articleServices as mockServices }  from '../services/articleServices'

jest.mock('../services/articleServices')

const articles = [
 {
      id: '1', //unique article id
      headline: "headline 1", //title of article
      createdOn: 'date 1', //timestamp of when article was added
      summary: "summary1", //short summary statement of article
      body: "body 1"  //paragraph of article text
  },
  {
      id: '2', //unique article id
      headline: "headline 2", //title of article
      createdOn: 'date 2', //timestamp of when article was added
      summary: "summary2", //short summary statement of article
      body: "body 2"  //paragraph of article text
  },
  {
      id: '3', //unique article id
      headline: "headline 3", //title of article
      createdOn: 'date 3', //timestamp of when article was added
      summary: "summary 3", //short summary statement of article
      body: "body 3"  //paragraph of article text
  }
]

test('sanity test', async () =>{
   render(<View articles={articles} articleServices={fakeArticleServices}/>)
   
   console.log(fakeArticleServices.mock)
})

test("renders zero articles without errors", async () => {
   const fakeArticleServices = jest.fn(Promise.all)
   // mockServices.mockResolvedValueOnce({ articles })
   // // ARRANGE
   // const { findAllByTestId, findByText } = 
   render(<View articles={null}/>)
   // // // ACT
   // // // const articleServices = await screen.findby
   // const deleteButton = findAllByTestId(/deleteButton/i)
   // // // // ASSERT
   // userEvent.click(deleteButton)
   // userEvent.click(deleteButton)
   // userEvent.click(deleteButton)

   const article = await screen.findAllByTestId(/article/i)
   expect(article).toBeInTheDocument()
   
   expect(fakeArticleServices).toHaveBeenCalledTimes(3)


});

test("renders three articles without errors", async ()=> {
   //ARRANGE

   //ACT
   //ASSERT
});

//Task List
//1. Complete the above two tests. Make sure you are mocking the articleService call before rendering.