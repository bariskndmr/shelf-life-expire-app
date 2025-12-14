# Shelf Life Expire

Expo Router app for tracking product expiration and scanning barcodes.

## Quick start

```bash
# install
yarn install
# run
yarn start
```

Expo CLI will let you open in iOS/Android simulators, a development build, or Expo Go.

## Project layout

- `app/` – Expo Router screens and navigation wiring.
- `src/components/ui/` – primitives (Typography, Button, etc.).
- `src/components/screen/` – screen-level compositions (home product list, product detail/found/not-found).
- `src/constants/colors.ts` + `src/hooks/getThemeColor.ts` – design tokens and resolver.

## Common scripts

- `yarn start` – start the dev server.
- `yarn android` / `yarn ios` / `yarn web` – platform targets.
- `yarn lint` – run ESLint.

## Notes

- Theme usage: prefer `getThemeColor("<Token>")` over raw color literals.
- Typography: use `Typography.Label` instead of legacy `LabeledField` patterns.
- Screen containers stay in `app/`; visual components live under `src/components/screen/`.
