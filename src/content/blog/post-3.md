---
title: RAG -> stop hallucinations!
excerpt: Using them in a RAG architecture brings some different constraints to the table. I think the biggest one is the expectation, especially in a corporate setting, for being factual. But this is not the strength of an LLM. In fact many have deemed the ‘hallucination problem’ a feature and not a bug....
publishDate: 'Aug 18 2024'
tags:
  - RAG, hallucinations
---

# RAG -> stop hallucinations!

Working with LLM’s is interesting. Using them in a RAG architecture brings some different constraints to the table. I think the biggest one is the expectation, especially in a corporate setting, for being factual. But this is not the strength of an LLM. In fact many have deemed the ‘hallucination problem’ a feature and not a bug (see this paper from 2023 - https://arxiv.org/pdf/2310.01469).

There are many strategies to take, many layers of solutions that each retrieval and generation event can employ, to avoid hallucinating. A key factor is how much risk is involved - said another way - how much penalty may there be for being wrong?

I think there are two main strategies that a developer may take to minimise or remove risk.

1 - Always return a source alongside the answer. For example, “Your answer was generated using page 74 of document X.” And also clearly stating the answer needs to be verified.

2 - To remove all risk (yet severely limit the breadth of material you can release), you can generate synthetic question and answer pairs to your data. Before release each answer would need to be approved but this is much faster than manually generating the Q and A pairs. Then it’s simply a case of matching the users question to questions that exist in the database. Cosine similarity works well here with tailored responses based on the distance.

This note was prompted by learning about a popular RAG company ‘groundX’. They employ some interesting techniques in this area and claim much better results over simple RAG’s using only vector DB’s. Here’s an article I found (https://medium.com/@groundx-ai/why-llms-like-gpt-hallucinate-with-your-private-data-and-what-you-can-do-about-it-f0d1dc60fdbf)
