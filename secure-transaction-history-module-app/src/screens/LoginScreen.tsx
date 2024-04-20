import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen() {
    const navigation = useNavigation();
    const goToHome = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Text> Login Page </Text>
            <TouchableOpacity onPress={goToHome} style={styles.button} activeOpacity={0.7}>
                <Text style={styles.text}>
                    Go to Homepage
                </Text>
            </TouchableOpacity>
        <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        color: '#fff',
        fontSize: 17,
    },
    button: {
        backgroundColor: '#03b97e',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 6
    }
})