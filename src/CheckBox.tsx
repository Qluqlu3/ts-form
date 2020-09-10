import * as React from 'react';

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
		return <div></div>;
	}
}
