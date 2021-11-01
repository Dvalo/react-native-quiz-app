import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  FlatList,
} from "react-native";
import CategoryItem from "../components/CategoryItem/CategoryItem";

import QUIZ_CATEGORIES from "../utils/categories";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 30 }}
          stickySectionHeadersEnabled={false}
          sections={QUIZ_CATEGORIES}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <CategoryItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          renderItem={() => {
            return null;
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a33",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 24,
    color: "#c4c4c4",
    marginTop: 20,
    marginBottom: 5,
  },
});
