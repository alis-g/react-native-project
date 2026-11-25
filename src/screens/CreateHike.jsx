import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CreateHikeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Create Hike</Text>

      <Text style={styles.subtitle}>
        Add a new hiking route for other hikers to discover.
      </Text>

      <View style={styles.form}>
        {/* PHOTO */}

        <Text style={styles.label}>Hike Photo</Text>

        <View style={styles.photoArea}>
          <Text style={styles.photoIcon}>📷</Text>

          <Text style={styles.photoTitle}>
            Add a photo
          </Text>

          <Text style={styles.photoSubtitle}>
            Take a photo or choose one from your gallery
          </Text>

          <View style={styles.photoButtons}>
            <TouchableOpacity style={styles.photoButton}>
              <Text style={styles.photoButtonIcon}>📷</Text>
              <Text style={styles.photoButtonText}>Take Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.photoButton}>
              <Text style={styles.photoButtonIcon}>🖼️</Text>
              <Text style={styles.photoButtonText}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BASIC INFO */}

        <Text style={styles.label}>Hike Name</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Seven Rila Lakes"
          placeholderTextColor="#9AA39C"
        />

        <Text style={styles.label}>Mountain</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Rila"
          placeholderTextColor="#9AA39C"
        />

        <Text style={styles.label}>Description</Text>

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe the hiking route..."
          placeholderTextColor="#9AA39C"
          multiline
          textAlignVertical="top"
        />

        {/* LOCATION */}

        <Text style={styles.sectionTitle}>Location</Text>

        <Text style={styles.sectionSubtitle}>
          Search for the hike location or select it on the map.
        </Text>

        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search for a place..."
            placeholderTextColor="#9AA39C"
          />
        </View>

        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapIcon}>📍</Text>

          <Text style={styles.mapTitle}>
            Select location on map
          </Text>

          <Text style={styles.mapSubtitle}>
            Choose the exact starting point of the hike
          </Text>

          <TouchableOpacity style={styles.mapButton}>
            <Text style={styles.mapButtonText}>
              Open Map
            </Text>
          </TouchableOpacity>
        </View>

        {/* DETAILS */}

        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>Distance (km)</Text>

            <TextInput
              style={styles.input}
              placeholder="8.5"
              placeholderTextColor="#9AA39C"
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.half}>
            <Text style={styles.label}>Duration (hours)</Text>

            <TextInput
              style={styles.input}
              placeholder="3.5"
              placeholderTextColor="#9AA39C"
              keyboardType="decimal-pad"
            />
          </View>
        </View>

        <Text style={styles.label}>Difficulty</Text>

        <View style={styles.difficultyRow}>
          <TouchableOpacity style={styles.difficultyButton}>
            <Text style={styles.difficultyText}>Easy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.difficultyButton}>
            <Text style={styles.difficultyText}>Medium</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.difficultyButton}>
            <Text style={styles.difficultyText}>Hard</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Elevation Gain (m)</Text>

        <TextInput
          style={styles.input}
          placeholder="420"
          placeholderTextColor="#9AA39C"
          keyboardType="numeric"
        />

        {/* CREATE */}

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>
            Create Hike
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F5',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#25352A',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#7B857D',
    marginTop: 6,
    marginBottom: 25,
    lineHeight: 20,
  },

  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8E3',
  },

  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#354238',
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDE5DE',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#25352A',
    backgroundColor: '#FAFCFA',
  },

  textArea: {
    height: 110,
    paddingTop: 13,
  },

  photoArea: {
    height: 210,
    borderWidth: 1.5,
    borderColor: '#C9D8CC',
    borderStyle: 'dashed',
    borderRadius: 16,
    backgroundColor: '#F8FBF8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  photoIcon: {
    fontSize: 38,
    marginBottom: 8,
  },

  photoTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#25352A',
  },

  photoSubtitle: {
    fontSize: 12,
    color: '#89938B',
    marginTop: 5,
    textAlign: 'center',
  },

  photoButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },

  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#E7F1E8',
  },

  photoButtonIcon: {
    fontSize: 16,
    marginRight: 6,
  },

  photoButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3E7B4D',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#25352A',
    marginTop: 25,
    marginBottom: 5,
  },

  sectionSubtitle: {
    fontSize: 12,
    color: '#89938B',
    marginBottom: 12,
  },

  searchContainer: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDE5DE',
    borderRadius: 12,
    backgroundColor: '#FAFCFA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  searchIcon: {
    fontSize: 17,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#25352A',
  },

  mapPlaceholder: {
    height: 180,
    marginTop: 12,
    borderRadius: 16,
    backgroundColor: '#EAF1EA',
    borderWidth: 1,
    borderColor: '#D5E0D6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapIcon: {
    fontSize: 30,
    marginBottom: 6,
  },

  mapTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#25352A',
  },

  mapSubtitle: {
    fontSize: 12,
    color: '#7B857D',
    marginTop: 4,
  },

  mapButton: {
    marginTop: 12,
    paddingHorizontal: 18,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#3E7B4D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  row: {
    flexDirection: 'row',
    gap: 12,
  },

  half: {
    flex: 1,
  },

  difficultyRow: {
    flexDirection: 'row',
    gap: 10,
  },

  difficultyButton: {
    flex: 1,
    height: 45,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDE5DE',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFCFA',
  },

  difficultyText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#59645C',
  },

  createButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#3E7B4D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },

  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});