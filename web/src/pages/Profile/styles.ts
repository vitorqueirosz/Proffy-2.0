import styled from 'styled-components';

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    padding-bottom: 2rem;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const Header = styled.div`

    align-self: stretch;
    background: var(--color-primary);

    padding-bottom: 5rem;

    header {
        background: var(--color-primary-dark);
        display: flex;
        justify-content: space-between;
        height: 4rem;
        align-items: center;
        padding: 0 1rem;
        span {
            color: var(--color-text-in-primary);
        }

        img {
            width: 4rem;
        }

        @media (min-width: 1100px) {
            padding: 0 6.4rem;
        }
    }

    >div {

        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;



        span {
            margin-top: 1rem;
            font: 700 1.6rem Archivo;
            color: var(--color-title-in-primary);
        }
    }
`;

export const ProfilePic = styled.div`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    >img {
        max-width: 15rem;
        width: 100%;
        object-fit: cover;
        height: 15rem;
        border-radius: 50%;
    }
`;
export const EmptyProfileImage = styled.div``;

export const Content = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Form = styled.form`

    /* padding: 3.2rem; */
    background: #fff;
    width: 100%;

    margin-top: -3rem;
    border-radius: 0.8rem 0.8rem 0 0;

    h1 {
        color: var(--color-text-title);
        font-size: 2.0rem;
        margin-bottom: 1.6rem;
        border-bottom: 1px solid #eee;
        padding-bottom: 0.4rem;

    }

    @media (min-width: 1100px) {
        max-width: 700px;

    }
`;

export const ContentArea = styled.div`

    margin-bottom: 2.4rem;
    display: flex;
    flex-direction: column;
    padding: 3.2rem 3.2rem 0 3.2rem;

    label {
        margin-top: 2.4rem;
    }

    textarea {
        background: var(--color-input-background);
        border: 1px solid #eee;
        height: 12.4rem;
        padding: 1.6rem;
        border-radius: 0.8rem;
        margin-top: 0.4rem;

        &::placeholder {
            font-size: 1.4rem;
        }
    }

`;

export const GridContent = styled.aside`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.2rem 3.2rem 0 3.2rem;

    div {
        width:100%;
        input {
            width: 98%;
        }
    }
`;
export const ContentClass = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.8rem;
    padding: 3.2rem 3.2rem 0 3.2rem;

    div {
        label {
            margin-top: 0;
        }
        input {
            margin-top: 0.8rem;
            width: 98%;
        }
    }
`;

export const ContentTime = styled.div`
    padding: 3.2rem 3.2rem 0 3.2rem;

    header {

        border-bottom: 1px solid #eee;
        padding-bottom: 0.4rem;
        margin-bottom: 1.6rem;

        h1 {
            margin: 0;
            padding: 0;
            border: 0;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        border: 0;
        background: none;
        color: var(--color-primary);
        font: 700 1.4rem Archivo;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3.2rem;

        button {
            color: #E33D3D;
            font-size: 1.2rem;
        }
    }


`;

export const ScheduleContent = styled.div`
    display: flex;
    flex-direction: column;

    & + div {
        margin-top: 1.6rem;
    }

    border-bottom: 1px solid #eee;
    padding-bottom: 0.8rem;
`;

export const ScheduleContentItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.6rem;

    input {
        width: 94%;

        @media (min-width: 1100px) {
            width: 100%;
        }
    }

    label {
        margin-top: 0;
    }
`;
export const TopContentForm = styled.div`
    padding: 3.2rem 3.2rem 0 3.2rem;
`;
export const SubjectTitle = styled.div`

     padding: 3.2rem 3.2rem 0 3.2rem;
`;

export const Footer = styled.div`

    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    margin-top: 6.4rem;
    padding: 3.2rem;
    background: #FAFAFC;

    div {
        img {
            margin-right: 0.8rem;
        }

        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            color: var(--color-primary);
            font-weight: bold;
            font-size: 1.2rem;
        }
        p {
            font-size: 1.2rem;
            color: var(--color-text-complement);
        }
    }


    button {
        background: var(--color-secundary);
        border-radius: 0.8rem;
        border: 0;
        color: var(--color-title-in-primary);
        width: 21rem;
        font: 700 1.2rem Archivo;
        height: 5.4rem;

        &:hover {
            background: var(--color-secundary-dark);
        }
    }
`;
