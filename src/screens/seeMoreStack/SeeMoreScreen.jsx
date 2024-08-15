import { Text, TouchableOpacity } from "react-native";
import MainWrapper from "../../components/commons/layout/wrapper/MainWrapper";
import { useAuth } from "../../navigations/AppNavigation";

export default function SeeMoreScreen() {
  const { setIsLoggedIn } = useAuth();
  return (
    <MainWrapper>
      <TouchableOpacity
        onPress={() => {
          setIsLoggedIn(false);
        }}
      >
        <Text>SeeMoreScreen</Text>
      </TouchableOpacity>
    </MainWrapper>
  );
}
