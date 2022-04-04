import * as React from "react";
import {Component} from "react";

interface InvolveBoxProps {
	boxTitle: string;
	image: string;
	description: string;
}
interface InvolveBoxState {}

export default class InvolveBox extends Component<InvolveBoxProps, InvolveBoxState> {
	constructor(props: InvolveBoxProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="involve-card">
			<a href={"/"+this.props.boxTitle.toLowerCase()}><div className="involve-title">{this.props.boxTitle}</div></a>
			<img src={this.props.image}></img>
			<div className="involve-description">{this.props.description}</div>
		</div>;
	}
}
