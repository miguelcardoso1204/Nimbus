import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from "react-native";

export default function SettingsScreen() {
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.headerSubtitle}>
          Customize your weather experience
        </Text>
      </View>

      {/* Units Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Units</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="speedometer-outline" size={24} color="#4F46E5" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Measurement Units</Text>
                <Text style={styles.settingDescription}>
                  {units === "metric" ? "Celsius, km/h" : "Fahrenheit, mph"}
                </Text>
              </View>
            </View>
            <View style={styles.unitsToggle}>
              <Pressable
                style={[
                  styles.unitButton,
                  units === "metric" && styles.unitButtonActive,
                ]}
                onPress={() => setUnits("metric")}
              >
                <Text
                  style={[
                    styles.unitButtonText,
                    units === "metric" && styles.unitButtonTextActive,
                  ]}
                >
                  Metric
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.unitButton,
                  units === "imperial" && styles.unitButtonActive,
                ]}
                onPress={() => setUnits("imperial")}
              >
                <Text
                  style={[
                    styles.unitButtonText,
                    units === "imperial" && styles.unitButtonTextActive,
                  ]}
                >
                  Imperial
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="notifications-outline" size={24} color="#4F46E5" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Push Notifications</Text>
                <Text style={styles.settingDescription}>
                  Get weather alerts and updates
                </Text>
              </View>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: "#E2E8F0", true: "#BAE6FD" }}
              thumbColor={notifications ? "#0EA5E9" : "#94A3B8"}
              ios_backgroundColor="#E2E8F0"
            />
          </View>
        </View>
      </View>

      {/* Appearance Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons
                name={darkMode ? "moon" : "sunny-outline"}
                size={24}
                color="#4F46E5"
              />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Dark Mode</Text>
                <Text style={styles.settingDescription}>
                  Switch to dark theme
                </Text>
              </View>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#E2E8F0", true: "#BAE6FD" }}
              thumbColor={darkMode ? "#0EA5E9" : "#94A3B8"}
              ios_backgroundColor="#E2E8F0"
            />
          </View>
        </View>
      </View>

      {/* Data & Storage Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data & Storage</Text>
        <View style={styles.card}>
          <Pressable style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="cloud-download-outline" size={24} color="#4F46E5" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Cache Data</Text>
                <Text style={styles.settingDescription}>
                  12.5 MB stored locally
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="trash-outline" size={24} color="#EF4444" />
              <View style={styles.settingTextContainer}>
                <Text style={[styles.settingLabel, { color: "#EF4444" }]}>
                  Clear Cache
                </Text>
                <Text style={styles.settingDescription}>
                  Free up storage space
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </Pressable>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.card}>
          <Pressable style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="information-circle-outline" size={24} color="#4F46E5" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>App Version</Text>
                <Text style={styles.settingDescription}>1.0.0</Text>
              </View>
            </View>
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="document-text-outline" size={24} color="#4F46E5" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Privacy Policy</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="help-circle-outline" size={24} color="#4F46E5" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Help & Support</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    padding: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: "#64748B",
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    minHeight: 72,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  settingTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 13,
    color: "#64748B",
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginLeft: 56,
  },
  unitsToggle: {
    flexDirection: "row",
    backgroundColor: "#F1F5F9",
    borderRadius: 8,
    padding: 2,
  },
  unitButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  unitButtonActive: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  unitButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#64748B",
  },
  unitButtonTextActive: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },
});
