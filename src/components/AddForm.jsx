import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        id: new Date().getTime(),
        title,
      })
    );
    setTitle("");
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmit}>
        <label style={{ display: "block" }}>Todo를 입력하세요</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>추가</button>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;
`;
