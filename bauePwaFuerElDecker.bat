
@REM siehe Kommentare bauePwaFuerGitHubPages.bat

ionic build --prod -- --base-href "https://el-decker.de/ionic-lottozahlen/" --output-path=www-eldecker


@REM Die beiden Attribute können auch in der Datei angular.json angepasst werden, aber wegen der Änderung von base-href
@REM funktioniert dann "ionic serve" nicht mehr.
