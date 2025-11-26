import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const TIME_RANGES = ["Last 24 hours", "Last 7 days", "Last 30 days"];

type MetricType = "temperature" | "humidity" | "wind";

export default function ChartsScreen() {
  const [mode, setMode] = useState<"overview" | "analysis">("overview");
  const [range, setRange] = useState(TIME_RANGES[0]);
  const [selectedMetric, setSelectedMetric] = useState<MetricType>("temperature");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      {/* Station Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.stationLabel}>Weather Station</Text>
          <View style={styles.stationNameRow}>
            <Text style={styles.stationName}>Porto, Portugal</Text>
            <Ionicons
              name="create-outline"
              size={18}
              color="#4F46E5"
              style={{ marginLeft: 8 }}
            />
          </View>
        </View>
      </View>

      {/* Mode Toggle */}
      <View style={styles.modeToggleContainer}>
        <Pressable
          style={[
            styles.modeButton,
            mode === "overview" && styles.modeButtonActive,
          ]}
          onPress={() => setMode("overview")}
        >
          <Text
            style={[
              styles.modeButtonText,
              mode === "overview" && styles.modeButtonTextActive,
            ]}
          >
            Overview
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.modeButton,
            mode === "analysis" && styles.modeButtonActive,
          ]}
          onPress={() => setMode("analysis")}
        >
          <Text
            style={[
              styles.modeButtonText,
              mode === "analysis" && styles.modeButtonTextActive,
            ]}
          >
            Analysis
          </Text>
        </Pressable>
      </View>

      {/* Time Range Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.timeRangeScroll}
        contentContainerStyle={styles.timeRangeContainer}
      >
        <Pressable style={styles.timeRangeDropdown}>
          <Text style={styles.timeRangeText}>{range}</Text>
          <Ionicons name="chevron-down" size={16} color="#4F46E5" />
        </Pressable>
      </ScrollView>

      {mode === "analysis" && (
        <>
          {/* Analysis Type Selector */}
          <View style={styles.analysisTypeContainer}>
            <Pressable style={styles.analysisTypeButton}>
              <Text style={styles.analysisTypeText}>Average</Text>
            </Pressable>
            <Pressable style={styles.analysisTypeButton}>
              <Text style={styles.analysisTypeText}>Moving Avg</Text>
            </Pressable>
            <Pressable style={styles.analysisTypeButton}>
              <Text style={styles.analysisTypeText}>Trends</Text>
            </Pressable>
          </View>

          {/* Average Values Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Average Values</Text>
            <View style={styles.averageRow}>
              <View style={styles.averageItem}>
                <Ionicons name="thermometer-outline" size={28} color="#4F46E5" />
                <View style={styles.averageTextContainer}>
                  <Text style={styles.averageLabel}>Temperature</Text>
                  <Text style={styles.averageValue}>15.3°C</Text>
                </View>
              </View>
            </View>

            <View style={styles.averageRow}>
              <View style={styles.averageItem}>
                <Ionicons name="water-outline" size={28} color="#4F46E5" />
                <View style={styles.averageTextContainer}>
                  <Text style={styles.averageLabel}>Humidity</Text>
                  <Text style={styles.averageValue}>66%</Text>
                </View>
              </View>
            </View>

            <View style={styles.averageRow}>
              <View style={styles.averageItem}>
                <Ionicons name="flag-outline" size={28} color="#4F46E5" />
                <View style={styles.averageTextContainer}>
                  <Text style={styles.averageLabel}>Wind</Text>
                  <Text style={styles.averageValue}>14.6 km/h</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      )}

      {/* Charts Section */}
      {mode === "overview" ? (
        <>
          {/* Temperature Chart */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Temperature</Text>
              <Ionicons name="trending-up" size={20} color="#10B981" />
            </View>
            <View style={styles.chartContainer}>
              <View style={styles.chartPlaceholder}>
                <Ionicons name="bar-chart-outline" size={48} color="#CBD5E1" />
                <Text style={styles.chartPlaceholderText}>
                  Temperature trend visualization
                </Text>
              </View>
            </View>
          </View>

          {/* Humidity Chart */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Humidity</Text>
              <Ionicons name="water" size={20} color="#3B82F6" />
            </View>
            <View style={styles.chartContainer}>
              <View style={styles.chartPlaceholder}>
                <Ionicons name="bar-chart-outline" size={48} color="#CBD5E1" />
                <Text style={styles.chartPlaceholderText}>
                  Humidity trend visualization
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Temperature vs Average</Text>
            <Ionicons name="analytics" size={20} color="#8B5CF6" />
          </View>
          <View style={styles.chartContainer}>
            <View style={styles.chartPlaceholder}>
              <Ionicons name="stats-chart" size={48} color="#CBD5E1" />
              <Text style={styles.chartPlaceholderText}>
                Comparative analysis visualization
              </Text>
              <Text style={styles.chartSubtext}>
                Shows actual values vs average with trend line
              </Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  header: {
    marginBottom: 20,
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
  modeToggleContainer: {
    flexDirection: "row",
    backgroundColor: "#E0F2FE",
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  modeButtonActive: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  modeButtonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#64748B",
  },
  modeButtonTextActive: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
  },
  timeRangeScroll: {
    marginBottom: 16,
  },
  timeRangeContainer: {
    paddingRight: 20,
  },
  timeRangeDropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
  },
  timeRangeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
  },
  analysisTypeContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  analysisTypeButton: {
    flex: 1,
    backgroundColor: "#E0F2FE",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  analysisTypeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0F172A",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  averageRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  averageItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  averageTextContainer: {
    marginLeft: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  averageLabel: {
    fontSize: 15,
    color: "#64748B",
    fontWeight: "500",
  },
  averageValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },
  chartContainer: {
    marginTop: 8,
  },
  chartPlaceholder: {
    height: 200,
    borderRadius: 12,
    backgroundColor: "#F8FAFC",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  chartPlaceholderText: {
    marginTop: 12,
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },
  chartSubtext: {
    marginTop: 4,
    fontSize: 12,
    color: "#94A3B8",
    textAlign: "center",
  },
});
