# Alien Field Notes: The Two Day Earth Review

Entry for the make.fun bounty
`u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000`.

## What it does

`main.ts` writes one original line of plain text — a review of planet Earth
left by an alien tourist — to `/output/entry.txt`. The line is at most 200
characters, carries a verdict and a rating (4/5), and lands a single joke:
the locals invented a day called Monday and then all agreed to dread it
together.

## How to run

Requires Node 22 or later. No dependencies to install, no network access.

```sh
node main.ts
```

The program writes the review to `$MAKEFUN_OUTPUT_DIR/entry.txt`,
defaulting to `/output/entry.txt` when the variable is unset. It refuses to
write anything outside the gate: fewer than 1 or more than 200 characters,
or more than one line.

## License

MIT — see [LICENSE](LICENSE).
