/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/scripts */ "./scripts/scripts.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./scripts/funciones/BarraProgreso.js":
/*!********************************************!*\
  !*** ./scripts/funciones/BarraProgreso.js ***!
  \********************************************/
/*! exports provided: barraDeProgreso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barraDeProgreso", function() { return barraDeProgreso; });
/* harmony import */ var _Variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Variables */ "./scripts/funciones/Variables.js");

var barraDeProgreso = function barraDeProgreso() {
  var anchoBarra = 250; //254 para el espacio del margen

  var svg = document.getElementById('progressbar');
  var separacion = anchoBarra / (_Variables__WEBPACK_IMPORTED_MODULE_0__["tmpTotal"] + 1);
  var bordeBarra = crearElemento('rect', {
    x: 2,
    y: 2,
    width: anchoBarra,
    height: 32,
    fill: 'none',
    stroke: '#CCCBCB',
    strokeWidth: '1',
    rx: 5,
    ry: 5
  });
  svg.appendChild(bordeBarra);
  var anchoLinea = Number(anchoBarra - separacion * 2);
  var lineaBarra = crearElemento('rect', {
    x: separacion,
    y: 17,
    width: anchoLinea,
    height: 2,
    fill: '#E7E5E5',
    rx: 2,
    ry: 2
  });
  svg.appendChild(lineaBarra);

  for (var i = 0; i < _Variables__WEBPACK_IMPORTED_MODULE_0__["tmpTotal"]; i++) {
    var colorCirculo = void 0,
        rCircle = void 0;

    if (_Variables__WEBPACK_IMPORTED_MODULE_0__["tmpProgreso"].length > i) {
      rCircle = 4;

      if (_Variables__WEBPACK_IMPORTED_MODULE_0__["tmpProgreso"][i].correcto) {
        colorCirculo = _Variables__WEBPACK_IMPORTED_MODULE_0__["tmpProgreso"][i].NUMEROINTENTOS === 1 ? '#00AC4D' : '#E2C04D';
      } else {
        colorCirculo = '#E24B4A';
      }
    } else if (_Variables__WEBPACK_IMPORTED_MODULE_0__["tmpProgreso"].length === i) {
      rCircle = 8;
      colorCirculo = '#1280B1';
    } else {
      rCircle = 4;
      colorCirculo = '#CCCBCB';
    }

    var cxCircle = separacion * (i + 1) + 2;
    var circle = crearElemento('circle', {
      cx: cxCircle,
      cy: 18,
      r: rCircle,
      fill: colorCirculo,
      stroke: 'none'
    });
    svg.appendChild(circle);

    if (_Variables__WEBPACK_IMPORTED_MODULE_0__["tmpProgreso"].length === i) {
      var textPosicion = crearElemento('text', {
        x: cxCircle,
        y: 22,
        fontFamily: 'sans-serif',
        fontSize: '11px',
        textAnchor: 'middle',
        fill: 'white'
      });
      textPosicion.textContent = _Variables__WEBPACK_IMPORTED_MODULE_0__["tmpProgreso"].length + 1;
      svg.appendChild(textPosicion);
    }
  }
};

var crearElemento = function crearElemento(nombre, atributos) {
  var element = document.createElementNS("http://www.w3.org/2000/svg", nombre);

  for (var p in atributos) {
    element.setAttributeNS(null, p.replace(/[A-Z]/g, function (m, p, o, s) {
      return "-" + m.toLowerCase();
    }), atributos[p]);
  }

  return element;
};

/***/ }),

/***/ "./scripts/funciones/ContinuarEjercicio.js":
/*!*************************************************!*\
  !*** ./scripts/funciones/ContinuarEjercicio.js ***!
  \*************************************************/
/*! exports provided: continuarEjercicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuarEjercicio", function() { return continuarEjercicio; });
/* harmony import */ var _Variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Variables */ "./scripts/funciones/Variables.js");

var continuarEjercicio = function continuarEjercicio() {
  document.getElementById('btnContinuar').onclick = function () {
    return false;
  };

  document.querySelector('.feedback').style.display = 'none';
  document.querySelector('.feedback span').innerHTML = '';
  document.querySelector('.feedback p').innerHTML = '';
  document.querySelector('.feedback img').setAttribute('src', '');
  document.querySelector('.feedback').classList.remove('feedback-incorrecto');
  document.querySelector('footer').style.display = 'grid';
  document.getElementsByName('answer').forEach(function (input) {
    input.disabled = false;
  });

  if (_Variables__WEBPACK_IMPORTED_MODULE_0__["tipo"] === 'seleccion multiple') {
    document.querySelector('input[type=radio]:checked').checked = false;
  } else {
    document.querySelectorAll('input[type=text]').forEach(function (input) {
      input.value = '';
    });
  }
};

/***/ }),

/***/ "./scripts/funciones/HandleRespuesta.js":
/*!**********************************************!*\
  !*** ./scripts/funciones/HandleRespuesta.js ***!
  \**********************************************/
/*! exports provided: handleRespuesta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRespuesta", function() { return handleRespuesta; });
/* harmony import */ var _Variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Variables */ "./scripts/funciones/Variables.js");
/* harmony import */ var _ValidaRespuesta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidaRespuesta */ "./scripts/funciones/ValidaRespuesta.js");
/* harmony import */ var _ContinuarEjercicio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContinuarEjercicio */ "./scripts/funciones/ContinuarEjercicio.js");



var handleRespuesta = function handleRespuesta() {
  document.querySelector("footer").style.display = "none";
  document.getElementById("btnResponder").disabled = true;
  document.getElementsByName("answer").forEach(function (input) {
    input.disabled = true;
  });

  var _validaRespuesta = Object(_ValidaRespuesta__WEBPACK_IMPORTED_MODULE_1__["validaRespuesta"])(_Variables__WEBPACK_IMPORTED_MODULE_0__["validaciones"], _Variables__WEBPACK_IMPORTED_MODULE_0__["tipo"]),
      feedback = _validaRespuesta.feedback,
      errorFrecuente = _validaRespuesta.errorFrecuente;

  var feedbackElement = document.querySelector(".feedback");
  var feedbackStrong = document.querySelector(".feedback span");
  var feedbackText = document.querySelector(".feedback p");
  var imgFeedback = document.querySelector(".feedback img");

  if (!errorFrecuente) {
    //respuesta correcta
    feedbackElement.style.display = "block";
    feedbackElement.classList.add("feedback-correcto");
    feedbackStrong.innerHTML = "¡Muy Bien!";
    var racha = rachaCorrectas();

    if (racha) {
      feedbackText.innerHTML = "Tienes una racha de <b>".concat(rachaCorrectas(), "</b> respuestas correctas.");
    }

    imgFeedback.setAttribute("src", _Variables__WEBPACK_IMPORTED_MODULE_0__["srcImgRespuestaCorrecta"][imgRandomIndex(true)]);
    _Variables__WEBPACK_IMPORTED_MODULE_0__["numeroIntento"] === 2 && document.getElementById("btnContinuar").removeEventListener("click", _ContinuarEjercicio__WEBPACK_IMPORTED_MODULE_2__["continuarEjercicio"]); //si es que es el segundo intento

    document.getElementById("btnContinuar").setAttribute("onClick", "cerrarFeed();");
  } else {
    //respuesta incorrecta
    if (_Variables__WEBPACK_IMPORTED_MODULE_0__["numeroIntento"] === 1) {
      imgFeedback.setAttribute("src", _Variables__WEBPACK_IMPORTED_MODULE_0__["srcImgRespuestaIncorrecta"][imgRandomIndex(false)]);
      feedbackElement.style.display = "block";
      feedbackElement.classList.add("feedback-incorrecto");
      feedbackStrong.innerHTML = "¡Ten Cuidado!";
      feedbackText.innerHTML = feedback;
      document.getElementById("btnContinuar").addEventListener("click", _ContinuarEjercicio__WEBPACK_IMPORTED_MODULE_2__["continuarEjercicio"]);
      Object(_Variables__WEBPACK_IMPORTED_MODULE_0__["siguienteIntento"])();
      window.MathJax && MathJax.Hub.Queue(["Typeset", MathJax.Hub]); //muestra el mathjax en los feedbacks en caso de que existan
    } else {
      document.getElementById("imagenGlosa").setAttribute("src", _Variables__WEBPACK_IMPORTED_MODULE_0__["srcImgGlosa"][Math.floor(Math.random() * _Variables__WEBPACK_IMPORTED_MODULE_0__["srcImgGlosa"].length)]);
      document.getElementById("glosa").style.display = "block";
    }
  }
};

var imgRandomIndex = function imgRandomIndex(esCorrecta) {
  if (esCorrecta) {
    return Math.floor(Math.random() * _Variables__WEBPACK_IMPORTED_MODULE_0__["srcImgRespuestaCorrecta"].length);
  } else {
    return Math.floor(Math.random() * _Variables__WEBPACK_IMPORTED_MODULE_0__["srcImgRespuestaIncorrecta"].length);
  }
};

var rachaCorrectas = function rachaCorrectas() {
  var correctos = 0;

  for (var i = _Variables__WEBPACK_IMPORTED_MODULE_0__["tmpProgreso"].length - 1; i > -1; i--) {
    if (_Variables__WEBPACK_IMPORTED_MODULE_0__["tmpProgreso"][i].correcto) {
      correctos++;
    } else {
      break;
    }
  }

  return correctos + 1 > 1 ? correctos + 1 : null;
};

/***/ }),

/***/ "./scripts/funciones/ValidaRespuesta.js":
/*!**********************************************!*\
  !*** ./scripts/funciones/ValidaRespuesta.js ***!
  \**********************************************/
/*! exports provided: validaRespuesta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validaRespuesta", function() { return validaRespuesta; });
/* harmony import */ var _utils_FormateaNumeros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/FormateaNumeros */ "./scripts/utils/FormateaNumeros.js");
/* harmony import */ var _utils_ValidaNumeroEscrito__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ValidaNumeroEscrito */ "./scripts/utils/ValidaNumeroEscrito.js");


var validaRespuesta = function validaRespuesta(validaciones, tipo) {
  var feedback, errorFrecuente, respuesta;

  if (tipo === 'seleccion multiple') {
    respuesta = document.querySelector('input[type=radio]:checked').value;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = validaciones[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var validacion = _step.value;

        if (respuesta === validacion.opcion) {
          feedback = validacion.feedback;
          errorFrecuente = validacion.errorFrecuente;
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return {
      respuesta: respuesta,
      feedback: feedback,
      errorFrecuente: errorFrecuente
    };
  } else {
    var respuestas = validaciones.respuestas,
        errFrecDefecto = validaciones.errFrecDefecto,
        feedbackDefecto = validaciones.feedbackDefecto;
    respuesta = '';
    document.querySelectorAll('input[type=text]').forEach(function (input) {
      respuesta += input.id + ':' + input.value + ';';
    });
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = respuestas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _respuesta = _step2.value;
        var coincidenTodas = true;

        _respuesta.validaciones.forEach(function (val, index) {
          var input = document.getElementById(val.inputId);
          var tipoInput = input.getAttribute('data-tipoinput');

          switch (tipoInput) {
            case 'numero':
              if (input.value.replace(/\s/g, '') !== val.valor && val.valor !== '-any-') {
                coincidenTodas = false;
              }

            case 'texto-numerico':
              var numberArr = val.valor.length === 3 ? ('0' + val.valor).split('') : val.valor.split('');

              if (!Object(_utils_ValidaNumeroEscrito__WEBPACK_IMPORTED_MODULE_1__["default"])(input.value.trim(), numberArr)) {
                coincidenTodas = false;
                break;
              }

              break;
          }
        });

        if (coincidenTodas) {
          feedback = _respuesta.feedback;
          errorFrecuente = _respuesta.errFrec;

          if (errorFrecuente !== null) {//coloreaInputsTextoPorCoincidencia(respuestas[i]) //colorear input
          } else {//$(".contenido input[name='answer']").addClass('inputTexto-correcto')
            }

          break;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (!feedback) {
      feedback = Object(_utils_FormateaNumeros__WEBPACK_IMPORTED_MODULE_0__["default"])(feedbackDefecto);
      errorFrecuente = errFrecDefecto; //var inputs = document.querySelectorAll(".contenido input[name='answer']");
      //for (var input of inputs) {
      //	//coloreaInputTextoPorDefecto(input);
      //}
    }

    return {
      respuesta: respuesta,
      feedback: feedback,
      errorFrecuente: errorFrecuente
    };
  }
};
/*function evaluaInputTexto(inputElement) {
    var content = JSON.parse(b64_to_utf8(inputElement.getAttribute('data-content')));
    var match = false;
    switch (content.tipoInput) {
        case 'numero':
            var resp = inputElement.value.replace(/\s/g, '');
            for (var answer of content.answers) {
                if (resp === answer.respuesta) {
                    feed = answer.feedback;
                    errFre = answer.errFrec;
                    match = true;
                    break;
                }
            }
            break;
        case 'texto':
            var resp = inputElement.value
            for (var answer of content.answers) {
                if (String(resp).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === String(answer.respuesta).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
                    feed = answer.feedback;
                    errFre = answer.errFrec;
                    match = true;
                    break;
                }
            }
            break
        case 'texto-numerico':
            var resp = inputElement.value;
            for (var answer of content.answers) {
                var numberArr = answer.respuesta.length === 3 ? ('0' + answer.respuesta).split('') : answer.respuesta.split('');
                if (checkWord(resp, numberArr)) {
                    feed = answer.feedback;
                    errFre = answer.errFrec;
                    match = true;
                    break;
                }
            }
            break
    }
    if (!match) {
        feed = content.feedbackDefecto;
        errFre = content.errFrecDefecto;
    }
}*/

function coloreaInputTextoPorDefecto(inputElement) {
  var content = JSON.parse(inputElement.getAttribute('data-content'));
  var match = false;

  switch (content.tipoInput) {
    case 'numero':
      var resp = inputElement.value.replace(/\s/g, '');
      b64_to_utf8(content.correctas).split(',').forEach(function (correcta) {
        if (resp === correcta) {
          inputElement.classList.add('inputTexto-correcto');
          match = true;
        }
      });
      break;

    case 'texto':
      var resp = inputElement.value;
      b64_to_utf8(content.correctas).split(',').forEach(function (correcta) {
        var numberArr = correcta.length === 3 ? ('0' + answer.respuesta).split('') : answer.respuesta.split('');

        if (checkWord(resp, numberArr)) {
          inputElement.classList.add('inputTexto-correcto');
        }
      });
  }

  if (!match) {
    inputElement.classList.add('inputTexto-incorrecto');
  }
}

function evaluaInputsEjercicio() {
  var _VALIDACIONES_INPUT_T = _VALIDACIONES_INPUT_TABLA_,
      respuestas = _VALIDACIONES_INPUT_T.respuestas,
      errFrecDefecto = _VALIDACIONES_INPUT_T.errFrecDefecto,
      feedbackDefecto = _VALIDACIONES_INPUT_T.feedbackDefecto;

  for (var i = 0; i < respuestas.length; i++) {
    var _respuestas$i = respuestas[i],
        validaciones = _respuestas$i.validaciones,
        errFrec = _respuestas$i.errFrec,
        feedback = _respuestas$i.feedback,
        coincidenTodas = true;
    validaciones.forEach(function (val, index) {
      var input = document.getElementById(val.inputId);
      var content = JSON.parse(input.getAttribute('data-content'));

      switch (content.tipoInput) {
        case 'numero':
          if (input.value.replace(/\s/g, '') !== val.valor && val.valor !== '-any-') {
            coincidenTodas = false;
          }

          break;

        case 'texto':
          var numberArr = correcta.length === 3 ? ('0' + val.valor).split('') : val.valor.split('');

          if (!checkWord(input.value, numberArr) && val.valor !== '-any-') {
            coincidenTodas = false;
          }

      }
    });

    if (coincidenTodas) {
      feed = feedback;
      errFre = errFrec;

      if (errFre !== null) {
        coloreaInputsTextoPorCoincidencia(respuestas[i]); //colorear input
      } else {
        $(".contenido input[name='answer']").addClass('inputTexto-correcto');
      }

      break;
    }
  }

  if (errFre === '') {
    feed = regexFunctions(feedbackDefecto);
    errFre = errFrecDefecto;
    var inputs = document.querySelectorAll(".contenido input[name='answer']");
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = inputs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var input = _step3.value;
        coloreaInputTextoPorDefecto(input);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }
}

function coloreaInputsTextoPorCoincidencia(coincidencia) {
  // colorea inputs de acuerdo a 
  var validaciones = coincidencia.validaciones,
      errFrec = coincidencia.errFrec,
      feedback = coincidencia.feedback;
  validaciones.forEach(function (val, index) {
    var color = val.color,
        inputId = val.inputId;
    var input = document.getElementById(inputId);

    if (color === 'ok') {
      input.classList.add('inputTexto-correcto');
    } else if (color === 'bad') {
      input.classList.add('inputTexto-incorrecto');
    } else {
      if (input.value.replace(/\s/g, '') == color.correcta) {
        input.classList.add('inputTexto-correcto');
      } else {
        input.classList.add('inputTexto-incorrecto');
      }
    }
  });
}

/***/ }),

/***/ "./scripts/funciones/Variables.js":
/*!****************************************!*\
  !*** ./scripts/funciones/Variables.js ***!
  \****************************************/
/*! exports provided: idEjercicio, version, validaciones, tipo, numeroIntento, siguienteIntento, srcImgRespuestaCorrecta, srcImgRespuestaIncorrecta, srcImgGlosa, tmpProgreso, tmpTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idEjercicio", function() { return idEjercicio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validaciones", function() { return validaciones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipo", function() { return tipo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeroIntento", function() { return numeroIntento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siguienteIntento", function() { return siguienteIntento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srcImgRespuestaCorrecta", function() { return srcImgRespuestaCorrecta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srcImgRespuestaIncorrecta", function() { return srcImgRespuestaIncorrecta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srcImgGlosa", function() { return srcImgGlosa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tmpProgreso", function() { return tmpProgreso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tmpTotal", function() { return tmpTotal; });
/* harmony import */ var _utils_ReemplazaVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ReemplazaVariables */ "./scripts/utils/ReemplazaVariables.js");
/* harmony import */ var _utils_ReemplazaFunciones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ReemplazaFunciones */ "./scripts/utils/ReemplazaFunciones.js");


