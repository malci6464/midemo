---
title: Tokenization
excerpt: “Tokenization is at the heart of much weirdness of LLMs. Do not brush it off.” AK

publishDate: 'Aug 29 2024'
tags:
  - Tokenization
---

Why learn about tokenizers and tokenization? To quote directly from the master, Andrej K, “Tokenization is at the heart of much weirdness of LLMs. Do not brush it off.”
If we are building our own LLM for fun, then the tokenizer is just a one line implementation. If we are working in the domain of research, then it appears to be a rich area to tackle. There seems to be tangible gains to be made in some primary cases.

Handling foreign language characters, handling special end of line characters (which also makes it susceptible to a type of prompt injection attack - also highlighted by Andrej) and finally the issue of capitalisation and duplication that this causes. Jeremy Howard points out that the issue is well known but hasn’t been applied yet. Some comments in the X thread explain the issue clearly.

“yes” and “Yes” are completely different tokens
How are we ok with models needing to learn the meaning of yes twice and then the fine difference between “y” and “Y”?
