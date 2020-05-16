const functions = require("firebase-functions");
const admin = require("firebase-admin");
var fetch = require("node-fetch");
admin.initializeApp();

exports.sendFollowerNotification = functions.database
  .ref("/news/{newsId}/")
  .onCreate(async (change, context) => {
    console.log("It is working yeah!!!");
    // await admin.messaging().sendMulticast({
    //   tokens: [
    //     "ExponentPushToken[czSwidLuAyGoEL8jnrJ7pN]",
    //     "ExponentPushToken[JQ8VecIOyjFNwMf5EIXOJW]",
    //   ],
    //   notification: {
    //     title: "Basic Notification",
    //     body: "This is a basic notification sent from the server!",
    //     imageUrl: "https://my-cdn.com/app-logo.png",
    //   },
    // });

    var messages = [];

    //return the main promise
    return admin
      .database()
      .ref()
      .child("/users")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var expoToken = childSnapshot.val().expoToken;

          messages.push({
            to: expoToken,
            sound: "default",
            body: "New Note Added",
            
          });
        });
        //firebase.database then() respved a single promise that resolves
        //once all the messages have been resolved
        return Promise.all(messages);
      })
      .then((messages) => {
        console.log(messages);
        return fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            host: "exp.host",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messages),
        });
      })
      .catch((reason) => {
        console.log(reason);
      });

    // const followerUid = context.params.followerUid;
    // const followedUid = context.params.followedUid;
    // If un-follow we exit the function.
    // if (!change.after.val()) {
    //   return console.log("User ", followerUid, "un-followed user", followedUid);
    // }
    // console.log(
    //   "We have a new follower UID:",
    //   followerUid,
    //   "for user:",
    //   followedUid
    // );

    // // Get the list of device notification tokens.
    // const getDeviceTokensPromise = admin
    //   .database()
    //   .ref(`/users/${followedUid}/notificationTokens`)
    //   .once("value");

    // // Get the follower profile.
    // const getFollowerProfilePromise = admin.auth().getUser(followerUid);

    // // The snapshot to the user's tokens.
    // let tokensSnapshot;

    // // The array containing all the user's tokens.
    // let tokens;

    // const results = await Promise.all([
    //   getDeviceTokensPromise,
    //   getFollowerProfilePromise,
    // ]);
    // tokensSnapshot = results[0];
    // const follower = results[1];

    // // Check if there are any device tokens.
    // if (!tokensSnapshot.hasChildren()) {
    //   return console.log("There are no notification tokens to send to.");
    // }
    // console.log(
    //   "There are",
    //   tokensSnapshot.numChildren(),
    //   "tokens to send notifications to."
    // );
    // console.log("Fetched follower profile", follower);

    // // Notification details.
    // const payload = {
    //   notification: {
    //     title: "You have a new follower!",
    //     body: `${follower.displayName} is now following you.`,
    //     icon: follower.photoURL,
    //   },
    // };

    // // Listing all tokens as an array.
    // tokens = Object.keys(tokensSnapshot.val());
    // // Send notifications to all tokens.
    // const response = await admin.messaging().sendToDevice(tokens, payload);
    // // For each message check if there was an error.
    // const tokensToRemove = [];
    // response.results.forEach((result, index) => {
    //   const error = result.error;
    //   if (error) {
    //     console.error("Failure sending notification to", tokens[index], error);
    //     // Cleanup the tokens who are not registered anymore.
    //     if (
    //       error.code === "messaging/invalid-registration-token" ||
    //       error.code === "messaging/registration-token-not-registered"
    //     ) {
    //       tokensToRemove.push(tokensSnapshot.ref.child(tokens[index]).remove());
    //     }
    //   }
    // });
    // return Promise.all(tokensToRemove);
  });
