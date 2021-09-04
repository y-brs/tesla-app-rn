import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMusic, faChevronRight, faClock, faThermometerHalf, faCar, faBolt, faMapMarkerAlt, faShoppingBag, faWrench, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import styles from './styles'
import items from '../../dummyData'

export const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map(item => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon icon={item.icon} style={styles.menuIcon} size={24} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.menuTextSub}>{item.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon icon={ faChevronRight } style={styles.menuIconArrow} size={24} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}
