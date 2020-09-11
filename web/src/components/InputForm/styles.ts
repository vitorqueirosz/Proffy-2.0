import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;


    label {
        font-size: 1.2rem;
        color: var(--color-text-complement);
        margin-top: 1.6rem;
    }

    input {

        background: var(--color-input-background);
        border: 1px solid #eee;
        width: 100%;
        height: 5.4rem;
        padding: 1.6rem;
        border-radius: 0.8rem;
        margin-top: 0.8rem;
        outline: 0;

        &::placeholder {
            font-size: 1.2rem;

        }
    }

`;
