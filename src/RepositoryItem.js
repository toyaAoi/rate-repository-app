import { Image, StyleSheet, Text, View } from "react-native";
import Property from "./components/Property";

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          style={styles.avatar}
          source={{
            uri: repository.ownerAvatarUrl,
          }}
        />
        <View style={styles.details}>
          <Text style={[styles.title]}>{repository.fullName} </Text>
          <Text style={styles.description}>{repository.description}</Text>
          <Text style={styles.language}>{repository.language}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 16,
        }}
      >
        <Property title={"Stars"} value={repository.stargazersCount} />
        <Property title={"Forks"} value={repository.forksCount} />
        <Property title={"Reviews"} value={repository.reviewCount} />
        <Property title={"Rating"} value={repository.ratingAverage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  avatar: {
    height: 60,
    aspectRatio: 1,
    borderRadius: 16,
  },
  details: {
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginVertical: 8,
  },
  language: {
    backgroundColor: "#0165D7",
    borderRadius: 4,
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
  },
});

export default RepositoryItem;
