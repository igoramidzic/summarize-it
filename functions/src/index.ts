import * as functions from 'firebase-functions';

// Firebase
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);


// Cloud Vision
import * as vision from '@google-cloud/vision';
const visionClient =  new vision.ImageAnnotatorClient();

// Dedicated bucket for cloud function invocation
const bucketName = 'photo12321';

export const imageTagger = functions.storage

  .bucket(bucketName)
  .object()
  .onChange( async event => {

    // File data
    const object = event.data;
    const filePath = object.name;

    // Location of saved file in bucket
    const imageUri = `gs://${bucketName}/${filePath}`;

    const docId = filePath.split('.jpeg')[0];

    const docRef  = admin.firestore().collection('photos').doc(docId);

    console.log("Hello world!");
    // Await the cloud vision response
    const results = await visionClient.labelDetection(imageUri);

    // Map the data to desired format
    const labels = results[0].labelAnnotations.map(obj => obj.description);


    return docRef.set({ labels })
  });
