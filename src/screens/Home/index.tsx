import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text key="name" style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>Sexta, 22 de Março de 2024</Text>

      <TextInput 
      style={styles.input} 
      placeholder="Nome do participante"
      placeholderTextColor='#6B6B6B'
      />
      <StatusBar style="auto" />
    </View>
  );
}
