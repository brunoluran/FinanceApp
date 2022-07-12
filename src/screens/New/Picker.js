import RNPickerSelect from "react-native-picker-select";
import styled from "styled-components/native";

const PickerSelect = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #000;
  margin: 5px 0;
  padding: 10px;
  justify-content: center;
`;

const placeholder = {
  label: "",
  value: "",
};

export default function Picker({ value, onValueChange }) {
  return (
    <PickerSelect>
      <RNPickerSelect
        value={value}
        onValueChange={onValueChange}
        placeholder={placeholder}
        items={[
          { label: "Receita", value: "receita", color: "#909090" },
          { label: "Despesa", value: "despesa", color: "#909090" },
        ]}
      />
    </PickerSelect>
  );
}
