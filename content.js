chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var values = document.querySelector("iframe#galaxyIframe.visible").contentWindow.document.querySelectorAll("._GAGu");
      
      var conversionsA = Number(values[0].innerText);

      var conversionsB = Number(values[1].innerText);

      var cvrA = Number(values[4].innerText.slice(0, -1));

      var cvrB = Number(values[5].innerText.slice(0, -1));

      var url= "https://abtestguide.com/calc/?ua="+(conversionsA/cvrA*100)+"&ub="+(conversionsA/cvrA*100)+"&ca="+conversionsA+"&cb="+conversionsB;

      console.log(url);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": url});

    }
  }
);