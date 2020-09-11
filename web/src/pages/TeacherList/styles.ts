import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    form {
        margin-top: 3.6rem;


        @media (min-width: 1100px) {
            display: flex;
            position: absolute;
            bottom: -28px;
        }

        div {

            width: 100%;
            margin-bottom: 1.6rem;

            label {
                margin-top: 0;
            }
        }
    }

`;

export const Content = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const TeacherNotFound = styled.div``;
export const TeacherNotSearched = styled.div``;
