import styled from 'styled-components';

export const Container = styled.div`

    background: #fff;
    margin-top: 4.8rem;
    width: 100vw;
    /* height: 100vh; */
    padding-top: 2.4rem;
    border-radius: 0.4rem;
    max-width: 42rem;

    & + div {
        margin-top: 1.6rem;
    }
    @media (min-width: 700px) {
        max-width: 626px;
        margin-left: 80px;
    }

    header {
    padding: 0 1.6rem;
    display: flex;
    align-items: center;

    img {
            width: 5rem;
            height: 5rem;
            margin-right: 1.6rem;
        }


    >div {
            display: flex;
            flex-direction: column;

            strong {
                color: var(--color-primary);
                font: 700 1.8rem Archivo;
            }
            span {
                color: var(--color-primary-text);
                font-size: 1.2rem;
            }
        }
    }



`;

export const Content = styled.div`

    display: flex;
    padding: 2.4rem 2.4rem 0 2.4rem;
    flex-direction: column;

    >p {
        margin-bottom: 3.2rem;
    }




`;

export const GridCardContent = styled.div`
    >ul {
        display: flex;
        overflow-y: scroll;
        margin-bottom: 3.2rem;

        li {
            background: var(--color-input-background);
            border-radius: 0.6rem;
            padding: 0.8rem;
            width: 11.5rem;
            border: 1px solid #eee;
            margin: 0 1.6rem 1.6rem 0;
            list-style: none;

            div {
                display: flex;
                flex-direction: column;

            }
            span {
                color: var(--color-text-complement);
                font-size: 1.2rem;
            }

            strong {
                color: var(--color-primary-text);
                font-size: 1.4rem;
            }

            aside {
                display: flex;
                flex-direction: column;
                margin-top: 1.6rem;
            }
        }
    }
`;

export const Footer = styled.div`

    display: flex;
    align-items: center;
    background: #FAFAFC;
    width: 100%;
    padding: 3.2rem 2.4rem;
    border-top: 1px solid #eee;
    justify-content: space-between;

    p {
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: var(--color-text-complement);
        strong {
            margin-left: 1.6rem;
            color: #8257E5;
        }
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        background: var(--color-secundary);
        transition: background 0.2s;
        padding: 1.2rem;
        border-radius: 0.8rem;
        color: #fff;
        font-size: 1.2rem;

        img {
            margin-right: 1.6rem;
        }

        &:hover {
            background: var(--color-secundary-dark);
        }
    }
`;
