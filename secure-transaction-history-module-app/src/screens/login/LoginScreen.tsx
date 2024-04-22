import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigation = useNavigation();
    
    const authenticateWithBiometrics = async () => {
        try {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate to access the app'
        });
    
        if (result.success) {
            console.log('Authentication successful');
            navigation.navigate('Home');
            setIsAuthenticated(true);
        } else {
            console.log('Authentication failed');
        }
        
        } catch (error) {
        console.error('Authentication error:', error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
        navigation.navigate("Home", { isAuthenticated });
        }
    }, [isAuthenticated]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={authenticateWithBiometrics} style={styles.button} activeOpacity={0.7}>
                <Text style={styles.text}>
                    Login with biometric!
                </Text>
                <MaterialIcons name="fingerprint" style={styles.icon} size={24} color="black" />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 235,
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 6
    },
    icon: {
        color: '#fff'
    }
})