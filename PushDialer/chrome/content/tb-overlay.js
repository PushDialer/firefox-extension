
PushDialer.onThunderbirdLoad = function(event)
{
  var mailContext = document.getElementById("mailContext");
  if (mailContext)
    mailContext.addEventListener("popupshowing",
      function (event)
      {
        PushDialer.showThunderbirdContextMenu(event);
      }, false);
};

PushDialer.showThunderbirdContextMenu = function(event)
{
  var contextMenu           = document.getElementById("mailContext");
  var separatorItem         = document.getElementById("context-PushDialerSeparator");
  var menuItem              = document.getElementById("context-PushDialer");
  var phoneNumberExpression = /([0-9+(]{1}[0-9 (.\/-]{2,}([0-9A-Z()\/]{1,4}[ .\/-]?){2,}[0-9A-Z][0-9A-Z]{1,2}([,;0-9]+))/m;
  var match                 = PushDialer.getSelection().match(phoneNumberExpression);

  if (match)
  {
    var phoneNumber = match[0];
    menuItem.label = 'Dial "' + phoneNumber + '" on iPhone';
    menuItem.hidden = false;
    separatorItem.hidden = false;
    // contextMenu.hidden = false;
  }
  else
  {
    menuItem.hidden = true;
    separatorItem.hidden = true;
    // contextMenu.hidden = true;
  }
};

window.addEventListener("load", PushDialer.onThunderbirdLoad, false);

