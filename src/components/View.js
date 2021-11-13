import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

import Article from './Article';
import EditForm from './EditForm';


// import articleService from '../services/articleServices';
import axiosWithAuth from '../utils/axiosWithAuth';

const View = (props) => {
    const [articles, setArticles] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState();



    // const { id } = useParams

    const articleServices = () =>{
        const blogArticles = [];
        axiosWithAuth().get('http://localhost:5004/api/articles')
          .then(res=>{
            console.log(res.data)
            // const article = res.data
            res.data.map((article)=> {
                blogArticles.push({
                    id: article.id, 
                    headline: article.headline, //title of article
                    createdOn: article.createdOn, //timestamp of when article was added
                    summary: article.summary, //short summary statement of article
                    body: article.summary,  //paragraph of article text
                    image: article.image    //?NOT IN THE README AS SOMETHING IT MAPS THRU -- mostly bc it looks better with this
                }) 
            return blogArticles
            })
            setArticles(blogArticles)
            })
            .catch(err=>console.error(err))
    }

    
    useEffect(()=>{
        articleServices()
        // console.log(articles)
        // axios.post('')
        // setArticles
        // console.log(articles)

        // axiosWithAuth().get('http://localhost:5004/api/articles')
        //     .then(res=>{
        //         console.log(res.data)
        //         setArticles(res.data)
        //     })
        //     .catch(err=>{
        //         console.log(err);
        //     })

    }, [])

    // console.log(articles)

    const handleDelete = (id) => {
        axiosWithAuth().delete(`http://localhost:5004/api/articles/${id}`)
            .then(res=>{
                console.log(res.data.id)
                articleServices(res.data.id)
            })
            .catch(err=>{
                console.log(err)
            })
        // these are things that are editing the //!actual posts
        // we need to do the posts in the -- article i think
    }

    const handleEdit = (id, article) => {
        axiosWithAuth().put(`http://localhost:5004/api/articles/${id}`, article)
            .then(res=>{
                console.log(res)
                articleServices(res.data)
                setEditing(false)
            })
            .catch(err=>{
                console.error(err)
            })
    }

    const handleEditSelect = (id)=> {
        setEditing(true);
        setEditId(id);
    }

    const handleEditCancel = ()=>{
        setEditing(false);
    }

    return(<ComponentContainer>
        <HeaderContainer>View Articles</HeaderContainer>
        <ContentContainer flexDirection="row">
            <ArticleContainer>
                {
                    articles.map(article => {
                        return <ArticleDivider key={article.id}>
                            <Article key={article.id} article={article} handleDelete={handleDelete} handleEditSelect={handleEditSelect}/>
                        </ArticleDivider>
                    })
                }
            </ArticleContainer>
            
            {
                editing && <EditForm 
                                editId={editId} 
                                handleEdit={handleEdit} 
                                handleEditCancel={handleEditCancel}/>
            }
        </ContentContainer>
    </ComponentContainer>);
}

export default View;

//Task List:
//1. Build and import axiosWithAuth module in the utils.
//2. When the component mounts, make an http request that adds all articles to state.
//3. Complete handleDelete method. It should make a request that delete the article with the included id.
//4. Complete handleEdit method. It should make a request that updates the article that matches the included article param.


const Container = styled.div`
    padding: 0.5em;
`
const HeaderContainer = styled.h1`
    border-bottom: solid black 2px;
    padding: 1em;
    margin:0;
    font-size: 1.5em;
    background: black;
    color: white;
`

const ArticleDivider = styled.div`
    border-bottom: 1px solid black;
    padding: 1em;
`

const ComponentContainer = styled.div`
    display:flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
`

const ArticleContainer = styled.div`
    background: grey;
`;