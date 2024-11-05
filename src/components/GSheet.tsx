import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';

import GSheet_logo from '../../assets/G-sheet.svg';

const webClientId = '73273541708-fij0poqv2kih6vm2qmm556pnlhna7l2e.apps.googleusercontent.com'
const iosClientId = '73273541708-t2b6ga5o9t7orn88htsbn6hfe0361k1u.apps.googleusercontent.com'
const androidClientId = '73273541708-4oqh69fjfj51l0nvhggk22sjqh672slg.apps.googleusercontent.com'

WebBrowser.maybeCompleteAuthSession();

const GSheet = () => {
  const token = useState(null);
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: webClientId,
    iosClientId: iosClientId,
    androidClientId: androidClientId,
    scopes: ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const handleToken = () => {
    if (response?.type === 'success') {
        const { authentication } = response;
        const token = authentication?.accessToken;
        console.log('access token', token)
  }}

  useEffect(() => {
    handleToken();
  }, [response]);

  // Fonction pour accéder aux données Google Sheets
  const fetchGoogleSheetData = async () => {
    if (token) {
      try {
        const sheetId = 'TON_GOOGLE_SHEET_ID'; // ID de la feuille de calcul
        const range = 'Feuille1!A1:D5'; // Plage de cellules à récupérer
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}`;
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        console.log(data); // Afficher les données de la feuille Google Sheets
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={ styles.container }>
      {/* {!token ? (
        <Button title="Se connecter à Google" disabled={!request} onPress={() => promptAsync()} />
      ) : (
        <Button title="Récupérer les données Google Sheets" onPress={fetchGoogleSheetData} />
      )} */}
      <Button title="Se connecter à Google" disabled={!request} onPress={() => promptAsync()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
    }
});

export default GSheet;