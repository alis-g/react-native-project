import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

export default function StartHikeScreen({ navigation, route }) {
    const hike = route?.params?.hike;

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color="#222"
                    />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Start Hike</Text>

                <View style={{ width: 40 }} />
            </View>

            {/* Route */}
            <View style={styles.routeCard}>
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="footsteps-outline"
                        size={42}
                        color="#315C3B"
                    />
                </View>

                <Text style={styles.title}>
                    {hike?.name || 'Selected Hike'}
                </Text>

                <Text style={styles.location}>
                    <Ionicons
                        name="location-outline"
                        size={16}
                        color="#777"
                    />{' '}
                    {hike?.location || 'Mountain route'}
                </Text>
            </View>

            {/* Stats */}
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Ionicons
                        name="walk-outline"
                        size={24}
                        color="#315C3B"
                    />
                    <Text style={styles.statValue}>
                        {hike?.distance_km || '--'} km
                    </Text>
                    <Text style={styles.statLabel}>Distance</Text>
                </View>

                <View style={styles.stat}>
                    <Ionicons
                        name="time-outline"
                        size={24}
                        color="#315C3B"
                    />
                    <Text style={styles.statValue}>
                        {hike?.duration_hours || '--'} h
                    </Text>
                    <Text style={styles.statLabel}>Duration</Text>
                </View>

                <View style={styles.stat}>
                    <Ionicons
                        name="trending-up-outline"
                        size={24}
                        color="#315C3B"
                    />
                    <Text style={styles.statValue}>
                        {hike?.elevation_gain_m || '--'} m
                    </Text>
                    <Text style={styles.statLabel}>Elevation</Text>
                </View>
            </View>

            {/* Difficulty */}
            <View style={styles.infoCard}>
                <Text style={styles.sectionTitle}>Difficulty</Text>

                <View style={styles.difficultyRow}>
                    <View style={styles.difficultyIcon}>
                        <Ionicons
                            name="barbell-outline"
                            size={22}
                            color="#315C3B"
                        />
                    </View>

                    <Text style={styles.difficultyText}>
                        {hike?.difficulty || 'Unknown'}
                    </Text>
                </View>
            </View>

            {/* Description */}
            <View style={styles.infoCard}>
                <Text style={styles.sectionTitle}>About this hike</Text>

                <Text style={styles.description}>
                    {hike?.description ||
                        'Get ready for your mountain adventure. Make sure you have enough water, proper hiking shoes and check the weather before starting.'}
                </Text>
            </View>

            {/* Start Button */}
            <TouchableOpacity
                style={styles.startButton}
                onPress={() => {
                    // тук по-късно ще стартираме GPS tracking
                }}
            >
                <Ionicons
                    name="play"
                    size={22}
                    color="#FFFFFF"
                />

                <Text style={styles.startButtonText}>
                    Start Hike
                </Text>
            </TouchableOpacity>

            <View style={{ height: 30 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8F6',
    },

    header: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#222',
    },

    routeCard: {
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
    },

    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#E8F0E9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },

    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#222',
        textAlign: 'center',
    },

    location: {
        marginTop: 8,
        fontSize: 15,
        color: '#777',
    },

    statsContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 20,
        paddingVertical: 20,
    },

    stat: {
        flex: 1,
        alignItems: 'center',
    },

    statValue: {
        marginTop: 7,
        fontSize: 16,
        fontWeight: '700',
        color: '#222',
    },

    statLabel: {
        marginTop: 3,
        fontSize: 12,
        color: '#888',
    },

    infoCard: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginTop: 16,
        borderRadius: 20,
        padding: 20,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#222',
        marginBottom: 15,
    },

    difficultyRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    difficultyIcon: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#E8F0E9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },

    difficultyText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#315C3B',
    },

    description: {
        fontSize: 15,
        lineHeight: 23,
        color: '#666',
    },

    startButton: {
        marginHorizontal: 20,
        marginTop: 24,
        height: 58,
        borderRadius: 18,
        backgroundColor: '#315C3B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    startButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
});