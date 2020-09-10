(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{339:function(t,e,r){t.exports=r.p+"assets/img/1.aa1d67e3.png"},340:function(t,e,r){t.exports=r.p+"assets/img/2.eb6c7f33.png"},341:function(t,e,r){t.exports=r.p+"assets/img/3.edb2da82.png"},342:function(t,e,r){t.exports=r.p+"assets/img/4.9e8c4e84.png"},343:function(t,e,r){t.exports=r.p+"assets/img/5.444c22c4.png"},344:function(t,e,r){t.exports=r.p+"assets/img/6.9e2190e9.png"},517:function(t,e,r){"use strict";r.r(e);var o=r(33),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"login-to-windows-domain-computers-with-ms-active-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#login-to-windows-domain-computers-with-ms-active-directory"}},[t._v("#")]),t._v(" Login to Windows Domain Computers With MS Active Directory")]),t._v(" "),o("ol",[o("li",[t._v("Download and install the latest "),o("a",{attrs:{href:"https://github.com/OpenSC/OpenSC/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenSC"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("Use a text editor to add the following settings to "),o("em",[t._v("C:\\Program Files\\OpenSC Project\\OpenSC\\opensc.conf")]),t._v(".")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('# Nitrokey Pro, OpenPGP Card\ncard_atr 3B:DA:18:FF:81:B1:FE:75:1F:03:00:31:C5:73:C0:01:40:00:90:00:0C {\n\ttype = 9002;\n\tdriver = "openpgp";\n\t# name = "Nitrokey Pro";\n\tmd_read_only = false;\n\tmd_supports_X509_enrollment = true;\n}\n     \n# Nitrokey HSM, SmartCard-HSM\ncard_atr 3B:FE:18:00:00:81:31:FE:45:80:31:81:54:48:53:4D:31:73:80:21:40:81:07:FA {\n\ttype = 26000;\n\tdriver = "sc-hsm";\n\t# name = "Nitrokey HSM";\n \tmd_read_only = false;\n\tmd_supports_X509_enrollment = true;\n}\n')])])]),o("ol",{attrs:{start:"3"}},[o("li",[t._v('Open a command terminal and enter "regedit". Use regedit to import '),o("a",{attrs:{href:"https://www.nitrokey.com/sites/default/files/nk-hsm.reg",target:"_blank",rel:"noopener noreferrer"}},[t._v("this file"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("Now you can enroll Nitrokeys for your users managed in Microsoft Active Directory. You may either use Microsoft PKI, "),o("a",{attrs:{href:"https://www.gnupg.org/documentation/manuals/gnupg/Howto-Create-a-Server-Cert.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("gpgsm"),o("OutboundLink")],1),t._v(", or "),o("a",{attrs:{href:"http://www.mysmartlogon.com/products/smart-policy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Smart Policy"),o("OutboundLink")],1),t._v(". The following steps describe the usage of Smart Policy.")]),t._v(" "),o("li",[o("a",{attrs:{href:"http://download.mysmartlogon.com/SmartPolicyv2/SmartPolicy%20-%20Stage%203.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),o("OutboundLink")],1),t._v(" and install Smart Policy.")]),t._v(" "),o("li",[t._v('Select "Read a smart card"')])]),t._v(" "),o("p",[o("img",{attrs:{src:r(339),alt:"img1"}})]),t._v(" "),o("ol",{attrs:{start:"7"}},[o("li",[t._v("Select the certificate, mapping, and user.")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(340),alt:"img2"}})]),t._v(" "),o("ol",{attrs:{start:"8"}},[o("li",[t._v("Verify the device status via CRL.")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(341),alt:"img3"}})]),t._v(" "),o("ol",{attrs:{start:"9"}},[o("li",[t._v("Choose a Group Policy Object (GPO).")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(342),alt:"img4"}})]),t._v(" "),o("ol",{attrs:{start:"10"}},[o("li",[t._v("Confirm applying the mapping.")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(343),alt:"img5"}})]),t._v(" "),o("p",[t._v("From now on, when logging on to your Windows computer you need to connect the Nitrokey and enter your PIN.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(344),alt:"img6"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);