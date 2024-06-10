const coursesList = [
  {
    courseName: "The Complete 2024 Web Development BootCamp.",
    author: "Dr.Angel Yu",
    courseRating: "4.5",
    courseImg: "card1.jpeg",
    coursePrice: "₹3,099",
    isPaidCourse: true,
  },
  {
    courseName: "The Web Developer Bootcamp 2024",
    author: "Colt Steele",
    courseRating: "4.7",
    courseImg: "card2.jpeg",
    coursePrice: "₹3,099",
    isPaidCourse: true,
  },
  {
    courseName: "Web Development Masterclass - Online Certification Course",
    author: "YouAccel Training",
    courseRating: "4.4",
    courseImg: "card3.jpeg",
    isPaidCourse: false,
  },
  {
    courseName: "Practical Web Development: 22 Courses in 1",
    author: "Creative online School",
    courseRating: "4.3",
    courseImg: "card4.jpeg",
    isPaidCourse: false,
  },
  {
    courseName: "The Complete Web Developer Course 3.0",
    author: "Rob Percival",
    courseRating: "4.5",
    courseImg: "card5.jpeg",
    coursePrice: "₹4,499",
    isPaidCourse: true,
  },
  {
    courseName: "Internet and Web Development Fundamentals",
    author: "YouAccel Training",
    courseRating: "4.3",
    courseImg: "card6.jpeg",
    isPaidCourse: false,
  },
  {
    courseName: "How the Internet Works & the Web Development Process",
    author: "YouAccel Training",
    courseRating: "4.2",
    courseImg: "card7.jpeg",
    coursePrice: "₹1,299",
    isPaidCourse: true,
  },
  {
    courseName: "The Complete 2023 PHP Full Stack Web Developer Bootcamp",
    author: "Srini Vanamala",
    courseRating: "4.5",
    courseImg: "card8.jpeg",
    coursePrice: "₹5,900",
    isPaidCourse: true,
  },
  {
    courseName: "Ultimate Web Designer & Web Developer Course",
    author: "Brad Hussey",
    courseRating: "4.6",
    courseImg: "card13.jpeg",
    coursePrice: "₹3,699",
    isPaidCourse: true,
  },
  {
    courseName: "The Complete Web Development Course - Build 15 Projects",
    author: "Development Island (UK)",
    courseRating: "4.4",
    courseImg: "card16.jpeg",
    coursePrice: "₹3,699",
    isPaidCourse: true,
  },
];

export type Course = {
  courseName: string;
  author: string;
  courseRating: string;
  courseImg: string;
  coursePrice?: string;
  isPaidCourse: Boolean;
};

export default coursesList;
