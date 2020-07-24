import {
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
  btnTextColor: {
    color: '#fff',
  },
  /**
   * Calc Components Style
   */
  calcContainer: {  //계산기 컨테이너
    padding: 16,
    flex: 1
  },
  calcDescriptionStyle: { //계산기 설명 부분
    backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15, borderWidth:2
  }
});

export default styles;