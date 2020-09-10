import * as React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 15px
`;

const RadioButton = Styled.input`
	margin: 0 5px;
`;

const Label = Styled.label`
	margin-right: 10px;
`;

export interface IAppProps {}

export interface IAppState {}

export default class Radio extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);

		this.state = {};
	}

	public render() {
		return (
			<Wrapper>
				<Label htmlFor="AAA">
					<RadioButton type="radio" name="radio" id="AAA" />
					AAA
				</Label>
				<Label htmlFor="BBB">
					<RadioButton type="radio" name="radio" id="BBB" />
					BBB
				</Label>
			</Wrapper>
		);
	}
}
