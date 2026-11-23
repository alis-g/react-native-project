import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native'; 
import Ionicons from '@react-native-vector-icons/ionicons';

export default function MyHikesScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>My Hikes</Text>
                    <Text style={styles.subtitle}>
                        Your mountain adventures
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddHike')}
                >
                    <Ionicons
                        name="add"
                        size={28}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
            </View>

            {/* Stats */}
            <View style={styles.statsContainer}>

                <View style={styles.stat}>
                    <Text style={styles.statNumber}>12</Text>
                    <Text style={styles.statText}>Hikes</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.statNumber}>87</Text>
                    <Text style={styles.statText}>KM</Text>
                </View>

                <View style={styles.stat}>
                    <Text style={styles.statNumber}>4.3k</Text>
                    <Text style={styles.statText}>Elevation</Text>
                </View>

            </View>

            <Text style={styles.sectionTitle}>Recent Hikes</Text>

            {/* Hike 1 */}
            <TouchableOpacity style={styles.hikeCard}>
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="footsteps-outline"
                        size={28}
                        color="#315C3B"
                    />
                </View>

                <View style={styles.hikeInfo}>
                    <Text style={styles.hikeTitle}>Cherni Vrah</Text>
                    <Text style={styles.hikeLocation}>
                        📍 Vitosha Mountain
                    </Text>

                    <View style={styles.details}>
                        <Text style={styles.detail}>🥾 8.4 km</Text>
                        <Text style={styles.detail}>⏱️ 3h 20m</Text>
                    </View>
                </View>

                <Ionicons
                    name="chevron-forward"
                    size={22}
                    color="#999"
                />
            </TouchableOpacity>

            {/* Hike 2 */}
            <TouchableOpacity style={styles.hikeCard}>
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="footsteps-outline"
                        size={28}
                        color="#315C3B"
                    />
                </View>

                <View style={styles.hikeInfo}>
                    <Text style={styles.hikeTitle}>Musala</Text>
                    <Text style={styles.hikeLocation}>
                        📍 Rila Mountain
                    </Text>

                    <View style={styles.details}>
                        <Text style={styles.detail}>🥾 12.1 km</Text>
                        <Text style={styles.detail}>⏱️ 4h 20m</Text>
                    </View>
                </View>

                <Ionicons
                    name="chevron-forward"
                    size={22}
                    color="#999"
                />
            </TouchableOpacity>

            {/* Hike 3 */}
            <TouchableOpacity style={styles.hikeCard}>
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="footsteps-outline"
                        size={28}
                        color="#315C3B"
                    />
                </View>

                <View style={styles.hikeInfo}>
                    <Text style={styles.hikeTitle}>Vihren</Text>
                    <Text style={styles.hikeLocation}>
                        📍 Pirin Mountain
                    </Text>

                    <View style={styles.details}>
                        <Text style={styles.detail}>🥾 10.2 km</Text>
                        <Text style={styles.detail}>⏱️ 4h 05m</Text>
                    </View>
                </View>

                <Ionicons
                    name="chevron-forward"
                    size={22}
                    color="#999"
                />
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

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F3D2B',
    },

    subtitle: {
        color: '#777',
        marginTop: 5,
    },

    addButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#315C3B',
        justifyContent: 'center',
        alignItems: 'center',
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },

    stat: {
        backgroundColor: '#FFFFFF',
        width: '31%',
        paddingVertical: 18,
        borderRadius: 14,
        alignItems: 'center',
    },

    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#315C3B',
    },

    statText: {
        fontSize: 12,
        color: '#777',
        marginTop: 5,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F3D2B',
        marginBottom: 12,
    },

    hikeCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconContainer: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#DCE8DE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },

    hikeInfo: {
        flex: 1,
    },

    hikeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F3D2B',
    },

    hikeLocation: {
        color: '#777',
        fontSize: 13,
        marginTop: 4,
    },

    details: {
        flexDirection: 'row',
        marginTop: 8,
        gap: 15,
    },

    detail: {
        color: '#555',
        fontSize: 13,
    },
});