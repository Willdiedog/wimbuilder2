﻿$('body').css("font-family", "'Open Sans', Arial");

$i18n = {
  "Beginner":"Kezdő",
  "Professional":"Profi",
  "Developer":"Fejlesztői",
  " Mode":" Mód",
  "Getting Started":"Kezdés",
  "Project":"Projekt",
  "Customize":"Testreszabás",
  "Building":"Lérehozás",
  "Settings":"Beállítások",
  "Advanced":"Haladó",
  "About":"Névjegy",
  "Quick build":"Gyors létrehozás",
  "build(cmd)":" cmd mód",
  "build(log)":" naplózás",
  "Browse...":"Tallóz...",
  "<strong>INFO</strong>:You can set the default settings in 'config.js', and your selection will auto save in 'AppData\\auto_config.js', make you start quickly for next time. If you want to modify the settings later, use the left-side navigition menu to show this page.":
       "<strong>INFO</strong>:Megadhatja az alapértelmezett beállításokat a 'config.js'- ben, és a választásai automatikusan mentődnek az 'AppData\\auto_config.js'-be, így gyorsan elindul a következő alkalommal. Ha később módosítani szeretné a beállításokat, a bal oldali navigációs menü segítségével jelenítse meg ezt az oldalt.",
  "<strong>INFO</strong>:Current mode is 'Beginner', you can change the mode in 'Settings' page.":
      "<strong>INFO</strong>:A jelenlegi mód 'Kezdő', módosíthatja a módot a Beállítások oldalon",
  "Please configure the base infomation:":"Konfigurálja az alapadatokat:",
  "Set the build workspace":"Állítsa be a munkaterületet",
  "Select build workspace folder:":"Válasszon munkaterület mappát:",
  "Please select the mounted Windows ISO drive(eg. H:\\)":"Adja meg a felcsatolt Windows ISO meghajtóját(pl. H:\\)",
  "Please select the Windows ISO folder/drive, or the 'sources' folder(auto detect)":"Kérlek, add meg a Windows ISO-t tartalmazó mappa/meghajtó helyét, vagy a 'forrás' könyvtárat (van auto detektálás)",
  "Select the image path or the 'sources' folder":"Adja meg a képfájl helyét, vagy a 'forrás' könyvtárt",
  "Auto extract the winre.wim":" A wire.wim automatikus kibontása",
  "<strong>INFO</strong>:the install.wim isn't exist.":"<strong>INFO</strong>:az install.wim nem létezik.",
  "Select the install.wim file if it needed":"Válassz install.wim fájlt, ha szükséges",
  "<strong>ERROR</strong>:the base wim isn't exist.":"<strong>ERROR</strong>:az alap wim nem létezik.",
  "Select the extracted install.wim folder if it needed":"Válaszd ki a kicsomagolt install.wim mappáját, ha szükséges",
  "Select the extracted install.wim folder:":"Válaszd ki a kicsomagolt install.wim mappáját:",
  "Select the base image(boot.wim/winre.wim or other customed.wim)":"Válaszd ki az alap képfájlt (boot.wim/winre.wim vagy más, saját.wim)",
  "Use test\\boot.wim":" a teszt\\boot.wim használata",
  "<strong>Notice</strong>:Please select the correct wim file, and the image index, otherwise cause build failed.":
      "<strong>Megjegyzés</strong>: Megfelelő wim fájlt és indexet válassz, egyébként hiba keletkezik.",
  "<strong>Notice</strong>:Some updated versions may not boot properly. Please refer to the description of project for the supported version.":
      "<strong>Megjegyzés</strong>: Egyes frissített verziók nem mindig indulnak megfelelően. Kérjük, olvasd el a támogatott verziók projektleírását.",

  "Skip when project is selected":" Lépd át, ha a projekt már ki van választva.",

  "Current project:":"Jelenlegi projekt:",
  "Patch Preset:":"Beállítások:",
  "current":"jelenlegi",
  "custom":"egyéni",
  "default":"alapértelmezett",
  "demand":"igény szerint",
  "full":"teljes",
  "Save As...":"Mentés másként...",
  "SaveAs Preset":"Mentési beállításkészlet",
  "New Name:":"Új név:",
  "Saved Presets:":"Mentett beállításkészlet:",
  "Save":"Mentés",
  "This preset couldn't work in Beginner Mode.":"Ez a beállítás nem működik a Kezdő módban.",
  "OpenFolder":"Mappa",
  "Edit main.bat":"main.bat szerkesztése",
  "Edit last.bat":"last.bat szerkesztése",
  "Will open file with notepad.exe, You can edit [%s] file to change the editor.":"A notepad nyitja meg a fájlt, a [%s] fájl módosításával megváltoztathatja a szerkesztőt.",

  "The _ISO_ folder is not available, you can\'t create bootable ISO image.\r\nPlease make your ISO template manually, or select the Windows ISO folder/drive for auto creating.":
      "Az _ISO_ mappa nem elérhető, nem lehet megcsinálni a bootolható ISO-t.\r\nHozd létre az ISO sablont kézzel, vagy válaszd a Windows ISO mappát/meghajtót, és automatikusan elkészíti.",
  "Subst mounted folder to Drive":"A csatolt könyvtár meghajtóhoz rendelése",
  " Auto":" Automatikus",
  "<strong>INFO</strong>:If the mounted folder isn't mapping to X:, The patch scripts need use %X%\\ than X:\\ when modifying, deleting the files, and please don't create the shortcuts on building, they may point to the wrong target, do it on booting phase.":
      "<STRONG>INFÓ</STRONG>: A patch szkripteknek szüségük van az %X% változóra, amikor módosítják, törlik a fájlokat. Ezért ha a csatolt mappa nincs hozzárendelve X: meghajtóhoz, a képfájl így létrehozott parancsikonjai bootoláskor rossz helyre mutathatnak.",
  "Mapping drive is used":"A meghajtó használatban van",
  "If the Drive is used by the unfinish build, click Continue to go on, it will be fixed,":"Ha a meghajtót egy befejezetlen munka használja, kattints a Folytatásra, ki fogja javítani.",
  "otherwise, please select an usable drive.":"egyébként keress egy használható meghajtót.",
  "Continue":"Folytatás",
  "Cancel":"Mégse",
  "0-cleanup":"0-megtisztít",
  "1-build(cmd)":"1-felépít(cmd)",
  "1-build(log)":"1-naplózva(log)",
  "2-make_iso":"2-ISO",
  "Create ISO after building":" Képfájlból ISO létrehozása",
  "Execute command after building:":" Parancs futtatása, ha elkészült",
  "Please input the command.(eg. VBox.cmd testvm)":"A parancs. (pl. VBox.cmd testvm)",
  "Execute":"Futtat",
  "Open log folder":"Log mappa megnyitása",
  "Open last build log":"Az utolsó log megnyitása",
  "Please select a project:":"Válassz projektet:",
  "Project Information":"Projekt infó",

  "Mode :":"Mód :",
  "<strong>Beginner</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--- Just started using this software. Make the options be kind. Avoid failure due to incorrect option settings.":
      "<strong>Kezdő</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--- Még csak most kezdte használni a szoftvert. Ezekkel a beállításokkal elkerülheti a hibákat.",
  "<strong>Professional</strong> --- Knows this software well. Shows more options.":
      "<strong>Profi</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--- Jól ismeri ezt a szoftvert. További lehetőségek megjelenítése.",
  "<strong>Developer</strong> &nbsp;&nbsp;&nbsp;&nbsp;--- Knows the codes of this software, Shows the options for developer.":
      "<strong>Fejlesztői</strong> ---  Ismeri a szoftver kódját, mutatja a lehetőségeket a fejlesztőknek.",
  "Language :":"Nyelv :",
  "Theme :":"Téma :",
  "Update :":"Frissítés :",
  "Auto":"Auto",
  "None":"Nincs", 
  "High":"Magas",
  "Custom":"Egyéni",
  "Restart to apply changes to your settings?":"Indítsuk újra a változások életbelépéséhez?",
  "Yes":"Igen",
  "No":"Nem",

　　"Commands":"Parancsok",
　　"Reserved":"Lefoglalt",
　　"Clear":"Törlés",
　　"Load":"Betöltés",

  "Update":"Frissítés",
  "Restart":"Újraindítás",
  "Will update from %s, you can change the update source in [Settings] page.":"A frissítés a következőről lesz:%s, a frissítési forrást a [Beállítások] lapon módosíthatja.",

  "Please startup with WimBuilder.cmd.":"Kérlek, indítsd a Wimbuilder.cmd-vel.",
  "No project to build.":"Nincs projekt kiválasztva.",
  "A project has been found running.":"Egy projekt már fut.",
  "Do you want to build the [%s] project?":"Akarod a [%s] projektet felépíteni?",
  "Please select a project for building.":"Kérlek, válassz egy projektet.",
  "The system cannot find the file specified.":"A rendszer nem találja a megadott fájlt",
  "#LASTDUMMY#":""
}
