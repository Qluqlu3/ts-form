import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
	display: flex;
	flex-direction : column;
	justify-content: center;
	align-items: center;
`;

const Password = Styled.input`
	width: 300px;
	height: 30px;
	border-radius: 5px;
	border: none;
	margin: 5px;
`;

export interface IAppProps {}

export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<Wrapper>
				<Password type="password" placeholder="password" />
			</Wrapper>
		);
	}
}
