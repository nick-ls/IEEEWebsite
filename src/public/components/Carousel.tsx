import * as React from "react";
import {Component} from "react";
import { CarouselItemProps } from "./CarouselItem";
import CarouselPage from "./CarouselPage";

interface CarouselProps {
	items: CarouselItemProps[];
	itemsPerPage: number;
}
interface CarouselState {
	page: number;
	itemsPerPage: number;
}

export default class Carousel extends Component<CarouselProps, CarouselState> {
	private static HALF_LIFE = 600;
	constructor(props: CarouselProps) {
		super(props);
		this.state = {
			page: 0,
			itemsPerPage: this.getItemsPerPage()
		};
		window.addEventListener("resize", (()=>{
			this.setState({itemsPerPage: this.getItemsPerPage()});
		}).bind(this));
	}

	private prevPage() {
		this.setState({page: this.state.page - 1 < 0 ? 0 : this.state.page - 1});
	}

	private nextPage() {
		this.setState({ page: this.state.page + 1 > Math.ceil(this.props.items.length / this.state.itemsPerPage) - 1 ?
			Math.ceil(this.props.items.length / this.state.itemsPerPage) - 1 :
			this.state.page + 1
		});
	}

	private getItemsPerPage() {
		return Math.floor(this.props.itemsPerPage / (window.innerWidth < Carousel.HALF_LIFE ? 2 : 1));
	}

	public render() {
		let arr = this.chunkArray(this.props.items, this.state.itemsPerPage);
		return <div className="carousel">
			<img className="carousel-left" src="img/arrow.svg" style={
				this.state.page === 0 ? {visibility: "hidden"} : {}
			} onClick={this.prevPage.bind(this)}></img>
			<div className="carousel-items">{
				arr.map((items, i)=>(
					<CarouselPage items={items} visible={i===this.state.page}></CarouselPage>
				))
			}</div>
			<img className="carousel-right" src="img/arrow.svg" style={
				this.state.page === arr.length - 1 ? {visibility: "hidden"} : {}
			} onClick={this.nextPage.bind(this)}></img>
		</div>;
	}

	private chunkArray(array: CarouselItemProps[], chunkLen: number):CarouselItemProps[][] {
		let returnArr = [];
		for(let i = 0; i < array.length; i += chunkLen) {
			returnArr.push(array.slice(i, i + chunkLen));
		}
		return returnArr;
	}
}