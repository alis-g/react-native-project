import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default function InfoScreen() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.title}>About MountainMate 🏔️</Text>

            <Text style={styles.description}>
                MountainMate is your personal hiking companion.
                Discover new routes, track your hikes and keep
                your mountain adventures in one place.
            </Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>🥾 Discover Routes</Text>

                <Text style={styles.cardText}>
                    Explore mountains and hiking routes with useful
                    information such as distance, difficulty and
                    elevation.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>📍 Track Your Hike</Text>

                <Text style={styles.cardText}>
                    Start a hike and use your location to keep track
                    of your progress while exploring the mountains.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>❤️ Save Favorites</Text>

                <Text style={styles.cardText}>
                    Save your favorite routes and easily find them
                    whenever you want to go hiking again.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>📊 Track Your Progress</Text>

                <Text style={styles.cardText}>
                    Keep a history of your hikes and see your total
                    distance, completed hikes and elevation.
                </Text>
            </View>

            <View style={styles.tipCard}>
                <Text style={styles.tipTitle}>💡 Hiking Tip</Text>

                <Text style={styles.tipText}>
                    Always check the weather before starting a hike
                    and make sure you have enough water and suitable
                    equipment.
                </Text>
            </View>

            <Text style={styles.version}>
                MountainMate • Version 1.0
            </Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F7F4',
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F3D2B',
        marginBottom: 15,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#666',
        marginBottom: 25,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 18,
        marginBottom: 15,
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#315C3B',
        marginBottom: 8,
    },

    cardText: {
        fontSize: 14,
        lineHeight: 21,
        color: '#666',
    },

    tipCard: {
        backgroundColor: '#DCE8DE',
        borderRadius: 16,
        padding: 18,
        marginTop: 10,
    },

    tipTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#315C3B',
        marginBottom: 8,
    },

    tipText: {
        fontSize: 14,
        lineHeight: 21,
        color: '#4F5F51',
    },

    version: {
        textAlign: 'center',
        color: '#999',
        fontSize: 12,
        marginVertical: 25,
    },
});