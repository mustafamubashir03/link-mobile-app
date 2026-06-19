import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";



export default function Index() {

  const pingBackend = async () => {
    const response = await fetch("http://192.168.0.105:3000")
    const data = await response.json()
    console.log(data)

  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable style={styles.btn} onPress={() => pingBackend()}>
        <Text style={{ color: "white" }}>Ping Backend</Text>
      </Pressable>
      <Text>HomeScreen</Text>
      <Link href="/sign-in">
        <Text>Go to sign in page</Text></Link>
    </View>
  );
}


const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
  }
})
