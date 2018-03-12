These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

##Generar APK en macbook

cd /Users/coagus/Proyectos/eComFace/platforms/android/app/build/outputs/apk/release
keytool -genkey -v -keystore ecomface-release-1.keystore -alias ecomface -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ecomface-release-1.keystore app-release-unsigned.apk ecomface
cd /Users/coagus/Library/Android/sdk/build-tools/26.0.2
cp zipalign /Users/coagus/Proyectos/eComFace/platforms/android/app/build/outputs/apk/release
cd /Users/coagus/Proyectos/eComFace/platforms/android/app/build/outputs/apk/release
zipalign -v 4 app-release-unsigned.apk eComFace.apk
