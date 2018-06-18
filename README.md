# Mock Streams

A package that allows you to test other packages that use readable and or writeable
streams. Provides typings for typescript.

## Installation

```bash
npm i -D mock-streams # mock-streams NOT mock-stream
```

## Example Usage

```typescript
import { MockReadableStream, MockWriteableStream } from "mock-stream";

const input = new MockReadableStream();
const output = new MockWriteableStream();
```

## Building from source

```bash
npm i
npm run build
```
