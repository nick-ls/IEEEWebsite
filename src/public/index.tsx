import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./components/topbar";
import {ACTIVE_PAGES, SOCIALS, EMAIL, OFFICERS, SLIDESHOW_IMGS} from "./Config";
import Splash from "./components/Splash";
import DefaultSection from "./components/DefaultSection";
import InvolveBox from "./components/InvolveBox";
import SocialCard from "./components/SocialCard";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

interface MainProps {}
interface MainState {}

class Main extends React.Component<MainProps, MainState> {
	constructor(props: MainProps) {
		super(props);
		this.state = {};
	}
	public render() {
		return <>
			<TopBar links={ACTIVE_PAGES}></TopBar>
			<Splash cta="Join the 2nd largest IEEE student branch in the US!" delay={10000} backgrounds={SLIDESHOW_IMGS}></Splash>
			<DefaultSection title="We are..." paragraphs={[
				"A diverse engineering community seeking to empower students through hands-on projects, networking opportunities, and social events. Bonus points on having an open-access project studio!",
				"The Institute of Electrical and Electronics Engineers (IEEE) UC San Diego student branch is the second largest student chapter in the world’s largest professional organization. On the student level, we provide members with a plethora of ways to get involved!"
			]}></DefaultSection>
			<div className="project-space">
				<div className="ps-title">Join us at the Project Space!</div>
				<p>The <a href="https://www.google.com/maps/@32.8817126,-117.2350998,59m/">IEEE Project Space</a> is an open-access, collaborative space where students can do homework or get access to basic electronic tools such as soldering stations, breadboard components, and Arduino and Raspberry Pi parts!</p>
				<a className="visit-us" href="https://www.google.com/maps/@32.8817126,-117.2350998,59m/">Come visit at EBU1-4710!</a>
			</div>
			<DefaultSection className={"involved"} title="How else can I get involved?">
				<div className="cards">
					<InvolveBox boxTitle="Events" image="img/backgrounds/pumpkin.jpg" description="Come bond with us during our events! We have various social events throughout the quarter, k-12 outreach to give back to the community, plus technical and professional workshops to equip you for life after graduation!"></InvolveBox>
					<InvolveBox boxTitle="Projects" image="img/backgrounds/projects.jpg" description="Apply to our project teams! Gain technical skills and hands-on project experience working together in teams in quarterly or annually long commitments. Whether you are just starting out,s or want to put your advanced skills to the test, IEEE has a project for you!"></InvolveBox>
					<InvolveBox boxTitle="Committees" image="img/backgrounds/committees.jpg" description="Want to become more involved? Join our committees and gain valuable experience from our events chairs by brainstorming ideas and planning behind the scenes alongside them!"></InvolveBox>
				</div>
			</DefaultSection>
			<DefaultSection title="Have questions? Contact us!">
				<div className="join-scls">{
					[...EMAIL, ...SOCIALS].map(n => (
						<SocialCard url={n.url} image={n.icon} message={n.message}></SocialCard>
					))
				}</div>
			</DefaultSection>
			<DefaultSection className="contact" title="Or... Contact one of our staff!">
				<Carousel items={OFFICERS} itemsPerPage={8}></Carousel>
			</DefaultSection>
			<Footer></Footer>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};