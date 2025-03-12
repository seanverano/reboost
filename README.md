# **Reboost**

Reboost is a Chrome extension with 2 core features, a hydration tracker for logging and tracking water intake and also a reminder for setting custom break alerts.

<p align="center">
    <img src="https://i.imgur.com/Id14fNB.png" alt="Reboost Banner" style="width: 100%; height: auto;">
</p>

---

## **🧭 Navigation**

- [📋 Project Information](#seven)
- [❓ The Problem](#one)
- [🏛️ Technical Architecture](#two)
- [🌟 Key Features](#three)
- [⚙️ Installation & Setup](#five)
- [🛠️ Technologies Used](#six)
- [🤝 Contributing](#four)

---

## <a name="seven"></a>📋 Project Information

### **Links**

- **Chrome Web Store**: https://chromewebstore.google.com/detail/reboost/bdlffpdkioakgjjpmgpboogfiaegbpgp
- **Official Site**: https://reboost.fyi/
- **Chrome Extension Source Code**: https://github.com/seanverano/reboost
- **Official Site Source Code**: https://github.com/seanverano/reboost-site

This project was solely developed by me, **Sean Dustin Verano**.

Development started around October 2024, this Chrome extension is actively maintained to ensure stability, add features, and enhance user experience. With a growing user base, continuous updates keep it stable, functional, and user-friendly.

---

## <a name="one"></a>❓ The Problem

Many people forget to stay hydrated and take breaks while working or studying on a computer. Similar tools, like mobile apps, are often too generic, cluttered, and easy to ignore.

A Chrome extension is more efficient and faster, keeping users focused without switching devices.

---

## <a name="two"></a>🏛️ Technical Architecture

### **Frontend (React)**

- **`/`**: Homepage with an overview of the platform and its features, including two buttons, one to get started and another to visit the official website for more details.
- **`/menu`**: Menu where users can choose between the two features.
- **`/hydration-tracker`**: Feature 1 Page where users can log and track their water intake.
- **`/wellness-reminder`**: Feature 2 Page where users can set custom reminders.

---

## <a name="three"></a>🌟 Key Features

### **Feature 1: Two Self-Care Tools in One**

- **One-Tap Hydration Logging**: Quickly log water intake and track progress toward daily hydration goals.
- **Custom Wellness Reminders**: Set personalized break reminders (Eye Break, Hydration, etc.) with custom notes.
- **Mini Pop-Up Notifications**: Get non-intrusive alert notification to stay on track without disrupting your workflow.
- **Persistent Tracking & Insights**: Review daily hydration logs and countdown timers for upcoming breaks.

### **Feature 2: Free, Lightweight & Privacy-Focused**

- **Lightweight & Efficient**: Runs smoothly without slowing down your browser.
- **No Account Required**: Use all features without signing up.
- **No Data Tracking**: Your data stay on your device (local storage).
- **Completely Free**: No hidden fees, subscriptions, or in-app purchases.

---

## <a name="five"></a>⚙️ Installation & Setup

### **1. Clone the repository:**

```bash
git clone https://github.com/seanverano/reboost.git
```

### **2. Install dependencies:**

```bash
npm install
```

### **3. Build the extension:**

```bash
npm run build
```

### **4. Load the extension in Chrome:**

Open Google Chrome and navigate chrome://extensions/

Enable Developer Mode (toggle in the top-right corner)

Click **Load unpacked** and select the **build** folder inside your project

---

## <a name="six"></a>🛠️ Technologies Used

- React
- React Router
- Tailwind CSS
- React Icons
- Chrome Extension APIs (Alarms, Storage, and Notifications)

---

## <a name="four"></a>🤝 Contributing

This project is open for contributions! Feel free to submit issues and pull requests.
