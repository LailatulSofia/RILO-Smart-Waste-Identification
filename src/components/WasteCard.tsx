//src/components/WasteCard.tsx
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import type { WasteIdentification } from '@/types/rilo';

interface WasteCardProps {
  waste: WasteIdentification;
}

export function WasteCard({ waste }: WasteCardProps) {
  return (
    <View style={styles.card}>
      <ThemedText type="subtitle">{waste.name}</ThemedText>
      <ThemedText>{waste.material}</ThemedText>
      <ThemedText>{waste.category}</ThemedText>
      <ThemedText>{waste.description}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#EAF2FF',
    gap: 8,
  },
});
