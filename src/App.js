import "./App.css";
import styled, { createGlobalStyle, ThemeProvider , css} from "styled-components";
import theme from "./Theme";
import React from "react";
import Line from "./Component/Line";
createGlobalStyle`
body{
  padding:o;
  margin:0;
}
`;
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0  1px 3px rgba(0,0,0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true
})`
border-radius: 5px;
${awesomeCard}
`;

const Card =  styled.div`
  background-color:red;

`
const Button = styled.button`
 border-radius: 50px;
 padding:25px;
 background-color: ${props => props.theme.successColor};
 `

function App() {
  return (
    <React.Fragment>
      <Line></Line>

    </React.Fragment>
  );
}

const Container = styled.div`
  height: 50vh;
  width: 100%;
  ${awesomeCard}
  background-color: pink;
`
;


const Form = () =>
  (<Card><Button>Hello</Button></Card>);


export default App;
