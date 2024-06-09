const sidebarLinks = {
  Home_Page: [
    { name: "Dashboard", icon: "dashboard", link: "/dashboard" },
    { name: "Training", icon: "training", link: "/dashboard/training" },
    { name: "Exams", icon: "exams", link: "/dashboard/exams" },
    { name: "Lessons", icon: "lessons", link: "/dashboard/lessons" },
    { name: "Subscriptions", icon: "card", link: "/dashboard/subscriptions" },
    { name: "My progress", icon: "progress", link: "/dashboard/my-progress" },
  ],
  Settings: [
    { name: "Profile", icon: "profile", link: "/dashboard/profile" },
    { name: "Settings", icon: "settings", link: "/dashboard/settings" },
  ],
};

export type NavLinkType = {
  name: string;
  icon: string;
  link: string;
};

export default sidebarLinks;
