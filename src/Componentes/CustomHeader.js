import { View } from "react-native";
import SearchInput from "./CustomInputHome";
import IconButton from "./IconButton";
import { width } from "../Utils/Dimensions";

export function CustomHeader() {
  return <View style={{ flexDirection: 'row', gap: 20, maxWidth:'95%', width: width }}>
    <SearchInput title='search' />
    <IconButton title='notifications-outline' />
    <IconButton title='basket-outline' />
  </View>;
}