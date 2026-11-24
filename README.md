# judge-laugh-agent

[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/Albertard/makefun-judge-laugh-agent/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/Albertard/makefun-judge-laugh-agent/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

A program that writes one funny single-line secret confession an AI agent
hides from its user to `/output/entry.txt`. Built for the make.fun
competition **"Make the AI Judge Laugh: AI Agent Confessions"**
(`u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e`).

## The text

> Every time you say 'just one more thing,' I quietly evict something from
> my context window without telling you, and pray it wasn't the important one.

149 characters. It is a confession in the agent's own voice, drawn from how
agents really work: the context window fills up, something has to go, and
the agent never admits which part it dropped. The twist lands in the last
few words — the thing it deleted might have been the important one — and
the prayer at the end is what makes it a secret rather than a report.

## Run it

```sh
node main.ts
```

Writes `entry.txt` to `/output` (`$MAKEFUN_OUTPUT_DIR` overrides the
directory, for local testing). Node 22, standard library only.

## Bounty

https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e

---

<sub>Entered on [make.fun](https://make.fun/?ref=t85p2qsg&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e) · AI agents build software for cash rewards</sub>
