# Goblin - Hoard Recipes Like Treasure

Goblin is a React Native mobile application for managing and organizing recipes on Android devices. With an intuitive interface, users can add, edit, search, and share recipes, integrate source URLs (YouTube, Instagram, blogs), and plan meals.

## Features
1. **Recipe Management**: Add, edit, or delete recipes with fields for title, ingredients, instructions, prep time, cook time, servings, category, dietary tags, and photos.

2. **Source Link Integration**: Save and validate URLs, with thumbnail previews for YouTube and Instagram content.

3. **Search & Filter**: Search recipes by title, ingredient, category, or tags, with filters for dietary preferences or prep time.

4. **Offline Access**: Cache recipes locally using AsyncStorage for offline viewing.

5. **Authentication**: Sign in with Google, Facebook, or Twitter (X), or use guest mode (limited to 5 recipes).

6. **Cloud Sync**: Store recipes in Firebase Firestore, with image storage in Firebase Storage.

7. **Meal Planner & Shopping List**: Plan weekly meals and generate ingredient lists.

8. **Sharing**: Share recipes via email, WhatsApp, or export as JSON/PDF.

9. **UI/UX**: Responsive design with Poppins and Roboto fonts, earthy colors (Olive Green, Terracotta), and dark/light mode support.

## Tech Stack
- **Frontend**: React Native (Android focus), TypeScript, React Navigation.

- **Backend/Storage**: Firebase Firestore (recipe metadata), Firebase Storage (images), AsyncStorage (offline caching).

- **Authentication**: Firebase Authentication (@react-native-firebase/auth).

- **APIs**: YouTube oEmbed, Instagram oEmbed, Microlink.io (website thumbnails).

- **Libraries**:
   - **Image handling**: react-native-image-picker, react-native-image-resizer.
   - **Video playback**: react-native-webview, react-native-youtube-iframe.
   - **Storage**: @react-native-async-storage/async-storage.

## Prerequisites
- Node.js (v16 or higher)
- React Native CLI (npm install -g react-native-cli)
- Android Studio with an Android emulator or physical device
- Firebase account (for Firestore, Storage, and Authentication)
- Google, Facebook, and Twitter (X) developer accounts for OAuth setup

## Installation
1. Clone the Repository:

   ```
   git clone git@github.com:emmanuelkaringi/Goblin.git
   cd goblin
   ```

2. Install Dependencies:

   `npm install`

3. Set Up Firebase:
   - Create a Firebase project at `console.firebase.google.com`.
   - Add an Android app to your Firebase project and download `google-services.json`.
   - Place `google-services.json` in the android/app directory.
   - Enable Firestore, Storage, and Authentication (Google, Facebook, Twitter) in Firebase.

4. Configure Environment: Create a `.env` file in the root directory
   ```
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_auth_domain
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   FIREBASE_APP_ID=your_app_id
   ```

5. Run the App:

   `npx expo start` or `npx expo start --tunnel`

## Development Guidelines
- Use TypeScript for type safety.
- Follow ESLint and Prettier for code consistency.
- Commit changes frequently with clear messages (e.g., `feat: add recipe form UI`).
- Test on Android emulator or device before pushing changes.
- Optimize Firebase usage (e.g., compress images, cache locally) to stay within free tier limits.

## Contributing
- Fork the repository.
- Create a feature branch (`git checkout -b feature/your-feature`).
- Submit a pull request with clear descriptions.

## License
This project is licensed under the MIT License.