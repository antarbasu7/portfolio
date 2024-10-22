
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from '../../assets/dp.jpeg';
import { useState } from 'react';
import SocialModal from '../../components/SocialModal';

import resume from '../../assets/antar-resume.docx.pdf';
import { Slide } from 'react-awesome-reveal';

const Banner = () => {

    const [socialModal, setSocialModal] = useState(false);

    const handleCloseModal = () => setSocialModal(false);

    return (
        <div className='h-screen bg-[#071632] grid lg:grid-cols-2 grid-cols-1 items-center lg::px-40 px-5 py-5 overflow-x-hidden'>
            <Slide>
                <img className='w-[25rem] rounded-full mx-auto' src={myPhoto} alt="" />
            </Slide>
            <div className='text-white md:w-[33rem] lg:mx-0 mx-auto'>
                <Slide direction='right'>
                    <h1 className='md:text-[4.3rem] text-4xl font-semibold tracking-wider'> <span className='text-sm block ms-1 lg:mb-3 md:mb-1'>I am</span> Antar Basu</h1>
                    <div className='flex justify-between md:text-xl text-sm uppercase font-semibold h-[2rem] text-[#a6fcb1] mt-3'>
                        <Typewriter
                            words={['Full Stack Engineer', 'Next JS Developer', 'React JS Developer', 'Backend Engineer (Python, NodeJS)', 'Blockchain Enthusiast ', 'DevOps (AWS, Docker, Git)']}
                            loop={true}
                            cursor
                            cursorStyle=''
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    <p className='font-semibold mt-5'>
                        Hi, {`I'm`} Antar Basu, a software engineer with over <span className='text-[#3ab049]' >three years of experience</span> in building scalable systems and <span className='text-[#3ab049]' >microservice architectures</span>. I hold a <span className='text-[#3ab049]' >B.Tech in Computer Science and Engineering </span> from Maulana Abul Kalam Azad University of Technology. In my current role, I’ve led several key projects, including the development of a <span className='text-[#3ab049]' >blockchain infrastructure automation platform - Zeeve</span>, where I designed <span className='text-[#3ab049]' >SDKs</span> for seamless backend communication and contributed to cross-functional teams to optimize automation workflows.
                        <br /> <br />
                        I’ve also spearheaded the integration of <span className='text-[#3ab049]' >Zoho APIs for payment automation,</span> created I’ve also spearheaded the integration of <span className='text-[#3ab049]' >user-friendly blockchain dashboards</span>, and implemented <span className='text-[#3ab049]' >KYC automation with Sumsub.</span> Additionally, I’ve worked on customer support <span className='text-[#3ab049]' >automation using Zendesk API for efficient ticket management.</span> My technical skills span across technologies like <span className='text-[#3ab049]' >Next.js, React.js, Node.js, Express.js, TypeScript, Python, AWS, and Docker,</span> among others.
                        <br /> <br />
                        I’m passionate about leading teams, driving innovative projects, and continuously learning in fast-paced, growth-oriented environments.
                    </p>

                    <div className='mt-5 head_button md:w-[29rem]'>
                        <a href={resume} target='_' className=''><button>Resume</button></a>
                        <button onClick={() => setSocialModal(true)} className=''>Contact</button>
                    </div>

                </Slide>
                    <div>
                        {socialModal && <SocialModal handleCloseModal={handleCloseModal} />}
                    </div>
            </div>
        </div>
    );
};

export default Banner;