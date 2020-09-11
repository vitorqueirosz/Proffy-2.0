import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 150px;
    height: 150px;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    outline: 0;

    >img {
        max-width: 15rem;
        width: 100%;
        object-fit: cover;
        height: 15rem;
        border-radius: 50%;

    }
    .isVisibleSelectedFile {
        /* visibility: visible; */
    }
    .isVisibleAvatarData {
        visibility: hidden;
    }

    button {
        border: 0;
        background: 0;
        position: absolute;
        margin-left: calc(75%);
        align-self: flex-end;

        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
    }

    p {
        /* padding: 0 20px; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #183172;
        font-size: 14px;
        text-align: center;
    }
`;

export default styled;
