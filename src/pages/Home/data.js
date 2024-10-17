import myPhoto1 from '../../assets/incogniChat.png';
import myPhoto2 from '../../assets/img2.jpeg';
import myPhoto3 from '../../assets/img3.jpeg';
import myPhoto4 from '../../assets/img4.jpeg';
import myPhoto5 from '../../assets/img5.jpeg';
import myPhoto6 from '../../assets/img6.jpeg';
import myPhoto7 from '../../assets/img7.jpeg';
import myPhoto8 from '../../assets/img8.jpeg';
import myPhoto9 from '../../assets/zeeve1.png';
import myPhoto10 from '../../assets/zeeve2.png';
import myPhoto11 from '../../assets/zeeve3.png';

const data = [
    {
        id: 1,
        title: 'Zeeve App',
        subTitle: 'full stack',
        images: [
            myPhoto9,
            myPhoto10,
            myPhoto11
        ],
        disc: "Zeeve is a blockchain deployment and management platform that simplifies the process of deploying, managing, and scaling blockchain infrastructure. It's designed to support both enterprises and developers, enabling them to launch and maintain blockchain nodes, decentralized apps (dApps), and networks with ease.",
        features: [
            'Rollups as a Service (RaaS): Zeeve offers a low-code platform for building and deploying Optimistic and zkRollups, ensuring secure, scalable, and enterprise-grade rollup solutions with 24/7 monitoring and service level agreements (SLAs)​.',
            'Blockchain Node Management: Zeeve provides robust infrastructure for managing both public and private blockchain nodes, including Ethereum, Polkadot, Solana, Binance Smart Chain, and more. It supports full nodes, validator nodes, and staking infrastructure​.',
            'AppChains Infrastructure: Zeeve allows the creation and management of custom application-specific blockchains, offering scalability, security, and high availability',
            'Interoperability: The platform includes cross-chain bridges and various plugins to ensure seamless interoperability between different blockchain networks​.',
            'Data Indexing and APIs: Zeeve provides powerful APIs for accessing real-time blockchain data and offers integration with indexing tools like Subgraphs for enhanced querying​.',
            'Enterprise Solutions: Zeeve is tailored for enterprises, providing comprehensive solutions such as Hyperledger Fabric, R3 Corda, and enterprise-specific SLAs, ensuring scalability and security​'
        ],
        tech: ['react js', 'node js', 'express js', 'redswitch cluster', 'postgres', 'bootstrap'],
        liveLink: 'https://www.zeeve.io/',
        gitLink: 'https://github.com/Zeeve-App/'
    },
    // {
    //     id: 2,
    //     title: 'happy Playtime',
    //     subTitle: 'full stack',
    //     images: [
    //         'https://i.ibb.co/SJxVMjm/Screenshot-2023-08-19-175424.png',
    //         'https://i.ibb.co/FXgLRqQ/Screenshot-2023-08-19-175403.png',
    //         'https://i.ibb.co/ZdngKrw/Screenshot-2023-08-19-175541.png',
    //         'https://i.ibb.co/1bvr4tY/Screenshot-2023-08-19-175444.png',
    //         'https://i.ibb.co/cNFLBV1/Screenshot-2023-08-19-175506.png',
    //         'https://i.ibb.co/FKBxFkm/Screenshot-2023-08-19-175518.png'
    //     ],
    //     disc: " Showcase your toys online. Add and display toy details seamlessly on the website, celebrating cherished playthings.",
    //     features: [
    //         'Explore a wide range of toys on a fully responsive website.',
    //         'Authenticated users can add, update, and delete toys from their collection.',
    //         'Newly added toys instantly appear on the homepage, showcasing your cherished collection.',
    //         'Discover toys easily with organized categories for an enhanced browsing experience.',
    //         'Firebase integration ensures safe and seamless user authentication for a worry-free experience.'
    //     ],
    //     tech: ['react js', 'node js', 'express js', 'firebase', 'mongoDB', 'tailwind'],
    //     liveLink: 'https://rs-happy-playtime.web.app',
    //     gitLink: 'https://github.com/rajib-sadhu/happy-playtime-client'
    // },
    // {
    //     id: 8,
    //     title: 'Weather App',
    //     subTitle: 'Front End',
    //     images: [
    //         'https://i.ibb.co/0ssd4m9/Screenshot-2023-11-15-193341.png',
    //         'https://i.ibb.co/KwQ012Z/Screenshot-2023-11-15-193408.png',
    //     ],
    //     disc: "WeatherHub is a responsive and user-friendly weather website crafted. It taps into a free live API to deliver real-time weather updates.",
    //     features: [
    //         'Current overview with temperature, humidity, and wind flow.',
    //         'Responsive design adapting seamlessly to various devices.',
    //         'Search functionality for personalized city weather.',
    //         'Live API integration ensuring accurate and up-to-date weather data.'
    //     ],
    //     tech: ['HTML', 'CSS', 'Javascript', 'tailwind', 'Open API'],
    //     liveLink: 'https://rs-weather.netlify.app/',
    //     gitLink: 'https://github.com/rajib-sadhu/weather-app'
    // },
    // {
    //     id: 4,
    //     title: 'Food4You',
    //     subTitle: 'Front End',
    //     images: [
    //         'https://i.ibb.co/2k6wr6K/Screenshot-2023-08-19-180235.png',
    //         'https://i.ibb.co/ZBM18LR/Screenshot-2023-08-19-180345.png',
    //         'https://i.ibb.co/zQkdhMn/Screenshot-2023-08-19-180408.png',
    //         'https://i.ibb.co/fvRs5Xw/Screenshot-2023-08-19-180436.png',
    //         'https://i.ibb.co/c31MtZh/Screenshot-2023-08-19-180444.png',
    //         'https://i.ibb.co/zf9F2C1/Screenshot-2023-08-19-180254.png'
    //     ],
    //     disc: "Explore top chefs and delectable recipes. Exclusive access post-login to savor culinary delights and culinary maestros.",
    //     features: [
    //         'Enjoy a seamless experience across devices with a fully responsive design.',
    //         'Sign in via Google using Firebase for swift and secure access.',
    //         'Discover renowned chefs and their culinary expertise, inspiring your culinary journey.',
    //         'After login, access a treasure trove of scrumptious recipes to tantalize your taste buds.',
    //         'Explore enticing food creations through stunning visuals, elevating your gastronomic experience.'
    //     ],
    //     tech: ['react js', 'node js', 'express js', 'firebase', 'tailwind'],
    //     liveLink: 'https://rs-food4you.web.app/',
    //     gitLink: 'https://github.com/rajib-sadhu/food4you-client-side'
    // },
    // {
    //     id: 9,
    //     title: 'Yamaha motor site',
    //     subTitle: 'Front end page',
    //     images: [
    //         'https://i.ibb.co/VwWYyLL/Screenshot-2024-01-08-124453.png',
    //         'https://i.ibb.co/8spdWp0/Screenshot-2024-01-08-132235.png',
    //         'https://i.ibb.co/0CHK2YW/Screenshot-2024-01-08-132253.png'
    //     ],
    //     disc: "Engaging front-end design showcase. offering bikes and scooter, gallery section, toggle button and eye catching front end page.",
    //     features: [
    //         'This is the just a landing page',
    //         'Responsive Design',
    //         'Eye catching animations when user scroll this',
    //         'This UI make by React'
    //     ],
    //     tech: ['react', 'tailwind', 'css', 'javascript'],
    //     liveLink: 'https://rs-yamaha.netlify.app/',
    //     gitLink: 'https://github.com/rajib-sadhu'
    // },
    // {
    //     id: 5,
    //     title: 'Tic Tac Toe',
    //     subTitle: 'Game',
    //     images: [
    //         'https://i.ibb.co/VqcL5F2/Screenshot-2023-08-19-180648.png',
    //         'https://i.ibb.co/rQC0CbD/Screenshot-2023-08-19-180622.png',
    //         'https://i.ibb.co/SfLsRdP/Screenshot-2023-08-19-180636.png'
    //     ],
    //     disc: "Classic two-player game. Experience fun clashes, unveil winners as the game concludes, and the champion emerges.",
    //     features: [
    //         'This is two player game',
    //         'Instantly reveal the winner at game end, adding excitement to each match.',
    //         'Harness the power of pure JavaScript for seamless and responsive game interactions.'
    //     ],
    //     tech: ['Html', 'css', 'javascript'],
    //     liveLink: 'https://rajib-sadhu.github.io/tictactoe',
    //     gitLink: 'https://github.com/rajib-sadhu/tictactoe'
    // },
    // {
    //     id: 6,
    //     title: 'Furniture',
    //     subTitle: 'Front end page',
    //     images: [
    //         'https://i.ibb.co/HTPJNL5/Screenshot-2023-08-19-180921.png',
    //         'https://i.ibb.co/D85Wvwn/Screenshot-2023-08-19-180816.png',
    //         'https://i.ibb.co/YfTysrq/Screenshot-2023-08-19-180828.png',
    //         'https://i.ibb.co/pzKp2cH/Screenshot-2023-08-19-180848.png',
    //         'https://i.ibb.co/3h3hJ3h/Screenshot-2023-08-19-180900.png'
    //     ],
    //     disc: "Engaging front-end design showcase. Scroll to experience captivating animations and designs, offering a visual delight in furniture.",
    //     features: [
    //         'This is the just a landing page',
    //         'Responsive Design',
    //         'Eye catching animations when user scroll this',
    //         'This UI make by React'
    //     ],
    //     tech: ['react js', 'css', 'tailwind'],
    //     liveLink: 'https://rs-furniture-store.netlify.app',
    //     gitLink: 'https://github.com/rajib-sadhu'
    // },
    // {
    //     id: 7,
    //     title: 'Player Sign',
    //     subTitle: 'Front end page',
    //     images: [
    //         'https://i.ibb.co/qgsFFv9/Screenshot-2023-08-19-181048.png',
    //         'https://i.ibb.co/MDxKJdv/Screenshot-2023-08-19-181116.png'
    //     ],
    //     disc: "Intuitive front-end page. Easily sign up and manage players. Effortlessly add and remove players with user-friendly controls.",
    //     features: [
    //         'This site for sign football player and make fun',
    //         'Device responsive design there',
    //         'Harness the power of pure vanilla JavaScript.'
    //     ],
    //     tech: ['html', 'css', 'javascript', 'tailwind'],
    //     liveLink: 'https://rs-player-sign.netlify.app/',
    //     gitLink: 'https://github.com/rajib-sadhu/player-sign'
    // },
    {
        id: 3,
        title: 'IncogniChat',
        subTitle: 'Full Stack',
        images: [
            myPhoto1,
            myPhoto2,
            myPhoto3,
            myPhoto4,
            myPhoto5,
            myPhoto6,
            myPhoto7,
            myPhoto8
        ],
        disc: "IncogniChat allows users to create an account and receive a unique, shareable link. By sharing this link with friends, colleagues, or on social media, users can receive anonymous messages, feedback, and reviews. The sender's identity is never revealed, fostering a space for genuine, unfiltered communication. 🔗🕵️‍♂️",
        features: [
            'True Anonymity: Messages are completely anonymous—users will never know who sent them. 🤐',
            'Unique Shareable Link: Each user gets a personal link to share wherever they want, making it easy to invite feedback. 🌐',
            'Guest Access: No need to log in! Users can access IncogniChat as a guest for testing or full access, enjoying all the features without the hassle of registration. 👤🚪',
            'No Email Verification (For the first few days only): Enjoy our platform without the need for email verification. Simply jump in and start receiving feedback with ease. 📧❌',
            'User-Friendly Interface: A clean and intuitive design ensures a smooth user experience. 💻✨',
            'Secure and Private: We prioritize user privacy with robust security measures to keep all messages confidential. 🔒🔐'
        ],
        tech: ['react js', 'node js', 'express js', 'firebase', 'tailwind', 'postgresql'],
        liveLink: 'https://incognichat.netlify.app/',
        gitLink: 'https://github.com/incogniChat-App/incogniChat'
    },
];



export default data;