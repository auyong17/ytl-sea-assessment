import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollableContainer: {
      width: 320,
      borderColor: '#cccccc',
      borderWidth: 0.25,
  
      borderRadius: 10,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10
    },
    container: {
      width: 308,
      flexDirection: 'row',
      justifyContent:'space-between',
      borderColor: 'black',
      // borderWidth: 0.5,
    },
    historyDetail: {
      borderColor: 'black',
      // borderWidth: 0.5,
      justifyContent: 'space-evenly'
    },
    description: {
      fontSize: 16,
      fontWeight: 'bold', 
      borderColor: 'black',
      // borderWidth: 1.5,
    },
    date: {
      color: '#cccccc',
      borderColor: 'black',
      // borderWidth: 1.5,
    },
    amountView:{
      height: 50,
      width: 130,
      justifyContent:'center',
      alignSelf:'flex-end',
      paddingRight: 10,
      borderColor: 'black',
      // borderWidth: 0.5,
    },
    amount:{
      textAlign:'right',
    },
  });