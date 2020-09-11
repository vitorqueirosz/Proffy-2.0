import styled from 'styled-components';

export const Container = styled.div`

    height: 5.4rem;
    /* border-radius: 0.8rem 0.8rem 0 0; */
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    /* padding-right: 0.4rem; */
    display: flex;
    align-items: center;
    position: relative;

    .borderInputBottom {
        /* border-radius: 0 0 0.8rem 0.8rem; */
    }

    .borderInputTop {
        /* border-radius: 0.8rem 0.8rem 0 0; */
    }

    div {
        width: 100%;
        label {
            margin-bottom: 0.8rem;
        }
    }

    input {
        border: 0;
        height: 100%;
        width: 100%;
        outline: none;
        padding: 1.2rem;
        position: relative;
        display: flex;
        justify-content: space-between;


        &::after {
            background: var(--color-primary);
        }
    }

`;

export const ShowPasswordButton = styled.button`
    background: none;
    border: 0;
    background: #fff;
    margin-right: 0.8rem;

`;
