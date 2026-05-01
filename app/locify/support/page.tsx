export default function Support() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Locify Support</h1>
        <p className="mt-2 text-sm text-gray-500">We're here to help.</p>
      </div>

      <section className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h2>
          <p>
            For any questions, bug reports, or feedback, reach out by email:
          </p>
          <a
            href="mailto:barak.goren6@gmail.com"
            className="inline-block mt-2 text-blue-600 hover:underline font-medium"
          >
            barak.goren6@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h2>

          <div className="space-y-5">
            <div>
              <p className="font-medium text-gray-800">Why isn't my reminder triggering?</p>
              <p className="mt-1 text-sm">
                Make sure Locify has "Always" location permission enabled in Settings → Privacy &
                Security → Location Services → Locify. Also ensure the reminder is toggled on.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">How do I delete a reminder?</p>
              <p className="mt-1 text-sm">
                Swipe left on a reminder in the list and tap Delete, or open the reminder and
                use the delete option.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">Can I set a custom radius for a reminder?</p>
              <p className="mt-1 text-sm">
                Yes. When adding or editing a reminder, use the radius slider on the map to
                adjust the geofence size.
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">Is my data backed up?</p>
              <p className="mt-1 text-sm">
                Reminders are stored on-device. If iCloud Backup is enabled on your device,
                the app data will be included in your iCloud backup automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
