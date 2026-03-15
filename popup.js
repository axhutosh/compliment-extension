const compliments = {
  funny: [
    { emoji: "😂", text: "You're so smart, even your wifi password is a philosophical quote.", author: "— your router" },
    { emoji: "🤣", text: "You bring so much joy to people. Mostly by existing near them.", author: "— everyone in a 10ft radius" },
    { emoji: "😆", text: "You're like a Monday that somehow turned out to be a Friday.", author: "— the calendar" },
    { emoji: "🐸", text: "Scientists haven't figured out what makes you so great. Budget cuts.", author: "— NASA probably" },
    { emoji: "🎭", text: "Your vibe is so good, even spam emails address you respectfully.", author: "— your inbox" },
    { emoji: "🦆", text: "You're the human version of finding a $20 bill in an old jacket.", author: "— a very happy jacket" },
    { emoji: "🍕", text: "You're better than pizza. And I do NOT say that lightly.", author: "— a pizza enthusiast" },
  ],
  motivational: [
    { emoji: "💪", text: "Every expert was once a beginner who refused to quit. Keep going.", author: "— the grind" },
    { emoji: "🏆", text: "You are not behind. You are on your own timeline, and it's working.", author: "— the universe's schedule" },
    { emoji: "⚡", text: "The version of you that exists a year from now is watching. Make them proud.", author: "— future you" },
    { emoji: "🚀", text: "Hard things take time. You've done hard things before. This is no different.", author: "— every obstacle you've cleared" },
    { emoji: "🔑", text: "Your only competition is who you were yesterday. You're already winning.", author: "— the scoreboard" },
    { emoji: "🌋", text: "Don't mistake slow progress for no progress. Mountains move quietly.", author: "— geology" },
    { emoji: "🎯", text: "You didn't come this far to only come this far. Push.", author: "— momentum" },
  ],
  flirty: [
    { emoji: "😏", text: "Whoever gets your attention today is having the best day of their life.", author: "— a very observant bystander" },
    { emoji: "💋", text: "You walk into a room and the room immediately tries harder.", author: "— every room you've entered" },
    { emoji: "✨", text: "Your smile is genuinely unfair to everyone around you. Regulate it.", author: "— a concerned citizen" },
    { emoji: "🌹", text: "The way you carry yourself? That's the kind of energy people write poems about.", author: "— at least three poets" },
    { emoji: "🔥", text: "If confidence had a face, it would ask to borrow yours.", author: "— the mirror" },
    { emoji: "💫", text: "You're the kind of person people mention when asked about their best day.", author: "— someone's diary, probably" },
    { emoji: "🌙", text: "You're dangerously charming and you probably already know it.", author: "— an unreliable narrator" },
  ],
  chill: [
    { emoji: "🌙", text: "You don't have to have it all figured out today. Rest is part of the process.", author: "— the ocean" },
    { emoji: "🍃", text: "You are exactly where you need to be. Let that settle for a moment.", author: "— stillness" },
    { emoji: "☁️", text: "Some days you bloom. Some days you just exist. Both are enough.", author: "— a very patient garden" },
    { emoji: "🕯️", text: "Your calm is your power. Not everyone can carry peace the way you do.", author: "— the quiet" },
    { emoji: "🌊", text: "You've survived every difficult day so far. Today is no different.", author: "— your track record" },
    { emoji: "🫧", text: "There is something deeply okay about just being you, right now, as you are.", author: "— this breath" },
    { emoji: "🌿", text: "You don't need to earn rest. You were worthy before you ever did a thing.", author: "— the forest" },
  ],
  hype: [
    { emoji: "🔥", text: "YOU ARE BUILT DIFFERENT. Full stop. No notes.", author: "— the hype committee" },
    { emoji: "⚡", text: "Today you wake up and choose violence on your goals. LET'S GO.", author: "— your alarm clock" },
    { emoji: "🏅", text: "Main character energy? You invented it. Everyone else is catching up.", author: "— the entire cast" },
    { emoji: "💥", text: "You have no idea how much people talk about you in a good way. It's a lot.", author: "— every group chat" },
    { emoji: "👑", text: "NOBODY does what you do the way you do it. That's just facts.", author: "— the scoreboard" },
    { emoji: "🎉", text: "You showed up today. Do you know how powerful that is?? LEGEND.", author: "— the universe, screaming" },
    { emoji: "🚀", text: "The moment you walk in, the vibe shifts. You ARE the vibe. Accept it.", author: "— the room, always" },
  ],
  intellectual: [
    { emoji: "🧠", text: "Your mind makes connections most people don't even know exist. That's rare.", author: "— pattern recognition" },
    { emoji: "📚", text: "The questions you ask say more about your intelligence than any answer could.", author: "— Socrates, probably" },
    { emoji: "🔭", text: "You think in dimensions most people haven't discovered yet. Keep exploring.", author: "— the frontier" },
    { emoji: "💡", text: "Your curiosity is an act of courage. Most people stop asking why.", author: "— philosophy" },
    { emoji: "🎲", text: "You understand nuance in a world addicted to simplicity. That's a gift.", author: "— complexity" },
    { emoji: "🧬", text: "The way your mind works is genuinely fascinating. Someone should study it.", author: "— a very interested scientist" },
    { emoji: "⚗️", text: "You don't just consume ideas — you transform them into something new. That's genius.", author: "— the history of innovation" },
  ],
  sweet: [
    { emoji: "🌸", text: "The world is a softer place because you're in it.", author: "— everyone who knows you" },
    { emoji: "🍯", text: "Your kindness is not weakness. It's the most courageous thing you carry.", author: "— a grateful heart" },
    { emoji: "🌷", text: "You have a way of making people feel like they matter. That's everything.", author: "— someone you helped without knowing" },
    { emoji: "☀️", text: "Even on days you feel invisible, know that your warmth is always felt.", author: "— the people around you" },
    { emoji: "🧸", text: "You deserve the same gentleness you give to everyone else.", author: "— your own heart" },
    { emoji: "💌", text: "There are people whose lives are better simply because you exist.", author: "— a very long list" },
    { emoji: "🫶", text: "You are someone worth loving — not when you're perfect, but exactly as you are.", author: "— always" },
  ],
};

