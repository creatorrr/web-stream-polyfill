export const
  { ReadableStream } = require('./spec/reference-implementation/lib/readable-stream'),
  { WritableStream } = require('./spec/reference-implementation/lib/writable-stream'),
  ByteLengthQueuingStrategy = require('./spec/reference-implementation/lib/byte-length-queuing-strategy'),
  CountQueuingStrategy = require('./spec/reference-implementation/lib/count-queuing-strategy'),
  TransformStream = require('./spec/reference-implementation/lib/transform-stream').TransformStream;

const interfaces = {
  ReadableStream,
  WritableStream,
  ByteLengthQueuingStrategy,
  CountQueuingStrategy,
  TransformStream
};

// Export
export default interfaces;

// Add classes to window
if ( typeof self !== "undefined" )
  Object.assign( self, interfaces );
