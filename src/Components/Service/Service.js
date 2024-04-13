import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiAntdesign } from "react-icons/si";
import { LiaElementor } from "react-icons/lia";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { MdOutlineDynamicForm } from "react-icons/md";
import { IoAccessibilityOutline } from "react-icons/io5";
import { GrDocumentPerformance } from "react-icons/gr";
import { PiCrosshairBold } from "react-icons/pi";
import { GrHostMaintenance } from "react-icons/gr";
import { AiOutlineControl } from "react-icons/ai";

import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { useNavBarContext } from '../../context/NavBarProvider';

const newdata = [

      {
            id: '1',
            title: 'Design Implementation',
            description: ' Translate the visual design mockups provided by UI/UX designers into functional web pages using HTML, CSS, and JavaScript. Ensure that the design is faithfully replicated across different screen sizes and browsers through responsive design techniques.',
            icon: <SiAntdesign></SiAntdesign>
      },
      {
            id: '2',
            title: 'Layout and Structure',
            description: ' Develop the layout and structure of the service section, organizing content in a logical and visually appealing manner. Use semantic HTML elements to provide meaning and improve accessibility.',
            icon: <TbLayoutSidebarLeftCollapse></TbLayoutSidebarLeftCollapse>
      },
      {
            id: '3',
            title: 'Interactive Elements',
            description: 'Implement interactive elements such as buttons, dropdown menus, sliders, tabs, and accordions to enhance user engagement and improve the usability of the service section.',
            icon: <LiaElementor></LiaElementor>
      },
      {
            id: '4',
            title: 'Content Integration',
            description: ' Integrate written content, images, videos, and other multimedia assets into the frontend, ensuring that they are displayed correctly and optimized for fast loading times.',
            icon: <MdOutlineContentPasteSearch></MdOutlineContentPasteSearch>
      },
      {
            id: '5',
            title: 'Dynamic Content',
            description: 'If the service section includes dynamic content such as pricing tables, product listings, or user-generated content, work with backend developers to fetch and display this data dynamically using AJAX or other client-server communication techniques.',
            icon: <MdOutlineDynamicForm></MdOutlineDynamicForm>
      },
      {
            id: '6',
            title: 'Accessibility',
            description: ' Ensure that the service section is accessible to users with disabilities by following best practices for accessibility, such as using semantic HTML, providing alternative text for images, and implementing keyboard navigation support.',
            icon: <IoAccessibilityOutline></IoAccessibilityOutline>
      },
      {
            id: '7',
            title: 'Performance Optimization',
            description: 'Optimize the performance of the service section by minimizing file sizes, leveraging browser caching, and reducing the number of HTTP requests. Implement lazy loading for images and other non-essential resources to improve initial page load times.',
            icon: <GrDocumentPerformance></GrDocumentPerformance>
      },
      {
            id: '8',
            title: 'Cross-Browser Compatibility',
            description: 'Test the service section across different web browsers and devices to ensure that it functions correctly and looks consistent. Use CSS prefixes or polyfills to handle browser-specific quirks when necessary.',
            icon: <PiCrosshairBold></PiCrosshairBold>
      },
      {
            id: '9',
            title: 'Code Maintenance and Documentation',
            description: 'OpWrite clean, well-structured code that is easy to maintain and understand. Document your code and follow coding standards to facilitate collaboration with other developers and future updates.',
            icon: <GrHostMaintenance></GrHostMaintenance>
      },
      {
            id: '10',
            title: 'Version Control',
            description: 'Use version control systems such as Git to track changes to the codebase, collaborate with other team members, and roll back to previous versions if needed.',
            icon: <AiOutlineControl></AiOutlineControl>
      }
]


const Service = () => {
      const { isNavOpen } = useNavBarContext()
      const [expandedDescriptions, setExpandedDescriptions] = useState({});

      const toggleDescription = (id) => {
            setExpandedDescriptions((prevState) => ({
                  ...prevState,
                  [id]: !prevState[id],
            }));
      };

      var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            autoplay: true,
            slidesToScroll: 2,
            prevArrow: null,
            nextArrow: null,
            slickGoTo: false,
            slickPrev: false,
            initialSlide: 0,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 2,
                        }
                  },
                  {
                        breakpoint: 900,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              initialSlide: 1
                        }
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                        }
                  }
            ]
      };
      console.log(expandedDescriptions);
      return (
            <div className={`${isNavOpen ? ' margin-st-24' : 'margin-st-64'}  me-4`}>
                  <div>
                        <div className='py-8 text-end'>
                              <h2 className=' text-4xl sm:text-6xl relative before:absolute before:top-1/4 before:-right-8 before:w-8 before:h-2 before:bg-[#00aaff29] rounded-xl bg-[#00aaff29]  inline-block py-6 px-10 text-white text-end me-4  after:absolute after:bottom-1/4 after:-right-8 after:w-8 after:h-2 after:bg-[#00aaff29]  border before:border after:border border-[#fcfcfc0d] before:border-[#fcfcfc0d] after:border-[#fcfcfc0d]'>Services</h2>
                        </div>

                        <Slider {...settings} className='pb-12'>
                              {
                                    newdata.map((data, i) => {
                                          return (

                                                <div className='px-2' key={i}>
                                                      <div className='p-6 rounded-md text-center bg-[#00aaff4f]'>
                                                            <p className='text-6xl text-[#00aaff] flex justify-center mb-2'>{data.icon}</p>
                                                            <h3 className='text-white text-2xl'>{data.title}</h3>
                                                            {expandedDescriptions[data.id] ? (
                                                                  <p className='text-[#c0c0c0] mt-2'>{data.description}</p>
                                                            ) : (
                                                                  <p className='text-[#c0c0c0] mt-2'>{data.description.slice(0, 120)}...</p>
                                                            )}
                                                            <button className='py-2 px-6 bg-[#0fb7ff99] rounded-lg mt-4 text-white' onClick={() => toggleDescription(data.id)}>
                                                                  {expandedDescriptions[data.id] ? "Show Less" : "More Read"}
                                                            </button>
                                                      </div>
                                                </div>

                                          )
                                    })
                              }


                        </Slider>
                  </div>
            </div>
      )
}

export default Service