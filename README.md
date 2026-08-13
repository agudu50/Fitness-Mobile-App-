# 🏋️ Pump House - Fitness Mobile App

A clean, modern React Native application built with **Expo** (SDK 54) and **React Navigation**. This project features reusable UI components, interactive state management, stack navigation with route parameters, an interactive workout calendar, activity tracking statistics, social friend connections, and a sleek flat design system.

---

## 📱 Features & Assignment Requirements

- [x] **Expo Project Setup**: Configured with React Native `0.81.5`, Expo SDK 54, and `@react-navigation/native-stack`.
- [x] **Landing Screen**: Replicated "Pump House" onboarding screen with decorative line graphics, CTA button, and hero media.
- [x] **Reusable WorkoutCard Component**: Receives `image`, `title`, `duration`, and `calories` via props.
- [x] **Workout List Screen**: Maps over an array of 6 distinct workout programs with high-resolution fitness photography.
- [x] **Independent Favourite Toggle**: Each card features a heart icon (`♥` / `♡`) toggling state independently per item.
- [x] **Stack Navigator & Route Params**: Tapping a card opens `WorkoutDetailsScreen`, passing selected workout data through `route.params`.
- [x] **Interactive Action Button**: Details screen features a button toggling between **"Start Workout"** and **"Completed"** state.
- [x] **Workout Calendar Screen**: Interactive date selector grid (month view) with scheduled daily workout routines.
- [x] **Track Activity Statistics Screen**: Total Kilocalories burned card (`1,883 Kcal`), interactive date selector, weekly burn bar chart, distance/steps/points metrics, and workout category breakdown.
- [x] **Find Friends Social Screen**: Orbit layout of friend avatars with Facebook and Instagram social invitation buttons.
- [x] **Clean Flat Design**: Flat color scheme (`#ff6b81` pink accent, `#ffffff` card backgrounds, `#2ed573` completed state) and vector icons from `@expo/vector-icons` (`Ionicons`).

---

## 🧭 Navigation Architecture & Flow

```
                  ┌──────────────────────┐
                  │    LandingScreen     │
                  │ ("Pump House" Hero)  │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │  WorkoutListScreen   │
                  │ (6 Workout Programs) │
                  └──────────┬───────────┘
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────────┐
│  Workout     │     │   Calendar   │     │  Track Activity  │
│  Details     │     │   Screen     │     │  (StatsScreen)   │
└──────────────┘     └──────────────┘     └──────────────────┘
```

---

## 📱 Screens Overview

### 1. Landing Screen (`LandingScreen.js`)
- **Initial route** when opening the application.
- Displays the **Pump House** branding, tagline, concentric line graphics, hero image, and a **Next** button navigating to `WorkoutListScreen`.

### 2. Workout Programs Screen (`WorkoutListScreen.js`)
- Renders **6 unique workout routines**:
  1. Full-Body HIIT (25 min | 320 kcal)
  2. Bicep & Arm Sculpt (15 min | 180 kcal)
  3. Core & Ab Crusher (20 min | 210 kcal)
  4. Lower Body & Leg Power (30 min | 400 kcal)
  5. Morning Yoga & Flexibility (18 min | 120 kcal)
  6. Cardio Blast & Burn (35 min | 450 kcal)
- Uses the reusable `WorkoutCard` component with independent favourite state.
- Features **Find Friends** (`people-outline`), **Track Activity** (`stats-chart-outline`), and **Calendar** (`calendar-outline`) header buttons.

### 3. Workout Details Screen (`WorkoutDetailsScreen.js`)
- Receives detailed workout object via `route.params`.
- Displays workout cover image, difficulty badge, duration, calories, full exercise list breakdown, and an interactive **Start Workout / Completed** toggle button.

### 4. Workout Calendar Screen (`CalendarScreen.js`)
- Interactive **monthly calendar grid** allowing users to select any day.
- Displays scheduled routines for the selected day (Indoor Run, Outdoor Cycle, Core Mobility).
- Selecting any scheduled workout opens `WorkoutDetailsScreen` with workout parameters.

### 5. Track Activity Screen (`StatsScreen.js`)
- **Total Kilocalories Hero Banner**: Highlights daily calorie burn (`1,883 Kcal`) with interactive total burn badge.
- **Weekly Bar Chart**: Compares daily calorie expenditure across the week.
- **Activity Metrics Grid**: Distance (`7,580 m`), Steps (`9,832`), Points (`1,248`).
- **Workout Breakdown**: Category breakdown (Dumbbell 628 Kcal, Treadmill 235 Kcal, Rope Jump 432 Kcal).

### 6. Find Friends Screen (`FriendsScreen.js`)
- **Circular Orbit Avatar Display**: Shows friend avatars arranged around a central avatar.
- **Social Invitations**: Facebook and Instagram invite buttons (`logo-facebook`, `logo-instagram`) with interactive state feedback.

---

## 🛠️ Project Structure

```
dcit-324-assign2/
├── App.js                         # Main entrypoint with NavigationContainer & Stack.Navigator
├── components/
│   └── WorkoutCard.js             # Reusable workout card component (props & favourite state)
├── screens/
│   ├── LandingScreen.js           # "Pump House" Landing / Onboarding Screen
│   ├── WorkoutListScreen.js       # List screen displaying 6 workout program cards
│   ├── WorkoutDetailsScreen.js    # Details screen with exercise list & Start/Completed toggle
│   ├── CalendarScreen.js          # Interactive workout calendar & date schedule screen
│   ├── StatsScreen.js             # Track Activity statistics & Total Kilocalories screen
│   └── FriendsScreen.js           # Find Friends social connection & invitation screen
├── assets/                        # Local image assets
├── app.json                       # Expo configuration
├── package.json                   # Project dependencies
└── README.md                      # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Expo Go app on mobile (iOS / Android) or simulator

### Installation & Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/agudu50/Fitness-Mobile-App-.git
   cd dcit-324-assign2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Expo development server**:
   ```bash
   npx expo start --clear
   ```

4. **Run on Device / Emulator**:
   - Scan the displayed QR code using **Expo Go** (Android) or **Camera app** (iOS).
   - Press `a` for Android Emulator or `w` for Web.

---

## 📦 Dependencies

- `expo`: `~54.0.35`
- `react`: `19.1.0`
- `react-native`: `0.81.5`
- `@react-navigation/native`: `^7.3.16`
- `@react-navigation/native-stack`: `^7.18.8`
- `react-native-safe-area-context`: `~5.6.0`
- `react-native-screens`: `~4.16.0`
- `@expo/vector-icons`: `^14.0.4`
