// import logo from "/Users/aryanshjain/Desktop/tail/my-project/src/assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1 className="text-neutral-200 text-4xl">Aj</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/connect-aryanshjain/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aryansh1412" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/AryanshJain3" target="_blank">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/aryansh_jain_/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
