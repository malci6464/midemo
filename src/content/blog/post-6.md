---
title: Gradient checkpointing
excerpt: How much GPU do you need? State of the art performance requires state of the art machinery. A100's are not cheap!
publishDate: 'Aug 19 2024'
tags:
  - GPU memory, gradient checkpointing
---

Gradient checkpointing enables you to run a more powerful model on your machine - beneficial under training. A more careful analysis has to be done if applying this technique in the cloud as you are essentially trading memory for time. If a more powerful model isn’t required then it can enable a larger batch size.

Essentially many activations are recomputed on the backward pass as needed rather than having been fully stored in the original forward pass. Estimates are up to a 50% reduction in memory footprint.
