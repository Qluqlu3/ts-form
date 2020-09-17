import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
	display: flex;
	flex-direction : column;
	justify-content: center;
	align-items: center;
`;

const Text = Styled.input`
	width: 300px;
	height: 30px;
	border-radius: 5px;
	border: none;
	margin: 5px;
`;

const InputText = Styled.div`
	height: 50px;
	font-size: 17px;
	color: #F00;
`;

export interface Props {}

export interface State {
  inputText: string;
}

class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { inputText: "" };
  }

  renderinputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  public render() {
    return (
      <Wrapper>
        <Text placeholder="text" onChange={this.renderinputText} />
        <InputText>{this.state.inputText}</InputText>
      </Wrapper>
    );
  }
}

export default Input;
