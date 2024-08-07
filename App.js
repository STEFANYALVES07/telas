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
        source={require("./src/imagens/cupcakes.png")}
      >
        <View style={styles.viewtransparente}>
          <Text style={styles.txt}>O toque de doçura que você merece!</Text>
          <Text style={styles.txt2}>Doce Encanto</Text>
        </View>
        <Text style={styles.txtbemvindo}>Bem-Vindo!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txtbutton}>Entrar</Text>
        </TouchableOpacity>
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
    height: "20%",
    width: "80%",
    textAlign: "center",
    bottom: "60%",
  },
  txt: {
    top: "10%",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Playwrite_BE_VLG",
    color: "black",
  },
  txt2: {
    top: "12%",
    color: "pink",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Platypi",
  },
  txtbemvindo: {
    bottom: "13%",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Platypi",
    backgroundColor: "pink",
    right: "20%",

    radius: 40,
  },

  button: {
    backgroundColor: "lightpink",
    borderRadius: 100,
    height: "5%",
    width: "30%",
    bottom: "10%",
    right: "20%",
  },
  txtbutton: {
    top: "15%",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Platypi",
  },
});
