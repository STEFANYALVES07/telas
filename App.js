import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [font] = useFonts({
    Playwrite_BE_VLG: require("../telas/src/Fontes/Playwrite_BE_VLG/static/PlaywriteBEVLG-Regular.ttf"),
    Platypi: require("../telas/src/Fontes/Platypi/static/Platypi-SemiBold.ttf"),
  });
  if (!font) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgpginicial}
        source={require("./src/imagens/sorvetepginicial.png")}
      >
        <View style={styles.viewtransparente}>
          <Text style={styles.txt}>O toque de doçura que você merece!</Text>
          <Text style={styles.txt2}>Doce Encanto</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button}>Press Here</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imgpginicial: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewtransparente: {
    height: "30%",
    width: "80%",
    backgroundColor: "pink",
    opacity: 0.9,
    borderRadius: 30,
    marginBottom: 60,
  },
  txt: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Playwrite_BE_VLG",

    color: "black",
  },
  txt2: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Platypi",
  },
  button: {
    backgroundColor: "lightpink",
    borderRadius: 50,
    height: "20%",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
});
