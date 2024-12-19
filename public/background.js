// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startTimer") {
    const { title, message, duration } = request.payload;
    startTimer(title, message, duration, sendResponse);
    return true;
  } else if (request.action === "getTimerStatus") {
    getTimerStatus(sendResponse);
    return true;
  }
});

function startTimer(title, message, duration, sendResponse) {
  chrome.alarms.clearAll();

  const startTime = Date.now();
  const endTime = startTime + duration * 1000;

  chrome.alarms.create("reminderAlarm", {
    when: endTime,
  });

  const timerData = {
    title,
    message,
    duration,
    startTime,
    endTime,
    isActive: true,
    timeRemaining: duration,
    notificationShown: false,
  };

  chrome.storage.local.set({ timerData }, () => {
    sendResponse({ status: "Timer started" });
  });
}

function getTimerStatus(sendResponse) {
  chrome.storage.local.get(["timerData"], (result) => {
    if (result.timerData && result.timerData.isActive) {
      const now = Date.now();
      const timeRemaining = Math.max(
        0,
        Math.floor((result.timerData.endTime - now) / 1000)
      );
      const isActive = timeRemaining > 0;

      const updatedTimerData = {
        ...result.timerData,
        timeRemaining,
        isActive,
      };

      chrome.storage.local.set({ timerData: updatedTimerData }, () => {
        sendResponse({
          timeRemaining,
          isActive,
          shouldShowNotification:
            !isActive && !result.timerData.notificationShown,
        });
      });
    } else {
      sendResponse({
        timeRemaining: 0,
        isActive: false,
        shouldShowNotification: false,
      });
    }
  });
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "reminderAlarm") {
    chrome.storage.local.get(["timerData"], (result) => {
      if (result.timerData && !result.timerData.notificationShown) {
        showNotification(result.timerData.title, result.timerData.message);
      }
    });
  }
});

function showNotification(title, message) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/bell.png",
    title: title,
    message: message,
    requireInteraction: true,
    buttons: [
      {
        title: "Got It! 👍",
      },
    ],
  });

  chrome.storage.local.get(["timerData"], (result) => {
    if (result.timerData) {
      const updatedTimerData = {
        ...result.timerData,
        isActive: false,
        timeRemaining: 0,
        notificationShown: true,
      };
      chrome.storage.local.set({ timerData: updatedTimerData });
    }
  });
}

chrome.notifications.onButtonClicked.addListener((notificationId) => {
  chrome.notifications.clear(notificationId);
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["timerData"], (result) => {
    if (result.timerData && result.timerData.isActive) {
      const now = Date.now();
      if (result.timerData.endTime > now) {
        chrome.alarms.create("reminderAlarm", {
          when: result.timerData.endTime,
        });
      }
    }
  });
});
