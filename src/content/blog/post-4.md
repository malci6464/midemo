---
title: Special token injection attacks
excerpt: A special token is one designed to only be relevant to the model - such as <|end_of_text|>. These can cause standard software engineering bugs if handled poorly in the code.
publishDate: 'Aug 18 2024'
tags:
  - Injection, special token
---

This X article by the hero, Andrej Karapathy seems worth highlighting.
https://x.com/karpathy/status/1823418177197646104

A special token is one designed to only be relevant to the model - such as <|end_of_text|>. These can cause standard software engineering bugs if handled poorly in the code. Andrej states:

"TLDR imo calls to encode/decode should never handle special tokens by parsing strings, I would deprecate this functionality entirely and forever. These should only be added explicitly and programmatically by separate code paths. ... I feel like this stuff is so subtle and poorly documented that I'd expect somewhere around 50% of the code out there to have bugs related to this issue right now.""

The comments to the tweet include the author of this paper : https://arxiv.org/pdf/2406.01288 - which relates the usage of special tokens to 'jailbreaking' - the ability to manipulate the behaviour of the model outside of its intended use case. I feel like this topic could be increasingly relevant as more software engineers move into the 'ai' stack. In the same way SQL injections are safely protected against in modern web design we might evolve to a similar place with LLM weaknesses.
