// import images
import Main_Page_person from "./assets/images/Main_Page/shini.png";

import python from "./assets/images/Skills/python.png";
import unity from "./assets/images/Skills/Unity.png";
import blender from "./assets/images/Skills/Blender.png";
import reactjs from "./assets/images/Skills/react.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.jpeg";
import project3 from "./assets/images/projects/img3.jpeg";
import person_project from "./assets/images/projects/sunflower.png";

import About_person from "./assets/images/About/cat.png";

import blogImg1 from "./assets/images/Blog/Image1.JPG";
import blogImg2 from "./assets/images/Blog/Image2.jpeg";
import blogImg3 from "./assets/images/Blog/Image3.JPG";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiCameraLine, RiVideoLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar, MdCall } from "react-icons/md";

export const content = {
  nav: [
  { link: "#home", icon: TbSmartHome },
  { link: "#skills", icon: BiUser },
  { link: "#projects", icon: RiProjectorLine },
  { link: "#blog", icon: RiCameraLine }, // new Blog section
  { link: "#about-me", icon: RiServiceLine },
  { link: "#contact", icon: MdOutlinePermContactCalendar },
],


  Main_Page: {
    title: "Interaction & Experience Designer",
    firstName: "Dharshini",
    LastName: "Ramesh Babu",
    btnText: "About Me",
    subtitle: "Designing intuitive and engaging digital experiences",
    image: Main_Page_person,
    Main_Page_content: [
      { count: "M.Sc", text: "Interaction & Experience Design" },
      { count: "4+", text: "Projects in Unity, Python & React.js" },
      { count: "4", text: "Years of Academic & Personal Experience" },
    ],
  },

  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Python",
        para: "Proficient in Data Analysis, Automation, and Machine Learning Applications. Experienced with libraries like Pandas, NumPy, Matplotlib, and scikit-learn. Able to build predictive models, automate tasks, and handle large datasets efficiently.",
        logo: python,
      },
      {
        name: "Unity",
        para: "Experienced in game development, interactive simulations, and 3D Applications. Skilled in creating immersive experiences, using physics engines, animations, scripting in C#, and optimizing performance for PC and mobile platforms.",
        logo: unity,
      },
      {
        name: "Blender",
        para: "Skilled in 3D Modelling, texturing, Animation, and rendering. Capable of creating detailed 3D assets, character rigging, lighting, and realistic scene composition for games, VR, or animations.",
        logo: blender,
      },
      {
        name: "React js",
        para: "Frontend development with reusable components, hooks, and state management. Experienced in building responsive, interactive web applications, integrating APIs, and using tools like Redux and Tailwind CSS for optimized UI/UX.",
        logo: reactjs,
      },
    ],
  },

  blog: {
    title: "Blog",
    subtitle: "Capturing Moments & Creativity",
    posts: [
      {
        id: "professional",
        title: "Professional Shot",
        image: blogImg1,
        technical_specifications: {
          shot_on: "iPhone 15 Pro Max",
          aperture: "f/1.78",
          shutter_speed: "1/50",
          ISO: "64",
        },
        edits: [
          "Brilliance: 24",
          "Highlights: -7",
          "Contrast: -5",
          "Brightness: -3",
          "Black Point: 12",
          "Saturation: -5",
          "Vibrance: -8",
          "Warmth: 17",
          "Tint: -3",
          "Sharpness: 14",
        ],
        description: [
          "Reduced the orange tone to correct the yellowish tint from the lights and make the skin tone look natural.",
          "Increased the black point to highlight the dress and hair, making them stand out.",
          "Used the healing tool to remove visible dust on the dress for a cleaner look."
        ],
        reason: "I took this business headshot with a white background and a black dress to keep the focus on me and my skin tone. I used three-point lighting in front to evenly light my face and reduce shadows. I chose this setup to make the photo look professional and suitable for resumes and portfolios."
      },
      {
        id: "aesthetic",
        title: "Aesthetic Shot",
        image: blogImg2,

        technical_specifications: {
          shot_on: "iPhone 15 Pro Max",
          aperture: "f/2.8",
          shutter_speed: "1/99",
          ISO: "100",
        },

        edits: [
          "Exposure: 32",
          "Brilliance: 36",
          "Highlights: -11",
          "Shadows: +1",
          "Contrast: 13",
          "Vibrance: -7",
          "Warmth: -5",
          "Tint: -6"
        ],

        description: [
          "Increased the black point around the swan’s face to make it look more somber and lonely.",
          "Slightly increased the brightness at the top to highlight the surrounding atmosphere.",
          "Added a slightly greyish tone to emphasize the feeling of sadness and solitude.",
          "Kept the Dramatic tone in iPhone settings to enhance the overall mood of the image."
        ],

        reason:
          "I took this photo because that swan was alone. Swans choose partners for life, and if their partner dies, they never choose another and often stay alone for the rest of their life. This swan was looking down and slowly moving away across the river, slightly turned so it wasn’t facing the light, as if the light had gone from its life. Raindrops created ripples around it, and the image has a slightly greyish tone, making the scene feel even more somber. Its slow, solitary movement, muted colors, and rainy surroundings capture the quiet sadness and loneliness of a swan that has lost its partner."
      },

      {
        id: "passion",
        title: "Passion Shot",
        image: blogImg3,

        technical_specifications: {
          shot_on: "iPhone 15 Pro Max",
          aperture: "f/1.78",
          shutter_speed: "1/50",
          ISO: "160",
        },

        edits: [
          "Exposure: +0.7",
          "Temperature: +10",
          "Grain: +25",
          "Style Strength: +80",
          "Saturation: +10",
          "Dodge: +10"
        ],

        description: [
          "Added +25 grain to give the photo texture and depth.",
          "Applied a green tone to set the color mood of the image.",
          "Chose an angle focusing on the guitars at the top and vinyl records below to highlight both aspects of music creation and experience."
        ],

        reason:
          "I took this photo because the store has both instruments to create music and vinyl records to experience it. The guitars are surrounded by lights, as if they bring light and inspiration into life, while the vinyl records include music from different countries, showing that no matter what language someone speaks or where they come from, music can still be felt and understood. It reflects my passion for music—not just in creating it, but in enjoying it. The instruments, records, and the store’s atmosphere make me feel connected to the joy, creativity, and endless possibilities that music brings into my life."
      },
    ],
  },

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "ART Immerse: Accessible 360° VR Immersive Experience",
        image: project1,
        description:
          "A 360-degree VR platform for art appreciation, allowing users to explore artwork in fully immersive virtual galleries. Enhances interactivity and presence, providing a richer understanding of art and context.",
      },
      {
        title: "Interactive Anatomy Exploration in Mixed Reality",
        image: project2,
        description:
          "Transforming 2D CT and MRI scans into interactive 3D models using Hololens and advanced segmentation algorithms. Enables real-time examination and modification of anatomical elements for research, surgical preparation, and medical education.",
      },
      {
        title: "Machine Learning Prognostics for Genetic Disorder Predictions",
        image: project3,
        description:
          "ML algorithms analyze genetic, environmental, and demographic data to predict the likelihood of genetic disorders. Supports personalized treatment strategies, early interventions, and preventive healthcare.",
      },
    ],
  },

  About: {
    title: "About Me",
    subtitle: "A FEW HIGHLIGHTS",
    image1: About_person,
    image2: About_person,
    para: "My Resume", // short preview
    btnText: "Click",
  },

  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "shinirameshh@gmail.com",
        icon: GrMail,
        link: "mailto:shinirameshh@gmail.com",
      },
      {
        text: "+353 89 496 1182",
        icon: MdCall,
        link: "https://wa.me/+353894961182",
      },
      {
        text: "shhinnii",
        icon: BsInstagram,
        link: "https://www.instagram.com/shhinnii/",
      },
    ],
  },
};
