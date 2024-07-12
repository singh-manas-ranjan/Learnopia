import studentRankings, { TStudentRankings } from "./rankingData";

const coursesList = [
  {
    courseId: "FGK23R",
    courseName: "The Complete 2024 Web Development BootCamp.",
    author: "Dr.Angel Yu",
    courseRating: "4.5",
    courseImg: "card1.jpeg",
    coursePrice: "₹3,099",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/5SXK__rm6DM?si=1K3T2xMPfYJ4Q_lm",
    courseIndex: [
      {
        sectionName: "Introduction to HTML",
        chapterNames: [
          "Installing & Working",
          "First HTML Website",
          "HTML Basic Structure",
          "Heading, Paragraphs, Links",
          "Image, Lists & Tables",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/tVzUXW6siu0?si=qOm3PdCo7O2vUWXg",
          "https://www.youtube.com/embed/kJEsTjH5mVg?si=yxVR6AlhzNLv54k4",
          "https://www.youtube.com/embed/BGeDBfCIqas?si=CIDTMRqpjLj_4JC2",
          "https://www.youtube.com/embed/nXba2-mgn1k?si=WErOBL6aZXd5UiRq",
          "https://www.youtube.com/embed/1BsVhumGlNc?si=twu8FB1P2B04BUHf",
        ],
      },
      {
        sectionName: "Introduction to CSS",
        chapterNames: [
          "What is CSS",
          "Inline, Internal & External CSS",
          "CSS Selectors",
          "CSS Box Model",
          "CSS Fonts, Text & Color",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/1dkfuga2_Ps?si=as0ZsMC6_geSVg-V",
          "https://www.youtube.com/embed/-XwZpYIyCEA?si=jIHJTdVPDvfjA80z",
          "https://www.youtube.com/embed/1cEG1T8beO4?si=w-kI6RM1x8jZxmPE",
          "https://www.youtube.com/embed/Xrxd6cEajhM?si=EK0w3-ZA0Abz2Trg",
          "https://www.youtube.com/embed/aFicd4-YTfo?si=yHMELI0BBysRz7Af",
        ],
      },
      {
        sectionName: "Introduction to JavaScript",
        chapterNames: [
          "What is JavaScript",
          "Variables, DataTypes & Objects",
          "Conditionals",
          "Loops",
          "Functions",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/NrhP53Divco?si=Is1pw4ZettKiG4sZ",
          "https://www.youtube.com/embed/HGCDMJXS1cc?si=dTzLwsO7RMjblC9i",
          "https://www.youtube.com/embed/1R4NGtsj7hw?si=F_xON_bcQ7ARLeid",
          "https://www.youtube.com/embed/y32sWmu-RI4?si=SK7_LsHV1ej7arQD",
          "https://www.youtube.com/embed/Jtc3j4ZNZEQ?si=6nSoFCdh7gviqsC6",
        ],
      },
    ],
    comments: [
      {
        student: studentRankings[0],
        body: "Very well structured course from basics to more complex programming. Simplified and easy to understand lectures about topics. Also at the end of each module there are challenges that puts newly acquired knowledge to the practice and helps to learn much much quicker. Strongly recommend this course!",
      },
      {
        student: studentRankings[1],
        body: "I really enjoyed this course. It was very well structured and the instructor was very",
      },
      {
        student: studentRankings[2],
        body: "As Angela said in the start that this is the best course for Web development, eventually after learning now I can definitely say that yes this is the best course so far.",
      },
      {
        student: studentRankings[3],
        body: "Dr Angela is the best teacher for web development! My confidence has sky rocketed- she imparts the spirit of the class and a mindset that sets one on taking new challenges and conquering them!",
      },
      {
        student: studentRankings[4],
        body: "This course is for beginners only. This course provide solid foundation of WebDevelopment by great explanations. But many important topics are missing.",
      },
    ],
  },
  {
    courseId: "XH8E9A",
    courseName: "Spring Boot Complete Tutorial",
    author: "Durgesh Tiwari",
    courseRating: "4.7",
    courseImg: "card2.jpeg",
    coursePrice: "₹3,099",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/729Pd-ZQ4uA?si=2shFbk4vajERRRgY",
    courseIndex: [
      {
        sectionName: "Overview",
        chapterNames: [
          "How Spring Boot Auto Config. works",
          "How to Start Spring Boot Project",
          "Spring Initializer",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/rVOmSrCSdGE?si=myXuuH_GLlW-HtvU",
          "https://www.youtube.com/embed/GT3Doklq0RY?si=RYcTdQFfZVhFbhxH",
          "https://www.youtube.com/embed/xKuerkzUIF4?si=bpevr06YQWMD2Spz",
        ],
      },
      {
        sectionName: "Download & Installations",
        chapterNames: [
          "Installing STS",
          "Spring Boot is VS Code",
          "Spring Boot in Eclipse",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/6ve91bQgBp4?si=QCxrBMAJ9Cb-CIIf",
          "https://www.youtube.com/embed/UR5fe2H-jIY?si=BiXUUdy0qynyDdSh",
          "https://www.youtube.com/embed/nUzVr6VkO98?si=-ydrsQwIKkyFIjO9",
        ],
      },
      {
        sectionName: "Starting with Spring Boot",
        chapterNames: [
          "JSP View in Spring Boot",
          "Use of application.properties",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/o4qT-OfOYBM?si=7KItGR5HnuK8FSNu",
          "https://www.youtube.com/embed/rGmIJ_o90oQ?si=NWQAtat7y_EuO6v8",
        ],
      },
      {
        sectionName: "Spring Boot JPA",
        chapterNames: [
          "JPA with Spring Boot",
          "JPA Spring Boot Practical",
          "BD Configuration",
          "CRUD Operation using JPA",
          "Custom Find methods",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/agTUJ4aVJSQ?si=QhHlDi9bvF5Sm32o",
          "https://www.youtube.com/embed/1uVACJuZ7CA?si=KDEEG1-dCnqcRvCt",
          "https://www.youtube.com/embed/SkftTBxUUG0?si=fUTlXsWV7vYFvPYq",
          "https://www.youtube.com/embed/uQWYAA7hpVU?si=DqXKd_5_sGiGlwSs",
          "https://www.youtube.com/embed/QeRCW28jhFY?si=fHEEWrjYwJOeYnG7",
        ],
      },
      {
        sectionName: "Introduction to Thymeleaf",
        chapterNames: [
          "Introduction to Thymeleaf",
          "Starting with Thymeleaf",
          "Iteration in Thymeleaf",
          "Conditional Statements",
          "Include, Insert, Replace",
          "Passing Dynamic Value",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/rqQ602S3cdc?si=48tm0do-GwKdKeL6",
          "https://www.youtube.com/embed/CjGZNyR-ME0?si=gu9DaJV5xHHgavzx",
          "https://www.youtube.com/embed/zZrTUsgchpY?si=yU2k_Rf8ZWBhRZha",
          "https://www.youtube.com/embed/pjvCiSFpuas?si=ffhqYX00oPoS0_cu",
          "https://www.youtube.com/embed/H4vWZhPlR70?si=lpLZtU7AE5_j5MmK",
          "https://www.youtube.com/embed/BgzLz3nI3yI?si=o410_67sCJPe6jqu",
        ],
      },
    ],
  },
  {
    courseId: "PL7C2W",
    courseName: "Selenium WebDriver with Java",
    author: "Pavan Kumar",
    courseRating: "4.6",
    courseImg: "card3.jpeg",
    coursePrice: "₹599",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/PLLbGltmkpE?si=BsQ5MaBS0Ls-CI_J",
    courseIndex: [
      {
        sectionName: "Overview",
        chapterNames: ["Selenium with Java Intro."],
        videoLinks: [
          "https://www.youtube.com/embed/8a8wjKKZhSI?si=o897zL3M03MxmtiA",
        ],
      },
      {
        sectionName: "Introduction to Java",
        chapterNames: [
          "Installing JDK & Eclipse",
          "Variables & Data Types",
          "Operators & Expressions",
          "Conditional Statements",
          "Loops & Jump Statements",
          "Working with Arrays",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/R5UFQK0cMSs?si=dnITkd5-CSOIALs1",
          "https://www.youtube.com/embed/OCwXj8jEFYw?si=di1IO7rfd9A5B-mS",
          "https://www.youtube.com/embed/kmb8JE3GUdA?si=YaTZtUjWhAodkbEe",
          "https://www.youtube.com/embed/-Xi7bzi6IcU?si=1ihhoiejHbg_p54V",
          "https://www.youtube.com/embed/3ehenPER6To?si=YqnQ_nhXLbaGBYse",
          "https://www.youtube.com/embed/xX6kS8wDoeQ?si=eHKS4UVBv_m6DdcP",
        ],
      },
      {
        sectionName: "Introduction to Selenium",
        chapterNames: [
          "Introduction & Environment Setup",
          "Locators (ID, Name, Class & Tag)",
          "Locators - CSS Selector",
          "Locators - XPath",
          "Locators - XPath Axes",
          "WebDriver Method",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/cGw2ghKh_eU?si=e4MyO1B227sDVAY8",
          "https://www.youtube.com/embed/VuO7gUmYllY?si=YwH0cFyCFxRXnrs-",
          "https://www.youtube.com/embed/p4-mzToeVbs?si=1V-yQCQgK-oICrvn",
          "https://www.youtube.com/embed/kbmYMeoTg2Q?si=JQBUUHxfTUyfXIFy",
          "https://www.youtube.com/embed/PFGOs0Kbrts?si=cdUOSTppJv_YOCV5",
          "https://www.youtube.com/embed/zNF45se9B4M?si=a4gC5qzTF9c3oQRI",
        ],
      },
    ],
  },
  {
    courseId: "QR3B5S",
    courseName: "Python Django",
    author: "Code With Harry",
    courseRating: "4.3",
    courseImg: "card4.jpeg",
    isPaidCourse: false,
    courseLink: "https://www.youtube.com/embed/5BDgKJFZMl8?si=B4vChYaJKQX8GwzO",
    courseIndex: [
      {
        sectionName: "Installation & Getting Started",
        chapterNames: [
          "Django Installation",
          "Creating Django Project",
          "How Django Website Works",
          "First Django Website",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/HdoPg2e_m9s?si=dyhqUfF_g0y-wJI1",
          "https://www.youtube.com/embed/weAUmhABjBc?si=VaSGrmPPpcevG2M1",
          "https://www.youtube.com/embed/wU_8jeZRenE?si=kN1-2EVbkO8LCN1a",
          "https://www.youtube.com/embed/FwKJyRQBOQk?si=JVW20onqT0QMjhE7",
        ],
      },
      {
        sectionName: "Exercise 1",
        chapterNames: ["Personal Navigator"],
        videoLinks: [
          "https://www.youtube.com/embed/AepgWsROO4k?si=HNpc-O0UJwlFfM90",
        ],
      },
      {
        sectionName: "Project Setup",
        chapterNames: ["Laying the Pipeline"],
        videoLinks: [
          "https://www.youtube.com/embed/ES-bdt0KUZg?si=lmOaOYMQudmx7BzL",
        ],
      },
      {
        sectionName: "Django Front-End",
        chapterNames: [
          "Django Templates",
          "Creating Homepage for TextUtils Website",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/0dBZZOYIDW0?si=k5O_LJqGbRXYppPi",
          "https://www.youtube.com/embed/dZsv7xt5pT0?si=uFkE7X-pRqThOQyq",
        ],
      },
      {
        sectionName: "Django Back-End",
        chapterNames: ["Coding the Backend"],
        videoLinks: [
          "https://www.youtube.com/embed/lkhJ7OCOCIc?si=GnOoVPh_955f5swx",
        ],
      },
      {
        sectionName: "Solution Exercise - 1",
        chapterNames: ["Solutions + ShoutOuts"],
        videoLinks: [
          "https://www.youtube.com/embed/lcpqpxVowU0?si=YoGLhL0FLYNHJ3me",
        ],
      },
    ],
  },
  {
    courseId: "ZP4F7L",
    courseName: "MySQL Bootcamp",
    author: "Colt Steel",
    courseRating: "4.5",
    courseImg: "card5.jpeg",
    coursePrice: "₹4,499",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/iiRN93Ifv3A?si=z78o1A0FdqXDregv",
    courseIndex: [
      {
        sectionName: "Introduction & Overview",
        chapterNames: [
          "Instructor Introduction",
          "MySQL Syllabus",
          "First 5 min of SQL",
          "How The Course Works",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/2ElAlDZ_6nw?si=N8pP-yAy9fDmN9X2",
          "https://www.youtube.com/embed/nzEiyPcPiyU?si=gUGX9r1CR7I7lB7x",
          "https://www.youtube.com/embed/Jjc7V2p8dew?si=NtN7HRdkqtUseUj-",
          "https://www.youtube.com/embed/b84nSWEvu8U?si=ZMFNYqn0Iaio3eN_",
        ],
      },
      {
        sectionName: "Getting Started & Installation",
        chapterNames: [
          "Section Introduction",
          "What is A Database?",
          "SQL vs MySQL",
          "Installation: Overview",
          "Installation: Windows",
          "Installation: Mac",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/TQdJ1sfEncA?si=VgbrQ-fyGjBPaOw8",
          "https://www.youtube.com/embed/wNvxd_IjvZU?si=3xYHZ-G2tIc0spoc",
          "https://www.youtube.com/embed/0ucxHwnItFw?si=Uy5VZLndqDBW84wY",
          "https://www.youtube.com/embed/4VpPugw_0KA?si=v8yJb7KhXh4NGs3Z",
          "https://www.youtube.com/embed/YkBaiY20Yro?si=mJ3glRIQ1Tu75ING",
          "https://www.youtube.com/embed/k8RlympiUD0?si=iwY-YKJci5bcvnMu",
        ],
      },
      {
        sectionName: "Creating Database & Tables",
        chapterNames: [
          "Section Introduction",
          "Creating Databases",
          "Dropping Databases",
          "Using Databases",
          "Introducing Tables",
          "Data Types: The Basics",
          "Basic Datatypes Challenge",
          "Creating Tables",
          "How Do We Know It Worked?",
          "Dropping Tables",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/y1fBpTaOC5o?si=Hqep8J6ieFmcCjrj",
          "https://www.youtube.com/embed/EUinw2a8mks?si=eY50FYyd83QrIR9G",
          "https://www.youtube.com/embed/iz0N1K1cfrY?si=fqHEsIhBd56NBUEp",
          "https://www.youtube.com/embed/4dZyMCtNm2c?si=z4Z39NuvxYVD70cH",
          "https://www.youtube.com/embed/fyka_yniSpA?si=hNZYUHh1K8-9DCCV",
          "https://www.youtube.com/embed/ypf8R45T-vc?si=yfEeEbZyFO0e558u",
          "https://www.youtube.com/embed/sC5HIGvPDMA?si=-MsiqFjAc_pJrejN",
          "https://www.youtube.com/embed/AMr2MKnzUjg?si=1gwDw8QadfzZ4XA2",
          "https://www.youtube.com/embed/ACd6ULYty4g?si=CrvNOUCumBqKQD0P",
          "https://www.youtube.com/embed/W3YdgF2lRaE?si=tEAjwJPYWYon0vmT",
        ],
      },
      {
        sectionName: "Inserting Data",
        chapterNames: [
          "Section Introduction",
          "Inserting Data-MySQL",
          "Intro to SELECT Clause in SQL",
          "Multiple INSERT SQL TABLES",
          "INSERT Challenges",
          "Solution - INSERT Challenges",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/TENMifUNK5A?si=10P-TQStyZz-baX9",
          "https://www.youtube.com/embed/H8GAuyev_sA?si=nvVfptN3zh-uy7Oj",
          "https://www.youtube.com/embed/K-Vi_KIaGvc?si=FwlmVWvqFZCV7FG5",
          "https://www.youtube.com/embed/g0gK0YB-JyY?si=OPb8I63ETq8T2OKN",
          "https://www.youtube.com/embed/x0imzvjYrvg?si=gUzlRHUD5CJP7GQx",
          "https://www.youtube.com/embed/fSikTG9llRQ?si=NUgyogeWsPvnwyGM",
        ],
      },
      {
        sectionName: "CRUD Basics",
        chapterNames: [
          "Section Introduction",
          "Introduction to CRUD SQL",
          "Preparing Data IN SQL",
          "Introduction to SELECT Clause",
          "Introduction to WHERE Clause",
          "Challenge - SELECT Clause",
          "Solution - SELECT Clause",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/fLUaj0yegMI?si=dVTU2HXErm3HpB5B",
          "https://www.youtube.com/embed/v9mtoWTfXX4?si=Sgm7eAVkw1kebVnP",
          "https://www.youtube.com/embed/JF9uBgPxO9g?si=Kng7NloX1pTJuCA3",
          "https://www.youtube.com/embed/PK1-yrkFlPg?si=BWOIU-Z25RhgwKkz",
          "https://www.youtube.com/embed/5678GZA_U1k?si=0gnyBX7nXaVNx2XW",
          "https://www.youtube.com/embed/fcwuR6V9chM?si=PodRIsTKboXkpSes",
          "https://www.youtube.com/embed/B9n1-5ZlDXI?si=g0v8MzRoDsQU4Nfg",
        ],
      },
    ],
  },
  {
    courseId: "MN6D9T",
    courseName: "Appium Mobile Automation",
    author: "Ompraksh Chavan",
    courseRating: "4.7",
    courseImg: "card6.jpeg",
    isPaidCourse: true,
    coursePrice: "₹4,499",
    courseLink: "https://www.youtube.com/embed/-Q_JFys87EA?si=xTcy2cvsluRIokhu",
    courseIndex: [
      {
        sectionName: "Introduction",
        chapterNames: ["Appium Introduction"],
        videoLinks: [
          "https://www.youtube.com/embed/GeFBUMVCens?si=x2UzQPUyfZA-D_cA",
        ],
      },
      {
        sectionName: "Appium Setup",
        chapterNames: ["Setup On Windows", "Setup On Mac"],
        videoLinks: [
          "https://www.youtube.com/embed/dLNEmXh46ig?si=H2yjFd4VoPHAob9M",
          "https://www.youtube.com/embed/kvNnF4Zpgmo?si=KJKGAvk6C07MPIii",
        ],
      },
      {
        sectionName: "Appium Project With Java",
        chapterNames: [
          "Java Project - Android",
          "Java Project - iOS",
          "Use Appium Inspector",
          "First Test Case Using Java",
        ],
        videoLinks: [
          "https://www.youtube.com/embed/kgyH5Y8bvTo?si=Zp07WvMc80uujCzr",
          "https://www.youtube.com/embed/Iq6Dt0rz7Uw?si=kVB-8x-eNq8vOGU-",
          "https://www.youtube.com/embed/QjVU1q-M5YY?si=N5gbIdpZJ256F4q9",
          "https://www.youtube.com/embed/dC7GjVCGwFk?si=NWhekkVXY-l4-6Jp",
        ],
      },
      {
        sectionName: "Page Object Model (POM)",
        chapterNames: ["POM Design with Appium"],
        videoLinks: [
          "https://www.youtube.com/embed/FgQ26UjOHEY?si=wCyQEyQQNx3lUy_c",
        ],
      },
    ],
  },
  {
    courseId: "YV5X1N",
    courseName: "How the Internet Works & the Web Development Process",
    author: "YouAccel Training",
    courseRating: "4.2",
    courseImg: "card7.jpeg",
    coursePrice: "₹1,299",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "HW2K8J",
    courseName: "The Complete 2023 PHP Full Stack Web Developer Bootcamp",
    author: "Srini Vanamala",
    courseRating: "4.5",
    courseImg: "card8.jpeg",
    coursePrice: "₹5,900",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "RU9G3M",
    courseName: "Ultimate Web Designer & Web Developer Course",
    author: "Brad Hussey",
    courseRating: "4.6",
    courseImg: "card13.jpeg",
    coursePrice: "₹3,699",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "EA6P4Q",
    courseName: "The Complete Web Development Course - Build 15 Projects",
    author: "Development Island (UK)",
    courseRating: "4.4",
    courseImg: "card16.jpeg",
    coursePrice: "₹3,699",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
];

export type TCourseContents = {
  sectionName: string;
  chapterNames: string[];
  videoLinks: string[];
};

export type TComments = {
  student: TStudentRankings;
  body: string;
};

export type Course = {
  courseId: string;
  courseName: string;
  author: string;
  courseRating: string;
  courseImg: string;
  coursePrice?: string;
  isPaidCourse: Boolean;
  courseLink: string;
  courseIndex?: TCourseContents[];
  comments?: TComments[];
};

export default coursesList;
