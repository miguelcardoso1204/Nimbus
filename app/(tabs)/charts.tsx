import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const TIME_RANGES = ["Last 24 hours", "Last 7 days", "Last 30 days"];

export default function ChartsScreen() {
  const [mode, setMode] = useState<"overview" | "analysis">("overview");
  const [range, setRange] = useState(TIME_RANGES[0]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Station header */}
      <Text style={styles.stationLabel}>Weather Station</Text>
      <Text style={styles.stationName}>Porto, Portugal</Text>

      {/* Mode toggle */}
      <View style={styles.segmentRow}>
        <SegmentButton
          label="Overview"
          active={mode === "overview"}
          onPress={() => setMode("overview")}
        />
        <SegmentButton
          label="Analysis"
          active={mode === "analysis"}
          onPress={() => setMode("analysis")}
        />
      </View>

      {/* Time range selector */}
      <View style={styles.segmentRow}>
        {TIME_RANGES.map((r) => (
          <SegmentButton
            key={r}
            label={r}
            active={range === r}
            onPress={() => setRange(r)}
            small
          />
        ))}
      </View>

      {/* Top card: averages etc (as in Analysis mockup) */}
      {mode === "analysis" && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Average Values</Text>
          <Text style={styles.metric}>Temperature: 15.3°C</Text>
          <Text style={styles.metric}>Humidity: 66%</Text>
          <Text style={styles.metric}>Wind: 14.6 km/h</Text>
        </View>
      )}

      {/* Charts */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          {mode === "overview" ? "Temperature" : "Temperature vs Average"}
        </Text>
        <View style={styles.chartBox}>
          <Text style={styles.chartPlaceholder}>
            Temperature chart goes here
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Humidity</Text>
        <View style={styles.chartBox}>
          <Text style={styles.chartPlaceholder}>Humidity chart goes here</Text>
        </View>
      </View>
    </ScrollView>
  );
}

type SegmentProps = {
  label: string;
  active: boolean;
  small?: boolean;
  onPress: () => void;
};

function SegmentButton({ label, active, small, onPress }: SegmentProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.segmentButton,
        active && styles.segmentButtonActive,
        small && styles.segmentButtonSmall,
      ]}
    >
      <Text style={[styles.segmentText, active && styles.segmentTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#f3f6ff" },
  stationLabel: { fontSize: 14, opacity: 0.7 },
  stationName: { fontSize: 22, fontWeight: "600", marginBottom: 16 },
  segmentRow: {
    flexDirection: "row",
    padding: 4,
    borderRadius: 999,
    backgroundColor: "#dde4ff",
    marginBottom: 12,
    gap: 4,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentButtonSmall: {
    flex: 0,
    paddingHorizontal: 12,
  },
  segmentButtonActive: {
    backgroundColor: "white",
  },
  segmentText: { fontSize: 13, opacity: 0.7 },
  segmentTextActive: { fontWeight: "600", opacity: 1 },
  card: {
    marginTop: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "white",
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  metric: { fontSize: 14, marginTop: 2 },
  chartBox: {
    height: 180,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#cbd5f5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  chartPlaceholder: { fontSize: 12, opacity: 0.5 },
});
