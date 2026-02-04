<h1>Expo Firebase Google Authentication</h1>

<p>
This project demonstrates <strong>Google Authentication</strong> in an
<strong>Expo React Native app</strong> using <strong>Firebase</strong>.
</p>
<hr />

<h2>📺 Video Guide</h2>

<p>
  Watch the complete step-by-step video guide here:
</p>

<ul>
  <li>
    <a
      href="https://drive.google.com/drive/folders/14kzsiaNbEr5290BoMeu_2rOXkbBUY57e"
      target="_blank"
      rel="noopener noreferrer"
    >
      Expo Firebase Google Authentication – Video Tutorials (Google Drive)
    </a>
  </li>
</ul>
<hr />

<h2>Phase 1: Firebase Setup</h2>

<h3>1️⃣ Create Firebase Project</h3>
<ul>
  <li>Go to <a href="https://console.firebase.google.com">Firebase Console</a></li>
  <li>Click <strong>Add project</strong> → follow the prompts</li>
</ul>

<hr />

<h3>2️⃣ Add Web App (Required for Google Auth)</h3>
<ul>
  <li>Project Settings → Your Apps → Add app</li>
  <li>Select <strong>Web (&lt;/&gt;)</strong></li>
  <li>App name: <code>AuthWeb</code></li>
  <li>Register app → Skip hosting</li>
  <li>Copy the <strong>Web Client ID</strong> (used in Expo)</li>
</ul>

<hr />

<h3>3️⃣ Add Android App</h3>

<p>This step links your native Android app with Firebase.</p>

<ol>
  <li>
    <strong>Register Android App</strong><br />
    Firebase Console → Project Settings → Your Apps → Add app → Android
  </li>

  <li>
    <strong>Android Package Name</strong>
    <pre><code>com.shamodha.authapp</code></pre>
    <p>⚠️ Must match the package name in <code>app.json</code></p>
  </li>

  <li>
    <strong>Download google-services.json</strong>
    <ul>
      <li>After registering the Android app</li>
      <li>Click <strong>Download google-services.json</strong></li>
    </ul>

<pre><code>auth-app/
 ├── google-services.json
 ├── app.json
 ├── package.json
</code></pre>

    <p>❗ Do NOT rename this file</p>
  </li>

  <li>
    <strong>Generate SHA-1 Fingerprint</strong>

<pre><code>cd android
./gradlew signingReport
</code></pre>

    <ul>
      <li>Copy SHA-1 under <code>Variant: debug</code></li>
      <li>Firebase Console → Android App settings → Add SHA-1</li>
      <li>Click <strong>Save</strong></li>
    </ul>
  </li>
</ol>

<p><strong>Why SHA-1 is important:</strong></p>
<ul>
  <li>Required for Google Sign-In on Android</li>
  <li>Missing SHA-1 causes silent login failures</li>
  <li>Re-save Google provider after adding SHA-1</li>
</ul>

<hr />

<h3>4️⃣ Enable Google Authentication</h3>
<ul>
  <li>Firebase Console → Authentication</li>
  <li>Sign-in method → Enable <strong>Google</strong></li>
  <li>After adding SHA-1 → click <strong>Save</strong> again</li>
</ul>

<p><strong>⚠️ Important:</strong> Do <strong>NOT</strong> configure Google Cloud Platform manually.</p>
<p><strong>⚠️ Warning:</strong> Google Sign-In does <strong>NOT</strong> work in Expo Go.</p>

<hr />

<h2>Phase 2: Environment Variables</h2>

<p>Create a <code>.env</code> file in the project root:</p>

<pre><code>
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=your_web_client_id
</code></pre>

<p>✅ Only variables prefixed with <code>EXPO_PUBLIC_</code> are exposed in Expo.</p>

<hr />

<h2>Phase 3: Expo Configuration</h2>

<h3>Update app.json</h3>

<pre><code>
{
  "expo": {
    "android": {
      "package": "com.shamodha.authapp",
      "googleServicesFile": "./google-services.json"
    }
  }
}
</code></pre>

<hr />

<h2>Phase 4: Build & Run</h2>

<p><strong>⚠️ Google Sign-In requires a development build, NOT Expo Go.</strong></p>

<h3>1️⃣ Generate Native Code</h3>
<pre><code>npx expo prebuild</code></pre>

<h3>2️⃣ Run on Android</h3>
<pre><code>npx expo run:android</code></pre>

<p>✔ USB debugging must be enabled on your device.</p>

<h3>3️⃣ Run on iOS (Mac only)</h3>
<pre><code>npx expo run:ios</code></pre>

<hr />

<h3>Notes</h3>
<ul>
  <li>Web Client ID is mandatory for Google Sign-In</li>
  <li>Always re-save Google provider after SHA-1 changes</li>
  <li><code>google-services.json</code> is required for Android</li>
  <li>Package name must match Firebase config</li>
  <li>❌ Do NOT use GCP manually</li>
  <li>❌ Do NOT use Expo Go</li>
</ul>

<hr />

<h3>References</h3>
<ul>
  <li><a href="https://console.firebase.google.com">Firebase Console</a></li>
  <li><a href="https://docs.expo.dev/versions/latest/sdk/auth-session/">Expo Auth Session Docs</a></li>
  <li><a href="https://firebase.google.com/docs/auth">Firebase Auth Docs</a></li>
</ul>
