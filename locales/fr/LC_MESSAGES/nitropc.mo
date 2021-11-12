��    :      �              �  9   �     �          !  �   8  L   5  �   �  �     N   �  L   �  D   G  �   �  c   H  M   �  3  �  �   .
  �   �
  8  �  G   �  #        1  �   B     �    �  �   �  �   �  ]   !  z     @   �  �   ;     �     �               ,  �   @  C     C   T     �  �   �     c     �  �   �  �   �  >     �   M  Q     S   a  �   �  #   P     t  Y   �  I   �     /  1   K  @   }      �  �  �  L   �     
  -   )  #   W  -  {  _   �  �   	  �   �  P   q  S   �  P      �   g   x   d!  V   �!  S  4"  �   �#  �   b$  h  %  e   p&  +   �&     '  �   '     �'  S  �'  �   >)  �   *  }   �*  �   .+  C   �+  �   �+     �,     �,     �,      -     -  �   *-  [   .  L   {.  *   �.  �  �.  .   �0     1  F  *1  �   q2  M   �2    C3  Z   J4  \   �4  �   5  /   �5     �5  [   �5  a   Z6  "   �6  <   �6  B   7  -   _7   **Q:** What is the default hard-disk encryption password? Boot Entry Has Changed Boot Hash Mismatch Booting from USB drive Booting this USB drive entirely erases all data on the hard disk or SSD of the NitroPad without further warning. Don’t boot this USB drive on any computer which contains data you want to keep. Make sure to format the USB drive after the intended use. Change the passphrase for disk encryption by opening a terminal and execute: Check each screw individually to see if its individual appearance matches the photo. It is best to use a magnifying glass or macro lens for this purpose. Confirm the message with Enter to have the files changed by the system update verified. Afterwards you will be asked again for a confirmation. Confirm the question "Do you wish to add a disk encryption to the TPM" with N. Confirm the question "Please confirm that your GPG card is inserted" with Y. Confirm the question "Saving a default will modify the disk" with Y. Connect the USB drive to a black USB 2.0 socket (blue USB 3.0 don't work!), start the PC and keep pressing DEL until you see the firmware menu. Choose Boot Menu and select your USB drive. Connect the USB drive to your NitroPad and start it. In Heads menu select Boot Options -> USB Boot. Depending on the operating system you may need to confirm its reinstallation. Download one of the operating system images: `Ubuntu Linux <https://www.nitrokey.com/files/ci/nitropc/ubuntu-oem/>`__, `Qubes OS <https://www.nitrokey.com/files/ci/nitropc/qubes-oem/>`__, `Debian <https://www.nitrokey.com/files/ci/nitropc/debian-oem/>`__, `Linux Mint <https://linuxmint.com/download.php>`__ During boot of the system the error "Failed to start Load Kernel Modules" is displayed. `This is a known issue <https://github.com/QubesOS/qubes-issues/issues/2638>`_ which is not critical and can be ignored. During boot, the system will prompt you to enter the passphrase to decrypt the hard disk. Enter the default passphrase “PleaseChangeMe”. During boot, the system will prompt you to enter the passphrase to decrypt the hard disk. Enter the default passphrase “PleaseChangeMe”. The system will then guide you through the process of creating a user account. After that you should have successfully booted the system and could already use it normally. Enter the User PIN of the Nitrokey whenever prompted (default: 123456). Failed to start Load Kernel Modules First check the: First confirm the error message shown above. Then we see a list of all possible boat entries - choose the first one by simply pressing Enter. Getting Started Heads expects an English keyboard layout, on which e.g. “y” and “z” are swapped in comparison to the German keyboard layout. If you agree with the default selection (which is written in capital letter) you can also simply confirm by pressing Enter. If the bag or the screws do not match the photos sent, an unauthorized opening of your NitroPC cannot be excluded. In this case please contact us to arrange further action. If you ordered your NitroPC with sealed screws and in a sealed bag, it allows you to check if the NitroPC has been tampered with during shipping. If you press Enter afterwards, you will get an error message that looks like this or similar: If you restart the NitroPad after an update, the startup screen should initially appear as usual without an error message. Linux: ``dd``, `balenaEtcher <https://www.balena.io/etcher/>`__; Next, either another error message appears or the operating system starts. This depends on the system update. If the following error message appears, proceeds as described below: NitroPC NitroPC FAQ NitroPC with Debian NitroPC with Qubes OS NitroPC with Ubuntu Now insert the Nitrokey if this is not already the case and confirm with Enter. Then you must enter the User PIN of the Nitrokey (default: 123456). You will not see the characters you typed in on the screen. Now the NitroPad marks the files changed by the update as verified. Now the Nitrokey has to be plugged in, if this is not yet the case. Operating System Reinstallation Optional: Download hash sum and `verify <https://proprivacy.com/guides/how-why-and-when-you-should-hash-check#how-to-hash-check>`__ the downloaded operating system image. Procedure After a System Update System update The NitroPad watches for changes to important system files to detect third-party tampering. This means that special steps are sometimes necessary when updating the system. This can often be recognized by the fact that the system prompts you to reboot. The bag and all screws of the device have been sealed. For the bag and each of these screws you have received a photo by e-mail. The default NitroPC disk encryption password: "PleaseChangeMe" The system has a user account setup already. Choose it and login with the default passphrase "PleaseChangeMe". You may keep using the existing user account or create you a new one, as you like. This example shows a sealed screw whose glitter represents an individual pattern. To avoid accidential overwriting of valuable data, format the USB drive afterwards. To save this value as default, select the option “Make Ubuntu the default” for Ubuntu or “Make Qubes the default” for Qubes OS in the next window. Using WIFI (with RTL8821ce chipset) Verify Sealed Hardware Windows: `Rufus <https://rufus.ie/>`__, `balenaEtcher <https://www.balena.io/etcher/>`__; Write the operating system image to any USB drive. Possible applications: Your system will then boot. `Sign the boot partition. <system-update.html>`__ macOS: ``dd``, `balenaEtcher <https://www.balena.io/etcher/>`__. or choose your operating system: Project-Id-Version: Nitrokey Documentation
