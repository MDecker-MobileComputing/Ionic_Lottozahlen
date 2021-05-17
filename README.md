# Ionic_Lottozahlen #

This repository contains a simple Ionic app using Angular and Capacitor, whose purpose is it to generate random numbers for the German lottery (6 out of 49).

The app is also offered as **Progressive Web App (PWA)**, which can be accessed under the following URL: https://mdecker-mobilecomputing.github.io/Ionic_Lottozahlen/

<br>

----

## Setup of Ionic project for PWA ##

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

To generate the PWA in folder [docs/](docs/) the following command has to be executed:
```
ionic build --prod
```
The default output folder for this command is `www`, but for this app it was changed to `docs` so the PWA can be served by [GitHub Pages](https://pages.github.com/).
See file [angular.json](angular.json#L17), attribute `projects/app/architect/options/outputPath`.

<br>

----
## License ##

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository.
