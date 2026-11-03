
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { WasteCard } from '@/components/WasteCard';
import { dummyWaste } from '@/constants/dummy-waste';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">RILO</ThemedText>
      <ThemedText>
        Smart Waste Identification
      </ThemedText>

      <View style={styles.section}>
        <ThemedText type="subtitle">
          Contoh Hasil Identifikasi
        </ThemedText>

        <WasteCard waste={dummyWaste} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  section: {
    marginTop: 24,
    gap: 12,
  },
});