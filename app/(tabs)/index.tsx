import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const MOCK_DATA = {
  stationName: "Porto, Portugal",
  temperature: 18,
  description: "Partly cloudy",
  feelsLike: 15.3,
  humidity: 66,
  windSpeed: 14.6,
};

export default function HomeScreen() {
  const d = MOCK_DATA;

  return (
    <View style={styles.container}>
      {/* Station Header with edit button */}
      <View style={styles.stationHeader}>
        <View>
          <Text style={styles.stationLabel}>Weather Station</Text>
          <View style={styles.stationNameRow}>
            <Text style={styles.stationName}>{d.stationName}</Text>
            <Ionicons name="create-outline" size={20} color="#4F46E5" style={{ marginLeft: 8 }} />
          </View>
        </View>
      </View>

      {/* Main Weather Card */}
      <View style={styles.mainCard}>
        <Text style={styles.currentTemp}>{d.temperature}°C</Text>
        <Text style={styles.currentDesc}>{d.description}</Text>

        {/* Weather Details Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons name="thermometer-outline" size={24} color="#64748B" />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Feels Like</Text>
              <Text style={styles.detailValue}>{d.feelsLike}°C</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Ionicons name="water-outline" size={24} color="#64748B" />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Humidity</Text>
              <Text style={styles.detailValue}>{d.humidity}%</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Ionicons name="flag-outline" size={24} color="#64748B" />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Wind</Text>
              <Text style={styles.detailValue}>{d.windSpeed} km/h</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Quick Actions or Recent Trend */}
      <View style={styles.trendCard}>
        <Text style={styles.trendTitle}>24-Hour Trend</Text>
        <View style={styles.trendPlaceholder}>
          <Ionicons name="trending-up" size={32} color="#94A3B8" />
          <Text style={styles.trendText}>Chart visualization coming soon</Text>
        </View>
      </View>

      {/* Last Updated */}
      <Text style={styles.lastUpdated}>Last updated: 2 minutes ago</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  stationHeader: {
    marginBottom: 24,
  },
  stationLabel: {
    fontSize: 13,
    color: "#64748B",
    fontWeight: "500",
    marginBottom: 4,
  },
  stationNameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  stationName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
  },
  mainCard: {
    backgroundColor: "#E0F2FE",
    borderRadius: 24,
    padding: 32,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  currentTemp: {
    fontSize: 72,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },
  currentDesc: {
    fontSize: 20,
    color: "#475569",
    marginBottom: 32,
    fontWeight: "500",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  detailTextContainer: {
    marginLeft: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 2,
  },
  trendCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  trendTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
    marginBottom: 16,
  },
  trendPlaceholder: {
    height: 120,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  trendText: {
    marginTop: 8,
    fontSize: 13,
    color: "#94A3B8",
  },
  lastUpdated: {
    textAlign: "center",
    fontSize: 12,
    color: "#94A3B8",
    fontStyle: "italic",
  },
});