var idEjercicio = document.body.dataset.id;
var version = JSON.parse(document.body.dataset.version.replace(/'/g, '"'));
var validaciones = JSON.parse(Object(_utils_ReemplazaFunciones__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_ReemplazaVariables__WEBPACK_IMPORTED_MODULE_0__["default"])(Buffer(document.body.dataset.x, 'base64').toString('utf8'), version.vars, false)));
var tipo = document.body.dataset.tipoejercicio;
var numeroIntento = 1;
var siguienteIntento = function siguienteIntento() {
  numeroIntento++;
};
var srcImgRespuestaCorrecta, srcImgRespuestaIncorrecta, srcImgGlosa;

switch (idEjercicio.substr(2, 2)) {
  case '00':
    srcImgRespuestaCorrecta = ['../../../../imagenes_front/patos/Correct_feedback_PATO_nino.svg', '../../../../imagenes_front/patos/Correct_feedback_PATO_nina.svg'];
    srcImgRespuestaIncorrecta = ['../../../../imagenes_front/patos/Mistake_feedback_PATO_nino.svg', '../../../../imagenes_front/patos/Mistake_feedback_PATO_nina.svg'];
    srcImgGlosa = ['../../../../imagenes_front/patos/Pato_nina_glosa.svg', '../../../../imagenes_front/patos/Pato_nino_glosa.svg'];
    break;

  case '01':
    srcImgRespuestaCorrecta = ['../../../../imagenes_front/patos/Correct_feedback_PATO_nino.svg', '../../../../imagenes_front/patos/Correct_feedback_PATO_nina.svg'];
    srcImgRespuestaIncorrecta = ['../../../../imagenes_front/patos/Mistake_feedback_PATO_nino.svg', '../../../../imagenes_front/patos/Mistake_feedback_PATO_nina.svg'];
    srcImgGlosa = ['../../../../imagenes_front/patos/Pato_nina_glosa.svg', '../../../../imagenes_front/patos/Pato_nino_glosa.svg'];
    break;

  case '02':
    srcImgRespuestaCorrecta = ['../../../../imagenes_front/pumas/Correct_feedback_PUMA_nino.svg', '../../../../imagenes_front/pumas/Correct_feedback_PUMA_nina.svg'];
    srcImgRespuestaIncorrecta = ['../../../../imagenes_front/pumas/Mistake_feedback_PUMA_nino.svg', '../../../../imagenes_front/pumas/Mistake_feedback_PUMA_nina.svg'];
    srcImgGlosa = ['../../../../imagenes_front/pumas/Puma_nina_glosa.svg', '../../../../imagenes_front/pumas/Puma_nino_glosa.svg'];
    break;

  case '03':
    break;

  case '04':
    break;

  case '05':
    break;
}

var tmpProgreso, tmpTotal;
var hiddenBarraDatos = window.parent.parent.barraProgreso;

if (hiddenBarraDatos) {
  var datosBarraDeProgreso = JSON.parse(hiddenBarraDatos.value);
  tmpProgreso = datosBarraDeProgreso.tmpProgreso ? datosBarraDeProgreso.tmpProgreso : [];
  tmpTotal = datosBarraDeProgreso.tmpTotal ? Number(datosBarraDeProgreso.tmpTotal) : 0;
} else {
  tmpProgreso = localStorage.getItem('tmpProgreso') ? JSON.parse(localStorage.getItem('tmpProgreso')) : [];
  tmpTotal = localStorage.getItem('tmpTotal') ? Number(localStorage.getItem('tmpTotal')) : 0;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./scripts/scripts.js":
/*!****************************!*\
  !*** ./scripts/scripts.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _funciones_BarraProgreso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funciones/BarraProgreso */ "./scripts/funciones/BarraProgreso.js");
/* harmony import */ var _funciones_HandleRespuesta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funciones/HandleRespuesta */ "./scripts/funciones/HandleRespuesta.js");


Object(_funciones_BarraProgreso__WEBPACK_IMPORTED_MODULE_0__["barraDeProgreso"])();
document.getElementById('btnResponder').addEventListener('click', _funciones_HandleRespuesta__WEBPACK_IMPORTED_MODULE_1__["handleRespuesta"]);

/***/ }),

/***/ "./scripts/utils/FormateaNumeros.js":
/*!******************************************!*\
  !*** ./scripts/utils/FormateaNumeros.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (texto, espacio) {
  return texto.replace(/\d{1,}(\.\d{1,})?/g, function (coincidencia) {
    //coincidencia => 2000
    var entero = coincidencia.split('.')[0];
    var decimal = coincidencia.split('.')[1];
    var enteroEspaciado = entero.length >= 4 ? '' : entero;

    if (entero.length >= 4) {
      var enteroReverse = entero.split('').reverse();
      var count = 1;
      enteroReverse.forEach(function (numero) {
        if (count === 3) {
          enteroEspaciado = espacio + numero + enteroEspaciado;
          count = 1;
        } else {
          enteroEspaciado = numero + enteroEspaciado;
          count++;
        }
      });
    }

    return "".concat(enteroEspaciado).concat(decimal ? ',' : '').concat(decimal ? decimal : '');
  });
});

/***/ }),

/***/ "./scripts/utils/ReemplazaFunciones.js":
/*!*********************************************!*\
  !*** ./scripts/utils/ReemplazaFunciones.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (text) {
  var result = text.replace(/\/\[.*?\/\]/g, function (coincidencia) {
    //coincidencia => '/[funcion()/]'
    var _final = coincidencia.length - 4;

    var funcion = coincidencia.substr(2, _final).replace(/&gt;/g, '>').replace(/&lt;/, '<');

    try {
      return eval(funcion);
    } catch (error) {
      /*console.log(error);
      console.log(funcion)*/
      return coincidencia;
    }
  });
  return result;
});

/***/ }),

/***/ "./scripts/utils/ReemplazaVariables.js":
/*!*********************************************!*\
  !*** ./scripts/utils/ReemplazaVariables.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (texto, variables, isTutorial) {
  var result = texto.toString().replace(/\$[a-z]/g, function (coincidencia) {
    //coincidencia => '$a'
    for (var indexVar = 0; indexVar < variables.length; indexVar++) {
      if (variables[indexVar]["var"] == coincidencia[1]) {
        return isTutorial ? variables[indexVar].vt : variables[indexVar].val;
      }
    }
  });
  return result;
});

/***/ }),

