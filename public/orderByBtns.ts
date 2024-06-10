const orderByBtns = [
  {
    btnName: "Filter by",
    options: ["All", "Free Courses", "Paid Courses"],
  },
  {
    btnName: "Sort by",
    options: ["Ascending", "Descending"],
  },
];

export type orderByBtnType = {
  btnName: string;
  options: string[];
};

export default orderByBtns;
