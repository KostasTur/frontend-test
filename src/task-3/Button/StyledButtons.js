import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border-radius: 30px;
    border: 1px solid #1da1f1;
    width: 400px;
    padding: 1rem;
    margin-bottom: 2rem;
    font-weight: bolder;
  }
  .btn-primary {
    background-color: #1da1f1;
    color: white;
  }
  .btn-secondary {
    background-color: white;
    color: #1da1f1;
  }
`;
