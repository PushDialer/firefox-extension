var PushDialer = {

  onLoad: function()
  {
    this.initialized = true;
    this.strings = document.getElementById("PushDialer-strings");
  },

  onMenuItemCommand: function(e)
  {
    var phoneNumberExpression = /([0-9+(]{1}[0-9 (.\/-]{2,}([0-9A-Z()\/]{1,4}[ .\/-]?){2,}[0-9A-Z][0-9A-Z]{1,2}([,;0-9]+))/m;
    var match                 = PushDialer.getSelection().match(phoneNumberExpression);
    var phoneNumber;

    if (match)
      phoneNumber = match[0];
    else
      return false;

    PushDialer.sendDialRequest(phoneNumber);
  },

  sendDialRequest: function(phoneNumber)
  {
    var dialNumberURL = "pushdialer://" + phoneNumber;

    if (typeof gBrowser != "undefined")
      gBrowser.loadURI(dialNumberURL);
    else
      messenger.launchExternalURL(dialNumberURL);
  },

  getSelection: function()
  {
    var selection;
    var activeElement = window.content.document.activeElement;

    if (activeElement.tagName == "IFRAME")
    {
      var inputElement = activeElement.contentDocument.querySelector("input:focus");
      selection = inputElement.value;

      if (selection.length > 0)
        return selection;
    }


    if (typeof getBrowserSelection != "undefined")
      selection = getBrowserSelection();
    else
      selection = document.commandDispatcher.focusedWindow.getSelection().toString();

    return selection;
  }

};

window.addEventListener("load", PushDialer.onLoad, false);
