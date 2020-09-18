import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";
import Styled from "styled-components";
import Password from "./Password";
import Radio from "./Radio";
import Select from "./Select";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { TextInput } from "./TextInput";

const Wrapper = Styled.div`
	width: 100vw;
	height: 100vh;
	margin: 0px;
	padding: 10px;
	background: #ccc;
`;

const Text = Styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #222;
`;

ReactDOM.render(
  <Wrapper>
    <Text>フォーム</Text>
    <Input />
    <Password />
    <Radio />
    <Select />
    <CheckBox />
    <Button />
    <TextInput />
  </Wrapper>,
  document.getElementById("root")
);
