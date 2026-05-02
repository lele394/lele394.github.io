---
title: 'Markdown Capability Tests'
description: 'A broad Markdown test post covering code fences, tables, lists, links, and math.'
pubDate: 'Jan 1 1900'
tags: ['markdown', 'testing']
---

This post is a capability test for the site’s Markdown rendering pipeline.
It checks headings, emphasis, links, lists, tables, blockquotes, footnotes, code fences, and LaTeX math.

I just use it as a quick test in case I modify the style.

## Basic Markdown

Here is **bold text**, *italic text*, ~~strikethrough~~, and a [link to the blog index](/blog).

> Blockquotes should keep their spacing and indentation.

### Lists

- Unordered item one
- Unordered item two
  - Nested item
  - Another nested item

1. Ordered item one
2. Ordered item two
3. Ordered item three

- [x] Completed task
- [ ] Pending task

### Table

| Feature | Expected result |
| --- | --- |
| Headings | Render correctly |
| Links | Stay clickable |
| Tables | Align columns |
| Math | Render via KaTeX |
| Code fences | Get syntax highlighting |

### Footnote

This sentence has a footnote reference.[^1]

[^1]: Footnotes are useful for extra notes and should render correctly.

## Inline math

The classic identity is $e^{i\pi} + 1 = 0$.

The gravitational force magnitude scales like $F \propto \frac{1}{r^2}$.

## Display math

$$
\nabla^2 \phi = 4\pi G \rho
$$

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## Code blocks

### Fortran

```fortran
program capability_test_fortran
  implicit none
  integer :: i

  do i = 1, 5
    print *, 'fortran line', i
  end do
end program capability_test_fortran
```

### C

```c
#include <stdio.h>

int main(void) {
    puts("hello from c");
    return 0;
}
```

### C++

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> values{1, 2, 3};
    for (int v : values) {
        std::cout << v << '\n';
    }
}
```

### CUDA-style C++

```cpp
__global__ void add_one(float* data, int n) {
    int idx = blockIdx.x * blockDim.x + threadIdx.x;
    if (idx < n) {
        data[idx] += 1.0f;
    }
}
```

### Python

```python
def square(values: list[int]) -> list[int]:
    return [v * v for v in values]

print(square([1, 2, 3]))
```

### Rust

```rust
fn main() {
    let values = vec![1, 2, 3];
    for value in values {
        println!("{}", value);
    }
}
```

### JavaScript

```javascript
const values = [1, 2, 3];
console.log(values.map((v) => v * 2));
```

### Bash

```bash
#!/usr/bin/env bash
set -euo pipefail

echo "hello from bash"
```

### SQL

```sql
SELECT id, title, created_at
FROM posts
WHERE published = TRUE
ORDER BY created_at DESC;
```

### JSON

```json
{
  "name": "capability-test",
  "enabled": true,
  "count": 3
}
```

### YAML

```yaml
name: capability-test
enabled: true
languages:
  - fortran
  - c
  - cpp
  - python
```

### HTML

```html
<section class="card">
  <h2>Hello</h2>
  <p>HTML should render with matching highlighting.</p>
</section>
```

### Diff

```diff
- old line
+ new line
```

## More math

For a finite sum:

$$
\sum_{k=0}^{n-1} ar^k = a\,\frac{1-r^n}{1-r}
$$

And a matrix:

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

## Notes
