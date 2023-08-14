import { TextInput, View } from "react-native";
import { globalStyles } from "../../styles";
import { FontAwesome5 } from "@expo/vector-icons";

const Search = ({ value, onChangeText }) => {
  return (
    <View style={{ marginTop: 15, position: "relative" }}>
      <TextInput
        placeholder="Buscar"
        style={[globalStyles.input, globalStyles.shadowProp]}
        onChangeText={onChangeText}
        value={value}
      />

      <View style={globalStyles.searchIcon}>
        <FontAwesome5 name="search" color="#aaa" size={25} />
      </View>
    </View>
  );
};

export default Search;
