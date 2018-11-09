declare module 'unzipt' {

    export namespace Zlib {

        export class Unzip {
            /**options {verify: boolean, password: string} */
            constructor(data: Array<number>|Uint8Array, options: any);
            public getFilenames(): Array<string>;
            public decompress(filename: string) : Uint8Array;
        }
    }

}