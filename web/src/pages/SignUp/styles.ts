import styled from 'styled-components';

import backgroundImg from '../../assets/images/background.png';

export const Wrapper = styled.div`

    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: stretch;
    position: relative;
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
    position: relative;
`;

export const Container = styled.div`
    background: var(--color-background);
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 1.6rem 8.4rem;
    width: 100%;
    max-width: 500px;



    a {
        align-self: flex-start;
        img {
            width: 4rem;
        }
    }
`;

export const Content = styled.div`

    width: 100%;
    margin-top: 8rem;

    h1 {
        font: 700 3.2rem Archivo;
        margin-bottom: 2.4rem;
        color: #32264D;
    }

    form {
        margin-top: 3rem;
    }


    button {
        background: var(--color-secundary);
        height: 5rem;
        color: #fff;
        border: 0;
        margin-top: 2.4rem;
        width: 100%;
        border-radius: 0.8rem;
    }
`;

export const ContentLinks = styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: 1.6rem;


    div {
        display: flex;
        align-items: center;

        span {
            font-size: 1.2rem;
        color: var(--color-text-complement)
        }
    }

    a {
        text-decoration: none;
        font-size: 1.2rem;
        color: var(--color-text-complement)
    }
    input {
            width: 2rem;
            border: 0;
    }
`;

export const Bottom = styled.div`
    margin-top: 15rem;
    display: flex;
    justify-content: space-between;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;

        span {
            color: var(--color-text-base);
            font-size: 1.4rem;
        }

        a {
            color: var(--color-primary);
            font-weight: bold;
        }
    }

    span {
        font-size: 1.2rem;
        color: var(--color-text-complement);
    }
`;
