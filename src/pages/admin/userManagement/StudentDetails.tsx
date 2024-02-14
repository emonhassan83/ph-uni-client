import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const { studentId } = useParams();

  return (
    <div>
      <h4> This is Student Details of {studentId} </h4>
    </div>
  );
};

export default StudentDetails;