import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";

export default function SettingsScreen() {
  const [metric, setMetric] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [refresh, setRefresh] = useState<"15m" | "1h" | "3h">("1h");

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Units</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Use metric units</Text>
        <Switch value={metric} onValueChange={setMetric} />
      </View>

      <Text style={styles.sectionTitle}>Notifications</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Enable notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <Text style={styles.sectionTitle}>Theme</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Dark mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <Text style={styles.sectionTitle}>Refresh Frequency</Text>
      <View style={styles.refreshRow}>
        {["15m", "1h", "3h"].map((opt) => (
          <Pressable
            key={opt}
            style={[
              styles.refreshChip,
              refresh === opt && styles.refreshChipActive,
            ]}
            onPress={() => setRefresh(opt as any)}
          >
            <Text
              style={[
                styles.refreshText,
                refresh === opt && styles.refreshTextActive,
              ]}
            >
              {opt}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#f3f6ff" },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "600",
  },
  row: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: { fontSize: 14 },
  refreshRow: { flexDirection: "row", gap: 8, marginTop: 4 },
  refreshChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#cbd5f5",
  },
  refreshChipActive: {
    backgroundColor: "#4f46e5",
    borderColor: "#4f46e5",
  },
  refreshText: { fontSize: 13 },
  refreshTextActive: { color: "white", fontWeight: "600" },
});
