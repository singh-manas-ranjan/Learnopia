import React from "react";
import coursesList from "../../../../../../public/courses";
import { Text } from "@chakra-ui/react";
import VideoPlayerComponent from "@/app/ui/dashboard/enrolledCoursesContainer/myCoursesCard/videoPlayer/VideoPlayerComponent";
interface Props {
  params: { courseId: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const videoLinks = [
  "https://www.youtube.com/watch?v=qz0aGYrrlhU",
  "https://www.youtube.com/watch?v=HD13eq_Pmp8",
  "https://www.youtube.com/watch?v=FQdaUv95mR8",
];

const VideoPlayer = ({ params, searchParams }: Props) => {
  const courseId = atob(params.courseId);
  const course = coursesList.find((course) => course.courseId === courseId);
  const selectedLecture = (videoLinks[Number(searchParams.lecture) - 1] ||
    course?.courseLink) as string;

  if (!selectedLecture) {
    return <Text>No video selected or available.</Text>;
  }
  return <VideoPlayerComponent url={selectedLecture} />;
};

export default VideoPlayer;
