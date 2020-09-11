import styled from 'styled-components';

export const Container = styled.div`

    /* width: 100vw; */

    width: 100%;
    height: 100vh;
    max-width: 700px;
    padding-top: 8.4rem;
    background: var(--color-primary);

    @media (min-width: 1300px) {
        max-width: 1330px;
        /* padding-top: 3.2rem; */

    }

`;

export const Header = styled.div`

    padding: 1.6rem 6.4rem 0 6.4rem;
    display: flex;
    justify-content: space-between;


    >button {
        display: flex;
        align-items: center;
        border: 0;
        background: 0;
        outline: 0;


        img {
            height: 5rem;
            width: 5rem;
            object-fit: cover;
            border-radius: 50%;
            background: var(--color-primary);
        }

        span {
            color: var(--color-text-in-primary);
            margin-left: 0.8rem;
            font-size: 1.2rem;

        }
    }


    aside {
        button {
        background: var(--color-primary-dark);
        border: 0;
        padding: 0.2rem 0.8rem;
        border-radius: 0.4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 2.4rem;
            height: 2.4rem;
        }
    }
    }
`;

export const Content = styled.div`

    padding: 0 6.4rem;
    margin: 3.2rem 0;

    div {

        img {
            height: 10rem;
        }

        h2 {
            color: var(--color-text-in-primary);
            font: 500 2.4rem Archivo;
            line-height: 4.6rem;
        }
    }
    >img {
        width: 100%;

        @media (min-width: 1100px) {
        margin-left: 5rem;
    }
    }

    @media (min-width: 1100px) {
       display: flex;
       align-items: center;
       justify-content: space-between;
    }
`;

export const Bottom = styled.div`

    padding: 2.4rem 8.4rem 6.4rem 6.4rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-background);


    @media (min-width: 1300px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 3.2rem 10.4rem;
        max-width: 1310px;
    }

`;
export const MessageContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 1.3rem;

    }

     span {
         font-size: 1.1rem;
         color: var(--color-text-complement);

         img {
             margin-left: 0.8rem;
         }
     }

     @media (min-width: 1300px) {
        align-items: center;
        width: 100%;
        padding-right: 6.4rem;
        justify-content: space-between;
    }


`;
export const ButtonContent = styled.div`
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a {
        text-decoration: none;
        width: 48%;
        height: 7.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.8rem;
        font: 700 2.0rem Archivo;
        color: var(--color-button-text);
        transition: background 0.2s;
        transition: transform 0.2s ease-out;

        img {
            width: 3rem;
            margin-right: 0.8rem;
        }

    }

    .giveClasses {
        background: var(--color-secundary);
        &:hover {
            background: var(--color-secundary-dark);
            transform: translateY(-20px);
        }
    }

    .study {
        background: var(--color-primary);
        &:hover {
            background: var(--color-primary-light);
            transform: translateY(-20px);
        }
    }
`;

export const BottomContent = styled.div`

    max-width: 1100px;

    @media (min-width: 1100px) {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 6.4rem;

    }
`;
