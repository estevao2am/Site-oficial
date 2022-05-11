import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Element } from "react-scroll";

function services() {
	return (
		<Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<h1 className="text-indigo-400 text-5xl font-bold text-center">
				Acompanhe - me 
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
						<a
            href="https://www.instagram.com/estevao2am/"
            target="_blank"
            >
          	<FaInstagram className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" /></a>
							<h2 className="text-xl text-indigo-600 font-semibold">
								
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
						Me Siga no Instagram e poderá interagir Comigo!
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
						<a
            href="https://www.github.com/estevao2am"
            target="_blank">
          	<FaGithub className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" /></a>
							<h2 className="text-xl text-indigo-600 font-semibold">
						
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Encontrarás todos os meus Projetos no meu perfil<br></br> do GITHUB!
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
						<a
            href="https://www.twitter.com/estevao2am"
            target="_blank"><FaTwitter className="w-10 h-10 bg-blue-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" /></a>
							
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Podes tambem interagir comigo atraves do Twitter.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							
						<a	 href="https://www.instagram.com/estevao2am"target="_blank">
							 
							<FaLinkedin  className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							
							</a>
							
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Acompanhe a minha vida Profissioal e as minhas conexões no Linkedin
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default services;
