# playboy

## Notes

`npm start` to start developing. This project uses `wmr` to statically render + bundle Preact code.

`npm run prebuild` will pull and parse ArchieML from the google doc, with the id of the doc found in `scripts/googleDoc.ts`

`npm run build` will build the page, ready for publishing. Notes:

- you should change the public path in `scripts/publicPath.ts` to match the final address on the server.
- sometimes this command will fail, `wmr` has some issues. retrying should solve it. when it fails it'll segfault with something like `sh: line 1: 92293 Segmentation fault: 11 wmr build --prerender`, so just try again.
