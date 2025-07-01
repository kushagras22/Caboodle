import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants";
import { Tabs } from "expo-router";


const Layout = () => {
    return (
        <Tabs initialRouteName="home" screenOptions={{
            tabBarActiveTintColor:"white",
            tabBarInactiveTintColor:"white",
            tabBarShowLabel:false,
            tabBarStyle: {
                backgroundColor: "#222222",
                borderRadius: 50,
                paddingBottom: 25,
                overflow: "hidden",
                marginHorizontal: 25,
                marginBottom: 25,
                height: 78,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                position: "absolute"
            }
        }}>
            <Tabs.Screen name="home" options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.home} />
            }}/>
            <Tabs.Screen name="rides" options={{
                title: "Rides",
                headerShown: false,
                tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.list} />
            }}/>
            <Tabs.Screen name="chat" options={{
                title: "Chat",
                headerShown: false,
                tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.chat} />
            }}/>
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({focused}) => <TabIcon focused={focused} source={icons.profile} />
            }}/>
        </Tabs>
    );
}

export default Layout;