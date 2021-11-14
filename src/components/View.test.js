import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import View from './View';
import axios from 'axios';

import articleServices  from './../services/articleServices'

jest.mock('./../services/articleServices')

const noArticles = []
const articles = [
      {
           id: '1', //unique article id
           headline: "headline", //title of article
           author: 'me',
           image: 0,
           createdOn: 123, //timestamp of when article was added
           summary: "summary", //short summary statement of article
           body: "body"  //paragraph of article text
       },
      {
           id: '2', //unique article id
           headline: "headline", //title of article
           author: 'me',
           image: 0,
           createdOn: 123, //timestamp of when article was added
           summary: "summary", //short summary statement of article
           body: "body"  //paragraph of article text
       },
      {
           id: '3', //unique article id
           headline: "headline", //title of article
           author: 'me',
           image: 0,
           createdOn: 123, //timestamp of when article was added
           summary: "summary", //short summary statement of article
           body: "body"  //paragraph of article text
       },
    ]


test("renders zero articles without errors", async () => {
   articleServices.mockResolvedValue({ noArticles })
   render(<View articles={noArticles}/>)
   const article= await screen.queryByTestId(/article/i)

   expect(article).toBeNull()

});

test("renders three articles without errors", async ()=> {
   //ARRANGE
   articleServices.mockResolvedValue( articles )
   render(<View articles={articles}/>)
   //ACT
   const article = await screen.findAllByTestId(/article/i)
   //ASSERT
   expect(article).toHaveLength(3)
});

//Task List
//1. Complete the above two tests. Make sure you are mocking the articleService call before rendering.