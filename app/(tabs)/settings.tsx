import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [metric, setMetric] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [refresh, setRefresh] = useState<"15m" | "1h" | "3h">("1h");

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
        <Text style={styles.screenTitle}>Settings</Text>
        
        <Text style={styles.sectionTitle}>Units</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Use metric units</Text>
          <Switch 
            value={metric} 
            onValueChange={setMetric}
            trackColor={{ false: "#cbd5f5", true: "#818cf8" }}
            thumbColor={metric ? "#4f46e5" : "#f4f3f4"}
          />
        </View>

        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Enable notifications</Text>
          <Switch 
            value={notifications} 
            onValueChange={setNotifications}
            trackColor={{ false: "#cbd5f5", true: "#818cf8" }}
            thumbColor={notifications ? "#4f46e5" : "#f4f3f4"}
          />
        </View>

        <Text style={styles.sectionTitle}>Theme</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Dark mode</Text>
          <Switch 
            value={darkMode} 
            onValueChange={setDarkMode}
            trackColor={{ false: "#cbd5f5", true: "#818cf8" }}
            thumbColor={darkMode ? "#4f46e5" : "#f4f3f4"}
          />
        </View>

        <Text style={styles.sectionTitle}>Refresh Frequency</Text>
        <View style={styles.refreshRow}>
          {(["15m", "1h", "3h"] as const).map((opt) => (
            <Pressable
              key={opt}
              style={({ pressed }) => [
                styles.refreshChip,
                refresh === opt && styles.refreshChipActive,
                pressed && styles.refreshChipPressed,
              ]}
              onPress={() => setRefresh(opt)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
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
      </ScrollView>
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
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1f2937",
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
  row: {
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  label: { fontSize: 15, color: "#1f2937" },
  refreshRow: { flexDirection: "row", gap: 10, marginTop: 4 },
  refreshChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#cbd5f5",
    backgroundColor: "white",
    minWidth: 56,
    alignItems: "center",
  },
  refreshChipActive: {
    backgroundColor: "#4f46e5",
    borderColor: "#4f46e5",
  },
  refreshChipPressed: {
    opacity: 0.7,
  },
  refreshText: { fontSize: 14, color: "#4b5563" },
  refreshTextActive: { color: "white", fontWeight: "600" },
});
