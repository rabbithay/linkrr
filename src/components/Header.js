import styled from 'styled-components';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ChevronDownOutline, ChevronUpOutline } from 'react-ionicons';

export default function Header (){
    let history = useHistory();
    const [state, setState] = useState(false)

    return(
        <ContainerHeader state={state}>
            <h1>linkr</h1>
            <span onClick={() => setState(!state)}>
                {state?
                <ChevronUpOutline
                    color={'#fff'} 
                    height="32px"
                    width="32px"
                />
                :<ChevronDownOutline
                    color={'#fff'} 
                    height="32px"
                    width="32px"
                />
                }
                <img src="https://i.pinimg.com/originals/13/1f/10/131f107bd3d676d0526c8da763e6ea58.jpg"/>
            </span>
            <div>
                <Link to="/my-posts">
                    <p>My posts</p>
                </Link>
                <Link to="/my-likes">
                    <p onClick={() => alert("my-likes")}>My likes</p>
                </Link>
                    <p onClick= {logout}>Logout</p>
            </div>
        </ContainerHeader>
    )

    function logout (){
        localStorage.clear();
        history.push("/")
    }
}

const ContainerHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    padding: 0px 17px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #151515;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    h1{
        font-family: 'Passion One', cursive;
        font-size: 45px;
        letter-spacing: 5px;
        color: #fff;
    }
    img{
        width: 44px;
        height: 44px;
        margin-left: 10px;
        border-radius: 50%;
    }
    div{
        position: absolute;
        display: ${props => props.state? 'block': 'none'};
        top: 72px;
        right: 0;
        padding: 11px 35px;
        box-sizing: border-box;
        background-color: #171717;
        border-bottom-left-radius: 20px;
    }
    p{
        margin: 0;
        margin-bottom: 5px;
        font-family: 'Lato', sans-serif;
        font-size: 17px;
        color: #fff;
        text-align: center;
    }
`;
