import styled from 'styled-components'
import React from 'react';
import Modal from 'react-modal';

export default function LocationModal ({ post, locationIsOpen, setLocationIsOpen }) {

    Modal.setAppElement('.root') 

    function closeMap () {
        setLocationIsOpen(false);
    }

    return (

        <Modal
            isOpen={locationIsOpen}
            aria-labelledby="modal-title"
            style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  width: '100%',
                  height: '100vh',
                  zIndex: '3'
                },
                
                content: {
                    background: '#333333',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    width: '70vw',
                    height: '85vh',
                    padding: '15px 16px 21px 30px',
                    margin: '5vh 18vw 10vh 12vw'
                }
            }}
        >
            {/* <p>`${post.user}'s location`</p> */}
            <p>MAPA!!!!!!!!</p>
            <button onClick={closeMap}>fechar</button>

        </Modal>      
    )
}

const Iframe = styled.iframe`
    width: calc(100% - 10px);
    height: calc(100% - 50px);
`;

const NewTabButton = styled.button`
    width: 138px;
    height: 31px;
    background-color: #1877F2;
    border-radius: 5px;
    color: white;
    font-family: Lato;
    font-size: 14px;
`;

const CloseButton = styled.button`
    font-size: 40px;
    background-color: rgba(0,0,0,0);
    color: white;
    font-family: Lato;
    height: auto;
`;

const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

