import { ChatbubblesOutline } from 'react-ionicons';
import styled from 'styled-components';
import {useContext, useState} from 'react';
import UserContext from './UserContext';
import axios from 'axios';

export default function Comments({post}){
    const { user } = useContext(UserContext);
    const [postComments, setPostComments] = useState([]);
    function loadingComments(id){
        const config = {
            headers:{
                'Authorization' : `Bearer ${user.token}`
            }
        }
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${id}/comments`,config);
        request.then(success => setPostComments(success));
        request.catch(error => alert("Ocorreu um erro, tente novamente"))
    }
    return(
        <>
            <Icone>
                <ChatbubblesOutline 
                    onClick={() => loadingComments(post.id)}
                    color={'#fff'} 
                    height="25px"
                    width="25px"
                    style={{ 
                        position: 'absolute',
                        bottom: '-40px',
                        left: '-180px'
                    }}
                />
            </Icone>
            <h6>{post.commentCount} comments</h6>
        </>
    )
}

const Icone = styled.div`
    margin-top: 10px;
    padding: 0px!important;
    width: 25px;
    height: 25px;
    position: relative;
`;