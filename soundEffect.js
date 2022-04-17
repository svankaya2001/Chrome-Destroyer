function playAudio() {
    let audio = new Audio("sound_effect/bomb.mp3");
    audio.play();
}
chrome.tabs.onActivated.addListener(() => { playAudio(); });
chrome.tabs.onCreated.addListener(() => { playAudio(); });
chrome.tabs.onRemoved.addListener(() => { playAudio(); });
chrome.tabs.onUpdated.addListener(() => { playAudio(); });
chrome.tabs.onMoved.addListener(() => { playAudio(); });
chrome.tabs.onReplaced.addListener(() => { playAudio(); });