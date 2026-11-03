
import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot style={{ flex: 1 }} />

      <TabList style={styles.navigation}>
        <TabTrigger name="index" href="/" style={styles.item}>
          <Feather name="home" size={22} color="#708077" />
          <Text style={styles.label}>Home</Text>
        </TabTrigger>

        <TabTrigger name="panduan" href="/panduan" style={styles.item}>
          <Feather name="book-open" size={22} color="#708077" />
          <Text style={styles.label}>Panduan</Text>
        </TabTrigger>

        <TabTrigger
          name="identifikasi"
          href="/identifikasi"
          style={styles.centerItem}
        >
          <View style={styles.scanButton}>
            <Feather name="camera" size={25} color="#FFFFFF" />
          </View>
          <Text style={styles.scanLabel}>Identifikasi</Text>
        </TabTrigger>

        <TabTrigger name="riwayat" href="/riwayat" style={styles.item}>
          <Feather name="clock" size={22} color="#708077" />
          <Text style={styles.label}>Riwayat</Text>
        </TabTrigger>

        <TabTrigger name="pengaturan" href="/pengaturan" style={styles.item}>
          <Feather name="settings" size={22} color="#708077" />
          <Text style={styles.label}>Pengaturan</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 72,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E6EDE8',
    paddingHorizontal: 4,
    paddingTop: 8,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  centerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  scanButton: {
    width: 58,
    height: 58,
    marginTop: -32,
    borderWidth: 5,
    borderColor: '#F5F8F5',
    borderRadius: 29,
    backgroundColor: '#16845B',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  label: {
    fontSize: 9.5,
    color: '#708077',
    fontWeight: '500',
  },
  scanLabel: {
    fontSize: 9.5,
    color: '#174F3B',
    fontWeight: '700',
  },
});