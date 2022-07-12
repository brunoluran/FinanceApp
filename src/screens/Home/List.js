import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import Text from "../../components/Text";

const PressableView = styled.Pressable`
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.07);
  margin: 0 0 2px;
`;

const Type = styled.View`
  flex-direction: row;
`;

const IconView = styled.View`
  flex-direction: row;
  background-color: ${(props) => (props.type === "despesa" ? "#EB0707" : "#049301")};
  padding: 5px 10px;
  border-radius: 8px;
  align-items: center;
`;
export default function List({ data, handleDelete }) {
  return (
    <PressableView onLongPress={() => handleDelete(data)}>
      <Type>
        <IconView type={data.type}>
          <Feather
            name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
            color="#fff"
            size={20}
          />
          <Text size={12} margin="0">
            {data.type}
          </Text>
        </IconView>
      </Type>
      <Text size={16} color="#000" bold>
        R$ {data.value}
      </Text>
    </PressableView>
  );
}
