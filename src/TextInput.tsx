import React, { useState } from "react";
import Styled from "styled-components";

const Wrapper = Styled("div")`
	display: flex;
	flex-direction : column;
	justify-content: center;
	align-items: center;
`;

const FormInput = Styled("input")`
	width: 300px;
	height: 30px;
	border-radius: 5px;
	border: none;
	margin: 5px;
	margin-top: 10px;	
`;

const TextShown = Styled("div")`

`;

export const TextInput: React.FC = (props) => {
  const [inputText, setInputText] = useState("");

  const renderText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <Wrapper>
      <FormInput type="text" onChange={renderText} />
      <TextShown>{inputText}</TextShown>
    </Wrapper>
  );
};
