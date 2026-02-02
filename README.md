# Expo Firebase Google Authentication

<p>This project demonstrates <strong>Google Authentication</strong> in an <strong>Expo React Native app</strong> using <strong>Firebase</strong>.</p>

<hr>

<h2>Phase 1: Firebase Setup</h2>

<h3>1️⃣ Create Firebase Project</h3>
<ul>
<li>Go to <a href="https://console.firebase.google.com">Firebase Console</a></li>
<li>Click <strong>Add project</strong> → follow prompts</li>
</ul>

<h3>2️⃣ Add Web App (Required for Google Auth)</h3>
<ul>
<li>Project Settings → Your Apps → Add app → Web (&#60;/&#62;)</li>
<li>Name: <code>AuthWeb</code></li>
<li>Register app → skip hosting</li>
<li>Copy the <strong>Web Client ID</strong> (needed for Expo)</li>
</ul>

<h3>3️⃣ Add Android App</h3>

<p>This step connects your Android app to Firebase and sets up Google Sign-In.</p>

<ol>
<li><strong>Go to Firebase Console</strong><br>
Project Settings → Your Apps → Add App → Android
</li>

<li><strong>Package Name</strong></li>
<pre><code>
com.shamodha.authapp
</code></pre>
<p>⚠️ Must match the package name in your <code>app.json</code></p>

<li><strong>SHA-1 Fingerprint</strong></li>
<p>Generate SHA-1 in your terminal:</p>
<pre><code>
cd android
./gradlew signingReport
</code></pre>
<p>Look for the SHA-1 under <code>Variant: debug</code> and copy it.</p>

<li><strong>Add SHA-1 to Firebase</strong></li>
<p>Paste the SHA-1 into your Android app settings in Firebase → Click <strong>Save</strong></p>
</ol>

<p><strong>Why SHA-1 is important:</strong></p>
<ul>
<li>Google Sign-In requires SHA-1 to authenticate your app.</li>
<li>Missing SHA-1 causes silent login failures.</li>
<li>Update SHA-1 if signing keys change and re-save Google provider.</li>
</ul>

<h3>4️⃣ Enable Google Authentication</h3>
<ul>
<li>Firebase Console → Authentication → Sign-in method</li>
<li>Enable Google</li>
<li>After adding SHA-1 → click <strong>Save</strong> again</li>
</ul>

<p><strong>⚠️ Important:</strong> <strong>Do NOT use Google Cloud Platform (GCP) manually</strong>. All setup is done in Firebase Console only.</p>
<p><strong>⚠️ Warning:</strong> Google Sign-In <strong>will NOT work in Expo Go</strong>. You must build a development client.</p>

<hr>

<h2>Phase 2: Environment Variables (.env)</h2>

<p>Create a <code>.env</code> file in the project root with the following content:</p>

<pre><code>
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=your_web_client_id
</code></pre>

<p><strong>Important:</strong> Expo only exposes environment variables that start with <code>EXPO_PUBLIC_</code>.</p>

<hr>

<h2>Phase 3: Build & Run</h2>

<p>⚠️ <strong>Google Sign-In requires a development client, NOT Expo Go.</strong></p>

<h3>1️⃣ Generate Native Folders</h3>
<pre><code>
npx expo prebuild
</code></pre>

<h3>2️⃣ Run on Android</h3>
<pre><code>
npx expo run:android
</code></pre>
<p>Make sure your Android device has <strong>USB debugging ON</strong>.</p>

<h3>3️⃣ Run on iOS (Mac only)</h3>
<pre><code>
npx expo run:ios
</code></pre>

<hr>

<h3>Notes</h3>
<ul>
<li>The Web Client ID from the Firebase Web App is required for Google Sign-In in Expo.</li>
<li>After adding or changing SHA-1, always re-save the Google provider in Firebase.</li>
<li>Ensure package name in <code>app.json</code> matches Firebase Android app.</li>
<li><strong>Do NOT use GCP manually</strong> — only use Firebase Console for this setup.</li>
<li><strong>Do NOT use Expo Go</strong> — you must build a dev client for Google Sign-In to work.</li>
</ul>

<hr>

<h3>References</h3>
<ul>
<li><a href="https://console.firebase.google.com">Firebase Console</a></li>
<li><a href="https://docs.expo.dev/versions/latest/sdk/auth-session/">Expo Auth Session Docs</a></li>
<li><a href="https://firebase.google.com/docs/auth">Firebase Auth Docs</a></li>
</ul>
