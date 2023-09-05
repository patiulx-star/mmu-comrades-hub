self.addEventListener('fetch', function(event) {});

self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('beforeinstallprompt', function(event) {
  event.preventDefault();
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block';
  installButton.addEventListener('click', function() {
    event.prompt();
    event.userChoice.then(function(choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      installButton.style.display = 'none';
    });
  });
});