Report-Msgid-Bugs-To: 
POT-Creation-Date: 2021-11-12 19:42+0100
PO-Revision-Date: 2021-11-12 20:41+0000
Last-Translator: Anonymous <noreply@weblate.org>
Language: fr
Language-Team: French <https://translate.nitrokey.com/projects/nitrokey-documentation/documentation-nitropc/fr/>
Plural-Forms: nplurals=2; plural=n > 1
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: 8bit
Generated-By: Babel 2.6.0
 **Q:** Quel est le mot de passe par défaut pour le cryptage du disque dur ? L'entrée des bottes a changé Mauvaise concordance du hachage de démarrage Démarrage à partir d'une clé USB Le démarrage de cette clé USB efface entièrement toutes les données du disque dur ou du SSD du NitroPad sans autre avertissement. Ne démarrez pas cette clé USB sur un ordinateur qui contient des données que vous souhaitez conserver. Veillez à formater la clé USB après l'utilisation prévue. Changez la phrase de passe pour le cryptage du disque en ouvrant un terminal et en exécutant : Vérifiez chaque vis individuellement pour voir si son aspect individuel correspond à la photo. Il est préférable d'utiliser une loupe ou une lentille macro à cette fin. Confirmez le message en appuyant sur Entrée pour que les fichiers modifiés par la mise à jour du système soient vérifiés. Ensuite, une confirmation vous sera à nouveau demandée. Confirmez la question "Voulez-vous ajouter un cryptage de disque au TPM" avec N. Confirmez la question "Veuillez confirmer que votre carte GPG est insérée" par Y. Confirmez la question "L'enregistrement d'un défaut modifiera le disque" par Y. Connectez le lecteur USB à une prise USB 2.0 noire (les USB 3.0 bleues ne fonctionnent pas !), démarrez le PC et continuez à appuyer sur DEL jusqu'à ce que vous voyiez le menu du microprogramme. Choisissez Boot Menu et sélectionnez votre clé USB. Connectez la clé USB à votre NitroPad et démarrez-le. Dans le menu principal, sélectionnez Boot Options -> USB Boot. Selon le système d'exploitation, vous devrez peut-être confirmer sa réinstallation. Téléchargez l'une des images de système d'exploitation : `Ubuntu Linux <https://www.nitrokey.com/files/ci/nitropc/ubuntu-oem/>`__, `Qubes OS <https://www.nitrokey.com/files/ci/nitropc/qubes-oem/>`__, `Debian <https://www.nitrokey.com/files/ci/nitropc/debian-oem/>`__, `Linux Mint <https://www.nitrokey.com/files/linuxmint/latest.iso>`__ Lors du démarrage du système, l'erreur "Failed to start Load Kernel Modules" s'affiche. `C'est un problème connu <https://github.com/QubesOS/qubes-issues/issues/2638>`_ qui n'est pas critique et peut être ignoré. Pendant le démarrage, le système vous demandera d'entrer la phrase de passe pour décrypter le disque dur. Entrez la phrase de passe par défaut "PleaseChangeMe". Pendant le démarrage, le système vous demandera d'entrer la phrase de passe pour décrypter le disque dur. Entrez la phrase de passe par défaut "PleaseChangeMe". Le système vous guidera ensuite dans le processus de création d'un compte utilisateur. Après cela, vous devriez avoir réussi à démarrer le système et pouvoir déjà l'utiliser normalement. Saisissez le code PIN utilisateur de la Nitrokey lorsque vous y êtes invité (par défaut : 123456). Échec du démarrage de Load Kernel Modules Vérifiez d'abord le : Confirmez d'abord le message d'erreur indiqué ci-dessus. Ensuite, nous voyons une liste de toutes les entrées possibles du bateau - choisissez la première en appuyant simplement sur Entrée. Pour commencer Heads s'attend à une disposition du clavier en anglais, sur laquelle, par exemple, les lettres "y" et "z" sont interverties par rapport à la disposition du clavier en allemand. Si vous êtes d'accord avec la sélection par défaut (qui est écrite en majuscules), vous pouvez aussi simplement confirmer en appuyant sur la touche Entrée. Si le sac ou les vis ne correspondent pas aux photos envoyées, une ouverture non autorisée de votre NitroPC ne peut être exclue. Dans ce cas, veuillez nous contacter afin de prendre les mesures nécessaires. Si tu as commandé ton NitroPC avec des vis scellées et dans un sac scellé, cela te permet de vérifier si le NitroPC a été altéré pendant le transport. Si vous appuyez ensuite sur Entrée, vous obtiendrez un message d'erreur ressemblant à celui-ci ou à un message similaire : Si vous redémarrez le NitroPad après une mise à jour, l'écran de démarrage doit apparaître comme d'habitude sans message d'erreur. Linux : ``dd``, ``balenaEtcher <https://www.balena.io/etcher/>`__ ; Ensuite, soit un autre message d'erreur apparaît, soit le système d'exploitation démarre. Cela dépend de la mise à jour du système. Si le message d'erreur suivant apparaît, procédez comme indiqué ci-dessous : NitroPC FAQ de NitroPC NitroPC avec Debian NitroPC avec Qubes OS NitroPC avec Ubuntu Insérez maintenant la Nitrokey si ce n'est pas déjà le cas et confirmez avec Enter. Vous devez ensuite saisir le code PIN utilisateur de la Nitrokey (par défaut : 123456). Vous ne verrez pas les caractères que vous avez tapés à l'écran. Maintenant, le NitroPad marque les fichiers modifiés par la mise à jour comme vérifiés. Maintenant, la Nitrokey doit être branchée, si ce n'est pas encore le cas. Réinstallation du système d'exploitation Facultatif : Télécharger la somme de hachage et `vérifier <https://proprivacy.com/guides/how-why-and-when-you-should-hash-check#how-to-hash-check>`__ l'image du système d'exploitation téléchargée : `Ubuntu Linux <https://www.nitrokey.com/files/ci/nitropc/ubuntu-oem/>`__, `Qubes OS <https://www.nitrokey.com/files/ci/nitropc/qubes-oem/>`__, `Debian <https://www.nitrokey.com/files/ci/nitropc/debian-oem/>`__, `Linux Mint <https://www.nitrokey.com/files/linuxmint/latest.iso.sha256sum>`__ Procédure après une mise à jour du système Mise à jour du système Le NitroPad surveille les modifications apportées aux fichiers système importants afin de détecter toute altération par des tiers. Cela signifie que des mesures spéciales sont parfois nécessaires lors de la mise à jour du système. Cela peut souvent être reconnu par le fait que le système vous invite à redémarrer. Le sac et toutes les vis de l'appareil ont été scellés. Pour le sac et chacune de ces vis, vous avez reçu une photo par e-mail. Le mot de passe par défaut du cryptage du disque NitroPC : "PleaseChangeMe". Un compte utilisateur est déjà configuré dans le système. Choisissez-le et connectez-vous avec la phrase de passe par défaut "PleaseChangeMe". Vous pouvez continuer à utiliser le compte utilisateur existant ou en créer un nouveau, comme vous le souhaitez. Cet exemple montre une vis scellée dont les paillettes représentent un motif individuel. Pour éviter l'écrasement accidentel de données précieuses, formatez ensuite la clé USB. Pour enregistrer cette valeur par défaut, sélectionnez l'option "Make Ubuntu the default" pour Ubuntu ou "Make Qubes the default" pour Qubes OS dans la fenêtre suivante. Utilisation du WIFI (avec le chipset RTL8821ce) Vérifier le matériel scellé Windows : `Rufus <https://rufus.ie/>`__, `balenaEtcher <https://www.balena.io/etcher/>`__ ; Gravez l'image du système d'exploitation sur n'importe quelle clé USB. Applications possibles : Votre système va alors démarrer. `Signer la partition de démarrage. <system-update.html> `__ macOS : ``dd``, ``balenaEtcher <https://www.balena.io/etcher/>`__. ou choisissez votre système d'exploitation : 