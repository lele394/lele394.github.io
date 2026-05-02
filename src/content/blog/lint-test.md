---
title: 'lint_test'
description: 'A test post containing fenced code blocks in several languages.'
pubDate: 'May 2 2026'
tags: ['lint', 'code blocks', 'markdown', 'testing']
---

This post exists to verify that Markdown code fences render cleanly and remain readable across languages.

## Fortran

```fortran
program hello_fortran
  implicit none
  print *, 'hello from fortran'
end program hello_fortran
```

## Python

```python
def greet(name: str) -> str:
    return f"hello, {name}"

print(greet("world"))
```

## JavaScript

```js
function greet(name) {
  return `hello, ${name}`;
}

console.log(greet('world'));
```

## Bash

```bash
#!/usr/bin/env bash
set -euo pipefail

echo "hello from bash"
```

## SQL

```sql
SELECT id, title, created_at
FROM posts
WHERE published = TRUE
ORDER BY created_at DESC;
```

## Notes

- The goal here is visual linting and syntax highlighting coverage.
- Keeping this as Markdown is enough; MDX is not required unless embedded components are needed.
- If a language falls back to plain text, the block should still remain readable.
