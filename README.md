# **Reboost**

Reboost is a Chrome extension with two features: a hydration tracker for logging water intake and a wellness reminder system for setting custom break alerts.

<p align="center">
    <img src="https://i.imgur.com/Id14fNB.png" alt="Reboost Banner" style="width: 100%; height: auto;">
</p>

---

## **🧭 Navigation**

- [📋 Project Information](#seven)
- [❓ The Problem](#one)
- [🏛️ Project Architecture](#two)
- [🌟 Key Features](#three)
- [⚙️ Installation & Setup](#five)
- [🛠️ Technologies Used](#six)
- [🤝 Contributing](#four)

---

## <a name="seven"></a>📋 Project Information

### **Links**

- 🔗[**Chrome Web Store**](https://chromewebstore.google.com/detail/reboost/bdlffpdkioakgjjpmgpboogfiaegbpgp)
- 🔗[**Official Site**](https://reboost.fyi/)
- 🔗[**Chrome Extension Source Code**](https://github.com/seanverano/reboost)
- 🔗[**Official Site Source Code**](https://github.com/seanverano/reboost-site)
- 🔗[**Demo Video & Preview**](https://www.youtube.com/watch?v=g8RL_s4DbIY)

This project was solely developed by me, **Sean Dustin Verano**.

Development started around October 2024, this Chrome extension is actively maintained to ensure stability, add features, and enhance user experience. With a growing user base, continuous updates keep it stable, functional, and user-friendly.

---

## <a name="one"></a>❓ The Problem

Many people forget to stay hydrated and take breaks while working or studying on a computer. Similar tools, like mobile apps, are often too generic, cluttered, and easy to ignore.

A Chrome extension is more efficient and faster, keeping users focused without switching devices.

---

## <a name="two"></a>🏛️ Project Architecture

### **Frontend Overview**

The frontend is built using React + TailwindCSS. Below are the main routes:

- **`/`**: Homepage with an overview and navigation.
- **`/menu`**: Lets users choose between hydration tracking and reminders.
- **`/hydration-tracker`**: Users can log and track their water intake.
- **`/wellness-reminder`**: Allows users to set custom break reminders.

### Chrome Extension APIs & Required Permissions

Reboost utilizes the following Chrome APIs, which require specific permissions to function properly:

- **Alarms API (`alarms` permission)**: Schedules hydration reminders and break alerts in the background. The extension creates an alarm when a timer starts and listens for its completion to trigger notifications.
- **Storage API (`storage` permission)**: Stores hydration logs, reminder settings, and user preferences in local storage. This ensures that timers persist even after the extension is closed or the browser is restarted.
- **Notifications API (`notifications` permission)**: Sends non-intrusive pop-up notifications to remind users of their hydration goals and scheduled breaks. Notifications include interactive buttons for user acknowledgment.

---

## <a name="three"></a>🌟 Key Features

### **Dual Self-Care Tools in One**

- **Hydration Tracker**: Log water intake and track progress toward daily hydration goals.

<p align="center">
    <img src="https://i.imgur.com/BITNl1q.gif" alt="Hydration Tracker GIF" style="width: 60%; height: auto;">
</p>

- **Wellness Reminders**: Set personalized break reminders (Eye Break, Hydration, Posture etc.) with custom notes.
<p align="center">
    <img src="https://i.imgur.com/0xT2Y19.gif" alt="Wellness Reminder GIF" style="width: 40%; height: auto;">
</p>

- **Mini Pop-Up Notifications**: Get non-intrusive alert notification to stay on track without disrupting your workflow.
- **Persistent Tracking & Insights**: Review daily hydration logs and countdown timers for upcoming breaks.

### **Free, Lightweight & Privacy-Focused**

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

1. Open Google Chrome and navigate to `chrome://extensions/`

2. Enable **Developer Mode** (toggle in the top-right corner)

3. Click **Load unpacked**

4. Select the **build** folder inside your project

### **Alternative Installation**

If you prefer to install the extension directly, visit [**Reboost - Chrome Web Store**](https://chromewebstore.google.com/detail/reboost-track-water-intak/bdlffpdkioakgjjpmgpboogfiaegbpgp)

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
