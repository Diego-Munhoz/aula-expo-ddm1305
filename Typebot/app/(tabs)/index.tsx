import { Image, StyleSheet, Platform } from 'react-native';
import { Bubble } from "@typebot.io/react"


export default function HomeScreen() {
  return (
    <div>
    <Bubble
      typebot="my-typebot-ho7xrrv"
      theme={{ button: { backgroundColor: "#0d9488" } }}
    />
    </div>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
