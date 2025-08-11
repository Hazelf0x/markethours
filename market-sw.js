/*
  Service Worker for MarketHours
  - Lightweight worker that enables showNotification from the registration,
    handles push events (if you add Push later), and responds to notificationclick.
  - Note: Scheduling notifications while the page is closed requires a push
    service or browser-specific background APIs. This worker improves delivery
    when available and handles clicks/opens.
*/

self.addEventListener('install', (event) => {
  // Activate worker immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of uncontrolled clients as soon as possible
  event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = '/'; // adjust if you have a specific URL to open
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // If a client is already open, focus it.
      for (const client of windowClients) {
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise open a new window/tab
      if (self.clients.openWindow) {
        return self.clients.openWindow(urlToOpen);
      }
    })
  );
});

self.addEventListener('notificationclose', (event) => {
  // Optional: handle analytics or cleanup when a user dismisses the notification
  // console.log('Notification was closed', event.notification.tag);
});

// Support for push messages (optional — you'll need a push service to use this)
self.addEventListener('push', (event) => {
  let payload = { title: 'Market Update', body: 'An update from Market Hours', tag: 'market' };
  try {
    if (event.data) {
      payload = event.data.json();
    }
  } catch (err) {
    // Non-JSON payloads
    payload = { title: 'Market Update', body: event.data ? String(event.data) : payload.body, tag: 'market' };
  }

  const options = {
    body: payload.body,
    tag: payload.tag || 'market',
    renotify: true,
    requireInteraction: false,
    silent: false
  };

  event.waitUntil(self.registration.showNotification(payload.title, options));
});

// Allow pages to ask the SW to show a notification via postMessage
// Example from page: navigator.serviceWorker.controller.postMessage({ type: 'SHOW_NOTIFICATION', title, options });
self.addEventListener('message', (event) => {
  try {
    const data = event.data || {};
    if (data && data.type === 'SHOW_NOTIFICATION') {
      const title = data.title || 'Market Update';
      const options = data.options || { body: 'Market Hours notification', tag: 'market' };
      self.registration.showNotification(title, options);
    }
  } catch (err) {
    // Ignore malformed messages
  }
});
