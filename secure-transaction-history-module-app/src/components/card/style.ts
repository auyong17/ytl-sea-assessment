import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
      width: 300,
      height: 180,
      borderRadius: 15,
      padding: 20,
      justifyContent: 'space-between',
    },
    cardTop: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    cardType: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    cardMiddle: {},
    cardNumber: {
      fontSize: 20,
      color: 'white',
      letterSpacing: 2,
      marginBottom: 10,
    },
    cardDate: {
      fontSize: 14,
      color: 'white',
      alignSelf: 'center'
    },
    cardBottom: {
      width: 200,
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardHolder: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    cardHolderTitle: {
      fontSize: 10,
      color: 'white',
    },
    cardHolderName: {
      fontSize: 16,
      color: 'white',
    },
    cardExpiry: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    cardExpiryTitle: {
      fontSize: 10,
      color: 'white',
    },
    cardExpiryDate: {
      fontSize: 16,
      color: 'white',
    },
});
  
  