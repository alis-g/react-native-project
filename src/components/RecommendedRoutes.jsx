import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";


export default function RecommendedRoutes({
    image_url,
    name,
    location,

}) {

    return (
        <TouchableOpacity
            style={styles.routeCard}
            onPress={() =>
                navigation.navigate('MountainDetails', {
                    mountainId: 'chernivrah',
                })
            }
        >
            <View style={styles.routeIcon}>
                <Text style={styles.mountainIcon}>{image_url}</Text>
            </View>

            <View style={styles.routeInfo}>
                <Text style={styles.routeTitle}>{name}</Text>
                <Text style={styles.routeLocation}>
                    {location}
                </Text>

                <View style={styles.routeDetails}>
                    <Text style={styles.detail}>🥾 8.4 km</Text>
                    <Text style={styles.detail}>⏱️ 3h 20m</Text>
                </View>
            </View>

            <Text style={styles.distance}>3.2 km</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
})