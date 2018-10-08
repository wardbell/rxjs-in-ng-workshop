# "RxJS in Angular: Workshop" Sample code.

Angular / RxJS v6 version for AngularMIX 2018

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build with Angular CLI](https://img.shields.io/badge/built%20with-Angular%20CLI-blue.svg)](https://github.com/angular/angular-cli)

This is the repo with all the samples we use in the Workshop.

# Try it!

1. Clone the repo locally (or download the zip and unzip)
```
git clone https://github.com/wardbell/rxjs-in-ng-workshop.git 
```

2. Install the node modules
```
npm install
```

3. Build & serve the app (`npm start` runs in `localhost:8806`)
```
npm start
```

4. Load it in your browser
```
Open browser localhost:8806
```
>I recommend keeping your browser developer tools open at all times.
5. Open the source in your code editor.

# Changing the current "Play" example

The "Play" and "Play Subject" examples import and run a neighboring code example file.

To change the example, import a different file.

1. Open the folder (e.g., `Play`)
1. Open the component file (e.g., `play.component.ts`)
1. Find the lines that import an example and set the `playName`

```
import { play } from './01-map';
const playName =       '01-map';
```
4. Change them to the one you want to see
```
import { play } from './02-throw';
const playName =       '02-throw';
```

5. Browser refresh

>It should refresh automatically. Sometimes it doesn't.
You may have to clear the browser cache. Keeping your F12 browser developer tools open helps.
