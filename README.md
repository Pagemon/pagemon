# Pagemon
Pagemon is a chrome extension that notify you when the page changes.
**Pagemon is a productivity extension. It is helpful when you want to perform multiple tasks on your machine without checking every few seconds some updates in a single page app.**

# Specifications
Pagemon lets you pick an element inside the web page using the shortcut: `ctrl+shift+0` after clicking the shortcut the page will turn into a *selection mode* (simillar to the way `ctrl+shift+c` does but without switching to developers mode). In  *selection mode* the HTML elements that you hover on with the mouse will be highlighted. The HTML element you clicked on will be monitored. After you click on an element you will be prompted with a popup dialog box that lets set the setting for monitoring the selected element. After approving the *monitor settings* the extension will start monitoring that element. When the *notification condition* that you set in the *monitor settings* will be true you will receive an operating system notification.

The tab of the monitored web page should remain open in the background to monitor the element.

## Monitor settings
We will support only one type of condition: 
* Notify when element contains: string

### Additional monitor settings
* Notification message: string

# Installation
1. Clone the repository
2. Open chrome and go to `chrome://extensions/`
3. Enable developer mode
4. Click on `Load unpacked` and select the `src` folder in the repository