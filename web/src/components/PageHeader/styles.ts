import styled from 'styled-components';

export const Header = styled.div`

    background: var(--color-primary);
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */

    @media (min-width: 700px) {
        height: 260px;
    }

    >div {
        width: 90%;
        position: relative;
        margin: 3.2rem auto;
        /* padding: 0 0.8rem; */

        @media (min-width: 700px) {
            flex: 1;
            max-width: 740px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            padding-bottom: 48px;
            justify-content: center;
            align-items: flex-start;
        }

        strong {
            font: 700 3.6rem Archivo;
            line-height: 4.2rem;
            color: var(--color-title-in-primary);

            @media (min-width: 700px) {
                max-width: 350px;
            }
        }

        p {
            max-width: 30rem;
            font-size: 1.6rem;
            line-height: 2.6rem;
            color: var(--color-text-in-primary);
            margin-top: 2.4rem;
        }
    }

    header {
        background: var(--color-primary-dark);
        display: flex;
        justify-content: space-between;
        height: 4rem;
        width: 100%;
        align-items: center;
        padding: 0 2rem;
        span {
            color: var(--color-text-in-primary);
        }

        img {
            width: 4rem;
        }

        @media(min-width: 1100px) {
            padding: 0 6.4rem;

        }
    }

`;
