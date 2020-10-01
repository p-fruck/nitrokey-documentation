(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{512:function(t,e,o){"use strict";o.r(e);var i=o(33),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"nitrokey-fido2-with-windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nitrokey-fido2-with-windows"}},[t._v("#")]),t._v(" Nitrokey FIDO2 with Windows")]),t._v(" "),o("p",[t._v("The Nitrokey FIDO2 supports two-factor authentication (2FA) and passwordless authentication:")]),t._v(" "),o("ul",[o("li",[t._v("With "),o("strong",[t._v("passwordless authentication")]),t._v(", entering a password is replaced by logging in with the Nitrokey FIDO2 and a PIN.")]),t._v(" "),o("li",[t._v("With "),o("strong",[t._v("two-factor authentication")]),t._v(" (2FA), the Nitrokey FIDO2 is checked in addition to the password.")])]),t._v(" "),o("p",[t._v("The Nitrokey FIDO2 can be used with any current browser.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),o("p",[t._v("The Nitrokey App can not be used for the Nitrokey FIDO2.")])]),t._v(" "),o("h2",{attrs:{id:"passwordless-authentication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#passwordless-authentication"}},[t._v("#")]),t._v(" Passwordless authentication")]),t._v(" "),o("ol",[o("li",[t._v("Open a web page that supports FIDO2 (currently only "),o("a",{attrs:{href:"https://www.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("li",[t._v('Log in to the website and go to "Set up security key" in the security settings of your account.')]),t._v(" "),o("li",[t._v("Now you need to set a PIN for your Nitrokey FIDO2.")]),t._v(" "),o("li",[t._v("Touch the button of your Nitrokey FIDO2 when prompted.")]),t._v(" "),o("li",[t._v("Once you have successfully configured the device, you will need to activate your Nitrokey FIDO2 this way each time you log in, after entering your PIN.")])]),t._v(" "),o("h2",{attrs:{id:"two-factor-authentication-2fa"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#two-factor-authentication-2fa"}},[t._v("#")]),t._v(" Two-Factor Authentication (2FA)")]),t._v(" "),o("ol",[o("li",[t._v("Open one of the "),o("a",{attrs:{href:"https://www.dongleauth.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("websites that support FIDO U2F"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("Log in to the website and enable two-factor authentication in your account settings. (In most cases you will find a link to the documentation of the supported web service at "),o("a",{attrs:{href:"https://www.dongleauth.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dongleauth.info"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("Register your Nitrokey FIDO2 in the account settings by touching the button to activate the Nitrokey FIDO2. After you have successfully configured the device, you must activate the Nitrokey FIDO2 this way each time you log in.")])]),t._v(" "),o("p",[t._v("Checkout the "),o("a",{attrs:{href:"https://www.nitrokey.com/documentation/applications#p:nitrokey-fido2-u2f&os:all",target:"_blank",rel:"noopener noreferrer"}},[t._v("various use cases and supported applications"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),o("p",[t._v("Google only accepts the Chrome browser for registering the Nitrokey FIDO2 Logging in works fine with Firefox though.")])]),t._v(" "),o("h2",{attrs:{id:"touch-button-and-led-behavior"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#touch-button-and-led-behavior"}},[t._v("#")]),t._v(" Touch Button and LED Behavior")]),t._v(" "),o("p",[t._v("The first FIDO operation is automatically accepted within two seconds after connecting Nitrokey FIDO2. In this case touching the touch button is not required.")]),t._v(" "),o("p",[t._v("Multiple operations can be accepted by a single touch. For this, keep the touch button touched for up to 10 seconds.")]),t._v(" "),o("p",[t._v("To avoid accidental and malicious reset of the Nitrokey, the required touch confirmation time for the FIDO2 reset operation is longer and with a distinct LED behavior (red LED light) than normal operations. To reset the Nitrokey FIDO2, confirm by touching the touch button for at least 5 seconds until the green or blue LED lights up.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("LED Color")]),t._v(" "),o("th",[t._v("Event")]),t._v(" "),o("th",[t._v("Time Period")]),t._v(" "),o("th",[t._v("Comments")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Any (blinking)")]),t._v(" "),o("td",[t._v("Awaiting for touch")]),t._v(" "),o("td",[t._v("Until touch is confirmed or timed out")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("Any (blinking faster)")]),t._v(" "),o("td",[t._v("Touch detected, counting seconds")]),t._v(" "),o("td",[t._v("Until touch is confirmed or timed out")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("White (blinks)")]),t._v(" "),o("td",[t._v("Touch request for FIDO registration or authentication operation")]),t._v(" "),o("td"),t._v(" "),o("td",[t._v("Requires 1 second touch to complete; timeout is usually about 30 seconds")])]),t._v(" "),o("tr",[o("td",[t._v("Yellow (blinks)")]),t._v(" "),o("td",[t._v("Touch request for configuration operation")]),t._v(" "),o("td"),t._v(" "),o("td",[t._v("Requires 5 seconds touch to complete; e.g. used for activating firmware update mode")])]),t._v(" "),o("tr",[o("td",[t._v("Red (blinks)")]),t._v(" "),o("td",[t._v("Touch request for reset operation")]),t._v(" "),o("td",[t._v("Available only during the very first 10 seconds after Nitrokey is powered")]),t._v(" "),o("td",[t._v("Requires 5 seconds touch to complete; e.g. used for FIDO2 reset operation")])]),t._v(" "),o("tr",[o("td",[t._v("Green (constant)")]),t._v(" "),o("td",[t._v("Touch accepted, Nitrokey is active and accepting further FIDO2 operations")]),t._v(" "),o("td",[t._v("After touch was registered, 10 seconds timeout")]),t._v(" "),o("td",[t._v('For the FIDO registration or authentication operations after a confirmation Nitrokey enters into "activation" mode, auto-accepting any following mentioned operations until touch button is released, but not longer than 10 seconds')])]),t._v(" "),o("tr",[o("td",[t._v("Blue (constant)")]),t._v(" "),o("td",[t._v("Touch consumed - accepted and used up by the operation")]),t._v(" "),o("td",[t._v("Until touch is released")]),t._v(" "),o("td",[t._v("Touch consumption here means, that without releasing the touch button, and touching again the Nitrokey will not confirm any new operations")])]),t._v(" "),o("tr",[o("td",[t._v("White "),o("br"),t._v(" (single blink)")]),t._v(" "),o("td",[t._v("Nitrokey ready to work")]),t._v(" "),o("td",[t._v("0.5 seconds after powering up")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("- (no LED signal)")]),t._v(" "),o("td",[t._v("Nitrokey is idle")]),t._v(" "),o("td"),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("- (no LED signal)")]),t._v(" "),o("td",[t._v("Auto-accept single FIDO registration or authentication operation")]),t._v(" "),o("td",[t._v("Within first 2 seconds after powering up")]),t._v(" "),o("td",[t._v("Nitrokey is automatically accepting any single FIDO registration or authentication operation upon insertion event - the latter is treated as an equivalent of the touch button registration signal (user presence); the configuration/reset operations are not accepted")])]),t._v(" "),o("tr",[o("td",[t._v("All colors")]),t._v(" "),o("td",[t._v("Nitrokey is in Firmware Update mode")]),t._v(" "),o("td",[t._v("Active until firmware update operation is successful, or until reinsertion")]),t._v(" "),o("td",[t._v("If the firmware update fails, the Nitrokey will stay in the this mode until the firmware is written correctly")])])])]),t._v(" "),o("h2",{attrs:{id:"nitrokey-reset"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nitrokey-reset"}},[t._v("#")]),t._v(" Nitrokey Reset")]),t._v(" "),o("p",[t._v("To avoid accidental and malicious reset of the Nitrokey, the required touch confirmation time for the FIDO2 reset operation is longer and with a distinct LED behavior (red LED light) than normal operations. To reset the Nitrokey FIDO2, confirm by touching the touch button for at least 5 seconds until the green or blue LED lights up.")]),t._v(" "),o("h3",{attrs:{id:"windows-10"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-10"}},[t._v("#")]),t._v(" Windows 10")]),t._v(" "),o("p",[t._v("Make sure you use Windows 10 at least at version 2004. Please follow the reset wizard.")]),t._v(" "),o("p",[t._v("If the total taken time for execution will be more than 10 seconds, the Windows OS' user interface will report failure. Reset operation is executed on the Nitrokey even after the latter is reported failing, as long as the user's touch will be registered before the Nitrokey's internal operation timeout (touch confirmation is shown with the blue color).")]),t._v(" "),o("h3",{attrs:{id:"windows-10-older-versions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-older-versions"}},[t._v("#")]),t._v(" Windows 10 (Older Versions)")]),t._v(" "),o("p",[t._v("In Windows 10 1909 the device has to be reinserted before the reset operation is executed. Additional white colored operation needs to be confirmed (until green light is shown, then touch has to be released).")]),t._v(" "),o("p",[t._v("Detailed scenario:")]),t._v(" "),o("ol",[o("li",[t._v("Reinsert the Nitrokey right before executing reset operation")]),t._v(" "),o("li",[t._v("Execute reset operation in the user interface")]),t._v(" "),o("li",[t._v("Confirm operation with white light (at least 1 second press, until turns green)")]),t._v(" "),o("li",[t._v("Release the touch")]),t._v(" "),o("li",[t._v("Confirm operation with red light (at least 5 seconds press, until turns blue)")])]),t._v(" "),o("h3",{attrs:{id:"windows-10-on-a-virtual-machine"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-on-a-virtual-machine"}},[t._v("#")]),t._v(" Windows 10 on a Virtual Machine")]),t._v(" "),o("p",[t._v("Please keep in mind Nitrokey has internal timeout for accepting the FIDO reset operation of 10 seconds since powering up.\nIf the Nitrokey will connect to Virtual Machine later than that, device will return error and the operation will be aborted.")])])}),[],!1,null,null,null);e.default=r.exports}}]);