import * as React from "react";
import Styled from "styled-components";

const Wrapper = Styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FormCheckBox = Styled("input")`

`;

export interface ICheckBoxProps {}

export interface ICheckBoxState {}

export default class CheckBox extends React.Component<
  ICheckBoxProps,
  ICheckBoxState
> {
  constructor(props: ICheckBoxProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Wrapper>
        <FormCheckBox type="checkbox" />
        AAA
      </Wrapper>
    );
  }
}
