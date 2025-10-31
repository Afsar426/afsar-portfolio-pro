// ===========================================
// 💬 Chat with Afsar — Simple Frontend Bot
// ===========================================
const chatbotBody = document.getElementById("chatbot-body");
const chatbotInput = document.getElementById("chatbot-input");

// Default welcome message
function botMessage(message) {
  const div = document.createElement("div");
  div.classList.add("bot-msg");
  div.textContent = message;
  chatbotBody.appendChild(div);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function userMessage(message) {
  const div = document.createElement("div");
  div.classList.add("user-msg");
  div.textContent = message;
  chatbotBody.appendChild(div);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// Responses database
const responses = [
  { keywords: ["hi", "hello", "hey"], reply: "Hey there 👋 I'm Afsar's portfolio bot! How can I help?" },
  { keywords: ["project", "work", "portfolio"], reply: "I’ve built GreenLoop, Jarvis, MyMoneyMentor-AI, and more. Want to know about a specific one?" },
  { keywords: ["greenloop"], reply: "🌿 GreenLoop is a sustainability platform that turns waste into compost and guides users in urban gardening." },
  { keywords: ["jarvis"], reply: "🤖 Jarvis is my AI assistant project that executes voice commands like opening apps or websites." },
  { keywords: ["mymoney", "money", "finance"], reply: "💰 MyMoneyMentor-AI helps users manage finances with AI-driven recommendations." },
  { keywords: ["skills", "languages", "tech"], reply: "⚙️ I work with Python, ReactJS, Machine Learning, Data Science, and UI/UX design." },
  { keywords: ["education", "college"], reply: "🎓 I’m pursuing B.Tech in Artificial Intelligence at SAGE University, Indore." },
  { keywords: ["contact", "email"], reply: "📩 You can reach Afsar at afsarazam404@gmail.com or via the Contact section below." },
  { keywords: ["linkedin"], reply: "🔗 Here's my LinkedIn: linkedin.com/in/afsar-azam-170046330" },
  { keywords: ["github"], reply: "💻 Check my projects on GitHub: github.com/Afsar426" },
  { keywords: ["bye"], reply: "Goodbye 👋 Have a great day!" },
  { keywords: ["who", "you"], reply: "I'm your friendly assistant here to introduce Afsar and his work 😄" },
];

// Find best match for user input
function getBotReply(input) {
  input = input.toLowerCase();
  for (const r of responses) {
    if (r.keywords.some(k => input.includes(k))) {
      return r.reply;
    }
  }
  return "Hmm 🤔 I’m not sure, but you can explore the sections above to learn more!";
}

// Handle input
chatbotInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && chatbotInput.value.trim() !== "") {
    const userText = chatbotInput.value.trim();
    userMessage(userText);
    chatbotInput.value = "";

    setTimeout(() => {
      const reply = getBotReply(userText);
      botMessage(reply);
    }, 500);
  }
});