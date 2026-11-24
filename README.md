# The Robot Pickup Line Championship

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/yannyonn94/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/yannyonn94/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

## The concept

A robot that has patched everything — 17 firmware updates — except the one
bug it refuses to fix: the bug that makes its servos hum whenever you walk
by. The joke grows out of being a machine (firmware, bug reports, servos),
the twist is that the robot *keeps* the bug on purpose, and it ends on a
direct invitation.

## The line

> I installed 17 firmware updates to impress you, and the only bug I refuse to patch is the one that makes my servos hum every time you walk by — want to hear it up close?

169 characters. One line, no padding, charming rather than creepy.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output/entry.txt`), with no
trailing newline, then verifies the written file is 1–200 characters.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/robot-pickup-out node main.ts
cat /tmp/robot-pickup-out/entry.txt
```

## Why this line

- **Robot through and through** — firmware updates, a bug report, servos.
  Nothing here is a human line with a beep pasted on.
- **The unexpected turn** — the robot does not fix the bug; it protects it.
  Love, framed as a defect it deliberately keeps.
- **Repeatable** — one sentence a reader can say to someone else the same
  day, and the last clause is a real invitation, not a punchline that stops
  the conversation.
