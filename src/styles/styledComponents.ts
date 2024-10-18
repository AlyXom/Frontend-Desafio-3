import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
`

export const Text = styled.p`
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const Title = styled.h1`
    font-family: "Monsterrat", sans-serif;
    font-weight: 700;
    font-size: 34px;
    cursor: pointer;
`

export const HeaderIcons = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
    }
`

const showModal = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

const hideModal = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
`;

export const ModalContainer = styled.div<{$isOpen: boolean, $onClose: boolean}>`
    z-index: 10;
    position: absolute;
    top: 30%;
    left: 30%;
    width: 800px;
    height: 400px;
    border: 1px black solid;
    box-shadow: 2px 2px 5px;
    background-color: white;
    border-radius: 10px;
    animation: ${({$onClose}) => $onClose == true ? showModal : hideModal} 0.1s linear;
    display: ${({$isOpen}) => $isOpen == true ? "block" : "none"};
`

export const ModalOverlay = styled.div`
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    left: 0%;
    top: 0%;
`