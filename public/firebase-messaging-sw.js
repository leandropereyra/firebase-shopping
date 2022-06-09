importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCAqTuEdp8T7mj3GVKYKafWshwy7pNru64",
  authDomain: "fir-shopping-ae027.firebaseapp.com",
  projectId: "fir-shopping-ae027",
  storageBucket: "fir-shopping-ae027.appspot.com",
  messagingSenderId: "426787330823",
  appId: "1:426787330823:web:4a984203b492ca853b03a2",
});

const messaging = firebase.messaging();

// ****El siguiente código es para que sea gestionado desde nuestra pagina. Sin este código, se puede enviar mensajes desde Firebase Cloud Messaging *****//

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Título de la notificación';
//     const notificationOptions = {
//       body: 'Cuerpo del mensaje.',
//       icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfn8wcaW5x3FDK9MTUy6QmWm54n39HQGr_Q&usqp=CAU'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });