import { FaHome, FaUser, FaBriefcase, FaBlog, FaImages } from "react-icons/fa";
// Import images from assets/projects
import cover01 from "../assets/projects/cover-01.jpg";
import cover02 from "../assets/projects/cover-02.jpg";
import cover03 from "../assets/projects/cover-03.jpg";
import cover04 from "../assets/projects/cover-04.jpg";
import image1 from "../assets/projects/image-01.jpg";
import image2 from "../assets/projects/image-02.jpg";
import image3 from "../assets/projects/image-03.jpg";
export const navLinks = [
  {
    path: "/",
    label: "Home",
    icon: <FaHome />,
  },
  {
    path: "/about",
    label: "About",
    icon: <FaUser />,
  },
  {
    path: "/work",
    label: "Work",
    icon: <FaBriefcase />,
  },
  {
    path: "/blog",
    label: "Blog",
    icon: <FaBlog />,
  },
  {
    path: "/gallery",
    label: "Gallery",
    icon: <FaImages />,
  },
];
//avatars
import avatar1 from "../assets/avatar.jpg";
import avatar2 from "../assets/avatars/avatar-01.png";
//video
import video from "../assets/projects/video-01.mp4";
//import images from assets/gallery
import img1 from "../assets/gallery/img-01.jpg";
import img2 from "../assets/gallery/img-02.jpg";
import img3 from "../assets/gallery/img-03.jpg";
import img4 from "../assets/gallery/img-04.jpg";
import img5 from "../assets/gallery/img-05.jpg";
import img6 from "../assets/gallery/img-06.jpg";
import img7 from "../assets/gallery/img-07.jpg";
import img8 from "../assets/gallery/img-08.jpg";
import img9 from "../assets/gallery/img-09.jpg";
import img10 from "../assets/gallery/img-10.jpg";
import img11 from "../assets/gallery/img-11.jpg";
import img12 from "../assets/gallery/img-12.jpg";
import img13 from "../assets/gallery/img-13.jpg";
import img14 from "../assets/gallery/img-14.jpg";
//export images
export const projectImages = [cover01, cover02, cover03, cover04];
export const project2Images = [image1, image2, image3];

export const GalleryImages = [
  img1,
  img2,
  img3,
  img4,
  img8,
  img7,
  img6,
  img5,
  img9,
  img11,
  img10,
  img12,
  img13,
  img14,
];

