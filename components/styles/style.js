import{
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    gridView: {
      marginTop: 30,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'center',
      borderRadius: 50,
      padding: 10,
      height: 150,
      backgroundColor: '#FFBC00'
    },
    itemName: {
      fontSize: 20,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    btnTextColor:{
      color: '#fff',
    }
  });

  export default styles;