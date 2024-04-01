import "tailwindcss/tailwind.css"
import "../styles/globals.css";

const technologies = ["Python","Django", "Flask", "FastAPI","JavaScript", "React", "React Native", "Next.js","Tailwind CSS", "SQL", "MySQL", "Postgres", "Redshift", "Docker", "Git", "AWS (Basic)" ]

const Home = () => {
    return (
      <div>
        <div className="flex flex-col md:flex-row">
            <div className= "flex flex-col w-screen max-w-screen-lg mx-12 mt-24 mb-8 justify-between">
              <div className="md:sticky top-40 ml-12">
                <h1 className="text-6xl text-white mb-3">Michel Marinkovic</h1>
                <h2 className="text-2xl text-white mb-5">Product Owner/Technical Lead</h2>
                <ol className="flex flex-row">
                  <li className="my-4">
                    <span className="border-t-2 px-4 mx-4 relative -bottom-2.5"> </span>
                    <span className="text-white ">
                      <a href="#about-me">About me</a>
                    </span>
                  </li>
                </ol>
                <ol className="flex flex-row">
                  <li className="my-4">
                    <span className="border-t-2 px-4 mx-4 relative -bottom-2.5"> </span>
                    <span className="text-white ">
                      <a href="#studies">Studies</a>
                    </span>
                  </li>
                </ol>
                <ol className="flex flex-row">
                  <li className="my-4">
                    <span className="border-t-2 px-4 mx-4 relative -bottom-2.5"> </span>
                    <span className="text-white ">
                      <a href="#experience">Experience</a>
                    </span>
                  </li>
                </ol>
                <ol className="flex flex-row">
                  <li className="my-4">
                    <span className="border-t-2 px-4 mx-4 relative -bottom-2.5"> </span>
                    <span className="text-white ">
                      <a href="#courses">Courses</a>
                    </span>
                  </li>
                </ol>
              </div>
              <div className="flex flex-row gap-4 md:sticky bottom-24 ml-12 pt-24">
                <span>
                  <a href="https://mail.google.com/mail/u/0/?fs=1&to=michel.marinkovic@gmail.com&tf=cm" title="Contact me">
                    <svg className="h-12 w-16"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.2" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="3 9 12 15 21 9 12 3 3 9" />  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />  <line x1="3" y1="19" x2="9" y2="13" />  <line x1="15" y1="13" x2="21" y2="19" /></svg>
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/michel-marinkovic-esteve-5902b7153/" title="Find me in LinkedIn">
                    <svg className="h-12 w-16"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  strokeWidth="1.2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                  </a>
                </span>
                <span>
                  <a href="https://github.com/michelmarinkovice" title="Check out my Github">
                    <svg className="h-12 w-16"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  strokeWidth="1.2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  </a>
                </span>
                <span>
                  <a href="https://drive.google.com/file/d/1-20_MnNchjnh9kSlKdxQnynfFu1ekk8l/view?usp=sharing" title="Download my CV">
                    <svg className="h-12 w-16"  fill="none" viewBox="0 0 24 24" stroke="#fff">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col w-screen max-w-screen-lg mx-12">
              <div className="mx-6 mt-36 hover:bg-[#313132] py-6 px-6 rounded-lg">
                <h2 id="about-me" className="text-2xl text-white mb-8"> About me</h2>
                <p className="text-xl text-white flex-wrap">
                  I&apos;m an Industrial Engineer, that is passionate about TI. I&apos;ve 4 years of experience
                  as a Product Owner. I also love to learn about new technologies in my free time, currently
                  I&apos;m studying to achieve the <b>AWS Solutions Architect Certification.</b> 
                </p>
              </div>
              <div className="mx-6 mt-8 px-6 py-6 hover:bg-[#313132] rounded-lg">
                <h2 className="text-2xl text-white mb-8">What technologies do I know?</h2>
                <div className="flex flex-wrap gap-4">
                  {technologies.map((item,i)=>{
                    return( 
                      <div key ={i} className="px-2 py-0.5 text-xl bg-technical-pill-color rounded-lg text-white hover:brightness-[120%]">
                        {item}
                      </div>
                    )
                  })}
          
                </div>
              </div>
             
              <div className="hover:bg-[#313132] py-6 mb-6 mt-16 rounded-lg">
                <h2 id="studies" className="text-2xl text-white mx-6 mb-8">Studies</h2>
                <ol className="flex flex-col">
                  <li className="mx-6">
                    <div></div>
                    <div className="text-2xl text-white">
                      Industrial Engineering
                    </div>
                    <div className="text-xl text-white">
                      Universidad Técnica Federico Santa María
                    </div>
                    <div className="text-lg text-technical-pill-color">
                      January 2013 - December 2018
                    </div>
                  </li>
                </ol>
              </div>
             
              <div className="hover:bg-[#313132] py-6 px-6 mb-6 mt-6 rounded-lg">
                <h2 id="experience" className="text-2xl text-white mb-8">Experience</h2>
                <div className="relative border-s border-technical-pill-color">
                  <ol className="flex flex-col">
                    <div className="absolute w-3 h-3 bg-technical-pill-color rounded-full mt-1.5 -start-1.5 border border-technical-pill-color"></div>
                    <li className="mx-6">
                      <div className="text-2xl text-white">
                        Teamcore - Scalability & Processes Leader
                      </div>
                      <div className="text-lg text-technical-pill-color">
                        Mar. 2023 - Current
                      </div>
                    </li>
                  </ol>
                  <ol className="flex flex-col mt-12">
                  <div className="absolute w-3 h-3 bg-technical-pill-color rounded-full mt-1.5 -start-1.5 border border-technical-pill-color"></div>
                    <li className="mx-6">
                      <div className="text-2xl text-white">
                        Tech-K - Scalability & Processes Leader
                      </div>
                      <div className="text-lg text-technical-pill-color">
                        Jan. 2022 - Feb. 2023
                      </div>
                    </li>
                  </ol>
                  <ol className="flex flex-col mt-12">
                  <div className="absolute w-3 h-3 bg-technical-pill-color rounded-full mt-1.5 -start-1.5 border border-technical-pill-color"></div>
                    <li className="mx-6">
                      <div className="text-2xl text-white">
                        Tech-K - Product Owner
                      </div>
                      <div className="text-lg text-technical-pill-color">
                        Jan. 2021 - Dec. 2021
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="hover:bg-[#313132] py-6 px-6 mb-6 rounded-lg">
                <h2 id ="courses" className="text-2xl text-white mb-8">Courses</h2>
                <div className="relative border-s border-technical-pill-color">
                  <ol className="flex flex-col">
                    <div className="absolute w-3 h-3 bg-technical-pill-color rounded-full mt-1.5 -start-1.5 border border-technical-pill-color"></div>
                    <li className="mx-6">
                      <div className="text-2xl text-white">
                        Git & Github - The Practical Guide
                      </div>
                      <div className="text-lg text-technical-pill-color">
                        <a href="https://www.udemy.com/certificate/UC-b526c03b-6b0e-4be6-94b4-942026ce0521/" className="text-technical-pill-color">Certificate</a>
                      </div>
                    </li>
                  </ol>
                  <ol className="flex flex-col mt-12">
                  <div className="absolute w-3 h-3 bg-technical-pill-color rounded-full mt-1.5 -start-1.5 border border-technical-pill-color"></div>
                    <li className="mx-6">
                      <div className="text-2xl text-white">
                        Terraform: De principiante a certificado 2024
                      </div>
                      <div className="text-lg text-technical-pill-color">
                        <a href="https://www.udemy.com/certificate/UC-d2aa266f-6807-43c7-a808-c4b0d4daab46/" className="text-technical-pill-color">Certificate</a>
                      </div>
                    </li>
                  </ol>
                  <ol className="flex flex-col mt-12 mb-12">
                  <div className="absolute w-3 h-3 bg-technical-pill-color rounded-full mt-1.5 -start-1.5 border border-technical-pill-color"></div>
                    <li className="mx-6">
                      <div className="text-2xl text-white">
                        DevOps con Docker, Jenkins, Kubernetes, git, GitFlow CI y CD
                      </div>
                      <div className="text-lg text-technical-pill-color">
                        <a href="https://www.udemy.com/certificate/UC-d5096622-be6d-4462-a2eb-c1efccedb1ec/" className="text-technical-pill-color">Certificate</a>
                      </div>
                    </li>
                  </ol>
                  <ol className="flex flex-col mt-12 mb-12">
                  <div className="absolute w-3 h-3 bg-technical-pill-color rounded-full mt-1.5 -start-1.5 border border-technical-pill-color"></div>
                    <li className="mx-6">
                      <div className="text-2xl text-white">
                        Ultimate AWS Certified Solutions Architect Associate SAA-C03
                      </div>
                      <div className="text-lg text-technical-pill-color">
                        <a href="https://www.udemy.com/certificate/UC-c3b17172-9c91-42fa-bba8-30599779a944/" className="text-technical-pill-color">Certificate</a>
                      </div>
                    </li>
                  </ol>
                  <ol className="flex flex-col mt-12">
                  <div className="absolute w-3 h-3 bg-technical-pill-color rounded-full mt-1.5 -start-1.5 border border-technical-pill-color"></div>
                    <li className="mx-6">
                      <div className="text-2xl text-white">
                        SQL and PostgreSQL: The Complete Developer&apos;s Guide
                      </div>
                      <div className="text-lg text-technical-pill-color">
                        <a href="https://www.udemy.com/certificate/UC-352be351-ce36-4e74-8629-bfcc519ad8db/" className="text-technical-pill-color">Certificate</a>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Home;