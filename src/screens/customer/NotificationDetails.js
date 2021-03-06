import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import _ from 'lodash';
var {height, width} = Dimensions.get('screen');

class NotificationDetails extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <Text
            style={
              styles.notificationText
            }>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
  },
  notificationText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    padding: 8,
    margin: 15,
    textAlign: 'justify',
  },
});

export default NotificationDetails;
