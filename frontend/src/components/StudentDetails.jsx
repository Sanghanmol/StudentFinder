import PropTypes from "prop-types";
import { Card, Text } from "@mantine/core";

const StudentDetails = ({ student }) => {
  return (
      <Card shadow="sm" padding="lg" mt={20} withBorder>
        <Text ta="center" size="xl" weight={700}>{student.name}</Text>
        <Text ta="center" size="xl" weight={700}>Class: {student.class}</Text>
        <Text ta="center" size="xl" weight={700}>Roll Number: {student.rollNumber}</Text>
      </Card>
  );
};

StudentDetails.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.number.isRequired,
    rollNumber: PropTypes.number.isRequired,
  }).isRequired,
};

export default StudentDetails;
