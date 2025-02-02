import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { TextInput, Paper, Loader, Container } from "@mantine/core";
import axios from "axios";
import debounce from "lodash.debounce";

const SearchBar = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  const fetchResults = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/search?q=${searchTerm}`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    debounceRef.current = debounce((searchTerm) => {
      fetchResults(searchTerm);
    }, 300);
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      debounceRef.current(query);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Search student..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rightSection={loading && <Loader size="xs" />}
        style={{padding: "20px"}}
      />
      {results.length > 0 && (
        <Paper shadow="sm" p="sm" mt={5} withBorder>
          {results.map((student) => (
            <div
              key={student.id}
              style={{
                padding: "6px",
                cursor: "pointer",
                color:"grey",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
              onClick={() => {
                onSelect(student);
                setQuery("");
                setResults([]);
              }}
            >
              <span
                dangerouslySetInnerHTML={{ __html: highlightMatch(student.name, query) }}
              />
            </div>
          ))}
        </Paper>
      )}
    </Container>
  );
};

const highlightMatch = (name, query) => {
  const regex = new RegExp(`(${query})`, "gi");
  return name.replace(regex, `<mark style="background-color: yellow;">$1</mark>`);
};

SearchBar.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default SearchBar;
