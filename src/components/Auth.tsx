import React from "react";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from "@react-native-google-signin/google-signin";

export default function Auth() {
    GoogleSignin.configure({
        scopes: ["https://www.googleapis.com/auth/drive.readonly"],
        // webClientId: "<>",
        // offlineAccess: true,
        // hostedDomain: "",
        // forceCodeForRefreshToken: true,
        // accountName: "",
        // iosClientId: "<>",
        // googleServicePlistPath: "",µ,
        // openIdRealm: "",
        // profileImageSize: 120,
    });

    return (
        <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={async () => {
                try {
                    await GoogleSignin.hasPlayServices();
                    const userInfo = await GoogleSignin.signIn();
                    console.log(JSON.stringify(userInfo, null, 2));
                } catch (error: any) {
                    if (error.code === statusCodes.SIGN_IN_CANCELLED) {

                    } else if (error.code === statusCodes.IN_PROGRESS) {

                    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

                    } else {

                    }
                }
            }}
        />
    );
}