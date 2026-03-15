const compliments = [
  { emoji: "🌟", text: "Your presence makes the world genuinely brighter.", author: "— the universe" },
  { emoji: "💫", text: "There's a quiet brilliance in the way you think.", author: "— everyone paying attention" },
  { emoji: "🌸", text: "You are more capable than you give yourself credit for.", author: "— your future self" },
  { emoji: "🔥", text: "The energy you bring into a room? Completely irreplaceable.", author: "— the room" },
  { emoji: "🌊", text: "You handle hard things with more grace than you realize.", author: "— someone watching" },
  { emoji: "✨", text: "Your curiosity is one of your most beautiful qualities.", author: "— this moment" },
  { emoji: "🌻", text: "You've grown so much, and it shows in ways you can't yet see.", author: "— time itself" },
  { emoji: "🦋", text: "The kindness you carry is rarer than you think.", author: "— a grateful world" },
  { emoji: "🎯", text: "You ask the right questions. That's a genuine superpower.", author: "— every great idea you'll have" },
  { emoji: "🍀", text: "Something about you makes people feel safe. That's a gift.", author: "— those lucky enough to know you" },
  { emoji: "🌙", text: "Even on your off days, you're still something special.", author: "— the moon" },
  { emoji: "💎", text: "Your perspective is one-of-a-kind, and that matters more than you know.", author: "— the world that needs it" },
  { emoji: "🌈", text: "You bring colour to places that were grey before you arrived.", author: "— every room you've ever entered" },
  { emoji: "🦁", text: "There is a quiet courage in you that shows up exactly when it needs to.", author: "— every hard moment you've survived" },
  { emoji: "🕊️", text: "The way you care about things — deeply, genuinely — is truly rare.", author: "— someone who noticed" },
  { emoji: "🌺", text: "You make people feel seen. Do you have any idea how powerful that is?", author: "— everyone you've ever listened to" },
  { emoji: "⚡", text: "Your ambition is beautiful. Keep going. It's working.", author: "— momentum" },
  { emoji: "🎶", text: "There's a rhythm to how you move through life. It's worth admiring.", author: "— a quiet observer" },
  { emoji: "🍵", text: "You are someone worth knowing. Deeply, genuinely worth knowing.", author: "— the lucky few who do" },
  { emoji: "🌞", text: "Today, you are exactly enough. Maybe more than enough.", author: "— this very second" },
];

const card = document.getElementById("card");
const emojiEl = document.getElementById("emoji");
const complimentEl = document.getElementById("compliment");
const authorEl = document.getElementById("author");
const newBtn = document.getElementById("newBtn");
const copyBtn = document.getElementById("copyBtn");
const streakEl = document.getElementById("streak-text");

let currentIndex = -1;

function getRandomIndex(exclude) {
  let idx;
  do { idx = Math.floor(Math.random() * compliments.length); }
  while (idx === exclude && compliments.length > 1);
  return idx;
}

function showCompliment(animate = true) {
  currentIndex = getRandomIndex(currentIndex);
  const c = compliments[currentIndex];

  if (animate) {
    card.classList.remove("animating");
    void card.offsetWidth; // reflow
    card.classList.add("animating");
  }

  emojiEl.textContent = c.emoji;
  complimentEl.textContent = c.text;
  authorEl.textContent = c.author;
  copyBtn.textContent = "Copy to clipboard";
  copyBtn.classList.remove("copied");
}

// Streak logic using localStorage
function updateStreak() {
  const today = new Date().toDateString();
  const data = JSON.parse(localStorage.getItem("compliment_streak") || "{}");

  if (data.lastDate === today) {
    streakEl.textContent = `Day ${data.count} streak — keep it up!`;
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const wasYesterday = data.lastDate === yesterday.toDateString();

  const newCount = wasYesterday ? (data.count || 1) + 1 : 1;
  localStorage.setItem("compliment_streak", JSON.stringify({ lastDate: today, count: newCount }));

  if (newCount === 1) {
    streakEl.textContent = "First visit today — welcome back!";
  } else {
    streakEl.textContent = `Day ${newCount} streak — you're on fire!`;
  }
}

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  const text = `${emojiEl.textContent} "${complimentEl.textContent}" ${authorEl.textContent}`;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = "Copied! ✓";
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.textContent = "Copy to clipboard";
      copyBtn.classList.remove("copied");
    }, 2000);
  });
});

newBtn.addEventListener("click", () => showCompliment(true));

// Init
updateStreak();
showCompliment(false);
