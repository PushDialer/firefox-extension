
PushDialer.onFirefoxLoad = function(event)
{
  document.getElementById("contentAreaContextMenu").addEventListener("popupshowing",
    function (event)
    {
      PushDialer.showFirefoxContextMenu(event);
    }, false);
};

PushDialer.showFirefoxContextMenu = function(event)
{
  var menuItem              = document.getElementById("context-PushDialer");
  var separatorItem         = document.getElementById("context-PushDialerSeparator");
  var phoneNumberExpression = /([0-9+(]{1}[0-9 (.\/-]{2,}([0-9A-Z()\/]{1,4}[ .\/-]?){2,}[0-9A-Z][0-9A-Z]{1,2}([,;0-9]+))/m;
  var match                 = PushDialer.getSelection().match(phoneNumberExpression);

  if (match)
  {
    var phoneNumber = match[0];
    menuItem.label = 'Dial "' + phoneNumber + '" on iPhone';
    menuItem.hidden = false;
    separatorItem.hidden = false;
  }
  else
  {
    menuItem.hidden = true;
    separatorItem.hidden = true;
  }
};

window.addEventListener("load", PushDialer.onFirefoxLoad, false);
