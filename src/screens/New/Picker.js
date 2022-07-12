import RNPickerSelect from "react-native-picker-select";
import { Platform } from "react-native";
import styled from "styled-components/native";

const PickerSelect = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #e1e1e1;
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
          { label: "Receita", value: "receita", color: "#000" },
          { label: "Despesa", value: "despesa", color: "#000" },
        ]}
      />
    </PickerSelect>
  );
}
