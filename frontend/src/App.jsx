import { useState } from "react";
import { MantineProvider, Container, Title } from "@mantine/core";
import SearchBar from "./components/SearchBar";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <Container size="sm" mt={50}>
        <Title align="center" mb={20}>
          Student Search
        </Title>
        <SearchBar onSelect={setSelectedStudent} />
        {selectedStudent && <StudentDetails student={selectedStudent} />}
      </Container>
    </MantineProvider>
  );
};

export default App;
