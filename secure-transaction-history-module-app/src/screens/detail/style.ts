import { StyleSheet } from "react-native";
import { ScreenDimension } from "../../utils/deviceDimension";

const screenWidth = ScreenDimension.width;

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#cccccc',
        borderWidth: 0.5,
    },
    header: {
        color: 'red',
        fontSize: 50,
        padding: "20%",
        alignSelf: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 0.25,
        paddingVertical: 5,
        borderColor: "#cccccc",
        alignItems:'center',
    },
    borderStart: {
        borderColor: "#cccccc",
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
    },
    borderEnd: {
        borderColor: "#cccccc",
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15
    },
    eyeIcon: {
        fontSize: 30,
        color: 'black',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    icon:{
        paddingHorizontal: 10,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center',
    },
    descIcon:{
        paddingHorizontal: 10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'flex-start',
    },
    amountHeader: {
        width: screenWidth * 0.5,
        alignSelf: 'center',
        fontSize: 21,
        padding: 2,
        paddingLeft: 10,
        paddingVertical: 30,
    },
    detailHeader: {
        color: '#cccccc',
        fontSize: 20,
        padding: 4,
        paddingLeft: 10,
    },
    desc: {
        color: '#000',
        fontSize: 20,
        padding: 4,
        paddingLeft: 10,
    },
    descHeader: {
        color: '#cccccc',
        fontSize: 20,
        padding: 4,
        paddingLeft: 10,
        paddingVertical: 1,
    },
    bigDesc: {
        color: '#000',
        height: 90,
        width: 239,
        fontSize: 20,
        padding: 5,
        paddingLeft: 10,
    },
    button: {
        height: "90%",
        width: screenWidth,
        justifyContent: 'flex-end',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#cccccc',
    }
})