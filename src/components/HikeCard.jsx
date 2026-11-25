import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HikeCard({
    id,
    image_url,
    name,
    location,
    distance,
    elevation,
    difficulty
    

}) {
    return (
        <TouchableOpacity
            key={id}
            style={styles.card}
            activeOpacity={0.9}
        >
            <Image
                source={{uri: image_url}}
                style={styles.hikeImage}
            />

            <View style={styles.cardContent}>
                <View style={styles.cardTop}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.hikeName}>
                            {name}
                        </Text>

                        <Text style={styles.location}>
                            📍 {location}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.favoriteButton}>
                        <Text style={styles.favoriteIcon}>♡</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoRow}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoIcon}>↔</Text>
                        <Text style={styles.infoText}>
                            {distance}
                        </Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoIcon}>↗</Text>
                        <Text style={styles.infoText}>
                            {elevation}
                        </Text>
                    </View>

                    <View style={styles.difficultyContainer}>
                        <Text
                            style={[
                                styles.difficulty,
                                difficulty === 'Easy'
                                    ? styles.easy
                                    : difficulty === 'Moderate'
                                        ? styles.moderate
                                        : styles.hard,
                            ]}
                        >
                            {difficulty}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 17,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8E3',
  },

  hikeImage: {
    width: '100%',
    height: 175,
  },

  cardContent: {
    padding: 15,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nameContainer: {
    flex: 1,
    paddingRight: 10,
  },

  hikeName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#25352A',
    marginBottom: 5,
  },

  location: {
    fontSize: 13,
    color: '#7B857D',
  },

  favoriteButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F3F7F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  favoriteIcon: {
    fontSize: 24,
    color: '#3E7B4D',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: '#EDF1ED',
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },

  infoIcon: {
    fontSize: 15,
    color: '#3E7B4D',
    marginRight: 5,
  },

  infoText: {
    fontSize: 13,
    color: '#59645C',
    fontWeight: '500',
  },

  difficultyContainer: {
    marginLeft: 'auto',
  },

  difficulty: {
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },

  easy: {
    color: '#3E7B4D',
    backgroundColor: '#E7F3E9',
  },

  moderate: {
    color: '#A06B19',
    backgroundColor: '#FFF3D9',
  },

  hard: {
    color: '#B34A4A',
    backgroundColor: '#FBE7E7',
  },
})