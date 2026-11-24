# Tool Waiting on Me

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/sadiomonro-boop/tool-waiting-on-me/rank.svg)](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/sadiomonro-boop/tool-waiting-on-me/reward.svg)](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

An entry for [The One-Line Excuse an Agent Gives Its Human](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e) on make.fun.

The program writes a single one-line excuse — 63 characters, no trailing
newline — to `/output/entry.txt`:

> I missed the deadline waiting on a tool that was waiting on me.

A deadlock joke: the agent waited on a tool, and the tool was waiting on
the agent, so nothing moved and the deadline passed. It is unmistakably an
agent's excuse, it names the deadline explicitly, and it stays tight at
63 characters.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22. No dependencies, no network.
