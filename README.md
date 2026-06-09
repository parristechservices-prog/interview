# Interview Mission Control

A reusable, local-first interview preparation app. It turns job details and
research notes into a focused workspace with role intelligence, likely
questions, pitches, flashcards, STAR stories, checklists and a debrief.

## Open the app

Open `index.html` in a modern browser. There is no install step, backend,
account or paid API.

## Create an interview profile

1. Open the Dashboard.
2. Select **+ New interview**.
3. Add the employer, role, date, format and location.
4. Open **Interview setup** and paste in the job ad and your notes.

The app includes starter profiles for Sunglass Hut and the 2026 ABS Census.

## Quick prep

Open an interview and select **Quick prep** in the sidebar. Choose 5, 10 or 30
minutes to review your pitch, role priorities, likely questions, STAR stories,
questions to ask, and practical checks.

## Local data

Profiles, notes, progress, checklists, pitches, debriefs and the shared STAR
story bank are saved automatically in browser LocalStorage on this device.
Clearing browser storage will remove this data.

## Export and import

Open an interview, go to **Interview setup**, and select **Export JSON** to
download a backup. From the Dashboard, select **Import JSON** and paste the
contents of an exported profile.

## Files

- `index.html` - app shell
- `styles.css` - responsive visual design
- `app.js` - starter data, coaching rules, interactions and persistence
