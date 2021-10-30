# I18nL10n

Build
- add `i18n` tags to templates
- `npm run extract-18n`
- duplicate outputed `messages.xlf` but renamed as `messages.{language}.xlf`
- Create a translated `<target>` for every `<source>`
- add your locales to angular.json and link to the translation file
- `npm run build-localize`

Run app
- `python3 -m http.server --directory ./dist/i18n-L10n`
- http://localhost:8000/en-US/
- http://localhost:8000/es/
- http://localhost:8000/fr/
- http://localhost:8000/zh-Hans/
