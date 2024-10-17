
import { Fade, Rotate, Slide } from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';

const AboutMe = () => {


    return (
        <div className="py-20 lg:px-36 px-5 overflow-hidden" id='about'>
            <div>
                <h2 className="text-3xl font-bold">About Me</h2>
            </div>


            <div className="grid md:grid-cols-5 grid-cols-1 mt-5 items-center gap-5">
                <div className='col-span-3'>
                    <Fade>
                        <p className=" md:text-lg">
                            Hi, {`I'm`} Antar Basu, a software engineer with over <span className='text-[#3ab049]' >three years of experience</span> in building scalable systems and <span className='text-[#3ab049]' >microservice architectures</span>. I hold a <span className='text-[#3ab049]' >B.Tech in Computer Science and Engineering </span> from Maulana Abul Kalam Azad University of Technology. In my current role, I’ve led several key projects, including the development of a <span className='text-[#3ab049]' >blockchain infrastructure automation platform - Zeeve</span>, where I designed <span className='text-[#3ab049]' >SDKs</span> for seamless backend communication and contributed to cross-functional teams to optimize automation workflows.
                            <br /> <br />
                            I’ve also spearheaded the integration of <span className='text-[#3ab049]' >Zoho APIs for payment automation,</span> created I’ve also spearheaded the integration of <span className='text-[#3ab049]' >user-friendly blockchain dashboards</span>, and implemented <span className='text-[#3ab049]' >KYC automation with Sumsub.</span> Additionally, I’ve worked on customer support <span className='text-[#3ab049]' >automation using Zendesk API for efficient ticket management.</span> My technical skills span across technologies like <span className='text-[#3ab049]' >Next.js, React.js, Node.js, Express.js, TypeScript, Python, AWS, and Docker,</span> among others.
                            <br /> <br />
                            I’m passionate about leading teams, driving innovative projects, and continuously learning in fast-paced, growth-oriented environments.
                            <br /> <br />
                            <h2 className="text-3xl font-bold">My Objective</h2> <br />
                            Results-driven software engineer with over 3 years of experience in developing scalable systems and microservice architectures. Seeking to transition into a role that allows me to leverage my technical expertise while leading a team to drive innovative projects in a fast-paced, growth-oriented environment.
                        </p>
                    </Fade>
                </div>
                <div className="col-span-2 md:ms-auto" >
                    <Slide direction='right' >
                        <Rotate>
                            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                                <img className="w-[25rem] rounded-full" src="src/assets/fly_sky.jpeg" alt="notfound" />
                            </Tilt>
                        </Rotate>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;