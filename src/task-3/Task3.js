import React from 'react';
import Button from './Button/Button';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import { Buttons } from './Button/StyledButtons';
const StyledDiv = styled.div`
  padding: 1rem;
  h1 {
    margin: 2rem 0 2rem;
  }
  h3 {
    margin-bottom: 2rem;
  }
`;
function Task3() {
  return (
    <StyledDiv>
      <div>
        <FaTwitter size='50' style={{ color: '#1DA1F1' }} />
      </div>
      <h1>Happening now</h1>
      <h3>Join Twitter today</h3>
      <Buttons>
        <Button text='Sign Up' className='btn-primary' />
        <Button text='Login' className='btn-secondary' />
      </Buttons>
    </StyledDiv>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