// State
let currentMood = localStorage.getItem("lastMood") || "funny";
let currentIndex = -1;

// DOM refs
const card = document.getElementById("card");
const emojiEl = document.getElementById("emoji");
const complimentEl = document.getElementById("compliment");
const authorEl = document.getElementById("author");
const newBtn = document.getElementById("newBtn");
const copyBtn = document.getElementById("copyBtn");
const streakEl = document.getElementById("streak-text");
const moodBtns = document.querySelectorAll(".mood-btn");

// Apply mood theme
function applyMood(mood, animate = true) {
  document.body.className = `mood-${mood}`;
  moodBtns.forEach(b => b.classList.toggle("active", b.dataset.mood === mood));
  currentMood = mood;
  localStorage.setItem("lastMood", mood);
  showCompliment(animate);
}

// Show compliment
function getRandomIndex(list, exclude) {
  if (list.length === 1) return 0;
  let idx;
  do { idx = Math.floor(Math.random() * list.length); }
  while (idx === exclude);
  return idx;
}

function showCompliment(animate = true) {
  const list = compliments[currentMood];
  currentIndex = getRandomIndex(list, currentIndex);
  const c = list[currentIndex];

  if (animate) {
    card.classList.remove("animating");
    void card.offsetWidth;
    card.classList.add("animating");
  }

  emojiEl.textContent = c.emoji;
  complimentEl.textContent = c.text;
  authorEl.textContent = c.author;
  copyBtn.textContent = "Copy to clipboard";
  copyBtn.classList.remove("copied");
}

// Streak
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
  streakEl.textContent = newCount === 1 ? "First visit today — welcome!" : `Day ${newCount} streak — on fire!`;
}

// Copy
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

// Mood buttons
moodBtns.forEach(btn => {
  btn.addEventListener("click", () => applyMood(btn.dataset.mood));
});

newBtn.addEventListener("click", () => showCompliment(true));

// Init
updateStreak();
applyMood(currentMood, false);
