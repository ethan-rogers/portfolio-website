import Image from "next/image";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";


export default function Home() {
  return <div className ="text-left pt-12 px-17 text-gray-200 ">
    <h1 className="text-7xl mb-15 mt-10"> Welcome :)</h1>
    <br></br>
    <p className="text-2xl mb-6"> My name is Ethan Rogers. I am studying computer engineering at the University of Virginia. 
      In my free time, I love coding software, designing cool electronics and fencing. 
      Check out the projects I've worked on. 
      If you have any questions or want to contribute to these projects, feel free to email me.</p>

         <div className="flex items-center space-x-10 mt-25">
              <Link target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ethan-rogers-188394329" className = "text-4xl text-gray-200 hover:text-white font-medium">
                <FaLinkedin /> 
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/ethan-rogers" className = "text-4xl text-gray-200 hover:text-white font-medium">
                <FaGithub />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="mailto:eholtrogers@gmail.com" className = "text-4xl text-gray-200 hover:text-white font-medium">
                <CgMail /> 
              </Link>

              
            </div>
  </div>;


}
