import { Writable, Readable } from "stream";

export class MockWriteableStream extends Writable implements NodeJS.WritableStream {
    _write(chunk: Buffer | string | any, encoding: string, cb: (err?: Error) => void) {
        cb();
    }
}

export class MockReadableStream extends Readable implements NodeJS.ReadableStream {
    _read(size: number) {

    }
}