export const HomePageContent = {
  //Hero Section
  hero: {
    heading: "Design engineer and builder",
    text: (
      <>
        I'm Selene, a design engineer at
        <span className="px-[4px] py-[1px] text-sm bg-[rgba(45,45,45,0.3)] rounded-[7px] border border-gray-700 mx-1">
          FLY
        </span>
        , where I craft intuitive user experiences. After hours, I build my own
        projects.
      </>
    ),
    btn: "About me",
  },
};
//Home page projects1 content
export const projects1Content = {
  images: [cover01, cover02, cover03, cover04],
  mainProject: {
    title: "Building an adaptive design system for Archlight",
    description:
      "In this project, I developed a flexible and scalable design system using Next.js for front-end development and Figma for design collaboration.",
    avatars: [avatar1, avatar2],
    caseStudyLink: "/work/adaptive-design-system-for-archlight",
  },
  relatedPosts: [
    {
      title: (
        <>
          Arriving to a new <br /> milestone in my career
        </>
      ),
      date: "April 8, 2024",
      link: "/blog/new-milestone-in-my-career",
    },
    {
      title: (
        <>
          The 99% that <br /> remains in the drawer
        </>
      ),
      date: "March 5, 2024",
      link: "/blog/the-99-percent-that-remains-in-the-drawer",
    },
  ],
};
//Home page projects2 content
export const projects2Content = {
  images: [image1, image2, image3],
  mainProject: {
    title: "Automating Design Handovers with a Figma to Code Pipeline",
    description:
      "In this project, I built an automated pipeline to streamline design handovers from Figma to code, improving efficiency and collaboration across teams.",
    avatars: [avatar1],
    caseStudyLink:
      "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
  },
};
//homepage videoContent
export const videoContent = {
  videoUrl: video,
  title: "Simple portfolio creator built with Once UI and Next.js",
};
//Newsletter
export const newsletterContent = {
  title: "Subscribe to Selene's Newsletter",
  description:
    "I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.",
  placeholder: "Enter your email",
  buttonText: "Sign Up",
};
// About content
export const aboutContent = {
  avatarSection: {
    avatarSrc: avatar1,
    location: "Asia/Jakarta",
    buttons: [
      { label: "English", language: "en" },
      { label: "Bahasa", language: "id" },
    ],
  },
  introduction: {
    scheduleCall: {
      label: "Schedule a call",
      link: "https://www.cal.com/",
    },
    name: "Selene Yu",
    title: "Design Engineer",
    socialLinks: [
      {
        href: "https://github.com/once-ui-system/nextjs-starter",
        label: "GitHub",
        icon: "FaGithub", // Icon to be rendered dynamically
      },
      {
        href: "https://www.linkedin.com/company/once-ui/posts/?feedView=all",
        label: "LinkedIn",
        icon: "FaLinkedin", // Icon to be rendered dynamically
      },
      {
        href: "mailto:example@gmail.com",
        label: "Email",
        icon: "FaEnvelope", // Icon to be rendered dynamically
      },
    ],
    description:
      "Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.",
  },
  experience: [
    {
      company: "FLY",
      duration: "2022 - Present",
      position: "Senior Design Engineer",
      responsibilities: [
        "Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.",
        "Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
      ],
      image: {
        src: image1,
        alt: "About image",
      },
    },
    {
      company: "Creativ3",
      duration: "2018 - 2022",
      position: "Lead Designer",
      responsibilities: [
        "Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.",
        "Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.",
      ],
    },
  ],
  studies: [
    {
      id: "university",
      title: "University of Jakarta",
      description: "Studied software engineering.",
    },
    {
      id: "future",
      title: "Build the Future",
      description: "Studied online marketing and personal branding.",
    },
  ],
  technicalSkills: [
    {
      id: "figma",
      title: "Figma",
      description:
        "Able to prototype in Figma with Once UI with unnatural speed.",
      images: [
        {
          src: image2,
          alt: "Technical skill image 1",
        },
        {
          src: image3,
          alt: "Technical skill image 2",
        },
      ],
    },
    {
      id: "next",
      title: "Next.js",
      description: "Building next-gen apps with Next.js + Once UI + Supabase.",
      images: [
        {
          src: image1,
          alt: "Technical skill image 3",
        },
      ],
    },
  ],
  sidebarLinks: [
    { id: "introduction", title: "Introduction", subLinks: [] },
    {
      id: "experience",
      title: "Work Experience",
      subLinks: [
        { id: "fly", title: "FLY" },
        { id: "creative3", title: "Creative3" },
      ],
    },
    {
      id: "studies",
      title: "Studies",
      subLinks: [
        { id: "univeristy", title: "University of Jakarta" },
        { id: "future", title: "Build the Future" },
      ],
    },
    {
      id: "skills",
      title: "Technical skills",
      subLinks: [
        { id: "figma", title: "Figma" },
        { id: "next", title: "Next.js" },
      ],
    },
  ],
};
// Footer
export const footerContent = {
  copyrightText: "© 2024 /Selene Yu/ Build your portfolio with Once UI",
  socialLinks: [
    {
      href: "https://github.com/once-ui-system/nextjs-starter",
      label: "GitHub",
      icon: "FaGithub",
    },
    {
      href: "https://www.linkedin.com/company/once-ui/posts/?feedView=all",
      label: "LinkedIn",
      icon: "FaLinkedin",
    },
    {
      href: "mailto:example@gmail.com",
      label: "Email",
      icon: "FaEnvelope",
    },
  ],
};
//Adaptive Design
export const adaptiveDesignContent = {
  header: {
    backLink: "/work",
    backText: "Projects",
    title: "Building an adaptive design system for Archlight",
  },
  image: image2,
  avatar: {
    avatar1: avatar1,
    avatar2: avatar2,
    date: "April 8, 2024",
  },
  sections: [
    {
      title: "Overview",
      content:
        "In this project, I developed a flexible and scalable design system using Next.js for front-end development and Figma for design collaboration. The goal was to create a reusable component library that not only adheres to consistent design principles but is also easily extendable for future needs. The design system was aimed at improving the overall developer experience while maintaining visual consistency across multiple projects.",
    },
    {
      title: "Key Features",
      list: [
        {
          title: "Component Library",
          description:
            "Built a set of modular, reusable UI components using React and styled-components in Next.js, focusing on accessibility and responsiveness.",
        },
        {
          title: "Theming and Customization",
          description:
            "Integrated a theming system that allows easy switching and customization of color palettes, typography, and layout styles using CSS variables and Figma tokens.",
        },
        {
          title: "Figma Integration",
          description:
            "Collaborated closely with designers by setting up a shared design library in Figma. This library was synchronized with the codebase, ensuring design handoffs were seamless and that design tokens remained consistent across both platforms.",
        },
        {
          title: "Documentation and Usage Guidelines",
          description:
            "Developed comprehensive documentation with Storybook to showcase components, usage patterns, and best practices, ensuring the design system is easy to adopt by other teams.",
        },
      ],
    },
    {
      title: "Technologies Used",
      list: [
        {
          title: "Next.js",
          description: "For fast, server-rendered React applications.",
        },
        {
          title: "Figma",
          description:
            "For creating and managing design assets and prototypes.",
        },
        {
          title: "Styled-Components",
          description:
            "For styling React components with a modular, themable approach.",
        },
        {
          title: "Storybook",
          description:
            "For building an interactive, documented component library.",
        },
      ],
    },
    {
      title: "Challenges and Learnings",
      content:
        "One key challenge was balancing the need for flexibility with the desire to maintain design consistency. The solution involved creating well-defined design tokens and establishing clear guidelines for when and how components could be customized. Additionally, setting up effective collaboration workflows between designers and developers using Figma and Git was a learning experience that greatly improved the process.",
    },
    {
      title: "Outcome",
      content:
        "The design system is now actively used across multiple projects, leading to faster development cycles, fewer design inconsistencies, and improved collaboration between design and development teams. It has become a foundation for scaling our products efficiently while ensuring a cohesive user experience.",
    },
  ],
};
//Blog content
export const blogContent = {
  title: "Writing about design and tech...",
  posts: [
    {
      title: "Arriving to a new milestone in my career",
      description:
        "A personal reflection on reaching a significant milestone in my career.",
      date: "April 8, 2024",
      link: "/blog/new-milestone-in-my-career",
      image: image2,
      buttonText: "Journal",
    },
    {
      title: "The 99% that remains in the drawer",
      description:
        "Exploring the unfinished ideas and projects that get left behind.",
      date: "March 5, 2024",
      link: "/blog/the-99-percent-that-remains-in-the-drawer",
      buttonText: "Journal",
    },
    {
      title: "The rise of design engineering",
      description:
        "How design and engineering are merging into a unified discipline.",
      date: "March 5, 2024",
      link: "/blog/the-rise-of-design-engineering",
      buttonText: "Technology",
    },
  ],
};
// Design Engineering content
export const designEngineeringContent = {
  title: "The Rise of Design Engineering",
  date: "April 8, 2024",
  avatar: avatar1,
  content: [
    {
      content:
        "The Rise of Design Engineering In recent years, the role of design engineering has evolved from a specialized niche to a critical component in the development of innovative products and solutions. The seamless integration of design principles with engineering expertise has become essential in shaping not only the functionality of products but also the user experience, sustainability, and overall impact. So, what’s driving this shift, and why is design engineering more relevant than ever before?",
    },
    {
      title: "Where Engineering Meets Creativity",
      id: "engineering-creativity",
      content:
        "Traditionally, engineering and design were viewed as separate disciplines. Engineers focused on solving technical problems, while designers were concerned with aesthetics and user experience. However, as products become more complex and user-centered, the need for a unified approach has grown. Design engineering bridges this gap by combining the precision of engineering with the creativity of design. It’s where form meets function, ensuring that products are not only technically sound but also intuitive, visually appealing, and user-friendly.",
    },
    {
      title: "The User-Centered Revolution",
      id: "user-centered-revolution",
      content:
        "One of the biggest factors in the rise of design engineering is the shift toward user-centered design. Whether it’s a smartphone, a medical device, or an automotive system, today’s products are expected to be intuitive, responsive, and aligned with user needs. Design engineers play a pivotal role in this transformation by focusing on the end-user from the very beginning of the development process. Instead of approaching design and engineering as separate stages, they merge them into a cohesive workflow that considers usability, ergonomics, and aesthetics alongside structural integrity and functionality.",
    },
    {
      title: "Sustainability and Innovation",
      id: "sustainability-innovation",
      content:
        "As the world becomes increasingly conscious of environmental impacts, design engineers are at the forefront of creating sustainable solutions. From selecting eco-friendly materials to designing for energy efficiency and minimizing waste, their work is crucial in driving sustainability initiatives across industries. The role of the design engineer extends beyond merely meeting technical requirements; it involves finding innovative ways to achieve sustainability without compromising on performance or aesthetics.",
    },
    {
      title: "The Digital Transformation",
      id: "digital-transformation",
      content:
        "The digital revolution has also played a significant role in the rise of design engineering. Advanced tools such as computer-aided design (CAD) software, simulation, and rapid prototyping have empowered design engineers to push boundaries and experiment with ideas that were previously impossible. Virtual testing and iterative development processes allow for quick adjustments and refinements, enabling more sophisticated and optimized designs. This integration of digital technology with traditional engineering practices has made design engineering a dynamic and rapidly evolving field.",
    },
    {
      title: "Collaboration and Interdisciplinary Work",
      id: "collaboration-interdisciplinary",
      content:
        "In the modern product development landscape, collaboration is key. Design engineering brings together experts from various fields—mechanical engineering, industrial design, electronics, materials science, and more—into a cohesive team. This interdisciplinary approach fosters innovation by allowing for a broader perspective on problems and solutions. Design engineers often act as the glue that holds these teams together, ensuring that everyone’s contributions align to create a product that is both technically sound and user-centric.",
    },
    {
      title: "Looking Ahead",
      id: "looking-ahead",
      content:
        "The rise of design engineering signals a fundamental shift in how we approach product development. It’s no longer enough to have a product that simply works; it must also resonate with users, be sustainable, and push the boundaries of innovation. As technology continues to advance and user expectations evolve, design engineers will be increasingly critical in shaping the future. Their unique blend of creative thinking and technical expertise will continue to drive the development of products that are not only functional but also meaningful.",
    },
  ],
};
//Drawer remains content
export const drawerRemainsContent = {
  title: "The 99% that Remains in the Drawer",
  date: "April 8, 2024",
  avatar: avatar1,
  content: [
    {
      content:
        "As design engineers, we're often defined by the 1% of our work that makes it into the final product. That shiny, polished piece of engineering is a result of countless iterations, tweaks, and redesigns. But what happens to the other 99%—those ideas, concepts, and prototypes that never see the light of day? They remain tucked away in the drawer, both literally and figuratively.",
    },
    {
      title: "The Beauty of Unused Ideas",
      id: "unused-ideas",
      content:
        "It’s easy to think of discarded designs as failures, but in truth, they’re stepping stones. Each one represents a path explored, tested, and ultimately left behind. Those early drafts may never become reality, but they play a crucial role in shaping the solution that does. They teach us what works and, more importantly, what doesn’t.",
    },
    {
      title: "The Process of Elimination",
      id: "process-elimination",
      content:
        "In every project, the first few ideas often come quickly. They’re intuitive, straightforward, and sometimes too simple. As we dive deeper, we explore more creative solutions, test the limits of materials and technology, and challenge the initial assumptions. This process of elimination is not about rejecting ideas but about refining them. The 99% left in the drawer is evidence of rigorous thinking and thorough exploration.",
    },
    {
      title: "Why the Drawer Matters",
      id: "why-drawer-matters",
      content:
        "For every concept that didn’t make it, there’s a lesson learned. A sketch that looked promising might fail in prototyping. A concept that seemed impractical might be revisited years later, finding new relevance with advancements in technology or a change in project scope. These shelved ideas serve as a knowledge base—a library of possibilities for future projects.",
    },
    {
      title: "Innovation Through Failure",
      id: "innovation-failure",
      content:
        "Many breakthrough innovations are born from revisiting old, seemingly failed concepts. What didn’t work in one context might be the key to solving a problem in another. As design engineers, we should never be afraid to open the drawer and revisit those shelved ideas. They are a testament to the iterative nature of design, where nothing is truly wasted.",
      imgSrc: image3,
    },
    {
      title: "Final Thoughts",
      id: "final-thoughts",
      content:
        "The final product is just the tip of the iceberg—the visible 1%. The other 99% may never see the spotlight, but they are just as important. They represent the trial and error, the persistence, and the creative drive that push us to find the best solution. So next time you’re stuck or looking for inspiration, don’t be afraid to dig into the drawer. The answer might be hiding there, waiting for the right moment to shine.",
    },
  ],
};
//Milestone content
export const milestoneContent = {
  title: "Arriving to a New Milestone in My Career",
  date: "April 8, 2024",
  avatar: avatar1, // path to avatar image
  content: [
    {
      content:
        "Every career is a journey, filled with challenges, growth, and those significant moments that mark a shift in our path. Today, I’m excited to share that I’ve arrived at a new milestone in my career—one that is both a culmination of past experiences and a stepping stone toward future aspirations.",
    },
    {
      title: "Reflecting on the Journey So Far",
      id: "journey-so-far",
      content:
        "Looking back, it’s clear that each phase of my career has built upon the last, guiding me to where I stand today. From my early days of learning the basics and struggling through complex projects, to gaining confidence through real-world experience, each step has shaped my skills and mindset. I’ve learned that design and engineering are as much about problem-solving and creativity as they are about resilience and continuous learning.",
    },
    {
      title: "What This Milestone Represents",
      id: "milestone-represent",
      content:
        "Reaching this milestone represents more than just professional progress—it’s a moment of personal growth. It’s a sign that the dedication and passion I’ve invested are paying off. Whether it’s mastering a new skill, taking on leadership responsibilities, or completing a major project, this achievement is a reminder that perseverance, curiosity, and a love for what I do are key drivers of success.",
    },
    {
      title: "The Challenges That Shaped Me",
      id: "challenges-shaped",
      content:
        "Of course, no journey is without its hurdles. There were moments of doubt, failed prototypes, and unforeseen obstacles that tested my resolve. However, those challenges taught me the importance of adaptability, creative thinking, and collaboration. They pushed me to improve, to think outside the box, and to view setbacks not as failures, but as opportunities to learn and grow.",
    },
    {
      title: "Embracing New Opportunities",
      id: "embracing-opportunities",
      content:
        "This milestone is also an opportunity to embrace new challenges and expand my horizons. Whether it’s exploring emerging technologies, diving deeper into specific fields of interest, or taking on a mentorship role, I’m excited about what lies ahead. The engineering and design landscape is constantly evolving, and staying curious and open to new ideas is what keeps this career path so rewarding.",
    },
    {
      title: "Gratitude and Acknowledgment",
      id: "gratitude-acknowledgment",
      content:
        "I’d be remiss if I didn’t take a moment to acknowledge the mentors, colleagues, and collaborators who have been part of this journey. Their insights, support, and shared enthusiasm have been invaluable. Reaching this milestone is as much a testament to their influence as it is to my individual efforts.",
    },
    {
      title: "Looking Ahead",
      id: "looking-ahead",
      content:
        "While I’m proud of how far I’ve come, I know this is just one milestone in a much larger journey. The road ahead is filled with exciting possibilities, and I’m eager to continue pushing boundaries, learning new things, and contributing to meaningful projects. If there’s one thing I’ve learned along the way, it’s that every new milestone is not an end, but rather a launchpad for the next chapter. Thank you for being part of this journey with me, and here’s to the adventures yet to come!",
    },
  ],
};
//work projects1 content
export const workProjects1Content = {
  images: [cover01, cover02, cover03, cover04],
  mainProject: {
    title: "Building Once UI, a Customizable Design System",
    description:
      "Development of a flexible and highly customizable design system using Next.js for front-end and Figma for design collaboration.",
    avatars: [avatar1, avatar2],
    caseStudyLink: "/work/adaptive-design-system-for-archlight",
  },
};
//workpage video content
export const workVideoContent = {
  videoUrl: video,
  title: "Simple portfolio creator built with Once UI and Next.js",
};
//work page projects2 content
export const workProjects2Content = {
  images: [image1, image2, image3],
  mainProject: {
    title: "Automating Design Handovers with a Figma to Code Pipeline",
    description:
      "Explore the enduring debate between using spaces and tabs for code indentation, and why this choice matters more than you might think.",
    avatars: [avatar1],
    caseStudyLink:
      "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
  },
};
