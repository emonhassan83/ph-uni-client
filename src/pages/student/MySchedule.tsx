import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const MySchedule = () => {
  const { data: enrolledCourses } = useGetAllEnrolledCoursesQuery(undefined);

  return (
    <div>
      {enrolledCourses?.data?.map((item: any, index: string) => {
        return (
          <div key={index}>
            <div>{item.course.title}</div>
            <div>{item.offeredCourse.section}</div>
            <div>
              {item.offeredCourse.days.map((item: any, index: string) => (
                <span key={index}> {item}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MySchedule;
