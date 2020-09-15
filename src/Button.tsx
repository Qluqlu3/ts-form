import * as React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SendButton = Styled.button`
	margin-top: 15px;
	cursor: pointer;		
`;

export interface IButtonProps {}

export interface IButtonState {}

export default class Button extends React.Component<
  IButtonProps,
  IButtonState
> {
  constructor(props: IButtonProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Wrapper>
        <SendButton>送信</SendButton>
      </Wrapper>
    );
  }
}
