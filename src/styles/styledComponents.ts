import styled from "styled-components";

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

export const DivHeader = styled.div`

`