import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from 'react-native';

const data = [
  { text: 'Text 01' },
  { text: 'Text 02' },
  { text: 'Text 03' },
  { text: 'Text 04' },
  { text: 'Text 05' },
]

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text>Hello!</Text>
      {data.map((e, i) => <Text key={i}>{e.text}</Text>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})

