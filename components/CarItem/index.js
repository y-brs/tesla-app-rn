import React, { useState } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faUnlockAlt, faLock } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '../Menu'
import styles from './styles'

export const CarItem = () => {
  const [locked, setLocked] = useState(true)

  const handleLoc = () => {
    if(locked) {
      setLocked(false)
    } else {
      setLocked(true)
    }
  }

  return (
    <View style={styles.containerCar}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
      />

      <View style={styles.sectionHeader}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={ faCog } style={styles.headerIcon} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Tesla</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={ faToolbox } style={styles.headerIcon} size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionBattery}>
        <Image
          source={require('../../assets/battery.png')}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>180 km</Text>
      </View>

      <View style={styles.sectionStatus}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      <ScrollView>
        <View style={styles.sectionControls}>
          <TouchableOpacity>
            <View style={styles.controlButton}>
              <FontAwesomeIcon icon={ faFan } style={styles.controlIcon} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlButton}>
              <FontAwesomeIcon icon={ faKey } style={styles.controlIcon} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLoc}
          >
            <View style={styles.controlButton}>
              <FontAwesomeIcon icon={locked ? faLock : faUnlockAlt} style={styles.controlIcon} size={24} />
            </View>
          </TouchableOpacity>
        </View>

        <Menu />
      </ScrollView>
    </View>
  )
}
