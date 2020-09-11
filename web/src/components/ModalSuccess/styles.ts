import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0, 0.8);
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    /* @media (min-width: 1100px) {
        max-width: 1100px;
    } */
`;

export const ModalContent = styled.div`


    background: #291558;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3.2rem;
    max-width: 350px;
    width: 100%;

    @media (min-width: 1100px) {
        max-width: 700px;
        width: 100%;
    }

    img {
        width: 10rem;
        height: 10rem;
    }

    h1 {
        color: var(--color-title-in-primary);
        font: 3.2rem 700 Archivo;
        margin-top: 3.2rem;
    }

    span {
        color: var(--color-text-in-primary);
        font-size: 1.1rem;
        padding: 0 2.4rem;
        /* line-height: 1.6rem; */
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
    }


    a {
        background: var(--color-secundary);
        color: var(--color-title-in-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center !important;
        border: 0;
        margin-top: 3.2rem;
        width: 100%;
        height: 5.4rem;
        text-decoration: none;
        max-width: 21rem;
        border-radius: 0.8rem;
        transition: background 0.2s;

        &:hover {
            background: var(--color-secundary-dark);

        }
    }
`;
