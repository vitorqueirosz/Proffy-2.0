import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

width: 60%;
margin-right: 0.8rem;

  display: flex;
  flex-direction: column;
  label {
      font-size: 1.4rem;
      color: var(--color-text-complement);
  }

  select {

      width: 100%;
      height: 5.4rem;
      margin-top: 0.8rem;
      margin-right: 0.4rem;
      outline: 0;
      border-radius: 0.8rem;
      background: var(--color-input-background);
      border: 1px solid var(--color-title-in-white);
      padding: 0 1.6rem;
      /* font: 1.6rem Archivo; */
      color: var(--color-text-complement);

      option {
        color: var(--color-text-complement);

      }
  }
`;
