import * as React from "react";
import Styled from "styled-components";

const Wrapper = Styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
  margin-top: 10px;
`;

const FormCheckBox = Styled("input")`
  margin-right: 5px;
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
        <FormCheckBox type="checkbox" />
        BBB
        <FormCheckBox type="checkbox" />
        CCC
      </Wrapper>
    );
  }
}
