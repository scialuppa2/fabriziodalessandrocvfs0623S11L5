import { useState } from "react";
import { Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchFetch } from "../redux/actions/actions";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchFetch(value));
  };
  return (
    <>
      <Form className="input-group mt-3 row">
        <Col xs={10} className="search-bar pe-0 rounded-start-2">
          <Form.Group className="my-form-sm">
            <Form.Control
              type="text"
              placeholder="Search"
              value={value}
              id="searchField"
              className="custom-search-input"
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
            />
          </Form.Group>

        </Col>

        <Col xs={2} className="ps-0">
          <button
            className="btn btn-outline-secondary btn-sm h-100 rounded-end-2"
            type="button"
            onClick={(e) => handleSearch(e)}>
            Go
          </button>
        </Col>
      </Form>
    </>
  );
};

export default SearchBar;
