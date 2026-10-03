# ana-ionic2

A mobile app ("**ana**") built with **Ionic 3 / Angular 4**, generated from the Ionic "sidemenu" starter template.

## What this is

This is a learning/practice mobile app scaffolded from Ionic's default sidemenu starter, with a few custom pages added on top (welcome, login, signup, home, list) and a simple `User` provider. It looks like a personal exercise to learn hybrid mobile app development with Ionic/Angular/Cordova rather than a finished product — most of the business logic is still example/placeholder code (e.g. hardcoded test credentials in the login page).

## Tech stack

- Ionic 3, Angular 4, TypeScript
- `@ionic-native` plugins (status bar, splash screen)
- `@ionic/storage`
- Cordova (for building to iOS/Android)

## App structure

- `src/pages/welcome` — welcome/intro page
- `src/pages/login` — login page (demo credentials wired in)
- `src/pages/signup` — sign-up page
- `src/pages/home` — home page (default root page)
- `src/pages/list` — list page
- `src/providers/user` — simple user service/provider

## How to run

```bash
npm install -g ionic cordova
npm install
ionic serve          # run in the browser
# or, for a device/emulator:
ionic cordova platform add android   # or ios
ionic cordova run android            # or ios
```

## Context

Personal practice project exploring Ionic 3 / Angular mobile app development, built from the official Ionic starter template.

