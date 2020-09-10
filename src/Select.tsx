import * as React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FormSelect = Styled('select')`
	width: 150px;
	height: 30px;
	border-radius: 5px;
`;

const Option = Styled('option')`

`;

export interface IAppProps {}

export interface IAppState {}

export default class Select extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {};
	}

	public render() {
		const lists: Array<string> = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF'];
		return (
			<Wrapper>
				<FormSelect>
					{lists.map((list) => {
						return <Option>{list}</Option>;
					})}
				</FormSelect>
			</Wrapper>
		);
	}
}
