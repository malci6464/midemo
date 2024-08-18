---
title: GPU - Model memory
excerpt: How much GPU do you need? State of the art performance requires state of the art machinery. A100's are not cheap!
publishDate: 'Aug 18 2024'
tags:
  - GPU memory, VRAM
---

If you are prototyping local LLM models at your corporate job, you have likely had the positive surprise of being able to run a model on your own machine. I’m on a Mac M1 and the speed of Llama 3.1 8b is more than acceptable. The problem is after the demo usage you begin to see how much ability of the model you are leaving on the table by using the smallest model. Equally this version is 4 bit quantized which means performance regression. So the natural question is, “how much more compute do I need to upgrade?”

TLDR - rather than invest in $50k-$100k, invest in a secure environment, skip all the network and software engineering, electrical and thermal management and use a powerful and secure endpoint for your model - for example Modal.

State of the art performance requires state of the art machinery. A100's are not cheap! Thankfully this article provides a good explanation with whats needed and show some calculations for GPU memory- https://www.substratus.ai/blog/calculating-gpu-memory-for-llm. A model has to fit on a single or sharded instance.

Still, an edge environment with limited bandwidth makes a medium investment more appealing for a medium model - especially if used in say a RAG scenario as is often the case in corporate. Also costs must be considered if there is very high usage, or agentic behaviour is enabled where the model may call itself a number of times!
