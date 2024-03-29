# Lottozahlenwürfel mit Ionic #

<br>

This repository contains a simple Ionic app using Angular and Capacitor, whose purpose is it to generate random numbers for the German lottery (6 out of 49).

<br>

The app is also offered as [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), which can be accessed under the following URL:

&nbsp;&nbsp;&nbsp;&nbsp;  https://mdecker-mobilecomputing.github.io/Ionic_Lottozahlen/

<br>

----

## Screenshots of the Android app ##

<br>

![Screenshot 1](screenshot_1.png)   ![Screenshot 2](screenshot_2.png)

![Screenshot 3](screenshot_3.png)

<br>

----

## Setup of Ionic project for PWA ##

<br>

Create the project with Capacitor:
```
ionic start lottozahlen blank --type=angular --capacitor
```

<br>

The minimum version of capacitor required is 3.0. Use the following command to check the version of capacitor:
```
npx cap --version
```
If the version according to the output of this command is less than 3.0, then use the following command to upgrade capacitor:
```
npm install @capacitor/cli@next @capacitor/core@next
```

<br>

The following command is needed to turn the app into a PWA:
```
ng add @angular/pwa
```
The commands adds the ServiceWorker and the Web App Manifest (see [here](/src/manifest.webmanifest)).

<br>

To generate the PWA to be served on *GitHub Pages*, on Windows the batch file [bauePwaFuerGitHubPages.bat](bauePwaFuerGitHubPages.bat) 
has to be executed, while on MacOS and Linux the Bash script [bauePwaFuerGitHubPages.sh](bauePwaFuerGitHubPages.sh) has to be executed. 
After this the (updated) PWA should be in folder [docs/](docs/).

To generate the PWA to be served by [Firebase Hosting](https://firebase.google.com/docs/hosting/) there are two similar scripts, namely 
[bauePwaFuerFirebaseHosting.bat](bauePwaFuerFirebaseHosting.bat) and [bauePwaFuerFirebaseHosting.sh](bauePwaFuerFirebaseHosting.sh).

When you push the new files in folder `docs/` to the GitHub repository, then the updated app should be available under the following 
URL within a few minutes: https://mdecker-mobilecomputing.github.io/Ionic_Lottozahlen/

<br>

----

## License ##

<br>

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository.

<br>
