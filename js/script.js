

const continueBtn = document.getElementById("continue-btn");
const welcomeScreen = document.getElementById("welcome");
const appScreen = document.getElementById("app")

continueBtn.addEventListener("click", () => {
   welcomeScreen.classList.add("fade-out"); 

setTimeout(() => {
      welcomeScreen.style.display = "none"; // Hide the welcome screen after fade out
      appScreen.style.display = "block"; // Show the main app screen
   }, 1000); // Match this duration with the fade-out animation duration
});

const tips = [
    "Stay hydrated and avoid sugery drinks.",
    "Monitor your blood sugar regularly.",
    "Get enough sleep for better health",
    "Avoid skipping meals",
    "Practice stress management",
    "Light exercise daily can improve your health",
    "Fillow your doctor's advice closely",
];  

document.getElementById("daily-tip").innerText=tips[Math.floor(Math.random()*tips.length)];

const backBtn = document.getElementById("back-btn")
backBtn.addEventListener("click", () =>{
    document.getElementById("app").style.display = "none";
    const welcomeScreen = document.getElementById("welcome");
    welcomeScreen.style.display = "flex";
    welcomeScreen.classList.remove("fade-out");
})

function goBack(){
    document.getElementById("app").style.display = "none";
    const welcomeScreen = document.getElementById("welcome");
    welcomeScreen.style.display = "flex";
    welcomeScreen.classList.remove("fade-out");
}