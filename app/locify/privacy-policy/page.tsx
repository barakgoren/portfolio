export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Locify · Last updated: May 1, 2025</p>
      </div>

      <section className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Overview</h2>
          <p>
            Locify is a location-based reminder app. We are committed to protecting your privacy.
            This policy explains what data the app accesses and how it is used.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Data We Collect</h2>
          <p>
            Locify does <strong>not</strong> collect, transmit, or share any personal data.
            All data — including reminder titles, notes, and location coordinates — is stored
            exclusively on your device using Apple's SwiftData framework.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Location Access</h2>
          <p>
            Locify requests access to your device's location in order to monitor geofence regions
            and trigger reminders when you arrive at or depart from a saved location.
            Location data is processed entirely on-device and is never sent to any server.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Notifications</h2>
          <p>
            Locify requests permission to send local notifications. These notifications are
            generated on-device in response to location events and do not involve any third-party
            service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Services</h2>
          <p>
            Locify does not integrate any third-party analytics, advertising, or tracking SDKs.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Children's Privacy</h2>
          <p>
            Locify does not knowingly collect data from children under 13. Because no data
            is collected at all, the app is safe for all ages.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Changes to This Policy</h2>
          <p>
            If this policy changes, the updated version will be posted at this URL with a revised
            date.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
          <p>
            Questions about this policy?{" "}
            <a
              href="mailto:barak.goren6@gmail.com"
              className="text-blue-600 hover:underline"
            >
              barak.goren6@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
