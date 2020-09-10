import React from 'react';
import Styled from 'styled-components';

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

export interface Props {}

export interface State {}

class Input extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<Wrapper>
				<Text placeholder="text" />
			</Wrapper>
		);
	}
}

export default Input;
