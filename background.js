console.log("Dictionary background!");

chrome.runtime.onMessage.addListener(receiver);

function receiver(req, sender, res){
    console.log(req);
}
