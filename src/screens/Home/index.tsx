import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Elise",
    "Leandro",
    "Vini",
    "Fernando",
    "Sirius",
    "James",
    "Remus",
    "Andromeda",
    "Narcissa",
    "Lucius",
    "Lily",
    "Albus",
    "Tom",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
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
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}

      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
      />

      <StatusBar style="auto" />
    </View>
  );
}
