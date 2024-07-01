"use client";
import { Box, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import { Chart } from "react-google-charts";

const barChartData = [
  {
    data: [
      ["Year", "Views", "Enroll"],
      ["Mon", 1000, 400],
      ["Tue", 1170, 460],
      ["Wed", 660, 1120],
      ["Thu", 1030, 540],
      ["Fri", 530, 140],
    ],
    options: [
      {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
      },
    ],
  },
];

// const data = [
//   ["Year", "Sales", "Expenses", "Profit"],
//   ["2014", 1000, 400, 200],
//   ["2015", 1170, 460, 250],
//   ["2016", 660, 1120, 300],
//   ["2017", 1030, 540, 350],
// ];

// const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales, Expenses, and Profit: 2014-2017",
//   },
// };

const cardTitles = ["Courses", "Tasks/Assignment"];

const OverviewMiddleCards = () => {
  return (
    <Box
      w={"100%"}
      display={"grid"}
      p={".5rem"}
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2,1fr)" }}
      columnGap={5}
      h={{ base: "300", md: "fit-content" }}
      overflowY={{ base: "scroll", md: "unset" }}
      rowGap={5}
    >
      {cardTitles.map((card, idx) => (
        <Card
          key={idx}
          boxShadow={
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
          }
        >
          <CardHeader>
            <Heading size={{ base: "sm", sm: "md" }}>{card}</Heading>
          </CardHeader>
          <CardBody height={"fit-content"}>
            <Chart
              chartType="Bar"
              width="100%"
              height="auto"
              data={barChartData[0].data}
              options={barChartData[0].options[0]}
            />
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};

export default OverviewMiddleCards;
