import { View, Text, StyleSheet } from 'react-native';

export default function OtroTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este es otro Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Fondo diferente
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});
