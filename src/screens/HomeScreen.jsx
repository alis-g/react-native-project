import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import RecommendedRoutes from '../components/RecommendedRoutes';
import { useEffect, useState } from 'react';
import { routesApi } from '../api';
import MapView from 'react-native-maps';

export default function HomeScreen({ navigation }) {
    const [routes, setRoutes] = useState([])
    useEffect(() => {
        routesApi.getAll()
            .then(setRoutes)
            .catch((error) => Alert.alert("Error", error.message))
    }, [])
    return (
        <ScrollView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.smallText}>Good morning 👋</Text>
                    <Text style={styles.title}>Ready for a hike?</Text>
                </View>

                <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileText}>👤</Text>
                </TouchableOpacity>
            </View>

            {/* Start Hike */}
            <TouchableOpacity
                style={styles.startCard}
                onPress={() => navigation.navigate('MountainList')}
            >
                <View>
                    <Text style={styles.startTitle}>🥾 Start a Hike</Text>
                    <Text style={styles.startText}>
                        Find a hiking route near you
                    </Text>
                </View>

                <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>

            {/* Nearby */}
            <View style={styles.sectionHeader}>
                <View>
                    <Text style={styles.sectionTitle}>Nearby</Text>
                    <Text style={styles.sectionSubtitle}>
                        Hiking routes close to you
                    </Text>
                </View>

                <Text style={styles.location}>📍 Near you</Text>
            </View>

            {/* Map placeholder */}
            {/* Map */}
            <View style={styles.mapCard}>
                <MapView style={styles.map} />
            </View>

            {/* Recommended routes */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Recommended routes
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('MountainList')}
                >
                    <Text style={styles.seeAll}>See all</Text>
                </TouchableOpacity>
            </View>

            {routes.slice(0, 3).map((route) => (
                <RecommendedRoutes key={route.id} {...route} />
            ))}


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F7F4',
        padding: 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },

    smallText: {
        fontSize: 14,
        color: '#777',
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1F3D2B',
        marginTop: 4,
    },

    profileButton: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#DCE8DE',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileText: {
        fontSize: 22,
    },

    startCard: {
        backgroundColor: '#315C3B',
        borderRadius: 18,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 28,
    },

    startTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    startText: {
        color: '#DCE8DE',
        marginTop: 6,
    },

    arrow: {
        color: '#FFFFFF',
        fontSize: 28,
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F3D2B',
    },

    sectionSubtitle: {
        color: '#777',
        marginTop: 4,
        fontSize: 13,
    },

    location: {
        color: '#315C3B',
        fontSize: 13,
    },

    mapCard: {
        height: 180,
        backgroundColor: '#DCE8DE',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 28,
    },

    mapIcon: {
        fontSize: 42,
        marginBottom: 8,
    },

    mapTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F3D2B',
    },

    mapText: {
        color: '#777',
        marginTop: 5,
    },
    map: {
        width: '100%',
        height: '100%',
    },

    seeAll: {
        color: '#315C3B',
        fontWeight: '600',
    },


});