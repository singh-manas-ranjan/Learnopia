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
  },
  {
    courseId: "XH8E9A",
    courseName: "The Web Developer Bootcamp 2024",
    author: "Colt Steele",
    courseRating: "4.7",
    courseImg: "card2.jpeg",
    coursePrice: "₹3,099",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/OTXD8MrKLO8?si=LWT-TY68Jx5Gyj6i",
  },
  {
    courseId: "PL7C2W",
    courseName: "Web Development Masterclass - Online Certification Course",
    author: "YouAccel Training",
    courseRating: "4.4",
    courseImg: "card3.jpeg",
    isPaidCourse: false,
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "QR3B5S",
    courseName: "Practical Web Development: 22 Courses in 1",
    author: "Creative online School",
    courseRating: "4.3",
    courseImg: "card4.jpeg",
    isPaidCourse: false,
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "ZP4F7L",
    courseName: "The Complete Web Developer Course 3.0",
    author: "Rob Percival",
    courseRating: "4.5",
    courseImg: "card5.jpeg",
    coursePrice: "₹4,499",
    isPaidCourse: true,
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
  },
  {
    courseId: "MN6D9T",
    courseName: "Internet and Web Development Fundamentals",
    author: "YouAccel Training",
    courseRating: "4.3",
    courseImg: "card6.jpeg",
    isPaidCourse: false,
    courseLink: "https://www.youtube.com/embed/lkO8wbL1zxM?si=cH-6ChW8TeIVbEJ6",
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

export type Course = {
  courseId: string;
  courseName: string;
  author: string;
  courseRating: string;
  courseImg: string;
  coursePrice?: string;
  isPaidCourse: Boolean;
  courseLink: string;
};

export default coursesList;
