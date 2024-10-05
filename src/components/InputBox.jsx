import styled from "styled-components";
import PropTypes from "prop-types";

const InputBox = ({ inputText, isPassword, value, onChange }) => {
  return (
    <InputBoxContainer>
      <InnerContainer>
        <InputText
          type={isPassword ? "password" : "text"}
          value={value}
          placeholder={value ? "" : inputText}
          onChange={onChange}
        />
      </InnerContainer>
    </InputBoxContainer>
  );
};

InputBox.propTypes = {
  inputText: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
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
  margin: 10px 0;
`;

const InputText = styled.input`
  ${({ theme }) => theme.fonts.subText};
  width: 100%;
  border: none;
  outline: none;
  opacity: 60%;
`;

export default InputBox;
