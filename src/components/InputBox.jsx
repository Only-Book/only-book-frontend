import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const InputBox = ({
  inputText,
  explainText,
  validate,
  isPassword,
  onValidChange,
}) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    onValidChange(isValid);
  }, [isValid, onValidChange]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue) {
      setIsValid(validate(inputValue));
    } else {
      setIsValid(false);
    }
  };

  const getColor = () => {
    if (!value) return "gray";
    return isValid ? "green" : "red";
  };

  return (
    <InputBoxContainer>
      <InnerContainer color={getColor()}>
        <InputText
          type={isPassword ? "password" : "text"}
          value={value}
          placeholder={value ? "" : inputText}
          onChange={handleChange}
        />
      </InnerContainer>
      <ExplainText>{explainText}</ExplainText>
    </InputBoxContainer>
  );
};

InputBox.propTypes = {
  inputText: PropTypes.string.isRequired,
  explainText: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  isPassword: PropTypes.bool,
  onValidChange: PropTypes.func.isRequired,
};

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 45vw;
  min-width: 100px;
  height: 7vh;
  min-height: 50px;
  border-radius: 1.08vw;
  border: 2px solid ${({ theme, color }) => theme.colors[color]};
  padding: 5.18%;
  justify-content: space-between;
  align-items: center;
`;

const InputText = styled.input`
  ${({ theme }) => theme.fonts.subText};
  border: none;
  outline: none;
  opacity: 60%;
`;

const ExplainText = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  margin: 10px 0;
  margin-left: 5px;
  margin-bottom: 3%;
  color: #929292;
`;

export default InputBox;
