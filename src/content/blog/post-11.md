---
title: Perceptron math part 2
excerpt: Beyond the basic math, what do perceptrons have to do with modern learning and how can circumvate their limitations.

publishDate: 'Nov 14 2025'
tags:
  - MLP, perceptron, foundations
---




### The Update Rule 

How does the hyperplane move? How can we ensure all our points are classified correctly?


Given a misclassified sample $x_i, y_i$, the perceptron update is:

$$w_{\text{new}} = w + \eta y_i x_i$$


$$b_{\text{new}} = b + \eta y_i$$

**A concrete example:**

Let's say we have a misclassified point with feature vector $x_i = [3, 5, 6, 7]$ and true label $y_i = +1$. Our current weight vector is $w = [1, 2, 3, 4]$, our current bias is $b = 2$, and our learning rate is $\eta = 0.1$.

To update the weights, we calculate $\eta y_i x_i = 0.1 \times (+1) \times [3, 5, 6, 7] = [0.3, 0.5, 0.6, 0.7]$. Then our new weight vector becomes $w_{\text{new}} = [1, 2, 3, 4] + [0.3, 0.5, 0.6, 0.7] = [1.3, 2.5, 3.6, 4.7]$.

For the bias, we calculate $\eta y_i = 0.1 \times (+1) = 0.1$, so our new bias becomes $b_{\text{new}} = 2 + 0.1 = 2.1$.

**Understanding the notation:**

Let's break down what each symbol means in these update equations. The symbol $w_{\text{new}}$ represents the new weight vector after we make an update, while $w$ is the current weight vector before the update. The weight vector contains all the parameters that define the direction of our decision boundary.

The symbol $\eta$ (pronounced "eta") is called the learning rate. It's a small positive number that controls how big of a step we take when adjusting our weights. Think of it like the size of your steps when walking—too large and you might overshoot your destination, too small and it takes forever to get there.

The symbol $y_i$ is the true label of the misclassified point, which is either +1 or -1. This tells us which side of the boundary the point should actually be on. The symbol $x_i$ is the feature vector of the misclassified point—this is just the coordinates of the point in our feature space (like height and weight, or any other measurements we're using).

For the bias term, $b_{\text{new}}$ is the new bias value after the update, and $b$ is the current bias before the update. The bias is a single number that shifts the decision boundary up or down (or left and right, depending on how you visualize it).

When we multiply $\eta y_i x_i$, we're scaling the point's coordinates by both the learning rate and its true label. If the point should be positive ($y_i = +1$), we add a scaled version of the point to our weights, pulling the boundary toward it. If it should be negative ($y_i = -1$), we subtract a scaled version, pushing the boundary away from it.

**How do we know a point is on the wrong side?**


When a point is on the wrong side, we "pull" the hyperplane toward it by moving the weights in the direction of the point if it should be positive, or away from it if it should be negative. The learning rate $\eta$ controls how big each step is. If the learning rate is too large, you overshoot and might make things worse. If it's too small, learning becomes very slow. Think of it like adjusting a line on a graph: if a blue point ends up in the red region, you tilt the line to move it to the correct side.

**Why this works (the detailed math):**

**First, a crucial clarification:**

We don't have a weight for each point. Instead, we have one shared weight vector $w$ that applies to all points. If your data has $d$ features (like height, weight, and age), then $w$ has $d$ components: $w = (w_1, w_2, ..., w_d)$. Every point uses the same $w$ to compute its score: $\text{score} = w \cdot x + b$. When we update $w$ based on a misclassified point, we're adjusting the shared model, which affects how all points are classified going forward.

**The intuitive picture:**

Think of the weight vector $w$ as defining the "direction" of your decision boundary. When a point is misclassified, we adjust $w$ accordingly. If a point should be class +1 but is on the -1 side, we adjust $w$ to point more toward that point's location. If a point should be class -1 but is on the +1 side, we adjust $w$ to point more away from that point's location. Each update is a small nudge that makes the boundary better for that specific point, while hopefully not breaking correct classifications.

**Now the detailed math:**

When a point $x_i$ is misclassified with true label $y_i$, we know $y_i(w \cdot x_i + b) \le 0$. The update rule accomplishes several important things:

**Nudging the hyperplane in the right direction:**

The update adds $\eta y_i x_i$ to the weight vector: $w \leftarrow w + \eta y_i x_i$. Let's see a concrete example: if $x_i = (3, 2)$ should be class +1 but was misclassified, we add $\eta \cdot (+1) \cdot (3, 2) = (\eta \cdot 3, \eta \cdot 2)$ to $w$. This makes $w$ point more in the direction of $(3, 2)$, which helps classify this point correctly.

After the update, the new score for $x_i$ becomes $(w + \eta y_i x_i) \cdot x_i + (b + \eta y_i)$. When we expand this, we get $w \cdot x_i + b + \eta y_i (x_i \cdot x_i + 1)$. Since $x_i \cdot x_i = \|x_i\|^2 \ge 0$, we're adding a positive term when $\eta > 0$. This increases the score in the direction of $y_i$, moving the point toward or across the hyperplane. The key insight here is that the update uses the point's own coordinates ($x_i$) to adjust $w$, which means points with larger feature values have more influence on the corresponding weights.

**Increasing alignment with the true separator:**

If a perfect separator $w^*$ exists (one that correctly classifies all points), we want our $w$ to point in a similar direction. The dot product $w \cdot w^*$ measures how aligned our weights are with the perfect solution—the larger this value, the more aligned we are. After an update, we have $(w + \eta y_i x_i) \cdot w^* = w \cdot w^* + \eta y_i (x_i \cdot w^*)$. For correctly separable data, $y_i (x_i \cdot w^*) \ge 0$ because points are on the correct side of $w^*$. So each update adds a non-negative term, meaning $w \cdot w^*$ increases and our weights become more aligned with the true separator. The intuition is that each correction moves us closer to the "ideal" weight vector that would perfectly separate the data.

**Margin improvement:**

The margin is the minimum distance from any point to the hyperplane. As $w$ aligns better with $w^*$, correctly classified points move further from the hyperplane. This increases the "safety zone" around the decision boundary, making our classifier more robust.

**Bounded weight growth:**

While $w \cdot w^*$ increases, the norm $\|w\|$ grows at a controlled rate. This bounded growth is crucial for the convergence proof because it ensures we don't need infinite updates to reach a solution.

**The key insight:** Each update makes a small correction that moves misclassified points toward the correct side, increases alignment with the optimal solution (if one exists), and does so in a controlled way that guarantees convergence for separable data.

⸻
