import styled, { keyframes } from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`


export const BannerContainer = styled(Container)<{$imageUrl: string}>`
    background: url(${({$imageUrl}) => $imageUrl}) no-repeat;
    width: 100%;
    height: 600px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
`

export const BannerShopContainer = styled(Container)`
    padding-top: 70px;
    height: 350px;
    position: relative;
    align-items: center;
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
    cursor: default;
`

export const ValidationText = styled(Text)<{$color: boolean | undefined}>`
    font-size: small;
    color: ${({$color}) => $color ? "green" : "red"};
    cursor: default;
`

export const LargeText = styled(Text) `
    font-weight: 700;
    font-size: 32px;
    color: #333333;
`

export const NavText = styled(Text)`
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
export const Price = styled(Text)`
    color: #3a3a3a;
    font-size: 20;
`

export const HeaderIcons = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: 0.2s;

    &:active {
        transform: scale(0.9);
    }
`

const showModal = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.9) translate(-50%);
    }
    100% {
        opacity: 1;
        transform: scale(1) translate(-50%);
    }
`

const hideModal = keyframes`
  0% {
    opacity: 1;
    transform: scale(1) translate(-50%);
  }
  100% {
    transform: scale(0.9) translate(-50%);
    opacity: 0;
  }
`;

export const ModalContainer = styled.div<{$isOpen: boolean, $onClose: boolean}>`
    z-index: 10;
    position: absolute;
    padding: 5px;
    top: 200px;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
    width: 800px;
    height: 400px;
    border: 1px black solid;
    box-shadow: 1px 3px 5px;
    background-color: #FFF3E3;
    border-radius: 10px;
    animation: ${({$onClose}) => $onClose === true ? showModal : hideModal} 0.1s linear;
    display: ${({$isOpen}) => $isOpen === true ? "block" : "none"};
`

export const ModalOverlay = styled.div`
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    left: 0%;
    top: 0%;
`

export const CloseModal = styled.button`
    border: none;
    background-color: transparent;
    transition: 0.3s;
    cursor: pointer;
`

export const NewsletterButton = styled(CloseModal)`
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 2px;
    border-bottom: 1px solid black;
    margin-left: 5px;

    &:active {
        transform: scale(0.95);
    }
`

export const ButtonText = styled(CloseModal) `
    font-weight: 500;
    font-size: 16px;

    &:active {
        transform: scale(0.95);
    }
`


export const SeeMoreButton = styled(CloseModal) `
    height: 50px;
    width: 200px;
    background-color: white;
    font-size: 16px;
    font-weight: 600;
    color: #B88E2F;
    border-radius: 3px;

    &:active {
        transform: scale(0.95);
    }
`

export const ShowMoreButton = styled(SeeMoreButton) `
    border: 1px #B88E2F solid;
    margin-top: 30px;
    margin-bottom: 5%;
`

export const Icons = styled(HeaderIcons)<{$width?: number, $height?: number}>`
    width: ${({$width}) => $width}px;
    height: ${({$height}) => $height}px;
`

export const Card = styled.div`
    height: 85%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;
        background-color: lightgrey;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        width: 10px;
        border-radius: 10px;
        background-color: gray;
    }
`


export const PastelCard = styled.div`
    position: relative;
    width: 800px;
    height: 400px;
    left: 430px;
    top: 250px;
    border-radius: 20px;
    padding: 5px;
`

export const HorizontalCard = styled.div`
    display: flex;
    margin: 5px 0px;
    width: 99%;
    gap: 10px;
`

export const OverlayContainer = styled.div `
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.4s;

    &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.7);
    }
`

export const Overlay = styled.div `
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const StampContainer = styled.div<{$color?: string}>`
    position: relative;
    background-color: ${({$color}) => $color ? $color: "#E97171"};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;

    p {
        font-size: 14px;
        color: white;
    }
`

export const CategoryCard = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    height: 480px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.02);
    }

    &:active {
        transform: scale(1);
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
`

export const NewsletterInput = styled(Input)<{$valid?: boolean}>`
    width: 200px;
    border: none;
    outline: none;
    border-bottom: 2px solid ${({$valid}) => $valid === true ? "green" : $valid === false ? "red" : undefined};
`

export const SortDropdown = styled.select `
    border: none;
    outline: none;
    width: 100px;
    height: 30px;
    color: #9F9F9F;
    text-align: center;

    option {
        color: black;
    }
`

export const FilterModal = styled.div`
    position: absolute;
    width: 194px;
    height: 200px;
    overflow: hidden;
    background-color: #F9F1E7;
    transition: all 0.3s;
    box-shadow: 0px 2px 2px;
`