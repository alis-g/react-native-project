import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
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
            <View style={styles.mapCard}>
                <Text style={styles.mapIcon}>🗺️</Text>
                <Text style={styles.mapTitle}>Your location</Text>
                <Text style={styles.mapText}>
                    Nearby hiking routes will appear here
                </Text>
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

            {/* Route 1 */}
            <TouchableOpacity
                style={styles.routeCard}
                onPress={() =>
                    navigation.navigate('MountainDetails', {
                        mountainId: 'chernivrah',
                    })
                }
            >
                <View style={styles.routeIcon}>
                    <Text style={styles.mountainIcon}>🏔️</Text>
                </View>

                <View style={styles.routeInfo}>
                    <Text style={styles.routeTitle}>Cherni Vrah</Text>
                    <Text style={styles.routeLocation}>
                        📍 Vitosha Mountain
                    </Text>

                    <View style={styles.routeDetails}>
                        <Text style={styles.detail}>🥾 8.4 km</Text>
                        <Text style={styles.detail}>⏱️ 3h 20m</Text>
                    </View>
                </View>

                <Text style={styles.distance}>3.2 km</Text>
            </TouchableOpacity>

            {/* Route 2 */}
            <TouchableOpacity
                style={styles.routeCard}
                onPress={() =>
                    navigation.navigate('MountainDetails', {
                        mountainId: 'boyana',
                    })
                }
            >
                <View style={styles.routeIcon}>
                    <Text style={styles.mountainIcon}>🏔️</Text>
                </View>

                <View style={styles.routeInfo}>
                    <Text style={styles.routeTitle}>Boyana Waterfall</Text>
                    <Text style={styles.routeLocation}>
                        📍 Vitosha Mountain
                    </Text>

                    <View style={styles.routeDetails}>
                        <Text style={styles.detail}>🥾 5.7 km</Text>
                        <Text style={styles.detail}>⏱️ 2h 10m</Text>
                    </View>
                </View>

                <Text style={styles.distance}>5.8 km</Text>
            </TouchableOpacity>

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

    seeAll: {
        color: '#315C3B',
        fontWeight: '600',
    },

    routeCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    routeIcon: {
        width: 55,
        height: 55,
        borderRadius: 28,
        backgroundColor: '#DCE8DE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },

    mountainIcon: {
        fontSize: 26,
    },

    routeInfo: {
        flex: 1,
    },

    routeTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1F3D2B',
    },

    routeLocation: {
        color: '#777',
        fontSize: 13,
        marginTop: 4,
    },

    routeDetails: {
        flexDirection: 'row',
        marginTop: 7,
        gap: 12,
    },

    detail: {
        color: '#555',
        fontSize: 12,
    },

    distance: {
        color: '#315C3B',
        fontWeight: 'bold',
        fontSize: 12,
    },
});