import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { PiBriefcaseFill } from "react-icons/pi";
import { MdPermContactCalendar } from "react-icons/md";
import { useNavBarContext } from "../../context/NavBarProvider";
import { useContext } from "react";
import { firebaseContext } from "../../context/FirebaseProvider";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Header = () => {
      const { navToggle, isNavOpen } = useNavBarContext();
      const { Logout } = useContext(firebaseContext)


      let tl = gsap.timeline()
      useGSAP(() => {
            tl.from(".logo-name", {
                  x: 300,
                  opacity: 0,
                  duration: 1,
                  delay: 0.5
            })
            tl.from(".header-nav ul li > a", {
                  x: -300,
                  opacity: 0,
                  duration: 0.4,
                  stagger: 0.3
            })

      }, {})



      return (
            <header className={`${isNavOpen ? 'margin-st-24' : 'margin-st-64'} me-4 h-full  bg-[#040C10] relative rounded-md border-[.75px] border-[#fcfcfc0d]`}>
                  <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                              <Link className="py-1 mx-4 text-2xl text-[#00aaff]">
                                    <FaBarsStaggered onClick={() => navToggle()} />
                              </Link>
                              <Link className="text-2xl text-[#fff] logo-name">KRuTik</Link>
                        </div>
                        <div
                              className={`${isNavOpen ? 'width-24 ' : 'width-60'} header-nav  bg-[#04080A] border-[.75px] border-[#fcfcfc0d] p-4 rounded-md`}
                        >
                              <ul >
                                    <li>
                                          <Link
                                                to="/"
                                                className=" text-[#c0c0c0] rounded-md py-2 my-2 bg-[#041722] justify-center flex items-center text-2xl"
                                          >
                                                <FaHome className="text-[#00aaff]" />
                                                {isNavOpen ? '' : <p className="hidden sm:block ms-3 transition-all">Home</p>}
                                          </Link>
                                    </li>
                                    <li>
                                          <Link
                                                to="/about"
                                                className=" text-[#c0c0c0] rounded-md py-2 my-2 bg-[#041722]  flex items-center justify-center text-2xl"
                                          >
                                                <FaBookOpenReader className=" text-[#00aaff]" />
                                                {isNavOpen ? '' : <p className="hidden sm:block ms-3 transition-all">About Us</p>}
                                          </Link>
                                    </li>
                                    <li>
                                          <Link
                                                to="portfolio"
                                                className=" text-[#c0c0c0] rounded-md py-2 my-2 bg-[#041722] flex items-center justify-center text-2xl"
                                          >
                                                <PiBriefcaseFill className=" text-[#00aaff]" />
                                                {isNavOpen ? '' : <p className="hidden sm:block ms-3 transition-all">Portfolio</p>}
                                          </Link>
                                    </li>
                                    <li>
                                          <Link
                                                to="/service"
                                                className=" text-[#c0c0c0] rounded-md py-2 my-2 bg-[#041722] flex items-center justify-center text-2xl"
                                          >
                                                <GrServices className=" text-[#00aaff]" />
                                                {isNavOpen ? '' : <p className="hidden sm:block ms-3 transition-all">Services</p>}
                                          </Link>
                                    </li>
                                    <li>
                                          <Link
                                                to="contact"
                                                className=" text-[#c0c0c0] rounded-md py-2 my-2 bg-[#041722] flex items-center justify-center text-2xl"
                                          >
                                                <MdPermContactCalendar className=" text-[#00aaff]" />
                                                {isNavOpen ? '' : <p className="hidden sm:block ms-3 transition-all">Contact Us</p>}
                                          </Link>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </header>
      );
};

export default Header;
