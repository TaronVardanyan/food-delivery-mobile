import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

const Layout = () => {
    return (
       <SafeAreaView>
           <Slot />
       </SafeAreaView>
    );
};

export default Layout;
