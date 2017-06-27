# nativescript example

This is my evaluation of using nativescript for enabling access to native android APIs through eval (with javascript)

See for comparison https://github.com/gkovacs/react-native-example - unlike react-native, with nativescript we have access to all the android APIs direct from javascript without manually writing any native code or wrappers.

To set this up I followed the instructions at http://docs.nativescript.org/ - this uses plain nativescript though the angular version should work fine too

Make sure you set the ANDROID_HOME directory properly and make sure you're using build-sdk version 25.0.3 (you will need to downgrade it in android studio if you have 26.0.0 installed)

The specific commmands I used were:

```
tns create nativescript-example
cd nativescript-example
tns prepare andoird
tns debug android
```

The actual logic of interest is in app/main-view-model.js

See also (tools useful for nativescript development)

https://github.com/DeviantJS/awesome-nativescript
