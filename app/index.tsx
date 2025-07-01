import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)/welcome"} />;
  } 
  
  return <Redirect href={"/(root)/(tabs)/home"} />;
  
};

export default Home;
