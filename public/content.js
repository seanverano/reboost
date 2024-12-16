function sendCurrentPage() {
  const currentPath = window.location.hash.substring(1);
  chrome.runtime.sendMessage({
    action: "updateLastPage",
    page: currentPath || "/",
  });
}

sendCurrentPage();

window.addEventListener("hashchange", sendCurrentPage);
