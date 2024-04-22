import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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