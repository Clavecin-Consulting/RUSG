import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import GSheet from '../components/GSheet';
import Auth from '../components/Auth';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image 
        style= { styles.logo }
        source={ require('../../assets/rusg.png') } 
      />
        <View style={ styles.text }>
          <Text style={{marginBottom:10}}>Bienvenu sur USG Volunteers !</Text>
          <Text style={{marginBottom:10}}>Veuillez selectionner les Google Sheet adéquat dans l'espace prévu ci-dessous.</Text>
          <Text style={{marginBottom:10}}>Ensuite, cocher les personnes présentes dans le menu de droite. Une fois terminé, téléchargez le document dans le menu de gauche.</Text>
        </View>
        <View style={ styles.sheet }>
          <Auth />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  text: {
    width: 300,
  },
  sheet: {
    paddingTop: 50,
    height: 100,
  }
});

export default Home;