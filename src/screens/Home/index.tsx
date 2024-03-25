import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar");
  }

  function handleParticipantRemove() {
    console.log("Você clicou no botão de Remover");
  }
  return (
    <View style={styles.container}>
      <Text key="name" style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>Sexta, 22 de Março de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Elise" onRemove={handleParticipantRemove} />
      <StatusBar style="auto" />
    </View>
  );
}
