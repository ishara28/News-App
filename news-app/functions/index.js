const functions = require("firebase-functions");
const admin = require("firebase-admin");
// initializes your application
admin.initializeApp(functions.config().firebase);

exports.listProducts = functions.https.onCall((data, context) => {
  // ...
});

exports.sendPushNotification = functions.firestore
  .document("news/{newsId}")
  .onCreate((event) => {
    console.log("Tr");
  });
