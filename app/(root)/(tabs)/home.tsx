import GoogleTextInput from "@/components/GoogleTextInput";
import Map from "@/components/Map";
import RideCard from "@/components/RideCard";
import { icons, images } from "@/constants";
import { useLocationStore } from "@/store";
import { useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Page() {
  const {setUserLocation, setDestinationLocation} = useLocationStore();
  const { user } = useUser();
  const loading = true;

  const [hasPermissions, setHasPermissions] = useState(false);

  const handleSignOut = () => {};

  const handleDestinationPress = (location: {latitude: number, longitude: number, address: string}) => {
    setDestinationLocation(location);
    router.push("/(root)/find-ride")
  };

  const recentRides = [
    {
      ride_id: "1",
      origin_address: "Mumbai, Maharashtra, India",
      destination_address: "Pune, Maharashtra, India",
      origin_latitude: "19.0760",
      origin_longitude: "72.8777",
      destination_latitude: "18.520430",
      destination_longitude: "73.856744",
      ride_time: 391,
      fare_price: "19500.00",
      payment_status: "Paid",
      driver_id: 2,
      user_id: "1",
      created_at: "2025-03-15 05:19:20.620007",
      driver: {
        driver_id: "2",
        first_name: "Rajesh",
        last_name: "Kumar",
        profile_image_url:
          "https://ucarecdn.com/6ea6d83d-ef1a-483f-9106-837a3a5b3f67/-/preview/1000x666/",
        car_image_url:
          "https://ucarecdn.com/a3872f80-c094-409c-82f8-c9ff38429327/-/preview/930x932/",
        car_seats: 5,
        rating: "4.60",
      },
    },
    {
      ride_id: "2",
      origin_address: "Delhi, India",
      destination_address: "Gurgaon, Haryana, India",
      origin_latitude: "28.7041",
      origin_longitude: "77.1025",
      destination_latitude: "28.4595",
      destination_longitude: "77.0266",
      ride_time: 491,
      fare_price: "24500.00",
      payment_status: "Pending",
      driver_id: 1,
      user_id: "1",
      created_at: "2025-07-22 06:12:17.683046",
      driver: {
        driver_id: "1",
        first_name: "Amit",
        last_name: "Sharma",
        profile_image_url:
          "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
        car_image_url:
          "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
        car_seats: 4,
        rating: "4.80",
      },
    },
    {
      ride_id: "3",
      origin_address: "Bangalore, Karnataka, India",
      destination_address: "Chennai, Tamil Nadu, India",
      origin_latitude: "12.9716",
      origin_longitude: "77.5946",
      destination_latitude: "13.0827",
      destination_longitude: "80.2707",
      ride_time: 124,
      fare_price: "6200.00",
      payment_status: "Paid",
      driver_id: 1,
      user_id: "1",
      created_at: "2025-11-08 08:49:01.809053",
      driver: {
        driver_id: "1",
        first_name: "Suresh",
        last_name: "Patel",
        profile_image_url:
          "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
        car_image_url:
          "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
        car_seats: 4,
        rating: "4.80",
      },
    },
    {
      ride_id: "4",
      origin_address: "Hyderabad, Telangana, India",
      destination_address: "Vizag, Andhra Pradesh, India",
      origin_latitude: "17.3850",
      origin_longitude: "78.4867",
      destination_latitude: "17.6868",
      destination_longitude: "83.2185",
      ride_time: 159,
      fare_price: "7900.00",
      payment_status: "Paid",
      driver_id: 3,
      user_id: "1",
      created_at: "2025-05-30 18:43:54.297838",
      driver: {
        driver_id: "3",
        first_name: "Vikram",
        last_name: "Singh",
        profile_image_url:
          "https://ucarecdn.com/0330d85c-232e-4c30-bd04-e5e4d0e3d688/-/preview/826x822/",
        car_image_url:
          "https://ucarecdn.com/289764fb-55b6-4427-b1d1-f655987b4a14/-/preview/930x932/",
        car_seats: 4,
        rating: "4.70",
      },
    },
  ];

  useEffect(() => {
    const requestLocation = async() => {
      let {status} = await Location.requestForegroundPermissionsAsync();

      if(status !== "granted") {
        setHasPermissions(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync();

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!
      });

      setUserLocation({
        latitude: 37.78825,
        longitude: -122.4324,
        address: `${address[0].name}, ${address[0].region}`
      })
    
    };
    requestLocation();
  }, [])

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-4"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-56 h-56"
                  alt="No recent rides found!"
                  resizeMode="contain"
                />
                <Text className="text-lg">No recent rides found!</Text>
              </>
            ) : (
              <ActivityIndicator
                size={"large"}
                color="#000"
                className="mt-safe-or-96"
              />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-xl font-JakartaMedium">
                Welcome,{" "}
                {user?.firstName ||
                  user?.emailAddresses[0].emailAddress.split("@")[0]}{" "}
                👋
              </Text>
              <TouchableOpacity
                onPress={handleSignOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-5 h-5" />
              </TouchableOpacity>
            </View>

            <GoogleTextInput
              icon={icons.search}
              containerStyle="bg-white shadow-md shadow-neutral-300"
              handlePress={handleDestinationPress}
            />

            <>
              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Current Location
              </Text>
              <View className="flex flex-row items-center bg-transparent h-[300px]">
                <Map />
              </View>
            </>

            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Recent Rides
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  );
}
