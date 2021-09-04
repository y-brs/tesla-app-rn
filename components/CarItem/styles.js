import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerCar: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  sectionHeader: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerIcon: {
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  sectionBattery: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12,
  },
  batteryText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  sectionStatus: {
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 175,
  },
  controlButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 18,
    marginLeft: 15,
    marginRight: 15,
  },
  controlIcon: {
    color: 'white',
  },
})

export default styles
