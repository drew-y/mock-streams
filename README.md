# Mock Stream

A package that allows you to test other packages that use readable and or writeable
streams. Provides typings for typescript.

## Installation

```bash
npm i -D mock-stream
```

## Example Usage

```typescript
import { MockReadableStream, MockWriteableStream } from "mock-stream";

const input = new MockReadableStream();
const output = new MockWriteableStream();
```
