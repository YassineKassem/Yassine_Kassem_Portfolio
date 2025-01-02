import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Mohamed Yassine',
    lastName:  'KASSEM',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Data Scientist & Full stack web mobile developer',
    avatar:    '/images/avatar.jpg',
    location:  'Africa/Tunis',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French']  // optional: Leave the array empty if you don't want to display languages
}

// const newsletter = {
//     display: true,
//     title: <>Subscribe to {person.firstName}'s Newsletter</>,
//     description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
// }

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/YassineKassem',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/yassine-kassem/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:med.yassine.kassem@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Data Scientist & Full stack web mobile developer</>,
    subline: <>Data Scientist and full-stack web and mobile developer in my 3rd year of the Engineering Cycle in Data Science,
    dynamic, curious, and autonomous. I am currently enhancing my skills in Data Science and software development. I
    have experience in programming and seek opportunities to apply my skills in innovative projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Mohamed Yassine Kassem is a Tunis-based data scientist and full-stack developer passionate about creating impactful, data-driven solutions. With expertise in machine learning, deep learning, and data analytics. As a full-stack developer, he integrates his technical skills in front-end and back-end development to deliver seamless, user-centric applications. Mohamed thrives at the intersection of data science and software development, transforming complex problems into innovative, scalable solutions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Swiss Premium Negoce',
                timeframe: '06/2024 - 08/2024',
                role: 'data scientist',
                achievements: [
                    <>Developed a web application automating the extraction of fines, aiding agents in identifying violators.</>,
                    <>Implemented image processing techniques such as ResNet-50, Autoencoders, and Real-ESRGAN</>,
                    <>Utilized information extraction tools like Surya OCR and OCR Space to automate data retrieval processes.</>,
                    <>Applied LLMs such as Mistral_AI, LLAMA3 to identify offenders from extracted data.</>,
                    <>Integrated the system, using FastAPI for the back-end MongoDB and Next.js for the front-end.</>


                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/spn/ALLpenalties (1).png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/spn/detailsPenalty.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                company: 'Sotrafer',
                timeframe: '06/2023 - 08/2023',
                role: 'Full-Stack Web Developer',
                achievements: [
                    <>Developed a full stack recruitment web application.</>,
                    <>Implemented the back-end using MySQL and Symfony to manage candidate data and evaluation processes.</>,
                    <>Integrated candidate evaluation algorithms to identify and rank top talents effectively.</>
                ],
                images: [ 
                    {
                        src: '/images/projects/sotrafer/consulterConc.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/sotrafer/gu.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                company: 'Medianet',
                timeframe: '02/2022 - 06/2022',
                role: 'Full-Stack Mobile Developer',
                achievements: [
                    <>Developed a mobile application, designed to simplify the internship search process for students.</>,
                    <>Implemented features for CV creation and internship search, with automatic recommendations based on AI.</>,
                    <>Enabled companies to post internship offers and automated the candidate selection process.</>,
                    <>Utilized Flutter and Bootstrap for the front-end, and integrated the back-end using MongoDB, Node.js, and Flask.</>

                ],
                images: [ 
                    {
                        src: '/images/projects/medianet/R2 part2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/medianet/R1 part2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/medianet/R2 part1.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Private Higher School of Engineering and Technology ESPRIT',
                description: <>Studied software engineering with a focus on Data Science</>,
            },
            {
                name: 'Higher Institute of Information and Communication Technologies',
                description: <>Computer Science, specializing in Software Engineering and Information Systems</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages:',
                //description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/skills/prog/icons8-java-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/prog/icons8-python-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/prog/icons8-r-project-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/prog/icons8-c-programming-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/prog/icons8-dart-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/prog/icons8-javascript-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/prog/icons8-html5-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/prog/icons8-css3-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                ]
            },
            {
                title: 'Frameworks:',
                //description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/skills/frameworks/icons8-flask-100.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/frameworks/FastAPI (1).png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/frameworks/icons8-bootstrap-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/frameworks/icons8-flutter-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/frameworks/icons8-react-native-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/frameworks/nextjs-icon.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/frameworks/icons8-nodejs-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/frameworks/netFramework.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/frameworks/icons8-spring-boot-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                ]
            },
            {
                title: 'Data Science & AI:',
                //description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    
                    {
                        src: '/images/skills/DS/icons8-pytorch-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/DS/icons8-tensorflow-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/DS/Scikit_learn_logo_small.svg.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/DS/images.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/DS/keras.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/DS/icons8-hugging-face-96.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                    {
                        src: '/images/skills/DS/Apache_Spark_logo.svg.png',
                        alt: 'Project image',
                        width: 4,
                        height: 4
                    },
                ]
            }
        ]
    }
}

/*const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}*/

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/80180.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/6ab2f740-2d96-4323-a290-ebf27e0f401d.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/448676635_874788048017451_8768546484821465645_n.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/784877b5-db5f-4002-b513-6f9cd1d97a17.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/109f154e-5af8-4307-8978-62d30b4f1166.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/d5293b26-afa1-4cbf-aa73-08feb25ecbb9.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/1721121656803.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/IMG_9604.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/0194acc3-4d01-4fd1-8083-d19c99f03a79.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/146561084_3701670509878696_3860420190675881665_n.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/448676635_874788048017451_8768546484821465645_n.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/IMG_6305.JPG', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/IMG_6345.JPG', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/IMG_6142.JPG', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, home, about, work, gallery };