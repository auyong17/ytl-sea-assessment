import { StyleSheet } from "react-native";
import { ScreenDimension } from "../../utils/deviceDimension";

const screenWidth = ScreenDimension.width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 17,
    },
    button: {
        width: 210,
        alignSelf: 'center',
        backgroundColor: '#03b97e',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 6
    },
    cardView: {
        height: 220,
        justifyContent: 'center',
        paddingBottom: 5,
    },
    refreshView: {
        flex: 1,
        width: screenWidth,
        alignItems: 'center',
    },
    imageSize: {
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',    
    },
    cardHeaderView: {
        width: 310,
    },
    cardHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingVertical: 10,
    },
    scrollViewIndex: {
        borderColor: 'blue',
        borderWidth: 3,
        alignItems: 'center'

    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    pressableView: {
        padding: 2.5,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: '#cccccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: 'black',
    },
    transactionHistoryViewHeader: {
        width: 310,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 10 
    },
    transactionHistoryHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingVertical: 10,
    },
    eyeIconContainer: {
        justifyContent: 'center',
        paddingRight: 9
    },
    eyeIcon: {
        fontSize: 24,
        color: 'black',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    transactionHistoryContainerView: {
        width: screenWidth,
        alignItems: 'center',
    }
})