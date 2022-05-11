import React from "react";
import Image from "next/image";
import heroImage from "../public/images/LEMI.jpg";
import { Element } from "react-scroll";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-7xl text-left mb-5">
							Estevão <span className="text-indigo-900">Mbala</span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
						Desenvolvedor Fullstack - Web e Desktop, com mais de 2 anos de experiência na área.
						 Trabalhando com tecnologias tais como HTML, CSS,
JavaScript, NodeJS, React JS e Java...
						</p>
						
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;
