import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
      color: 'white',
  },
  menuIconArrow: {
    color: '#4d4d4e',
  },
  menuTextBox: {
    flexGrow: 1,
    color: 'white',
  },
  menuText: {
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  menuTextSub: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 14,
    color: '#4d4d4e',
  },
})

export default styles
