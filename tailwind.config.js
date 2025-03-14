/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Login.js",
    "./src/components/Register.js",
    "./src/components/common/Header.js",
    "./src/components/Home.js",
    "./src/components/common/Home_card.js",
    "./src/components/ConsumptionData.js",
    "./src/components/Prelogin_2.js",
    "./src/components/Prelogin_3.js",
    "./src/components/carbon.js",
    "./src/components/Prelogin.js",
    ".src/components/EatingHabits.js",
    ".src/components/public_transport.js",
    ".src/components/expenditure.js",
    ".src/components/vehicle.js",
    "./src/components/Quiz.js",
    "./src/components/Flight.js",
    "./src/components/Feedback.js",
    "./src/components/ActionPlan.js",
    "./src/components/Map.js",
    "./src/components/common/Leaderboard.js",
    "./src/components/Credits.js",
    "./src/components/common/ScrollToBottomButton.js",
    "./src/components/common/UserDataCard.js",
    "./src/components/common/components/Blog",
    "./src/components/common/components/BlogSite",
    "./src/components/WeeklyTargets.js",
    "node_modules/flowbite-react/lib/esm/**/*.js"

  ],
  theme: {
    fontFamily: {
      PJSbold: ["PlusJakartaSans-Bold", "sans-serif"],
      WorkSans: ["WorkSans-Regular", "sans-serif"],
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
    require('flowbite-typography'),
    
  ],
}

