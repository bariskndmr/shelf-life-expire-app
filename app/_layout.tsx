import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  const [loaded] = useFonts({
    "rubik-regular": require("@/src/assets/fonts/Rubik-Regular.ttf"),
    "rubik-medium": require("@/src/assets/fonts/Rubik-Medium.ttf"),
    "rubik-bold": require("@/src/assets/fonts/Rubik-Bold.ttf"),
    "rubik-light": require("@/src/assets/fonts/Rubik-Light.ttf"),
    "rubik-semibold": require("@/src/assets/fonts/Rubik-SemiBold.ttf"),
    "rubik-extrabold": require("@/src/assets/fonts/Rubik-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