/***/ "./scripts/utils/ValidaNumeroEscrito.js":
/*!**********************************************!*\
  !*** ./scripts/utils/ValidaNumeroEscrito.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var palabras = {
  "0": ["", "", "", "", ""],
  //unidad, prefijo unidad, decena, centena
  "1": ["uno", "on", "diez", "cien"],
  "2": ["dos", "do", "veinte", "doscientos"],
  "3": ["tres", "tre", "treinta", "trescientos"],
  "4": ["cuatro", "cator", "cuarenta", "cuatrocientos"],
  "5": ["cinco", "quin", "cincuenta", "quinientos"],
  "6": ["seis", "", "sesenta", "seiscientos"],
  "7": ["siete", "", "setenta", "setecientos"],
  "8": ["ocho", "", "ochenta", "ochocientos"],
  "9": ["nueve", "", "noventa", "novecientos"]
};
var regularExpression = {
  "0": ["", "", "", "", ""],
  "1": ["uno", "on", "die[sz]", "[csz]ien"],
  "2": ["do[sz]", "do", "[vb]einte", "do[csz]{1,2}iento[sz]"],
  "3": ["tre[sz]", "tre", "treinta", "tre[szc]{1,2}iento[sz]"],
  "4": ["[ckq]uatro", "[ckq]ator", "[ckq]uarenta", "[ckq]uatro[szc]{1,2}iento[sz]"],
  "5": ["[csz]in[ck]o", "(quin|kin)", "[csz]in[cqk]uenta", "(quin|kin)iento[sz]"],
  "6": ["[scz]ei[sz]", "", "[scz]e[scz]enta", "[scz]ei[scz]{1,2}iento[sz]"],
  "7": ["[scz]iete", "", "[scz]etenta", "[scz]ete[szc]{1,2}iento[sz]"],
  "8": ["o[sc]ho", "", "o[sc]henta", "o[sc]ho[scz]{1,2}iento[sz]"],
  "9": ["nue[vb]e", "", "no[vb]enta", "no[vb]e[scz]{1,2}iento[sz]"]
};
/* harmony default export */ __webpack_exports__["default"] = (function (_word, numberArr) {
  var umil = numberArr[0];
  var centena = numberArr[1];
  var decena = numberArr[2];
  var unidad = numberArr[3];

  var word = _word.toLowerCase().trim();

  var rgx = '';

  if (unidad > 0) {
    //uno, dos, tres...
    if (decena == 0) {
      rgx = regularExpression[unidad][0];
    } else if (decena == 1) {
      //once doce, trece, catorce, quince
      if (unidad > 0 && unidad < 6) {
        rgx = regularExpression[unidad][1] + "[scz]e";
      } // dieciseis, diecisiete, dieciocho, diecinueve
      else if (unidad >= 6) {
          rgx = "die[csz]i" + regularExpression[unidad][0];
        }
    } //veinituno, veintidos, veintitres....
    else if (decena == 2) {
        rgx = "[vb]einti" + regularExpression[unidad][0];
      } // treinta y uno, cuarenta y dos, cincuenta y tres...
      else if (decena > 2) {
          rgx = regularExpression[decena][2] + " y " + regularExpression[unidad][0];
        }
  } else if (unidad == 0) {
    //veinte, treinta, cuarenta...
    if (decena > 0) {
      rgx = regularExpression[decena][2];
    }
  } //cien, doscientos, trescientos...


  if (centena > 0) {
    if (centena == 1) {
      if (decena == 0 && unidad == 0) rgx = regularExpression[centena][3] + " " + rgx;
      if (decena != 0 || unidad != 0) rgx = "[szc]iento " + rgx;
    } else if (centena > 1) {
      rgx = regularExpression[centena][3] + " " + rgx;
    }
  } //mil, dos mil, tres mil


  if (umil == 1) rgx = "mil " + rgx;else if (umil > 1) rgx = regularExpression[umil][0] + " mil " + rgx;
  rgx = rgx.trim();
  rgx = rgx.replace(/^/, '^');
  rgx = rgx + '$';
  var newRgx = new RegExp(rgx);
  return newRgx.test(word);
});

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9mdW5jaW9uZXMvQmFycmFQcm9ncmVzby5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2Z1bmNpb25lcy9Db250aW51YXJFamVyY2ljaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9mdW5jaW9uZXMvSGFuZGxlUmVzcHVlc3RhLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvZnVuY2lvbmVzL1ZhbGlkYVJlc3B1ZXN0YS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2Z1bmNpb25lcy9WYXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdXRpbHMvRm9ybWF0ZWFOdW1lcm9zLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdXRpbHMvUmVlbXBsYXphRnVuY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdXRpbHMvUmVlbXBsYXphVmFyaWFibGVzLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvdXRpbHMvVmFsaWRhTnVtZXJvRXNjcml0by5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOlsiYmFycmFEZVByb2dyZXNvIiwiYW5jaG9CYXJyYSIsInN2ZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXBhcmFjaW9uIiwidG1wVG90YWwiLCJib3JkZUJhcnJhIiwiY3JlYXJFbGVtZW50byIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJyeCIsInJ5IiwiYXBwZW5kQ2hpbGQiLCJhbmNob0xpbmVhIiwiTnVtYmVyIiwibGluZWFCYXJyYSIsImkiLCJjb2xvckNpcmN1bG8iLCJyQ2lyY2xlIiwidG1wUHJvZ3Jlc28iLCJsZW5ndGgiLCJjb3JyZWN0byIsIk5VTUVST0lOVEVOVE9TIiwiY3hDaXJjbGUiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInRleHRQb3NpY2lvbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInRleHRBbmNob3IiLCJ0ZXh0Q29udGVudCIsIm5vbWJyZSIsImF0cmlidXRvcyIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJwIiwic2V0QXR0cmlidXRlTlMiLCJyZXBsYWNlIiwibSIsIm8iLCJzIiwidG9Mb3dlckNhc2UiLCJjb250aW51YXJFamVyY2ljaW8iLCJvbmNsaWNrIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdldEVsZW1lbnRzQnlOYW1lIiwiZm9yRWFjaCIsImlucHV0IiwiZGlzYWJsZWQiLCJ0aXBvIiwiY2hlY2tlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ2YWx1ZSIsImhhbmRsZVJlc3B1ZXN0YSIsInZhbGlkYVJlc3B1ZXN0YSIsInZhbGlkYWNpb25lcyIsImZlZWRiYWNrIiwiZXJyb3JGcmVjdWVudGUiLCJmZWVkYmFja0VsZW1lbnQiLCJmZWVkYmFja1N0cm9uZyIsImZlZWRiYWNrVGV4dCIsImltZ0ZlZWRiYWNrIiwiYWRkIiwicmFjaGEiLCJyYWNoYUNvcnJlY3RhcyIsInNyY0ltZ1Jlc3B1ZXN0YUNvcnJlY3RhIiwiaW1nUmFuZG9tSW5kZXgiLCJudW1lcm9JbnRlbnRvIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNyY0ltZ1Jlc3B1ZXN0YUluY29ycmVjdGEiLCJhZGRFdmVudExpc3RlbmVyIiwic2lndWllbnRlSW50ZW50byIsIndpbmRvdyIsIk1hdGhKYXgiLCJIdWIiLCJRdWV1ZSIsInNyY0ltZ0dsb3NhIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZXNDb3JyZWN0YSIsImNvcnJlY3RvcyIsInJlc3B1ZXN0YSIsInZhbGlkYWNpb24iLCJvcGNpb24iLCJyZXNwdWVzdGFzIiwiZXJyRnJlY0RlZmVjdG8iLCJmZWVkYmFja0RlZmVjdG8iLCJpZCIsImNvaW5jaWRlblRvZGFzIiwidmFsIiwiaW5kZXgiLCJpbnB1dElkIiwidGlwb0lucHV0IiwiZ2V0QXR0cmlidXRlIiwidmFsb3IiLCJudW1iZXJBcnIiLCJzcGxpdCIsIlZhbGlkYU51bWVyb0VzY3JpdG8iLCJ0cmltIiwiZXJyRnJlYyIsIkZvcm1hdGVhTnVtZXJvcyIsImNvbG9yZWFJbnB1dFRleHRvUG9yRGVmZWN0byIsImlucHV0RWxlbWVudCIsImNvbnRlbnQiLCJKU09OIiwicGFyc2UiLCJtYXRjaCIsInJlc3AiLCJiNjRfdG9fdXRmOCIsImNvcnJlY3RhcyIsImNvcnJlY3RhIiwiYW5zd2VyIiwiY2hlY2tXb3JkIiwiZXZhbHVhSW5wdXRzRWplcmNpY2lvIiwiX1ZBTElEQUNJT05FU19JTlBVVF9UQUJMQV8iLCJmZWVkIiwiZXJyRnJlIiwiY29sb3JlYUlucHV0c1RleHRvUG9yQ29pbmNpZGVuY2lhIiwiJCIsImFkZENsYXNzIiwicmVnZXhGdW5jdGlvbnMiLCJpbnB1dHMiLCJjb2luY2lkZW5jaWEiLCJjb2xvciIsImlkRWplcmNpY2lvIiwiYm9keSIsImRhdGFzZXQiLCJ2ZXJzaW9uIiwiUmVlbXBsYXphRnVuY2lvbmVzIiwiUmVlbXBsYXphVmFyaWFibGVzIiwiQnVmZmVyIiwidG9TdHJpbmciLCJ2YXJzIiwidGlwb2VqZXJjaWNpbyIsInN1YnN0ciIsImhpZGRlbkJhcnJhRGF0b3MiLCJwYXJlbnQiLCJiYXJyYVByb2dyZXNvIiwiZGF0b3NCYXJyYURlUHJvZ3Jlc28iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGV4dG8iLCJlc3BhY2lvIiwiZW50ZXJvIiwiZGVjaW1hbCIsImVudGVyb0VzcGFjaWFkbyIsImVudGVyb1JldmVyc2UiLCJyZXZlcnNlIiwiY291bnQiLCJudW1lcm8iLCJ0ZXh0IiwicmVzdWx0IiwiZmluYWwiLCJmdW5jaW9uIiwiZXZhbCIsImVycm9yIiwidmFyaWFibGVzIiwiaXNUdXRvcmlhbCIsImluZGV4VmFyIiwidnQiLCJwYWxhYnJhcyIsInJlZ3VsYXJFeHByZXNzaW9uIiwiX3dvcmQiLCJ1bWlsIiwiY2VudGVuYSIsImRlY2VuYSIsInVuaWRhZCIsIndvcmQiLCJyZ3giLCJuZXdSZ3giLCJSZWdFeHAiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxvREFBVztBQUNoQyxjQUFjLG1CQUFPLENBQUMsZ0RBQVM7QUFDL0IsY0FBYyxtQkFBTyxDQUFDLGdEQUFTOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1dkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLFFBQVEsVUFBVTs7QUFFbEI7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkZBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDcEMsTUFBSUMsVUFBVSxHQUFHLEdBQWpCLENBRG9DLENBQ2Y7O0FBQ3JCLE1BQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQVY7QUFDQSxNQUFJQyxVQUFVLEdBQUdKLFVBQVUsSUFBSUssbURBQVEsR0FBRyxDQUFmLENBQTNCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHQyxhQUFhLENBQUMsTUFBRCxFQUFTO0FBQ3RDQyxLQUFDLEVBQUUsQ0FEbUM7QUFFdENDLEtBQUMsRUFBRSxDQUZtQztBQUd0Q0MsU0FBSyxFQUFFVixVQUgrQjtBQUl0Q1csVUFBTSxFQUFFLEVBSjhCO0FBS3RDQyxRQUFJLEVBQUUsTUFMZ0M7QUFNdENDLFVBQU0sRUFBRSxTQU44QjtBQU90Q0MsZUFBVyxFQUFFLEdBUHlCO0FBUXRDQyxNQUFFLEVBQUUsQ0FSa0M7QUFTdENDLE1BQUUsRUFBRTtBQVRrQyxHQUFULENBQTlCO0FBV0FmLEtBQUcsQ0FBQ2dCLFdBQUosQ0FBZ0JYLFVBQWhCO0FBRUEsTUFBSVksVUFBVSxHQUFHQyxNQUFNLENBQUNuQixVQUFVLEdBQUlJLFVBQVUsR0FBRyxDQUE1QixDQUF2QjtBQUNBLE1BQUlnQixVQUFVLEdBQUdiLGFBQWEsQ0FBQyxNQUFELEVBQVM7QUFDdENDLEtBQUMsRUFBRUosVUFEbUM7QUFFdENLLEtBQUMsRUFBRSxFQUZtQztBQUd0Q0MsU0FBSyxFQUFFUSxVQUgrQjtBQUl0Q1AsVUFBTSxFQUFFLENBSjhCO0FBS3RDQyxRQUFJLEVBQUUsU0FMZ0M7QUFNdENHLE1BQUUsRUFBRSxDQU5rQztBQU90Q0MsTUFBRSxFQUFFO0FBUGtDLEdBQVQsQ0FBOUI7QUFTQWYsS0FBRyxDQUFDZ0IsV0FBSixDQUFnQkcsVUFBaEI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaEIsbURBQXBCLEVBQThCZ0IsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxRQUFJQyxZQUFZLFNBQWhCO0FBQUEsUUFBa0JDLE9BQU8sU0FBekI7O0FBQ0EsUUFBSUMsc0RBQVcsQ0FBQ0MsTUFBWixHQUFxQkosQ0FBekIsRUFBNEI7QUFDM0JFLGFBQU8sR0FBRyxDQUFWOztBQUNBLFVBQUlDLHNEQUFXLENBQUNILENBQUQsQ0FBWCxDQUFlSyxRQUFuQixFQUE2QjtBQUM1Qkosb0JBQVksR0FBR0Usc0RBQVcsQ0FBQ0gsQ0FBRCxDQUFYLENBQWVNLGNBQWYsS0FBa0MsQ0FBbEMsR0FBc0MsU0FBdEMsR0FBa0QsU0FBakU7QUFDQSxPQUZELE1BRU87QUFDTkwsb0JBQVksR0FBRyxTQUFmO0FBQ0E7QUFDRCxLQVBELE1BT08sSUFBSUUsc0RBQVcsQ0FBQ0MsTUFBWixLQUF1QkosQ0FBM0IsRUFBOEI7QUFDcENFLGFBQU8sR0FBRyxDQUFWO0FBQ0FELGtCQUFZLEdBQUcsU0FBZjtBQUNBLEtBSE0sTUFHQTtBQUNOQyxhQUFPLEdBQUcsQ0FBVjtBQUNBRCxrQkFBWSxHQUFHLFNBQWY7QUFDQTs7QUFDRCxRQUFJTSxRQUFRLEdBQUd4QixVQUFVLElBQUlpQixDQUFDLEdBQUcsQ0FBUixDQUFWLEdBQXVCLENBQXRDO0FBQ0EsUUFBSVEsTUFBTSxHQUFHdEIsYUFBYSxDQUFDLFFBQUQsRUFBVztBQUNwQ3VCLFFBQUUsRUFBRUYsUUFEZ0M7QUFFcENHLFFBQUUsRUFBRSxFQUZnQztBQUdwQ0MsT0FBQyxFQUFFVCxPQUhpQztBQUlwQ1gsVUFBSSxFQUFFVSxZQUo4QjtBQUtwQ1QsWUFBTSxFQUFFO0FBTDRCLEtBQVgsQ0FBMUI7QUFPQVosT0FBRyxDQUFDZ0IsV0FBSixDQUFnQlksTUFBaEI7O0FBQ0EsUUFBSUwsc0RBQVcsQ0FBQ0MsTUFBWixLQUF1QkosQ0FBM0IsRUFBOEI7QUFDN0IsVUFBSVksWUFBWSxHQUFHMUIsYUFBYSxDQUFDLE1BQUQsRUFBUztBQUN4Q0MsU0FBQyxFQUFFb0IsUUFEcUM7QUFFeENuQixTQUFDLEVBQUUsRUFGcUM7QUFHeEN5QixrQkFBVSxFQUFFLFlBSDRCO0FBSXhDQyxnQkFBUSxFQUFFLE1BSjhCO0FBS3hDQyxrQkFBVSxFQUFFLFFBTDRCO0FBTXhDeEIsWUFBSSxFQUFFO0FBTmtDLE9BQVQsQ0FBaEM7QUFRQXFCLGtCQUFZLENBQUNJLFdBQWIsR0FBMkJiLHNEQUFXLENBQUNDLE1BQVosR0FBcUIsQ0FBaEQ7QUFDQXhCLFNBQUcsQ0FBQ2dCLFdBQUosQ0FBZ0JnQixZQUFoQjtBQUNBO0FBQ0Q7QUFDRCxDQW5FTTs7QUFxRVAsSUFBTTFCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQytCLE1BQUQsRUFBU0MsU0FBVCxFQUF1QjtBQUN6QyxNQUFJQyxPQUFPLEdBQUd0QyxRQUFRLENBQUN1QyxlQUFULENBQXlCLDRCQUF6QixFQUF1REgsTUFBdkQsQ0FBZDs7QUFDQSxPQUFLLElBQUlJLENBQVQsSUFBY0gsU0FBZCxFQUF5QjtBQUNyQkMsV0FBTyxDQUFDRyxjQUFSLENBQXVCLElBQXZCLEVBQTZCRCxDQUFDLENBQUNFLE9BQUYsQ0FBVSxRQUFWLEVBQW9CLFVBQVVDLENBQVYsRUFBYUgsQ0FBYixFQUFnQkksQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQ25FLGFBQU8sTUFBTUYsQ0FBQyxDQUFDRyxXQUFGLEVBQWI7QUFDSCxLQUY0QixDQUE3QixFQUVJVCxTQUFTLENBQUNHLENBQUQsQ0FGYjtBQUdIOztBQUNELFNBQU9GLE9BQVA7QUFDSCxDQVJELEM7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUN0Qy9DLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3QytDLE9BQXhDLEdBQWtEO0FBQUEsV0FBTSxLQUFOO0FBQUEsR0FBbEQ7O0FBQ0FoRCxVQUFRLENBQUNpRCxhQUFULENBQXVCLFdBQXZCLEVBQW9DQyxLQUFwQyxDQUEwQ0MsT0FBMUMsR0FBb0QsTUFBcEQ7QUFDQW5ELFVBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDRyxTQUF6QyxHQUFxRCxFQUFyRDtBQUNBcEQsVUFBUSxDQUFDaUQsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0csU0FBdEMsR0FBa0QsRUFBbEQ7QUFDQXBELFVBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NJLFlBQXhDLENBQXFELEtBQXJELEVBQTRELEVBQTVEO0FBQ0FyRCxVQUFRLENBQUNpRCxhQUFULENBQXVCLFdBQXZCLEVBQW9DSyxTQUFwQyxDQUE4Q0MsTUFBOUMsQ0FBcUQscUJBQXJEO0FBQ0F2RCxVQUFRLENBQUNpRCxhQUFULENBQXVCLFFBQXZCLEVBQWlDQyxLQUFqQyxDQUF1Q0MsT0FBdkMsR0FBaUQsTUFBakQ7QUFDQW5ELFVBQVEsQ0FBQ3dELGlCQUFULENBQTJCLFFBQTNCLEVBQXFDQyxPQUFyQyxDQUE2QyxVQUFBQyxLQUFLLEVBQUk7QUFDcERBLFNBQUssQ0FBQ0MsUUFBTixHQUFpQixLQUFqQjtBQUNELEdBRkQ7O0FBR0EsTUFBSUMsK0NBQUksS0FBSyxvQkFBYixFQUFtQztBQUNqQzVELFlBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsMkJBQXZCLEVBQW9EWSxPQUFwRCxHQUE4RCxLQUE5RDtBQUNELEdBRkQsTUFFTztBQUNMN0QsWUFBUSxDQUFDOEQsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDTCxPQUE5QyxDQUFzRCxVQUFBQyxLQUFLLEVBQUk7QUFDN0RBLFdBQUssQ0FBQ0ssS0FBTixHQUFjLEVBQWQ7QUFDRCxLQUZEO0FBR0Q7QUFDRixDQWxCTSxDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBRU8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ25DaEUsVUFBUSxDQUFDaUQsYUFBVCxDQUF1QixRQUF2QixFQUFpQ0MsS0FBakMsQ0FBdUNDLE9BQXZDLEdBQWlELE1BQWpEO0FBQ0FuRCxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0MwRCxRQUF4QyxHQUFtRCxJQUFuRDtBQUNBM0QsVUFBUSxDQUFDd0QsaUJBQVQsQ0FBMkIsUUFBM0IsRUFBcUNDLE9BQXJDLENBQTZDLFVBQUFDLEtBQUssRUFBSTtBQUNwREEsU0FBSyxDQUFDQyxRQUFOLEdBQWlCLElBQWpCO0FBQ0QsR0FGRDs7QUFIbUMseUJBTUFNLHdFQUFlLENBQUNDLHVEQUFELEVBQWVOLCtDQUFmLENBTmY7QUFBQSxNQU03Qk8sUUFONkIsb0JBTTdCQSxRQU42QjtBQUFBLE1BTW5CQyxjQU5tQixvQkFNbkJBLGNBTm1COztBQU9uQyxNQUFJQyxlQUFlLEdBQUdyRSxRQUFRLENBQUNpRCxhQUFULENBQXVCLFdBQXZCLENBQXRCO0FBQ0EsTUFBSXFCLGNBQWMsR0FBR3RFLFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsTUFBSXNCLFlBQVksR0FBR3ZFLFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFDQSxNQUFJdUIsV0FBVyxHQUFHeEUsUUFBUSxDQUFDaUQsYUFBVCxDQUF1QixlQUF2QixDQUFsQjs7QUFDQSxNQUFJLENBQUNtQixjQUFMLEVBQXFCO0FBQ25CO0FBQ0FDLG1CQUFlLENBQUNuQixLQUFoQixDQUFzQkMsT0FBdEIsR0FBZ0MsT0FBaEM7QUFDQWtCLG1CQUFlLENBQUNmLFNBQWhCLENBQTBCbUIsR0FBMUIsQ0FBOEIsbUJBQTlCO0FBQ0FILGtCQUFjLENBQUNsQixTQUFmLEdBQTJCLFlBQTNCO0FBQ0EsUUFBSXNCLEtBQUssR0FBR0MsY0FBYyxFQUExQjs7QUFDQSxRQUFJRCxLQUFKLEVBQVc7QUFDVEgsa0JBQVksQ0FBQ25CLFNBQWIsb0NBQW1EdUIsY0FBYyxFQUFqRTtBQUNEOztBQUNESCxlQUFXLENBQUNuQixZQUFaLENBQ0UsS0FERixFQUVFdUIsa0VBQXVCLENBQUNDLGNBQWMsQ0FBQyxJQUFELENBQWYsQ0FGekI7QUFJQUMsNERBQWEsS0FBSyxDQUFsQixJQUF1QjlFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3QzhFLG1CQUF4QyxDQUE2RCxPQUE3RCxFQUFzRWhDLHNFQUF0RSxDQUF2QixDQWJtQixDQWE4Rjs7QUFDakgvQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NvRCxZQUF4QyxDQUFxRCxTQUFyRCxFQUFnRSxlQUFoRTtBQUNELEdBZkQsTUFlTztBQUNMO0FBQ0EsUUFBSXlCLHdEQUFhLEtBQUssQ0FBdEIsRUFBeUI7QUFDdkJOLGlCQUFXLENBQUNuQixZQUFaLENBQ0UsS0FERixFQUVFMkIsb0VBQXlCLENBQUNILGNBQWMsQ0FBQyxLQUFELENBQWYsQ0FGM0I7QUFJQVIscUJBQWUsQ0FBQ25CLEtBQWhCLENBQXNCQyxPQUF0QixHQUFnQyxPQUFoQztBQUNBa0IscUJBQWUsQ0FBQ2YsU0FBaEIsQ0FBMEJtQixHQUExQixDQUE4QixxQkFBOUI7QUFDQUgsb0JBQWMsQ0FBQ2xCLFNBQWYsR0FBMkIsZUFBM0I7QUFDQW1CLGtCQUFZLENBQUNuQixTQUFiLEdBQXlCZSxRQUF6QjtBQUNBbkUsY0FBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDZ0YsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFbEMsc0VBQWxFO0FBQ0FtQyx5RUFBZ0I7QUFDaEJDLFlBQU0sQ0FBQ0MsT0FBUCxJQUFrQkEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosQ0FBa0IsQ0FBQyxTQUFELEVBQVlGLE9BQU8sQ0FBQ0MsR0FBcEIsQ0FBbEIsQ0FBbEIsQ0FYdUIsQ0FXdUM7QUFDL0QsS0FaRCxNQVlPO0FBQ0xyRixjQUFRLENBQ0xDLGNBREgsQ0FDa0IsYUFEbEIsRUFFR29ELFlBRkgsQ0FHSSxLQUhKLEVBSUlrQyxzREFBVyxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxzREFBVyxDQUFDaEUsTUFBdkMsQ0FBRCxDQUpmO0FBTUF2QixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNpRCxLQUFqQyxDQUF1Q0MsT0FBdkMsR0FBaUQsT0FBakQ7QUFDRDtBQUNGO0FBQ0YsQ0FsRE07O0FBb0RQLElBQU0wQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFjLFVBQVUsRUFBSTtBQUNuQyxNQUFJQSxVQUFKLEVBQWdCO0FBQ2QsV0FBT0gsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQmQsa0VBQXVCLENBQUNyRCxNQUFuRCxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT2lFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JWLG9FQUF5QixDQUFDekQsTUFBckQsQ0FBUDtBQUNEO0FBQ0YsQ0FORDs7QUFRQSxJQUFNb0QsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQUlpQixTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsT0FBSyxJQUFJekUsQ0FBQyxHQUFHRyxzREFBVyxDQUFDQyxNQUFaLEdBQXFCLENBQWxDLEVBQXFDSixDQUFDLEdBQUcsQ0FBQyxDQUExQyxFQUE2Q0EsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRCxRQUFJRyxzREFBVyxDQUFDSCxDQUFELENBQVgsQ0FBZUssUUFBbkIsRUFBNkI7QUFDM0JvRSxlQUFTO0FBQ1YsS0FGRCxNQUVPO0FBQ0w7QUFDRDtBQUNGOztBQUNELFNBQU9BLFNBQVMsR0FBRyxDQUFaLEdBQWdCLENBQWhCLEdBQW9CQSxTQUFTLEdBQUcsQ0FBaEMsR0FBb0MsSUFBM0M7QUFDRCxDQVZELEM7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNM0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxZQUFELEVBQWVOLElBQWYsRUFBd0I7QUFDdEQsTUFBSU8sUUFBSixFQUFjQyxjQUFkLEVBQThCeUIsU0FBOUI7O0FBQ0EsTUFBR2pDLElBQUksS0FBSyxvQkFBWixFQUFrQztBQUNqQ2lDLGFBQVMsR0FBRzdGLFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsMkJBQXZCLEVBQW9EYyxLQUFoRTtBQURpQztBQUFBO0FBQUE7O0FBQUE7QUFFakMsMkJBQXNCRyxZQUF0Qiw4SEFBb0M7QUFBQSxZQUE1QjRCLFVBQTRCOztBQUNuQyxZQUFHRCxTQUFTLEtBQUtDLFVBQVUsQ0FBQ0MsTUFBNUIsRUFBb0M7QUFDbkM1QixrQkFBUSxHQUFHMkIsVUFBVSxDQUFDM0IsUUFBdEI7QUFDQUMsd0JBQWMsR0FBRzBCLFVBQVUsQ0FBQzFCLGNBQTVCO0FBQ0E7QUFDQTtBQUNEO0FBUmdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU2pDLFdBQU87QUFBRXlCLGVBQVMsRUFBVEEsU0FBRjtBQUFhMUIsY0FBUSxFQUFSQSxRQUFiO0FBQXVCQyxvQkFBYyxFQUFkQTtBQUF2QixLQUFQO0FBQ0EsR0FWRCxNQVVPO0FBQUEsUUFDRTRCLFVBREYsR0FDa0Q5QixZQURsRCxDQUNFOEIsVUFERjtBQUFBLFFBQ2NDLGNBRGQsR0FDa0QvQixZQURsRCxDQUNjK0IsY0FEZDtBQUFBLFFBQzhCQyxlQUQ5QixHQUNrRGhDLFlBRGxELENBQzhCZ0MsZUFEOUI7QUFFTkwsYUFBUyxHQUFDLEVBQVY7QUFDQTdGLFlBQVEsQ0FBQzhELGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0wsT0FBOUMsQ0FBc0QsVUFBQUMsS0FBSyxFQUFJO0FBQzlEbUMsZUFBUyxJQUFJbkMsS0FBSyxDQUFDeUMsRUFBTixHQUFXLEdBQVgsR0FBaUJ6QyxLQUFLLENBQUNLLEtBQXZCLEdBQStCLEdBQTVDO0FBQ0EsS0FGRDtBQUhNO0FBQUE7QUFBQTs7QUFBQTtBQU1OLDRCQUFzQmlDLFVBQXRCLG1JQUFrQztBQUFBLFlBQXpCSCxVQUF5QjtBQUNqQyxZQUFJTyxjQUFjLEdBQUcsSUFBckI7O0FBQ0FQLGtCQUFTLENBQUMzQixZQUFWLENBQXVCVCxPQUF2QixDQUErQixVQUFTNEMsR0FBVCxFQUFjQyxLQUFkLEVBQXFCO0FBQ25ELGNBQUk1QyxLQUFLLEdBQUcxRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0JvRyxHQUFHLENBQUNFLE9BQTVCLENBQVo7QUFDQSxjQUFJQyxTQUFTLEdBQUc5QyxLQUFLLENBQUMrQyxZQUFOLENBQW1CLGdCQUFuQixDQUFoQjs7QUFDQSxrQkFBUUQsU0FBUjtBQUNDLGlCQUFLLFFBQUw7QUFDQyxrQkFBSTlDLEtBQUssQ0FBQ0ssS0FBTixDQUFZckIsT0FBWixDQUFvQixLQUFwQixFQUEyQixFQUEzQixNQUFtQzJELEdBQUcsQ0FBQ0ssS0FBdkMsSUFBZ0RMLEdBQUcsQ0FBQ0ssS0FBSixLQUFjLE9BQWxFLEVBQTJFO0FBQzFFTiw4QkFBYyxHQUFHLEtBQWpCO0FBQ2tCOztBQUNMLGlCQUFLLGdCQUFMO0FBQ0ksa0JBQUlPLFNBQVMsR0FBR04sR0FBRyxDQUFDSyxLQUFKLENBQVVuRixNQUFWLEtBQXFCLENBQXJCLEdBQXlCLENBQUMsTUFBTThFLEdBQUcsQ0FBQ0ssS0FBWCxFQUFrQkUsS0FBbEIsQ0FBd0IsRUFBeEIsQ0FBekIsR0FBdURQLEdBQUcsQ0FBQ0ssS0FBSixDQUFVRSxLQUFWLENBQWdCLEVBQWhCLENBQXZFOztBQUNBLGtCQUFJLENBQUNDLDBFQUFtQixDQUFDbkQsS0FBSyxDQUFDSyxLQUFOLENBQVkrQyxJQUFaLEVBQUQsRUFBcUJILFNBQXJCLENBQXhCLEVBQXlEO0FBQ3JEUCw4QkFBYyxHQUFHLEtBQWpCO0FBQ0E7QUFDSDs7QUFDbkI7QUFYRjtBQWFBLFNBaEJEOztBQWlCQSxZQUFJQSxjQUFKLEVBQW9CO0FBQ25CakMsa0JBQVEsR0FBRzBCLFVBQVMsQ0FBQzFCLFFBQXJCO0FBQ0FDLHdCQUFjLEdBQUd5QixVQUFTLENBQUNrQixPQUEzQjs7QUFDQSxjQUFJM0MsY0FBYyxLQUFLLElBQXZCLEVBQTZCLENBQzVCO0FBQ0EsV0FGRCxNQUVPLENBQ047QUFDQTs7QUFDRDtBQUNBO0FBQ0Q7QUFuQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQ04sUUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDZEEsY0FBUSxHQUFHNkMsc0VBQWUsQ0FBQ2QsZUFBRCxDQUExQjtBQUNBOUIsb0JBQWMsR0FBRzZCLGNBQWpCLENBRmMsQ0FHZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELFdBQU87QUFBRUosZUFBUyxFQUFUQSxTQUFGO0FBQWExQixjQUFRLEVBQVJBLFFBQWI7QUFBdUJDLG9CQUFjLEVBQWRBO0FBQXZCLEtBQVA7QUFDQTtBQUNELENBMURNO0FBNERQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0EsU0FBUzZDLDJCQUFULENBQXFDQyxZQUFyQyxFQUFtRDtBQUMvQyxNQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNULFlBQWIsQ0FBMEIsY0FBMUIsQ0FBWCxDQUFkO0FBQ0EsTUFBSWEsS0FBSyxHQUFHLEtBQVo7O0FBQ0EsVUFBUUgsT0FBTyxDQUFDWCxTQUFoQjtBQUNJLFNBQUssUUFBTDtBQUNJLFVBQUllLElBQUksR0FBR0wsWUFBWSxDQUFDbkQsS0FBYixDQUFtQnJCLE9BQW5CLENBQTJCLEtBQTNCLEVBQWtDLEVBQWxDLENBQVg7QUFDQThFLGlCQUFXLENBQUNMLE9BQU8sQ0FBQ00sU0FBVCxDQUFYLENBQStCYixLQUEvQixDQUFxQyxHQUFyQyxFQUEwQ25ELE9BQTFDLENBQWtELFVBQVNpRSxRQUFULEVBQW1CO0FBQ2pFLFlBQUlILElBQUksS0FBS0csUUFBYixFQUF1QjtBQUNuQlIsc0JBQVksQ0FBQzVELFNBQWIsQ0FBdUJtQixHQUF2QixDQUEyQixxQkFBM0I7QUFDQTZDLGVBQUssR0FBRyxJQUFSO0FBQ0g7QUFDSixPQUxEO0FBTUE7O0FBQ0osU0FBSyxPQUFMO0FBQ0ksVUFBSUMsSUFBSSxHQUFHTCxZQUFZLENBQUNuRCxLQUF4QjtBQUNBeUQsaUJBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxTQUFULENBQVgsQ0FBK0JiLEtBQS9CLENBQXFDLEdBQXJDLEVBQTBDbkQsT0FBMUMsQ0FBa0QsVUFBU2lFLFFBQVQsRUFBbUI7QUFDakUsWUFBSWYsU0FBUyxHQUFHZSxRQUFRLENBQUNuRyxNQUFULEtBQW9CLENBQXBCLEdBQXdCLENBQUMsTUFBTW9HLE1BQU0sQ0FBQzlCLFNBQWQsRUFBeUJlLEtBQXpCLENBQStCLEVBQS9CLENBQXhCLEdBQTZEZSxNQUFNLENBQUM5QixTQUFQLENBQWlCZSxLQUFqQixDQUF1QixFQUF2QixDQUE3RTs7QUFDQSxZQUFJZ0IsU0FBUyxDQUFDTCxJQUFELEVBQU9aLFNBQVAsQ0FBYixFQUFnQztBQUM1Qk8sc0JBQVksQ0FBQzVELFNBQWIsQ0FBdUJtQixHQUF2QixDQUEyQixxQkFBM0I7QUFDSDtBQUNKLE9BTEQ7QUFaUjs7QUFtQkEsTUFBSSxDQUFDNkMsS0FBTCxFQUFZO0FBQ1JKLGdCQUFZLENBQUM1RCxTQUFiLENBQXVCbUIsR0FBdkIsQ0FBMkIsdUJBQTNCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTb0QscUJBQVQsR0FBaUM7QUFBQSw4QkFDeUJDLDBCQUR6QjtBQUFBLE1BQ3ZCOUIsVUFEdUIseUJBQ3ZCQSxVQUR1QjtBQUFBLE1BQ1hDLGNBRFcseUJBQ1hBLGNBRFc7QUFBQSxNQUNLQyxlQURMLHlCQUNLQSxlQURMOztBQUU3QixPQUFLLElBQUkvRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNkUsVUFBVSxDQUFDekUsTUFBL0IsRUFBdUNKLENBQUMsRUFBeEMsRUFBNEM7QUFBQSx3QkFDRTZFLFVBQVUsQ0FBQzdFLENBQUQsQ0FEWjtBQUFBLFFBQ2xDK0MsWUFEa0MsaUJBQ2xDQSxZQURrQztBQUFBLFFBQ3BCNkMsT0FEb0IsaUJBQ3BCQSxPQURvQjtBQUFBLFFBQ1g1QyxRQURXLGlCQUNYQSxRQURXO0FBQUEsUUFDaUJpQyxjQURqQixHQUNrQyxJQURsQztBQUV4Q2xDLGdCQUFZLENBQUNULE9BQWIsQ0FBcUIsVUFBUzRDLEdBQVQsRUFBY0MsS0FBZCxFQUFxQjtBQUN0QyxVQUFJNUMsS0FBSyxHQUFHMUQsUUFBUSxDQUFDQyxjQUFULENBQXdCb0csR0FBRyxDQUFDRSxPQUE1QixDQUFaO0FBQ0EsVUFBSVksT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVzNELEtBQUssQ0FBQytDLFlBQU4sQ0FBbUIsY0FBbkIsQ0FBWCxDQUFkOztBQUNBLGNBQVFVLE9BQU8sQ0FBQ1gsU0FBaEI7QUFDSSxhQUFLLFFBQUw7QUFDSSxjQUFJOUMsS0FBSyxDQUFDSyxLQUFOLENBQVlyQixPQUFaLENBQW9CLEtBQXBCLEVBQTJCLEVBQTNCLE1BQW1DMkQsR0FBRyxDQUFDSyxLQUF2QyxJQUFnREwsR0FBRyxDQUFDSyxLQUFKLEtBQWMsT0FBbEUsRUFBMkU7QUFDdkVOLDBCQUFjLEdBQUcsS0FBakI7QUFDSDs7QUFDRDs7QUFDSixhQUFLLE9BQUw7QUFDSSxjQUFJTyxTQUFTLEdBQUdlLFFBQVEsQ0FBQ25HLE1BQVQsS0FBb0IsQ0FBcEIsR0FBd0IsQ0FBQyxNQUFNOEUsR0FBRyxDQUFDSyxLQUFYLEVBQWtCRSxLQUFsQixDQUF3QixFQUF4QixDQUF4QixHQUFzRFAsR0FBRyxDQUFDSyxLQUFKLENBQVVFLEtBQVYsQ0FBZ0IsRUFBaEIsQ0FBdEU7O0FBQ0EsY0FBSSxDQUFDZ0IsU0FBUyxDQUFDbEUsS0FBSyxDQUFDSyxLQUFQLEVBQWM0QyxTQUFkLENBQVYsSUFBc0NOLEdBQUcsQ0FBQ0ssS0FBSixLQUFjLE9BQXhELEVBQWlFO0FBQzdETiwwQkFBYyxHQUFHLEtBQWpCO0FBQ0g7O0FBVlQ7QUFZSCxLQWZEOztBQWdCQSxRQUFJQSxjQUFKLEVBQW9CO0FBQ2hCMkIsVUFBSSxHQUFHNUQsUUFBUDtBQUNBNkQsWUFBTSxHQUFHakIsT0FBVDs7QUFDQSxVQUFJaUIsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakJDLHlDQUFpQyxDQUFDakMsVUFBVSxDQUFDN0UsQ0FBRCxDQUFYLENBQWpDLENBRGlCLENBQ2dDO0FBQ3BELE9BRkQsTUFFTztBQUNIK0csU0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNDLFFBQXJDLENBQThDLHFCQUE5QztBQUNIOztBQUNEO0FBQ0g7QUFDSjs7QUFDRCxNQUFJSCxNQUFNLEtBQUssRUFBZixFQUFtQjtBQUNmRCxRQUFJLEdBQUdLLGNBQWMsQ0FBQ2xDLGVBQUQsQ0FBckI7QUFDQThCLFVBQU0sR0FBRy9CLGNBQVQ7QUFDQSxRQUFJb0MsTUFBTSxHQUFHckksUUFBUSxDQUFDOEQsZ0JBQVQsQ0FBMEIsaUNBQTFCLENBQWI7QUFIZTtBQUFBO0FBQUE7O0FBQUE7QUFJZiw0QkFBa0J1RSxNQUFsQixtSUFBMEI7QUFBQSxZQUFqQjNFLEtBQWlCO0FBQ3RCdUQsbUNBQTJCLENBQUN2RCxLQUFELENBQTNCO0FBQ0g7QUFOYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT2xCO0FBQ0o7O0FBRUQsU0FBU3VFLGlDQUFULENBQTJDSyxZQUEzQyxFQUF5RDtBQUFFO0FBQUYsTUFDL0NwRSxZQUQrQyxHQUNYb0UsWUFEVyxDQUMvQ3BFLFlBRCtDO0FBQUEsTUFDakM2QyxPQURpQyxHQUNYdUIsWUFEVyxDQUNqQ3ZCLE9BRGlDO0FBQUEsTUFDeEI1QyxRQUR3QixHQUNYbUUsWUFEVyxDQUN4Qm5FLFFBRHdCO0FBRXJERCxjQUFZLENBQUNULE9BQWIsQ0FBcUIsVUFBUzRDLEdBQVQsRUFBY0MsS0FBZCxFQUFxQjtBQUFBLFFBQ2hDaUMsS0FEZ0MsR0FDYmxDLEdBRGEsQ0FDaENrQyxLQURnQztBQUFBLFFBQ3pCaEMsT0FEeUIsR0FDYkYsR0FEYSxDQUN6QkUsT0FEeUI7QUFFdEMsUUFBSTdDLEtBQUssR0FBRzFELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QnNHLE9BQXhCLENBQVo7O0FBQ0EsUUFBSWdDLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2hCN0UsV0FBSyxDQUFDSixTQUFOLENBQWdCbUIsR0FBaEIsQ0FBb0IscUJBQXBCO0FBQ0gsS0FGRCxNQUVPLElBQUk4RCxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUN4QjdFLFdBQUssQ0FBQ0osU0FBTixDQUFnQm1CLEdBQWhCLENBQW9CLHVCQUFwQjtBQUNILEtBRk0sTUFFQTtBQUNILFVBQUlmLEtBQUssQ0FBQ0ssS0FBTixDQUFZckIsT0FBWixDQUFvQixLQUFwQixFQUEyQixFQUEzQixLQUFrQzZGLEtBQUssQ0FBQ2IsUUFBNUMsRUFBc0Q7QUFDbERoRSxhQUFLLENBQUNKLFNBQU4sQ0FBZ0JtQixHQUFoQixDQUFvQixxQkFBcEI7QUFDSCxPQUZELE1BRU87QUFDSGYsYUFBSyxDQUFDSixTQUFOLENBQWdCbUIsR0FBaEIsQ0FBb0IsdUJBQXBCO0FBQ0g7QUFDSjtBQUNKLEdBZEQ7QUFlSCxDOzs7Ozs7Ozs7Ozs7QUNqTUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNK0QsV0FBVyxHQUFHeEksUUFBUSxDQUFDeUksSUFBVCxDQUFjQyxPQUFkLENBQXNCdkMsRUFBMUM7QUFFQSxJQUFNd0MsT0FBTyxHQUFHdkIsSUFBSSxDQUFDQyxLQUFMLENBQ3RCckgsUUFBUSxDQUFDeUksSUFBVCxDQUFjQyxPQUFkLENBQXNCQyxPQUF0QixDQUE4QmpHLE9BQTlCLENBQXNDLElBQXRDLEVBQTRDLEdBQTVDLENBRHNCLENBQWhCO0FBSUEsSUFBTXdCLFlBQVksR0FBR2tELElBQUksQ0FBQ0MsS0FBTCxDQUMzQnVCLHlFQUFrQixDQUFDQyx5RUFBa0IsQ0FBQ0MsTUFBTSxDQUFDOUksUUFBUSxDQUFDeUksSUFBVCxDQUFjQyxPQUFkLENBQXNCcEksQ0FBdkIsRUFBMEIsUUFBMUIsQ0FBTixDQUEwQ3lJLFFBQTFDLENBQW1ELE1BQW5ELENBQUQsRUFBNkRKLE9BQU8sQ0FBQ0ssSUFBckUsRUFBMkUsS0FBM0UsQ0FBbkIsQ0FEUyxDQUFyQjtBQUlBLElBQU1wRixJQUFJLEdBQUc1RCxRQUFRLENBQUN5SSxJQUFULENBQWNDLE9BQWQsQ0FBc0JPLGFBQW5DO0FBRUEsSUFBSW5FLGFBQWEsR0FBRyxDQUFwQjtBQUVBLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUNwQ0osZUFBYTtBQUNkLENBRk07QUFJQSxJQUFJRix1QkFBSixFQUE2QkkseUJBQTdCLEVBQXdETyxXQUF4RDs7QUFFUCxRQUFPaUQsV0FBVyxDQUFDVSxNQUFaLENBQW1CLENBQW5CLEVBQXFCLENBQXJCLENBQVA7QUFDQyxPQUFLLElBQUw7QUFDQ3RFLDJCQUF1QixHQUFHLENBQ3pCLGlFQUR5QixFQUV6QixpRUFGeUIsQ0FBMUI7QUFJQUksNkJBQXlCLEdBQUcsQ0FDM0IsaUVBRDJCLEVBRTNCLGlFQUYyQixDQUE1QjtBQUlBTyxlQUFXLEdBQUcsQ0FDYixzREFEYSxFQUViLHNEQUZhLENBQWQ7QUFJQTs7QUFDRCxPQUFLLElBQUw7QUFDQ1gsMkJBQXVCLEdBQUcsQ0FDekIsaUVBRHlCLEVBRXpCLGlFQUZ5QixDQUExQjtBQUlBSSw2QkFBeUIsR0FBRyxDQUMzQixpRUFEMkIsRUFFM0IsaUVBRjJCLENBQTVCO0FBSUFPLGVBQVcsR0FBRyxDQUNiLHNEQURhLEVBRWIsc0RBRmEsQ0FBZDtBQUlBOztBQUNELE9BQUssSUFBTDtBQUNDWCwyQkFBdUIsR0FBRyxDQUN6QixpRUFEeUIsRUFFekIsaUVBRnlCLENBQTFCO0FBSUFJLDZCQUF5QixHQUFHLENBQzNCLGlFQUQyQixFQUUzQixpRUFGMkIsQ0FBNUI7QUFJQU8sZUFBVyxHQUFHLENBQ2Isc0RBRGEsRUFFYixzREFGYSxDQUFkO0FBSUE7O0FBQ0QsT0FBSyxJQUFMO0FBQ0M7O0FBQ0QsT0FBSyxJQUFMO0FBQ0M7O0FBQ0QsT0FBSyxJQUFMO0FBQ0M7QUFoREY7O0FBbURPLElBQUlqRSxXQUFKLEVBQWlCbkIsUUFBakI7QUFDUCxJQUFJZ0osZ0JBQWdCLEdBQUdoRSxNQUFNLENBQUNpRSxNQUFQLENBQWNBLE1BQWQsQ0FBcUJDLGFBQTVDOztBQUNBLElBQUdGLGdCQUFILEVBQXFCO0FBQ3BCLE1BQUlHLG9CQUFvQixHQUFHbEMsSUFBSSxDQUFDQyxLQUFMLENBQVc4QixnQkFBZ0IsQ0FBQ3BGLEtBQTVCLENBQTNCO0FBQ0F6QyxhQUFXLEdBQUdnSSxvQkFBb0IsQ0FBQ2hJLFdBQXJCLEdBQ2JnSSxvQkFBb0IsQ0FBQ2hJLFdBRFIsR0FDc0IsRUFEcEM7QUFFQW5CLFVBQVEsR0FBR21KLG9CQUFvQixDQUFDbkosUUFBckIsR0FDVmMsTUFBTSxDQUFDcUksb0JBQW9CLENBQUNuSixRQUF0QixDQURJLEdBQzhCLENBRHpDO0FBRUEsQ0FORCxNQU1PO0FBQ05tQixhQUFXLEdBQUdpSSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsSUFDYnBDLElBQUksQ0FBQ0MsS0FBTCxDQUFXa0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQVgsQ0FEYSxHQUNxQyxFQURuRDtBQUVBckosVUFBUSxHQUFHb0osWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLElBQ1Z2SSxNQUFNLENBQUNzSSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBRCxDQURJLEdBQ2lDLENBRDVDO0FBRUEsQzs7Ozs7Ozs7Ozs7OztBQ3ZGRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEzSixnRkFBZTtBQUVmRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NnRixnQkFBeEMsQ0FBeUQsT0FBekQsRUFBa0VqQiwwRUFBbEUsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBZSx5RUFBQ3lGLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUMvQixTQUFPRCxLQUFLLENBQUMvRyxPQUFOLENBQWMsb0JBQWQsRUFBb0MsVUFBVTRGLFlBQVYsRUFBd0I7QUFBRTtBQUNqRSxRQUFJcUIsTUFBTSxHQUFHckIsWUFBWSxDQUFDMUIsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUFiO0FBQ0EsUUFBSWdELE9BQU8sR0FBR3RCLFlBQVksQ0FBQzFCLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FBZDtBQUNBLFFBQUlpRCxlQUFlLEdBQUdGLE1BQU0sQ0FBQ3BJLE1BQVAsSUFBaUIsQ0FBakIsR0FBcUIsRUFBckIsR0FBMEJvSSxNQUFoRDs7QUFDQSxRQUFJQSxNQUFNLENBQUNwSSxNQUFQLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLFVBQUl1SSxhQUFhLEdBQUdILE1BQU0sQ0FBQy9DLEtBQVAsQ0FBYSxFQUFiLEVBQWlCbUQsT0FBakIsRUFBcEI7QUFDQSxVQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBRixtQkFBYSxDQUFDckcsT0FBZCxDQUFzQixVQUFVd0csTUFBVixFQUFrQjtBQUNwQyxZQUFJRCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiSCx5QkFBZSxHQUFHSCxPQUFPLEdBQUdPLE1BQVYsR0FBbUJKLGVBQXJDO0FBQ0FHLGVBQUssR0FBRyxDQUFSO0FBQ0gsU0FIRCxNQUdPO0FBQ0hILHlCQUFlLEdBQUdJLE1BQU0sR0FBR0osZUFBM0I7QUFDQUcsZUFBSztBQUNSO0FBQ0osT0FSRDtBQVNIOztBQUNELHFCQUFVSCxlQUFWLFNBQTRCRCxPQUFPLEdBQUcsR0FBSCxHQUFTLEVBQTVDLFNBQWlEQSxPQUFPLEdBQUdBLE9BQUgsR0FBYSxFQUFyRTtBQUNILEdBbEJNLENBQVA7QUFtQkgsQ0FwQkQsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSx5RUFBQU0sSUFBSSxFQUFJO0FBQ25CLE1BQUlDLE1BQU0sR0FBR0QsSUFBSSxDQUFDeEgsT0FBTCxDQUFhLGNBQWIsRUFBNkIsVUFBVTRGLFlBQVYsRUFBd0I7QUFBRTtBQUNsRSxRQUFJOEIsTUFBSyxHQUFHOUIsWUFBWSxDQUFDL0csTUFBYixHQUFzQixDQUFsQzs7QUFDQSxRQUFJOEksT0FBTyxHQUFHL0IsWUFBWSxDQUFDWSxNQUFiLENBQW9CLENBQXBCLEVBQXVCa0IsTUFBdkIsRUFBOEIxSCxPQUE5QixDQUFzQyxPQUF0QyxFQUErQyxHQUEvQyxFQUFvREEsT0FBcEQsQ0FBNEQsTUFBNUQsRUFBb0UsR0FBcEUsQ0FBZDs7QUFDQSxRQUFJO0FBQ0YsYUFBTzRILElBQUksQ0FBQ0QsT0FBRCxDQUFYO0FBQ0QsS0FGRCxDQUVFLE9BQU9FLEtBQVAsRUFBYztBQUNkOztBQUVBLGFBQU9qQyxZQUFQO0FBQ0Q7QUFDRixHQVZZLENBQWI7QUFXQSxTQUFPNkIsTUFBUDtBQUNELENBYkgsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSx5RUFBQ1YsS0FBRCxFQUFRZSxTQUFSLEVBQW1CQyxVQUFuQixFQUFrQztBQUM3QyxNQUFJTixNQUFNLEdBQUdWLEtBQUssQ0FBQ1YsUUFBTixHQUFpQnJHLE9BQWpCLENBQXlCLFVBQXpCLEVBQXFDLFVBQVU0RixZQUFWLEVBQXdCO0FBQUU7QUFDeEUsU0FBSyxJQUFJb0MsUUFBUSxHQUFHLENBQXBCLEVBQXVCQSxRQUFRLEdBQUdGLFNBQVMsQ0FBQ2pKLE1BQTVDLEVBQW9EbUosUUFBUSxFQUE1RCxFQUFnRTtBQUM1RCxVQUFJRixTQUFTLENBQUNFLFFBQUQsQ0FBVCxXQUEyQnBDLFlBQVksQ0FBQyxDQUFELENBQTNDLEVBQWdEO0FBQzVDLGVBQU9tQyxVQUFVLEdBQUdELFNBQVMsQ0FBQ0UsUUFBRCxDQUFULENBQW9CQyxFQUF2QixHQUE0QkgsU0FBUyxDQUFDRSxRQUFELENBQVQsQ0FBb0JyRSxHQUFqRTtBQUNIO0FBQ0o7QUFDSixHQU5ZLENBQWI7QUFPQSxTQUFPOEQsTUFBUDtBQUNILENBVEQsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSxJQUFJUyxRQUFRLEdBQUc7QUFDWCxPQUFLLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixDQURNO0FBQ2dCO0FBQzNCLE9BQUssQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLE1BQWQsRUFBc0IsTUFBdEIsQ0FGTTtBQUdYLE9BQUssQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFFBQWQsRUFBd0IsWUFBeEIsQ0FITTtBQUlYLE9BQUssQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixTQUFoQixFQUEyQixhQUEzQixDQUpNO0FBS1gsT0FBSyxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFVBQXBCLEVBQWdDLGVBQWhDLENBTE07QUFNWCxPQUFLLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsV0FBbEIsRUFBK0IsWUFBL0IsQ0FOTTtBQU9YLE9BQUssQ0FBQyxNQUFELEVBQVMsRUFBVCxFQUFhLFNBQWIsRUFBd0IsYUFBeEIsQ0FQTTtBQVFYLE9BQUssQ0FBQyxPQUFELEVBQVUsRUFBVixFQUFjLFNBQWQsRUFBeUIsYUFBekIsQ0FSTTtBQVNYLE9BQUssQ0FBQyxNQUFELEVBQVMsRUFBVCxFQUFhLFNBQWIsRUFBd0IsYUFBeEIsQ0FUTTtBQVVYLE9BQUssQ0FBQyxPQUFELEVBQVUsRUFBVixFQUFjLFNBQWQsRUFBeUIsYUFBekI7QUFWTSxDQUFmO0FBWUEsSUFBSUMsaUJBQWlCLEdBQUc7QUFDcEIsT0FBSyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsQ0FEZTtBQUVwQixPQUFLLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxTQUFkLEVBQXlCLFVBQXpCLENBRmU7QUFHcEIsT0FBSyxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLFdBQWpCLEVBQThCLHVCQUE5QixDQUhlO0FBSXBCLE9BQUssQ0FBQyxTQUFELEVBQVksS0FBWixFQUFtQixTQUFuQixFQUE4Qix3QkFBOUIsQ0FKZTtBQUtwQixPQUFLLENBQUMsWUFBRCxFQUFlLFdBQWYsRUFBNEIsY0FBNUIsRUFBNEMsK0JBQTVDLENBTGU7QUFNcEIsT0FBSyxDQUFDLGNBQUQsRUFBaUIsWUFBakIsRUFBK0IsbUJBQS9CLEVBQW9ELHFCQUFwRCxDQU5lO0FBT3BCLE9BQUssQ0FBQyxhQUFELEVBQWdCLEVBQWhCLEVBQW9CLGlCQUFwQixFQUF1Qyw0QkFBdkMsQ0FQZTtBQVFwQixPQUFLLENBQUMsV0FBRCxFQUFjLEVBQWQsRUFBa0IsYUFBbEIsRUFBaUMsNkJBQWpDLENBUmU7QUFTcEIsT0FBSyxDQUFDLFNBQUQsRUFBWSxFQUFaLEVBQWdCLFlBQWhCLEVBQThCLDRCQUE5QixDQVRlO0FBVXBCLE9BQUssQ0FBQyxVQUFELEVBQWEsRUFBYixFQUFpQixZQUFqQixFQUErQiw0QkFBL0I7QUFWZSxDQUF4QjtBQWFlLHlFQUFDQyxLQUFELEVBQVFuRSxTQUFSLEVBQXNCO0FBQ2pDLE1BQUlvRSxJQUFJLEdBQUdwRSxTQUFTLENBQUMsQ0FBRCxDQUFwQjtBQUNBLE1BQUlxRSxPQUFPLEdBQUdyRSxTQUFTLENBQUMsQ0FBRCxDQUF2QjtBQUNBLE1BQUlzRSxNQUFNLEdBQUd0RSxTQUFTLENBQUMsQ0FBRCxDQUF0QjtBQUNBLE1BQUl1RSxNQUFNLEdBQUd2RSxTQUFTLENBQUMsQ0FBRCxDQUF0Qjs7QUFDQSxNQUFJd0UsSUFBSSxHQUFHTCxLQUFLLENBQUNoSSxXQUFOLEdBQW9CZ0UsSUFBcEIsRUFBWDs7QUFDQSxNQUFJc0UsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsTUFBSUYsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDWjtBQUNBLFFBQUlELE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2JHLFNBQUcsR0FBR1AsaUJBQWlCLENBQUNLLE1BQUQsQ0FBakIsQ0FBMEIsQ0FBMUIsQ0FBTjtBQUNILEtBRkQsTUFFTyxJQUFJRCxNQUFNLElBQUksQ0FBZCxFQUFpQjtBQUNwQjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxDQUFULElBQWNBLE1BQU0sR0FBRyxDQUEzQixFQUE4QjtBQUMxQkUsV0FBRyxHQUFHUCxpQkFBaUIsQ0FBQ0ssTUFBRCxDQUFqQixDQUEwQixDQUExQixJQUErQixRQUFyQztBQUNILE9BRkQsQ0FHQTtBQUhBLFdBSUssSUFBSUEsTUFBTSxJQUFJLENBQWQsRUFBaUI7QUFDbEJFLGFBQUcsR0FBRyxjQUFjUCxpQkFBaUIsQ0FBQ0ssTUFBRCxDQUFqQixDQUEwQixDQUExQixDQUFwQjtBQUNIO0FBQ0osS0FUTSxDQVVQO0FBVk8sU0FXRixJQUFJRCxNQUFNLElBQUksQ0FBZCxFQUFpQjtBQUNsQkcsV0FBRyxHQUFHLGNBQWNQLGlCQUFpQixDQUFDSyxNQUFELENBQWpCLENBQTBCLENBQTFCLENBQXBCO0FBQ0gsT0FGSSxDQUdMO0FBSEssV0FJQSxJQUFJRCxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNqQkcsYUFBRyxHQUFHUCxpQkFBaUIsQ0FBQ0ksTUFBRCxDQUFqQixDQUEwQixDQUExQixJQUErQixLQUEvQixHQUF1Q0osaUJBQWlCLENBQUNLLE1BQUQsQ0FBakIsQ0FBMEIsQ0FBMUIsQ0FBN0M7QUFDSDtBQUNKLEdBdEJELE1Bc0JPLElBQUlBLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ3BCO0FBQ0EsUUFBSUQsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDWkcsU0FBRyxHQUFHUCxpQkFBaUIsQ0FBQ0ksTUFBRCxDQUFqQixDQUEwQixDQUExQixDQUFOO0FBQ0g7QUFDSixHQWxDZ0MsQ0FtQ2pDOzs7QUFDQSxNQUFJRCxPQUFPLEdBQUcsQ0FBZCxFQUFpQjtBQUNiLFFBQUlBLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2QsVUFBSUMsTUFBTSxJQUFJLENBQVYsSUFBZUMsTUFBTSxJQUFJLENBQTdCLEVBQWdDRSxHQUFHLEdBQUdQLGlCQUFpQixDQUFDRyxPQUFELENBQWpCLENBQTJCLENBQTNCLElBQWdDLEdBQWhDLEdBQXNDSSxHQUE1QztBQUNoQyxVQUFJSCxNQUFNLElBQUksQ0FBVixJQUFlQyxNQUFNLElBQUksQ0FBN0IsRUFBZ0NFLEdBQUcsR0FBRyxnQkFBZ0JBLEdBQXRCO0FBQ25DLEtBSEQsTUFHTyxJQUFJSixPQUFPLEdBQUcsQ0FBZCxFQUFpQjtBQUNwQkksU0FBRyxHQUFHUCxpQkFBaUIsQ0FBQ0csT0FBRCxDQUFqQixDQUEyQixDQUEzQixJQUFnQyxHQUFoQyxHQUFzQ0ksR0FBNUM7QUFDSDtBQUNKLEdBM0NnQyxDQTRDakM7OztBQUNBLE1BQUlMLElBQUksSUFBSSxDQUFaLEVBQWVLLEdBQUcsR0FBRyxTQUFTQSxHQUFmLENBQWYsS0FDSyxJQUFJTCxJQUFJLEdBQUcsQ0FBWCxFQUFjSyxHQUFHLEdBQUdQLGlCQUFpQixDQUFDRSxJQUFELENBQWpCLENBQXdCLENBQXhCLElBQTZCLE9BQTdCLEdBQXVDSyxHQUE3QztBQUVuQkEsS0FBRyxHQUFHQSxHQUFHLENBQUN0RSxJQUFKLEVBQU47QUFDQXNFLEtBQUcsR0FBR0EsR0FBRyxDQUFDMUksT0FBSixDQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBTjtBQUNBMEksS0FBRyxHQUFHQSxHQUFHLEdBQUcsR0FBWjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVdGLEdBQVgsQ0FBYjtBQUNBLFNBQU9DLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZSixJQUFaLENBQVA7QUFDSCxDQXJERCxFOzs7Ozs7Ozs7OztBQ3pCQSx1QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc2NyaXB0cy9zY3JpcHRzJ1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuc2NzcyciLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyB0bXBUb3RhbCwgdG1wUHJvZ3Jlc28gfSBmcm9tICcuL1ZhcmlhYmxlcydcblxuZXhwb3J0IGNvbnN0IGJhcnJhRGVQcm9ncmVzbyA9ICgpID0+IHtcblx0bGV0IGFuY2hvQmFycmEgPSAyNTA7Ly8yNTQgcGFyYSBlbCBlc3BhY2lvIGRlbCBtYXJnZW5cblx0bGV0IHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc2JhcicpXG5cdGxldCBzZXBhcmFjaW9uID0gYW5jaG9CYXJyYSAvICh0bXBUb3RhbCArIDEpXG5cdGxldCBib3JkZUJhcnJhID0gY3JlYXJFbGVtZW50bygncmVjdCcsIHtcblx0XHR4OiAyLFxuXHRcdHk6IDIsXG5cdFx0d2lkdGg6IGFuY2hvQmFycmEsXG5cdFx0aGVpZ2h0OiAzMixcblx0XHRmaWxsOiAnbm9uZScsXG5cdFx0c3Ryb2tlOiAnI0NDQ0JDQicsXG5cdFx0c3Ryb2tlV2lkdGg6ICcxJyxcblx0XHRyeDogNSxcblx0XHRyeTogNVxuXHR9KVxuXHRzdmcuYXBwZW5kQ2hpbGQoYm9yZGVCYXJyYSlcblxuXHRsZXQgYW5jaG9MaW5lYSA9IE51bWJlcihhbmNob0JhcnJhIC0gKHNlcGFyYWNpb24gKiAyKSlcblx0bGV0IGxpbmVhQmFycmEgPSBjcmVhckVsZW1lbnRvKCdyZWN0Jywge1xuXHRcdHg6IHNlcGFyYWNpb24sXG5cdFx0eTogMTcsXG5cdFx0d2lkdGg6IGFuY2hvTGluZWEsXG5cdFx0aGVpZ2h0OiAyLFxuXHRcdGZpbGw6ICcjRTdFNUU1Jyxcblx0XHRyeDogMixcblx0XHRyeTogMlxuXHR9KTtcblx0c3ZnLmFwcGVuZENoaWxkKGxpbmVhQmFycmEpXG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0bXBUb3RhbDsgaSsrKSB7XG5cdFx0bGV0IGNvbG9yQ2lyY3VsbywgckNpcmNsZTtcblx0XHRpZiAodG1wUHJvZ3Jlc28ubGVuZ3RoID4gaSkge1xuXHRcdFx0ckNpcmNsZSA9IDQ7XG5cdFx0XHRpZiAodG1wUHJvZ3Jlc29baV0uY29ycmVjdG8pIHtcblx0XHRcdFx0Y29sb3JDaXJjdWxvID0gdG1wUHJvZ3Jlc29baV0uTlVNRVJPSU5URU5UT1MgPT09IDEgPyAnIzAwQUM0RCcgOiAnI0UyQzA0RCdcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbG9yQ2lyY3VsbyA9ICcjRTI0QjRBJ1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodG1wUHJvZ3Jlc28ubGVuZ3RoID09PSBpKSB7XG5cdFx0XHRyQ2lyY2xlID0gOFxuXHRcdFx0Y29sb3JDaXJjdWxvID0gJyMxMjgwQjEnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJDaXJjbGUgPSA0XG5cdFx0XHRjb2xvckNpcmN1bG8gPSAnI0NDQ0JDQidcblx0XHR9XG5cdFx0bGV0IGN4Q2lyY2xlID0gc2VwYXJhY2lvbiAqIChpICsgMSkgKyAyO1xuXHRcdGxldCBjaXJjbGUgPSBjcmVhckVsZW1lbnRvKCdjaXJjbGUnLCB7XG5cdFx0XHRjeDogY3hDaXJjbGUsXG5cdFx0XHRjeTogMTgsXG5cdFx0XHRyOiByQ2lyY2xlLFxuXHRcdFx0ZmlsbDogY29sb3JDaXJjdWxvLFxuXHRcdFx0c3Ryb2tlOiAnbm9uZSdcblx0XHR9KVxuXHRcdHN2Zy5hcHBlbmRDaGlsZChjaXJjbGUpO1xuXHRcdGlmICh0bXBQcm9ncmVzby5sZW5ndGggPT09IGkpIHtcblx0XHRcdGxldCB0ZXh0UG9zaWNpb24gPSBjcmVhckVsZW1lbnRvKCd0ZXh0Jywge1xuXHRcdFx0XHR4OiBjeENpcmNsZSxcblx0XHRcdFx0eTogMjIsXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcblx0XHRcdFx0Zm9udFNpemU6ICcxMXB4Jyxcblx0XHRcdFx0dGV4dEFuY2hvcjogJ21pZGRsZScsXG5cdFx0XHRcdGZpbGw6ICd3aGl0ZSdcblx0XHRcdH0pXG5cdFx0XHR0ZXh0UG9zaWNpb24udGV4dENvbnRlbnQgPSB0bXBQcm9ncmVzby5sZW5ndGggKyAxXG5cdFx0XHRzdmcuYXBwZW5kQ2hpbGQodGV4dFBvc2ljaW9uKVxuXHRcdH1cblx0fVxufVxuXG5jb25zdCBjcmVhckVsZW1lbnRvID0gKG5vbWJyZSwgYXRyaWJ1dG9zKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBub21icmUpXG4gICAgZm9yIChsZXQgcCBpbiBhdHJpYnV0b3MpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBwLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChtLCBwLCBvLCBzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyBtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pLCBhdHJpYnV0b3NbcF0pXG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50XG59IiwiaW1wb3J0IHsgdGlwbyB9IGZyb20gJy4vVmFyaWFibGVzJ1xuXG5leHBvcnQgY29uc3QgY29udGludWFyRWplcmNpY2lvID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQ29udGludWFyJykub25jbGljayA9ICgpID0+IGZhbHNlXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrIHNwYW4nKS5pbm5lckhUTUwgPSAnJ1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2sgcCcpLmlubmVySFRNTCA9ICcnXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjayBpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2snKS5jbGFzc0xpc3QucmVtb3ZlKCdmZWVkYmFjay1pbmNvcnJlY3RvJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnYW5zd2VyJykuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZVxuICB9KVxuICBpZiAodGlwbyA9PT0gJ3NlbGVjY2lvbiBtdWx0aXBsZScpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkJykuY2hlY2tlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT10ZXh0XScpLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIG51bWVyb0ludGVudG8sXG4gIHNpZ3VpZW50ZUludGVudG8sXG4gIHZhbGlkYWNpb25lcyxcbiAgdGlwbyxcbiAgdG1wUHJvZ3Jlc28sXG4gIHNyY0ltZ1Jlc3B1ZXN0YUNvcnJlY3RhLFxuICBzcmNJbWdSZXNwdWVzdGFJbmNvcnJlY3RhLFxuICBzcmNJbWdHbG9zYVxufSBmcm9tIFwiLi9WYXJpYWJsZXNcIjtcbmltcG9ydCB7IHZhbGlkYVJlc3B1ZXN0YSB9IGZyb20gXCIuL1ZhbGlkYVJlc3B1ZXN0YVwiO1xuaW1wb3J0IHsgY29udGludWFyRWplcmNpY2lvIH0gZnJvbSBcIi4vQ29udGludWFyRWplcmNpY2lvXCI7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVSZXNwdWVzdGEgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blJlc3BvbmRlclwiKS5kaXNhYmxlZCA9IHRydWU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiYW5zd2VyXCIpLmZvckVhY2goaW5wdXQgPT4ge1xuICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG4gIGxldCB7IGZlZWRiYWNrLCBlcnJvckZyZWN1ZW50ZSB9ID0gdmFsaWRhUmVzcHVlc3RhKHZhbGlkYWNpb25lcywgdGlwbyk7XG4gIGxldCBmZWVkYmFja0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrXCIpO1xuICBsZXQgZmVlZGJhY2tTdHJvbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrIHNwYW5cIik7XG4gIGxldCBmZWVkYmFja1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRiYWNrIHBcIik7XG4gIGxldCBpbWdGZWVkYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlZGJhY2sgaW1nXCIpO1xuICBpZiAoIWVycm9yRnJlY3VlbnRlKSB7XG4gICAgLy9yZXNwdWVzdGEgY29ycmVjdGFcbiAgICBmZWVkYmFja0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBmZWVkYmFja0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZlZWRiYWNrLWNvcnJlY3RvXCIpO1xuICAgIGZlZWRiYWNrU3Ryb25nLmlubmVySFRNTCA9IFwiwqFNdXkgQmllbiFcIjtcbiAgICBsZXQgcmFjaGEgPSByYWNoYUNvcnJlY3RhcygpO1xuICAgIGlmIChyYWNoYSkge1xuICAgICAgZmVlZGJhY2tUZXh0LmlubmVySFRNTCA9IGBUaWVuZXMgdW5hIHJhY2hhIGRlIDxiPiR7cmFjaGFDb3JyZWN0YXMoKX08L2I+IHJlc3B1ZXN0YXMgY29ycmVjdGFzLmA7XG4gICAgfVxuICAgIGltZ0ZlZWRiYWNrLnNldEF0dHJpYnV0ZShcbiAgICAgIFwic3JjXCIsXG4gICAgICBzcmNJbWdSZXNwdWVzdGFDb3JyZWN0YVtpbWdSYW5kb21JbmRleCh0cnVlKV1cbiAgICApO1xuICAgIG51bWVyb0ludGVudG8gPT09IDIgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5Db250aW51YXJcIikucmVtb3ZlRXZlbnRMaXN0ZW5lciAoXCJjbGlja1wiLCBjb250aW51YXJFamVyY2ljaW8pOy8vc2kgZXMgcXVlIGVzIGVsIHNlZ3VuZG8gaW50ZW50b1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQ29udGludWFyXCIpLnNldEF0dHJpYnV0ZShcIm9uQ2xpY2tcIiwgXCJjZXJyYXJGZWVkKCk7XCIpO1xuICB9IGVsc2Uge1xuICAgIC8vcmVzcHVlc3RhIGluY29ycmVjdGFcbiAgICBpZiAobnVtZXJvSW50ZW50byA9PT0gMSkge1xuICAgICAgaW1nRmVlZGJhY2suc2V0QXR0cmlidXRlKFxuICAgICAgICBcInNyY1wiLFxuICAgICAgICBzcmNJbWdSZXNwdWVzdGFJbmNvcnJlY3RhW2ltZ1JhbmRvbUluZGV4KGZhbHNlKV1cbiAgICAgICk7XG4gICAgICBmZWVkYmFja0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGZlZWRiYWNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmVlZGJhY2staW5jb3JyZWN0b1wiKTtcbiAgICAgIGZlZWRiYWNrU3Ryb25nLmlubmVySFRNTCA9IFwiwqFUZW4gQ3VpZGFkbyFcIjtcbiAgICAgIGZlZWRiYWNrVGV4dC5pbm5lckhUTUwgPSBmZWVkYmFjaztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQ29udGludWFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250aW51YXJFamVyY2ljaW8pO1xuICAgICAgc2lndWllbnRlSW50ZW50bygpO1xuICAgICAgd2luZG93Lk1hdGhKYXggJiYgTWF0aEpheC5IdWIuUXVldWUoW1wiVHlwZXNldFwiLCBNYXRoSmF4Lkh1Yl0pIC8vbXVlc3RyYSBlbCBtYXRoamF4IGVuIGxvcyBmZWVkYmFja3MgZW4gY2FzbyBkZSBxdWUgZXhpc3RhblxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZW5HbG9zYVwiKVxuICAgICAgICAuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgc3JjSW1nR2xvc2FbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3JjSW1nR2xvc2EubGVuZ3RoKV1cbiAgICAgICAgKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xvc2FcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGltZ1JhbmRvbUluZGV4ID0gZXNDb3JyZWN0YSA9PiB7XG4gIGlmIChlc0NvcnJlY3RhKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNyY0ltZ1Jlc3B1ZXN0YUNvcnJlY3RhLmxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNyY0ltZ1Jlc3B1ZXN0YUluY29ycmVjdGEubGVuZ3RoKTtcbiAgfVxufTtcblxuY29uc3QgcmFjaGFDb3JyZWN0YXMgPSAoKSA9PiB7XG4gIHZhciBjb3JyZWN0b3MgPSAwO1xuICBmb3IgKHZhciBpID0gdG1wUHJvZ3Jlc28ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICBpZiAodG1wUHJvZ3Jlc29baV0uY29ycmVjdG8pIHtcbiAgICAgIGNvcnJlY3RvcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvcnJlY3RvcyArIDEgPiAxID8gY29ycmVjdG9zICsgMSA6IG51bGw7XG59O1xuIiwiaW1wb3J0IEZvcm1hdGVhTnVtZXJvcyBmcm9tICcuLi91dGlscy9Gb3JtYXRlYU51bWVyb3MnXG5pbXBvcnQgVmFsaWRhTnVtZXJvRXNjcml0byBmcm9tICcuLi91dGlscy9WYWxpZGFOdW1lcm9Fc2NyaXRvJ1xuXG5leHBvcnQgY29uc3QgdmFsaWRhUmVzcHVlc3RhID0gKHZhbGlkYWNpb25lcywgdGlwbykgPT4ge1xuXHRsZXQgZmVlZGJhY2ssIGVycm9yRnJlY3VlbnRlLCByZXNwdWVzdGFcblx0aWYodGlwbyA9PT0gJ3NlbGVjY2lvbiBtdWx0aXBsZScpIHtcblx0XHRyZXNwdWVzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkJykudmFsdWVcblx0XHRmb3IobGV0IHZhbGlkYWNpb24gb2YgdmFsaWRhY2lvbmVzKSB7XG5cdFx0XHRpZihyZXNwdWVzdGEgPT09IHZhbGlkYWNpb24ub3BjaW9uKSB7XG5cdFx0XHRcdGZlZWRiYWNrID0gdmFsaWRhY2lvbi5mZWVkYmFja1xuXHRcdFx0XHRlcnJvckZyZWN1ZW50ZSA9IHZhbGlkYWNpb24uZXJyb3JGcmVjdWVudGVcblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHsgcmVzcHVlc3RhLCBmZWVkYmFjaywgZXJyb3JGcmVjdWVudGUgfVxuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHsgcmVzcHVlc3RhcywgZXJyRnJlY0RlZmVjdG8sIGZlZWRiYWNrRGVmZWN0byB9ID0gdmFsaWRhY2lvbmVzXG5cdFx0cmVzcHVlc3RhPScnXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT10ZXh0XScpLmZvckVhY2goaW5wdXQgPT4ge1xuXHRcdFx0cmVzcHVlc3RhICs9IGlucHV0LmlkICsgJzonICsgaW5wdXQudmFsdWUgKyAnOydcblx0XHR9KVxuXHRcdGZvciAobGV0IHJlc3B1ZXN0YSBvZiByZXNwdWVzdGFzKSB7XG5cdFx0XHRsZXQgY29pbmNpZGVuVG9kYXMgPSB0cnVlXG5cdFx0XHRyZXNwdWVzdGEudmFsaWRhY2lvbmVzLmZvckVhY2goZnVuY3Rpb24odmFsLCBpbmRleCkge1xuXHRcdFx0XHRsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWwuaW5wdXRJZCk7XG5cdFx0XHRcdGxldCB0aXBvSW5wdXQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGlwb2lucHV0Jylcblx0XHRcdFx0c3dpdGNoICh0aXBvSW5wdXQpIHtcblx0XHRcdFx0XHRjYXNlICdudW1lcm8nOlxuXHRcdFx0XHRcdFx0aWYgKGlucHV0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJykgIT09IHZhbC52YWxvciAmJiB2YWwudmFsb3IgIT09ICctYW55LScpIHtcblx0XHRcdFx0XHRcdFx0Y29pbmNpZGVuVG9kYXMgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZXh0by1udW1lcmljbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtYmVyQXJyID0gdmFsLnZhbG9yLmxlbmd0aCA9PT0gMyA/ICgnMCcgKyB2YWwudmFsb3IpLnNwbGl0KCcnKSA6IHZhbC52YWxvci5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVZhbGlkYU51bWVyb0VzY3JpdG8oaW5wdXQudmFsdWUudHJpbSgpLCBudW1iZXJBcnIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbmNpZGVuVG9kYXMgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdGlmIChjb2luY2lkZW5Ub2Rhcykge1xuXHRcdFx0XHRmZWVkYmFjayA9IHJlc3B1ZXN0YS5mZWVkYmFja1xuXHRcdFx0XHRlcnJvckZyZWN1ZW50ZSA9IHJlc3B1ZXN0YS5lcnJGcmVjXG5cdFx0XHRcdGlmIChlcnJvckZyZWN1ZW50ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vY29sb3JlYUlucHV0c1RleHRvUG9yQ29pbmNpZGVuY2lhKHJlc3B1ZXN0YXNbaV0pIC8vY29sb3JlYXIgaW5wdXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyQoXCIuY29udGVuaWRvIGlucHV0W25hbWU9J2Fuc3dlciddXCIpLmFkZENsYXNzKCdpbnB1dFRleHRvLWNvcnJlY3RvJylcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFmZWVkYmFjaykge1xuXHRcdFx0ZmVlZGJhY2sgPSBGb3JtYXRlYU51bWVyb3MoZmVlZGJhY2tEZWZlY3RvKVxuXHRcdFx0ZXJyb3JGcmVjdWVudGUgPSBlcnJGcmVjRGVmZWN0b1xuXHRcdFx0Ly92YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250ZW5pZG8gaW5wdXRbbmFtZT0nYW5zd2VyJ11cIik7XG5cdFx0XHQvL2ZvciAodmFyIGlucHV0IG9mIGlucHV0cykge1xuXHRcdFx0Ly9cdC8vY29sb3JlYUlucHV0VGV4dG9Qb3JEZWZlY3RvKGlucHV0KTtcblx0XHRcdC8vfVxuXHRcdH1cblx0XHRyZXR1cm4geyByZXNwdWVzdGEsIGZlZWRiYWNrLCBlcnJvckZyZWN1ZW50ZSB9XG5cdH1cbn1cblxuLypmdW5jdGlvbiBldmFsdWFJbnB1dFRleHRvKGlucHV0RWxlbWVudCkge1xuICAgIHZhciBjb250ZW50ID0gSlNPTi5wYXJzZShiNjRfdG9fdXRmOChpbnB1dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSkpO1xuICAgIHZhciBtYXRjaCA9IGZhbHNlO1xuICAgIHN3aXRjaCAoY29udGVudC50aXBvSW5wdXQpIHtcbiAgICAgICAgY2FzZSAnbnVtZXJvJzpcbiAgICAgICAgICAgIHZhciByZXNwID0gaW5wdXRFbGVtZW50LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBhbnN3ZXIgb2YgY29udGVudC5hbnN3ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AgPT09IGFuc3dlci5yZXNwdWVzdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZCA9IGFuc3dlci5mZWVkYmFjaztcbiAgICAgICAgICAgICAgICAgICAgZXJyRnJlID0gYW5zd2VyLmVyckZyZWM7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RleHRvJzpcbiAgICAgICAgICAgIHZhciByZXNwID0gaW5wdXRFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICBmb3IgKHZhciBhbnN3ZXIgb2YgY29udGVudC5hbnN3ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFN0cmluZyhyZXNwKS50cmltKCkudG9Mb3dlckNhc2UoKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpID09PSBTdHJpbmcoYW5zd2VyLnJlc3B1ZXN0YSkudG9Mb3dlckNhc2UoKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZWQgPSBhbnN3ZXIuZmVlZGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIGVyckZyZSA9IGFuc3dlci5lcnJGcmVjO1xuICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3RleHRvLW51bWVyaWNvJzpcbiAgICAgICAgICAgIHZhciByZXNwID0gaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgZm9yICh2YXIgYW5zd2VyIG9mIGNvbnRlbnQuYW5zd2Vycykge1xuICAgICAgICAgICAgICAgIHZhciBudW1iZXJBcnIgPSBhbnN3ZXIucmVzcHVlc3RhLmxlbmd0aCA9PT0gMyA/ICgnMCcgKyBhbnN3ZXIucmVzcHVlc3RhKS5zcGxpdCgnJykgOiBhbnN3ZXIucmVzcHVlc3RhLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tXb3JkKHJlc3AsIG51bWJlckFycikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZCA9IGFuc3dlci5mZWVkYmFjaztcbiAgICAgICAgICAgICAgICAgICAgZXJyRnJlID0gYW5zd2VyLmVyckZyZWM7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICBmZWVkID0gY29udGVudC5mZWVkYmFja0RlZmVjdG87XG4gICAgICAgIGVyckZyZSA9IGNvbnRlbnQuZXJyRnJlY0RlZmVjdG87XG4gICAgfVxufSovXG5cbmZ1bmN0aW9uIGNvbG9yZWFJbnB1dFRleHRvUG9yRGVmZWN0byhpbnB1dEVsZW1lbnQpIHtcbiAgICB2YXIgY29udGVudCA9IEpTT04ucGFyc2UoaW5wdXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykpO1xuICAgIHZhciBtYXRjaCA9IGZhbHNlO1xuICAgIHN3aXRjaCAoY29udGVudC50aXBvSW5wdXQpIHtcbiAgICAgICAgY2FzZSAnbnVtZXJvJzpcbiAgICAgICAgICAgIHZhciByZXNwID0gaW5wdXRFbGVtZW50LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgICAgICBiNjRfdG9fdXRmOChjb250ZW50LmNvcnJlY3Rhcykuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uKGNvcnJlY3RhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AgPT09IGNvcnJlY3RhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dFRleHRvLWNvcnJlY3RvJyk7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RleHRvJzpcbiAgICAgICAgICAgIHZhciByZXNwID0gaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgYjY0X3RvX3V0ZjgoY29udGVudC5jb3JyZWN0YXMpLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbihjb3JyZWN0YSkge1xuICAgICAgICAgICAgICAgIHZhciBudW1iZXJBcnIgPSBjb3JyZWN0YS5sZW5ndGggPT09IDMgPyAoJzAnICsgYW5zd2VyLnJlc3B1ZXN0YSkuc3BsaXQoJycpIDogYW5zd2VyLnJlc3B1ZXN0YS5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrV29yZChyZXNwLCBudW1iZXJBcnIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dFRleHRvLWNvcnJlY3RvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0VGV4dG8taW5jb3JyZWN0bycpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXZhbHVhSW5wdXRzRWplcmNpY2lvKCkge1xuICAgIGxldCB7IHJlc3B1ZXN0YXMsIGVyckZyZWNEZWZlY3RvLCBmZWVkYmFja0RlZmVjdG8gfSA9IF9WQUxJREFDSU9ORVNfSU5QVVRfVEFCTEFfO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcHVlc3Rhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeyB2YWxpZGFjaW9uZXMsIGVyckZyZWMsIGZlZWRiYWNrIH0gPSByZXNwdWVzdGFzW2ldLCBjb2luY2lkZW5Ub2RhcyA9IHRydWU7XG4gICAgICAgIHZhbGlkYWNpb25lcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbC5pbnB1dElkKTtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gSlNPTi5wYXJzZShpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpKVxuICAgICAgICAgICAgc3dpdGNoIChjb250ZW50LnRpcG9JbnB1dCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ251bWVybyc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpICE9PSB2YWwudmFsb3IgJiYgdmFsLnZhbG9yICE9PSAnLWFueS0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2luY2lkZW5Ub2RhcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRvJzpcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlckFyciA9IGNvcnJlY3RhLmxlbmd0aCA9PT0gMyA/ICgnMCcgKyB2YWwudmFsb3IpLnNwbGl0KCcnKSA6IHZhbC52YWxvci5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hlY2tXb3JkKGlucHV0LnZhbHVlLCBudW1iZXJBcnIpICYmIHZhbC52YWxvciAhPT0gJy1hbnktJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29pbmNpZGVuVG9kYXMgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjb2luY2lkZW5Ub2Rhcykge1xuICAgICAgICAgICAgZmVlZCA9IGZlZWRiYWNrO1xuICAgICAgICAgICAgZXJyRnJlID0gZXJyRnJlYztcbiAgICAgICAgICAgIGlmIChlcnJGcmUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb2xvcmVhSW5wdXRzVGV4dG9Qb3JDb2luY2lkZW5jaWEocmVzcHVlc3Rhc1tpXSkgLy9jb2xvcmVhciBpbnB1dFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiLmNvbnRlbmlkbyBpbnB1dFtuYW1lPSdhbnN3ZXInXVwiKS5hZGRDbGFzcygnaW5wdXRUZXh0by1jb3JyZWN0bycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXJyRnJlID09PSAnJykge1xuICAgICAgICBmZWVkID0gcmVnZXhGdW5jdGlvbnMoZmVlZGJhY2tEZWZlY3RvKTtcbiAgICAgICAgZXJyRnJlID0gZXJyRnJlY0RlZmVjdG87XG4gICAgICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRlbmlkbyBpbnB1dFtuYW1lPSdhbnN3ZXInXVwiKTtcbiAgICAgICAgZm9yICh2YXIgaW5wdXQgb2YgaW5wdXRzKSB7XG4gICAgICAgICAgICBjb2xvcmVhSW5wdXRUZXh0b1BvckRlZmVjdG8oaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb2xvcmVhSW5wdXRzVGV4dG9Qb3JDb2luY2lkZW5jaWEoY29pbmNpZGVuY2lhKSB7IC8vIGNvbG9yZWEgaW5wdXRzIGRlIGFjdWVyZG8gYSBcbiAgICBsZXQgeyB2YWxpZGFjaW9uZXMsIGVyckZyZWMsIGZlZWRiYWNrIH0gPSBjb2luY2lkZW5jaWFcbiAgICB2YWxpZGFjaW9uZXMuZm9yRWFjaChmdW5jdGlvbih2YWwsIGluZGV4KSB7XG4gICAgICAgIHZhciB7IGNvbG9yLCBpbnB1dElkIH0gPSB2YWxcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZClcbiAgICAgICAgaWYgKGNvbG9yID09PSAnb2snKSB7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dFRleHRvLWNvcnJlY3RvJylcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvciA9PT0gJ2JhZCcpIHtcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0VGV4dG8taW5jb3JyZWN0bycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUucmVwbGFjZSgvXFxzL2csICcnKSA9PSBjb2xvci5jb3JyZWN0YSkge1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0VGV4dG8tY29ycmVjdG8nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dFRleHRvLWluY29ycmVjdG8nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn0iLCJpbXBvcnQgUmVlbXBsYXphVmFyaWFibGVzIGZyb20gJy4uL3V0aWxzL1JlZW1wbGF6YVZhcmlhYmxlcydcbmltcG9ydCBSZWVtcGxhemFGdW5jaW9uZXMgZnJvbSAnLi4vdXRpbHMvUmVlbXBsYXphRnVuY2lvbmVzJ1xuXG5leHBvcnQgY29uc3QgaWRFamVyY2ljaW8gPSBkb2N1bWVudC5ib2R5LmRhdGFzZXQuaWRcblxuZXhwb3J0IGNvbnN0IHZlcnNpb24gPSBKU09OLnBhcnNlKFxuXHRkb2N1bWVudC5ib2R5LmRhdGFzZXQudmVyc2lvbi5yZXBsYWNlKC8nL2csICdcIicpXG4pXG5cbmV4cG9ydCBjb25zdCB2YWxpZGFjaW9uZXMgPSBKU09OLnBhcnNlKFxuXHRSZWVtcGxhemFGdW5jaW9uZXMoUmVlbXBsYXphVmFyaWFibGVzKEJ1ZmZlcihkb2N1bWVudC5ib2R5LmRhdGFzZXQueCwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGY4JyksIHZlcnNpb24udmFycywgZmFsc2UpKVxuKVxuXG5leHBvcnQgY29uc3QgdGlwbyA9IGRvY3VtZW50LmJvZHkuZGF0YXNldC50aXBvZWplcmNpY2lvXG5cbmV4cG9ydCBsZXQgbnVtZXJvSW50ZW50byA9IDFcblxuZXhwb3J0IGNvbnN0IHNpZ3VpZW50ZUludGVudG8gPSAoKSA9PiB7XG4gIG51bWVyb0ludGVudG8rK1xufVxuXG5leHBvcnQgbGV0IHNyY0ltZ1Jlc3B1ZXN0YUNvcnJlY3RhLCBzcmNJbWdSZXNwdWVzdGFJbmNvcnJlY3RhLCBzcmNJbWdHbG9zYVxuXG5zd2l0Y2goaWRFamVyY2ljaW8uc3Vic3RyKDIsMikpIHtcblx0Y2FzZSAnMDAnOlxuXHRcdHNyY0ltZ1Jlc3B1ZXN0YUNvcnJlY3RhID0gW1xuXHRcdFx0Jy4uLy4uLy4uLy4uL2ltYWdlbmVzX2Zyb250L3BhdG9zL0NvcnJlY3RfZmVlZGJhY2tfUEFUT19uaW5vLnN2ZycsXG5cdFx0XHQnLi4vLi4vLi4vLi4vaW1hZ2VuZXNfZnJvbnQvcGF0b3MvQ29ycmVjdF9mZWVkYmFja19QQVRPX25pbmEuc3ZnJ1xuXHRcdF1cblx0XHRzcmNJbWdSZXNwdWVzdGFJbmNvcnJlY3RhID0gW1xuXHRcdFx0Jy4uLy4uLy4uLy4uL2ltYWdlbmVzX2Zyb250L3BhdG9zL01pc3Rha2VfZmVlZGJhY2tfUEFUT19uaW5vLnN2ZycsXG5cdFx0XHQnLi4vLi4vLi4vLi4vaW1hZ2VuZXNfZnJvbnQvcGF0b3MvTWlzdGFrZV9mZWVkYmFja19QQVRPX25pbmEuc3ZnJ1xuXHRcdF1cblx0XHRzcmNJbWdHbG9zYSA9IFtcblx0XHRcdCcuLi8uLi8uLi8uLi9pbWFnZW5lc19mcm9udC9wYXRvcy9QYXRvX25pbmFfZ2xvc2Euc3ZnJyxcblx0XHRcdCcuLi8uLi8uLi8uLi9pbWFnZW5lc19mcm9udC9wYXRvcy9QYXRvX25pbm9fZ2xvc2Euc3ZnJ1xuXHRcdF1cblx0XHRicmVha1xuXHRjYXNlICcwMSc6XG5cdFx0c3JjSW1nUmVzcHVlc3RhQ29ycmVjdGEgPSBbXG5cdFx0XHQnLi4vLi4vLi4vLi4vaW1hZ2VuZXNfZnJvbnQvcGF0b3MvQ29ycmVjdF9mZWVkYmFja19QQVRPX25pbm8uc3ZnJyxcblx0XHRcdCcuLi8uLi8uLi8uLi9pbWFnZW5lc19mcm9udC9wYXRvcy9Db3JyZWN0X2ZlZWRiYWNrX1BBVE9fbmluYS5zdmcnXG5cdFx0XVxuXHRcdHNyY0ltZ1Jlc3B1ZXN0YUluY29ycmVjdGEgPSBbXG5cdFx0XHQnLi4vLi4vLi4vLi4vaW1hZ2VuZXNfZnJvbnQvcGF0b3MvTWlzdGFrZV9mZWVkYmFja19QQVRPX25pbm8uc3ZnJyxcblx0XHRcdCcuLi8uLi8uLi8uLi9pbWFnZW5lc19mcm9udC9wYXRvcy9NaXN0YWtlX2ZlZWRiYWNrX1BBVE9fbmluYS5zdmcnXG5cdFx0XVxuXHRcdHNyY0ltZ0dsb3NhID0gW1xuXHRcdFx0Jy4uLy4uLy4uLy4uL2ltYWdlbmVzX2Zyb250L3BhdG9zL1BhdG9fbmluYV9nbG9zYS5zdmcnLFxuXHRcdFx0Jy4uLy4uLy4uLy4uL2ltYWdlbmVzX2Zyb250L3BhdG9zL1BhdG9fbmlub19nbG9zYS5zdmcnXG5cdFx0XVxuXHRcdGJyZWFrXG5cdGNhc2UgJzAyJzpcblx0XHRzcmNJbWdSZXNwdWVzdGFDb3JyZWN0YSA9IFtcblx0XHRcdCcuLi8uLi8uLi8uLi9pbWFnZW5lc19mcm9udC9wdW1hcy9Db3JyZWN0X2ZlZWRiYWNrX1BVTUFfbmluby5zdmcnLFxuXHRcdFx0Jy4uLy4uLy4uLy4uL2ltYWdlbmVzX2Zyb250L3B1bWFzL0NvcnJlY3RfZmVlZGJhY2tfUFVNQV9uaW5hLnN2Zydcblx0XHRdXG5cdFx0c3JjSW1nUmVzcHVlc3RhSW5jb3JyZWN0YSA9IFtcblx0XHRcdCcuLi8uLi8uLi8uLi9pbWFnZW5lc19mcm9udC9wdW1hcy9NaXN0YWtlX2ZlZWRiYWNrX1BVTUFfbmluby5zdmcnLFxuXHRcdFx0Jy4uLy4uLy4uLy4uL2ltYWdlbmVzX2Zyb250L3B1bWFzL01pc3Rha2VfZmVlZGJhY2tfUFVNQV9uaW5hLnN2Zydcblx0XHRdXG5cdFx0c3JjSW1nR2xvc2EgPSBbXG5cdFx0XHQnLi4vLi4vLi4vLi4vaW1hZ2VuZXNfZnJvbnQvcHVtYXMvUHVtYV9uaW5hX2dsb3NhLnN2ZycsXG5cdFx0XHQnLi4vLi4vLi4vLi4vaW1hZ2VuZXNfZnJvbnQvcHVtYXMvUHVtYV9uaW5vX2dsb3NhLnN2Zydcblx0XHRdXG5cdFx0YnJlYWtcblx0Y2FzZSAnMDMnOlxuXHRcdGJyZWFrXG5cdGNhc2UgJzA0Jzpcblx0XHRicmVha1xuXHRjYXNlICcwNSc6XG5cdFx0YnJlYWtcbn1cblxuZXhwb3J0IGxldCB0bXBQcm9ncmVzbywgdG1wVG90YWxcbmxldCBoaWRkZW5CYXJyYURhdG9zID0gd2luZG93LnBhcmVudC5wYXJlbnQuYmFycmFQcm9ncmVzb1xuaWYoaGlkZGVuQmFycmFEYXRvcykge1xuXHRsZXQgZGF0b3NCYXJyYURlUHJvZ3Jlc28gPSBKU09OLnBhcnNlKGhpZGRlbkJhcnJhRGF0b3MudmFsdWUpXG5cdHRtcFByb2dyZXNvID0gZGF0b3NCYXJyYURlUHJvZ3Jlc28udG1wUHJvZ3Jlc28gPyBcblx0XHRkYXRvc0JhcnJhRGVQcm9ncmVzby50bXBQcm9ncmVzbyA6IFtdXG5cdHRtcFRvdGFsID0gZGF0b3NCYXJyYURlUHJvZ3Jlc28udG1wVG90YWwgP1xuXHRcdE51bWJlcihkYXRvc0JhcnJhRGVQcm9ncmVzby50bXBUb3RhbCkgOiAwXG59IGVsc2Uge1xuXHR0bXBQcm9ncmVzbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0bXBQcm9ncmVzbycpID8gXG5cdFx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG1wUHJvZ3Jlc28nKSkgOiBbXVxuXHR0bXBUb3RhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0bXBUb3RhbCcpID9cblx0XHROdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RtcFRvdGFsJykpIDogMFxufVxuIiwiaW1wb3J0IHsgYmFycmFEZVByb2dyZXNvIH0gZnJvbSAnLi9mdW5jaW9uZXMvQmFycmFQcm9ncmVzbydcbmltcG9ydCB7IGhhbmRsZVJlc3B1ZXN0YSB9IGZyb20gJy4vZnVuY2lvbmVzL0hhbmRsZVJlc3B1ZXN0YSdcblxuYmFycmFEZVByb2dyZXNvKClcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blJlc3BvbmRlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUmVzcHVlc3RhKSIsImV4cG9ydCBkZWZhdWx0ICh0ZXh0bywgZXNwYWNpbykgPT4ge1xuICAgIHJldHVybiB0ZXh0by5yZXBsYWNlKC9cXGR7MSx9KFxcLlxcZHsxLH0pPy9nLCBmdW5jdGlvbiAoY29pbmNpZGVuY2lhKSB7IC8vY29pbmNpZGVuY2lhID0+IDIwMDBcbiAgICAgICAgbGV0IGVudGVybyA9IGNvaW5jaWRlbmNpYS5zcGxpdCgnLicpWzBdXG4gICAgICAgIGxldCBkZWNpbWFsID0gY29pbmNpZGVuY2lhLnNwbGl0KCcuJylbMV1cbiAgICAgICAgbGV0IGVudGVyb0VzcGFjaWFkbyA9IGVudGVyby5sZW5ndGggPj0gNCA/ICcnIDogZW50ZXJvXG4gICAgICAgIGlmIChlbnRlcm8ubGVuZ3RoID49IDQpIHtcbiAgICAgICAgICAgIGxldCBlbnRlcm9SZXZlcnNlID0gZW50ZXJvLnNwbGl0KCcnKS5yZXZlcnNlKClcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDFcbiAgICAgICAgICAgIGVudGVyb1JldmVyc2UuZm9yRWFjaChmdW5jdGlvbiAobnVtZXJvKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVudGVyb0VzcGFjaWFkbyA9IGVzcGFjaW8gKyBudW1lcm8gKyBlbnRlcm9Fc3BhY2lhZG9cbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50ZXJvRXNwYWNpYWRvID0gbnVtZXJvICsgZW50ZXJvRXNwYWNpYWRvXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7ZW50ZXJvRXNwYWNpYWRvfSR7ZGVjaW1hbCA/ICcsJyA6ICcnfSR7ZGVjaW1hbCA/IGRlY2ltYWwgOiAnJ31gXG4gICAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCB0ZXh0ID0+IHtcbiAgICB2YXIgcmVzdWx0ID0gdGV4dC5yZXBsYWNlKC9cXC9cXFsuKj9cXC9cXF0vZywgZnVuY3Rpb24gKGNvaW5jaWRlbmNpYSkgeyAvL2NvaW5jaWRlbmNpYSA9PiAnL1tmdW5jaW9uKCkvXSdcbiAgICAgIHZhciBmaW5hbCA9IGNvaW5jaWRlbmNpYS5sZW5ndGggLSA0O1xuICAgICAgdmFyIGZ1bmNpb24gPSBjb2luY2lkZW5jaWEuc3Vic3RyKDIsIGZpbmFsKS5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJmx0Oy8sICc8Jyk7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZXZhbChmdW5jaW9uKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLypjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGNvbnNvbGUubG9nKGZ1bmNpb24pKi9cbiAgICAgICAgcmV0dXJuIGNvaW5jaWRlbmNpYTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0iLCJleHBvcnQgZGVmYXVsdCAodGV4dG8sIHZhcmlhYmxlcywgaXNUdXRvcmlhbCkgPT4ge1xuICAgIHZhciByZXN1bHQgPSB0ZXh0by50b1N0cmluZygpLnJlcGxhY2UoL1xcJFthLXpdL2csIGZ1bmN0aW9uIChjb2luY2lkZW5jaWEpIHsgLy9jb2luY2lkZW5jaWEgPT4gJyRhJ1xuICAgICAgICBmb3IgKHZhciBpbmRleFZhciA9IDA7IGluZGV4VmFyIDwgdmFyaWFibGVzLmxlbmd0aDsgaW5kZXhWYXIrKykge1xuICAgICAgICAgICAgaWYgKHZhcmlhYmxlc1tpbmRleFZhcl0udmFyID09IGNvaW5jaWRlbmNpYVsxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1R1dG9yaWFsID8gdmFyaWFibGVzW2luZGV4VmFyXS52dCA6IHZhcmlhYmxlc1tpbmRleFZhcl0udmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iLCJsZXQgcGFsYWJyYXMgPSB7XG4gICAgXCIwXCI6IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSwgLy91bmlkYWQsIHByZWZpam8gdW5pZGFkLCBkZWNlbmEsIGNlbnRlbmFcbiAgICBcIjFcIjogW1widW5vXCIsIFwib25cIiwgXCJkaWV6XCIsIFwiY2llblwiXSxcbiAgICBcIjJcIjogW1wiZG9zXCIsIFwiZG9cIiwgXCJ2ZWludGVcIiwgXCJkb3NjaWVudG9zXCJdLFxuICAgIFwiM1wiOiBbXCJ0cmVzXCIsIFwidHJlXCIsIFwidHJlaW50YVwiLCBcInRyZXNjaWVudG9zXCJdLFxuICAgIFwiNFwiOiBbXCJjdWF0cm9cIiwgXCJjYXRvclwiLCBcImN1YXJlbnRhXCIsIFwiY3VhdHJvY2llbnRvc1wiXSxcbiAgICBcIjVcIjogW1wiY2luY29cIiwgXCJxdWluXCIsIFwiY2luY3VlbnRhXCIsIFwicXVpbmllbnRvc1wiXSxcbiAgICBcIjZcIjogW1wic2Vpc1wiLCBcIlwiLCBcInNlc2VudGFcIiwgXCJzZWlzY2llbnRvc1wiXSxcbiAgICBcIjdcIjogW1wic2lldGVcIiwgXCJcIiwgXCJzZXRlbnRhXCIsIFwic2V0ZWNpZW50b3NcIl0sXG4gICAgXCI4XCI6IFtcIm9jaG9cIiwgXCJcIiwgXCJvY2hlbnRhXCIsIFwib2Nob2NpZW50b3NcIl0sXG4gICAgXCI5XCI6IFtcIm51ZXZlXCIsIFwiXCIsIFwibm92ZW50YVwiLCBcIm5vdmVjaWVudG9zXCJdXG59O1xubGV0IHJlZ3VsYXJFeHByZXNzaW9uID0ge1xuICAgIFwiMFwiOiBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgXCIxXCI6IFtcInVub1wiLCBcIm9uXCIsIFwiZGllW3N6XVwiLCBcIltjc3pdaWVuXCJdLFxuICAgIFwiMlwiOiBbXCJkb1tzel1cIiwgXCJkb1wiLCBcIlt2Yl1laW50ZVwiLCBcImRvW2Nzel17MSwyfWllbnRvW3N6XVwiXSxcbiAgICBcIjNcIjogW1widHJlW3N6XVwiLCBcInRyZVwiLCBcInRyZWludGFcIiwgXCJ0cmVbc3pjXXsxLDJ9aWVudG9bc3pdXCJdLFxuICAgIFwiNFwiOiBbXCJbY2txXXVhdHJvXCIsIFwiW2NrcV1hdG9yXCIsIFwiW2NrcV11YXJlbnRhXCIsIFwiW2NrcV11YXRyb1tzemNdezEsMn1pZW50b1tzel1cIl0sXG4gICAgXCI1XCI6IFtcIltjc3pdaW5bY2tdb1wiLCBcIihxdWlufGtpbilcIiwgXCJbY3N6XWluW2Nxa111ZW50YVwiLCBcIihxdWlufGtpbilpZW50b1tzel1cIl0sXG4gICAgXCI2XCI6IFtcIltzY3pdZWlbc3pdXCIsIFwiXCIsIFwiW3Njel1lW3Njel1lbnRhXCIsIFwiW3Njel1laVtzY3pdezEsMn1pZW50b1tzel1cIl0sXG4gICAgXCI3XCI6IFtcIltzY3pdaWV0ZVwiLCBcIlwiLCBcIltzY3pdZXRlbnRhXCIsIFwiW3Njel1ldGVbc3pjXXsxLDJ9aWVudG9bc3pdXCJdLFxuICAgIFwiOFwiOiBbXCJvW3NjXWhvXCIsIFwiXCIsIFwib1tzY11oZW50YVwiLCBcIm9bc2NdaG9bc2N6XXsxLDJ9aWVudG9bc3pdXCJdLFxuICAgIFwiOVwiOiBbXCJudWVbdmJdZVwiLCBcIlwiLCBcIm5vW3ZiXWVudGFcIiwgXCJub1t2Yl1lW3Njel17MSwyfWllbnRvW3N6XVwiXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKF93b3JkLCBudW1iZXJBcnIpID0+IHtcbiAgICBsZXQgdW1pbCA9IG51bWJlckFyclswXVxuICAgIGxldCBjZW50ZW5hID0gbnVtYmVyQXJyWzFdXG4gICAgbGV0IGRlY2VuYSA9IG51bWJlckFyclsyXVxuICAgIGxldCB1bmlkYWQgPSBudW1iZXJBcnJbM11cbiAgICBsZXQgd29yZCA9IF93b3JkLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIGxldCByZ3ggPSAnJ1xuICAgIGlmICh1bmlkYWQgPiAwKSB7XG4gICAgICAgIC8vdW5vLCBkb3MsIHRyZXMuLi5cbiAgICAgICAgaWYgKGRlY2VuYSA9PSAwKSB7XG4gICAgICAgICAgICByZ3ggPSByZWd1bGFyRXhwcmVzc2lvblt1bmlkYWRdWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKGRlY2VuYSA9PSAxKSB7XG4gICAgICAgICAgICAvL29uY2UgZG9jZSwgdHJlY2UsIGNhdG9yY2UsIHF1aW5jZVxuICAgICAgICAgICAgaWYgKHVuaWRhZCA+IDAgJiYgdW5pZGFkIDwgNikge1xuICAgICAgICAgICAgICAgIHJneCA9IHJlZ3VsYXJFeHByZXNzaW9uW3VuaWRhZF1bMV0gKyBcIltzY3pdZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkaWVjaXNlaXMsIGRpZWNpc2lldGUsIGRpZWNpb2NobywgZGllY2ludWV2ZVxuICAgICAgICAgICAgZWxzZSBpZiAodW5pZGFkID49IDYpIHtcbiAgICAgICAgICAgICAgICByZ3ggPSBcImRpZVtjc3pdaVwiICsgcmVndWxhckV4cHJlc3Npb25bdW5pZGFkXVswXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vdmVpbml0dW5vLCB2ZWludGlkb3MsIHZlaW50aXRyZXMuLi4uXG4gICAgICAgIGVsc2UgaWYgKGRlY2VuYSA9PSAyKSB7XG4gICAgICAgICAgICByZ3ggPSBcIlt2Yl1laW50aVwiICsgcmVndWxhckV4cHJlc3Npb25bdW5pZGFkXVswXTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0cmVpbnRhIHkgdW5vLCBjdWFyZW50YSB5IGRvcywgY2luY3VlbnRhIHkgdHJlcy4uLlxuICAgICAgICBlbHNlIGlmIChkZWNlbmEgPiAyKSB7XG4gICAgICAgICAgICByZ3ggPSByZWd1bGFyRXhwcmVzc2lvbltkZWNlbmFdWzJdICsgXCIgeSBcIiArIHJlZ3VsYXJFeHByZXNzaW9uW3VuaWRhZF1bMF1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodW5pZGFkID09IDApIHtcbiAgICAgICAgLy92ZWludGUsIHRyZWludGEsIGN1YXJlbnRhLi4uXG4gICAgICAgIGlmIChkZWNlbmEgPiAwKSB7XG4gICAgICAgICAgICByZ3ggPSByZWd1bGFyRXhwcmVzc2lvbltkZWNlbmFdWzJdXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9jaWVuLCBkb3NjaWVudG9zLCB0cmVzY2llbnRvcy4uLlxuICAgIGlmIChjZW50ZW5hID4gMCkge1xuICAgICAgICBpZiAoY2VudGVuYSA9PSAxKSB7XG4gICAgICAgICAgICBpZiAoZGVjZW5hID09IDAgJiYgdW5pZGFkID09IDApIHJneCA9IHJlZ3VsYXJFeHByZXNzaW9uW2NlbnRlbmFdWzNdICsgXCIgXCIgKyByZ3g7XG4gICAgICAgICAgICBpZiAoZGVjZW5hICE9IDAgfHwgdW5pZGFkICE9IDApIHJneCA9IFwiW3N6Y11pZW50byBcIiArIHJneFxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRlbmEgPiAxKSB7XG4gICAgICAgICAgICByZ3ggPSByZWd1bGFyRXhwcmVzc2lvbltjZW50ZW5hXVszXSArIFwiIFwiICsgcmd4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vbWlsLCBkb3MgbWlsLCB0cmVzIG1pbFxuICAgIGlmICh1bWlsID09IDEpIHJneCA9IFwibWlsIFwiICsgcmd4O1xuICAgIGVsc2UgaWYgKHVtaWwgPiAxKSByZ3ggPSByZWd1bGFyRXhwcmVzc2lvblt1bWlsXVswXSArIFwiIG1pbCBcIiArIHJneDtcblxuICAgIHJneCA9IHJneC50cmltKCk7XG4gICAgcmd4ID0gcmd4LnJlcGxhY2UoL14vLCAnXicpXG4gICAgcmd4ID0gcmd4ICsgJyQnXG4gICAgbGV0IG5ld1JneCA9IG5ldyBSZWdFeHAocmd4KTtcbiAgICByZXR1cm4gbmV3Umd4LnRlc3Qod29yZClcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9