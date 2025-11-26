import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MOCK_DATA = {
  stationName: "Your Station",
  temperature: 21.5,
  description: "Partly cloudy",
  feelsLike: 20.8,
  humidity: 66,
  windSpeed: 14.6,
};

export default function HomeScreen() {
  const d = MOCK_DATA;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        {/* Station header */}
        <Text style={styles.stationLabel}>Weather Station</Text>
        <Text style={styles.stationName}>{d.stationName}</Text>

        {/* Main temperature */}
        <View style={styles.currentBlock}>
          <Text style={styles.currentTemp}>{d.temperature.toFixed(1)}°C</Text>
          <Text style={styles.currentDesc}>{d.description}</Text>
        </View>

        {/* Extra info row */}
        <View style={styles.row}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Feels like</Text>
            <Text style={styles.infoValue}>{d.feelsLike.toFixed(1)}°C</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Humidity</Text>
            <Text style={styles.infoValue}>{d.humidity}%</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Wind</Text>
            <Text style={styles.infoValue}>{d.windSpeed} km/h</Text>
          </View>
        </View>

        {/* Placeholder for chart */}
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartText}>Mini temperature chart (later)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f6ff",
  },
  container: { 
    flex: 1, 
    paddingHorizontal: 24, 
    paddingTop: 8,
    paddingBottom: 24,
  },
  stationLabel: { fontSize: 14, opacity: 0.7 },
  stationName: { fontSize: 22, fontWeight: "600", marginBottom: 24 },
  currentBlock: { marginBottom: 24 },
  currentTemp: { fontSize: 56, fontWeight: "700" },
  currentDesc: { fontSize: 18, opacity: 0.7 },
  row: { flexDirection: "row", gap: 12 },
  infoCard: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoLabel: { fontSize: 13, opacity: 0.7 },
  infoValue: { fontSize: 16, fontWeight: "600", marginTop: 4 },
  chartPlaceholder: {
    marginTop: 24,
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#cbd5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  chartText: { opacity: 0.5 },
});
