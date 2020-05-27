import React from 'react';
import styled from 'styled-components'
import BulbIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ResourcesButtonCasing from '../../components/ResourcesCasingButton';

const ButtonWrapper = styled.div`
  display: inline-flex;
`;


// const ResourcesButtonCasing = styled.button`
//   background: var(--primary-white-text-color);
//   font-size: 24px;
//   padding: 0.25em 1em;
//   border-radius: 20px;
//   height: 75px;
//   width: 20vw;
//   max-width: 500px;
//   margin:auto;
//   margin-top: 45px;
//   margin-bottom: 30px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// `
const styles = {

    largeIcon: {
      width: 120,
      height: 120,
    },
  
  };


const FlipButton = styled.div`
transform: [{ scaleX: '-1' }];
rotate: 9;

`

const AskAQuestionButton = styled.button`
  background: var(--primary-white-text-color);
  font-size: 20px;
  font-weight:bold;
  color:var( --primary-green-color);
  padding: 0.25em 1em;
  border-radius: 20px;
  height: 100px;
  width: 30vw;
  max-width: 500px;
  margin:auto;
  margin-top: 45px;
  margin-bottom: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`
const Numbers = styled.div`
  font-size:15px;
  color: var(--primary-green-color);
  margin-left:3px;
`;

const BothWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 105px;
  margin-left: auto;
`;
//transform: [{rotateY: '180deg'}]

// function TipButton(){
//     return(
        
//             <BulbIcon style={{color:'var( --primary-green-color)', fontSize: '50px', }}/> 
//     )
// }

function TipButton(){
    return(

        <ResourcesButtonCasing>
            <BulbIcon style={{color:'var( --primary-green-color)', fontSize: '70px', }}/>
            Tips
        </ResourcesButtonCasing> 
      
    )
}
export default TipButton;
