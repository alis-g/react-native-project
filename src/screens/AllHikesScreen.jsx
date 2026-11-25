import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import HikeCard from '../components/HikeCard';
import { useEffect, useState } from 'react';
import { routesApi } from '../api';

export default function AllHikesScreen() {
  
    const [hikes, setHikes] = useState([])

    useEffect(()=>{
        routesApi.getAll()
        .then(setHikes)
            .catch((error) => Alert.alert("Error", error.message))
    },[])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>All Hikes</Text>
          <Text style={styles.subtitle}>
            Discover your next adventure
          </Text>
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>☷</Text>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>⌕</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search hikes..."
          placeholderTextColor="#9AA39B"
        />
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersScroll}
        contentContainerStyle={styles.filters}
      >
        <TouchableOpacity style={styles.activeFilter}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>Easy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>Moderate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>Hard</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Results */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>Popular hikes</Text>
        <Text style={styles.resultsCount}>{hikes.length} hikes</Text>
      </View>

      {/* Hike Cards */}
      {hikes.map(hike => ( 
        <HikeCard key={hike.id} {...hike} /> 
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F4',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#23412D',
  },

  subtitle: {
    fontSize: 14,
    color: '#7B857D',
    marginTop: 4,
  },

  filterButton: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE3DD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterIcon: {
    fontSize: 24,
    color: '#3E7B4D',
    fontWeight: '600',
  },

  searchContainer: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCE3DD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  searchIcon: {
    fontSize: 25,
    color: '#7B857D',
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#25352A',
  },

  filtersScroll: {
    marginHorizontal: -20,
  },

  filters: {
    paddingHorizontal: 20,
    gap: 10,
    paddingBottom: 5,
  },

  filter: {
    paddingHorizontal: 18,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE3DD',
    justifyContent: 'center',
  },

  activeFilter: {
    paddingHorizontal: 20,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#3E7B4D',
    justifyContent: 'center',
  },

  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#667169',
  },

  activeFilterText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 12,
  },

  resultsTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#23412D',
  },

  resultsCount: {
    fontSize: 13,
    color: '#8A948D',
  },

});
