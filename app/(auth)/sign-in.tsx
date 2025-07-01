import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useAuth, useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignIn = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const { isSignedIn } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  
  useEffect(() => {
    if (isSignedIn) {
      router.replace('/(root)/(tabs)/home');
    }
  }, [isSignedIn]);

  const onSignInPress = async () => {
    if (!isLoaded) return

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(root)/(tabs)/home')
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Hola!
          </Text>
        </View>
      </View>
      <View className="p-8">
        <InputField
          label="Email"
          placeholder="Enter Email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          placeholder="Enter Password"
          icon={icons.lock}
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />

        <CustomButton title="Sign In" onPress={onSignInPress} className="mt-6" />

        <OAuth />

        <Link href={'/sign-up'} className="text-lg text-center text-general-200 mt-10">
        <Text>Don&apos;t have an account?</Text>
        <Text className="text-primary-500"> Register Here</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignIn;
