/*! For license information please see bundle.js.LICENSE.txt */
(() => {
   "use strict";
console.log("hello there");
   const t = 100,
      e = 301,
      n = 302,
      i = 306,
      r = 1e3,
      a = 1001,
      s = 1002,
      o = 1003,
      l = 1006,
      c = 1008,
      u = 1009,
      h = 1014,
      d = 1015,
      p = 1016,
      f = 1020,
      m = 1023,
      g = 1026,
      _ = 1027,
      v = 33776,
      x = 33777,
      y = 33778,
      b = 33779,
      M = 2300,
      S = 2301,
      w = 2302,
      T = 3e3,
      E = 3001,
      A = "srgb",
      C = "srgb-linear",
      L = 7680,
      P = "300 es",
      R = 1035;
   class D {
      addEventListener(t, e) {
         void 0 === this._listeners && (this._listeners = {});
         const n = this._listeners;
         void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
      }
      hasEventListener(t, e) {
         if (void 0 === this._listeners) return !1;
         const n = this._listeners;
         return void 0 !== n[t] && -1 !== n[t].indexOf(e)
      }
      removeEventListener(t, e) {
         if (void 0 === this._listeners) return;
         const n = this._listeners[t];
         if (void 0 !== n) {
            const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
         }
      }
      dispatchEvent(t) {
         if (void 0 === this._listeners) return;
         const e = this._listeners[t.type];
         if (void 0 !== e) {
            t.target = this;
            const n = e.slice(0);
            for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null
         }
      }
   }
   const O = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
      I = Math.PI / 180,
      z = 180 / Math.PI;

   function N() {
      const t = 4294967295 * Math.random() | 0,
         e = 4294967295 * Math.random() | 0,
         n = 4294967295 * Math.random() | 0,
         i = 4294967295 * Math.random() | 0;
      return (O[255 & t] + O[t >> 8 & 255] + O[t >> 16 & 255] + O[t >> 24 & 255] + "-" + O[255 & e] + O[e >> 8 & 255] + "-" + O[e >> 16 & 15 | 64] + O[e >> 24 & 255] + "-" + O[63 & n | 128] + O[n >> 8 & 255] + "-" + O[n >> 16 & 255] + O[n >> 24 & 255] + O[255 & i] + O[i >> 8 & 255] + O[i >> 16 & 255] + O[i >> 24 & 255]).toLowerCase()
   }

   function U(t, e, n) {
      return Math.max(e, Math.min(n, t))
   }

   function F(t, e, n) {
      return (1 - n) * t + n * e
   }

   function k(t) {
      return 0 == (t & t - 1) && 0 !== t
   }

   function H(t) {
      return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
   }

   function B(t, e) {
      switch (e.constructor) {
         case Float32Array:
            return t;
         case Uint16Array:
            return t / 65535;
         case Uint8Array:
            return t / 255;
         case Int16Array:
            return Math.max(t / 32767, -1);
         case Int8Array:
            return Math.max(t / 127, -1);
         default:
            throw new Error("Invalid component type.")
      }
   }

   function V(t, e) {
      switch (e.constructor) {
         case Float32Array:
            return t;
         case Uint16Array:
            return Math.round(65535 * t);
         case Uint8Array:
            return Math.round(255 * t);
         case Int16Array:
            return Math.round(32767 * t);
         case Int8Array:
            return Math.round(127 * t);
         default:
            throw new Error("Invalid component type.")
      }
   }
   class G {
      constructor(t = 0, e = 0) {
         G.prototype.isVector2 = !0, this.x = t, this.y = e
      }
      get width() {
         return this.x
      }
      set width(t) {
         this.x = t
      }
      get height() {
         return this.y
      }
      set height(t) {
         this.y = t
      }
      set(t, e) {
         return this.x = t, this.y = e, this
      }
      setScalar(t) {
         return this.x = t, this.y = t, this
      }
      setX(t) {
         return this.x = t, this
      }
      setY(t) {
         return this.y = t, this
      }
      setComponent(t, e) {
         switch (t) {
            case 0:
               this.x = e;
               break;
            case 1:
               this.y = e;
               break;
            default:
               throw new Error("index is out of range: " + t)
         }
         return this
      }
      getComponent(t) {
         switch (t) {
            case 0:
               return this.x;
            case 1:
               return this.y;
            default:
               throw new Error("index is out of range: " + t)
         }
      }
      clone() {
         return new this.constructor(this.x, this.y)
      }
      copy(t) {
         return this.x = t.x, this.y = t.y, this
      }
      add(t) {
         return this.x += t.x, this.y += t.y, this
      }
      addScalar(t) {
         return this.x += t, this.y += t, this
      }
      addVectors(t, e) {
         return this.x = t.x + e.x, this.y = t.y + e.y, this
      }
      addScaledVector(t, e) {
         return this.x += t.x * e, this.y += t.y * e, this
      }
      sub(t) {
         return this.x -= t.x, this.y -= t.y, this
      }
      subScalar(t) {
         return this.x -= t, this.y -= t, this
      }
      subVectors(t, e) {
         return this.x = t.x - e.x, this.y = t.y - e.y, this
      }
      multiply(t) {
         return this.x *= t.x, this.y *= t.y, this
      }
      multiplyScalar(t) {
         return this.x *= t, this.y *= t, this
      }
      divide(t) {
         return this.x /= t.x, this.y /= t.y, this
      }
      divideScalar(t) {
         return this.multiplyScalar(1 / t)
      }
      applyMatrix3(t) {
         const e = this.x,
            n = this.y,
            i = t.elements;
         return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
      }
      min(t) {
         return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
      }
      max(t) {
         return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
      }
      clamp(t, e) {
         return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
      }
      clampScalar(t, e) {
         return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
      }
      clampLength(t, e) {
         const n = this.length();
         return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
      }
      floor() {
         return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
      }
      ceil() {
         return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
      }
      round() {
         return this.x = Math.round(this.x), this.y = Math.round(this.y), this
      }
      roundToZero() {
         return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
      }
      negate() {
         return this.x = -this.x, this.y = -this.y, this
      }
      dot(t) {
         return this.x * t.x + this.y * t.y
      }
      cross(t) {
         return this.x * t.y - this.y * t.x
      }
      lengthSq() {
         return this.x * this.x + this.y * this.y
      }
      length() {
         return Math.sqrt(this.x * this.x + this.y * this.y)
      }
      manhattanLength() {
         return Math.abs(this.x) + Math.abs(this.y)
      }
      normalize() {
         return this.divideScalar(this.length() || 1)
      }
      angle() {
         return Math.atan2(-this.y, -this.x) + Math.PI
      }
      distanceTo(t) {
         return Math.sqrt(this.distanceToSquared(t))
      }
      distanceToSquared(t) {
         const e = this.x - t.x,
            n = this.y - t.y;
         return e * e + n * n
      }
      manhattanDistanceTo(t) {
         return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
      }
      setLength(t) {
         return this.normalize().multiplyScalar(t)
      }
      lerp(t, e) {
         return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
      }
      lerpVectors(t, e, n) {
         return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this
      }
      equals(t) {
         return t.x === this.x && t.y === this.y
      }
      fromArray(t, e = 0) {
         return this.x = t[e], this.y = t[e + 1], this
      }
      toArray(t = [], e = 0) {
         return t[e] = this.x, t[e + 1] = this.y, t
      }
      fromBufferAttribute(t, e) {
         return this.x = t.getX(e), this.y = t.getY(e), this
      }
      rotateAround(t, e) {
         const n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            a = this.y - t.y;
         return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this
      }
      random() {
         return this.x = Math.random(), this.y = Math.random(), this
      }*[Symbol.iterator]() {
         yield this.x, yield this.y
      }
   }
   class W {
      constructor() {
         W.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
      }
      set(t, e, n, i, r, a, s, o, l) {
         const c = this.elements;
         return c[0] = t, c[1] = i, c[2] = s, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = a, c[8] = l, this
      }
      identity() {
         return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
      }
      copy(t) {
         const e = this.elements,
            n = t.elements;
         return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
      }
      extractBasis(t, e, n) {
         return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
      }
      setFromMatrix4(t) {
         const e = t.elements;
         return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
      }
      multiply(t) {
         return this.multiplyMatrices(this, t)
      }
      premultiply(t) {
         return this.multiplyMatrices(t, this)
      }
      multiplyMatrices(t, e) {
         const n = t.elements,
            i = e.elements,
            r = this.elements,
            a = n[0],
            s = n[3],
            o = n[6],
            l = n[1],
            c = n[4],
            u = n[7],
            h = n[2],
            d = n[5],
            p = n[8],
            f = i[0],
            m = i[3],
            g = i[6],
            _ = i[1],
            v = i[4],
            x = i[7],
            y = i[2],
            b = i[5],
            M = i[8];
         return r[0] = a * f + s * _ + o * y, r[3] = a * m + s * v + o * b, r[6] = a * g + s * x + o * M, r[1] = l * f + c * _ + u * y, r[4] = l * m + c * v + u * b, r[7] = l * g + c * x + u * M, r[2] = h * f + d * _ + p * y, r[5] = h * m + d * v + p * b, r[8] = h * g + d * x + p * M, this
      }
      multiplyScalar(t) {
         const e = this.elements;
         return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
      }
      determinant() {
         const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8];
         return e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
      }
      invert() {
         const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            u = c * a - s * l,
            h = s * o - c * r,
            d = l * r - a * o,
            p = e * u + n * h + i * d;
         if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
         const f = 1 / p;
         return t[0] = u * f, t[1] = (i * l - c * n) * f, t[2] = (s * n - i * a) * f, t[3] = h * f, t[4] = (c * e - i * o) * f, t[5] = (i * r - s * e) * f, t[6] = d * f, t[7] = (n * o - l * e) * f, t[8] = (a * e - n * r) * f, this
      }
      transpose() {
         let t;
         const e = this.elements;
         return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
      }
      getNormalMatrix(t) {
         return this.setFromMatrix4(t).invert().transpose()
      }
      transposeIntoArray(t) {
         const e = this.elements;
         return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
      }
      setUvTransform(t, e, n, i, r, a, s) {
         const o = Math.cos(r),
            l = Math.sin(r);
         return this.set(n * o, n * l, -n * (o * a + l * s) + a + t, -i * l, i * o, -i * (-l * a + o * s) + s + e, 0, 0, 1), this
      }
      scale(t, e) {
         const n = this.elements;
         return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
      }
      rotate(t) {
         const e = Math.cos(t),
            n = Math.sin(t),
            i = this.elements,
            r = i[0],
            a = i[3],
            s = i[6],
            o = i[1],
            l = i[4],
            c = i[7];
         return i[0] = e * r + n * o, i[3] = e * a + n * l, i[6] = e * s + n * c, i[1] = -n * r + e * o, i[4] = -n * a + e * l, i[7] = -n * s + e * c, this
      }
      translate(t, e) {
         const n = this.elements;
         return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
      }
      equals(t) {
         const e = this.elements,
            n = t.elements;
         for (let t = 0; t < 9; t++)
            if (e[t] !== n[t]) return !1;
         return !0
      }
      fromArray(t, e = 0) {
         for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
         return this
      }
      toArray(t = [], e = 0) {
         const n = this.elements;
         return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
      }
      clone() {
         return (new this.constructor).fromArray(this.elements)
      }
   }

   function j(t) {
      for (let e = t.length - 1; e >= 0; --e)
         if (t[e] >= 65535) return !0;
      return !1
   }

   function X(t) {
      return document.createElementNS("http://www.w3.org/1999/xhtml", t)
   }

   function q(t) {
      return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
   }

   function Y(t) {
      return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
   }
   Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
   const Z = {
         [A]: {
            [C]: q
         },
         [C]: {
            [A]: Y
         }
      },
      K = {
         legacyMode: !0,
         get workingColorSpace() {
            return C
         },
         set workingColorSpace(t) {
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
         },
         convert: function(t, e, n) {
            if (this.legacyMode || e === n || !e || !n) return t;
            if (Z[e] && void 0 !== Z[e][n]) {
               const i = Z[e][n];
               return t.r = i(t.r), t.g = i(t.g), t.b = i(t.b), t
            }
            throw new Error("Unsupported color space conversion.")
         },
         fromWorkingColorSpace: function(t, e) {
            return this.convert(t, this.workingColorSpace, e)
         },
         toWorkingColorSpace: function(t, e) {
            return this.convert(t, e, this.workingColorSpace)
         }
      },
      J = {
         aliceblue: 15792383,
         antiquewhite: 16444375,
         aqua: 65535,
         aquamarine: 8388564,
         azure: 15794175,
         beige: 16119260,
         bisque: 16770244,
         black: 0,
         blanchedalmond: 16772045,
         blue: 255,
         blueviolet: 9055202,
         brown: 10824234,
         burlywood: 14596231,
         cadetblue: 6266528,
         chartreuse: 8388352,
         chocolate: 13789470,
         coral: 16744272,
         cornflowerblue: 6591981,
         cornsilk: 16775388,
         crimson: 14423100,
         cyan: 65535,
         darkblue: 139,
         darkcyan: 35723,
         darkgoldenrod: 12092939,
         darkgray: 11119017,
         darkgreen: 25600,
         darkgrey: 11119017,
         darkkhaki: 12433259,
         darkmagenta: 9109643,
         darkolivegreen: 5597999,
         darkorange: 16747520,
         darkorchid: 10040012,
         darkred: 9109504,
         darksalmon: 15308410,
         darkseagreen: 9419919,
         darkslateblue: 4734347,
         darkslategray: 3100495,
         darkslategrey: 3100495,
         darkturquoise: 52945,
         darkviolet: 9699539,
         deeppink: 16716947,
         deepskyblue: 49151,
         dimgray: 6908265,
         dimgrey: 6908265,
         dodgerblue: 2003199,
         firebrick: 11674146,
         floralwhite: 16775920,
         forestgreen: 2263842,
         fuchsia: 16711935,
         gainsboro: 14474460,
         ghostwhite: 16316671,
         gold: 16766720,
         goldenrod: 14329120,
         gray: 8421504,
         green: 32768,
         greenyellow: 11403055,
         grey: 8421504,
         honeydew: 15794160,
         hotpink: 16738740,
         indianred: 13458524,
         indigo: 4915330,
         ivory: 16777200,
         khaki: 15787660,
         lavender: 15132410,
         lavenderblush: 16773365,
         lawngreen: 8190976,
         lemonchiffon: 16775885,
         lightblue: 11393254,
         lightcoral: 15761536,
         lightcyan: 14745599,
         lightgoldenrodyellow: 16448210,
         lightgray: 13882323,
         lightgreen: 9498256,
         lightgrey: 13882323,
         lightpink: 16758465,
         lightsalmon: 16752762,
         lightseagreen: 2142890,
         lightskyblue: 8900346,
         lightslategray: 7833753,
         lightslategrey: 7833753,
         lightsteelblue: 11584734,
         lightyellow: 16777184,
         lime: 65280,
         limegreen: 3329330,
         linen: 16445670,
         magenta: 16711935,
         maroon: 8388608,
         mediumaquamarine: 6737322,
         mediumblue: 205,
         mediumorchid: 12211667,
         mediumpurple: 9662683,
         mediumseagreen: 3978097,
         mediumslateblue: 8087790,
         mediumspringgreen: 64154,
         mediumturquoise: 4772300,
         mediumvioletred: 13047173,
         midnightblue: 1644912,
         mintcream: 16121850,
         mistyrose: 16770273,
         moccasin: 16770229,
         navajowhite: 16768685,
         navy: 128,
         oldlace: 16643558,
         olive: 8421376,
         olivedrab: 7048739,
         orange: 16753920,
         orangered: 16729344,
         orchid: 14315734,
         palegoldenrod: 15657130,
         palegreen: 10025880,
         paleturquoise: 11529966,
         palevioletred: 14381203,
         papayawhip: 16773077,
         peachpuff: 16767673,
         peru: 13468991,
         pink: 16761035,
         plum: 14524637,
         powderblue: 11591910,
         purple: 8388736,
         rebeccapurple: 6697881,
         red: 16711680,
         rosybrown: 12357519,
         royalblue: 4286945,
         saddlebrown: 9127187,
         salmon: 16416882,
         sandybrown: 16032864,
         seagreen: 3050327,
         seashell: 16774638,
         sienna: 10506797,
         silver: 12632256,
         skyblue: 8900331,
         slateblue: 6970061,
         slategray: 7372944,
         slategrey: 7372944,
         snow: 16775930,
         springgreen: 65407,
         steelblue: 4620980,
         tan: 13808780,
         teal: 32896,
         thistle: 14204888,
         tomato: 16737095,
         turquoise: 4251856,
         violet: 15631086,
         wheat: 16113331,
         white: 16777215,
         whitesmoke: 16119285,
         yellow: 16776960,
         yellowgreen: 10145074
      },
      Q = {
         r: 0,
         g: 0,
         b: 0
      },
      $ = {
         h: 0,
         s: 0,
         l: 0
      },
      tt = {
         h: 0,
         s: 0,
         l: 0
      };

   function et(t, e, n) {
      return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
   }

   function nt(t, e) {
      return e.r = t.r, e.g = t.g, e.b = t.b, e
   }
   class it {
      constructor(t, e, n) {
         return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
      }
      set(t) {
         return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
      }
      setScalar(t) {
         return this.r = t, this.g = t, this.b = t, this
      }
      setHex(t, e = "srgb") {
         return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, K.toWorkingColorSpace(this, e), this
      }
      setRGB(t, e, n, i = "srgb-linear") {
         return this.r = t, this.g = e, this.b = n, K.toWorkingColorSpace(this, i), this
      }
      setHSL(t, e, n, i = "srgb-linear") {
         if (t = function(t, e) {
               return (t % e + e) % e
            }(t, 1), e = U(e, 0, 1), n = U(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
         else {
            const i = n <= .5 ? n * (1 + e) : n + e - n * e,
               r = 2 * n - i;
            this.r = et(r, i, t + 1 / 3), this.g = et(r, i, t), this.b = et(r, i, t - 1 / 3)
         }
         return K.toWorkingColorSpace(this, i), this
      }
      setStyle(t, e = "srgb") {
         function n(e) {
            void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
         }
         let i;
         if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
            let t;
            const r = i[1],
               a = i[2];
            switch (r) {
               case "rgb":
               case "rgba":
                  if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, K.toWorkingColorSpace(this, e), n(t[4]), this;
                  if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, K.toWorkingColorSpace(this, e), n(t[4]), this;
                  break;
               case "hsl":
               case "hsla":
                  if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                     const i = parseFloat(t[1]) / 360,
                        r = parseFloat(t[2]) / 100,
                        a = parseFloat(t[3]) / 100;
                     return n(t[4]), this.setHSL(i, r, a, e)
                  }
            }
         } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const t = i[1],
               n = t.length;
            if (3 === n) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, K.toWorkingColorSpace(this, e), this;
            if (6 === n) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, K.toWorkingColorSpace(this, e), this
         }
         return t && t.length > 0 ? this.setColorName(t, e) : this
      }
      setColorName(t, e = "srgb") {
         const n = J[t.toLowerCase()];
         return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this
      }
      clone() {
         return new this.constructor(this.r, this.g, this.b)
      }
      copy(t) {
         return this.r = t.r, this.g = t.g, this.b = t.b, this
      }
      copySRGBToLinear(t) {
         return this.r = q(t.r), this.g = q(t.g), this.b = q(t.b), this
      }
      copyLinearToSRGB(t) {
         return this.r = Y(t.r), this.g = Y(t.g), this.b = Y(t.b), this
      }
      convertSRGBToLinear() {
         return this.copySRGBToLinear(this), this
      }
      convertLinearToSRGB() {
         return this.copyLinearToSRGB(this), this
      }
      getHex(t = "srgb") {
         return K.fromWorkingColorSpace(nt(this, Q), t), U(255 * Q.r, 0, 255) << 16 ^ U(255 * Q.g, 0, 255) << 8 ^ U(255 * Q.b, 0, 255) << 0
      }
      getHexString(t = "srgb") {
         return ("000000" + this.getHex(t).toString(16)).slice(-6)
      }
      getHSL(t, e = "srgb-linear") {
         K.fromWorkingColorSpace(nt(this, Q), e);
         const n = Q.r,
            i = Q.g,
            r = Q.b,
            a = Math.max(n, i, r),
            s = Math.min(n, i, r);
         let o, l;
         const c = (s + a) / 2;
         if (s === a) o = 0, l = 0;
         else {
            const t = a - s;
            switch (l = c <= .5 ? t / (a + s) : t / (2 - a - s), a) {
               case n:
                  o = (i - r) / t + (i < r ? 6 : 0);
                  break;
               case i:
                  o = (r - n) / t + 2;
                  break;
               case r:
                  o = (n - i) / t + 4
            }
            o /= 6
         }
         return t.h = o, t.s = l, t.l = c, t
      }
      getRGB(t, e = "srgb-linear") {
         return K.fromWorkingColorSpace(nt(this, Q), e), t.r = Q.r, t.g = Q.g, t.b = Q.b, t
      }
      getStyle(t = "srgb") {
         return K.fromWorkingColorSpace(nt(this, Q), t), t !== A ? `color(${t} ${Q.r} ${Q.g} ${Q.b})` : `rgb(${255*Q.r|0},${255*Q.g|0},${255*Q.b|0})`
      }
      offsetHSL(t, e, n) {
         return this.getHSL($), $.h += t, $.s += e, $.l += n, this.setHSL($.h, $.s, $.l), this
      }
      add(t) {
         return this.r += t.r, this.g += t.g, this.b += t.b, this
      }
      addColors(t, e) {
         return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
      }
      addScalar(t) {
         return this.r += t, this.g += t, this.b += t, this
      }
      sub(t) {
         return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
      }
      multiply(t) {
         return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
      }
      multiplyScalar(t) {
         return this.r *= t, this.g *= t, this.b *= t, this
      }
      lerp(t, e) {
         return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
      }
      lerpColors(t, e, n) {
         return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this
      }
      lerpHSL(t, e) {
         this.getHSL($), t.getHSL(tt);
         const n = F($.h, tt.h, e),
            i = F($.s, tt.s, e),
            r = F($.l, tt.l, e);
         return this.setHSL(n, i, r), this
      }
      equals(t) {
         return t.r === this.r && t.g === this.g && t.b === this.b
      }
      fromArray(t, e = 0) {
         return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
      }
      toArray(t = [], e = 0) {
         return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
      }
      fromBufferAttribute(t, e) {
         return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this
      }
      toJSON() {
         return this.getHex()
      }*[Symbol.iterator]() {
         yield this.r, yield this.g, yield this.b
      }
   }
   let rt;
   it.NAMES = J;
   class at {
      static getDataURL(t) {
         if (/^data:/i.test(t.src)) return t.src;
         if ("undefined" == typeof HTMLCanvasElement) return t.src;
         let e;
         if (t instanceof HTMLCanvasElement) e = t;
         else {
            void 0 === rt && (rt = X("canvas")), rt.width = t.width, rt.height = t.height;
            const n = rt.getContext("2d");
            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = rt
         }
         return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
      }
      static sRGBToLinear(t) {
         if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
            const e = X("canvas");
            e.width = t.width, e.height = t.height;
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const i = n.getImageData(0, 0, t.width, t.height),
               r = i.data;
            for (let t = 0; t < r.length; t++) r[t] = 255 * q(r[t] / 255);
            return n.putImageData(i, 0, 0), e
         }
         if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * q(e[t] / 255)) : e[t] = q(e[t]);
            return {
               data: e,
               width: t.width,
               height: t.height
            }
         }
         return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t
      }
   }
   class st {
      constructor(t = null) {
         this.isSource = !0, this.uuid = N(), this.data = t, this.version = 0
      }
      set needsUpdate(t) {
         !0 === t && this.version++
      }
      toJSON(t) {
         const e = void 0 === t || "string" == typeof t;
         if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
         const n = {
               uuid: this.uuid,
               url: ""
            },
            i = this.data;
         if (null !== i) {
            let t;
            if (Array.isArray(i)) {
               t = [];
               for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(ot(i[e].image)) : t.push(ot(i[e]))
            } else t = ot(i);
            n.url = t
         }
         return e || (t.images[this.uuid] = n), n
      }
   }

   function ot(t) {
      return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? at.getDataURL(t) : t.data ? {
         data: Array.from(t.data),
         width: t.width,
         height: t.height,
         type: t.data.constructor.name
      } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
   }
   let lt = 0;
   class ct extends D {
      constructor(t = ct.DEFAULT_IMAGE, e = ct.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, s = 1023, o = 1009, l = 1, c = 3e3) {
         super(), this.isTexture = !0, Object.defineProperty(this, "id", {
            value: lt++
         }), this.uuid = N(), this.name = "", this.source = new st(t), this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = o, this.offset = new G(0, 0), this.repeat = new G(1, 1), this.center = new G(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new W, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
      }
      get image() {
         return this.source.data
      }
      set image(t) {
         this.source.data = t
      }
      updateMatrix() {
         this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
      }
      clone() {
         return (new this.constructor).copy(this)
      }
      copy(t) {
         return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this
      }
      toJSON(t) {
         const e = void 0 === t || "string" == typeof t;
         if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
         const n = {
            metadata: {
               version: 4.5,
               type: "Texture",
               generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
         };
         return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n
      }
      dispose() {
         this.dispatchEvent({
            type: "dispose"
         })
      }
      transformUv(t) {
         if (300 !== this.mapping) return t;
         if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
            case r:
               t.x = t.x - Math.floor(t.x);
               break;
            case a:
               t.x = t.x < 0 ? 0 : 1;
               break;
            case s:
               1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
         }
         if (t.y < 0 || t.y > 1) switch (this.wrapT) {
            case r:
               t.y = t.y - Math.floor(t.y);
               break;
            case a:
               t.y = t.y < 0 ? 0 : 1;
               break;
            case s:
               1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
         }
         return this.flipY && (t.y = 1 - t.y), t
      }
      set needsUpdate(t) {
         !0 === t && (this.version++, this.source.needsUpdate = !0)
      }
   }
   ct.DEFAULT_IMAGE = null, ct.DEFAULT_MAPPING = 300;
   class ut {
      constructor(t = 0, e = 0, n = 0, i = 1) {
         ut.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i
      }
      get width() {
         return this.z
      }
      set width(t) {
         this.z = t
      }
      get height() {
         return this.w
      }
      set height(t) {
         this.w = t
      }
      set(t, e, n, i) {
         return this.x = t, this.y = e, this.z = n, this.w = i, this
      }
      setScalar(t) {
         return this.x = t, this.y = t, this.z = t, this.w = t, this
      }
      setX(t) {
         return this.x = t, this
      }
      setY(t) {
         return this.y = t, this
      }
      setZ(t) {
         return this.z = t, this
      }
      setW(t) {
         return this.w = t, this
      }
      setComponent(t, e) {
         switch (t) {
            case 0:
               this.x = e;
               break;
            case 1:
               this.y = e;
               break;
            case 2:
               this.z = e;
               break;
            case 3:
               this.w = e;
               break;
            default:
               throw new Error("index is out of range: " + t)
         }
         return this
      }
      getComponent(t) {
         switch (t) {
            case 0:
               return this.x;
            case 1:
               return this.y;
            case 2:
               return this.z;
            case 3:
               return this.w;
            default:
               throw new Error("index is out of range: " + t)
         }
      }
      clone() {
         return new this.constructor(this.x, this.y, this.z, this.w)
      }
      copy(t) {
         return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
      }
      add(t) {
         return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
      }
      addScalar(t) {
         return this.x += t, this.y += t, this.z += t, this.w += t, this
      }
      addVectors(t, e) {
         return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
      }
      addScaledVector(t, e) {
         return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
      }
      sub(t) {
         return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
      }
      subScalar(t) {
         return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
      }
      subVectors(t, e) {
         return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
      }
      multiply(t) {
         return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
      }
      multiplyScalar(t) {
         return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
      }
      applyMatrix4(t) {
         const e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            a = t.elements;
         return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this
      }
      divideScalar(t) {
         return this.multiplyScalar(1 / t)
      }
      setAxisAngleFromQuaternion(t) {
         this.w = 2 * Math.acos(t.w);
         const e = Math.sqrt(1 - t.w * t.w);
         return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
      }
      setAxisAngleFromRotationMatrix(t) {
         let e, n, i, r;
         const a = .01,
            s = .1,
            o = t.elements,
            l = o[0],
            c = o[4],
            u = o[8],
            h = o[1],
            d = o[5],
            p = o[9],
            f = o[2],
            m = o[6],
            g = o[10];
         if (Math.abs(c - h) < a && Math.abs(u - f) < a && Math.abs(p - m) < a) {
            if (Math.abs(c + h) < s && Math.abs(u + f) < s && Math.abs(p + m) < s && Math.abs(l + d + g - 3) < s) return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const t = (l + 1) / 2,
               o = (d + 1) / 2,
               _ = (g + 1) / 2,
               v = (c + h) / 4,
               x = (u + f) / 4,
               y = (p + m) / 4;
            return t > o && t > _ ? t < a ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = v / n, r = x / n) : o > _ ? o < a ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = v / i, r = y / i) : _ < a ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_), n = x / r, i = y / r), this.set(n, i, r, e), this
         }
         let _ = Math.sqrt((m - p) * (m - p) + (u - f) * (u - f) + (h - c) * (h - c));
         return Math.abs(_) < .001 && (_ = 1), this.x = (m - p) / _, this.y = (u - f) / _, this.z = (h - c) / _, this.w = Math.acos((l + d + g - 1) / 2), this
      }
      min(t) {
         return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
      }
      max(t) {
         return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
      }
      clamp(t, e) {
         return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
      }
      clampScalar(t, e) {
         return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
      }
      clampLength(t, e) {
         const n = this.length();
         return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
      }
      floor() {
         return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
      }
      ceil() {
         return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
      }
      round() {
         return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
      }
      roundToZero() {
         return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
      }
      negate() {
         return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
      }
      dot(t) {
         return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
      }
      lengthSq() {
         return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      }
      length() {
         return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
      }
      manhattanLength() {
         return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
      }
      normalize() {
         return this.divideScalar(this.length() || 1)
      }
      setLength(t) {
         return this.normalize().multiplyScalar(t)
      }
      lerp(t, e) {
         return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
      }
      lerpVectors(t, e, n) {
         return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this
      }
      equals(t) {
         return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      }
      fromArray(t, e = 0) {
         return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
      }
      toArray(t = [], e = 0) {
         return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
      }
      fromBufferAttribute(t, e) {
         return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
      }
      random() {
         return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
      }*[Symbol.iterator]() {
         yield this.x, yield this.y, yield this.z, yield this.w
      }
   }
   class ht extends D {
      constructor(t, e, n = {}) {
         super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new ut(0, 0, t, e), this.scissorTest = !1, this.viewport = new ut(0, 0, t, e);
         const i = {
            width: t,
            height: e,
            depth: 1
         };
         this.texture = new ct(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : l, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0
      }
      setSize(t, e, n = 1) {
         this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
      }
      clone() {
         return (new this.constructor).copy(this)
      }
      copy(t) {
         this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
         const e = Object.assign({}, t.texture.image);
         return this.texture.source = new st(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
      }
      dispose() {
         this.dispatchEvent({
            type: "dispose"
         })
      }
   }
   class dt extends ct {
      constructor(t = null, e = 1, n = 1, i = 1) {
         super(null), this.isDataArrayTexture = !0, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
         }, this.magFilter = o, this.minFilter = o, this.wrapR = a, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
      }
   }
   class pt extends ct {
      constructor(t = null, e = 1, n = 1, i = 1) {
         super(null), this.isData3DTexture = !0, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
         }, this.magFilter = o, this.minFilter = o, this.wrapR = a, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
      }
   }
   class ft {
      constructor(t = 0, e = 0, n = 0, i = 1) {
         this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i
      }
      static slerpFlat(t, e, n, i, r, a, s) {
         let o = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            u = n[i + 3];
         const h = r[a + 0],
            d = r[a + 1],
            p = r[a + 2],
            f = r[a + 3];
         if (0 === s) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void(t[e + 3] = u);
         if (1 === s) return t[e + 0] = h, t[e + 1] = d, t[e + 2] = p, void(t[e + 3] = f);
         if (u !== f || o !== h || l !== d || c !== p) {
            let t = 1 - s;
            const e = o * h + l * d + c * p + u * f,
               n = e >= 0 ? 1 : -1,
               i = 1 - e * e;
            if (i > Number.EPSILON) {
               const r = Math.sqrt(i),
                  a = Math.atan2(r, e * n);
               t = Math.sin(t * a) / r, s = Math.sin(s * a) / r
            }
            const r = s * n;
            if (o = o * t + h * r, l = l * t + d * r, c = c * t + p * r, u = u * t + f * r, t === 1 - s) {
               const t = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
               o *= t, l *= t, c *= t, u *= t
            }
         }
         t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = u
      }
      static multiplyQuaternionsFlat(t, e, n, i, r, a) {
         const s = n[i],
            o = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            u = r[a],
            h = r[a + 1],
            d = r[a + 2],
            p = r[a + 3];
         return t[e] = s * p + c * u + o * d - l * h, t[e + 1] = o * p + c * h + l * u - s * d, t[e + 2] = l * p + c * d + s * h - o * u, t[e + 3] = c * p - s * u - o * h - l * d, t
      }
      get x() {
         return this._x
      }
      set x(t) {
         this._x = t, this._onChangeCallback()
      }
      get y() {
         return this._y
      }
      set y(t) {
         this._y = t, this._onChangeCallback()
      }
      get z() {
         return this._z
      }
      set z(t) {
         this._z = t, this._onChangeCallback()
      }
      get w() {
         return this._w
      }
      set w(t) {
         this._w = t, this._onChangeCallback()
      }
      set(t, e, n, i) {
         return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
      }
      clone() {
         return new this.constructor(this._x, this._y, this._z, this._w)
      }
      copy(t) {
         return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
      }
      setFromEuler(t, e) {
         const n = t._x,
            i = t._y,
            r = t._z,
            a = t._order,
            s = Math.cos,
            o = Math.sin,
            l = s(n / 2),
            c = s(i / 2),
            u = s(r / 2),
            h = o(n / 2),
            d = o(i / 2),
            p = o(r / 2);
         switch (a) {
            case "XYZ":
               this._x = h * c * u + l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u - h * d * p;
               break;
            case "YXZ":
               this._x = h * c * u + l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u + h * d * p;
               break;
            case "ZXY":
               this._x = h * c * u - l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u - h * d * p;
               break;
            case "ZYX":
               this._x = h * c * u - l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u + h * d * p;
               break;
            case "YZX":
               this._x = h * c * u + l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u - h * d * p;
               break;
            case "XZY":
               this._x = h * c * u - l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u + h * d * p;
               break;
            default:
               console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
         }
         return !1 !== e && this._onChangeCallback(), this
      }
      setFromAxisAngle(t, e) {
         const n = e / 2,
            i = Math.sin(n);
         return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
      }
      setFromRotationMatrix(t) {
         const e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            a = e[1],
            s = e[5],
            o = e[9],
            l = e[2],
            c = e[6],
            u = e[10],
            h = n + s + u;
         if (h > 0) {
            const t = .5 / Math.sqrt(h + 1);
            this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (a - i) * t
         } else if (n > s && n > u) {
            const t = 2 * Math.sqrt(1 + n - s - u);
            this._w = (c - o) / t, this._x = .25 * t, this._y = (i + a) / t, this._z = (r + l) / t
         } else if (s > u) {
            const t = 2 * Math.sqrt(1 + s - n - u);
            this._w = (r - l) / t, this._x = (i + a) / t, this._y = .25 * t, this._z = (o + c) / t
         } else {
            const t = 2 * Math.sqrt(1 + u - n - s);
            this._w = (a - i) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t
         }
         return this._onChangeCallback(), this
      }
      setFromUnitVectors(t, e) {
         let n = t.dot(e) + 1;
         return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
      }
      angleTo(t) {
         return 2 * Math.acos(Math.abs(U(this.dot(t), -1, 1)))
      }
      rotateTowards(t, e) {
         const n = this.angleTo(t);
         if (0 === n) return this;
         const i = Math.min(1, e / n);
         return this.slerp(t, i), this
      }
      identity() {
         return this.set(0, 0, 0, 1)
      }
      invert() {
         return this.conjugate()
      }
      conjugate() {
         return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
      }
      dot(t) {
         return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
      }
      lengthSq() {
         return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      }
      length() {
         return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
      }
      normalize() {
         let t = this.length();
         return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
      }
      multiply(t) {
         return this.multiplyQuaternions(this, t)
      }
      premultiply(t) {
         return this.multiplyQuaternions(t, this)
      }
      multiplyQuaternions(t, e) {
         const n = t._x,
            i = t._y,
            r = t._z,
            a = t._w,
            s = e._x,
            o = e._y,
            l = e._z,
            c = e._w;
         return this._x = n * c + a * s + i * l - r * o, this._y = i * c + a * o + r * s - n * l, this._z = r * c + a * l + n * o - i * s, this._w = a * c - n * s - i * o - r * l, this._onChangeCallback(), this
      }
      slerp(t, e) {
         if (0 === e) return this;
         if (1 === e) return this.copy(t);
         const n = this._x,
            i = this._y,
            r = this._z,
            a = this._w;
         let s = a * t._w + n * t._x + i * t._y + r * t._z;
         if (s < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, s = -s) : this.copy(t), s >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
         const o = 1 - s * s;
         if (o <= Number.EPSILON) {
            const t = 1 - e;
            return this._w = t * a + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
         }
         const l = Math.sqrt(o),
            c = Math.atan2(l, s),
            u = Math.sin((1 - e) * c) / l,
            h = Math.sin(e * c) / l;
         return this._w = a * u + this._w * h, this._x = n * u + this._x * h, this._y = i * u + this._y * h, this._z = r * u + this._z * h, this._onChangeCallback(), this
      }
      slerpQuaternions(t, e, n) {
         return this.copy(t).slerp(e, n)
      }
      random() {
         const t = Math.random(),
            e = Math.sqrt(1 - t),
            n = Math.sqrt(t),
            i = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random();
         return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i))
      }
      equals(t) {
         return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
      }
      fromArray(t, e = 0) {
         return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
      }
      toArray(t = [], e = 0) {
         return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
      }
      fromBufferAttribute(t, e) {
         return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
      }
      _onChange(t) {
         return this._onChangeCallback = t, this
      }
      _onChangeCallback() {}*[Symbol.iterator]() {
         yield this._x, yield this._y, yield this._z, yield this._w
      }
   }
   class mt {
      constructor(t = 0, e = 0, n = 0) {
         mt.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n
      }
      set(t, e, n) {
         return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this
      }
      setScalar(t) {
         return this.x = t, this.y = t, this.z = t, this
      }
      setX(t) {
         return this.x = t, this
      }
      setY(t) {
         return this.y = t, this
      }
      setZ(t) {
         return this.z = t, this
      }
      setComponent(t, e) {
         switch (t) {
            case 0:
               this.x = e;
               break;
            case 1:
               this.y = e;
               break;
            case 2:
               this.z = e;
               break;
            default:
               throw new Error("index is out of range: " + t)
         }
         return this
      }
      getComponent(t) {
         switch (t) {
            case 0:
               return this.x;
            case 1:
               return this.y;
            case 2:
               return this.z;
            default:
               throw new Error("index is out of range: " + t)
         }
      }
      clone() {
         return new this.constructor(this.x, this.y, this.z)
      }
      copy(t) {
         return this.x = t.x, this.y = t.y, this.z = t.z, this
      }
      add(t) {
         return this.x += t.x, this.y += t.y, this.z += t.z, this
      }
      addScalar(t) {
         return this.x += t, this.y += t, this.z += t, this
      }
      addVectors(t, e) {
         return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
      }
      addScaledVector(t, e) {
         return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
      }
      sub(t) {
         return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
      }
      subScalar(t) {
         return this.x -= t, this.y -= t, this.z -= t, this
      }
      subVectors(t, e) {
         return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
      }
      multiply(t) {
         return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
      }
      multiplyScalar(t) {
         return this.x *= t, this.y *= t, this.z *= t, this
      }
      multiplyVectors(t, e) {
         return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
      }
      applyEuler(t) {
         return this.applyQuaternion(_t.setFromEuler(t))
      }
      applyAxisAngle(t, e) {
         return this.applyQuaternion(_t.setFromAxisAngle(t, e))
      }
      applyMatrix3(t) {
         const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
         return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
      }
      applyNormalMatrix(t) {
         return this.applyMatrix3(t).normalize()
      }
      applyMatrix4(t) {
         const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
         return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this
      }
      applyQuaternion(t) {
         const e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            a = t.y,
            s = t.z,
            o = t.w,
            l = o * e + a * i - s * n,
            c = o * n + s * e - r * i,
            u = o * i + r * n - a * e,
            h = -r * e - a * n - s * i;
         return this.x = l * o + h * -r + c * -s - u * -a, this.y = c * o + h * -a + u * -r - l * -s, this.z = u * o + h * -s + l * -a - c * -r, this
      }
      project(t) {
         return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
      }
      unproject(t) {
         return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
      }
      transformDirection(t) {
         const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
         return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
      }
      divide(t) {
         return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
      }
      divideScalar(t) {
         return this.multiplyScalar(1 / t)
      }
      min(t) {
         return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
      }
      max(t) {
         return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
      }
      clamp(t, e) {
         return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
      }
      clampScalar(t, e) {
         return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
      }
      clampLength(t, e) {
         const n = this.length();
         return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
      }
      floor() {
         return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
      }
      ceil() {
         return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
      }
      round() {
         return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
      }
      roundToZero() {
         return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
      }
      negate() {
         return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
      }
      dot(t) {
         return this.x * t.x + this.y * t.y + this.z * t.z
      }
      lengthSq() {
         return this.x * this.x + this.y * this.y + this.z * this.z
      }
      length() {
         return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
      }
      manhattanLength() {
         return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
      }
      normalize() {
         return this.divideScalar(this.length() || 1)
      }
      setLength(t) {
         return this.normalize().multiplyScalar(t)
      }
      lerp(t, e) {
         return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
      }
      lerpVectors(t, e, n) {
         return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this
      }
      cross(t) {
         return this.crossVectors(this, t)
      }
      crossVectors(t, e) {
         const n = t.x,
            i = t.y,
            r = t.z,
            a = e.x,
            s = e.y,
            o = e.z;
         return this.x = i * o - r * s, this.y = r * a - n * o, this.z = n * s - i * a, this
      }
      projectOnVector(t) {
         const e = t.lengthSq();
         if (0 === e) return this.set(0, 0, 0);
         const n = t.dot(this) / e;
         return this.copy(t).multiplyScalar(n)
      }
      projectOnPlane(t) {
         return gt.copy(this).projectOnVector(t), this.sub(gt)
      }
      reflect(t) {
         return this.sub(gt.copy(t).multiplyScalar(2 * this.dot(t)))
      }
      angleTo(t) {
         const e = Math.sqrt(this.lengthSq() * t.lengthSq());
         if (0 === e) return Math.PI / 2;
         const n = this.dot(t) / e;
         return Math.acos(U(n, -1, 1))
      }
      distanceTo(t) {
         return Math.sqrt(this.distanceToSquared(t))
      }
      distanceToSquared(t) {
         const e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
         return e * e + n * n + i * i
      }
      manhattanDistanceTo(t) {
         return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      }
      setFromSpherical(t) {
         return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
      }
      setFromSphericalCoords(t, e, n) {
         const i = Math.sin(e) * t;
         return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
      }
      setFromCylindrical(t) {
         return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
      }
      setFromCylindricalCoords(t, e, n) {
         return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
      }
      setFromMatrixPosition(t) {
         const e = t.elements;
         return this.x = e[12], this.y = e[13], this.z = e[14], this
      }
      setFromMatrixScale(t) {
         const e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
         return this.x = e, this.y = n, this.z = i, this
      }
      setFromMatrixColumn(t, e) {
         return this.fromArray(t.elements, 4 * e)
      }
      setFromMatrix3Column(t, e) {
         return this.fromArray(t.elements, 3 * e)
      }
      setFromEuler(t) {
         return this.x = t._x, this.y = t._y, this.z = t._z, this
      }
      equals(t) {
         return t.x === this.x && t.y === this.y && t.z === this.z
      }
      fromArray(t, e = 0) {
         return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
      }
      toArray(t = [], e = 0) {
         return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
      }
      fromBufferAttribute(t, e) {
         return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
      }
      random() {
         return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
      }
      randomDirection() {
         const t = 2 * (Math.random() - .5),
            e = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - t ** 2);
         return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this
      }*[Symbol.iterator]() {
         yield this.x, yield this.y, yield this.z
      }
   }
   const gt = new mt,
      _t = new ft;
   class vt {
      constructor(t = new mt(1 / 0, 1 / 0, 1 / 0), e = new mt(-1 / 0, -1 / 0, -1 / 0)) {
         this.isBox3 = !0, this.min = t, this.max = e
      }
      set(t, e) {
         return this.min.copy(t), this.max.copy(e), this
      }
      setFromArray(t) {
         let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            s = -1 / 0;
         for (let o = 0, l = t.length; o < l; o += 3) {
            const l = t[o],
               c = t[o + 1],
               u = t[o + 2];
            l < e && (e = l), c < n && (n = c), u < i && (i = u), l > r && (r = l), c > a && (a = c), u > s && (s = u)
         }
         return this.min.set(e, n, i), this.max.set(r, a, s), this
      }
      setFromBufferAttribute(t) {
         let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            s = -1 / 0;
         for (let o = 0, l = t.count; o < l; o++) {
            const l = t.getX(o),
               c = t.getY(o),
               u = t.getZ(o);
            l < e && (e = l), c < n && (n = c), u < i && (i = u), l > r && (r = l), c > a && (a = c), u > s && (s = u)
         }
         return this.min.set(e, n, i), this.max.set(r, a, s), this
      }
      setFromPoints(t) {
         this.makeEmpty();
         for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
         return this
      }
      setFromCenterAndSize(t, e) {
         const n = yt.copy(e).multiplyScalar(.5);
         return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
      }
      setFromObject(t, e = !1) {
         return this.makeEmpty(), this.expandByObject(t, e)
      }
      clone() {
         return (new this.constructor).copy(this)
      }
      copy(t) {
         return this.min.copy(t.min), this.max.copy(t.max), this
      }
      makeEmpty() {
         return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
      }
      isEmpty() {
         return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
      }
      getCenter(t) {
         return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
      }
      getSize(t) {
         return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
      }
      expandByPoint(t) {
         return this.min.min(t), this.max.max(t), this
      }
      expandByVector(t) {
         return this.min.sub(t), this.max.add(t), this
      }
      expandByScalar(t) {
         return this.min.addScalar(-t), this.max.addScalar(t), this
      }
      expandByObject(t, e = !1) {
         t.updateWorldMatrix(!1, !1);
         const n = t.geometry;
         if (void 0 !== n)
            if (e && null != n.attributes && void 0 !== n.attributes.position) {
               const e = n.attributes.position;
               for (let n = 0, i = e.count; n < i; n++) yt.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld), this.expandByPoint(yt)
            } else null === n.boundingBox && n.computeBoundingBox(), bt.copy(n.boundingBox), bt.applyMatrix4(t.matrixWorld), this.union(bt);
         const i = t.children;
         for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
         return this
      }
      containsPoint(t) {
         return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
      }
      containsBox(t) {
         return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
      }
      getParameter(t, e) {
         return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
      }
      intersectsBox(t) {
         return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
      }
      intersectsSphere(t) {
         return this.clampPoint(t.center, yt), yt.distanceToSquared(t.center) <= t.radius * t.radius
      }
      intersectsPlane(t) {
         let e, n;
         return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
      }
      intersectsTriangle(t) {
         if (this.isEmpty()) return !1;
         this.getCenter(Ct), Lt.subVectors(this.max, Ct), Mt.subVectors(t.a, Ct), St.subVectors(t.b, Ct), wt.subVectors(t.c, Ct), Tt.subVectors(St, Mt), Et.subVectors(wt, St), At.subVectors(Mt, wt);
         let e = [0, -Tt.z, Tt.y, 0, -Et.z, Et.y, 0, -At.z, At.y, Tt.z, 0, -Tt.x, Et.z, 0, -Et.x, At.z, 0, -At.x, -Tt.y, Tt.x, 0, -Et.y, Et.x, 0, -At.y, At.x, 0];
         return !!Dt(e, Mt, St, wt, Lt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Dt(e, Mt, St, wt, Lt) && (Pt.crossVectors(Tt, Et), e = [Pt.x, Pt.y, Pt.z], Dt(e, Mt, St, wt, Lt)))
      }
      clampPoint(t, e) {
         return e.copy(t).clamp(this.min, this.max)
      }
      distanceToPoint(t) {
         return yt.copy(t).clamp(this.min, this.max).sub(t).length()
      }
      getBoundingSphere(t) {
         return this.getCenter(t.center), t.radius = .5 * this.getSize(yt).length(), t
      }
      intersect(t) {
         return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
      }
      union(t) {
         return this.min.min(t.min), this.max.max(t.max), this
      }
      applyMatrix4(t) {
         return this.isEmpty() || (xt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), xt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), xt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), xt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), xt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), xt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), xt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), xt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(xt)), this
      }
      translate(t) {
         return this.min.add(t), this.max.add(t), this
      }
      equals(t) {
         return t.min.equals(this.min) && t.max.equals(this.max)
      }
   }
   const xt = [new mt, new mt, new mt, new mt, new mt, new mt, new mt, new mt],
      yt = new mt,
      bt = new vt,
      Mt = new mt,
      St = new mt,
      wt = new mt,
      Tt = new mt,
      Et = new mt,
      At = new mt,
      Ct = new mt,
      Lt = new mt,
      Pt = new mt,
      Rt = new mt;

   function Dt(t, e, n, i, r) {
      for (let a = 0, s = t.length - 3; a <= s; a += 3) {
         Rt.fromArray(t, a);
         const s = r.x * Math.abs(Rt.x) + r.y * Math.abs(Rt.y) + r.z * Math.abs(Rt.z),
            o = e.dot(Rt),
            l = n.dot(Rt),
            c = i.dot(Rt);
         if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1
      }
      return !0
   }
   const Ot = new vt,
      It = new mt,
      zt = new mt,
      Nt = new mt;
   class Ut {
      constructor(t = new mt, e = -1) {
         this.center = t, this.radius = e
      }
      set(t, e) {
         return this.center.copy(t), this.radius = e, this
      }
      setFromPoints(t, e) {
         const n = this.center;
         void 0 !== e ? n.copy(e) : Ot.setFromPoints(t).getCenter(n);
         let i = 0;
         for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
         return this.radius = Math.sqrt(i), this
      }
      copy(t) {
         return this.center.copy(t.center), this.radius = t.radius, this
      }
      isEmpty() {
         return this.radius < 0
      }
      makeEmpty() {
         return this.center.set(0, 0, 0), this.radius = -1, this
      }
      containsPoint(t) {
         return t.distanceToSquared(this.center) <= this.radius * this.radius
      }
      distanceToPoint(t) {
         return t.distanceTo(this.center) - this.radius
      }
      intersectsSphere(t) {
         const e = this.radius + t.radius;
         return t.center.distanceToSquared(this.center) <= e * e
      }
      intersectsBox(t) {
         return t.intersectsSphere(this)
      }
      intersectsPlane(t) {
         return Math.abs(t.distanceToPoint(this.center)) <= this.radius
      }
      clampPoint(t, e) {
         const n = this.center.distanceToSquared(t);
         return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
      }
      getBoundingBox(t) {
         return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
      }
      applyMatrix4(t) {
         return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
      }
      translate(t) {
         return this.center.add(t), this
      }
      expandByPoint(t) {
         if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
         Nt.subVectors(t, this.center);
         const e = Nt.lengthSq();
         if (e > this.radius * this.radius) {
            const t = Math.sqrt(e),
               n = .5 * (t - this.radius);
            this.center.add(Nt.multiplyScalar(n / t)), this.radius += n
         }
         return this
      }
      union(t) {
         return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (!0 === this.center.equals(t.center) ? zt.set(0, 0, 1).multiplyScalar(t.radius) : zt.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(It.copy(t.center).add(zt)), this.expandByPoint(It.copy(t.center).sub(zt)), this)
      }
      equals(t) {
         return t.center.equals(this.center) && t.radius === this.radius
      }
      clone() {
         return (new this.constructor).copy(this)
      }
   }
   const Ft = new mt,
      kt = new mt,
      Ht = new mt,
      Bt = new mt,
      Vt = new mt,
      Gt = new mt,
      Wt = new mt;
   class jt {
      constructor(t = new mt, e = new mt(0, 0, -1)) {
         this.origin = t, this.direction = e
      }
      set(t, e) {
         return this.origin.copy(t), this.direction.copy(e), this
      }
      copy(t) {
         return this.origin.copy(t.origin), this.direction.copy(t.direction), this
      }
      at(t, e) {
         return e.copy(this.direction).multiplyScalar(t).add(this.origin)
      }
      lookAt(t) {
         return this.direction.copy(t).sub(this.origin).normalize(), this
      }
      recast(t) {
         return this.origin.copy(this.at(t, Ft)), this
      }
      closestPointToPoint(t, e) {
         e.subVectors(t, this.origin);
         const n = e.dot(this.direction);
         return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
      }
      distanceToPoint(t) {
         return Math.sqrt(this.distanceSqToPoint(t))
      }
      distanceSqToPoint(t) {
         const e = Ft.subVectors(t, this.origin).dot(this.direction);
         return e < 0 ? this.origin.distanceToSquared(t) : (Ft.copy(this.direction).multiplyScalar(e).add(this.origin), Ft.distanceToSquared(t))
      }
      distanceSqToSegment(t, e, n, i) {
         kt.copy(t).add(e).multiplyScalar(.5), Ht.copy(e).sub(t).normalize(), Bt.copy(this.origin).sub(kt);
         const r = .5 * t.distanceTo(e),
            a = -this.direction.dot(Ht),
            s = Bt.dot(this.direction),
            o = -Bt.dot(Ht),
            l = Bt.lengthSq(),
            c = Math.abs(1 - a * a);
         let u, h, d, p;
         if (c > 0)
            if (u = a * o - s, h = a * s - o, p = r * c, u >= 0)
               if (h >= -p)
                  if (h <= p) {
                     const t = 1 / c;
                     u *= t, h *= t, d = u * (u + a * h + 2 * s) + h * (a * u + h + 2 * o) + l
                  } else h = r, u = Math.max(0, -(a * h + s)), d = -u * u + h * (h + 2 * o) + l;
         else h = -r, u = Math.max(0, -(a * h + s)), d = -u * u + h * (h + 2 * o) + l;
         else h <= -p ? (u = Math.max(0, -(-a * r + s)), h = u > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -u * u + h * (h + 2 * o) + l) : h <= p ? (u = 0, h = Math.min(Math.max(-r, -o), r), d = h * (h + 2 * o) + l) : (u = Math.max(0, -(a * r + s)), h = u > 0 ? r : Math.min(Math.max(-r, -o), r), d = -u * u + h * (h + 2 * o) + l);
         else h = a > 0 ? -r : r, u = Math.max(0, -(a * h + s)), d = -u * u + h * (h + 2 * o) + l;
         return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy(Ht).multiplyScalar(h).add(kt), d
      }
      intersectSphere(t, e) {
         Ft.subVectors(t.center, this.origin);
         const n = Ft.dot(this.direction),
            i = Ft.dot(Ft) - n * n,
            r = t.radius * t.radius;
         if (i > r) return null;
         const a = Math.sqrt(r - i),
            s = n - a,
            o = n + a;
         return s < 0 && o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e)
      }
      intersectsSphere(t) {
         return this.distanceSqToPoint(t.center) <= t.radius * t.radius
      }
      distanceToPlane(t) {
         const e = t.normal.dot(this.direction);
         if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
         const n = -(this.origin.dot(t.normal) + t.constant) / e;
         return n >= 0 ? n : null
      }
      intersectPlane(t, e) {
         const n = this.distanceToPlane(t);
         return null === n ? null : this.at(n, e)
      }
      intersectsPlane(t) {
         const e = t.distanceToPoint(this.origin);
         return 0 === e || t.normal.dot(this.direction) * e < 0
      }
      intersectBox(t, e) {
         let n, i, r, a, s, o;
         const l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            u = 1 / this.direction.z,
            h = this.origin;
         return l >= 0 ? (n = (t.min.x - h.x) * l, i = (t.max.x - h.x) * l) : (n = (t.max.x - h.x) * l, i = (t.min.x - h.x) * l), c >= 0 ? (r = (t.min.y - h.y) * c, a = (t.max.y - h.y) * c) : (r = (t.max.y - h.y) * c, a = (t.min.y - h.y) * c), n > a || r > i ? null : ((r > n || n != n) && (n = r), (a < i || i != i) && (i = a), u >= 0 ? (s = (t.min.z - h.z) * u, o = (t.max.z - h.z) * u) : (s = (t.max.z - h.z) * u, o = (t.min.z - h.z) * u), n > o || s > i ? null : ((s > n || n != n) && (n = s), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
      }
      intersectsBox(t) {
         return null !== this.intersectBox(t, Ft)
      }
      intersectTriangle(t, e, n, i, r) {
         Vt.subVectors(e, t), Gt.subVectors(n, t), Wt.crossVectors(Vt, Gt);
         let a, s = this.direction.dot(Wt);
         if (s > 0) {
            if (i) return null;
            a = 1
         } else {
            if (!(s < 0)) return null;
            a = -1, s = -s
         }
         Bt.subVectors(this.origin, t);
         const o = a * this.direction.dot(Gt.crossVectors(Bt, Gt));
         if (o < 0) return null;
         const l = a * this.direction.dot(Vt.cross(Bt));
         if (l < 0) return null;
         if (o + l > s) return null;
         const c = -a * Bt.dot(Wt);
         return c < 0 ? null : this.at(c / s, r)
      }
      applyMatrix4(t) {
         return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
      }
      equals(t) {
         return t.origin.equals(this.origin) && t.direction.equals(this.direction)
      }
      clone() {
         return (new this.constructor).copy(this)
      }
   }
   class Xt {
      constructor() {
         Xt.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      }
      set(t, e, n, i, r, a, s, o, l, c, u, h, d, p, f, m) {
         const g = this.elements;
         return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = s, g[13] = o, g[2] = l, g[6] = c, g[10] = u, g[14] = h, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
      }
      identity() {
         return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
      }
      clone() {
         return (new Xt).fromArray(this.elements)
      }
      copy(t) {
         const e = this.elements,
            n = t.elements;
         return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
      }
      copyPosition(t) {
         const e = this.elements,
            n = t.elements;
         return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
      }
      setFromMatrix3(t) {
         const e = t.elements;
         return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
      }
      extractBasis(t, e, n) {
         return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
      }
      makeBasis(t, e, n) {
         return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
      }
      extractRotation(t) {
         const e = this.elements,
            n = t.elements,
            i = 1 / qt.setFromMatrixColumn(t, 0).length(),
            r = 1 / qt.setFromMatrixColumn(t, 1).length(),
            a = 1 / qt.setFromMatrixColumn(t, 2).length();
         return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
      }
      makeRotationFromEuler(t) {
         const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            a = Math.cos(n),
            s = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            u = Math.sin(r);
         if ("XYZ" === t.order) {
            const t = a * c,
               n = a * u,
               i = s * c,
               r = s * u;
            e[0] = o * c, e[4] = -o * u, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -s * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = a * o
         } else if ("YXZ" === t.order) {
            const t = o * c,
               n = o * u,
               i = l * c,
               r = l * u;
            e[0] = t + r * s, e[4] = i * s - n, e[8] = a * l, e[1] = a * u, e[5] = a * c, e[9] = -s, e[2] = n * s - i, e[6] = r + t * s, e[10] = a * o
         } else if ("ZXY" === t.order) {
            const t = o * c,
               n = o * u,
               i = l * c,
               r = l * u;
            e[0] = t - r * s, e[4] = -a * u, e[8] = i + n * s, e[1] = n + i * s, e[5] = a * c, e[9] = r - t * s, e[2] = -a * l, e[6] = s, e[10] = a * o
         } else if ("ZYX" === t.order) {
            const t = a * c,
               n = a * u,
               i = s * c,
               r = s * u;
            e[0] = o * c, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * u, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = s * o, e[10] = a * o
         } else if ("YZX" === t.order) {
            const t = a * o,
               n = a * l,
               i = s * o,
               r = s * l;
            e[0] = o * c, e[4] = r - t * u, e[8] = i * u + n, e[1] = u, e[5] = a * c, e[9] = -s * c, e[2] = -l * c, e[6] = n * u + i, e[10] = t - r * u
         } else if ("XZY" === t.order) {
            const t = a * o,
               n = a * l,
               i = s * o,
               r = s * l;
            e[0] = o * c, e[4] = -u, e[8] = l * c, e[1] = t * u + r, e[5] = a * c, e[9] = n * u - i, e[2] = i * u - n, e[6] = s * c, e[10] = r * u + t
         }
         return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
      }
      makeRotationFromQuaternion(t) {
         return this.compose(Zt, t, Kt)
      }
      lookAt(t, e, n) {
         const i = this.elements;
         return $t.subVectors(t, e), 0 === $t.lengthSq() && ($t.z = 1), $t.normalize(), Jt.crossVectors(n, $t), 0 === Jt.lengthSq() && (1 === Math.abs(n.z) ? $t.x += 1e-4 : $t.z += 1e-4, $t.normalize(), Jt.crossVectors(n, $t)), Jt.normalize(), Qt.crossVectors($t, Jt), i[0] = Jt.x, i[4] = Qt.x, i[8] = $t.x, i[1] = Jt.y, i[5] = Qt.y, i[9] = $t.y, i[2] = Jt.z, i[6] = Qt.z, i[10] = $t.z, this
      }
      multiply(t) {
         return this.multiplyMatrices(this, t)
      }
      premultiply(t) {
         return this.multiplyMatrices(t, this)
      }
      multiplyMatrices(t, e) {
         const n = t.elements,
            i = e.elements,
            r = this.elements,
            a = n[0],
            s = n[4],
            o = n[8],
            l = n[12],
            c = n[1],
            u = n[5],
            h = n[9],
            d = n[13],
            p = n[2],
            f = n[6],
            m = n[10],
            g = n[14],
            _ = n[3],
            v = n[7],
            x = n[11],
            y = n[15],
            b = i[0],
            M = i[4],
            S = i[8],
            w = i[12],
            T = i[1],
            E = i[5],
            A = i[9],
            C = i[13],
            L = i[2],
            P = i[6],
            R = i[10],
            D = i[14],
            O = i[3],
            I = i[7],
            z = i[11],
            N = i[15];
         return r[0] = a * b + s * T + o * L + l * O, r[4] = a * M + s * E + o * P + l * I, r[8] = a * S + s * A + o * R + l * z, r[12] = a * w + s * C + o * D + l * N, r[1] = c * b + u * T + h * L + d * O, r[5] = c * M + u * E + h * P + d * I, r[9] = c * S + u * A + h * R + d * z, r[13] = c * w + u * C + h * D + d * N, r[2] = p * b + f * T + m * L + g * O, r[6] = p * M + f * E + m * P + g * I, r[10] = p * S + f * A + m * R + g * z, r[14] = p * w + f * C + m * D + g * N, r[3] = _ * b + v * T + x * L + y * O, r[7] = _ * M + v * E + x * P + y * I, r[11] = _ * S + v * A + x * R + y * z, r[15] = _ * w + v * C + x * D + y * N, this
      }
      multiplyScalar(t) {
         const e = this.elements;
         return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
      }
      determinant() {
         const t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            a = t[1],
            s = t[5],
            o = t[9],
            l = t[13],
            c = t[2],
            u = t[6],
            h = t[10],
            d = t[14];
         return t[3] * (+r * o * u - i * l * u - r * s * h + n * l * h + i * s * d - n * o * d) + t[7] * (+e * o * d - e * l * h + r * a * h - i * a * d + i * l * c - r * o * c) + t[11] * (+e * l * u - e * s * d - r * a * u + n * a * d + r * s * c - n * l * c) + t[15] * (-i * s * c - e * o * u + e * s * h + i * a * u - n * a * h + n * o * c)
      }
      transpose() {
         const t = this.elements;
         let e;
         return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
      }
      setPosition(t, e, n) {
         const i = this.elements;
         return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
      }
      invert() {
         const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            u = t[9],
            h = t[10],
            d = t[11],
            p = t[12],
            f = t[13],
            m = t[14],
            g = t[15],
            _ = u * m * l - f * h * l + f * o * d - s * m * d - u * o * g + s * h * g,
            v = p * h * l - c * m * l - p * o * d + a * m * d + c * o * g - a * h * g,
            x = c * f * l - p * u * l + p * s * d - a * f * d - c * s * g + a * u * g,
            y = p * u * o - c * f * o - p * s * h + a * f * h + c * s * m - a * u * m,
            b = e * _ + n * v + i * x + r * y;
         if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
         const M = 1 / b;
         return t[0] = _ * M, t[1] = (f * h * r - u * m * r - f * i * d + n * m * d + u * i * g - n * h * g) * M, t[2] = (s * m * r - f * o * r + f * i * l - n * m * l - s * i * g + n * o * g) * M, t[3] = (u * o * r - s * h * r - u * i * l + n * h * l + s * i * d - n * o * d) * M, t[4] = v * M, t[5] = (c * m * r - p * h * r + p * i * d - e * m * d - c * i * g + e * h * g) * M, t[6] = (p * o * r - a * m * r - p * i * l + e * m * l + a * i * g - e * o * g) * M, t[7] = (a * h * r - c * o * r + c * i * l - e * h * l - a * i * d + e * o * d) * M, t[8] = x * M, t[9] = (p * u * r - c * f * r - p * n * d + e * f * d + c * n * g - e * u * g) * M, t[10] = (a * f * r - p * s * r + p * n * l - e * f * l - a * n * g + e * s * g) * M, t[11] = (c * s * r - a * u * r - c * n * l + e * u * l + a * n * d - e * s * d) * M, t[12] = y * M, t[13] = (c * f * i - p * u * i + p * n * h - e * f * h - c * n * m + e * u * m) * M, t[14] = (p * s * i - a * f * i - p * n * o + e * f * o + a * n * m - e * s * m) * M, t[15] = (a * u * i - c * s * i + c * n * o - e * u * o - a * n * h + e * s * h) * M, this
      }
      scale(t) {
         const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
         return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
      }
      getMaxScaleOnAxis() {
         const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
         return Math.sqrt(Math.max(e, n, i))
      }
      makeTranslation(t, e, n) {
         return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
      }
      makeRotationX(t) {
         const e = Math.cos(t),
            n = Math.sin(t);
         return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
      }
      makeRotationY(t) {
         const e = Math.cos(t),
            n = Math.sin(t);
         return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
      }
      makeRotationZ(t) {
         const e = Math.cos(t),
            n = Math.sin(t);
         return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
      }
      makeRotationAxis(t, e) {
         const n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            a = t.x,
            s = t.y,
            o = t.z,
            l = r * a,
            c = r * s;
         return this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, c * s + n, c * o - i * a, 0, l * o - i * s, c * o + i * a, r * o * o + n, 0, 0, 0, 0, 1), this
      }
      makeScale(t, e, n) {
         return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
      }
      makeShear(t, e, n, i, r, a) {
         return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this
      }
      compose(t, e, n) {
         const i = this.elements,
            r = e._x,
            a = e._y,
            s = e._z,
            o = e._w,
            l = r + r,
            c = a + a,
            u = s + s,
            h = r * l,
            d = r * c,
            p = r * u,
            f = a * c,
            m = a * u,
            g = s * u,
            _ = o * l,
            v = o * c,
            x = o * u,
            y = n.x,
            b = n.y,
            M = n.z;
         return i[0] = (1 - (f + g)) * y, i[1] = (d + x) * y, i[2] = (p - v) * y, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (h + g)) * b, i[6] = (m + _) * b, i[7] = 0, i[8] = (p + v) * M, i[9] = (m - _) * M, i[10] = (1 - (h + f)) * M, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
      }
      decompose(t, e, n) {
         const i = this.elements;
         let r = qt.set(i[0], i[1], i[2]).length();
         const a = qt.set(i[4], i[5], i[6]).length(),
            s = qt.set(i[8], i[9], i[10]).length();
         this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Yt.copy(this);
         const o = 1 / r,
            l = 1 / a,
            c = 1 / s;
         return Yt.elements[0] *= o, Yt.elements[1] *= o, Yt.elements[2] *= o, Yt.elements[4] *= l, Yt.elements[5] *= l, Yt.elements[6] *= l, Yt.elements[8] *= c, Yt.elements[9] *= c, Yt.elements[10] *= c, e.setFromRotationMatrix(Yt), n.x = r, n.y = a, n.z = s, this
      }
      makePerspective(t, e, n, i, r, a) {
         const s = this.elements,
            o = 2 * r / (e - t),
            l = 2 * r / (n - i),
            c = (e + t) / (e - t),
            u = (n + i) / (n - i),
            h = -(a + r) / (a - r),
            d = -2 * a * r / (a - r);
         return s[0] = o, s[4] = 0, s[8] = c, s[12] = 0, s[1] = 0, s[5] = l, s[9] = u, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = h, s[14] = d, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this
      }
      makeOrthographic(t, e, n, i, r, a) {
         const s = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            c = 1 / (a - r),
            u = (e + t) * o,
            h = (n + i) * l,
            d = (a + r) * c;
         return s[0] = 2 * o, s[4] = 0, s[8] = 0, s[12] = -u, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -h, s[2] = 0, s[6] = 0, s[10] = -2 * c, s[14] = -d, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this
      }
      equals(t) {
         const e = this.elements,
            n = t.elements;
         for (let t = 0; t < 16; t++)
            if (e[t] !== n[t]) return !1;
         return !0
      }
      fromArray(t, e = 0) {
         for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
         return this
      }
      toArray(t = [], e = 0) {
         const n = this.elements;
         return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
      }
   }
   const qt = new mt,
      Yt = new Xt,
      Zt = new mt(0, 0, 0),
      Kt = new mt(1, 1, 1),
      Jt = new mt,
      Qt = new mt,
      $t = new mt,
      te = new Xt,
      ee = new ft;
   class ne {
      constructor(t = 0, e = 0, n = 0, i = ne.DefaultOrder) {
         this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i
      }
      get x() {
         return this._x
      }
      set x(t) {
         this._x = t, this._onChangeCallback()
      }
      get y() {
         return this._y
      }
      set y(t) {
         this._y = t, this._onChangeCallback()
      }
      get z() {
         return this._z
      }
      set z(t) {
         this._z = t, this._onChangeCallback()
      }
      get order() {
         return this._order
      }
      set order(t) {
         this._order = t, this._onChangeCallback()
      }
      set(t, e, n, i = this._order) {
         return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this
      }
      clone() {
         return new this.constructor(this._x, this._y, this._z, this._order)
      }
      copy(t) {
         return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
      }
      setFromRotationMatrix(t, e = this._order, n = !0) {
         const i = t.elements,
            r = i[0],
            a = i[4],
            s = i[8],
            o = i[1],
            l = i[5],
            c = i[9],
            u = i[2],
            h = i[6],
            d = i[10];
         switch (e) {
            case "XYZ":
               this._y = Math.asin(U(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(h, l), this._z = 0);
               break;
            case "YXZ":
               this._x = Math.asin(-U(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
               break;
            case "ZXY":
               this._x = Math.asin(U(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(o, r));
               break;
            case "ZYX":
               this._y = Math.asin(-U(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(h, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
               break;
            case "YZX":
               this._z = Math.asin(U(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(s, d));
               break;
            case "XZY":
               this._z = Math.asin(-U(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(h, l), this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
               break;
            default:
               console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
         }
         return this._order = e, !0 === n && this._onChangeCallback(), this
      }
      setFromQuaternion(t, e, n) {
         return te.makeRotationFromQuaternion(t), this.setFromRotationMatrix(te, e, n)
      }
      setFromVector3(t, e = this._order) {
         return this.set(t.x, t.y, t.z, e)
      }
      reorder(t) {
         return ee.setFromEuler(this), this.setFromQuaternion(ee, t)
      }
      equals(t) {
         return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
      }
      fromArray(t) {
         return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
      }
      toArray(t = [], e = 0) {
         return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
      }
      _onChange(t) {
         return this._onChangeCallback = t, this
      }
      _onChangeCallback() {}*[Symbol.iterator]() {
         yield this._x, yield this._y, yield this._z, yield this._order
      }
      toVector3() {
         console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
      }
   }
   ne.DefaultOrder = "XYZ", ne.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
   class ie {
      constructor() {
         this.mask = 1
      }
      set(t) {
         this.mask = (1 << t | 0) >>> 0
      }
      enable(t) {
         this.mask |= 1 << t | 0
      }
      enableAll() {
         this.mask = -1
      }
      toggle(t) {
         this.mask ^= 1 << t | 0
      }
      disable(t) {
         this.mask &= ~(1 << t | 0)
      }
      disableAll() {
         this.mask = 0
      }
      test(t) {
         return 0 != (this.mask & t.mask)
      }
      isEnabled(t) {
         return 0 != (this.mask & (1 << t | 0))
      }
   }
   let re = 0;
   const ae = new mt,
      se = new ft,
      oe = new Xt,
      le = new mt,
      ce = new mt,
      ue = new mt,
      he = new ft,
      de = new mt(1, 0, 0),
      pe = new mt(0, 1, 0),
      fe = new mt(0, 0, 1),
      me = {
         type: "added"
      },
      ge = {
         type: "removed"
      };
   class _e extends D {
      constructor() {
         super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
            value: re++
         }), this.uuid = N(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _e.DefaultUp.clone();
         const t = new mt,
            e = new ne,
            n = new ft,
            i = new mt(1, 1, 1);
         e._onChange((function() {
            n.setFromEuler(e, !1)
         })), n._onChange((function() {
            e.setFromQuaternion(n, void 0, !1)
         })), Object.defineProperties(this, {
            position: {
               configurable: !0,
               enumerable: !0,
               value: t
            },
            rotation: {
               configurable: !0,
               enumerable: !0,
               value: e
            },
            quaternion: {
               configurable: !0,
               enumerable: !0,
               value: n
            },
            scale: {
               configurable: !0,
               enumerable: !0,
               value: i
            },
            modelViewMatrix: {
               value: new Xt
            },
            normalMatrix: {
               value: new W
            }
         }), this.matrix = new Xt, this.matrixWorld = new Xt, this.matrixAutoUpdate = _e.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = _e.DefaultMatrixWorldAutoUpdate, this.layers = new ie, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
      }
      onBeforeRender() {}
      onAfterRender() {}
      applyMatrix4(t) {
         this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
      }
      applyQuaternion(t) {
         return this.quaternion.premultiply(t), this
      }
      setRotationFromAxisAngle(t, e) {
         this.quaternion.setFromAxisAngle(t, e)
      }
      setRotationFromEuler(t) {
         this.quaternion.setFromEuler(t, !0)
      }
      setRotationFromMatrix(t) {
         this.quaternion.setFromRotationMatrix(t)
      }
      setRotationFromQuaternion(t) {
         this.quaternion.copy(t)
      }
      rotateOnAxis(t, e) {
         return se.setFromAxisAngle(t, e), this.quaternion.multiply(se), this
      }
      rotateOnWorldAxis(t, e) {
         return se.setFromAxisAngle(t, e), this.quaternion.premultiply(se), this
      }
      rotateX(t) {
         return this.rotateOnAxis(de, t)
      }
      rotateY(t) {
         return this.rotateOnAxis(pe, t)
      }
      rotateZ(t) {
         return this.rotateOnAxis(fe, t)
      }
      translateOnAxis(t, e) {
         return ae.copy(t).applyQuaternion(this.quaternion), this.position.add(ae.multiplyScalar(e)), this
      }
      translateX(t) {
         return this.translateOnAxis(de, t)
      }
      translateY(t) {
         return this.translateOnAxis(pe, t)
      }
      translateZ(t) {
         return this.translateOnAxis(fe, t)
      }
      localToWorld(t) {
         return t.applyMatrix4(this.matrixWorld)
      }
      worldToLocal(t) {
         return t.applyMatrix4(oe.copy(this.matrixWorld).invert())
      }
      lookAt(t, e, n) {
         t.isVector3 ? le.copy(t) : le.set(t, e, n);
         const i = this.parent;
         this.updateWorldMatrix(!0, !1), ce.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? oe.lookAt(ce, le, this.up) : oe.lookAt(le, ce, this.up), this.quaternion.setFromRotationMatrix(oe), i && (oe.extractRotation(i.matrixWorld), se.setFromRotationMatrix(oe), this.quaternion.premultiply(se.invert()))
      }
      add(t) {
         if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this
         }
         return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(me)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
      }
      remove(t) {
         if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
            return this
         }
         const e = this.children.indexOf(t);
         return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(ge)), this
      }
      removeFromParent() {
         const t = this.parent;
         return null !== t && t.remove(this), this
      }
      clear() {
         for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            e.parent = null, e.dispatchEvent(ge)
         }
         return this.children.length = 0, this
      }
      attach(t) {
         return this.updateWorldMatrix(!0, !1), oe.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), oe.multiply(t.parent.matrixWorld)), t.applyMatrix4(oe), this.add(t), t.updateWorldMatrix(!1, !0), this
      }
      getObjectById(t) {
         return this.getObjectByProperty("id", t)
      }
      getObjectByName(t) {
         return this.getObjectByProperty("name", t)
      }
      getObjectByProperty(t, e) {
         if (this[t] === e) return this;
         for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(t, e);
            if (void 0 !== i) return i
         }
      }
      getWorldPosition(t) {
         return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
      }
      getWorldQuaternion(t) {
         return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ce, t, ue), t
      }
      getWorldScale(t) {
         return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ce, he, t), t
      }
      getWorldDirection(t) {
         this.updateWorldMatrix(!0, !1);
         const e = this.matrixWorld.elements;
         return t.set(e[8], e[9], e[10]).normalize()
      }
      raycast() {}
      traverse(t) {
         t(this);
         const e = this.children;
         for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
      }
      traverseVisible(t) {
         if (!1 === this.visible) return;
         t(this);
         const e = this.children;
         for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
      }
      traverseAncestors(t) {
         const e = this.parent;
         null !== e && (t(e), e.traverseAncestors(t))
      }
      updateMatrix() {
         this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
      }
      updateMatrixWorld(t) {
         this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
         const e = this.children;
         for (let n = 0, i = e.length; n < i; n++) {
            const i = e[n];
            !0 !== i.matrixWorldAutoUpdate && !0 !== t || i.updateMatrixWorld(t)
         }
      }
      updateWorldMatrix(t, e) {
         const n = this.parent;
         if (!0 === t && null !== n && !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
            const t = this.children;
            for (let e = 0, n = t.length; e < n; e++) {
               const n = t[e];
               !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0)
            }
         }
      }
      toJSON(t) {
         const e = void 0 === t || "string" == typeof t,
            n = {};
         e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
         }, n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
         });
         const i = {};

         function r(e, n) {
            return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
         }
         if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t).uuid);
         else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
               const n = e.shapes;
               if (Array.isArray(n))
                  for (let e = 0, i = n.length; e < i; e++) {
                     const i = n[e];
                     r(t.shapes, i)
                  } else r(t.shapes, n)
            }
         }
         if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
            if (Array.isArray(this.material)) {
               const e = [];
               for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
               i.material = e
            } else i.material = r(t.materials, this.material);
         if (this.children.length > 0) {
            i.children = [];
            for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object)
         }
         if (this.animations.length > 0) {
            i.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
               const n = this.animations[e];
               i.animations.push(r(t.animations, n))
            }
         }
         if (e) {
            const e = a(t.geometries),
               i = a(t.materials),
               r = a(t.textures),
               s = a(t.images),
               o = a(t.shapes),
               l = a(t.skeletons),
               c = a(t.animations),
               u = a(t.nodes);
            e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), u.length > 0 && (n.nodes = u)
         }
         return n.object = i, n;

         function a(t) {
            const e = [];
            for (const n in t) {
               const i = t[n];
               delete i.metadata, e.push(i)
            }
            return e
         }
      }
      clone(t) {
         return (new this.constructor).copy(this, t)
      }
      copy(t, e = !0) {
         if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
            for (let e = 0; e < t.children.length; e++) {
               const n = t.children[e];
               this.add(n.clone())
            }
         return this
      }
   }
   _e.DefaultUp = new mt(0, 1, 0), _e.DefaultMatrixAutoUpdate = !0, _e.DefaultMatrixWorldAutoUpdate = !0;
   const ve = new mt,
      xe = new mt,
      ye = new mt,
      be = new mt,
      Me = new mt,
      Se = new mt,
      we = new mt,
      Te = new mt,
      Ee = new mt,
      Ae = new mt;
   class Ce {
      constructor(t = new mt, e = new mt, n = new mt) {
         this.a = t, this.b = e, this.c = n
      }
      static getNormal(t, e, n, i) {
         i.subVectors(n, e), ve.subVectors(t, e), i.cross(ve);
         const r = i.lengthSq();
         return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
      }
      static getBarycoord(t, e, n, i, r) {
         ve.subVectors(i, e), xe.subVectors(n, e), ye.subVectors(t, e);
         const a = ve.dot(ve),
            s = ve.dot(xe),
            o = ve.dot(ye),
            l = xe.dot(xe),
            c = xe.dot(ye),
            u = a * l - s * s;
         if (0 === u) return r.set(-2, -1, -1);
         const h = 1 / u,
            d = (l * o - s * c) * h,
            p = (a * c - s * o) * h;
         return r.set(1 - d - p, p, d)
      }
      static containsPoint(t, e, n, i) {
         return this.getBarycoord(t, e, n, i, be), be.x >= 0 && be.y >= 0 && be.x + be.y <= 1
      }
      static getUV(t, e, n, i, r, a, s, o) {
         return this.getBarycoord(t, e, n, i, be), o.set(0, 0), o.addScaledVector(r, be.x), o.addScaledVector(a, be.y), o.addScaledVector(s, be.z), o
      }
      static isFrontFacing(t, e, n, i) {
         return ve.subVectors(n, e), xe.subVectors(t, e), ve.cross(xe).dot(i) < 0
      }
      set(t, e, n) {
         return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
      }
      setFromPointsAndIndices(t, e, n, i) {
         return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
      }
      setFromAttributeAndIndices(t, e, n, i) {
         return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this
      }
      clone() {
         return (new this.constructor).copy(this)
      }
      copy(t) {
         return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
      }
      getArea() {
         return ve.subVectors(this.c, this.b), xe.subVectors(this.a, this.b), .5 * ve.cross(xe).length()
      }
      getMidpoint(t) {
         return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
      }
      getNormal(t) {
         return Ce.getNormal(this.a, this.b, this.c, t)
      }
      getPlane(t) {
         return t.setFromCoplanarPoints(this.a, this.b, this.c)
      }
      getBarycoord(t, e) {
         return Ce.getBarycoord(t, this.a, this.b, this.c, e)
      }
      getUV(t, e, n, i, r) {
         return Ce.getUV(t, this.a, this.b, this.c, e, n, i, r)
      }
      containsPoint(t) {
         return Ce.containsPoint(t, this.a, this.b, this.c)
      }
      isFrontFacing(t) {
         return Ce.isFrontFacing(this.a, this.b, this.c, t)
      }
      intersectsBox(t) {
         return t.intersectsTriangle(this)
      }
      closestPointToPoint(t, e) {
         const n = this.a,
            i = this.b,
            r = this.c;
         let a, s;
         Me.subVectors(i, n), Se.subVectors(r, n), Te.subVectors(t, n);
         const o = Me.dot(Te),
            l = Se.dot(Te);
         if (o <= 0 && l <= 0) return e.copy(n);
         Ee.subVectors(t, i);
         const c = Me.dot(Ee),
            u = Se.dot(Ee);
         if (c >= 0 && u <= c) return e.copy(i);
         const h = o * u - c * l;
         if (h <= 0 && o >= 0 && c <= 0) return a = o / (o - c), e.copy(n).addScaledVector(Me, a);
         Ae.subVectors(t, r);
         const d = Me.dot(Ae),
            p = Se.dot(Ae);
         if (p >= 0 && d <= p) return e.copy(r);
         const f = d * l - o * p;
         if (f <= 0 && l >= 0 && p <= 0) return s = l / (l - p), e.copy(n).addScaledVector(Se, s);
         const m = c * p - d * u;
         if (m <= 0 && u - c >= 0 && d - p >= 0) return we.subVectors(r, i), s = (u - c) / (u - c + (d - p)), e.copy(i).addScaledVector(we, s);
         const g = 1 / (m + f + h);
         return a = f * g, s = h * g, e.copy(n).addScaledVector(Me, a).addScaledVector(Se, s)
      }
      equals(t) {
         return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
      }
   }
   let Le = 0;
   class Pe extends D {
      constructor() {
         super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
            value: Le++
         }), this.uuid = N(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = t, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = L, this.stencilZFail = L, this.stencilZPass = L, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
      }
      get alphaTest() {
         return this._alphaTest
      }
      set alphaTest(t) {
         this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t
      }
      onBuild() {}
      onBeforeRender() {}
      onBeforeCompile() {}
      customProgramCacheKey() {
         return this.onBeforeCompile.toString()
      }
      setValues(t) {
         if (void 0 !== t)
            for (const e in t) {
               const n = t[e];
               if (void 0 === n) {
                  console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                  continue
               }
               const i = this[e];
               void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
            }
      }
      toJSON(t) {
         const e = void 0 === t || "string" == typeof t;
         e && (t = {
            textures: {},
            images: {}
         });
         const n = {
            metadata: {
               version: 4.5,
               type: "Material",
               generator: "Material.toJSON"
            }
         };

         function i(t) {
            const e = [];
            for (const n in t) {
               const i = t[n];
               delete i.metadata, e.push(i)
            }
            return e
         }
         if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
            const e = i(t.textures),
               r = i(t.images);
            e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r)
         }
         return n
      }
      clone() {
         return (new this.constructor).copy(this)
      }
      copy(t) {
         this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
         const e = t.clippingPlanes;
         let n = null;
         if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i) n[i] = e[i].clone()
         }
         return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
      }
      dispose() {
         this.dispatchEvent({
            type: "dispose"
         })
      }
      set needsUpdate(t) {
         !0 === t && this.version++
      }
   }
   class Re extends Pe {
      constructor(t) {
         super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new it(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
      }
      copy(t) {
         return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
      }
   }
   const De = new mt,
      Oe = new G;
   class Ie {
      constructor(t, e, n) {
         if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
         this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = 35044, this.updateRange = {
            offset: 0,
            count: -1
         }, this.version = 0
      }
      onUploadCallback() {}
      set needsUpdate(t) {
         !0 === t && this.version++
      }
      setUsage(t) {
         return this.usage = t, this
      }
      copy(t) {
         return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
      }
      copyAt(t, e, n) {
         t *= this.itemSize, n *= e.itemSize;
         for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
         return this
      }
      copyArray(t) {
         return this.array.set(t), this
      }
      applyMatrix3(t) {
         if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++) Oe.fromBufferAttribute(this, e), Oe.applyMatrix3(t), this.setXY(e, Oe.x, Oe.y);
         else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++) De.fromBufferAttribute(this, e), De.applyMatrix3(t), this.setXYZ(e, De.x, De.y, De.z);
         return this
      }
      applyMatrix4(t) {
         for (let e = 0, n = this.count; e < n; e++) De.fromBufferAttribute(this, e), De.applyMatrix4(t), this.setXYZ(e, De.x, De.y, De.z);
         return this
      }
      applyNormalMatrix(t) {
         for (let e = 0, n = this.count; e < n; e++) De.fromBufferAttribute(this, e), De.applyNormalMatrix(t), this.setXYZ(e, De.x, De.y, De.z);
         return this
      }
      transformDirection(t) {
         for (let e = 0, n = this.count; e < n; e++) De.fromBufferAttribute(this, e), De.transformDirection(t), this.setXYZ(e, De.x, De.y, De.z);
         return this
      }
      set(t, e = 0) {
         return this.array.set(t, e), this
      }
      getX(t) {
         let e = this.array[t * this.itemSize];
         return this.normalized && (e = B(e, this.array)), e
      }
      setX(t, e) {
         return this.normalized && (e = V(e, this.array)), this.array[t * this.itemSize] = e, this
      }
      getY(t) {
         let e = this.array[t * this.itemSize + 1];
         return this.normalized && (e = B(e, this.array)), e
      }
      setY(t, e) {
         return this.normalized && (e = V(e, this.array)), this.array[t * this.itemSize + 1] = e, this
      }
      getZ(t) {
         let e = this.array[t * this.itemSize + 2];
         return this.normalized && (e = B(e, this.array)), e
      }
      setZ(t, e) {
         return this.normalized && (e = V(e, this.array)), this.array[t * this.itemSize + 2] = e, this
      }
      getW(t) {
         let e = this.array[t * this.itemSize + 3];
         return this.normalized && (e = B(e, this.array)), e
      }
      setW(t, e) {
         return this.normalized && (e = V(e, this.array)), this.array[t * this.itemSize + 3] = e, this
      }
      setXY(t, e, n) {
         return t *= this.itemSize, this.normalized && (e = V(e, this.array), n = V(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this
      }
      setXYZ(t, e, n, i) {
         return t *= this.itemSize, this.normalized && (e = V(e, this.array), n = V(n, this.array), i = V(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
      }
      setXYZW(t, e, n, i, r) {
         return t *= this.itemSize, this.normalized && (e = V(e, this.array), n = V(n, this.array), i = V(i, this.array), r = V(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
      }
      onUpload(t) {
         return this.onUploadCallback = t, this
      }
      clone() {
         return new this.constructor(this.array, this.itemSize).copy(this)
      }
      toJSON() {
         const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
         };
         return "" !== this.name && (t.name = this.name), 35044 !== this.usage && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
      }
      copyColorsArray() {
         console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
      }
      copyVector2sArray() {
         console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
      }
      copyVector3sArray() {
         console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
      }
      copyVector4sArray() {
         console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
      }
   }
   class ze extends Ie {
      constructor(t, e, n) {
         super(new Uint16Array(t), e, n)
      }
   }
   class Ne extends Ie {
      constructor(t, e, n) {
         super(new Uint32Array(t), e, n)
      }
   }
   class Ue extends Ie {
      constructor(t, e, n) {
         super(new Float32Array(t), e, n)
      }
   }
   let Fe = 0;
   const ke = new Xt,
      He = new _e,
      Be = new mt,
      Ve = new vt,
      Ge = new vt,
      We = new mt;
   class je extends D {
      constructor() {
         super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
            value: Fe++
         }), this.uuid = N(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
         }, this.userData = {}
      }
      getIndex() {
         return this.index
      }
      setIndex(t) {
         return Array.isArray(t) ? this.index = new(j(t) ? Ne : ze)(t, 1) : this.index = t, this
      }
      getAttribute(t) {
         return this.attributes[t]
      }
      setAttribute(t, e) {
         return this.attributes[t] = e, this
      }
      deleteAttribute(t) {
         return delete this.attributes[t], this
      }
      hasAttribute(t) {
         return void 0 !== this.attributes[t]
      }
      addGroup(t, e, n = 0) {
         this.groups.push({
            start: t,
            count: e,
            materialIndex: n
         })
      }
      clearGroups() {
         this.groups = []
      }
      setDrawRange(t, e) {
         this.drawRange.start = t, this.drawRange.count = e
      }
      applyMatrix4(t) {
         const e = this.attributes.position;
         void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
         const n = this.attributes.normal;
         if (void 0 !== n) {
            const e = (new W).getNormalMatrix(t);
            n.applyNormalMatrix(e), n.needsUpdate = !0
         }
         const i = this.attributes.tangent;
         return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
      }
      applyQuaternion(t) {
         return ke.makeRotationFromQuaternion(t), this.applyMatrix4(ke), this
      }
      rotateX(t) {
         return ke.makeRotationX(t), this.applyMatrix4(ke), this
      }
      rotateY(t) {
         return ke.makeRotationY(t), this.applyMatrix4(ke), this
      }
      rotateZ(t) {
         return ke.makeRotationZ(t), this.applyMatrix4(ke), this
      }
      translate(t, e, n) {
         return ke.makeTranslation(t, e, n), this.applyMatrix4(ke), this
      }
      scale(t, e, n) {
         return ke.makeScale(t, e, n), this.applyMatrix4(ke), this
      }
      lookAt(t) {
         return He.lookAt(t), He.updateMatrix(), this.applyMatrix4(He.matrix), this
      }
      center() {
         return this.computeBoundingBox(), this.boundingBox.getCenter(Be).negate(), this.translate(Be.x, Be.y, Be.z), this
      }
      setFromPoints(t) {
         const e = [];
         for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0)
         }
         return this.setAttribute("position", new Ue(e, 3)), this
      }
      computeBoundingBox() {
         null === this.boundingBox && (this.boundingBox = new vt);
         const t = this.attributes.position,
            e = this.morphAttributes.position;
         if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new mt(-1 / 0, -1 / 0, -1 / 0), new mt(1 / 0, 1 / 0, 1 / 0));
         if (void 0 !== t) {
            if (this.boundingBox.setFromBufferAttribute(t), e)
               for (let t = 0, n = e.length; t < n; t++) {
                  const n = e[t];
                  Ve.setFromBufferAttribute(n), this.morphTargetsRelative ? (We.addVectors(this.boundingBox.min, Ve.min), this.boundingBox.expandByPoint(We), We.addVectors(this.boundingBox.max, Ve.max), this.boundingBox.expandByPoint(We)) : (this.boundingBox.expandByPoint(Ve.min), this.boundingBox.expandByPoint(Ve.max))
               }
         } else this.boundingBox.makeEmpty();
         (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
      }
      computeBoundingSphere() {
         null === this.boundingSphere && (this.boundingSphere = new Ut);
         const t = this.attributes.position,
            e = this.morphAttributes.position;
         if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new mt, 1 / 0);
         if (t) {
            const n = this.boundingSphere.center;
            if (Ve.setFromBufferAttribute(t), e)
               for (let t = 0, n = e.length; t < n; t++) {
                  const n = e[t];
                  Ge.setFromBufferAttribute(n), this.morphTargetsRelative ? (We.addVectors(Ve.min, Ge.min), Ve.expandByPoint(We), We.addVectors(Ve.max, Ge.max), Ve.expandByPoint(We)) : (Ve.expandByPoint(Ge.min), Ve.expandByPoint(Ge.max))
               }
            Ve.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++) We.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(We));
            if (e)
               for (let r = 0, a = e.length; r < a; r++) {
                  const a = e[r],
                     s = this.morphTargetsRelative;
                  for (let e = 0, r = a.count; e < r; e++) We.fromBufferAttribute(a, e), s && (Be.fromBufferAttribute(t, e), We.add(Be)), i = Math.max(i, n.distanceToSquared(We))
               }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
         }
      }
      computeTangents() {
         const t = this.index,
            e = this.attributes;
         if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
         const n = t.array,
            i = e.position.array,
            r = e.normal.array,
            a = e.uv.array,
            s = i.length / 3;
         !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Ie(new Float32Array(4 * s), 4));
         const o = this.getAttribute("tangent").array,
            l = [],
            c = [];
         for (let t = 0; t < s; t++) l[t] = new mt, c[t] = new mt;
         const u = new mt,
            h = new mt,
            d = new mt,
            p = new G,
            f = new G,
            m = new G,
            g = new mt,
            _ = new mt;

         function v(t, e, n) {
            u.fromArray(i, 3 * t), h.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(a, 2 * t), f.fromArray(a, 2 * e), m.fromArray(a, 2 * n), h.sub(u), d.sub(u), f.sub(p), m.sub(p);
            const r = 1 / (f.x * m.y - m.x * f.y);
            isFinite(r) && (g.copy(h).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), _.copy(d).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(_), c[e].add(_), c[n].add(_))
         }
         let x = this.groups;
         0 === x.length && (x = [{
            start: 0,
            count: n.length
         }]);
         for (let t = 0, e = x.length; t < e; ++t) {
            const e = x[t],
               i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3) v(n[t + 0], n[t + 1], n[t + 2])
         }
         const y = new mt,
            b = new mt,
            M = new mt,
            S = new mt;

         function w(t) {
            M.fromArray(r, 3 * t), S.copy(M);
            const e = l[t];
            y.copy(e), y.sub(M.multiplyScalar(M.dot(e))).normalize(), b.crossVectors(S, e);
            const n = b.dot(c[t]) < 0 ? -1 : 1;
            o[4 * t] = y.x, o[4 * t + 1] = y.y, o[4 * t + 2] = y.z, o[4 * t + 3] = n
         }
         for (let t = 0, e = x.length; t < e; ++t) {
            const e = x[t],
               i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3) w(n[t + 0]), w(n[t + 1]), w(n[t + 2])
         }
      }
      computeVertexNormals() {
         const t = this.index,
            e = this.getAttribute("position");
         if (void 0 !== e) {
            let n = this.getAttribute("normal");
            if (void 0 === n) n = new Ie(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
            else
               for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
            const i = new mt,
               r = new mt,
               a = new mt,
               s = new mt,
               o = new mt,
               l = new mt,
               c = new mt,
               u = new mt;
            if (t)
               for (let h = 0, d = t.count; h < d; h += 3) {
                  const d = t.getX(h + 0),
                     p = t.getX(h + 1),
                     f = t.getX(h + 2);
                  i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), a.fromBufferAttribute(e, f), c.subVectors(a, r), u.subVectors(i, r), c.cross(u), s.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), s.add(c), o.add(c), l.add(c), n.setXYZ(d, s.x, s.y, s.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(f, l.x, l.y, l.z)
               } else
                  for (let t = 0, s = e.count; t < s; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), a.fromBufferAttribute(e, t + 2), c.subVectors(a, r), u.subVectors(i, r), c.cross(u), n.setXYZ(t + 0, c.x, c.y, c.z), n.setXYZ(t + 1, c.x, c.y, c.z), n.setXYZ(t + 2, c.x, c.y, c.z);
            this.normalizeNormals(), n.needsUpdate = !0
         }
      }
      merge() {
         return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this
      }
      normalizeNormals() {
         const t = this.attributes.normal;
         for (let e = 0, n = t.count; e < n; e++) We.fromBufferAttribute(t, e), We.normalize(), t.setXYZ(e, We.x, We.y, We.z)
      }
      toNonIndexed() {
         function t(t, e) {
            const n = t.array,
               i = t.itemSize,
               r = t.normalized,
               a = new n.constructor(e.length * i);
            let s = 0,
               o = 0;
            for (let r = 0, l = e.length; r < l; r++) {
               s = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
               for (let t = 0; t < i; t++) a[o++] = n[s++]
            }
            return new Ie(a, i, r)
         }
         if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
         const e = new je,
            n = this.index.array,
            i = this.attributes;
         for (const r in i) {
            const a = t(i[r], n);
            e.setAttribute(r, a)
         }
         const r = this.morphAttributes;
         for (const i in r) {
            const a = [],
               s = r[i];
            for (let e = 0, i = s.length; e < i; e++) {
               const i = t(s[e], n);
               a.push(i)
            }
            e.morphAttributes[i] = a
         }
         e.morphTargetsRelative = this.morphTargetsRelative;
         const a = this.groups;
         for (let t = 0, n = a.length; t < n; t++) {
            const n = a[t];
            e.addGroup(n.start, n.count, n.materialIndex)
         }
         return e
      }
      toJSON() {
         const t = {
            metadata: {
               version: 4.5,
               type: "BufferGeometry",
               generator: "BufferGeometry.toJSON"
            }
         };
         if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
            const e = this.parameters;
            for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
            return t
         }
         t.data = {
            attributes: {}
         };
         const e = this.index;
         null !== e && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
         });
         const n = this.attributes;
         for (const e in n) {
            const i = n[e];
            t.data.attributes[e] = i.toJSON(t.data)
         }
         const i = {};
         let r = !1;
         for (const e in this.morphAttributes) {
            const n = this.morphAttributes[e],
               a = [];
            for (let e = 0, i = n.length; e < i; e++) {
               const i = n[e];
               a.push(i.toJSON(t.data))
            }
            a.length > 0 && (i[e] = a, r = !0)
         }
         r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
         const a = this.groups;
         a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
         const s = this.boundingSphere;
         return null !== s && (t.data.boundingSphere = {
            center: s.center.toArray(),
            radius: s.radius
         }), t
      }
      clone() {
         return (new this.constructor).copy(this)
      }
      copy(t) {
         this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
         const e = {};
         this.name = t.name;
         const n = t.index;
         null !== n && this.setIndex(n.clone(e));
         const i = t.attributes;
         for (const t in i) {
            const n = i[t];
            this.setAttribute(t, n.clone(e))
         }
         const r = t.morphAttributes;
         for (const t in r) {
            const n = [],
               i = r[t];
            for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
            this.morphAttributes[t] = n
         }
         this.morphTargetsRelative = t.morphTargetsRelative;
         const a = t.groups;
         for (let t = 0, e = a.length; t < e; t++) {
            const e = a[t];
            this.addGroup(e.start, e.count, e.materialIndex)
         }
         const s = t.boundingBox;
         null !== s && (this.boundingBox = s.clone());
         const o = t.boundingSphere;
         return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), this
      }
      dispose() {
         this.dispatchEvent({
            type: "dispose"
         })
      }
   }
   const Xe = new Xt,
      qe = new jt,
      Ye = new Ut,
      Ze = new mt,
      Ke = new mt,
      Je = new mt,
      Qe = new mt,
      $e = new mt,
      tn = new mt,
      en = new mt,
      nn = new mt,
      rn = new mt,
      an = new G,
      sn = new G,
      on = new G,
      ln = new mt,
      cn = new mt;
   class un extends _e {
      constructor(t = new je, e = new Re) {
         super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
      }
      copy(t, e) {
         return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
      }
      updateMorphTargets() {
         const t = this.geometry.morphAttributes,
            e = Object.keys(t);
         if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
               this.morphTargetInfluences = [], this.morphTargetDictionary = {};
               for (let t = 0, e = n.length; t < e; t++) {
                  const e = n[t].name || String(t);
                  this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
               }
            }
         }
      }
      raycast(t, e) {
         const n = this.geometry,
            i = this.material,
            r = this.matrixWorld;
         if (void 0 === i) return;
         if (null === n.boundingSphere && n.computeBoundingSphere(), Ye.copy(n.boundingSphere), Ye.applyMatrix4(r), !1 === t.ray.intersectsSphere(Ye)) return;
         if (Xe.copy(r).invert(), qe.copy(t.ray).applyMatrix4(Xe), null !== n.boundingBox && !1 === qe.intersectsBox(n.boundingBox)) return;
         let a;
         const s = n.index,
            o = n.attributes.position,
            l = n.morphAttributes.position,
            c = n.morphTargetsRelative,
            u = n.attributes.uv,
            h = n.attributes.uv2,
            d = n.groups,
            p = n.drawRange;
         if (null !== s)
            if (Array.isArray(i))
               for (let n = 0, r = d.length; n < r; n++) {
                  const r = d[n],
                     f = i[r.materialIndex];
                  for (let n = Math.max(r.start, p.start), i = Math.min(s.count, Math.min(r.start + r.count, p.start + p.count)); n < i; n += 3) {
                     const i = s.getX(n),
                        d = s.getX(n + 1),
                        p = s.getX(n + 2);
                     a = hn(this, f, t, qe, o, l, c, u, h, i, d, p), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = r.materialIndex, e.push(a))
                  }
               } else
                  for (let n = Math.max(0, p.start), r = Math.min(s.count, p.start + p.count); n < r; n += 3) {
                     const r = s.getX(n),
                        d = s.getX(n + 1),
                        p = s.getX(n + 2);
                     a = hn(this, i, t, qe, o, l, c, u, h, r, d, p), a && (a.faceIndex = Math.floor(n / 3), e.push(a))
                  } else if (void 0 !== o)
                     if (Array.isArray(i))
                        for (let n = 0, r = d.length; n < r; n++) {
                           const r = d[n],
                              s = i[r.materialIndex];
                           for (let n = Math.max(r.start, p.start), i = Math.min(o.count, Math.min(r.start + r.count, p.start + p.count)); n < i; n += 3) a = hn(this, s, t, qe, o, l, c, u, h, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = r.materialIndex, e.push(a))
                        } else
                           for (let n = Math.max(0, p.start), r = Math.min(o.count, p.start + p.count); n < r; n += 3) a = hn(this, i, t, qe, o, l, c, u, h, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), e.push(a))
      }
   }

   function hn(t, e, n, i, r, a, s, o, l, c, u, h) {
      Ze.fromBufferAttribute(r, c), Ke.fromBufferAttribute(r, u), Je.fromBufferAttribute(r, h);
      const d = t.morphTargetInfluences;
      if (a && d) {
         en.set(0, 0, 0), nn.set(0, 0, 0), rn.set(0, 0, 0);
         for (let t = 0, e = a.length; t < e; t++) {
            const e = d[t],
               n = a[t];
            0 !== e && (Qe.fromBufferAttribute(n, c), $e.fromBufferAttribute(n, u), tn.fromBufferAttribute(n, h), s ? (en.addScaledVector(Qe, e), nn.addScaledVector($e, e), rn.addScaledVector(tn, e)) : (en.addScaledVector(Qe.sub(Ze), e), nn.addScaledVector($e.sub(Ke), e), rn.addScaledVector(tn.sub(Je), e)))
         }
         Ze.add(en), Ke.add(nn), Je.add(rn)
      }
      t.isSkinnedMesh && (t.boneTransform(c, Ze), t.boneTransform(u, Ke), t.boneTransform(h, Je));
      const p = function(t, e, n, i, r, a, s, o) {
         let l;
         if (l = 1 === e.side ? i.intersectTriangle(s, a, r, !0, o) : i.intersectTriangle(r, a, s, 2 !== e.side, o), null === l) return null;
         cn.copy(o), cn.applyMatrix4(t.matrixWorld);
         const c = n.ray.origin.distanceTo(cn);
         return c < n.near || c > n.far ? null : {
            distance: c,
            point: cn.clone(),
            object: t
         }
      }(t, e, n, i, Ze, Ke, Je, ln);
      if (p) {
         o && (an.fromBufferAttribute(o, c), sn.fromBufferAttribute(o, u), on.fromBufferAttribute(o, h), p.uv = Ce.getUV(ln, Ze, Ke, Je, an, sn, on, new G)), l && (an.fromBufferAttribute(l, c), sn.fromBufferAttribute(l, u), on.fromBufferAttribute(l, h), p.uv2 = Ce.getUV(ln, Ze, Ke, Je, an, sn, on, new G));
         const t = {
            a: c,
            b: u,
            c: h,
            normal: new mt,
            materialIndex: 0
         };
         Ce.getNormal(Ze, Ke, Je, t.normal), p.face = t
      }
      return p
   }
   class dn extends je {
      constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
         super(), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: a
         };
         const s = this;
         i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
         const o = [],
            l = [],
            c = [],
            u = [];
         let h = 0,
            d = 0;

         function p(t, e, n, i, r, a, p, f, m, g, _) {
            const v = a / m,
               x = p / g,
               y = a / 2,
               b = p / 2,
               M = f / 2,
               S = m + 1,
               w = g + 1;
            let T = 0,
               E = 0;
            const A = new mt;
            for (let a = 0; a < w; a++) {
               const s = a * x - b;
               for (let o = 0; o < S; o++) {
                  const h = o * v - y;
                  A[t] = h * i, A[e] = s * r, A[n] = M, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), u.push(o / m), u.push(1 - a / g), T += 1
               }
            }
            for (let t = 0; t < g; t++)
               for (let e = 0; e < m; e++) {
                  const n = h + e + S * t,
                     i = h + e + S * (t + 1),
                     r = h + (e + 1) + S * (t + 1),
                     a = h + (e + 1) + S * t;
                  o.push(n, i, a), o.push(i, r, a), E += 6
               }
            s.addGroup(d, E, _), d += E, h += T
         }
         p("z", "y", "x", -1, -1, n, e, t, a, r, 0), p("z", "y", "x", 1, -1, n, e, -t, a, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, a, 2), p("x", "z", "y", 1, -1, t, n, -e, i, a, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new Ue(l, 3)), this.setAttribute("normal", new Ue(c, 3)), this.setAttribute("uv", new Ue(u, 2))
      }
      static fromJSON(t) {
         return new dn(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
      }
   }

   function pn(t) {
      const e = {};
      for (const n in t) {
         e[n] = {};
         for (const i in t[n]) {
            const r = t[n][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
         }
      }
      return e
   }

   function fn(t) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
         const i = pn(t[n]);
         for (const t in i) e[t] = i[t]
      }
      return e
   }
   const mn = {
      clone: pn,
      merge: fn
   };
   class gn extends Pe {
      constructor(t) {
         super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
         }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
         }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && this.setValues(t)
      }
      copy(t) {
         return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = pn(t.uniforms), this.uniformsGroups = function(t) {
            const e = [];
            for (let n = 0; n < t.length; n++) e.push(t[n].clone());
            return e
         }(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
      }
      toJSON(t) {
         const e = super.toJSON(t);
         e.glslVersion = this.glslVersion, e.uniforms = {};
         for (const n in this.uniforms) {
            const i = this.uniforms[n].value;
            i && i.isTexture ? e.uniforms[n] = {
               type: "t",
               value: i.toJSON(t).uuid
            } : i && i.isColor ? e.uniforms[n] = {
               type: "c",
               value: i.getHex()
            } : i && i.isVector2 ? e.uniforms[n] = {
               type: "v2",
               value: i.toArray()
            } : i && i.isVector3 ? e.uniforms[n] = {
               type: "v3",
               value: i.toArray()
            } : i && i.isVector4 ? e.uniforms[n] = {
               type: "v4",
               value: i.toArray()
            } : i && i.isMatrix3 ? e.uniforms[n] = {
               type: "m3",
               value: i.toArray()
            } : i && i.isMatrix4 ? e.uniforms[n] = {
               type: "m4",
               value: i.toArray()
            } : e.uniforms[n] = {
               value: i
            }
         }
         Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
         const n = {};
         for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
         return Object.keys(n).length > 0 && (e.extensions = n), e
      }
   }
   class _n extends _e {
      constructor() {
         super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Xt, this.projectionMatrix = new Xt, this.projectionMatrixInverse = new Xt
      }
      copy(t, e) {
         return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
      }
      getWorldDirection(t) {
         this.updateWorldMatrix(!0, !1);
         const e = this.matrixWorld.elements;
         return t.set(-e[8], -e[9], -e[10]).normalize()
      }
      updateMatrixWorld(t) {
         super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
      }
      updateWorldMatrix(t, e) {
         super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
      }
      clone() {
         return (new this.constructor).copy(this)
      }
   }
   class vn extends _n {
      constructor(t = 50, e = 1, n = .1, i = 2e3) {
         super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
      }
      copy(t, e) {
         return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
      }
      setFocalLength(t) {
         const e = .5 * this.getFilmHeight() / t;
         this.fov = 2 * z * Math.atan(e), this.updateProjectionMatrix()
      }
      getFocalLength() {
         const t = Math.tan(.5 * I * this.fov);
         return .5 * this.getFilmHeight() / t
      }
      getEffectiveFOV() {
         return 2 * z * Math.atan(Math.tan(.5 * I * this.fov) / this.zoom)
      }
      getFilmWidth() {
         return this.filmGauge * Math.min(this.aspect, 1)
      }
      getFilmHeight() {
         return this.filmGauge / Math.max(this.aspect, 1)
      }
      setViewOffset(t, e, n, i, r, a) {
         this.aspect = t / e, null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
         }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
      }
      clearViewOffset() {
         null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
      }
      updateProjectionMatrix() {
         const t = this.near;
         let e = t * Math.tan(.5 * I * this.fov) / this.zoom,
            n = 2 * e,
            i = this.aspect * n,
            r = -.5 * i;
         const a = this.view;
         if (null !== this.view && this.view.enabled) {
            const t = a.fullWidth,
               s = a.fullHeight;
            r += a.offsetX * i / t, e -= a.offsetY * n / s, i *= a.width / t, n *= a.height / s
         }
         const s = this.filmOffset;
         0 !== s && (r += t * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
      }
      toJSON(t) {
         const e = super.toJSON(t);
         return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
      }
   }
   const xn = 90;
   class yn extends _e {
      constructor(t, e, n) {
         super(), this.type = "CubeCamera", this.renderTarget = n;
         const i = new vn(xn, 1, t, e);
         i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new mt(1, 0, 0)), this.add(i);
         const r = new vn(xn, 1, t, e);
         r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new mt(-1, 0, 0)), this.add(r);
         const a = new vn(xn, 1, t, e);
         a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new mt(0, 1, 0)), this.add(a);
         const s = new vn(xn, 1, t, e);
         s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(new mt(0, -1, 0)), this.add(s);
         const o = new vn(xn, 1, t, e);
         o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new mt(0, 0, 1)), this.add(o);
         const l = new vn(xn, 1, t, e);
         l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new mt(0, 0, -1)), this.add(l)
      }
      update(t, e) {
         null === this.parent && this.updateMatrixWorld();
         const n = this.renderTarget,
            [i, r, a, s, o, l] = this.children,
            c = t.getRenderTarget(),
            u = t.toneMapping,
            h = t.xr.enabled;
         t.toneMapping = 0, t.xr.enabled = !1;
         const d = n.texture.generateMipmaps;
         n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, a), t.setRenderTarget(n, 3), t.render(e, s), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = d, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(c), t.toneMapping = u, t.xr.enabled = h, n.texture.needsPMREMUpdate = !0
      }
   }
   class bn extends ct {
      constructor(t, n, i, r, a, s, o, l, c, u) {
         super(t = void 0 !== t ? t : [], n = void 0 !== n ? n : e, i, r, a, s, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1
      }
      get images() {
         return this.image
      }
      set images(t) {
         this.image = t
      }
   }
   class Mn extends ht {
      constructor(t, e = {}) {
         super(t, t, e), this.isWebGLCubeRenderTarget = !0;
         const n = {
               width: t,
               height: t,
               depth: 1
            },
            i = [n, n, n, n, n, n];
         this.texture = new bn(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : l
      }
      fromEquirectangularTexture(t, e) {
         this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
         const n = {
               tEquirect: {
                  value: null
               }
            },
            i = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
            r = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
            a = new dn(5, 5, 5),
            s = new gn({
               name: "CubemapFromEquirect",
               uniforms: pn(n),
               vertexShader: i,
               fragmentShader: r,
               side: 1,
               blending: 0
            });
         s.uniforms.tEquirect.value = e;
         const o = new un(a, s),
            u = e.minFilter;
         return e.minFilter === c && (e.minFilter = l), new yn(1, 10, this).update(t, o), e.minFilter = u, o.geometry.dispose(), o.material.dispose(), this
      }
      clear(t, e, n, i) {
         const r = t.getRenderTarget();
         for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
         t.setRenderTarget(r)
      }
   }
   const Sn = new mt,
      wn = new mt,
      Tn = new W;
   class En {
      constructor(t = new mt(1, 0, 0), e = 0) {
         this.isPlane = !0, this.normal = t, this.constant = e
      }
      set(t, e) {
         return this.normal.copy(t), this.constant = e, this
      }
      setComponents(t, e, n, i) {
         return this.normal.set(t, e, n), this.constant = i, this
      }
      setFromNormalAndCoplanarPoint(t, e) {
         return this.normal.copy(t), this.constant = -e.dot(this.normal), this
      }
      setFromCoplanarPoints(t, e, n) {
         const i = Sn.subVectors(n, e).cross(wn.subVectors(t, e)).normalize();
         return this.setFromNormalAndCoplanarPoint(i, t), this
      }
      copy(t) {
         return this.normal.copy(t.normal), this.constant = t.constant, this
      }
      normalize() {
         const t = 1 / this.normal.length();
         return this.normal.multiplyScalar(t), this.constant *= t, this
      }
      negate() {
         return this.constant *= -1, this.normal.negate(), this
      }
      distanceToPoint(t) {
         return this.normal.dot(t) + this.constant
      }
      distanceToSphere(t) {
         return this.distanceToPoint(t.center) - t.radius
      }
      projectPoint(t, e) {
         return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
      }
      intersectLine(t, e) {
         const n = t.delta(Sn),
            i = this.normal.dot(n);
         if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
         const r = -(t.start.dot(this.normal) + this.constant) / i;
         return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start)
      }
      intersectsLine(t) {
         const e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
         return e < 0 && n > 0 || n < 0 && e > 0
      }
      intersectsBox(t) {
         return t.intersectsPlane(this)
      }
      intersectsSphere(t) {
         return t.intersectsPlane(this)
      }
      coplanarPoint(t) {
         return t.copy(this.normal).multiplyScalar(-this.constant)
      }
      applyMatrix4(t, e) {
         const n = e || Tn.getNormalMatrix(t),
            i = this.coplanarPoint(Sn).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
         return this.constant = -i.dot(r), this
      }
      translate(t) {
         return this.constant -= t.dot(this.normal), this
      }
      equals(t) {
         return t.normal.equals(this.normal) && t.constant === this.constant
      }
      clone() {
         return (new this.constructor).copy(this)
      }
   }
   const An = new Ut,
      Cn = new mt;
   class Ln {
      constructor(t = new En, e = new En, n = new En, i = new En, r = new En, a = new En) {
         this.planes = [t, e, n, i, r, a]
      }
      set(t, e, n, i, r, a) {
         const s = this.planes;
         return s[0].copy(t), s[1].copy(e), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(a), this
      }
      copy(t) {
         const e = this.planes;
         for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
         return this
      }
      setFromProjectionMatrix(t) {
         const e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            a = n[2],
            s = n[3],
            o = n[4],
            l = n[5],
            c = n[6],
            u = n[7],
            h = n[8],
            d = n[9],
            p = n[10],
            f = n[11],
            m = n[12],
            g = n[13],
            _ = n[14],
            v = n[15];
         return e[0].setComponents(s - i, u - o, f - h, v - m).normalize(), e[1].setComponents(s + i, u + o, f + h, v + m).normalize(), e[2].setComponents(s + r, u + l, f + d, v + g).normalize(), e[3].setComponents(s - r, u - l, f - d, v - g).normalize(), e[4].setComponents(s - a, u - c, f - p, v - _).normalize(), e[5].setComponents(s + a, u + c, f + p, v + _).normalize(), this
      }
      intersectsObject(t) {
         const e = t.geometry;
         return null === e.boundingSphere && e.computeBoundingSphere(), An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(An)
      }
      intersectsSprite(t) {
         return An.center.set(0, 0, 0), An.radius = .7071067811865476, An.applyMatrix4(t.matrixWorld), this.intersectsSphere(An)
      }
      intersectsSphere(t) {
         const e = this.planes,
            n = t.center,
            i = -t.radius;
         for (let t = 0; t < 6; t++)
            if (e[t].distanceToPoint(n) < i) return !1;
         return !0
      }
      intersectsBox(t) {
         const e = this.planes;
         for (let n = 0; n < 6; n++) {
            const i = e[n];
            if (Cn.x = i.normal.x > 0 ? t.max.x : t.min.x, Cn.y = i.normal.y > 0 ? t.max.y : t.min.y, Cn.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Cn) < 0) return !1
         }
         return !0
      }
      containsPoint(t) {
         const e = this.planes;
         for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0) return !1;
         return !0
      }
      clone() {
         return (new this.constructor).copy(this)
      }
   }

   function Pn() {
      let t = null,
         e = !1,
         n = null,
         i = null;

      function r(e, a) {
         n(e, a), i = t.requestAnimationFrame(r)
      }
      return {
         start: function() {
            !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0)
         },
         stop: function() {
            t.cancelAnimationFrame(i), e = !1
         },
         setAnimationLoop: function(t) {
            n = t
         },
         setContext: function(e) {
            t = e
         }
      }
   }

   function Rn(t, e) {
      const n = e.isWebGL2,
         i = new WeakMap;
      return {
         get: function(t) {
            return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
         },
         remove: function(e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            const n = i.get(e);
            n && (t.deleteBuffer(n.buffer), i.delete(e))
         },
         update: function(e, r) {
            if (e.isGLBufferAttribute) {
               const t = i.get(e);
               return void((!t || t.version < e.version) && i.set(e, {
                  buffer: e.buffer,
                  type: e.type,
                  bytesPerElement: e.elementSize,
                  version: e.version
               }))
            }
            e.isInterleavedBufferAttribute && (e = e.data);
            const a = i.get(e);
            void 0 === a ? i.set(e, function(e, i) {
               const r = e.array,
                  a = e.usage,
                  s = t.createBuffer();
               let o;
               if (t.bindBuffer(i, s), t.bufferData(i, r, a), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
               else if (r instanceof Uint16Array)
                  if (e.isFloat16BufferAttribute) {
                     if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                     o = 5131
                  } else o = 5123;
               else if (r instanceof Int16Array) o = 5122;
               else if (r instanceof Uint32Array) o = 5125;
               else if (r instanceof Int32Array) o = 5124;
               else if (r instanceof Int8Array) o = 5120;
               else if (r instanceof Uint8Array) o = 5121;
               else {
                  if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                  o = 5121
               }
               return {
                  buffer: s,
                  type: o,
                  bytesPerElement: r.BYTES_PER_ELEMENT,
                  version: e.version
               }
            }(e, r)) : a.version < e.version && (function(e, i, r) {
               const a = i.array,
                  s = i.updateRange;
               t.bindBuffer(r, e), -1 === s.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)), s.count = -1)
            }(a.buffer, e, r), a.version = e.version)
         }
      }
   }
   class Dn extends je {
      constructor(t = 1, e = 1, n = 1, i = 1) {
         super(), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
         };
         const r = t / 2,
            a = e / 2,
            s = Math.floor(n),
            o = Math.floor(i),
            l = s + 1,
            c = o + 1,
            u = t / s,
            h = e / o,
            d = [],
            p = [],
            f = [],
            m = [];
         for (let t = 0; t < c; t++) {
            const e = t * h - a;
            for (let n = 0; n < l; n++) {
               const i = n * u - r;
               p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - t / o)
            }
         }
         for (let t = 0; t < o; t++)
            for (let e = 0; e < s; e++) {
               const n = e + l * t,
                  i = e + l * (t + 1),
                  r = e + 1 + l * (t + 1),
                  a = e + 1 + l * t;
               d.push(n, i, a), d.push(i, r, a)
            }
         this.setIndex(d), this.setAttribute("position", new Ue(p, 3)), this.setAttribute("normal", new Ue(f, 3)), this.setAttribute("uv", new Ue(m, 2))
      }
      static fromJSON(t) {
         return new Dn(t.width, t.height, t.widthSegments, t.heightSegments)
      }
   }
   const On = {
         alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
         alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
         alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
         alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
         aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
         aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
         begin_vertex: "vec3 transformed = vec3( position );",
         beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
         bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
         iridescence_fragment: "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
         bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
         clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
         clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
         clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
         clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
         color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
         color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
         color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
         color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
         common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
         cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
         defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
         displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
         displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
         emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
         emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
         encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
         encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
         envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
         envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
         envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
         envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
         envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
         envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
         fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
         fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
         fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
         fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
         gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
         lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
         lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
         lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
         lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert\n#define Material_LightProbeLOD( material )\t(0)",
         lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
         lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
         lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
         lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
         lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
         lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
         lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
         lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
         lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
         lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
         logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
         logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
         logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
         logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
         map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
         map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
         map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
         map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
         metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
         metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
         morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
         morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
         morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
         morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
         normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
         normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
         normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
         normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
         normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
         normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
         clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
         clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
         clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
         iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
         output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
         packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
         premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
         project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
         dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
         dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
         roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
         roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
         shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
         shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
         shadowmap_vertex: "#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
         shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
         skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
         skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
         skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
         skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
         specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
         specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
         tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
         tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
         transmission_fragment: "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",
         transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
         uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
         uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
         uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
         uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
         uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
         uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
         worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
         background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
         background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
         cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
         cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
         depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
         depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
         distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
         distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
         equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
         equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
         linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
         linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
         meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
         meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
         meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
         meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
         meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
         meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
         meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
         meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
         meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
         meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
         meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
         meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
         meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
         meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
         points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
         points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
         shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
         shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
         sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
         sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"
      },
      In = {
         common: {
            diffuse: {
               value: new it(16777215)
            },
            opacity: {
               value: 1
            },
            map: {
               value: null
            },
            uvTransform: {
               value: new W
            },
            uv2Transform: {
               value: new W
            },
            alphaMap: {
               value: null
            },
            alphaTest: {
               value: 0
            }
         },
         specularmap: {
            specularMap: {
               value: null
            }
         },
         envmap: {
            envMap: {
               value: null
            },
            flipEnvMap: {
               value: -1
            },
            reflectivity: {
               value: 1
            },
            ior: {
               value: 1.5
            },
            refractionRatio: {
               value: .98
            }
         },
         aomap: {
            aoMap: {
               value: null
            },
            aoMapIntensity: {
               value: 1
            }
         },
         lightmap: {
            lightMap: {
               value: null
            },
            lightMapIntensity: {
               value: 1
            }
         },
         emissivemap: {
            emissiveMap: {
               value: null
            }
         },
         bumpmap: {
            bumpMap: {
               value: null
            },
            bumpScale: {
               value: 1
            }
         },
         normalmap: {
            normalMap: {
               value: null
            },
            normalScale: {
               value: new G(1, 1)
            }
         },
         displacementmap: {
            displacementMap: {
               value: null
            },
            displacementScale: {
               value: 1
            },
            displacementBias: {
               value: 0
            }
         },
         roughnessmap: {
            roughnessMap: {
               value: null
            }
         },
         metalnessmap: {
            metalnessMap: {
               value: null
            }
         },
         gradientmap: {
            gradientMap: {
               value: null
            }
         },
         fog: {
            fogDensity: {
               value: 25e-5
            },
            fogNear: {
               value: 1
            },
            fogFar: {
               value: 2e3
            },
            fogColor: {
               value: new it(16777215)
            }
         },
         lights: {
            ambientLightColor: {
               value: []
            },
            lightProbe: {
               value: []
            },
            directionalLights: {
               value: [],
               properties: {
                  direction: {},
                  color: {}
               }
            },
            directionalLightShadows: {
               value: [],
               properties: {
                  shadowBias: {},
                  shadowNormalBias: {},
                  shadowRadius: {},
                  shadowMapSize: {}
               }
            },
            directionalShadowMap: {
               value: []
            },
            directionalShadowMatrix: {
               value: []
            },
            spotLights: {
               value: [],
               properties: {
                  color: {},
                  position: {},
                  direction: {},
                  distance: {},
                  coneCos: {},
                  penumbraCos: {},
                  decay: {}
               }
            },
            spotLightShadows: {
               value: [],
               properties: {
                  shadowBias: {},
                  shadowNormalBias: {},
                  shadowRadius: {},
                  shadowMapSize: {}
               }
            },
            spotLightMap: {
               value: []
            },
            spotShadowMap: {
               value: []
            },
            spotLightMatrix: {
               value: []
            },
            pointLights: {
               value: [],
               properties: {
                  color: {},
                  position: {},
                  decay: {},
                  distance: {}
               }
            },
            pointLightShadows: {
               value: [],
               properties: {
                  shadowBias: {},
                  shadowNormalBias: {},
                  shadowRadius: {},
                  shadowMapSize: {},
                  shadowCameraNear: {},
                  shadowCameraFar: {}
               }
            },
            pointShadowMap: {
               value: []
            },
            pointShadowMatrix: {
               value: []
            },
            hemisphereLights: {
               value: [],
               properties: {
                  direction: {},
                  skyColor: {},
                  groundColor: {}
               }
            },
            rectAreaLights: {
               value: [],
               properties: {
                  color: {},
                  position: {},
                  width: {},
                  height: {}
               }
            },
            ltc_1: {
               value: null
            },
            ltc_2: {
               value: null
            }
         },
         points: {
            diffuse: {
               value: new it(16777215)
            },
            opacity: {
               value: 1
            },
            size: {
               value: 1
            },
            scale: {
               value: 1
            },
            map: {
               value: null
            },
            alphaMap: {
               value: null
            },
            alphaTest: {
               value: 0
            },
            uvTransform: {
               value: new W
            }
         },
         sprite: {
            diffuse: {
               value: new it(16777215)
            },
            opacity: {
               value: 1
            },
            center: {
               value: new G(.5, .5)
            },
            rotation: {
               value: 0
            },
            map: {
               value: null
            },
            alphaMap: {
               value: null
            },
            alphaTest: {
               value: 0
            },
            uvTransform: {
               value: new W
            }
         }
      },
      zn = {
         basic: {
            uniforms: fn([In.common, In.specularmap, In.envmap, In.aomap, In.lightmap, In.fog]),
            vertexShader: On.meshbasic_vert,
            fragmentShader: On.meshbasic_frag
         },
         lambert: {
            uniforms: fn([In.common, In.specularmap, In.envmap, In.aomap, In.lightmap, In.emissivemap, In.bumpmap, In.normalmap, In.displacementmap, In.fog, In.lights, {
               emissive: {
                  value: new it(0)
               }
            }]),
            vertexShader: On.meshlambert_vert,
            fragmentShader: On.meshlambert_frag
         },
         phong: {
            uniforms: fn([In.common, In.specularmap, In.envmap, In.aomap, In.lightmap, In.emissivemap, In.bumpmap, In.normalmap, In.displacementmap, In.fog, In.lights, {
               emissive: {
                  value: new it(0)
               },
               specular: {
                  value: new it(1118481)
               },
               shininess: {
                  value: 30
               }
            }]),
            vertexShader: On.meshphong_vert,
            fragmentShader: On.meshphong_frag
         },
         standard: {
            uniforms: fn([In.common, In.envmap, In.aomap, In.lightmap, In.emissivemap, In.bumpmap, In.normalmap, In.displacementmap, In.roughnessmap, In.metalnessmap, In.fog, In.lights, {
               emissive: {
                  value: new it(0)
               },
               roughness: {
                  value: 1
               },
               metalness: {
                  value: 0
               },
               envMapIntensity: {
                  value: 1
               }
            }]),
            vertexShader: On.meshphysical_vert,
            fragmentShader: On.meshphysical_frag
         },
         toon: {
            uniforms: fn([In.common, In.aomap, In.lightmap, In.emissivemap, In.bumpmap, In.normalmap, In.displacementmap, In.gradientmap, In.fog, In.lights, {
               emissive: {
                  value: new it(0)
               }
            }]),
            vertexShader: On.meshtoon_vert,
            fragmentShader: On.meshtoon_frag
         },
         matcap: {
            uniforms: fn([In.common, In.bumpmap, In.normalmap, In.displacementmap, In.fog, {
               matcap: {
                  value: null
               }
            }]),
            vertexShader: On.meshmatcap_vert,
            fragmentShader: On.meshmatcap_frag
         },
         points: {
            uniforms: fn([In.points, In.fog]),
            vertexShader: On.points_vert,
            fragmentShader: On.points_frag
         },
         dashed: {
            uniforms: fn([In.common, In.fog, {
               scale: {
                  value: 1
               },
               dashSize: {
                  value: 1
               },
               totalSize: {
                  value: 2
               }
            }]),
            vertexShader: On.linedashed_vert,
            fragmentShader: On.linedashed_frag
         },
         depth: {
            uniforms: fn([In.common, In.displacementmap]),
            vertexShader: On.depth_vert,
            fragmentShader: On.depth_frag
         },
         normal: {
            uniforms: fn([In.common, In.bumpmap, In.normalmap, In.displacementmap, {
               opacity: {
                  value: 1
               }
            }]),
            vertexShader: On.meshnormal_vert,
            fragmentShader: On.meshnormal_frag
         },
         sprite: {
            uniforms: fn([In.sprite, In.fog]),
            vertexShader: On.sprite_vert,
            fragmentShader: On.sprite_frag
         },
         background: {
            uniforms: {
               uvTransform: {
                  value: new W
               },
               t2D: {
                  value: null
               }
            },
            vertexShader: On.background_vert,
            fragmentShader: On.background_frag
         },
         cube: {
            uniforms: fn([In.envmap, {
               opacity: {
                  value: 1
               }
            }]),
            vertexShader: On.cube_vert,
            fragmentShader: On.cube_frag
         },
         equirect: {
            uniforms: {
               tEquirect: {
                  value: null
               }
            },
            vertexShader: On.equirect_vert,
            fragmentShader: On.equirect_frag
         },
         distanceRGBA: {
            uniforms: fn([In.common, In.displacementmap, {
               referencePosition: {
                  value: new mt
               },
               nearDistance: {
                  value: 1
               },
               farDistance: {
                  value: 1e3
               }
            }]),
            vertexShader: On.distanceRGBA_vert,
            fragmentShader: On.distanceRGBA_frag
         },
         shadow: {
            uniforms: fn([In.lights, In.fog, {
               color: {
                  value: new it(0)
               },
               opacity: {
                  value: 1
               }
            }]),
            vertexShader: On.shadow_vert,
            fragmentShader: On.shadow_frag
         }
      };

   function Nn(t, e, n, r, a, s) {
      const o = new it(0);
      let l, c, u = !0 === a ? 0 : 1,
         h = null,
         d = 0,
         p = null;

      function f(t, e) {
         n.buffers.color.setClear(t.r, t.g, t.b, e, s)
      }
      return {
         getClearColor: function() {
            return o
         },
         setClearColor: function(t, e = 1) {
            o.set(t), u = e, f(o, u)
         },
         getClearAlpha: function() {
            return u
         },
         setClearAlpha: function(t) {
            u = t, f(o, u)
         },
         render: function(n, a) {
            let s = !1,
               m = !0 === a.isScene ? a.background : null;
            m && m.isTexture && (m = e.get(m));
            const g = t.xr,
               _ = g.getSession && g.getSession();
            _ && "additive" === _.environmentBlendMode && (m = null), null === m ? f(o, u) : m && m.isColor && (f(m, 1), s = !0), (t.autoClear || s) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.mapping === i) ? (void 0 === c && (c = new un(new dn(1, 1, 1), new gn({
               name: "BackgroundCubeMaterial",
               uniforms: pn(zn.cube.uniforms),
               vertexShader: zn.cube.vertexShader,
               fragmentShader: zn.cube.fragmentShader,
               side: 1,
               depthTest: !1,
               depthWrite: !1,
               fog: !1
            })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(t, e, n) {
               this.matrixWorld.copyPosition(n.matrixWorld)
            }, Object.defineProperty(c.material, "envMap", {
               get: function() {
                  return this.uniforms.envMap.value
               }
            }), r.update(c)), c.material.uniforms.envMap.value = m, c.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1, h === m && d === m.version && p === t.toneMapping || (c.material.needsUpdate = !0, h = m, d = m.version, p = t.toneMapping), c.layers.enableAll(), n.unshift(c, c.geometry, c.material, 0, 0, null)) : m && m.isTexture && (void 0 === l && (l = new un(new Dn(2, 2), new gn({
               name: "BackgroundMaterial",
               uniforms: pn(zn.background.uniforms),
               vertexShader: zn.background.vertexShader,
               fragmentShader: zn.background.fragmentShader,
               side: 0,
               depthTest: !1,
               depthWrite: !1,
               fog: !1
            })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
               get: function() {
                  return this.uniforms.t2D.value
               }
            }), r.update(l)), l.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), l.material.uniforms.uvTransform.value.copy(m.matrix), h === m && d === m.version && p === t.toneMapping || (l.material.needsUpdate = !0, h = m, d = m.version, p = t.toneMapping), l.layers.enableAll(), n.unshift(l, l.geometry, l.material, 0, 0, null))
         }
      }
   }

   function Un(t, e, n, i) {
      const r = t.getParameter(34921),
         a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
         s = i.isWebGL2 || null !== a,
         o = {},
         l = p(null);
      let c = l,
         u = !1;

      function h(e) {
         return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e)
      }

      function d(e) {
         return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e)
      }

      function p(t) {
         const e = [],
            n = [],
            i = [];
         for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0;
         return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: e,
            enabledAttributes: n,
            attributeDivisors: i,
            object: t,
            attributes: {},
            index: null
         }
      }

      function f() {
         const t = c.newAttributes;
         for (let e = 0, n = t.length; e < n; e++) t[e] = 0
      }

      function m(t) {
         g(t, 0)
      }

      function g(n, r) {
         const a = c.newAttributes,
            s = c.enabledAttributes,
            o = c.attributeDivisors;
         a[n] = 1, 0 === s[n] && (t.enableVertexAttribArray(n), s[n] = 1), o[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r)
      }

      function _() {
         const e = c.newAttributes,
            n = c.enabledAttributes;
         for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0)
      }

      function v(e, n, r, a, s, o) {
         !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, a, s, o) : t.vertexAttribIPointer(e, n, r, s, o)
      }

      function x() {
         y(), u = !0, c !== l && (c = l, h(c.object))
      }

      function y() {
         l.geometry = null, l.program = null, l.wireframe = !1
      }
      return {
         setup: function(r, l, d, x, y) {
            let b = !1;
            if (s) {
               const e = function(e, n, r) {
                  const s = !0 === r.wireframe;
                  let l = o[e.id];
                  void 0 === l && (l = {}, o[e.id] = l);
                  let c = l[n.id];
                  void 0 === c && (c = {}, l[n.id] = c);
                  let u = c[s];
                  return void 0 === u && (u = p(i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()), c[s] = u), u
               }(x, d, l);
               c !== e && (c = e, h(c.object)), b = function(t, e, n, i) {
                  const r = c.attributes,
                     a = e.attributes;
                  let s = 0;
                  const o = n.getAttributes();
                  for (const e in o)
                     if (o[e].location >= 0) {
                        const n = r[e];
                        let i = a[e];
                        if (void 0 === i && ("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (i = t.instanceColor)), void 0 === n) return !0;
                        if (n.attribute !== i) return !0;
                        if (i && n.data !== i.data) return !0;
                        s++
                     } return c.attributesNum !== s || c.index !== i
               }(r, x, d, y), b && function(t, e, n, i) {
                  const r = {},
                     a = e.attributes;
                  let s = 0;
                  const o = n.getAttributes();
                  for (const e in o)
                     if (o[e].location >= 0) {
                        let n = a[e];
                        void 0 === n && ("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (n = t.instanceColor));
                        const i = {};
                        i.attribute = n, n && n.data && (i.data = n.data), r[e] = i, s++
                     } c.attributes = r, c.attributesNum = s, c.index = i
               }(r, x, d, y)
            } else {
               const t = !0 === l.wireframe;
               c.geometry === x.id && c.program === d.id && c.wireframe === t || (c.geometry = x.id, c.program = d.id, c.wireframe = t, b = !0)
            }
            null !== y && n.update(y, 34963), (b || u) && (u = !1, function(r, a, s, o) {
               if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
               f();
               const l = o.attributes,
                  c = s.getAttributes(),
                  u = a.defaultAttributeValues;
               for (const e in c) {
                  const i = c[e];
                  if (i.location >= 0) {
                     let a = l[e];
                     if (void 0 === a && ("instanceMatrix" === e && r.instanceMatrix && (a = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (a = r.instanceColor)), void 0 !== a) {
                        const e = a.normalized,
                           s = a.itemSize,
                           l = n.get(a);
                        if (void 0 === l) continue;
                        const c = l.buffer,
                           u = l.type,
                           h = l.bytesPerElement;
                        if (a.isInterleavedBufferAttribute) {
                           const n = a.data,
                              l = n.stride,
                              d = a.offset;
                           if (n.isInstancedInterleavedBuffer) {
                              for (let t = 0; t < i.locationSize; t++) g(i.location + t, n.meshPerAttribute);
                              !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
                           } else
                              for (let t = 0; t < i.locationSize; t++) m(i.location + t);
                           t.bindBuffer(34962, c);
                           for (let t = 0; t < i.locationSize; t++) v(i.location + t, s / i.locationSize, u, e, l * h, (d + s / i.locationSize * t) * h)
                        } else {
                           if (a.isInstancedBufferAttribute) {
                              for (let t = 0; t < i.locationSize; t++) g(i.location + t, a.meshPerAttribute);
                              !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count)
                           } else
                              for (let t = 0; t < i.locationSize; t++) m(i.location + t);
                           t.bindBuffer(34962, c);
                           for (let t = 0; t < i.locationSize; t++) v(i.location + t, s / i.locationSize, u, e, s * h, s / i.locationSize * t * h)
                        }
                     } else if (void 0 !== u) {
                        const n = u[e];
                        if (void 0 !== n) switch (n.length) {
                           case 2:
                              t.vertexAttrib2fv(i.location, n);
                              break;
                           case 3:
                              t.vertexAttrib3fv(i.location, n);
                              break;
                           case 4:
                              t.vertexAttrib4fv(i.location, n);
                              break;
                           default:
                              t.vertexAttrib1fv(i.location, n)
                        }
                     }
                  }
               }
               _()
            }(r, l, d, x), null !== y && t.bindBuffer(34963, n.get(y).buffer))
         },
         reset: x,
         resetDefaultState: y,
         dispose: function() {
            x();
            for (const t in o) {
               const e = o[t];
               for (const t in e) {
                  const n = e[t];
                  for (const t in n) d(n[t].object), delete n[t];
                  delete e[t]
               }
               delete o[t]
            }
         },
         releaseStatesOfGeometry: function(t) {
            if (void 0 === o[t.id]) return;
            const e = o[t.id];
            for (const t in e) {
               const n = e[t];
               for (const t in n) d(n[t].object), delete n[t];
               delete e[t]
            }
            delete o[t.id]
         },
         releaseStatesOfProgram: function(t) {
            for (const e in o) {
               const n = o[e];
               if (void 0 === n[t.id]) continue;
               const i = n[t.id];
               for (const t in i) d(i[t].object), delete i[t];
               delete n[t.id]
            }
         },
         initAttributes: f,
         enableAttribute: m,
         disableUnusedAttributes: _
      }
   }

   function Fn(t, e, n, i) {
      const r = i.isWebGL2;
      let a;
      this.setMode = function(t) {
         a = t
      }, this.render = function(e, i) {
         t.drawArrays(a, e, i), n.update(i, a, 1)
      }, this.renderInstances = function(i, s, o) {
         if (0 === o) return;
         let l, c;
         if (r) l = t, c = "drawArraysInstanced";
         else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
         l[c](a, i, s, o), n.update(s, a, o)
      }
   }

   function kn(t, e, n) {
      let i;

      function r(e) {
         if ("highp" === e) {
            if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            e = "mediump"
         }
         return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
      }
      const a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
      let s = void 0 !== n.precision ? n.precision : "highp";
      const o = r(s);
      o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), s = o);
      const l = a || e.has("WEBGL_draw_buffers"),
         c = !0 === n.logarithmicDepthBuffer,
         u = t.getParameter(34930),
         h = t.getParameter(35660),
         d = t.getParameter(3379),
         p = t.getParameter(34076),
         f = t.getParameter(34921),
         m = t.getParameter(36347),
         g = t.getParameter(36348),
         _ = t.getParameter(36349),
         v = h > 0,
         x = a || e.has("OES_texture_float");
      return {
         isWebGL2: a,
         drawBuffers: l,
         getMaxAnisotropy: function() {
            if (void 0 !== i) return i;
            if (!0 === e.has("EXT_texture_filter_anisotropic")) {
               const n = e.get("EXT_texture_filter_anisotropic");
               i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else i = 0;
            return i
         },
         getMaxPrecision: r,
         precision: s,
         logarithmicDepthBuffer: c,
         maxTextures: u,
         maxVertexTextures: h,
         maxTextureSize: d,
         maxCubemapSize: p,
         maxAttributes: f,
         maxVertexUniforms: m,
         maxVaryings: g,
         maxFragmentUniforms: _,
         vertexTextures: v,
         floatFragmentTextures: x,
         floatVertexTextures: v && x,
         maxSamples: a ? t.getParameter(36183) : 0
      }
   }

   function Hn(t) {
      const e = this;
      let n = null,
         i = 0,
         r = !1,
         a = !1;
      const s = new En,
         o = new W,
         l = {
            value: null,
            needsUpdate: !1
         };

      function c() {
         l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0
      }

      function u(t, n, i, r) {
         const a = null !== t ? t.length : 0;
         let c = null;
         if (0 !== a) {
            if (c = l.value, !0 !== r || null === c) {
               const e = i + 4 * a,
                  r = n.matrixWorldInverse;
               o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
               for (let e = 0, n = i; e !== a; ++e, n += 4) s.copy(t[e]).applyMatrix4(r, o), s.normal.toArray(c, n), c[n + 3] = s.constant
            }
            l.value = c, l.needsUpdate = !0
         }
         return e.numPlanes = a, e.numIntersection = 0, c
      }
      this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, a) {
         const s = 0 !== t.length || e || 0 !== i || r;
         return r = e, n = u(t, a, 0), i = t.length, s
      }, this.beginShadows = function() {
         a = !0, u(null)
      }, this.endShadows = function() {
         a = !1, c()
      }, this.setState = function(e, s, o) {
         const h = e.clippingPlanes,
            d = e.clipIntersection,
            p = e.clipShadows,
            f = t.get(e);
         if (!r || null === h || 0 === h.length || a && !p) a ? u(null) : c();
         else {
            const t = a ? 0 : i,
               e = 4 * t;
            let r = f.clippingState || null;
            l.value = r, r = u(h, s, e, o);
            for (let t = 0; t !== e; ++t) r[t] = n[t];
            f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
         }
      }
   }

   function Bn(t) {
      let i = new WeakMap;

      function r(t, i) {
         return 303 === i ? t.mapping = e : 304 === i && (t.mapping = n), t
      }

      function a(t) {
         const e = t.target;
         e.removeEventListener("dispose", a);
         const n = i.get(e);
         void 0 !== n && (i.delete(e), n.dispose())
      }
      return {
         get: function(e) {
            if (e && e.isTexture && !1 === e.isRenderTargetTexture) {
               const n = e.mapping;
               if (303 === n || 304 === n) {
                  if (i.has(e)) return r(i.get(e).texture, e.mapping); {
                     const n = e.image;
                     if (n && n.height > 0) {
                        const s = new Mn(n.height / 2);
                        return s.fromEquirectangularTexture(t, e), i.set(e, s), e.addEventListener("dispose", a), r(s.texture, e.mapping)
                     }
                     return null
                  }
               }
            }
            return e
         },
         dispose: function() {
            i = new WeakMap
         }
      }
   }
   zn.physical = {
      uniforms: fn([zn.standard.uniforms, {
         clearcoat: {
            value: 0
         },
         clearcoatMap: {
            value: null
         },
         clearcoatRoughness: {
            value: 0
         },
         clearcoatRoughnessMap: {
            value: null
         },
         clearcoatNormalScale: {
            value: new G(1, 1)
         },
         clearcoatNormalMap: {
            value: null
         },
         iridescence: {
            value: 0
         },
         iridescenceMap: {
            value: null
         },
         iridescenceIOR: {
            value: 1.3
         },
         iridescenceThicknessMinimum: {
            value: 100
         },
         iridescenceThicknessMaximum: {
            value: 400
         },
         iridescenceThicknessMap: {
            value: null
         },
         sheen: {
            value: 0
         },
         sheenColor: {
            value: new it(0)
         },
         sheenColorMap: {
            value: null
         },
         sheenRoughness: {
            value: 1
         },
         sheenRoughnessMap: {
            value: null
         },
         transmission: {
            value: 0
         },
         transmissionMap: {
            value: null
         },
         transmissionSamplerSize: {
            value: new G
         },
         transmissionSamplerMap: {
            value: null
         },
         thickness: {
            value: 0
         },
         thicknessMap: {
            value: null
         },
         attenuationDistance: {
            value: 0
         },
         attenuationColor: {
            value: new it(0)
         },
         specularIntensity: {
            value: 1
         },
         specularIntensityMap: {
            value: null
         },
         specularColor: {
            value: new it(1, 1, 1)
         },
         specularColorMap: {
            value: null
         }
      }]),
      vertexShader: On.meshphysical_vert,
      fragmentShader: On.meshphysical_frag
   };
   class Vn extends _n {
      constructor(t = -1, e = 1, n = 1, i = -1, r = .1, a = 2e3) {
         super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix()
      }
      copy(t, e) {
         return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
      }
      setViewOffset(t, e, n, i, r, a) {
         null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
         }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
      }
      clearViewOffset() {
         null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
      }
      updateProjectionMatrix() {
         const t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
         let r = n - t,
            a = n + t,
            s = i + e,
            o = i - e;
         if (null !== this.view && this.view.enabled) {
            const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
               e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += t * this.view.offsetX, a = r + t * this.view.width, s -= e * this.view.offsetY, o = s - e * this.view.height
         }
         this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
      }
      toJSON(t) {
         const e = super.toJSON(t);
         return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
      }
   }
   const Gn = [.125, .215, .35, .446, .526, .582],
      Wn = new Vn,
      jn = new it;
   let Xn = null;
   const qn = (1 + Math.sqrt(5)) / 2,
      Yn = 1 / qn,
      Zn = [new mt(1, 1, 1), new mt(-1, 1, 1), new mt(1, 1, -1), new mt(-1, 1, -1), new mt(0, qn, Yn), new mt(0, qn, -Yn), new mt(Yn, 0, qn), new mt(-Yn, 0, qn), new mt(qn, Yn, 0), new mt(-qn, Yn, 0)];
   class Kn {
      constructor(t) {
         this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
      }
      fromScene(t, e = 0, n = .1, i = 100) {
         Xn = this._renderer.getRenderTarget(), this._setSize(256);
         const r = this._allocateTargets();
         return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r
      }
      fromEquirectangular(t, e = null) {
         return this._fromTexture(t, e)
      }
      fromCubemap(t, e = null) {
         return this._fromTexture(t, e)
      }
      compileCubemapShader() {
         null === this._cubemapMaterial && (this._cubemapMaterial = ti(), this._compileMaterial(this._cubemapMaterial))
      }
      compileEquirectangularShader() {
         null === this._equirectMaterial && (this._equirectMaterial = $n(), this._compileMaterial(this._equirectMaterial))
      }
      dispose() {
         this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
      }
      _setSize(t) {
         this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax)
      }
      _dispose() {
         null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
         for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose()
      }
      _cleanup(t) {
         this._renderer.setRenderTarget(Xn), t.scissorTest = !1, Qn(t, 0, 0, t.width, t.height)
      }
      _fromTexture(t, i) {
         t.mapping === e || t.mapping === n ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Xn = this._renderer.getRenderTarget();
         const r = i || this._allocateTargets();
         return this._textureToCubeUV(t, r), this._applyPMREM(r), this._cleanup(r), r
      }
      _allocateTargets() {
         const t = 3 * Math.max(this._cubeSize, 112),
            e = 4 * this._cubeSize,
            n = {
               magFilter: l,
               minFilter: l,
               generateMipmaps: !1,
               type: p,
               format: m,
               encoding: T,
               depthBuffer: !1
            },
            i = Jn(t, e, n);
         if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t) {
            null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Jn(t, e, n);
            const {
               _lodMax: i
            } = this;
            ({
               sizeLods: this._sizeLods,
               lodPlanes: this._lodPlanes,
               sigmas: this._sigmas
            } = function(t) {
               const e = [],
                  n = [],
                  i = [];
               let r = t;
               const a = t - 4 + 1 + Gn.length;
               for (let s = 0; s < a; s++) {
                  const a = Math.pow(2, r);
                  n.push(a);
                  let o = 1 / a;
                  s > t - 4 ? o = Gn[s - t + 4 - 1] : 0 === s && (o = 0), i.push(o);
                  const l = 1 / (a - 2),
                     c = -l,
                     u = 1 + l,
                     h = [c, c, u, c, u, u, c, c, u, u, c, u],
                     d = 6,
                     p = 6,
                     f = 3,
                     m = 2,
                     g = 1,
                     _ = new Float32Array(f * p * d),
                     v = new Float32Array(m * p * d),
                     x = new Float32Array(g * p * d);
                  for (let t = 0; t < d; t++) {
                     const e = t % 3 * 2 / 3 - 1,
                        n = t > 2 ? 0 : -1,
                        i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
                     _.set(i, f * p * t), v.set(h, m * p * t);
                     const r = [t, t, t, t, t, t];
                     x.set(r, g * p * t)
                  }
                  const y = new je;
                  y.setAttribute("position", new Ie(_, f)), y.setAttribute("uv", new Ie(v, m)), y.setAttribute("faceIndex", new Ie(x, g)), e.push(y), r > 4 && r--
               }
               return {
                  lodPlanes: e,
                  sizeLods: n,
                  sigmas: i
               }
            }(i)), this._blurMaterial = function(t, e, n) {
               const i = new Float32Array(20),
                  r = new mt(0, 1, 0);
               return new gn({
                  name: "SphericalGaussianBlur",
                  defines: {
                     n: 20,
                     CUBEUV_TEXEL_WIDTH: 1 / e,
                     CUBEUV_TEXEL_HEIGHT: 1 / n,
                     CUBEUV_MAX_MIP: `${t}.0`
                  },
                  uniforms: {
                     envMap: {
                        value: null
                     },
                     samples: {
                        value: 1
                     },
                     weights: {
                        value: i
                     },
                     latitudinal: {
                        value: !1
                     },
                     dTheta: {
                        value: 0
                     },
                     mipInt: {
                        value: 0
                     },
                     poleAxis: {
                        value: r
                     }
                  },
                  vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
                  fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                  blending: 0,
                  depthTest: !1,
                  depthWrite: !1
               })
            }(i, t, e)
         }
         return i
      }
      _compileMaterial(t) {
         const e = new un(this._lodPlanes[0], t);
         this._renderer.compile(e, Wn)
      }
      _sceneToCubeUV(t, e, n, i) {
         const r = new vn(90, 1, e, n),
            a = [1, -1, 1, 1, 1, 1],
            s = [1, 1, 1, -1, -1, -1],
            o = this._renderer,
            l = o.autoClear,
            c = o.toneMapping;
         o.getClearColor(jn), o.toneMapping = 0, o.autoClear = !1;
         const u = new Re({
               name: "PMREM.Background",
               side: 1,
               depthWrite: !1,
               depthTest: !1
            }),
            h = new un(new dn, u);
         let d = !1;
         const p = t.background;
         p ? p.isColor && (u.color.copy(p), t.background = null, d = !0) : (u.color.copy(jn), d = !0);
         for (let e = 0; e < 6; e++) {
            const n = e % 3;
            0 === n ? (r.up.set(0, a[e], 0), r.lookAt(s[e], 0, 0)) : 1 === n ? (r.up.set(0, 0, a[e]), r.lookAt(0, s[e], 0)) : (r.up.set(0, a[e], 0), r.lookAt(0, 0, s[e]));
            const l = this._cubeSize;
            Qn(i, n * l, e > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(h, r), o.render(t, r)
         }
         h.geometry.dispose(), h.material.dispose(), o.toneMapping = c, o.autoClear = l, t.background = p
      }
      _textureToCubeUV(t, i) {
         const r = this._renderer,
            a = t.mapping === e || t.mapping === n;
         a ? (null === this._cubemapMaterial && (this._cubemapMaterial = ti()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = $n());
         const s = a ? this._cubemapMaterial : this._equirectMaterial,
            o = new un(this._lodPlanes[0], s);
         s.uniforms.envMap.value = t;
         const l = this._cubeSize;
         Qn(i, 0, 0, 3 * l, 2 * l), r.setRenderTarget(i), r.render(o, Wn)
      }
      _applyPMREM(t) {
         const e = this._renderer,
            n = e.autoClear;
         e.autoClear = !1;
         for (let e = 1; e < this._lodPlanes.length; e++) {
            const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]),
               i = Zn[(e - 1) % Zn.length];
            this._blur(t, e - 1, e, n, i)
         }
         e.autoClear = n
      }
      _blur(t, e, n, i, r) {
         const a = this._pingPongRenderTarget;
         this._halfBlur(t, a, e, n, i, "latitudinal", r), this._halfBlur(a, t, n, n, i, "longitudinal", r)
      }
      _halfBlur(t, e, n, i, r, a, s) {
         const o = this._renderer,
            l = this._blurMaterial;
         "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
         const c = new un(this._lodPlanes[i], l),
            u = l.uniforms,
            h = this._sizeLods[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * h) : 2 * Math.PI / 39,
            p = r / d,
            f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
         f > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);
         const m = [];
         let g = 0;
         for (let t = 0; t < 20; ++t) {
            const e = t / p,
               n = Math.exp(-e * e / 2);
            m.push(n), 0 === t ? g += n : t < f && (g += 2 * n)
         }
         for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
         u.envMap.value = t.texture, u.samples.value = f, u.weights.value = m, u.latitudinal.value = "latitudinal" === a, s && (u.poleAxis.value = s);
         const {
            _lodMax: _
         } = this;
         u.dTheta.value = d, u.mipInt.value = _ - n;
         const v = this._sizeLods[i];
         Qn(e, 3 * v * (i > _ - 4 ? i - _ + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, Wn)
      }
   }

   function Jn(t, e, n) {
      const r = new ht(t, e, n);
      return r.texture.mapping = i, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r
   }

   function Qn(t, e, n, i, r) {
      t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r)
   }

   function $n() {
      return new gn({
         name: "EquirectangularToCubeUV",
         uniforms: {
            envMap: {
               value: null
            }
         },
         vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
         fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
         blending: 0,
         depthTest: !1,
         depthWrite: !1
      })
   }

   function ti() {
      return new gn({
         name: "CubemapToCubeUV",
         uniforms: {
            envMap: {
               value: null
            },
            flipEnvMap: {
               value: -1
            }
         },
         vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
         fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
         blending: 0,
         depthTest: !1,
         depthWrite: !1
      })
   }

   function ei(t) {
      let i = new WeakMap,
         r = null;

      function a(t) {
         const e = t.target;
         e.removeEventListener("dispose", a);
         const n = i.get(e);
         void 0 !== n && (i.delete(e), n.dispose())
      }
      return {
         get: function(s) {
            if (s && s.isTexture) {
               const o = s.mapping,
                  l = 303 === o || 304 === o,
                  c = o === e || o === n;
               if (l || c) {
                  if (s.isRenderTargetTexture && !0 === s.needsPMREMUpdate) {
                     s.needsPMREMUpdate = !1;
                     let e = i.get(s);
                     return null === r && (r = new Kn(t)), e = l ? r.fromEquirectangular(s, e) : r.fromCubemap(s, e), i.set(s, e), e.texture
                  }
                  if (i.has(s)) return i.get(s).texture; {
                     const e = s.image;
                     if (l && e && e.height > 0 || c && e && function(t) {
                           let e = 0;
                           for (let n = 0; n < 6; n++) void 0 !== t[n] && e++;
                           return 6 === e
                        }(e)) {
                        null === r && (r = new Kn(t));
                        const e = l ? r.fromEquirectangular(s) : r.fromCubemap(s);
                        return i.set(s, e), s.addEventListener("dispose", a), e.texture
                     }
                     return null
                  }
               }
            }
            return s
         },
         dispose: function() {
            i = new WeakMap, null !== r && (r.dispose(), r = null)
         }
      }
   }

   function ni(t) {
      const e = {};

      function n(n) {
         if (void 0 !== e[n]) return e[n];
         let i;
         switch (n) {
            case "WEBGL_depth_texture":
               i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
               break;
            case "EXT_texture_filter_anisotropic":
               i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
               break;
            case "WEBGL_compressed_texture_s3tc":
               i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
               break;
            case "WEBGL_compressed_texture_pvrtc":
               i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
               break;
            default:
               i = t.getExtension(n)
         }
         return e[n] = i, i
      }
      return {
         has: function(t) {
            return null !== n(t)
         },
         init: function(t) {
            t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture")
         },
         get: function(t) {
            const e = n(t);
            return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e
         }
      }
   }

   function ii(t, e, n, i) {
      const r = {},
         a = new WeakMap;

      function s(t) {
         const o = t.target;
         null !== o.index && e.remove(o.index);
         for (const t in o.attributes) e.remove(o.attributes[t]);
         o.removeEventListener("dispose", s), delete r[o.id];
         const l = a.get(o);
         l && (e.remove(l), a.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--
      }

      function o(t) {
         const n = [],
            i = t.index,
            r = t.attributes.position;
         let s = 0;
         if (null !== i) {
            const t = i.array;
            s = i.version;
            for (let e = 0, i = t.length; e < i; e += 3) {
               const i = t[e + 0],
                  r = t[e + 1],
                  a = t[e + 2];
               n.push(i, r, r, a, a, i)
            }
         } else {
            const t = r.array;
            s = r.version;
            for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
               const t = e + 0,
                  i = e + 1,
                  r = e + 2;
               n.push(t, i, i, r, r, t)
            }
         }
         const o = new(j(n) ? Ne : ze)(n, 1);
         o.version = s;
         const l = a.get(t);
         l && e.remove(l), a.set(t, o)
      }
      return {
         get: function(t, e) {
            return !0 === r[e.id] || (e.addEventListener("dispose", s), r[e.id] = !0, n.memory.geometries++), e
         },
         update: function(t) {
            const n = t.attributes;
            for (const t in n) e.update(n[t], 34962);
            const i = t.morphAttributes;
            for (const t in i) {
               const n = i[t];
               for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962)
            }
         },
         getWireframeAttribute: function(t) {
            const e = a.get(t);
            if (e) {
               const n = t.index;
               null !== n && e.version < n.version && o(t)
            } else o(t);
            return a.get(t)
         }
      }
   }

   function ri(t, e, n, i) {
      const r = i.isWebGL2;
      let a, s, o;
      this.setMode = function(t) {
         a = t
      }, this.setIndex = function(t) {
         s = t.type, o = t.bytesPerElement
      }, this.render = function(e, i) {
         t.drawElements(a, i, s, e * o), n.update(i, a, 1)
      }, this.renderInstances = function(i, l, c) {
         if (0 === c) return;
         let u, h;
         if (r) u = t, h = "drawElementsInstanced";
         else if (u = e.get("ANGLE_instanced_arrays"), h = "drawElementsInstancedANGLE", null === u) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
         u[h](a, l, s, i * o, c), n.update(l, a, c)
      }
   }

   function ai(t) {
      const e = {
         frame: 0,
         calls: 0,
         triangles: 0,
         points: 0,
         lines: 0
      };
      return {
         memory: {
            geometries: 0,
            textures: 0
         },
         render: e,
         programs: null,
         autoReset: !0,
         reset: function() {
            e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
         },
         update: function(t, n, i) {
            switch (e.calls++, n) {
               case 4:
                  e.triangles += i * (t / 3);
                  break;
               case 1:
                  e.lines += i * (t / 2);
                  break;
               case 3:
                  e.lines += i * (t - 1);
                  break;
               case 2:
                  e.lines += i * t;
                  break;
               case 0:
                  e.points += i * t;
                  break;
               default:
                  console.error("THREE.WebGLInfo: Unknown draw mode:", n)
            }
         }
      }
   }

   function si(t, e) {
      return t[0] - e[0]
   }

   function oi(t, e) {
      return Math.abs(e[1]) - Math.abs(t[1])
   }

   function li(t, e, n) {
      const i = {},
         r = new Float32Array(8),
         a = new WeakMap,
         s = new ut,
         o = [];
      for (let t = 0; t < 8; t++) o[t] = [t, 0];
      return {
         update: function(l, c, u, h) {
            const p = l.morphTargetInfluences;
            if (!0 === e.isWebGL2) {
               const f = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color,
                  m = void 0 !== f ? f.length : 0;
               let g = a.get(c);
               if (void 0 === g || g.count !== m) {
                  void 0 !== g && g.texture.dispose();
                  const x = void 0 !== c.morphAttributes.position,
                     y = void 0 !== c.morphAttributes.normal,
                     b = void 0 !== c.morphAttributes.color,
                     M = c.morphAttributes.position || [],
                     S = c.morphAttributes.normal || [],
                     w = c.morphAttributes.color || [];
                  let T = 0;
                  !0 === x && (T = 1), !0 === y && (T = 2), !0 === b && (T = 3);
                  let E = c.attributes.position.count * T,
                     A = 1;
                  E > e.maxTextureSize && (A = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
                  const C = new Float32Array(E * A * 4 * m),
                     L = new dt(C, E, A, m);
                  L.type = d, L.needsUpdate = !0;
                  const P = 4 * T;
                  for (let D = 0; D < m; D++) {
                     const O = M[D],
                        I = S[D],
                        z = w[D],
                        N = E * A * 4 * D;
                     for (let U = 0; U < O.count; U++) {
                        const F = U * P;
                        !0 === x && (s.fromBufferAttribute(O, U), C[N + F + 0] = s.x, C[N + F + 1] = s.y, C[N + F + 2] = s.z, C[N + F + 3] = 0), !0 === y && (s.fromBufferAttribute(I, U), C[N + F + 4] = s.x, C[N + F + 5] = s.y, C[N + F + 6] = s.z, C[N + F + 7] = 0), !0 === b && (s.fromBufferAttribute(z, U), C[N + F + 8] = s.x, C[N + F + 9] = s.y, C[N + F + 10] = s.z, C[N + F + 11] = 4 === z.itemSize ? s.w : 1)
                     }
                  }

                  function R() {
                     L.dispose(), a.delete(c), c.removeEventListener("dispose", R)
                  }
                  g = {
                     count: m,
                     texture: L,
                     size: new G(E, A)
                  }, a.set(c, g), c.addEventListener("dispose", R)
               }
               let _ = 0;
               for (let k = 0; k < p.length; k++) _ += p[k];
               const v = c.morphTargetsRelative ? 1 : 1 - _;
               h.getUniforms().setValue(t, "morphTargetBaseInfluence", v), h.getUniforms().setValue(t, "morphTargetInfluences", p), h.getUniforms().setValue(t, "morphTargetsTexture", g.texture, n), h.getUniforms().setValue(t, "morphTargetsTextureSize", g.size)
            } else {
               const H = void 0 === p ? 0 : p.length;
               let B = i[c.id];
               if (void 0 === B || B.length !== H) {
                  B = [];
                  for (let q = 0; q < H; q++) B[q] = [q, 0];
                  i[c.id] = B
               }
               for (let Y = 0; Y < H; Y++) {
                  const Z = B[Y];
                  Z[0] = Y, Z[1] = p[Y]
               }
               B.sort(oi);
               for (let K = 0; K < 8; K++) K < H && B[K][1] ? (o[K][0] = B[K][0], o[K][1] = B[K][1]) : (o[K][0] = Number.MAX_SAFE_INTEGER, o[K][1] = 0);
               o.sort(si);
               const V = c.morphAttributes.position,
                  W = c.morphAttributes.normal;
               let j = 0;
               for (let J = 0; J < 8; J++) {
                  const Q = o[J],
                     $ = Q[0],
                     tt = Q[1];
                  $ !== Number.MAX_SAFE_INTEGER && tt ? (V && c.getAttribute("morphTarget" + J) !== V[$] && c.setAttribute("morphTarget" + J, V[$]), W && c.getAttribute("morphNormal" + J) !== W[$] && c.setAttribute("morphNormal" + J, W[$]), r[J] = tt, j += tt) : (V && !0 === c.hasAttribute("morphTarget" + J) && c.deleteAttribute("morphTarget" + J), W && !0 === c.hasAttribute("morphNormal" + J) && c.deleteAttribute("morphNormal" + J), r[J] = 0)
               }
               const X = c.morphTargetsRelative ? 1 : 1 - j;
               h.getUniforms().setValue(t, "morphTargetBaseInfluence", X), h.getUniforms().setValue(t, "morphTargetInfluences", r)
            }
         }
      }
   }

   function ci(t, e, n, i) {
      let r = new WeakMap;

      function a(t) {
         const e = t.target;
         e.removeEventListener("dispose", a), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor)
      }
      return {
         update: function(t) {
            const s = i.render.frame,
               o = t.geometry,
               l = e.get(t, o);
            return r.get(l) !== s && (e.update(l), r.set(l, s)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", a) && t.addEventListener("dispose", a), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l
         },
         dispose: function() {
            r = new WeakMap
         }
      }
   }
   const ui = new ct,
      hi = new dt,
      di = new pt,
      pi = new bn,
      fi = [],
      mi = [],
      gi = new Float32Array(16),
      _i = new Float32Array(9),
      vi = new Float32Array(4);

   function xi(t, e, n) {
      const i = t[0];
      if (i <= 0 || i > 0) return t;
      const r = e * n;
      let a = fi[r];
      if (void 0 === a && (a = new Float32Array(r), fi[r] = a), 0 !== e) {
         i.toArray(a, 0);
         for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(a, r)
      }
      return a
   }

   function yi(t, e) {
      if (t.length !== e.length) return !1;
      for (let n = 0, i = t.length; n < i; n++)
         if (t[n] !== e[n]) return !1;
      return !0
   }

   function bi(t, e) {
      for (let n = 0, i = e.length; n < i; n++) t[n] = e[n]
   }

   function Mi(t, e) {
      let n = mi[e];
      void 0 === n && (n = new Int32Array(e), mi[e] = n);
      for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
      return n
   }

   function Si(t, e) {
      const n = this.cache;
      n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
   }

   function wi(t, e) {
      const n = this.cache;
      if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
      else {
         if (yi(n, e)) return;
         t.uniform2fv(this.addr, e), bi(n, e)
      }
   }

   function Ti(t, e) {
      const n = this.cache;
      if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
      else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
      else {
         if (yi(n, e)) return;
         t.uniform3fv(this.addr, e), bi(n, e)
      }
   }

   function Ei(t, e) {
      const n = this.cache;
      if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
      else {
         if (yi(n, e)) return;
         t.uniform4fv(this.addr, e), bi(n, e)
      }
   }

   function Ai(t, e) {
      const n = this.cache,
         i = e.elements;
      if (void 0 === i) {
         if (yi(n, e)) return;
         t.uniformMatrix2fv(this.addr, !1, e), bi(n, e)
      } else {
         if (yi(n, i)) return;
         vi.set(i), t.uniformMatrix2fv(this.addr, !1, vi), bi(n, i)
      }
   }

   function Ci(t, e) {
      const n = this.cache,
         i = e.elements;
      if (void 0 === i) {
         if (yi(n, e)) return;
         t.uniformMatrix3fv(this.addr, !1, e), bi(n, e)
      } else {
         if (yi(n, i)) return;
         _i.set(i), t.uniformMatrix3fv(this.addr, !1, _i), bi(n, i)
      }
   }

   function Li(t, e) {
      const n = this.cache,
         i = e.elements;
      if (void 0 === i) {
         if (yi(n, e)) return;
         t.uniformMatrix4fv(this.addr, !1, e), bi(n, e)
      } else {
         if (yi(n, i)) return;
         gi.set(i), t.uniformMatrix4fv(this.addr, !1, gi), bi(n, i)
      }
   }

   function Pi(t, e) {
      const n = this.cache;
      n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
   }

   function Ri(t, e) {
      const n = this.cache;
      yi(n, e) || (t.uniform2iv(this.addr, e), bi(n, e))
   }

   function Di(t, e) {
      const n = this.cache;
      yi(n, e) || (t.uniform3iv(this.addr, e), bi(n, e))
   }

   function Oi(t, e) {
      const n = this.cache;
      yi(n, e) || (t.uniform4iv(this.addr, e), bi(n, e))
   }

   function Ii(t, e) {
      const n = this.cache;
      n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
   }

   function zi(t, e) {
      const n = this.cache;
      yi(n, e) || (t.uniform2uiv(this.addr, e), bi(n, e))
   }

   function Ni(t, e) {
      const n = this.cache;
      yi(n, e) || (t.uniform3uiv(this.addr, e), bi(n, e))
   }

   function Ui(t, e) {
      const n = this.cache;
      yi(n, e) || (t.uniform4uiv(this.addr, e), bi(n, e))
   }

   function Fi(t, e, n) {
      const i = this.cache,
         r = n.allocateTextureUnit();
      i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || ui, r)
   }

   function ki(t, e, n) {
      const i = this.cache,
         r = n.allocateTextureUnit();
      i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || di, r)
   }

   function Hi(t, e, n) {
      const i = this.cache,
         r = n.allocateTextureUnit();
      i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || pi, r)
   }

   function Bi(t, e, n) {
      const i = this.cache,
         r = n.allocateTextureUnit();
      i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || hi, r)
   }

   function Vi(t, e) {
      t.uniform1fv(this.addr, e)
   }

   function Gi(t, e) {
      const n = xi(e, this.size, 2);
      t.uniform2fv(this.addr, n)
   }

   function Wi(t, e) {
      const n = xi(e, this.size, 3);
      t.uniform3fv(this.addr, n)
   }

   function ji(t, e) {
      const n = xi(e, this.size, 4);
      t.uniform4fv(this.addr, n)
   }

   function Xi(t, e) {
      const n = xi(e, this.size, 4);
      t.uniformMatrix2fv(this.addr, !1, n)
   }

   function qi(t, e) {
      const n = xi(e, this.size, 9);
      t.uniformMatrix3fv(this.addr, !1, n)
   }

   function Yi(t, e) {
      const n = xi(e, this.size, 16);
      t.uniformMatrix4fv(this.addr, !1, n)
   }

   function Zi(t, e) {
      t.uniform1iv(this.addr, e)
   }

   function Ki(t, e) {
      t.uniform2iv(this.addr, e)
   }

   function Ji(t, e) {
      t.uniform3iv(this.addr, e)
   }

   function Qi(t, e) {
      t.uniform4iv(this.addr, e)
   }

   function $i(t, e) {
      t.uniform1uiv(this.addr, e)
   }

   function tr(t, e) {
      t.uniform2uiv(this.addr, e)
   }

   function er(t, e) {
      t.uniform3uiv(this.addr, e)
   }

   function nr(t, e) {
      t.uniform4uiv(this.addr, e)
   }

   function ir(t, e, n) {
      const i = this.cache,
         r = e.length,
         a = Mi(n, r);
      yi(i, a) || (t.uniform1iv(this.addr, a), bi(i, a));
      for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || ui, a[t])
   }

   function rr(t, e, n) {
      const i = this.cache,
         r = e.length,
         a = Mi(n, r);
      yi(i, a) || (t.uniform1iv(this.addr, a), bi(i, a));
      for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || di, a[t])
   }

   function ar(t, e, n) {
      const i = this.cache,
         r = e.length,
         a = Mi(n, r);
      yi(i, a) || (t.uniform1iv(this.addr, a), bi(i, a));
      for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || pi, a[t])
   }

   function sr(t, e, n) {
      const i = this.cache,
         r = e.length,
         a = Mi(n, r);
      yi(i, a) || (t.uniform1iv(this.addr, a), bi(i, a));
      for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || hi, a[t])
   }
   class or {
      constructor(t, e, n) {
         this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
            switch (t) {
               case 5126:
                  return Si;
               case 35664:
                  return wi;
               case 35665:
                  return Ti;
               case 35666:
                  return Ei;
               case 35674:
                  return Ai;
               case 35675:
                  return Ci;
               case 35676:
                  return Li;
               case 5124:
               case 35670:
                  return Pi;
               case 35667:
               case 35671:
                  return Ri;
               case 35668:
               case 35672:
                  return Di;
               case 35669:
               case 35673:
                  return Oi;
               case 5125:
                  return Ii;
               case 36294:
                  return zi;
               case 36295:
                  return Ni;
               case 36296:
                  return Ui;
               case 35678:
               case 36198:
               case 36298:
               case 36306:
               case 35682:
                  return Fi;
               case 35679:
               case 36299:
               case 36307:
                  return ki;
               case 35680:
               case 36300:
               case 36308:
               case 36293:
                  return Hi;
               case 36289:
               case 36303:
               case 36311:
               case 36292:
                  return Bi
            }
         }(e.type)
      }
   }
   class lr {
      constructor(t, e, n) {
         this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
            switch (t) {
               case 5126:
                  return Vi;
               case 35664:
                  return Gi;
               case 35665:
                  return Wi;
               case 35666:
                  return ji;
               case 35674:
                  return Xi;
               case 35675:
                  return qi;
               case 35676:
                  return Yi;
               case 5124:
               case 35670:
                  return Zi;
               case 35667:
               case 35671:
                  return Ki;
               case 35668:
               case 35672:
                  return Ji;
               case 35669:
               case 35673:
                  return Qi;
               case 5125:
                  return $i;
               case 36294:
                  return tr;
               case 36295:
                  return er;
               case 36296:
                  return nr;
               case 35678:
               case 36198:
               case 36298:
               case 36306:
               case 35682:
                  return ir;
               case 35679:
               case 36299:
               case 36307:
                  return rr;
               case 35680:
               case 36300:
               case 36308:
               case 36293:
                  return ar;
               case 36289:
               case 36303:
               case 36311:
               case 36292:
                  return sr
            }
         }(e.type)
      }
   }
   class cr {
      constructor(t) {
         this.id = t, this.seq = [], this.map = {}
      }
      setValue(t, e, n) {
         const i = this.seq;
         for (let r = 0, a = i.length; r !== a; ++r) {
            const a = i[r];
            a.setValue(t, e[a.id], n)
         }
      }
   }
   const ur = /(\w+)(\])?(\[|\.)?/g;

   function hr(t, e) {
      t.seq.push(e), t.map[e.id] = e
   }

   function dr(t, e, n) {
      const i = t.name,
         r = i.length;
      for (ur.lastIndex = 0;;) {
         const a = ur.exec(i),
            s = ur.lastIndex;
         let o = a[1];
         const l = "]" === a[2],
            c = a[3];
         if (l && (o |= 0), void 0 === c || "[" === c && s + 2 === r) {
            hr(n, void 0 === c ? new or(o, t, e) : new lr(o, t, e));
            break
         } {
            let t = n.map[o];
            void 0 === t && (t = new cr(o), hr(n, t)), n = t
         }
      }
   }
   class pr {
      constructor(t, e) {
         this.seq = [], this.map = {};
         const n = t.getProgramParameter(e, 35718);
         for (let i = 0; i < n; ++i) {
            const n = t.getActiveUniform(e, i);
            dr(n, t.getUniformLocation(e, n.name), this)
         }
      }
      setValue(t, e, n, i) {
         const r = this.map[e];
         void 0 !== r && r.setValue(t, n, i)
      }
      setOptional(t, e, n) {
         const i = e[n];
         void 0 !== i && this.setValue(t, n, i)
      }
      static upload(t, e, n, i) {
         for (let r = 0, a = e.length; r !== a; ++r) {
            const a = e[r],
               s = n[a.id];
            !1 !== s.needsUpdate && a.setValue(t, s.value, i)
         }
      }
      static seqWithValue(t, e) {
         const n = [];
         for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r)
         }
         return n
      }
   }

   function fr(t, e, n) {
      const i = t.createShader(e);
      return t.shaderSource(i, n), t.compileShader(i), i
   }
   let mr = 0;

   function gr(t, e, n) {
      const i = t.getShaderParameter(e, 35713),
         r = t.getShaderInfoLog(e).trim();
      if (i && "" === r) return "";
      const a = /ERROR: 0:(\d+)/.exec(r);
      if (a) {
         const i = parseInt(a[1]);
         return n.toUpperCase() + "\n\n" + r + "\n\n" + function(t, e) {
            const n = t.split("\n"),
               i = [],
               r = Math.max(e - 6, 0),
               a = Math.min(e + 6, n.length);
            for (let t = r; t < a; t++) {
               const r = t + 1;
               i.push(`${r===e?">":" "} ${r}: ${n[t]}`)
            }
            return i.join("\n")
         }(t.getShaderSource(e), i)
      }
      return r
   }

   function _r(t, e) {
      const n = function(t) {
         switch (t) {
            case T:
               return ["Linear", "( value )"];
            case E:
               return ["sRGB", "( value )"];
            default:
               return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"]
         }
      }(e);
      return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
   }

   function vr(t, e) {
      let n;
      switch (e) {
         case 1:
            n = "Linear";
            break;
         case 2:
            n = "Reinhard";
            break;
         case 3:
            n = "OptimizedCineon";
            break;
         case 4:
            n = "ACESFilmic";
            break;
         case 5:
            n = "Custom";
            break;
         default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear"
      }
      return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
   }

   function xr(t) {
      return "" !== t
   }

   function yr(t, e) {
      const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
      return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
   }

   function br(t, e) {
      return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
   }
   const Mr = /^[ \t]*#include +<([\w\d./]+)>/gm;

   function Sr(t) {
      return t.replace(Mr, wr)
   }

   function wr(t, e) {
      const n = On[e];
      if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
      return Sr(n)
   }
   const Tr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

   function Er(t) {
      return t.replace(Tr, Ar)
   }

   function Ar(t, e, n, i) {
      let r = "";
      for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
      return r
   }

   function Cr(t) {
      let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
      return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
   }

   function Lr(t, r, a, s) {
      const o = t.getContext(),
         l = a.defines;
      let c = a.vertexShader,
         u = a.fragmentShader;
      const h = function(t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
         }(a),
         d = function(t) {
            let r = "ENVMAP_TYPE_CUBE";
            if (t.envMap) switch (t.envMapMode) {
               case e:
               case n:
                  r = "ENVMAP_TYPE_CUBE";
                  break;
               case i:
                  r = "ENVMAP_TYPE_CUBE_UV"
            }
            return r
         }(a),
         p = function(t) {
            let e = "ENVMAP_MODE_REFLECTION";
            return t.envMap && t.envMapMode === n && (e = "ENVMAP_MODE_REFRACTION"), e
         }(a),
         f = function(t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap) switch (t.combine) {
               case 0:
                  e = "ENVMAP_BLENDING_MULTIPLY";
                  break;
               case 1:
                  e = "ENVMAP_BLENDING_MIX";
                  break;
               case 2:
                  e = "ENVMAP_BLENDING_ADD"
            }
            return e
         }(a),
         m = function(t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e) - 2,
               i = 1 / e;
            return {
               texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
               texelHeight: i,
               maxMip: n
            }
         }(a),
         g = a.isWebGL2 ? "" : function(t) {
            return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(xr).join("\n")
         }(a),
         _ = function(t) {
            const e = [];
            for (const n in t) {
               const i = t[n];
               !1 !== i && e.push("#define " + n + " " + i)
            }
            return e.join("\n")
         }(l),
         v = o.createProgram();
      let x, y, b = a.glslVersion ? "#version " + a.glslVersion + "\n" : "";
      a.isRawShaderMaterial ? (x = [_].filter(xr).join("\n"), x.length > 0 && (x += "\n"), y = [g, _].filter(xr).join("\n"), y.length > 0 && (y += "\n")) : (x = [Cr(a), "#define SHADER_NAME " + a.shaderName, _, a.instancing ? "#define USE_INSTANCING" : "", a.instancingColor ? "#define USE_INSTANCING_COLOR" : "", a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", a.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", a.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", a.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", a.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.transmission ? "#define USE_TRANSMISSION" : "", a.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", a.thicknessMap ? "#define USE_THICKNESSMAP" : "", a.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", a.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", a.vertexUvs ? "#define USE_UV" : "", a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.morphColors && a.isWebGL2 ? "#define USE_MORPHCOLORS" : "", a.morphTargetsCount > 0 && a.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", a.morphTargetsCount > 0 && a.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + a.morphTextureStride : "", a.morphTargetsCount > 0 && a.isWebGL2 ? "#define MORPHTARGETS_COUNT " + a.morphTargetsCount : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + h : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && a.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(xr).join("\n"), y = [g, Cr(a), "#define SHADER_NAME " + a.shaderName, _, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + f : "", m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "", m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "", m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", a.clearcoat ? "#define USE_CLEARCOAT" : "", a.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", a.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.iridescence ? "#define USE_IRIDESCENCE" : "", a.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", a.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", a.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.alphaTest ? "#define USE_ALPHATEST" : "", a.sheen ? "#define USE_SHEEN" : "", a.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", a.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", a.transmission ? "#define USE_TRANSMISSION" : "", a.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", a.thicknessMap ? "#define USE_THICKNESSMAP" : "", a.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors || a.instancingColor ? "#define USE_COLOR" : "", a.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", a.vertexUvs ? "#define USE_UV" : "", a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + h : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && a.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== a.toneMapping ? "#define TONE_MAPPING" : "", 0 !== a.toneMapping ? On.tonemapping_pars_fragment : "", 0 !== a.toneMapping ? vr("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.opaque ? "#define OPAQUE" : "", On.encodings_pars_fragment, _r("linearToOutputTexel", a.outputEncoding), a.useDepthPacking ? "#define DEPTH_PACKING " + a.depthPacking : "", "\n"].filter(xr).join("\n")), c = Sr(c), c = yr(c, a), c = br(c, a), u = Sr(u), u = yr(u, a), u = br(u, a), c = Er(c), u = Er(u), a.isWebGL2 && !0 !== a.isRawShaderMaterial && (b = "#version 300 es\n", x = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + x, y = ["#define varying in", a.glslVersion === P ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", a.glslVersion === P ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y);
      const M = b + y + u,
         S = fr(o, 35633, b + x + c),
         w = fr(o, 35632, M);
      if (o.attachShader(v, S), o.attachShader(v, w), void 0 !== a.index0AttributeName ? o.bindAttribLocation(v, 0, a.index0AttributeName) : !0 === a.morphTargets && o.bindAttribLocation(v, 0, "position"), o.linkProgram(v), t.debug.checkShaderErrors) {
         const t = o.getProgramInfoLog(v).trim(),
            e = o.getShaderInfoLog(S).trim(),
            n = o.getShaderInfoLog(w).trim();
         let i = !0,
            r = !0;
         if (!1 === o.getProgramParameter(v, 35714)) {
            i = !1;
            const e = gr(o, S, "vertex"),
               n = gr(o, w, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + o.getError() + " - VALIDATE_STATUS " + o.getProgramParameter(v, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n)
         } else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== n || (r = !1);
         r && (this.diagnostics = {
            runnable: i,
            programLog: t,
            vertexShader: {
               log: e,
               prefix: x
            },
            fragmentShader: {
               log: n,
               prefix: y
            }
         })
      }
      let T, E;
      return o.deleteShader(S), o.deleteShader(w), this.getUniforms = function() {
         return void 0 === T && (T = new pr(o, v)), T
      }, this.getAttributes = function() {
         return void 0 === E && (E = function(t, e) {
            const n = {},
               i = t.getProgramParameter(e, 35721);
            for (let r = 0; r < i; r++) {
               const i = t.getActiveAttrib(e, r),
                  a = i.name;
               let s = 1;
               35674 === i.type && (s = 2), 35675 === i.type && (s = 3), 35676 === i.type && (s = 4), n[a] = {
                  type: i.type,
                  location: t.getAttribLocation(e, a),
                  locationSize: s
               }
            }
            return n
         }(o, v)), E
      }, this.destroy = function() {
         s.releaseStatesOfProgram(this), o.deleteProgram(v), this.program = void 0
      }, this.name = a.shaderName, this.id = mr++, this.cacheKey = r, this.usedTimes = 1, this.program = v, this.vertexShader = S, this.fragmentShader = w, this
   }
   let Pr = 0;
   class Rr {
      constructor() {
         this.shaderCache = new Map, this.materialCache = new Map
      }
      update(t) {
         const e = t.vertexShader,
            n = t.fragmentShader,
            i = this._getShaderStage(e),
            r = this._getShaderStage(n),
            a = this._getShaderCacheForMaterial(t);
         return !1 === a.has(i) && (a.add(i), i.usedTimes++), !1 === a.has(r) && (a.add(r), r.usedTimes++), this
      }
      remove(t) {
         const e = this.materialCache.get(t);
         for (const t of e) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
         return this.materialCache.delete(t), this
      }
      getVertexShaderID(t) {
         return this._getShaderStage(t.vertexShader).id
      }
      getFragmentShaderID(t) {
         return this._getShaderStage(t.fragmentShader).id
      }
      dispose() {
         this.shaderCache.clear(), this.materialCache.clear()
      }
      _getShaderCacheForMaterial(t) {
         const e = this.materialCache;
         let n = e.get(t);
         return void 0 === n && (n = new Set, e.set(t, n)), n
      }
      _getShaderStage(t) {
         const e = this.shaderCache;
         let n = e.get(t);
         return void 0 === n && (n = new Dr(t), e.set(t, n)), n
      }
   }
   class Dr {
      constructor(t) {
         this.id = Pr++, this.code = t, this.usedTimes = 0
      }
   }

   function Or(t, e, n, r, a, s, o) {
      const l = new ie,
         c = new Rr,
         u = [],
         h = a.isWebGL2,
         d = a.logarithmicDepthBuffer,
         p = a.vertexTextures;
      let f = a.precision;
      const m = {
         MeshDepthMaterial: "depth",
         MeshDistanceMaterial: "distanceRGBA",
         MeshNormalMaterial: "normal",
         MeshBasicMaterial: "basic",
         MeshLambertMaterial: "lambert",
         MeshPhongMaterial: "phong",
         MeshToonMaterial: "toon",
         MeshStandardMaterial: "physical",
         MeshPhysicalMaterial: "physical",
         MeshMatcapMaterial: "matcap",
         LineBasicMaterial: "basic",
         LineDashedMaterial: "dashed",
         PointsMaterial: "points",
         ShadowMaterial: "shadow",
         SpriteMaterial: "sprite"
      };
      return {
         getParameters: function(s, l, u, g, _) {
            const v = g.fog,
               x = _.geometry,
               y = s.isMeshStandardMaterial ? g.environment : null,
               b = (s.isMeshStandardMaterial ? n : e).get(s.envMap || y),
               M = b && b.mapping === i ? b.image.height : null,
               S = m[s.type];
            null !== s.precision && (f = a.getMaxPrecision(s.precision), f !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", f, "instead."));
            const w = x.morphAttributes.position || x.morphAttributes.normal || x.morphAttributes.color,
               A = void 0 !== w ? w.length : 0;
            let C, L, P, R, D = 0;
            if (void 0 !== x.morphAttributes.position && (D = 1), void 0 !== x.morphAttributes.normal && (D = 2), void 0 !== x.morphAttributes.color && (D = 3), S) {
               const t = zn[S];
               C = t.vertexShader, L = t.fragmentShader
            } else C = s.vertexShader, L = s.fragmentShader, c.update(s), P = c.getVertexShaderID(s), R = c.getFragmentShaderID(s);
            const O = t.getRenderTarget(),
               I = s.alphaTest > 0,
               z = s.clearcoat > 0,
               N = s.iridescence > 0;
            return {
               isWebGL2: h,
               shaderID: S,
               shaderName: s.type,
               vertexShader: C,
               fragmentShader: L,
               defines: s.defines,
               customVertexShaderID: P,
               customFragmentShaderID: R,
               isRawShaderMaterial: !0 === s.isRawShaderMaterial,
               glslVersion: s.glslVersion,
               precision: f,
               instancing: !0 === _.isInstancedMesh,
               instancingColor: !0 === _.isInstancedMesh && null !== _.instanceColor,
               supportsVertexTextures: p,
               outputEncoding: null === O ? t.outputEncoding : !0 === O.isXRRenderTarget ? O.texture.encoding : T,
               map: !!s.map,
               matcap: !!s.matcap,
               envMap: !!b,
               envMapMode: b && b.mapping,
               envMapCubeUVHeight: M,
               lightMap: !!s.lightMap,
               aoMap: !!s.aoMap,
               emissiveMap: !!s.emissiveMap,
               bumpMap: !!s.bumpMap,
               normalMap: !!s.normalMap,
               objectSpaceNormalMap: 1 === s.normalMapType,
               tangentSpaceNormalMap: 0 === s.normalMapType,
               decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === E,
               clearcoat: z,
               clearcoatMap: z && !!s.clearcoatMap,
               clearcoatRoughnessMap: z && !!s.clearcoatRoughnessMap,
               clearcoatNormalMap: z && !!s.clearcoatNormalMap,
               iridescence: N,
               iridescenceMap: N && !!s.iridescenceMap,
               iridescenceThicknessMap: N && !!s.iridescenceThicknessMap,
               displacementMap: !!s.displacementMap,
               roughnessMap: !!s.roughnessMap,
               metalnessMap: !!s.metalnessMap,
               specularMap: !!s.specularMap,
               specularIntensityMap: !!s.specularIntensityMap,
               specularColorMap: !!s.specularColorMap,
               opaque: !1 === s.transparent && 1 === s.blending,
               alphaMap: !!s.alphaMap,
               alphaTest: I,
               gradientMap: !!s.gradientMap,
               sheen: s.sheen > 0,
               sheenColorMap: !!s.sheenColorMap,
               sheenRoughnessMap: !!s.sheenRoughnessMap,
               transmission: s.transmission > 0,
               transmissionMap: !!s.transmissionMap,
               thicknessMap: !!s.thicknessMap,
               combine: s.combine,
               vertexTangents: !!s.normalMap && !!x.attributes.tangent,
               vertexColors: s.vertexColors,
               vertexAlphas: !0 === s.vertexColors && !!x.attributes.color && 4 === x.attributes.color.itemSize,
               vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
               uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
               fog: !!v,
               useFog: !0 === s.fog,
               fogExp2: v && v.isFogExp2,
               flatShading: !!s.flatShading,
               sizeAttenuation: s.sizeAttenuation,
               logarithmicDepthBuffer: d,
               skinning: !0 === _.isSkinnedMesh,
               morphTargets: void 0 !== x.morphAttributes.position,
               morphNormals: void 0 !== x.morphAttributes.normal,
               morphColors: void 0 !== x.morphAttributes.color,
               morphTargetsCount: A,
               morphTextureStride: D,
               numDirLights: l.directional.length,
               numPointLights: l.point.length,
               numSpotLights: l.spot.length,
               numSpotLightMaps: l.spotLightMap.length,
               numRectAreaLights: l.rectArea.length,
               numHemiLights: l.hemi.length,
               numDirLightShadows: l.directionalShadowMap.length,
               numPointLightShadows: l.pointShadowMap.length,
               numSpotLightShadows: l.spotShadowMap.length,
               numSpotLightShadowsWithMaps: l.numSpotLightShadowsWithMaps,
               numClippingPlanes: o.numPlanes,
               numClipIntersection: o.numIntersection,
               dithering: s.dithering,
               shadowMapEnabled: t.shadowMap.enabled && u.length > 0,
               shadowMapType: t.shadowMap.type,
               toneMapping: s.toneMapped ? t.toneMapping : 0,
               physicallyCorrectLights: t.physicallyCorrectLights,
               premultipliedAlpha: s.premultipliedAlpha,
               doubleSided: 2 === s.side,
               flipSided: 1 === s.side,
               useDepthPacking: !!s.depthPacking,
               depthPacking: s.depthPacking || 0,
               index0AttributeName: s.index0AttributeName,
               extensionDerivatives: s.extensions && s.extensions.derivatives,
               extensionFragDepth: s.extensions && s.extensions.fragDepth,
               extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
               extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
               rendererExtensionFragDepth: h || r.has("EXT_frag_depth"),
               rendererExtensionDrawBuffers: h || r.has("WEBGL_draw_buffers"),
               rendererExtensionShaderTextureLod: h || r.has("EXT_shader_texture_lod"),
               customProgramCacheKey: s.customProgramCacheKey()
            }
         },
         getProgramCacheKey: function(e) {
            const n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), void 0 !== e.defines)
               for (const t in e.defines) n.push(t), n.push(e.defines[t]);
            return !1 === e.isRawShaderMaterial && (function(t, e) {
               t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numSpotLightMaps), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.numSpotLightShadowsWithMaps), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking)
            }(n, e), function(t, e) {
               l.disableAll(), e.isWebGL2 && l.enable(0), e.supportsVertexTextures && l.enable(1), e.instancing && l.enable(2), e.instancingColor && l.enable(3), e.map && l.enable(4), e.matcap && l.enable(5), e.envMap && l.enable(6), e.lightMap && l.enable(7), e.aoMap && l.enable(8), e.emissiveMap && l.enable(9), e.bumpMap && l.enable(10), e.normalMap && l.enable(11), e.objectSpaceNormalMap && l.enable(12), e.tangentSpaceNormalMap && l.enable(13), e.clearcoat && l.enable(14), e.clearcoatMap && l.enable(15), e.clearcoatRoughnessMap && l.enable(16), e.clearcoatNormalMap && l.enable(17), e.iridescence && l.enable(18), e.iridescenceMap && l.enable(19), e.iridescenceThicknessMap && l.enable(20), e.displacementMap && l.enable(21), e.specularMap && l.enable(22), e.roughnessMap && l.enable(23), e.metalnessMap && l.enable(24), e.gradientMap && l.enable(25), e.alphaMap && l.enable(26), e.alphaTest && l.enable(27), e.vertexColors && l.enable(28), e.vertexAlphas && l.enable(29), e.vertexUvs && l.enable(30), e.vertexTangents && l.enable(31), e.uvsVertexOnly && l.enable(32), t.push(l.mask), l.disableAll(), e.fog && l.enable(0), e.useFog && l.enable(1), e.flatShading && l.enable(2), e.logarithmicDepthBuffer && l.enable(3), e.skinning && l.enable(4), e.morphTargets && l.enable(5), e.morphNormals && l.enable(6), e.morphColors && l.enable(7), e.premultipliedAlpha && l.enable(8), e.shadowMapEnabled && l.enable(9), e.physicallyCorrectLights && l.enable(10), e.doubleSided && l.enable(11), e.flipSided && l.enable(12), e.useDepthPacking && l.enable(13), e.dithering && l.enable(14), e.specularIntensityMap && l.enable(15), e.specularColorMap && l.enable(16), e.transmission && l.enable(17), e.transmissionMap && l.enable(18), e.thicknessMap && l.enable(19), e.sheen && l.enable(20), e.sheenColorMap && l.enable(21), e.sheenRoughnessMap && l.enable(22), e.decodeVideoTexture && l.enable(23), e.opaque && l.enable(24), t.push(l.mask)
            }(n, e), n.push(t.outputEncoding)), n.push(e.customProgramCacheKey), n.join()
         },
         getUniforms: function(t) {
            const e = m[t.type];
            let n;
            if (e) {
               const t = zn[e];
               n = mn.clone(t.uniforms)
            } else n = t.uniforms;
            return n
         },
         acquireProgram: function(e, n) {
            let i;
            for (let t = 0, e = u.length; t < e; t++) {
               const e = u[t];
               if (e.cacheKey === n) {
                  i = e, ++i.usedTimes;
                  break
               }
            }
            return void 0 === i && (i = new Lr(t, n, e, s), u.push(i)), i
         },
         releaseProgram: function(t) {
            if (0 == --t.usedTimes) {
               const e = u.indexOf(t);
               u[e] = u[u.length - 1], u.pop(), t.destroy()
            }
         },
         releaseShaderCache: function(t) {
            c.remove(t)
         },
         programs: u,
         dispose: function() {
            c.dispose()
         }
      }
   }

   function Ir() {
      let t = new WeakMap;
      return {
         get: function(e) {
            let n = t.get(e);
            return void 0 === n && (n = {}, t.set(e, n)), n
         },
         remove: function(e) {
            t.delete(e)
         },
         update: function(e, n, i) {
            t.get(e)[n] = i
         },
         dispose: function() {
            t = new WeakMap
         }
      }
   }

   function zr(t, e) {
      return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
   }

   function Nr(t, e) {
      return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
   }

   function Ur() {
      const t = [];
      let e = 0;
      const n = [],
         i = [],
         r = [];

      function a(n, i, r, a, s, o) {
         let l = t[e];
         return void 0 === l ? (l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: s,
            group: o
         }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = o), e++, l
      }
      return {
         opaque: n,
         transmissive: i,
         transparent: r,
         init: function() {
            e = 0, n.length = 0, i.length = 0, r.length = 0
         },
         push: function(t, e, s, o, l, c) {
            const u = a(t, e, s, o, l, c);
            s.transmission > 0 ? i.push(u) : !0 === s.transparent ? r.push(u) : n.push(u)
         },
         unshift: function(t, e, s, o, l, c) {
            const u = a(t, e, s, o, l, c);
            s.transmission > 0 ? i.unshift(u) : !0 === s.transparent ? r.unshift(u) : n.unshift(u)
         },
         finish: function() {
            for (let n = e, i = t.length; n < i; n++) {
               const e = t[n];
               if (null === e.id) break;
               e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null
            }
         },
         sort: function(t, e) {
            n.length > 1 && n.sort(t || zr), i.length > 1 && i.sort(e || Nr), r.length > 1 && r.sort(e || Nr)
         }
      }
   }

   function Fr() {
      let t = new WeakMap;
      return {
         get: function(e, n) {
            const i = t.get(e);
            let r;
            return void 0 === i ? (r = new Ur, t.set(e, [r])) : n >= i.length ? (r = new Ur, i.push(r)) : r = i[n], r
         },
         dispose: function() {
            t = new WeakMap
         }
      }
   }

   function kr() {
      const t = {};
      return {
         get: function(e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
               case "DirectionalLight":
                  n = {
                     direction: new mt,
                     color: new it
                  };
                  break;
               case "SpotLight":
                  n = {
                     position: new mt,
                     direction: new mt,
                     color: new it,
                     distance: 0,
                     coneCos: 0,
                     penumbraCos: 0,
                     decay: 0
                  };
                  break;
               case "PointLight":
                  n = {
                     position: new mt,
                     color: new it,
                     distance: 0,
                     decay: 0
                  };
                  break;
               case "HemisphereLight":
                  n = {
                     direction: new mt,
                     skyColor: new it,
                     groundColor: new it
                  };
                  break;
               case "RectAreaLight":
                  n = {
                     color: new it,
                     position: new mt,
                     halfWidth: new mt,
                     halfHeight: new mt
                  }
            }
            return t[e.id] = n, n
         }
      }
   }
   let Hr = 0;

   function Br(t, e) {
      return (e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0)
   }

   function Vr(t, e) {
      const n = new kr,
         i = function() {
            const t = {};
            return {
               get: function(e) {
                  if (void 0 !== t[e.id]) return t[e.id];
                  let n;
                  switch (e.type) {
                     case "DirectionalLight":
                     case "SpotLight":
                        n = {
                           shadowBias: 0,
                           shadowNormalBias: 0,
                           shadowRadius: 1,
                           shadowMapSize: new G
                        };
                        break;
                     case "PointLight":
                        n = {
                           shadowBias: 0,
                           shadowNormalBias: 0,
                           shadowRadius: 1,
                           shadowMapSize: new G,
                           shadowCameraNear: 1,
                           shadowCameraFar: 1e3
                        }
                  }
                  return t[e.id] = n, n
               }
            }
         }(),
         r = {
            version: 0,
            hash: {
               directionalLength: -1,
               pointLength: -1,
               spotLength: -1,
               rectAreaLength: -1,
               hemiLength: -1,
               numDirectionalShadows: -1,
               numPointShadows: -1,
               numSpotShadows: -1,
               numSpotMaps: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0
         };
      for (let t = 0; t < 9; t++) r.probe.push(new mt);
      const a = new mt,
         s = new Xt,
         o = new Xt;
      return {
         setup: function(a, s) {
            let o = 0,
               l = 0,
               c = 0;
            for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
            let u = 0,
               h = 0,
               d = 0,
               p = 0,
               f = 0,
               m = 0,
               g = 0,
               _ = 0,
               v = 0,
               x = 0;
            a.sort(Br);
            const y = !0 !== s ? Math.PI : 1;
            for (let t = 0, e = a.length; t < e; t++) {
               const e = a[t],
                  s = e.color,
                  b = e.intensity,
                  M = e.distance,
                  S = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
               if (e.isAmbientLight) o += s.r * b * y, l += s.g * b * y, c += s.b * b * y;
               else if (e.isLightProbe)
                  for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], b);
               else if (e.isDirectionalLight) {
                  const t = n.get(e);
                  if (t.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) {
                     const t = e.shadow,
                        n = i.get(e);
                     n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[u] = n, r.directionalShadowMap[u] = S, r.directionalShadowMatrix[u] = e.shadow.matrix, m++
                  }
                  r.directional[u] = t, u++
               } else if (e.isSpotLight) {
                  const t = n.get(e);
                  t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(s).multiplyScalar(b * y), t.distance = M, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, r.spot[d] = t;
                  const a = e.shadow;
                  if (e.map && (r.spotLightMap[v] = e.map, v++, a.updateMatrices(e), e.castShadow && x++), r.spotLightMatrix[d] = a.matrix, e.castShadow) {
                     const t = i.get(e);
                     t.shadowBias = a.bias, t.shadowNormalBias = a.normalBias, t.shadowRadius = a.radius, t.shadowMapSize = a.mapSize, r.spotShadow[d] = t, r.spotShadowMap[d] = S, _++
                  }
                  d++
               } else if (e.isRectAreaLight) {
                  const t = n.get(e);
                  t.color.copy(s).multiplyScalar(b), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++
               } else if (e.isPointLight) {
                  const t = n.get(e);
                  if (t.color.copy(e.color).multiplyScalar(e.intensity * y), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                     const t = e.shadow,
                        n = i.get(e);
                     n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[h] = n, r.pointShadowMap[h] = S, r.pointShadowMatrix[h] = e.shadow.matrix, g++
                  }
                  r.point[h] = t, h++
               } else if (e.isHemisphereLight) {
                  const t = n.get(e);
                  t.skyColor.copy(e.color).multiplyScalar(b * y), t.groundColor.copy(e.groundColor).multiplyScalar(b * y), r.hemi[f] = t, f++
               }
            }
            p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = In.LTC_FLOAT_1, r.rectAreaLTC2 = In.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = In.LTC_HALF_1, r.rectAreaLTC2 = In.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
            const b = r.hash;
            b.directionalLength === u && b.pointLength === h && b.spotLength === d && b.rectAreaLength === p && b.hemiLength === f && b.numDirectionalShadows === m && b.numPointShadows === g && b.numSpotShadows === _ && b.numSpotMaps === v || (r.directional.length = u, r.spot.length = d, r.rectArea.length = p, r.point.length = h, r.hemi.length = f, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = _, r.spotShadowMap.length = _, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = _ + v - x, r.spotLightMap.length = v, r.numSpotLightShadowsWithMaps = x, b.directionalLength = u, b.pointLength = h, b.spotLength = d, b.rectAreaLength = p, b.hemiLength = f, b.numDirectionalShadows = m, b.numPointShadows = g, b.numSpotShadows = _, b.numSpotMaps = v, r.version = Hr++)
         },
         setupView: function(t, e) {
            let n = 0,
               i = 0,
               l = 0,
               c = 0,
               u = 0;
            const h = e.matrixWorldInverse;
            for (let e = 0, d = t.length; e < d; e++) {
               const d = t[e];
               if (d.isDirectionalLight) {
                  const t = r.directional[n];
                  t.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(a), t.direction.transformDirection(h), n++
               } else if (d.isSpotLight) {
                  const t = r.spot[l];
                  t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(h), t.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(a), t.direction.transformDirection(h), l++
               } else if (d.isRectAreaLight) {
                  const t = r.rectArea[c];
                  t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(h), o.identity(), s.copy(d.matrixWorld), s.premultiply(h), o.extractRotation(s), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++
               } else if (d.isPointLight) {
                  const t = r.point[i];
                  t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(h), i++
               } else if (d.isHemisphereLight) {
                  const t = r.hemi[u];
                  t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(h), u++
               }
            }
         },
         state: r
      }
   }

   function Gr(t, e) {
      const n = new Vr(t, e),
         i = [],
         r = [];
      return {
         init: function() {
            i.length = 0, r.length = 0
         },
         state: {
            lightsArray: i,
            shadowsArray: r,
            lights: n
         },
         setupLights: function(t) {
            n.setup(i, t)
         },
         setupLightsView: function(t) {
            n.setupView(i, t)
         },
         pushLight: function(t) {
            i.push(t)
         },
         pushShadow: function(t) {
            r.push(t)
         }
      }
   }

   function Wr(t, e) {
      let n = new WeakMap;
      return {
         get: function(i, r = 0) {
            const a = n.get(i);
            let s;
            return void 0 === a ? (s = new Gr(t, e), n.set(i, [s])) : r >= a.length ? (s = new Gr(t, e), a.push(s)) : s = a[r], s
         },
         dispose: function() {
            n = new WeakMap
         }
      }
   }
   class jr extends Pe {
      constructor(t) {
         super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
      }
      copy(t) {
         return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
      }
   }
   class Xr extends Pe {
      constructor(t) {
         super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new mt, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t)
      }
      copy(t) {
         return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
      }
   }

   function qr(t, e, n) {
      let i = new Ln;
      const r = new G,
         a = new G,
         s = new ut,
         l = new jr({
            depthPacking: 3201
         }),
         c = new Xr,
         u = {},
         h = n.maxTextureSize,
         d = {
            0: 1,
            1: 0,
            2: 2
         },
         p = new gn({
            defines: {
               VSM_SAMPLES: 8
            },
            uniforms: {
               shadow_pass: {
                  value: null
               },
               resolution: {
                  value: new G
               },
               radius: {
                  value: 4
               }
            },
            vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
         }),
         f = p.clone();
      f.defines.HORIZONTAL_PASS = 1;
      const m = new je;
      m.setAttribute("position", new Ie(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
      const g = new un(m, p),
         _ = this;

      function v(n, i) {
         const a = e.update(g);
         p.defines.VSM_SAMPLES !== n.blurSamples && (p.defines.VSM_SAMPLES = n.blurSamples, f.defines.VSM_SAMPLES = n.blurSamples, p.needsUpdate = !0, f.needsUpdate = !0), null === n.mapPass && (n.mapPass = new ht(r.x, r.y)), p.uniforms.shadow_pass.value = n.map.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, a, p, g, null), f.uniforms.shadow_pass.value = n.mapPass.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, a, f, g, null)
      }

      function x(e, n, i, r, a, s) {
         let o = null;
         const h = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
         if (o = void 0 !== h ? h : !0 === i.isPointLight ? c : l, t.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0) {
            const t = o.uuid,
               e = n.uuid;
            let i = u[t];
            void 0 === i && (i = {}, u[t] = i);
            let r = i[e];
            void 0 === r && (r = o.clone(), i[e] = r), o = r
         }
         return o.visible = n.visible, o.wireframe = n.wireframe, o.side = 3 === s ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : d[n.side], o.alphaMap = n.alphaMap, o.alphaTest = n.alphaTest, o.clipShadows = n.clipShadows, o.clippingPlanes = n.clippingPlanes, o.clipIntersection = n.clipIntersection, o.displacementMap = n.displacementMap, o.displacementScale = n.displacementScale, o.displacementBias = n.displacementBias, o.wireframeLinewidth = n.wireframeLinewidth, o.linewidth = n.linewidth, !0 === i.isPointLight && !0 === o.isMeshDistanceMaterial && (o.referencePosition.setFromMatrixPosition(i.matrixWorld), o.nearDistance = r, o.farDistance = a), o
      }

      function y(n, r, a, s, o) {
         if (!1 === n.visible) return;
         if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
            const i = e.update(n),
               r = n.material;
            if (Array.isArray(r)) {
               const e = i.groups;
               for (let l = 0, c = e.length; l < c; l++) {
                  const c = e[l],
                     u = r[c.materialIndex];
                  if (u && u.visible) {
                     const e = x(n, u, s, a.near, a.far, o);
                     t.renderBufferDirect(a, null, i, e, n, c)
                  }
               }
            } else if (r.visible) {
               const e = x(n, r, s, a.near, a.far, o);
               t.renderBufferDirect(a, null, i, e, n, null)
            }
         }
         const l = n.children;
         for (let t = 0, e = l.length; t < e; t++) y(l[t], r, a, s, o)
      }
      this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, n, l) {
         if (!1 === _.enabled) return;
         if (!1 === _.autoUpdate && !1 === _.needsUpdate) return;
         if (0 === e.length) return;
         const c = t.getRenderTarget(),
            u = t.getActiveCubeFace(),
            d = t.getActiveMipmapLevel(),
            p = t.state;
         p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
         for (let c = 0, u = e.length; c < u; c++) {
            const u = e[c],
               d = u.shadow;
            if (void 0 === d) {
               console.warn("THREE.WebGLShadowMap:", u, "has no shadow.");
               continue
            }
            if (!1 === d.autoUpdate && !1 === d.needsUpdate) continue;
            r.copy(d.mapSize);
            const f = d.getFrameExtents();
            if (r.multiply(f), a.copy(d.mapSize), (r.x > h || r.y > h) && (r.x > h && (a.x = Math.floor(h / f.x), r.x = a.x * f.x, d.mapSize.x = a.x), r.y > h && (a.y = Math.floor(h / f.y), r.y = a.y * f.y, d.mapSize.y = a.y)), null === d.map) {
               const t = 3 !== this.type ? {
                  minFilter: o,
                  magFilter: o
               } : {};
               d.map = new ht(r.x, r.y, t), d.map.texture.name = u.name + ".shadowMap", d.camera.updateProjectionMatrix()
            }
            t.setRenderTarget(d.map), t.clear();
            const m = d.getViewportCount();
            for (let t = 0; t < m; t++) {
               const e = d.getViewport(t);
               s.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w), p.viewport(s), d.updateMatrices(u, t), i = d.getFrustum(), y(n, l, d.camera, u, this.type)
            }!0 !== d.isPointLightShadow && 3 === this.type && v(d, l), d.needsUpdate = !1
         }
         _.needsUpdate = !1, t.setRenderTarget(c, u, d)
      }
   }

   function Yr(e, n, i) {
      const r = i.isWebGL2,
         a = new function() {
            let t = !1;
            const n = new ut;
            let i = null;
            const r = new ut(0, 0, 0, 0);
            return {
               setMask: function(n) {
                  i === n || t || (e.colorMask(n, n, n, n), i = n)
               },
               setLocked: function(e) {
                  t = e
               },
               setClear: function(t, i, a, s, o) {
                  !0 === o && (t *= s, i *= s, a *= s), n.set(t, i, a, s), !1 === r.equals(n) && (e.clearColor(t, i, a, s), r.copy(n))
               },
               reset: function() {
                  t = !1, i = null, r.set(-1, 0, 0, 0)
               }
            }
         },
         s = new function() {
            let t = !1,
               n = null,
               i = null,
               r = null;
            return {
               setTest: function(t) {
                  t ? B(2929) : V(2929)
               },
               setMask: function(i) {
                  n === i || t || (e.depthMask(i), n = i)
               },
               setFunc: function(t) {
                  if (i !== t) {
                     switch (t) {
                        case 0:
                           e.depthFunc(512);
                           break;
                        case 1:
                           e.depthFunc(519);
                           break;
                        case 2:
                           e.depthFunc(513);
                           break;
                        case 3:
                        default:
                           e.depthFunc(515);
                           break;
                        case 4:
                           e.depthFunc(514);
                           break;
                        case 5:
                           e.depthFunc(518);
                           break;
                        case 6:
                           e.depthFunc(516);
                           break;
                        case 7:
                           e.depthFunc(517)
                     }
                     i = t
                  }
               },
               setLocked: function(e) {
                  t = e
               },
               setClear: function(t) {
                  r !== t && (e.clearDepth(t), r = t)
               },
               reset: function() {
                  t = !1, n = null, i = null, r = null
               }
            }
         },
         o = new function() {
            let t = !1,
               n = null,
               i = null,
               r = null,
               a = null,
               s = null,
               o = null,
               l = null,
               c = null;
            return {
               setTest: function(e) {
                  t || (e ? B(2960) : V(2960))
               },
               setMask: function(i) {
                  n === i || t || (e.stencilMask(i), n = i)
               },
               setFunc: function(t, n, s) {
                  i === t && r === n && a === s || (e.stencilFunc(t, n, s), i = t, r = n, a = s)
               },
               setOp: function(t, n, i) {
                  s === t && o === n && l === i || (e.stencilOp(t, n, i), s = t, o = n, l = i)
               },
               setLocked: function(e) {
                  t = e
               },
               setClear: function(t) {
                  c !== t && (e.clearStencil(t), c = t)
               },
               reset: function() {
                  t = !1, n = null, i = null, r = null, a = null, s = null, o = null, l = null, c = null
               }
            }
         },
         l = new WeakMap,
         c = new WeakMap;
      let u = {},
         h = {},
         d = new WeakMap,
         p = [],
         f = null,
         m = !1,
         g = null,
         _ = null,
         v = null,
         x = null,
         y = null,
         b = null,
         M = null,
         S = !1,
         w = null,
         T = null,
         E = null,
         A = null,
         C = null;
      const L = e.getParameter(35661);
      let P = !1,
         R = 0;
      const D = e.getParameter(7938); - 1 !== D.indexOf("WebGL") ? (R = parseFloat(/^WebGL (\d)/.exec(D)[1]), P = R >= 1) : -1 !== D.indexOf("OpenGL ES") && (R = parseFloat(/^OpenGL ES (\d)/.exec(D)[1]), P = R >= 2);
      let O = null,
         I = {};
      const z = e.getParameter(3088),
         N = e.getParameter(2978),
         U = (new ut).fromArray(z),
         F = (new ut).fromArray(N);

      function k(t, n, i) {
         const r = new Uint8Array(4),
            a = e.createTexture();
         e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
         for (let t = 0; t < i; t++) e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
         return a
      }
      const H = {};

      function B(t) {
         !0 !== u[t] && (e.enable(t), u[t] = !0)
      }

      function V(t) {
         !1 !== u[t] && (e.disable(t), u[t] = !1)
      }
      H[3553] = k(3553, 3553, 1), H[34067] = k(34067, 34069, 6), a.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), B(2929), s.setFunc(3), X(!1), q(1), B(2884), j(0);
      const G = {
         [t]: 32774,
         101: 32778,
         102: 32779
      };
      if (r) G[103] = 32775, G[104] = 32776;
      else {
         const t = n.get("EXT_blend_minmax");
         null !== t && (G[103] = t.MIN_EXT, G[104] = t.MAX_EXT)
      }
      const W = {
         200: 0,
         201: 1,
         202: 768,
         204: 770,
         210: 776,
         208: 774,
         206: 772,
         203: 769,
         205: 771,
         209: 775,
         207: 773
      };

      function j(n, i, r, a, s, o, l, c) {
         if (0 !== n) {
            if (!1 === m && (B(3042), m = !0), 5 === n) s = s || i, o = o || r, l = l || a, i === _ && s === y || (e.blendEquationSeparate(G[i], G[s]), _ = i, y = s), r === v && a === x && o === b && l === M || (e.blendFuncSeparate(W[r], W[a], W[o], W[l]), v = r, x = a, b = o, M = l), g = n, S = null;
            else if (n !== g || c !== S) {
               if (_ === t && y === t || (e.blendEquation(32774), _ = t, y = t), c) switch (n) {
                  case 1:
                     e.blendFuncSeparate(1, 771, 1, 771);
                     break;
                  case 2:
                     e.blendFunc(1, 1);
                     break;
                  case 3:
                     e.blendFuncSeparate(0, 769, 0, 1);
                     break;
                  case 4:
                     e.blendFuncSeparate(0, 768, 0, 770);
                     break;
                  default:
                     console.error("THREE.WebGLState: Invalid blending: ", n)
               } else switch (n) {
                  case 1:
                     e.blendFuncSeparate(770, 771, 1, 771);
                     break;
                  case 2:
                     e.blendFunc(770, 1);
                     break;
                  case 3:
                     e.blendFuncSeparate(0, 769, 0, 1);
                     break;
                  case 4:
                     e.blendFunc(0, 768);
                     break;
                  default:
                     console.error("THREE.WebGLState: Invalid blending: ", n)
               }
               v = null, x = null, b = null, M = null, g = n, S = c
            }
         } else !0 === m && (V(3042), m = !1)
      }

      function X(t) {
         w !== t && (t ? e.frontFace(2304) : e.frontFace(2305), w = t)
      }

      function q(t) {
         0 !== t ? (B(2884), t !== T && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : V(2884), T = t
      }

      function Y(t, n, i) {
         t ? (B(32823), A === n && C === i || (e.polygonOffset(n, i), A = n, C = i)) : V(32823)
      }
      return {
         buffers: {
            color: a,
            depth: s,
            stencil: o
         },
         enable: B,
         disable: V,
         bindFramebuffer: function(t, n) {
            return h[t] !== n && (e.bindFramebuffer(t, n), h[t] = n, r && (36009 === t && (h[36160] = n), 36160 === t && (h[36009] = n)), !0)
         },
         drawBuffers: function(t, r) {
            let a = p,
               s = !1;
            if (t)
               if (a = d.get(r), void 0 === a && (a = [], d.set(r, a)), t.isWebGLMultipleRenderTargets) {
                  const e = t.texture;
                  if (a.length !== e.length || 36064 !== a[0]) {
                     for (let t = 0, n = e.length; t < n; t++) a[t] = 36064 + t;
                     a.length = e.length, s = !0
                  }
               } else 36064 !== a[0] && (a[0] = 36064, s = !0);
            else 1029 !== a[0] && (a[0] = 1029, s = !0);
            s && (i.isWebGL2 ? e.drawBuffers(a) : n.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))
         },
         useProgram: function(t) {
            return f !== t && (e.useProgram(t), f = t, !0)
         },
         setBlending: j,
         setMaterial: function(t, e) {
            2 === t.side ? V(2884) : B(2884);
            let n = 1 === t.side;
            e && (n = !n), X(n), 1 === t.blending && !1 === t.transparent ? j(0) : j(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), a.setMask(t.colorWrite);
            const i = t.stencilWrite;
            o.setTest(i), i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), Y(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? B(32926) : V(32926)
         },
         setFlipSided: X,
         setCullFace: q,
         setLineWidth: function(t) {
            t !== E && (P && e.lineWidth(t), E = t)
         },
         setPolygonOffset: Y,
         setScissorTest: function(t) {
            t ? B(3089) : V(3089)
         },
         activeTexture: function(t) {
            void 0 === t && (t = 33984 + L - 1), O !== t && (e.activeTexture(t), O = t)
         },
         bindTexture: function(t, n, i) {
            void 0 === i && (i = null === O ? 33984 + L - 1 : O);
            let r = I[i];
            void 0 === r && (r = {
               type: void 0,
               texture: void 0
            }, I[i] = r), r.type === t && r.texture === n || (O !== i && (e.activeTexture(i), O = i), e.bindTexture(t, n || H[t]), r.type = t, r.texture = n)
         },
         unbindTexture: function() {
            const t = I[O];
            void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
         },
         compressedTexImage2D: function() {
            try {
               e.compressedTexImage2D.apply(e, arguments)
            } catch (t) {
               console.error("THREE.WebGLState:", t)
            }
         },
         texImage2D: function() {
            try {
               e.texImage2D.apply(e, arguments)
            } catch (t) {
               console.error("THREE.WebGLState:", t)
            }
         },
         texImage3D: function() {
            try {
               e.texImage3D.apply(e, arguments)
            } catch (t) {
               console.error("THREE.WebGLState:", t)
            }
         },
         updateUBOMapping: function(t, n) {
            let i = c.get(n);
            void 0 === i && (i = new WeakMap, c.set(n, i));
            let r = i.get(t);
            void 0 === r && (r = e.getUniformBlockIndex(n, t.name), i.set(t, r))
         },
         uniformBlockBinding: function(t, n) {
            const i = c.get(n).get(t);
            l.get(t) !== i && (e.uniformBlockBinding(n, i, t.__bindingPointIndex), l.set(t, i))
         },
         texStorage2D: function() {
            try {
               e.texStorage2D.apply(e, arguments)
            } catch (t) {
               console.error("THREE.WebGLState:", t)
            }
         },
         texStorage3D: function() {
            try {
               e.texStorage3D.apply(e, arguments)
            } catch (t) {
               console.error("THREE.WebGLState:", t)
            }
         },
         texSubImage2D: function() {
            try {
               e.texSubImage2D.apply(e, arguments)
            } catch (t) {
               console.error("THREE.WebGLState:", t)
            }
         },
         texSubImage3D: function() {
            try {
               e.texSubImage3D.apply(e, arguments)
            } catch (t) {
               console.error("THREE.WebGLState:", t)
            }
         },
         compressedTexSubImage2D: function() {
            try {
               e.compressedTexSubImage2D.apply(e, arguments)
            } catch (t) {
               console.error("THREE.WebGLState:", t)
            }
         },
         scissor: function(t) {
            !1 === U.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), U.copy(t))
         },
         viewport: function(t) {
            !1 === F.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), F.copy(t))
         },
         reset: function() {
            e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.disable(32926), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(519, 0, 4294967295), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.bindFramebuffer(36160, null), !0 === r && (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), u = {}, O = null, I = {}, h = {}, d = new WeakMap, p = [], f = null, m = !1, g = null, _ = null, v = null, x = null, y = null, b = null, M = null, S = !1, w = null, T = null, E = null, A = null, C = null, U.set(0, 0, e.canvas.width, e.canvas.height), F.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), s.reset(), o.reset()
         }
      }
   }

   function Zr(t, e, n, i, v, x, y) {
      const b = v.isWebGL2,
         M = v.maxTextures,
         S = v.maxCubemapSize,
         w = v.maxTextureSize,
         A = v.maxSamples,
         C = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
         L = /OculusBrowser/g.test(navigator.userAgent),
         P = new WeakMap;
      let D;
      const O = new WeakMap;
      let I = !1;
      try {
         I = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
      } catch (t) {}

      function z(t, e) {
         return I ? new OffscreenCanvas(t, e) : X("canvas")
      }

      function N(t, e, n, i) {
         let r = 1;
         if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
               const i = e ? H : Math.floor,
                  a = i(r * t.width),
                  s = i(r * t.height);
               void 0 === D && (D = z(a, s));
               const o = n ? z(a, s) : D;
               return o.width = a, o.height = s, o.getContext("2d").drawImage(t, 0, 0, a, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a + "x" + s + ")."), o
            }
            return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
         }
         return t
      }

      function U(t) {
         return k(t.width) && k(t.height)
      }

      function F(t, e) {
         return t.generateMipmaps && e && t.minFilter !== o && t.minFilter !== l
      }

      function B(e) {
         t.generateMipmap(e)
      }

      function V(n, i, r, a, s = !1) {
         if (!1 === b) return i;
         if (null !== n) {
            if (void 0 !== t[n]) return t[n];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
         }
         let o = i;
         return 6403 === i && (5126 === r && (o = 33326), 5131 === r && (o = 33325), 5121 === r && (o = 33321)), 33319 === i && (5126 === r && (o = 33328), 5131 === r && (o = 33327), 5121 === r && (o = 33323)), 6408 === i && (5126 === r && (o = 34836), 5131 === r && (o = 34842), 5121 === r && (o = a === E && !1 === s ? 35907 : 32856), 32819 === r && (o = 32854), 32820 === r && (o = 32855)), 33325 !== o && 33326 !== o && 33327 !== o && 33328 !== o && 34842 !== o && 34836 !== o || e.get("EXT_color_buffer_float"), o
      }

      function G(t, e, n) {
         return !0 === F(t, n) || t.isFramebufferTexture && t.minFilter !== o && t.minFilter !== l ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1
      }

      function W(t) {
         return t === o || 1004 === t || 1005 === t ? 9728 : 9729
      }

      function j(t) {
         const e = t.target;
         e.removeEventListener("dispose", j),
            function(t) {
               const e = i.get(t);
               if (void 0 === e.__webglInit) return;
               const n = t.source,
                  r = O.get(n);
               if (r) {
                  const i = r[e.__cacheKey];
                  i.usedTimes--, 0 === i.usedTimes && Y(t), 0 === Object.keys(r).length && O.delete(n)
               }
               i.remove(t)
            }(e), e.isVideoTexture && P.delete(e)
      }

      function q(e) {
         const n = e.target;
         n.removeEventListener("dispose", q),
            function(e) {
               const n = e.texture,
                  r = i.get(e),
                  a = i.get(n);
               if (void 0 !== a.__webglTexture && (t.deleteTexture(a.__webglTexture), y.memory.textures--), e.depthTexture && e.depthTexture.dispose(), e.isWebGLCubeRenderTarget)
                  for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
               else {
                  if (t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer)
                     for (let e = 0; e < r.__webglColorRenderbuffer.length; e++) r.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                  r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer)
               }
               if (e.isWebGLMultipleRenderTargets)
                  for (let e = 0, r = n.length; e < r; e++) {
                     const r = i.get(n[e]);
                     r.__webglTexture && (t.deleteTexture(r.__webglTexture), y.memory.textures--), i.remove(n[e])
                  }
               i.remove(n), i.remove(e)
            }(n)
      }

      function Y(e) {
         const n = i.get(e);
         t.deleteTexture(n.__webglTexture);
         const r = e.source;
         delete O.get(r)[n.__cacheKey], y.memory.textures--
      }
      let Z = 0;

      function K(t, e) {
         const r = i.get(t);
         if (t.isVideoTexture && function(t) {
               const e = y.render.frame;
               P.get(t) !== e && (P.set(t, e), t.update())
            }(t), !1 === t.isRenderTargetTexture && t.version > 0 && r.__version !== t.version) {
            const n = t.image;
            if (null === n) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else {
               if (!1 !== n.complete) return void et(r, t, e);
               console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
            }
         }
         n.bindTexture(3553, r.__webglTexture, 33984 + e)
      }
      const J = {
            [r]: 10497,
            [a]: 33071,
            [s]: 33648
         },
         Q = {
            [o]: 9728,
            1004: 9984,
            1005: 9986,
            [l]: 9729,
            1007: 9985,
            [c]: 9987
         };

      function $(n, r, s) {
         if (s ? (t.texParameteri(n, 10242, J[r.wrapS]), t.texParameteri(n, 10243, J[r.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, J[r.wrapR]), t.texParameteri(n, 10240, Q[r.magFilter]), t.texParameteri(n, 10241, Q[r.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), r.wrapS === a && r.wrapT === a || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, W(r.magFilter)), t.texParameteri(n, 10241, W(r.minFilter)), r.minFilter !== o && r.minFilter !== l && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
            const a = e.get("EXT_texture_filter_anisotropic");
            if (r.type === d && !1 === e.has("OES_texture_float_linear")) return;
            if (!1 === b && r.type === p && !1 === e.has("OES_texture_half_float_linear")) return;
            (r.anisotropy > 1 || i.get(r).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, v.getMaxAnisotropy())), i.get(r).__currentAnisotropy = r.anisotropy)
         }
      }

      function tt(e, n) {
         let i = !1;
         void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", j));
         const r = n.source;
         let a = O.get(r);
         void 0 === a && (a = {}, O.set(r, a));
         const s = function(t) {
            const e = [];
            return e.push(t.wrapS), e.push(t.wrapT), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join()
         }(n);
         if (s !== e.__cacheKey) {
            void 0 === a[s] && (a[s] = {
               texture: t.createTexture(),
               usedTimes: 0
            }, y.memory.textures++, i = !0), a[s].usedTimes++;
            const r = a[e.__cacheKey];
            void 0 !== r && (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && Y(n)), e.__cacheKey = s, e.__webglTexture = a[s].texture
         }
         return i
      }

      function et(e, r, s) {
         let c = 3553;
         r.isDataArrayTexture && (c = 35866), r.isData3DTexture && (c = 32879);
         const u = tt(e, r),
            p = r.source;
         n.bindTexture(c, e.__webglTexture, 33984 + s);
         const v = i.get(p);
         if (p.version !== v.__version || !0 === u) {
            n.activeTexture(33984 + s), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), t.pixelStorei(3317, r.unpackAlignment), t.pixelStorei(37443, 0);
            const e = function(t) {
               return !b && (t.wrapS !== a || t.wrapT !== a || t.minFilter !== o && t.minFilter !== l)
            }(r) && !1 === U(r.image);
            let i = N(r.image, e, !1, w);
            i = lt(r, i);
            const y = U(i) || b,
               M = x.convert(r.format, r.encoding);
            let S, T = x.convert(r.type),
               E = V(r.internalFormat, M, T, r.encoding, r.isVideoTexture);
            $(c, r, y);
            const A = r.mipmaps,
               C = b && !0 !== r.isVideoTexture,
               L = void 0 === v.__version || !0 === u,
               P = G(r, i, y);
            if (r.isDepthTexture) E = 6402, b ? E = r.type === d ? 36012 : r.type === h ? 33190 : r.type === f ? 35056 : 33189 : r.type === d && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), r.format === g && 6402 === E && 1012 !== r.type && r.type !== h && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = h, T = x.convert(r.type)), r.format === _ && 6402 === E && (E = 34041, r.type !== f && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = f, T = x.convert(r.type))), L && (C ? n.texStorage2D(3553, 1, E, i.width, i.height) : n.texImage2D(3553, 0, E, i.width, i.height, 0, M, T, null));
            else if (r.isDataTexture)
               if (A.length > 0 && y) {
                  C && L && n.texStorage2D(3553, P, E, A[0].width, A[0].height);
                  for (let t = 0, e = A.length; t < e; t++) S = A[t], C ? n.texSubImage2D(3553, t, 0, 0, S.width, S.height, M, T, S.data) : n.texImage2D(3553, t, E, S.width, S.height, 0, M, T, S.data);
                  r.generateMipmaps = !1
               } else C ? (L && n.texStorage2D(3553, P, E, i.width, i.height), n.texSubImage2D(3553, 0, 0, 0, i.width, i.height, M, T, i.data)) : n.texImage2D(3553, 0, E, i.width, i.height, 0, M, T, i.data);
            else if (r.isCompressedTexture) {
               C && L && n.texStorage2D(3553, P, E, A[0].width, A[0].height);
               for (let t = 0, e = A.length; t < e; t++) S = A[t], r.format !== m ? null !== M ? C ? n.compressedTexSubImage2D(3553, t, 0, 0, S.width, S.height, M, S.data) : n.compressedTexImage2D(3553, t, E, S.width, S.height, 0, S.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? n.texSubImage2D(3553, t, 0, 0, S.width, S.height, M, T, S.data) : n.texImage2D(3553, t, E, S.width, S.height, 0, M, T, S.data)
            } else if (r.isDataArrayTexture) C ? (L && n.texStorage3D(35866, P, E, i.width, i.height, i.depth), n.texSubImage3D(35866, 0, 0, 0, 0, i.width, i.height, i.depth, M, T, i.data)) : n.texImage3D(35866, 0, E, i.width, i.height, i.depth, 0, M, T, i.data);
            else if (r.isData3DTexture) C ? (L && n.texStorage3D(32879, P, E, i.width, i.height, i.depth), n.texSubImage3D(32879, 0, 0, 0, 0, i.width, i.height, i.depth, M, T, i.data)) : n.texImage3D(32879, 0, E, i.width, i.height, i.depth, 0, M, T, i.data);
            else if (r.isFramebufferTexture) {
               if (L)
                  if (C) n.texStorage2D(3553, P, E, i.width, i.height);
                  else {
                     let t = i.width,
                        e = i.height;
                     for (let i = 0; i < P; i++) n.texImage2D(3553, i, E, t, e, 0, M, T, null), t >>= 1, e >>= 1
                  }
            } else if (A.length > 0 && y) {
               C && L && n.texStorage2D(3553, P, E, A[0].width, A[0].height);
               for (let t = 0, e = A.length; t < e; t++) S = A[t], C ? n.texSubImage2D(3553, t, 0, 0, M, T, S) : n.texImage2D(3553, t, E, M, T, S);
               r.generateMipmaps = !1
            } else C ? (L && n.texStorage2D(3553, P, E, i.width, i.height), n.texSubImage2D(3553, 0, 0, 0, M, T, i)) : n.texImage2D(3553, 0, E, M, T, i);
            F(r, y) && B(c), v.__version = p.version, r.onUpdate && r.onUpdate(r)
         }
         e.__version = r.version
      }

      function nt(e, r, a, s, o) {
         const l = x.convert(a.format, a.encoding),
            c = x.convert(a.type),
            u = V(a.internalFormat, l, c, a.encoding);
         i.get(r).__hasExternalTextures || (32879 === o || 35866 === o ? n.texImage3D(o, 0, u, r.width, r.height, r.depth, 0, l, c, null) : n.texImage2D(o, 0, u, r.width, r.height, 0, l, c, null)), n.bindFramebuffer(36160, e), ot(r) ? C.framebufferTexture2DMultisampleEXT(36160, s, o, i.get(a).__webglTexture, 0, st(r)) : t.framebufferTexture2D(36160, s, o, i.get(a).__webglTexture, 0), n.bindFramebuffer(36160, null)
      }

      function it(e, n, i) {
         if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
            let r = 33189;
            if (i || ot(n)) {
               const e = n.depthTexture;
               e && e.isDepthTexture && (e.type === d ? r = 36012 : e.type === h && (r = 33190));
               const i = st(n);
               ot(n) ? C.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height) : t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
            } else t.renderbufferStorage(36161, r, n.width, n.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e)
         } else if (n.depthBuffer && n.stencilBuffer) {
            const r = st(n);
            i && !1 === ot(n) ? t.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height) : ot(n) ? C.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height) : t.renderbufferStorage(36161, 34041, n.width, n.height), t.framebufferRenderbuffer(36160, 33306, 36161, e)
         } else {
            const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
            for (let r = 0; r < e.length; r++) {
               const a = e[r],
                  s = x.convert(a.format, a.encoding),
                  o = x.convert(a.type),
                  l = V(a.internalFormat, s, o, a.encoding),
                  c = st(n);
               i && !1 === ot(n) ? t.renderbufferStorageMultisample(36161, c, l, n.width, n.height) : ot(n) ? C.renderbufferStorageMultisampleEXT(36161, c, l, n.width, n.height) : t.renderbufferStorage(36161, l, n.width, n.height)
            }
         }
         t.bindRenderbuffer(36161, null)
      }

      function rt(e) {
         const r = i.get(e),
            a = !0 === e.isWebGLCubeRenderTarget;
         if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (a) throw new Error("target.depthTexture not supported in Cube render targets");
            ! function(e, r) {
               if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
               if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
               i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), K(r.depthTexture, 0);
               const a = i.get(r.depthTexture).__webglTexture,
                  s = st(r);
               if (r.depthTexture.format === g) ot(r) ? C.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, a, 0, s) : t.framebufferTexture2D(36160, 36096, 3553, a, 0);
               else {
                  if (r.depthTexture.format !== _) throw new Error("Unknown depthTexture format");
                  ot(r) ? C.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, a, 0, s) : t.framebufferTexture2D(36160, 33306, 3553, a, 0)
               }
            }(r.__webglFramebuffer, e)
         } else if (a) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++) n.bindFramebuffer(36160, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), it(r.__webglDepthbuffer[i], e, !1)
         } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), it(r.__webglDepthbuffer, e, !1);
         n.bindFramebuffer(36160, null)
      }

      function st(t) {
         return Math.min(A, t.samples)
      }

      function ot(t) {
         const n = i.get(t);
         return b && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture
      }

      function lt(t, n) {
         const i = t.encoding,
            r = t.format,
            a = t.type;
         return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || t.format === R || i !== T && (i === E ? !1 === b ? !0 === e.has("EXT_sRGB") && r === m ? (t.format = R, t.minFilter = l, t.generateMipmaps = !1) : n = at.sRGBToLinear(n) : r === m && a === u || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)), n
      }
      this.allocateTextureUnit = function() {
         const t = Z;
         return t >= M && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + M), Z += 1, t
      }, this.resetTextureUnits = function() {
         Z = 0
      }, this.setTexture2D = K, this.setTexture2DArray = function(t, e) {
         const r = i.get(t);
         t.version > 0 && r.__version !== t.version ? et(r, t, e) : n.bindTexture(35866, r.__webglTexture, 33984 + e)
      }, this.setTexture3D = function(t, e) {
         const r = i.get(t);
         t.version > 0 && r.__version !== t.version ? et(r, t, e) : n.bindTexture(32879, r.__webglTexture, 33984 + e)
      }, this.setTextureCube = function(e, r) {
         const a = i.get(e);
         e.version > 0 && a.__version !== e.version ? function(e, r, a) {
            if (6 !== r.image.length) return;
            const s = tt(e, r),
               o = r.source;
            n.bindTexture(34067, e.__webglTexture, 33984 + a);
            const l = i.get(o);
            if (o.version !== l.__version || !0 === s) {
               n.activeTexture(33984 + a), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), t.pixelStorei(3317, r.unpackAlignment), t.pixelStorei(37443, 0);
               const e = r.isCompressedTexture || r.image[0].isCompressedTexture,
                  i = r.image[0] && r.image[0].isDataTexture,
                  c = [];
               for (let t = 0; t < 6; t++) c[t] = e || i ? i ? r.image[t].image : r.image[t] : N(r.image[t], !1, !0, S), c[t] = lt(r, c[t]);
               const u = c[0],
                  h = U(u) || b,
                  d = x.convert(r.format, r.encoding),
                  p = x.convert(r.type),
                  f = V(r.internalFormat, d, p, r.encoding),
                  g = b && !0 !== r.isVideoTexture,
                  _ = void 0 === l.__version || !0 === s;
               let v, y = G(r, u, h);
               if ($(34067, r, h), e) {
                  g && _ && n.texStorage2D(34067, y, f, u.width, u.height);
                  for (let t = 0; t < 6; t++) {
                     v = c[t].mipmaps;
                     for (let e = 0; e < v.length; e++) {
                        const i = v[e];
                        r.format !== m ? null !== d ? g ? n.compressedTexSubImage2D(34069 + t, e, 0, 0, i.width, i.height, d, i.data) : n.compressedTexImage2D(34069 + t, e, f, i.width, i.height, 0, i.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g ? n.texSubImage2D(34069 + t, e, 0, 0, i.width, i.height, d, p, i.data) : n.texImage2D(34069 + t, e, f, i.width, i.height, 0, d, p, i.data)
                     }
                  }
               } else {
                  v = r.mipmaps, g && _ && (v.length > 0 && y++, n.texStorage2D(34067, y, f, c[0].width, c[0].height));
                  for (let t = 0; t < 6; t++)
                     if (i) {
                        g ? n.texSubImage2D(34069 + t, 0, 0, 0, c[t].width, c[t].height, d, p, c[t].data) : n.texImage2D(34069 + t, 0, f, c[t].width, c[t].height, 0, d, p, c[t].data);
                        for (let e = 0; e < v.length; e++) {
                           const i = v[e].image[t].image;
                           g ? n.texSubImage2D(34069 + t, e + 1, 0, 0, i.width, i.height, d, p, i.data) : n.texImage2D(34069 + t, e + 1, f, i.width, i.height, 0, d, p, i.data)
                        }
                     } else {
                        g ? n.texSubImage2D(34069 + t, 0, 0, 0, d, p, c[t]) : n.texImage2D(34069 + t, 0, f, d, p, c[t]);
                        for (let e = 0; e < v.length; e++) {
                           const i = v[e];
                           g ? n.texSubImage2D(34069 + t, e + 1, 0, 0, d, p, i.image[t]) : n.texImage2D(34069 + t, e + 1, f, d, p, i.image[t])
                        }
                     }
               }
               F(r, h) && B(34067), l.__version = o.version, r.onUpdate && r.onUpdate(r)
            }
            e.__version = r.version
         }(a, e, r) : n.bindTexture(34067, a.__webglTexture, 33984 + r)
      }, this.rebindTextures = function(t, e, n) {
         const r = i.get(t);
         void 0 !== e && nt(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== n && rt(t)
      }, this.setupRenderTarget = function(e) {
         const r = e.texture,
            a = i.get(e),
            s = i.get(r);
         e.addEventListener("dispose", q), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === s.__webglTexture && (s.__webglTexture = t.createTexture()), s.__version = r.version, y.memory.textures++);
         const o = !0 === e.isWebGLCubeRenderTarget,
            l = !0 === e.isWebGLMultipleRenderTargets,
            c = U(e) || b;
         if (o) {
            a.__webglFramebuffer = [];
            for (let e = 0; e < 6; e++) a.__webglFramebuffer[e] = t.createFramebuffer()
         } else {
            if (a.__webglFramebuffer = t.createFramebuffer(), l)
               if (v.drawBuffers) {
                  const n = e.texture;
                  for (let e = 0, r = n.length; e < r; e++) {
                     const r = i.get(n[e]);
                     void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), y.memory.textures++)
                  }
               } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            if (b && e.samples > 0 && !1 === ot(e)) {
               const i = l ? r : [r];
               a.__webglMultisampledFramebuffer = t.createFramebuffer(), a.__webglColorRenderbuffer = [], n.bindFramebuffer(36160, a.__webglMultisampledFramebuffer);
               for (let n = 0; n < i.length; n++) {
                  const r = i[n];
                  a.__webglColorRenderbuffer[n] = t.createRenderbuffer(), t.bindRenderbuffer(36161, a.__webglColorRenderbuffer[n]);
                  const s = x.convert(r.format, r.encoding),
                     o = x.convert(r.type),
                     l = V(r.internalFormat, s, o, r.encoding, !0 === e.isXRRenderTarget),
                     c = st(e);
                  t.renderbufferStorageMultisample(36161, c, l, e.width, e.height), t.framebufferRenderbuffer(36160, 36064 + n, 36161, a.__webglColorRenderbuffer[n])
               }
               t.bindRenderbuffer(36161, null), e.depthBuffer && (a.__webglDepthRenderbuffer = t.createRenderbuffer(), it(a.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null)
            }
         }
         if (o) {
            n.bindTexture(34067, s.__webglTexture), $(34067, r, c);
            for (let t = 0; t < 6; t++) nt(a.__webglFramebuffer[t], e, r, 36064, 34069 + t);
            F(r, c) && B(34067), n.unbindTexture()
         } else if (l) {
            const t = e.texture;
            for (let r = 0, s = t.length; r < s; r++) {
               const s = t[r],
                  o = i.get(s);
               n.bindTexture(3553, o.__webglTexture), $(3553, s, c), nt(a.__webglFramebuffer, e, s, 36064 + r, 3553), F(s, c) && B(3553)
            }
            n.unbindTexture()
         } else {
            let t = 3553;
            (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (b ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(t, s.__webglTexture), $(t, r, c), nt(a.__webglFramebuffer, e, r, 36064, t), F(r, c) && B(t), n.unbindTexture()
         }
         e.depthBuffer && rt(e)
      }, this.updateRenderTargetMipmap = function(t) {
         const e = U(t) || b,
            r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
         for (let a = 0, s = r.length; a < s; a++) {
            const s = r[a];
            if (F(s, e)) {
               const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                  r = i.get(s).__webglTexture;
               n.bindTexture(e, r), B(e), n.unbindTexture()
            }
         }
      }, this.updateMultisampleRenderTarget = function(e) {
         if (b && e.samples > 0 && !1 === ot(e)) {
            const r = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture],
               a = e.width,
               s = e.height;
            let o = 16384;
            const l = [],
               c = e.stencilBuffer ? 33306 : 36096,
               u = i.get(e),
               h = !0 === e.isWebGLMultipleRenderTargets;
            if (h)
               for (let e = 0; e < r.length; e++) n.bindFramebuffer(36160, u.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, null), n.bindFramebuffer(36160, u.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
            n.bindFramebuffer(36008, u.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, u.__webglFramebuffer);
            for (let n = 0; n < r.length; n++) {
               l.push(36064 + n), e.depthBuffer && l.push(c);
               const d = void 0 !== u.__ignoreDepthValues && u.__ignoreDepthValues;
               if (!1 === d && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), h && t.framebufferRenderbuffer(36008, 36064, 36161, u.__webglColorRenderbuffer[n]), !0 === d && (t.invalidateFramebuffer(36008, [c]), t.invalidateFramebuffer(36009, [c])), h) {
                  const e = i.get(r[n]).__webglTexture;
                  t.framebufferTexture2D(36009, 36064, 3553, e, 0)
               }
               t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, 9728), L && t.invalidateFramebuffer(36008, l)
            }
            if (n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, null), h)
               for (let e = 0; e < r.length; e++) {
                  n.bindFramebuffer(36160, u.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, u.__webglColorRenderbuffer[e]);
                  const a = i.get(r[e]).__webglTexture;
                  n.bindFramebuffer(36160, u.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, a, 0)
               }
            n.bindFramebuffer(36009, u.__webglMultisampledFramebuffer)
         }
      }, this.setupDepthRenderbuffer = rt, this.setupFrameBufferTexture = nt, this.useMultisampledRTT = ot
   }

   function Kr(t, e, n) {
      const i = n.isWebGL2;
      return {
         convert: function(n, r = null) {
            let a;
            if (n === u) return 5121;
            if (1017 === n) return 32819;
            if (1018 === n) return 32820;
            if (1010 === n) return 5120;
            if (1011 === n) return 5122;
            if (1012 === n) return 5123;
            if (1013 === n) return 5124;
            if (n === h) return 5125;
            if (n === d) return 5126;
            if (n === p) return i ? 5131 : (a = e.get("OES_texture_half_float"), null !== a ? a.HALF_FLOAT_OES : null);
            if (1021 === n) return 6406;
            if (n === m) return 6408;
            if (1024 === n) return 6409;
            if (1025 === n) return 6410;
            if (n === g) return 6402;
            if (n === _) return 34041;
            if (1028 === n) return 6403;
            if (1022 === n) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
            if (n === R) return a = e.get("EXT_sRGB"), null !== a ? a.SRGB_ALPHA_EXT : null;
            if (1029 === n) return 36244;
            if (1030 === n) return 33319;
            if (1031 === n) return 33320;
            if (1033 === n) return 36249;
            if (n === v || n === x || n === y || n === b)
               if (r === E) {
                  if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === a) return null;
                  if (n === v) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                  if (n === x) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                  if (n === y) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                  if (n === b) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
               } else {
                  if (a = e.get("WEBGL_compressed_texture_s3tc"), null === a) return null;
                  if (n === v) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                  if (n === x) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                  if (n === y) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                  if (n === b) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
               } if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
               if (a = e.get("WEBGL_compressed_texture_pvrtc"), null === a) return null;
               if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
               if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
               if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
               if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (36196 === n) return a = e.get("WEBGL_compressed_texture_etc1"), null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (37492 === n || 37496 === n) {
               if (a = e.get("WEBGL_compressed_texture_etc"), null === a) return null;
               if (37492 === n) return r === E ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
               if (37496 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
            }
            if (37808 === n || 37809 === n || 37810 === n || 37811 === n || 37812 === n || 37813 === n || 37814 === n || 37815 === n || 37816 === n || 37817 === n || 37818 === n || 37819 === n || 37820 === n || 37821 === n) {
               if (a = e.get("WEBGL_compressed_texture_astc"), null === a) return null;
               if (37808 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
               if (37809 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
               if (37810 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
               if (37811 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
               if (37812 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
               if (37813 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
               if (37814 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
               if (37815 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
               if (37816 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
               if (37817 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
               if (37818 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
               if (37819 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
               if (37820 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
               if (37821 === n) return r === E ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
            }
            if (36492 === n) {
               if (a = e.get("EXT_texture_compression_bptc"), null === a) return null;
               if (36492 === n) return r === E ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
            }
            return n === f ? i ? 34042 : (a = e.get("WEBGL_depth_texture"), null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[n] ? t[n] : null
         }
      }
   }
   class Jr extends vn {
      constructor(t = []) {
         super(), this.isArrayCamera = !0, this.cameras = t
      }
   }
   class Qr extends _e {
      constructor() {
         super(), this.isGroup = !0, this.type = "Group"
      }
   }
   const $r = {
      type: "move"
   };
   class ta {
      constructor() {
         this._targetRay = null, this._grip = null, this._hand = null
      }
      getHandSpace() {
         return null === this._hand && (this._hand = new Qr, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
         }), this._hand
      }
      getTargetRaySpace() {
         return null === this._targetRay && (this._targetRay = new Qr, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new mt, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new mt), this._targetRay
      }
      getGripSpace() {
         return null === this._grip && (this._grip = new Qr, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new mt, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new mt), this._grip
      }
      dispatchEvent(t) {
         return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
      }
      disconnect(t) {
         return this.dispatchEvent({
            type: "disconnected",
            data: t
         }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
      }
      update(t, e, n) {
         let i = null,
            r = null,
            a = null;
         const s = this._targetRay,
            o = this._grip,
            l = this._hand;
         if (t && "visible-blurred" !== e.session.visibilityState) {
            if (l && t.hand) {
               a = !0;
               for (const i of t.hand.values()) {
                  const t = e.getJointPose(i, n);
                  if (void 0 === l.joints[i.jointName]) {
                     const t = new Qr;
                     t.matrixAutoUpdate = !1, t.visible = !1, l.joints[i.jointName] = t, l.add(t)
                  }
                  const r = l.joints[i.jointName];
                  null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t
               }
               const i = l.joints["index-finger-tip"],
                  r = l.joints["thumb-tip"],
                  s = i.position.distanceTo(r.position),
                  o = .02,
                  c = .005;
               l.inputState.pinching && s > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                  type: "pinchend",
                  handedness: t.handedness,
                  target: this
               })) : !l.inputState.pinching && s <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                  type: "pinchstart",
                  handedness: t.handedness,
                  target: this
               }))
            } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            null !== s && (i = e.getPose(t.targetRaySpace, n), null === i && null !== r && (i = r), null !== i && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent($r)))
         }
         return null !== s && (s.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== a), this
      }
   }
   class ea extends ct {
      constructor(t, e, n, i, r, a, s, l, c, u) {
         if ((u = void 0 !== u ? u : g) !== g && u !== _) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
         void 0 === n && u === g && (n = h), void 0 === n && u === _ && (n = f), super(null, i, r, a, s, l, u, n, c), this.isDepthTexture = !0, this.image = {
            width: t,
            height: e
         }, this.magFilter = void 0 !== s ? s : o, this.minFilter = void 0 !== l ? l : o, this.flipY = !1, this.generateMipmaps = !1
      }
   }
   class na extends D {
      constructor(t, e) {
         super();
         const n = this;
         let i = null,
            r = 1,
            a = null,
            s = "local-floor",
            o = null,
            l = null,
            c = null,
            d = null,
            p = null,
            v = null;
         const x = e.getContextAttributes();
         let y = null,
            b = null;
         const M = [],
            S = [],
            w = new vn;
         w.layers.enable(1), w.viewport = new ut;
         const T = new vn;
         T.layers.enable(2), T.viewport = new ut;
         const E = [w, T],
            A = new Jr;
         A.layers.enable(1), A.layers.enable(2);
         let C = null,
            L = null;

         function P(t) {
            const e = S.indexOf(t.inputSource);
            if (-1 === e) return;
            const n = M[e];
            void 0 !== n && n.dispatchEvent({
               type: t.type,
               data: t.inputSource
            })
         }

         function R() {
            i.removeEventListener("select", P), i.removeEventListener("selectstart", P), i.removeEventListener("selectend", P), i.removeEventListener("squeeze", P), i.removeEventListener("squeezestart", P), i.removeEventListener("squeezeend", P), i.removeEventListener("end", R), i.removeEventListener("inputsourceschange", D);
            for (let t = 0; t < M.length; t++) {
               const e = S[t];
               null !== e && (S[t] = null, M[t].disconnect(e))
            }
            C = null, L = null, t.setRenderTarget(y), p = null, d = null, c = null, i = null, b = null, U.stop(), n.isPresenting = !1, n.dispatchEvent({
               type: "sessionend"
            })
         }

         function D(t) {
            for (let e = 0; e < t.removed.length; e++) {
               const n = t.removed[e],
                  i = S.indexOf(n);
               i >= 0 && (S[i] = null, M[i].dispatchEvent({
                  type: "disconnected",
                  data: n
               }))
            }
            for (let e = 0; e < t.added.length; e++) {
               const n = t.added[e];
               let i = S.indexOf(n);
               if (-1 === i) {
                  for (let t = 0; t < M.length; t++) {
                     if (t >= S.length) {
                        S.push(n), i = t;
                        break
                     }
                     if (null === S[t]) {
                        S[t] = n, i = t;
                        break
                     }
                  }
                  if (-1 === i) break
               }
               const r = M[i];
               r && r.dispatchEvent({
                  type: "connected",
                  data: n
               })
            }
         }
         this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
            let e = M[t];
            return void 0 === e && (e = new ta, M[t] = e), e.getTargetRaySpace()
         }, this.getControllerGrip = function(t) {
            let e = M[t];
            return void 0 === e && (e = new ta, M[t] = e), e.getGripSpace()
         }, this.getHand = function(t) {
            let e = M[t];
            return void 0 === e && (e = new ta, M[t] = e), e.getHandSpace()
         }, this.setFramebufferScaleFactor = function(t) {
            r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
         }, this.setReferenceSpaceType = function(t) {
            s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
         }, this.getReferenceSpace = function() {
            return o || a
         }, this.setReferenceSpace = function(t) {
            o = t
         }, this.getBaseLayer = function() {
            return null !== d ? d : p
         }, this.getBinding = function() {
            return c
         }, this.getFrame = function() {
            return v
         }, this.getSession = function() {
            return i
         }, this.setSession = async function(l) {
            if (i = l, null !== i) {
               if (y = t.getRenderTarget(), i.addEventListener("select", P), i.addEventListener("selectstart", P), i.addEventListener("selectend", P), i.addEventListener("squeeze", P), i.addEventListener("squeezestart", P), i.addEventListener("squeezeend", P), i.addEventListener("end", R), i.addEventListener("inputsourceschange", D), !0 !== x.xrCompatible && await e.makeXRCompatible(), void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2) {
                  const n = {
                     antialias: void 0 !== i.renderState.layers || x.antialias,
                     alpha: x.alpha,
                     depth: x.depth,
                     stencil: x.stencil,
                     framebufferScaleFactor: r
                  };
                  p = new XRWebGLLayer(i, e, n), i.updateRenderState({
                     baseLayer: p
                  }), b = new ht(p.framebufferWidth, p.framebufferHeight, {
                     format: m,
                     type: u,
                     encoding: t.outputEncoding,
                     stencilBuffer: x.stencil
                  })
               } else {
                  let n = null,
                     a = null,
                     s = null;
                  x.depth && (s = x.stencil ? 35056 : 33190, n = x.stencil ? _ : g, a = x.stencil ? f : h);
                  const o = {
                     colorFormat: 32856,
                     depthFormat: s,
                     scaleFactor: r
                  };
                  c = new XRWebGLBinding(i, e), d = c.createProjectionLayer(o), i.updateRenderState({
                     layers: [d]
                  }), b = new ht(d.textureWidth, d.textureHeight, {
                     format: m,
                     type: u,
                     depthTexture: new ea(d.textureWidth, d.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
                     stencilBuffer: x.stencil,
                     encoding: t.outputEncoding,
                     samples: x.antialias ? 4 : 0
                  }), t.properties.get(b).__ignoreDepthValues = d.ignoreDepthValues
               }
               b.isXRRenderTarget = !0, this.setFoveation(1), o = null, a = await i.requestReferenceSpace(s), U.setContext(i), U.start(), n.isPresenting = !0, n.dispatchEvent({
                  type: "sessionstart"
               })
            }
         };
         const O = new mt,
            I = new mt;

         function z(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
         }
         this.updateCamera = function(t) {
            if (null === i) return;
            A.near = T.near = w.near = t.near, A.far = T.far = w.far = t.far, C === A.near && L === A.far || (i.updateRenderState({
               depthNear: A.near,
               depthFar: A.far
            }), C = A.near, L = A.far);
            const e = t.parent,
               n = A.cameras;
            z(A, e);
            for (let t = 0; t < n.length; t++) z(n[t], e);
            A.matrixWorld.decompose(A.position, A.quaternion, A.scale), t.matrix.copy(A.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale);
            const r = t.children;
            for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
            2 === n.length ? function(t, e, n) {
               O.setFromMatrixPosition(e.matrixWorld), I.setFromMatrixPosition(n.matrixWorld);
               const i = O.distanceTo(I),
                  r = e.projectionMatrix.elements,
                  a = n.projectionMatrix.elements,
                  s = r[14] / (r[10] - 1),
                  o = r[14] / (r[10] + 1),
                  l = (r[9] + 1) / r[5],
                  c = (r[9] - 1) / r[5],
                  u = (r[8] - 1) / r[0],
                  h = (a[8] + 1) / a[0],
                  d = s * u,
                  p = s * h,
                  f = i / (-u + h),
                  m = f * -u;
               e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
               const g = s + f,
                  _ = o + f,
                  v = d - m,
                  x = p + (i - m),
                  y = l * o / _ * g,
                  b = c * o / _ * g;
               t.projectionMatrix.makePerspective(v, x, y, b, g, _)
            }(A, w, T) : A.projectionMatrix.copy(w.projectionMatrix)
         }, this.getCamera = function() {
            return A
         }, this.getFoveation = function() {
            return null !== d ? d.fixedFoveation : null !== p ? p.fixedFoveation : void 0
         }, this.setFoveation = function(t) {
            null !== d && (d.fixedFoveation = t), null !== p && void 0 !== p.fixedFoveation && (p.fixedFoveation = t)
         };
         let N = null;
         const U = new Pn;
         U.setAnimationLoop((function(e, n) {
            if (l = n.getViewerPose(o || a), v = n, null !== l) {
               const e = l.views;
               null !== p && (t.setRenderTargetFramebuffer(b, p.framebuffer), t.setRenderTarget(b));
               let n = !1;
               e.length !== A.cameras.length && (A.cameras.length = 0, n = !0);
               for (let i = 0; i < e.length; i++) {
                  const r = e[i];
                  let a = null;
                  if (null !== p) a = p.getViewport(r);
                  else {
                     const e = c.getViewSubImage(d, r);
                     a = e.viewport, 0 === i && (t.setRenderTargetTextures(b, e.colorTexture, d.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(b))
                  }
                  let s = E[i];
                  void 0 === s && (s = new vn, s.layers.enable(i), s.viewport = new ut, E[i] = s), s.matrix.fromArray(r.transform.matrix), s.projectionMatrix.fromArray(r.projectionMatrix), s.viewport.set(a.x, a.y, a.width, a.height), 0 === i && A.matrix.copy(s.matrix), !0 === n && A.cameras.push(s)
               }
            }
            for (let t = 0; t < M.length; t++) {
               const e = S[t],
                  i = M[t];
               null !== e && void 0 !== i && i.update(e, n, o || a)
            }
            N && N(e, n), v = null
         })), this.setAnimationLoop = function(t) {
            N = t
         }, this.dispose = function() {}
      }
   }

   function ia(t, e) {
      function n(n, i) {
         n.opacity.value = i.opacity, i.color && n.diffuse.value.copy(i.color), i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (n.map.value = i.map), i.alphaMap && (n.alphaMap.value = i.alphaMap), i.bumpMap && (n.bumpMap.value = i.bumpMap, n.bumpScale.value = i.bumpScale, 1 === i.side && (n.bumpScale.value *= -1)), i.displacementMap && (n.displacementMap.value = i.displacementMap, n.displacementScale.value = i.displacementScale, n.displacementBias.value = i.displacementBias), i.emissiveMap && (n.emissiveMap.value = i.emissiveMap), i.normalMap && (n.normalMap.value = i.normalMap, n.normalScale.value.copy(i.normalScale), 1 === i.side && n.normalScale.value.negate()), i.specularMap && (n.specularMap.value = i.specularMap), i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
         const r = e.get(i).envMap;
         if (r && (n.envMap.value = r, n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, n.reflectivity.value = i.reflectivity, n.ior.value = i.ior, n.refractionRatio.value = i.refractionRatio), i.lightMap) {
            n.lightMap.value = i.lightMap;
            const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
            n.lightMapIntensity.value = i.lightMapIntensity * e
         }
         let a, s;
         i.aoMap && (n.aoMap.value = i.aoMap, n.aoMapIntensity.value = i.aoMapIntensity), i.map ? a = i.map : i.specularMap ? a = i.specularMap : i.displacementMap ? a = i.displacementMap : i.normalMap ? a = i.normalMap : i.bumpMap ? a = i.bumpMap : i.roughnessMap ? a = i.roughnessMap : i.metalnessMap ? a = i.metalnessMap : i.alphaMap ? a = i.alphaMap : i.emissiveMap ? a = i.emissiveMap : i.clearcoatMap ? a = i.clearcoatMap : i.clearcoatNormalMap ? a = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? a = i.clearcoatRoughnessMap : i.iridescenceMap ? a = i.iridescenceMap : i.iridescenceThicknessMap ? a = i.iridescenceThicknessMap : i.specularIntensityMap ? a = i.specularIntensityMap : i.specularColorMap ? a = i.specularColorMap : i.transmissionMap ? a = i.transmissionMap : i.thicknessMap ? a = i.thicknessMap : i.sheenColorMap ? a = i.sheenColorMap : i.sheenRoughnessMap && (a = i.sheenRoughnessMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), n.uvTransform.value.copy(a.matrix)), i.aoMap ? s = i.aoMap : i.lightMap && (s = i.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), n.uv2Transform.value.copy(s.matrix))
      }
      return {
         refreshFogUniforms: function(t, e) {
            t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
         },
         refreshMaterialUniforms: function(t, i, r, a, s) {
            i.isMeshBasicMaterial || i.isMeshLambertMaterial ? n(t, i) : i.isMeshToonMaterial ? (n(t, i), function(t, e) {
               e.gradientMap && (t.gradientMap.value = e.gradientMap)
            }(t, i)) : i.isMeshPhongMaterial ? (n(t, i), function(t, e) {
               t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4)
            }(t, i)) : i.isMeshStandardMaterial ? (n(t, i), function(t, n) {
               t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap), n.metalnessMap && (t.metalnessMap.value = n.metalnessMap), e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity)
            }(t, i), i.isMeshPhysicalMaterial && function(t, e, n) {
               t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap)), e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate())), e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap)), e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = n.texture, t.transmissionSamplerSize.value.set(n.width, n.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor)), t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap), e.specularColorMap && (t.specularColorMap.value = e.specularColorMap)
            }(t, i, s)) : i.isMeshMatcapMaterial ? (n(t, i), function(t, e) {
               e.matcap && (t.matcap.value = e.matcap)
            }(t, i)) : i.isMeshDepthMaterial ? n(t, i) : i.isMeshDistanceMaterial ? (n(t, i), function(t, e) {
               t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
            }(t, i)) : i.isMeshNormalMaterial ? n(t, i) : i.isLineBasicMaterial ? (function(t, e) {
               t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
            }(t, i), i.isLineDashedMaterial && function(t, e) {
               t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
            }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
               let r;
               t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest), e.map ? r = e.map : e.alphaMap && (r = e.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
            }(t, i, r, a) : i.isSpriteMaterial ? function(t, e) {
               let n;
               t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest), e.map ? n = e.map : e.alphaMap && (n = e.alphaMap), void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
            }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
         }
      }
   }

   function ra(t, e, n, i) {
      let r = {},
         a = {},
         s = [];
      const o = n.isWebGL2 ? t.getParameter(35375) : 0;

      function l(t, e, n) {
         const i = t.value;
         if (void 0 === n[e]) return n[e] = "number" == typeof i ? i : i.clone(), !0;
         if ("number" == typeof i) {
            if (n[e] !== i) return n[e] = i, !0
         } else {
            const t = n[e];
            if (!1 === t.equals(i)) return t.copy(i), !0
         }
         return !1
      }

      function c(t) {
         const e = t.value,
            n = {
               boundary: 0,
               storage: 0
            };
         return "number" == typeof e ? (n.boundary = 4, n.storage = 4) : e.isVector2 ? (n.boundary = 8, n.storage = 8) : e.isVector3 || e.isColor ? (n.boundary = 16, n.storage = 12) : e.isVector4 ? (n.boundary = 16, n.storage = 16) : e.isMatrix3 ? (n.boundary = 48, n.storage = 48) : e.isMatrix4 ? (n.boundary = 64, n.storage = 64) : e.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e), n
      }

      function u(e) {
         const n = e.target;
         n.removeEventListener("dispose", u);
         const i = s.indexOf(n.__bindingPointIndex);
         s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id]
      }
      return {
         bind: function(t, e) {
            const n = e.program;
            i.uniformBlockBinding(t, n)
         },
         update: function(n, h) {
            let d = r[n.id];
            void 0 === d && (function(t) {
               const e = t.uniforms;
               let n = 0;
               let i = 0;
               for (let t = 0, r = e.length; t < r; t++) {
                  const r = e[t],
                     a = c(r);
                  if (r.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), r.__offset = n, t > 0) {
                     i = n % 16;
                     const t = 16 - i;
                     0 !== i && t - a.boundary < 0 && (n += 16 - i, r.__offset = n)
                  }
                  n += a.storage
               }
               i = n % 16, i > 0 && (n += 16 - i), t.__size = n, t.__cache = {}
            }(n), d = function(e) {
               const n = function() {
                  for (let t = 0; t < o; t++)
                     if (-1 === s.indexOf(t)) return s.push(t), t;
                  return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
               }();
               e.__bindingPointIndex = n;
               const i = t.createBuffer(),
                  r = e.__size,
                  a = e.usage;
               return t.bindBuffer(35345, i), t.bufferData(35345, r, a), t.bindBuffer(35345, null), t.bindBufferBase(35345, n, i), i
            }(n), r[n.id] = d, n.addEventListener("dispose", u));
            const p = h.program;
            i.updateUBOMapping(n, p);
            const f = e.render.frame;
            a[n.id] !== f && (function(e) {
               const n = r[e.id],
                  i = e.uniforms,
                  a = e.__cache;
               t.bindBuffer(35345, n);
               for (let e = 0, n = i.length; e < n; e++) {
                  const n = i[e];
                  if (!0 === l(n, e, a)) {
                     const e = n.value,
                        i = n.__offset;
                     "number" == typeof e ? (n.__data[0] = e, t.bufferSubData(35345, i, n.__data)) : (n.value.isMatrix3 ? (n.__data[0] = n.value.elements[0], n.__data[1] = n.value.elements[1], n.__data[2] = n.value.elements[2], n.__data[3] = n.value.elements[0], n.__data[4] = n.value.elements[3], n.__data[5] = n.value.elements[4], n.__data[6] = n.value.elements[5], n.__data[7] = n.value.elements[0], n.__data[8] = n.value.elements[6], n.__data[9] = n.value.elements[7], n.__data[10] = n.value.elements[8], n.__data[11] = n.value.elements[0]) : e.toArray(n.__data), t.bufferSubData(35345, i, n.__data))
                  }
               }
               t.bindBuffer(35345, null)
            }(n), a[n.id] = f)
         },
         dispose: function() {
            for (const e in r) t.deleteBuffer(r[e]);
            s = [], r = {}, a = {}
         }
      }
   }

   function aa(t = {}) {
      this.isWebGLRenderer = !0;
      const e = void 0 !== t.canvas ? t.canvas : function() {
            const t = X("canvas");
            return t.style.display = "block", t
         }(),
         n = void 0 !== t.context ? t.context : null,
         i = void 0 === t.depth || t.depth,
         r = void 0 === t.stencil || t.stencil,
         a = void 0 !== t.antialias && t.antialias,
         s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
         o = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
         l = void 0 !== t.powerPreference ? t.powerPreference : "default",
         h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
      let f;
      f = null !== n ? n.getContextAttributes().alpha : void 0 !== t.alpha && t.alpha;
      let g = null,
         _ = null;
      const v = [],
         x = [];
      this.domElement = e, this.debug = {
         checkShaderErrors: !0
      }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = T, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, {
         gammaFactor: {
            get: function() {
               return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
            },
            set: function() {
               console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
            }
         }
      });
      const y = this;
      let b = !1,
         M = 0,
         S = 0,
         w = null,
         E = -1,
         A = null;
      const C = new ut,
         L = new ut;
      let P = null,
         R = e.width,
         D = e.height,
         O = 1,
         I = null,
         z = null;
      const N = new ut(0, 0, R, D),
         U = new ut(0, 0, R, D);
      let F = !1;
      const k = new Ln;
      let B = !1,
         V = !1,
         W = null;
      const j = new Xt,
         q = new G,
         Y = new mt,
         Z = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
         };

      function K() {
         return null === w ? O : 1
      }
      let J, Q, $, tt, et, nt, it, rt, at, st, ot, lt, ct, dt, pt, ft, gt, _t, vt, xt, yt, bt, Mt, St, wt = n;

      function Tt(t, n) {
         for (let i = 0; i < t.length; i++) {
            const r = t[i],
               a = e.getContext(r, n);
            if (null !== a) return a
         }
         return null
      }
      try {
         const t = {
            alpha: !0,
            depth: i,
            stencil: r,
            antialias: a,
            premultipliedAlpha: s,
            preserveDrawingBuffer: o,
            powerPreference: l,
            failIfMajorPerformanceCaveat: h
         };
         if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r145"), e.addEventListener("webglcontextlost", Ct, !1), e.addEventListener("webglcontextrestored", Lt, !1), e.addEventListener("webglcontextcreationerror", Pt, !1), null === wt) {
            const e = ["webgl2", "webgl", "experimental-webgl"];
            if (!0 === y.isWebGL1Renderer && e.shift(), wt = Tt(e, t), null === wt) throw Tt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
         }
         void 0 === wt.getShaderPrecisionFormat && (wt.getShaderPrecisionFormat = function() {
            return {
               rangeMin: 1,
               rangeMax: 1,
               precision: 1
            }
         })
      } catch (t) {
         throw console.error("THREE.WebGLRenderer: " + t.message), t
      }

      function Et() {
         J = new ni(wt), Q = new kn(wt, J, t), J.init(Q), bt = new Kr(wt, J, Q), $ = new Yr(wt, J, Q), tt = new ai, et = new Ir, nt = new Zr(wt, J, $, et, Q, bt, tt), it = new Bn(y), rt = new ei(y), at = new Rn(wt, Q), Mt = new Un(wt, J, at, Q), st = new ii(wt, at, tt, Mt), ot = new ci(wt, st, at, tt), vt = new li(wt, Q, nt), ft = new Hn(et), lt = new Or(y, it, rt, J, Q, Mt, ft), ct = new ia(y, et), dt = new Fr, pt = new Wr(J, Q), _t = new Nn(y, it, $, ot, f, s), gt = new qr(y, ot, Q), St = new ra(wt, tt, Q, $), xt = new Fn(wt, J, tt, Q), yt = new ri(wt, J, tt, Q), tt.programs = lt.programs, y.capabilities = Q, y.extensions = J, y.properties = et, y.renderLists = dt, y.shadowMap = gt, y.state = $, y.info = tt
      }
      Et();
      const At = new na(y, wt);

      function Ct(t) {
         t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0
      }

      function Lt() {
         console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
         const t = tt.autoReset,
            e = gt.enabled,
            n = gt.autoUpdate,
            i = gt.needsUpdate,
            r = gt.type;
         Et(), tt.autoReset = t, gt.enabled = e, gt.autoUpdate = n, gt.needsUpdate = i, gt.type = r
      }

      function Pt(t) {
         console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t.statusMessage)
      }

      function Rt(t) {
         const e = t.target;
         e.removeEventListener("dispose", Rt),
            function(t) {
               (function(t) {
                  const e = et.get(t).programs;
                  void 0 !== e && (e.forEach((function(t) {
                     lt.releaseProgram(t)
                  })), t.isShaderMaterial && lt.releaseShaderCache(t))
               })(t), et.remove(t)
            }(e)
      }
      this.xr = At, this.getContext = function() {
         return wt
      }, this.getContextAttributes = function() {
         return wt.getContextAttributes()
      }, this.forceContextLoss = function() {
         const t = J.get("WEBGL_lose_context");
         t && t.loseContext()
      }, this.forceContextRestore = function() {
         const t = J.get("WEBGL_lose_context");
         t && t.restoreContext()
      }, this.getPixelRatio = function() {
         return O
      }, this.setPixelRatio = function(t) {
         void 0 !== t && (O = t, this.setSize(R, D, !1))
      }, this.getSize = function(t) {
         return t.set(R, D)
      }, this.setSize = function(t, n, i) {
         At.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (R = t, D = n, e.width = Math.floor(t * O), e.height = Math.floor(n * O), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n))
      }, this.getDrawingBufferSize = function(t) {
         return t.set(R * O, D * O).floor()
      }, this.setDrawingBufferSize = function(t, n, i) {
         R = t, D = n, O = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n)
      }, this.getCurrentViewport = function(t) {
         return t.copy(C)
      }, this.getViewport = function(t) {
         return t.copy(N)
      }, this.setViewport = function(t, e, n, i) {
         t.isVector4 ? N.set(t.x, t.y, t.z, t.w) : N.set(t, e, n, i), $.viewport(C.copy(N).multiplyScalar(O).floor())
      }, this.getScissor = function(t) {
         return t.copy(U)
      }, this.setScissor = function(t, e, n, i) {
         t.isVector4 ? U.set(t.x, t.y, t.z, t.w) : U.set(t, e, n, i), $.scissor(L.copy(U).multiplyScalar(O).floor())
      }, this.getScissorTest = function() {
         return F
      }, this.setScissorTest = function(t) {
         $.setScissorTest(F = t)
      }, this.setOpaqueSort = function(t) {
         I = t
      }, this.setTransparentSort = function(t) {
         z = t
      }, this.getClearColor = function(t) {
         return t.copy(_t.getClearColor())
      }, this.setClearColor = function() {
         _t.setClearColor.apply(_t, arguments)
      }, this.getClearAlpha = function() {
         return _t.getClearAlpha()
      }, this.setClearAlpha = function() {
         _t.setClearAlpha.apply(_t, arguments)
      }, this.clear = function(t = !0, e = !0, n = !0) {
         let i = 0;
         t && (i |= 16384), e && (i |= 256), n && (i |= 1024), wt.clear(i)
      }, this.clearColor = function() {
         this.clear(!0, !1, !1)
      }, this.clearDepth = function() {
         this.clear(!1, !0, !1)
      }, this.clearStencil = function() {
         this.clear(!1, !1, !0)
      }, this.dispose = function() {
         e.removeEventListener("webglcontextlost", Ct, !1), e.removeEventListener("webglcontextrestored", Lt, !1), e.removeEventListener("webglcontextcreationerror", Pt, !1), dt.dispose(), pt.dispose(), et.dispose(), it.dispose(), rt.dispose(), ot.dispose(), Mt.dispose(), St.dispose(), lt.dispose(), At.dispose(), At.removeEventListener("sessionstart", Ot), At.removeEventListener("sessionend", It), W && (W.dispose(), W = null), zt.stop()
      }, this.renderBufferDirect = function(t, e, n, i, r, a) {
         null === e && (e = Z);
         const s = r.isMesh && r.matrixWorld.determinant() < 0,
            o = function(t, e, n, i, r) {
               !0 !== e.isScene && (e = Z), nt.resetTextureUnits();
               const a = e.fog,
                  s = i.isMeshStandardMaterial ? e.environment : null,
                  o = null === w ? y.outputEncoding : !0 === w.isXRRenderTarget ? w.texture.encoding : T,
                  l = (i.isMeshStandardMaterial ? rt : it).get(i.envMap || s),
                  c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
                  u = !!i.normalMap && !!n.attributes.tangent,
                  h = !!n.morphAttributes.position,
                  d = !!n.morphAttributes.normal,
                  p = !!n.morphAttributes.color,
                  f = i.toneMapped ? y.toneMapping : 0,
                  m = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
                  g = void 0 !== m ? m.length : 0,
                  v = et.get(i),
                  x = _.state.lights;
               if (!0 === B && (!0 === V || t !== A)) {
                  const e = t === A && i.id === E;
                  ft.setState(i, t, e)
               }
               let b = !1;
               i.version === v.__version ? v.needsLights && v.lightsStateVersion !== x.state.version || v.outputEncoding !== o || r.isInstancedMesh && !1 === v.instancing ? b = !0 : r.isInstancedMesh || !0 !== v.instancing ? r.isSkinnedMesh && !1 === v.skinning ? b = !0 : r.isSkinnedMesh || !0 !== v.skinning ? v.envMap !== l || !0 === i.fog && v.fog !== a ? b = !0 : void 0 === v.numClippingPlanes || v.numClippingPlanes === ft.numPlanes && v.numIntersection === ft.numIntersection ? (v.vertexAlphas !== c || v.vertexTangents !== u || v.morphTargets !== h || v.morphNormals !== d || v.morphColors !== p || v.toneMapping !== f || !0 === Q.isWebGL2 && v.morphTargetsCount !== g) && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, v.__version = i.version);
               let M = v.currentProgram;
               !0 === b && (M = Ht(i, e, r));
               let S = !1,
                  C = !1,
                  L = !1;
               const P = M.getUniforms(),
                  R = v.uniforms;
               if ($.useProgram(M.program) && (S = !0, C = !0, L = !0), i.id !== E && (E = i.id, C = !0), S || A !== t) {
                  if (P.setValue(wt, "projectionMatrix", t.projectionMatrix), Q.logarithmicDepthBuffer && P.setValue(wt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), A !== t && (A = t, C = !0, L = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                     const e = P.map.cameraPosition;
                     void 0 !== e && e.setValue(wt, Y.setFromMatrixPosition(t.matrixWorld))
                  }(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && P.setValue(wt, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && P.setValue(wt, "viewMatrix", t.matrixWorldInverse)
               }
               if (r.isSkinnedMesh) {
                  P.setOptional(wt, r, "bindMatrix"), P.setOptional(wt, r, "bindMatrixInverse");
                  const t = r.skeleton;
                  t && (Q.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), P.setValue(wt, "boneTexture", t.boneTexture, nt), P.setValue(wt, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
               }
               const I = n.morphAttributes;
               var z, N;
               if ((void 0 !== I.position || void 0 !== I.normal || void 0 !== I.color && !0 === Q.isWebGL2) && vt.update(r, n, i, M), (C || v.receiveShadow !== r.receiveShadow) && (v.receiveShadow = r.receiveShadow, P.setValue(wt, "receiveShadow", r.receiveShadow)), i.isMeshGouraudMaterial && null !== i.envMap && (R.envMap.value = l, R.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1), C && (P.setValue(wt, "toneMappingExposure", y.toneMappingExposure), v.needsLights && (N = L, (z = R).ambientLightColor.needsUpdate = N, z.lightProbe.needsUpdate = N, z.directionalLights.needsUpdate = N, z.directionalLightShadows.needsUpdate = N, z.pointLights.needsUpdate = N, z.pointLightShadows.needsUpdate = N, z.spotLights.needsUpdate = N, z.spotLightShadows.needsUpdate = N, z.rectAreaLights.needsUpdate = N, z.hemisphereLights.needsUpdate = N), a && !0 === i.fog && ct.refreshFogUniforms(R, a), ct.refreshMaterialUniforms(R, i, O, D, W), pr.upload(wt, v.uniformsList, R, nt)), i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (pr.upload(wt, v.uniformsList, R, nt), i.uniformsNeedUpdate = !1), i.isSpriteMaterial && P.setValue(wt, "center", r.center), P.setValue(wt, "modelViewMatrix", r.modelViewMatrix), P.setValue(wt, "normalMatrix", r.normalMatrix), P.setValue(wt, "modelMatrix", r.matrixWorld), i.isShaderMaterial || i.isRawShaderMaterial) {
                  const t = i.uniformsGroups;
                  for (let e = 0, n = t.length; e < n; e++)
                     if (Q.isWebGL2) {
                        const n = t[e];
                        St.update(n, M), St.bind(n, M)
                     } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
               }
               return M
            }(t, e, n, i, r);
         $.setMaterial(i, s);
         let l = n.index;
         const c = n.attributes.position;
         if (null === l) {
            if (void 0 === c || 0 === c.count) return
         } else if (0 === l.count) return;
         let u, h = 1;
         !0 === i.wireframe && (l = st.getWireframeAttribute(n), h = 2), Mt.setup(r, i, o, n, l);
         let d = xt;
         null !== l && (u = at.get(l), d = yt, d.setIndex(u));
         const p = null !== l ? l.count : c.count,
            f = n.drawRange.start * h,
            m = n.drawRange.count * h,
            g = null !== a ? a.start * h : 0,
            v = null !== a ? a.count * h : 1 / 0,
            x = Math.max(f, g),
            b = Math.min(p, f + m, g + v) - 1,
            M = Math.max(0, b - x + 1);
         if (0 !== M) {
            if (r.isMesh) !0 === i.wireframe ? ($.setLineWidth(i.wireframeLinewidth * K()), d.setMode(1)) : d.setMode(4);
            else if (r.isLine) {
               let t = i.linewidth;
               void 0 === t && (t = 1), $.setLineWidth(t * K()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
            } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
            if (r.isInstancedMesh) d.renderInstances(x, M, r.count);
            else if (n.isInstancedBufferGeometry) {
               const t = Math.min(n.instanceCount, n._maxInstanceCount);
               d.renderInstances(x, M, t)
            } else d.render(x, M)
         }
      }, this.compile = function(t, e) {
         function n(t, e, n) {
            !0 === t.transparent && 2 === t.side ? (t.side = 1, t.needsUpdate = !0, Ht(t, e, n), t.side = 0, t.needsUpdate = !0, Ht(t, e, n), t.side = 2) : Ht(t, e, n)
         }
         _ = pt.get(t), _.init(), x.push(_), t.traverseVisible((function(t) {
            t.isLight && t.layers.test(e.layers) && (_.pushLight(t), t.castShadow && _.pushShadow(t))
         })), _.setupLights(y.physicallyCorrectLights), t.traverse((function(e) {
            const i = e.material;
            if (i)
               if (Array.isArray(i))
                  for (let r = 0; r < i.length; r++) n(i[r], t, e);
               else n(i, t, e)
         })), x.pop(), _ = null
      };
      let Dt = null;

      function Ot() {
         zt.stop()
      }

      function It() {
         zt.start()
      }
      const zt = new Pn;

      function Nt(t, e, n, i) {
         if (!1 === t.visible) return;
         if (t.layers.test(e.layers))
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
         else if (t.isLight) _.pushLight(t), t.castShadow && _.pushShadow(t);
         else if (t.isSprite) {
            if (!t.frustumCulled || k.intersectsSprite(t)) {
               i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);
               const e = ot.update(t),
                  r = t.material;
               r.visible && g.push(t, e, r, n, Y.z, null)
            }
         } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== tt.render.frame && (t.skeleton.update(), t.skeleton.frame = tt.render.frame), !t.frustumCulled || k.intersectsObject(t))) {
            i && Y.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);
            const e = ot.update(t),
               r = t.material;
            if (Array.isArray(r)) {
               const i = e.groups;
               for (let a = 0, s = i.length; a < s; a++) {
                  const s = i[a],
                     o = r[s.materialIndex];
                  o && o.visible && g.push(t, e, o, n, Y.z, s)
               }
            } else r.visible && g.push(t, e, r, n, Y.z, null)
         }
         const r = t.children;
         for (let t = 0, a = r.length; t < a; t++) Nt(r[t], e, n, i)
      }

      function Ut(t, e, n, i) {
         const r = t.opaque,
            s = t.transmissive,
            o = t.transparent;
         _.setupLightsView(n), s.length > 0 && function(t, e, n) {
            const i = Q.isWebGL2;
            null === W && (W = new ht(1, 1, {
               generateMipmaps: !0,
               type: J.has("EXT_color_buffer_half_float") ? p : u,
               minFilter: c,
               samples: i && !0 === a ? 4 : 0
            })), y.getDrawingBufferSize(q), i ? W.setSize(q.x, q.y) : W.setSize(H(q.x), H(q.y));
            const r = y.getRenderTarget();
            y.setRenderTarget(W), y.clear();
            const s = y.toneMapping;
            y.toneMapping = 0, Ft(t, e, n), y.toneMapping = s, nt.updateMultisampleRenderTarget(W), nt.updateRenderTargetMipmap(W), y.setRenderTarget(r)
         }(r, e, n), i && $.viewport(C.copy(i)), r.length > 0 && Ft(r, e, n), s.length > 0 && Ft(s, e, n), o.length > 0 && Ft(o, e, n), $.buffers.depth.setTest(!0), $.buffers.depth.setMask(!0), $.buffers.color.setMask(!0), $.setPolygonOffset(!1)
      }

      function Ft(t, e, n) {
         const i = !0 === e.isScene ? e.overrideMaterial : null;
         for (let r = 0, a = t.length; r < a; r++) {
            const a = t[r],
               s = a.object,
               o = a.geometry,
               l = null === i ? a.material : i,
               c = a.group;
            s.layers.test(n.layers) && kt(s, e, n, o, l, c)
         }
      }

      function kt(t, e, n, i, r, a) {
         t.onBeforeRender(y, e, n, i, r, a), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(y, e, n, i, t, a), !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, y.renderBufferDirect(n, e, i, r, t, a), r.side = 0, r.needsUpdate = !0, y.renderBufferDirect(n, e, i, r, t, a), r.side = 2) : y.renderBufferDirect(n, e, i, r, t, a), t.onAfterRender(y, e, n, i, r, a)
      }

      function Ht(t, e, n) {
         !0 !== e.isScene && (e = Z);
         const i = et.get(t),
            r = _.state.lights,
            a = _.state.shadowsArray,
            s = r.state.version,
            o = lt.getParameters(t, r.state, a, e, n),
            l = lt.getProgramCacheKey(o);
         let c = i.programs;
         i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t.isMeshStandardMaterial ? rt : it).get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", Rt), c = new Map, i.programs = c);
         let u = c.get(l);
         if (void 0 !== u) {
            if (i.currentProgram === u && i.lightsStateVersion === s) return Bt(t, o), u
         } else o.uniforms = lt.getUniforms(t), t.onBuild(n, o, y), t.onBeforeCompile(o, y), u = lt.acquireProgram(o, l), c.set(l, u), i.uniforms = o.uniforms;
         const h = i.uniforms;
         (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (h.clippingPlanes = ft.uniform), Bt(t, o), i.needsLights = function(t) {
            return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
         }(t), i.lightsStateVersion = s, i.needsLights && (h.ambientLightColor.value = r.state.ambient, h.lightProbe.value = r.state.probe, h.directionalLights.value = r.state.directional, h.directionalLightShadows.value = r.state.directionalShadow, h.spotLights.value = r.state.spot, h.spotLightShadows.value = r.state.spotShadow, h.rectAreaLights.value = r.state.rectArea, h.ltc_1.value = r.state.rectAreaLTC1, h.ltc_2.value = r.state.rectAreaLTC2, h.pointLights.value = r.state.point, h.pointLightShadows.value = r.state.pointShadow, h.hemisphereLights.value = r.state.hemi, h.directionalShadowMap.value = r.state.directionalShadowMap, h.directionalShadowMatrix.value = r.state.directionalShadowMatrix, h.spotShadowMap.value = r.state.spotShadowMap, h.spotLightMatrix.value = r.state.spotLightMatrix, h.spotLightMap.value = r.state.spotLightMap, h.pointShadowMap.value = r.state.pointShadowMap, h.pointShadowMatrix.value = r.state.pointShadowMatrix);
         const d = u.getUniforms(),
            p = pr.seqWithValue(d.seq, h);
         return i.currentProgram = u, i.uniformsList = p, u
      }

      function Bt(t, e) {
         const n = et.get(t);
         n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping
      }
      zt.setAnimationLoop((function(t) {
         Dt && Dt(t)
      })), "undefined" != typeof self && zt.setContext(self), this.setAnimationLoop = function(t) {
         Dt = t, At.setAnimationLoop(t), null === t ? zt.stop() : zt.start()
      }, At.addEventListener("sessionstart", Ot), At.addEventListener("sessionend", It), this.render = function(t, e) {
         if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
         if (!0 === b) return;
         !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), !0 === At.enabled && !0 === At.isPresenting && (!0 === At.cameraAutoUpdate && At.updateCamera(e), e = At.getCamera()), !0 === t.isScene && t.onBeforeRender(y, t, e, w), _ = pt.get(t, x.length), _.init(), x.push(_), j.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), k.setFromProjectionMatrix(j), V = this.localClippingEnabled, B = ft.init(this.clippingPlanes, V, e), g = dt.get(t, v.length), g.init(), v.push(g), Nt(t, e, 0, y.sortObjects), g.finish(), !0 === y.sortObjects && g.sort(I, z), !0 === B && ft.beginShadows();
         const n = _.state.shadowsArray;
         if (gt.render(n, t, e), !0 === B && ft.endShadows(), !0 === this.info.autoReset && this.info.reset(), _t.render(g, t), _.setupLights(y.physicallyCorrectLights), e.isArrayCamera) {
            const n = e.cameras;
            for (let e = 0, i = n.length; e < i; e++) {
               const i = n[e];
               Ut(g, t, i, i.viewport)
            }
         } else Ut(g, t, e);
         null !== w && (nt.updateMultisampleRenderTarget(w), nt.updateRenderTargetMipmap(w)), !0 === t.isScene && t.onAfterRender(y, t, e), Mt.resetDefaultState(), E = -1, A = null, x.pop(), _ = x.length > 0 ? x[x.length - 1] : null, v.pop(), g = v.length > 0 ? v[v.length - 1] : null
      }, this.getActiveCubeFace = function() {
         return M
      }, this.getActiveMipmapLevel = function() {
         return S
      }, this.getRenderTarget = function() {
         return w
      }, this.setRenderTargetTextures = function(t, e, n) {
         et.get(t.texture).__webglTexture = e, et.get(t.depthTexture).__webglTexture = n;
         const i = et.get(t);
         i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === J.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i.__useRenderToTexture = !1))
      }, this.setRenderTargetFramebuffer = function(t, e) {
         const n = et.get(t);
         n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e
      }, this.setRenderTarget = function(t, e = 0, n = 0) {
         w = t, M = e, S = n;
         let i = !0;
         if (t) {
            const e = et.get(t);
            void 0 !== e.__useDefaultFramebuffer ? ($.bindFramebuffer(36160, null), i = !1) : void 0 === e.__webglFramebuffer ? nt.setupRenderTarget(t) : e.__hasExternalTextures && nt.rebindTextures(t, et.get(t.texture).__webglTexture, et.get(t.depthTexture).__webglTexture)
         }
         let r = null,
            a = !1,
            s = !1;
         if (t) {
            const n = t.texture;
            (n.isData3DTexture || n.isDataArrayTexture) && (s = !0);
            const i = et.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget ? (r = i[e], a = !0) : r = Q.isWebGL2 && t.samples > 0 && !1 === nt.useMultisampledRTT(t) ? et.get(t).__webglMultisampledFramebuffer : i, C.copy(t.viewport), L.copy(t.scissor), P = t.scissorTest
         } else C.copy(N).multiplyScalar(O).floor(), L.copy(U).multiplyScalar(O).floor(), P = F;
         if ($.bindFramebuffer(36160, r) && Q.drawBuffers && i && $.drawBuffers(t, r), $.viewport(C), $.scissor(L), $.setScissorTest(P), a) {
            const i = et.get(t.texture);
            wt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
         } else if (s) {
            const i = et.get(t.texture),
               r = e || 0;
            wt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
         }
         E = -1
      }, this.readRenderTargetPixels = function(t, e, n, i, r, a, s) {
         if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
         let o = et.get(t).__webglFramebuffer;
         if (t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o) {
            $.bindFramebuffer(36160, o);
            try {
               const s = t.texture,
                  o = s.format,
                  l = s.type;
               if (o !== m && bt.convert(o) !== wt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
               const c = l === p && (J.has("EXT_color_buffer_half_float") || Q.isWebGL2 && J.has("EXT_color_buffer_float"));
               if (!(l === u || bt.convert(l) === wt.getParameter(35738) || l === d && (Q.isWebGL2 || J.has("OES_texture_float") || J.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
               e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && wt.readPixels(e, n, i, r, bt.convert(o), bt.convert(l), a)
            } finally {
               const t = null !== w ? et.get(w).__webglFramebuffer : null;
               $.bindFramebuffer(36160, t)
            }
         }
      }, this.copyFramebufferToTexture = function(t, e, n = 0) {
         const i = Math.pow(2, -n),
            r = Math.floor(e.image.width * i),
            a = Math.floor(e.image.height * i);
         nt.setTexture2D(e, 0), wt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, a), $.unbindTexture()
      }, this.copyTextureToTexture = function(t, e, n, i = 0) {
         const r = e.image.width,
            a = e.image.height,
            s = bt.convert(n.format),
            o = bt.convert(n.type);
         nt.setTexture2D(n, 0), wt.pixelStorei(37440, n.flipY), wt.pixelStorei(37441, n.premultiplyAlpha), wt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? wt.texSubImage2D(3553, i, t.x, t.y, r, a, s, o, e.image.data) : e.isCompressedTexture ? wt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, s, e.mipmaps[0].data) : wt.texSubImage2D(3553, i, t.x, t.y, s, o, e.image), 0 === i && n.generateMipmaps && wt.generateMipmap(3553), $.unbindTexture()
      }, this.copyTextureToTexture3D = function(t, e, n, i, r = 0) {
         if (y.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
         const a = t.max.x - t.min.x + 1,
            s = t.max.y - t.min.y + 1,
            o = t.max.z - t.min.z + 1,
            l = bt.convert(i.format),
            c = bt.convert(i.type);
         let u;
         if (i.isData3DTexture) nt.setTexture3D(i, 0), u = 32879;
         else {
            if (!i.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            nt.setTexture2DArray(i, 0), u = 35866
         }
         wt.pixelStorei(37440, i.flipY), wt.pixelStorei(37441, i.premultiplyAlpha), wt.pixelStorei(3317, i.unpackAlignment);
         const h = wt.getParameter(3314),
            d = wt.getParameter(32878),
            p = wt.getParameter(3316),
            f = wt.getParameter(3315),
            m = wt.getParameter(32877),
            g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
         wt.pixelStorei(3314, g.width), wt.pixelStorei(32878, g.height), wt.pixelStorei(3316, t.min.x), wt.pixelStorei(3315, t.min.y), wt.pixelStorei(32877, t.min.z), n.isDataTexture || n.isData3DTexture ? wt.texSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, c, g.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), wt.compressedTexSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, g.data)) : wt.texSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, c, g), wt.pixelStorei(3314, h), wt.pixelStorei(32878, d), wt.pixelStorei(3316, p), wt.pixelStorei(3315, f), wt.pixelStorei(32877, m), 0 === r && i.generateMipmaps && wt.generateMipmap(u), $.unbindTexture()
      }, this.initTexture = function(t) {
         t.isCubeTexture ? nt.setTextureCube(t, 0) : t.isData3DTexture ? nt.setTexture3D(t, 0) : t.isDataArrayTexture ? nt.setTexture2DArray(t, 0) : nt.setTexture2D(t, 0), $.unbindTexture()
      }, this.resetState = function() {
         M = 0, S = 0, w = null, $.reset(), Mt.reset()
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
         detail: this
      }))
   }(class extends aa {}).prototype.isWebGL1Renderer = !0;
   class sa extends Pe {
      constructor(t) {
         super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new it(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t)
      }
      copy(t) {
         return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this
      }
   }
   const oa = new mt,
      la = new mt,
      ca = new Xt,
      ua = new jt,
      ha = new Ut;
   class da extends _e {
      constructor(t = new je, e = new sa) {
         super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
      }
      copy(t, e) {
         return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
      }
      computeLineDistances() {
         const t = this.geometry;
         if (null === t.index) {
            const e = t.attributes.position,
               n = [0];
            for (let t = 1, i = e.count; t < i; t++) oa.fromBufferAttribute(e, t - 1), la.fromBufferAttribute(e, t), n[t] = n[t - 1], n[t] += oa.distanceTo(la);
            t.setAttribute("lineDistance", new Ue(n, 1))
         } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
         return this
      }
      raycast(t, e) {
         const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Line.threshold,
            a = n.drawRange;
         if (null === n.boundingSphere && n.computeBoundingSphere(), ha.copy(n.boundingSphere), ha.applyMatrix4(i), ha.radius += r, !1 === t.ray.intersectsSphere(ha)) return;
         ca.copy(i).invert(), ua.copy(t.ray).applyMatrix4(ca);
         const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = s * s,
            l = new mt,
            c = new mt,
            u = new mt,
            h = new mt,
            d = this.isLineSegments ? 2 : 1,
            p = n.index,
            f = n.attributes.position;
         if (null !== p)
            for (let n = Math.max(0, a.start), i = Math.min(p.count, a.start + a.count) - 1; n < i; n += d) {
               const i = p.getX(n),
                  r = p.getX(n + 1);
               if (l.fromBufferAttribute(f, i), c.fromBufferAttribute(f, r), ua.distanceSqToSegment(l, c, h, u) > o) continue;
               h.applyMatrix4(this.matrixWorld);
               const a = t.ray.origin.distanceTo(h);
               a < t.near || a > t.far || e.push({
                  distance: a,
                  point: u.clone().applyMatrix4(this.matrixWorld),
                  index: n,
                  face: null,
                  faceIndex: null,
                  object: this
               })
            } else
               for (let n = Math.max(0, a.start), i = Math.min(f.count, a.start + a.count) - 1; n < i; n += d) {
                  if (l.fromBufferAttribute(f, n), c.fromBufferAttribute(f, n + 1), ua.distanceSqToSegment(l, c, h, u) > o) continue;
                  h.applyMatrix4(this.matrixWorld);
                  const i = t.ray.origin.distanceTo(h);
                  i < t.near || i > t.far || e.push({
                     distance: i,
                     point: u.clone().applyMatrix4(this.matrixWorld),
                     index: n,
                     face: null,
                     faceIndex: null,
                     object: this
                  })
               }
      }
      updateMorphTargets() {
         const t = this.geometry.morphAttributes,
            e = Object.keys(t);
         if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
               this.morphTargetInfluences = [], this.morphTargetDictionary = {};
               for (let t = 0, e = n.length; t < e; t++) {
                  const e = n[t].name || String(t);
                  this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
               }
            }
         }
      }
   }
   class pa extends je {
      constructor(t = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, a = 0, s = Math.PI) {
         super(), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: a,
            thetaLength: s
         }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
         const o = Math.min(a + s, Math.PI);
         let l = 0;
         const c = [],
            u = new mt,
            h = new mt,
            d = [],
            p = [],
            f = [],
            m = [];
         for (let d = 0; d <= n; d++) {
            const g = [],
               _ = d / n;
            let v = 0;
            0 == d && 0 == a ? v = .5 / e : d == n && o == Math.PI && (v = -.5 / e);
            for (let n = 0; n <= e; n++) {
               const o = n / e;
               u.x = -t * Math.cos(i + o * r) * Math.sin(a + _ * s), u.y = t * Math.cos(a + _ * s), u.z = t * Math.sin(i + o * r) * Math.sin(a + _ * s), p.push(u.x, u.y, u.z), h.copy(u).normalize(), f.push(h.x, h.y, h.z), m.push(o + v, 1 - _), g.push(l++)
            }
            c.push(g)
         }
         for (let t = 0; t < n; t++)
            for (let i = 0; i < e; i++) {
               const e = c[t][i + 1],
                  r = c[t][i],
                  s = c[t + 1][i],
                  l = c[t + 1][i + 1];
               (0 !== t || a > 0) && d.push(e, r, l), (t !== n - 1 || o < Math.PI) && d.push(r, s, l)
            }
         this.setIndex(d), this.setAttribute("position", new Ue(p, 3)), this.setAttribute("normal", new Ue(f, 3)), this.setAttribute("uv", new Ue(m, 2))
      }
      static fromJSON(t) {
         return new pa(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength)
      }
   }
   class fa extends je {
      constructor(t = 1, e = .4, n = 8, i = 6, r = 2 * Math.PI) {
         super(), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
         }, n = Math.floor(n), i = Math.floor(i);
         const a = [],
            s = [],
            o = [],
            l = [],
            c = new mt,
            u = new mt,
            h = new mt;
         for (let a = 0; a <= n; a++)
            for (let d = 0; d <= i; d++) {
               const p = d / i * r,
                  f = a / n * Math.PI * 2;
               u.x = (t + e * Math.cos(f)) * Math.cos(p), u.y = (t + e * Math.cos(f)) * Math.sin(p), u.z = e * Math.sin(f), s.push(u.x, u.y, u.z), c.x = t * Math.cos(p), c.y = t * Math.sin(p), h.subVectors(u, c).normalize(), o.push(h.x, h.y, h.z), l.push(d / i), l.push(a / n)
            }
         for (let t = 1; t <= n; t++)
            for (let e = 1; e <= i; e++) {
               const n = (i + 1) * t + e - 1,
                  r = (i + 1) * (t - 1) + e - 1,
                  s = (i + 1) * (t - 1) + e,
                  o = (i + 1) * t + e;
               a.push(n, r, o), a.push(r, s, o)
            }
         this.setIndex(a), this.setAttribute("position", new Ue(s, 3)), this.setAttribute("normal", new Ue(o, 3)), this.setAttribute("uv", new Ue(l, 2))
      }
      static fromJSON(t) {
         return new fa(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc)
      }
   }
   class ma extends gn {
      constructor(t) {
         super(t), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial"
      }
   }
   class ga extends Pe {
      constructor(t) {
         super(), this.isMeshStandardMaterial = !0, this.defines = {
            STANDARD: ""
         }, this.type = "MeshStandardMaterial", this.color = new it(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new it(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new G(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t)
      }
      copy(t) {
         return super.copy(t), this.defines = {
            STANDARD: ""
         }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this
      }
   }
   class _a extends Pe {
      constructor(t) {
         super(), this.isMeshMatcapMaterial = !0, this.defines = {
            MATCAP: ""
         }, this.type = "MeshMatcapMaterial", this.color = new it(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new G(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t)
      }
      copy(t) {
         return super.copy(t), this.defines = {
            MATCAP: ""
         }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this.fog = t.fog, this
      }
   }

   function va(t, e, n) {
      return ya(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
   }

   function xa(t, e, n) {
      return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
   }

   function ya(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView)
   }
   class ba {
      constructor(t, e, n, i) {
         this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
      }
      evaluate(t) {
         const e = this.parameterPositions;
         let n = this._cachedIndex,
            i = e[n],
            r = e[n - 1];
         t: {
            e: {
               let a;n: {
                  i: if (!(t < i)) {
                     for (let a = n + 2;;) {
                        if (void 0 === i) {
                           if (t < r) break i;
                           return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1)
                        }
                        if (n === a) break;
                        if (r = i, i = e[++n], t < i) break e
                     }
                     a = e.length;
                     break n
                  }if (t >= r) break t; {
                     const s = e[1];
                     t < s && (n = 2, r = s);
                     for (let a = n - 2;;) {
                        if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                        if (n === a) break;
                        if (i = r, r = e[--n - 1], t >= r) break e
                     }
                     a = n, n = 0
                  }
               }
               for (; n < a;) {
                  const i = n + a >>> 1;
                  t < e[i] ? a = i : n = i + 1
               }
               if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0,
               this.copySampleValue_(0);
               if (void 0 === i) return n = e.length,
               this._cachedIndex = n,
               this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, r, i)
         }
         return this.interpolate_(n, r, t, i)
      }
      getSettings_() {
         return this.settings || this.DefaultSettings_
      }
      copySampleValue_(t) {
         const e = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = t * i;
         for (let t = 0; t !== i; ++t) e[t] = n[r + t];
         return e
      }
      interpolate_() {
         throw new Error("call to abstract method")
      }
      intervalChanged_() {}
   }
   class Ma extends ba {
      constructor(t, e, n, i) {
         super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: 2400,
            endingEnd: 2400
         }
      }
      intervalChanged_(t, e, n) {
         const i = this.parameterPositions;
         let r = t - 2,
            a = t + 1,
            s = i[r],
            o = i[a];
         if (void 0 === s) switch (this.getSettings_().endingStart) {
            case 2401:
               r = t, s = 2 * e - n;
               break;
            case 2402:
               r = i.length - 2, s = e + i[r] - i[r + 1];
               break;
            default:
               r = t, s = n
         }
         if (void 0 === o) switch (this.getSettings_().endingEnd) {
            case 2401:
               a = t, o = 2 * n - e;
               break;
            case 2402:
               a = 1, o = n + i[1] - i[0];
               break;
            default:
               a = t - 1, o = e
         }
         const l = .5 * (n - e),
            c = this.valueSize;
         this._weightPrev = l / (e - s), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = a * c
      }
      interpolate_(t, e, n, i) {
         const r = this.resultBuffer,
            a = this.sampleValues,
            s = this.valueSize,
            o = t * s,
            l = o - s,
            c = this._offsetPrev,
            u = this._offsetNext,
            h = this._weightPrev,
            d = this._weightNext,
            p = (n - e) / (i - e),
            f = p * p,
            m = f * p,
            g = -h * m + 2 * h * f - h * p,
            _ = (1 + h) * m + (-1.5 - 2 * h) * f + (-.5 + h) * p + 1,
            v = (-1 - d) * m + (1.5 + d) * f + .5 * p,
            x = d * m - d * f;
         for (let t = 0; t !== s; ++t) r[t] = g * a[c + t] + _ * a[l + t] + v * a[o + t] + x * a[u + t];
         return r
      }
   }
   class Sa extends ba {
      constructor(t, e, n, i) {
         super(t, e, n, i)
      }
      interpolate_(t, e, n, i) {
         const r = this.resultBuffer,
            a = this.sampleValues,
            s = this.valueSize,
            o = t * s,
            l = o - s,
            c = (n - e) / (i - e),
            u = 1 - c;
         for (let t = 0; t !== s; ++t) r[t] = a[l + t] * u + a[o + t] * c;
         return r
      }
   }
   class wa extends ba {
      constructor(t, e, n, i) {
         super(t, e, n, i)
      }
      interpolate_(t) {
         return this.copySampleValue_(t - 1)
      }
   }
   class Ta {
      constructor(t, e, n, i) {
         if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
         if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
         this.name = t, this.times = xa(e, this.TimeBufferType), this.values = xa(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
      }
      static toJSON(t) {
         const e = t.constructor;
         let n;
         if (e.toJSON !== this.toJSON) n = e.toJSON(t);
         else {
            n = {
               name: t.name,
               times: xa(t.times, Array),
               values: xa(t.values, Array)
            };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (n.interpolation = e)
         }
         return n.type = t.ValueTypeName, n
      }
      InterpolantFactoryMethodDiscrete(t) {
         return new wa(this.times, this.values, this.getValueSize(), t)
      }
      InterpolantFactoryMethodLinear(t) {
         return new Sa(this.times, this.values, this.getValueSize(), t)
      }
      InterpolantFactoryMethodSmooth(t) {
         return new Ma(this.times, this.values, this.getValueSize(), t)
      }
      setInterpolation(t) {
         let e;
         switch (t) {
            case M:
               e = this.InterpolantFactoryMethodDiscrete;
               break;
            case S:
               e = this.InterpolantFactoryMethodLinear;
               break;
            case w:
               e = this.InterpolantFactoryMethodSmooth
         }
         if (void 0 === e) {
            const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
               if (t === this.DefaultInterpolation) throw new Error(e);
               this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn("THREE.KeyframeTrack:", e), this
         }
         return this.createInterpolant = e, this
      }
      getInterpolation() {
         switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
               return M;
            case this.InterpolantFactoryMethodLinear:
               return S;
            case this.InterpolantFactoryMethodSmooth:
               return w
         }
      }
      getValueSize() {
         return this.values.length / this.times.length
      }
      shift(t) {
         if (0 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] += t
         }
         return this
      }
      scale(t) {
         if (1 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t
         }
         return this
      }
      trim(t, e) {
         const n = this.times,
            i = n.length;
         let r = 0,
            a = i - 1;
         for (; r !== i && n[r] < t;) ++r;
         for (; - 1 !== a && n[a] > e;) --a;
         if (++a, 0 !== r || a !== i) {
            r >= a && (a = Math.max(a, 1), r = a - 1);
            const t = this.getValueSize();
            this.times = va(n, r, a), this.values = va(this.values, r * t, a * t)
         }
         return this
      }
      validate() {
         let t = !0;
         const e = this.getValueSize();
         e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
         const n = this.times,
            i = this.values,
            r = n.length;
         0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
         let a = null;
         for (let e = 0; e !== r; e++) {
            const i = n[e];
            if ("number" == typeof i && isNaN(i)) {
               console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1;
               break
            }
            if (null !== a && a > i) {
               console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, a), t = !1;
               break
            }
            a = i
         }
         if (void 0 !== i && ya(i))
            for (let e = 0, n = i.length; e !== n; ++e) {
               const n = i[e];
               if (isNaN(n)) {
                  console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t = !1;
                  break
               }
            }
         return t
      }
      optimize() {
         const t = va(this.times),
            e = va(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === w,
            r = t.length - 1;
         let a = 1;
         for (let s = 1; s < r; ++s) {
            let r = !1;
            const o = t[s];
            if (o !== t[s + 1] && (1 !== s || o !== t[0]))
               if (i) r = !0;
               else {
                  const t = s * n,
                     i = t - n,
                     a = t + n;
                  for (let s = 0; s !== n; ++s) {
                     const n = e[t + s];
                     if (n !== e[i + s] || n !== e[a + s]) {
                        r = !0;
                        break
                     }
                  }
               } if (r) {
               if (s !== a) {
                  t[a] = t[s];
                  const i = s * n,
                     r = a * n;
                  for (let t = 0; t !== n; ++t) e[r + t] = e[i + t]
               }++a
            }
         }
         if (r > 0) {
            t[a] = t[r];
            for (let t = r * n, i = a * n, s = 0; s !== n; ++s) e[i + s] = e[t + s];
            ++a
         }
         return a !== t.length ? (this.times = va(t, 0, a), this.values = va(e, 0, a * n)) : (this.times = t, this.values = e), this
      }
      clone() {
         const t = va(this.times, 0),
            e = va(this.values, 0),
            n = new(0, this.constructor)(this.name, t, e);
         return n.createInterpolant = this.createInterpolant, n
      }
   }
   Ta.prototype.TimeBufferType = Float32Array, Ta.prototype.ValueBufferType = Float32Array, Ta.prototype.DefaultInterpolation = S;
   class Ea extends Ta {}
   Ea.prototype.ValueTypeName = "bool", Ea.prototype.ValueBufferType = Array, Ea.prototype.DefaultInterpolation = M, Ea.prototype.InterpolantFactoryMethodLinear = void 0, Ea.prototype.InterpolantFactoryMethodSmooth = void 0;
   (class extends Ta {}).prototype.ValueTypeName = "color";
   (class extends Ta {}).prototype.ValueTypeName = "number";
   class Aa extends ba {
      constructor(t, e, n, i) {
         super(t, e, n, i)
      }
      interpolate_(t, e, n, i) {
         const r = this.resultBuffer,
            a = this.sampleValues,
            s = this.valueSize,
            o = (n - e) / (i - e);
         let l = t * s;
         for (let t = l + s; l !== t; l += 4) ft.slerpFlat(r, 0, a, l - s, a, l, o);
         return r
      }
   }
   class Ca extends Ta {
      InterpolantFactoryMethodLinear(t) {
         return new Aa(this.times, this.values, this.getValueSize(), t)
      }
   }
   Ca.prototype.ValueTypeName = "quaternion", Ca.prototype.DefaultInterpolation = S, Ca.prototype.InterpolantFactoryMethodSmooth = void 0;
   class La extends Ta {}
   La.prototype.ValueTypeName = "string", La.prototype.ValueBufferType = Array, La.prototype.DefaultInterpolation = M, La.prototype.InterpolantFactoryMethodLinear = void 0, La.prototype.InterpolantFactoryMethodSmooth = void 0;
   (class extends Ta {}).prototype.ValueTypeName = "vector";
   const Pa = {
      enabled: !1,
      files: {},
      add: function(t, e) {
         !1 !== this.enabled && (this.files[t] = e)
      },
      get: function(t) {
         if (!1 !== this.enabled) return this.files[t]
      },
      remove: function(t) {
         delete this.files[t]
      },
      clear: function() {
         this.files = {}
      }
   };
   class Ra {
      constructor(t, e, n) {
         const i = this;
         let r, a = !1,
            s = 0,
            o = 0;
         const l = [];
         this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
            o++, !1 === a && void 0 !== i.onStart && i.onStart(t, s, o), a = !0
         }, this.itemEnd = function(t) {
            s++, void 0 !== i.onProgress && i.onProgress(t, s, o), s === o && (a = !1, void 0 !== i.onLoad && i.onLoad())
         }, this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t)
         }, this.resolveURL = function(t) {
            return r ? r(t) : t
         }, this.setURLModifier = function(t) {
            return r = t, this
         }, this.addHandler = function(t, e) {
            return l.push(t, e), this
         }, this.removeHandler = function(t) {
            const e = l.indexOf(t);
            return -1 !== e && l.splice(e, 2), this
         }, this.getHandler = function(t) {
            for (let e = 0, n = l.length; e < n; e += 2) {
               const n = l[e],
                  i = l[e + 1];
               if (n.global && (n.lastIndex = 0), n.test(t)) return i
            }
            return null
         }
      }
   }
   const Da = new Ra;
   class Oa {
      constructor(t) {
         this.manager = void 0 !== t ? t : Da, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
      }
      load() {}
      loadAsync(t, e) {
         const n = this;
         return new Promise((function(i, r) {
            n.load(t, i, e, r)
         }))
      }
      parse() {}
      setCrossOrigin(t) {
         return this.crossOrigin = t, this
      }
      setWithCredentials(t) {
         return this.withCredentials = t, this
      }
      setPath(t) {
         return this.path = t, this
      }
      setResourcePath(t) {
         return this.resourcePath = t, this
      }
      setRequestHeader(t) {
         return this.requestHeader = t, this
      }
   }
   class Ia extends Error {
      constructor(t, e) {
         super(t), this.response = e
      }
   }
   class za extends Oa {
      constructor(t) {
         super(t)
      }
      load(t, e, n, i) {
         void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
         const r = this,
            a = Pa.get(t);
         if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
            e && e(a), r.manager.itemEnd(t)
         }), 0), a;
         const s = X("img");

         function o() {
            c(), Pa.add(t, this), e && e(this), r.manager.itemEnd(t)
         }

         function l(e) {
            c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
         }

         function c() {
            s.removeEventListener("load", o, !1), s.removeEventListener("error", l, !1)
         }
         return s.addEventListener("load", o, !1), s.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), r.manager.itemStart(t), s.src = t, s
      }
   }

   function Na() {
      return ("undefined" == typeof performance ? Date : performance).now()
   }
   const Ua = new RegExp("[\\[\\]\\.:\\/]", "g"),
      Fa = "[^\\[\\]\\.:\\/]",
      ka = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
      Ha = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Fa) + /(WCOD+)?/.source.replace("WCOD", ka) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Fa) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Fa) + "$"),
      Ba = ["material", "materials", "bones", "map"];
   class Va {
      constructor(t, e, n) {
         this.path = e, this.parsedPath = n || Va.parseTrackName(e), this.node = Va.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
      }
      static create(t, e, n) {
         return t && t.isAnimationObjectGroup ? new Va.Composite(t, e, n) : new Va(t, e, n)
      }
      static sanitizeNodeName(t) {
         return t.replace(/\s/g, "_").replace(Ua, "")
      }
      static parseTrackName(t) {
         const e = Ha.exec(t);
         if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
         const n = {
               nodeName: e[2],
               objectName: e[3],
               objectIndex: e[4],
               propertyName: e[5],
               propertyIndex: e[6]
            },
            i = n.nodeName && n.nodeName.lastIndexOf(".");
         if (void 0 !== i && -1 !== i) {
            const t = n.nodeName.substring(i + 1); - 1 !== Ba.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t)
         }
         if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
         return n
      }
      static findNode(t, e) {
         if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
         if (t.skeleton) {
            const n = t.skeleton.getBoneByName(e);
            if (void 0 !== n) return n
         }
         if (t.children) {
            const n = function(t) {
                  for (let i = 0; i < t.length; i++) {
                     const r = t[i];
                     if (r.name === e || r.uuid === e) return r;
                     const a = n(r.children);
                     if (a) return a
                  }
                  return null
               },
               i = n(t.children);
            if (i) return i
         }
         return null
      }
      _getValue_unavailable() {}
      _setValue_unavailable() {}
      _getValue_direct(t, e) {
         t[e] = this.targetObject[this.propertyName]
      }
      _getValue_array(t, e) {
         const n = this.resolvedProperty;
         for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
      }
      _getValue_arrayElement(t, e) {
         t[e] = this.resolvedProperty[this.propertyIndex]
      }
      _getValue_toArray(t, e) {
         this.resolvedProperty.toArray(t, e)
      }
      _setValue_direct(t, e) {
         this.targetObject[this.propertyName] = t[e]
      }
      _setValue_direct_setNeedsUpdate(t, e) {
         this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
      }
      _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
         this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
      }
      _setValue_array(t, e) {
         const n = this.resolvedProperty;
         for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
      }
      _setValue_array_setNeedsUpdate(t, e) {
         const n = this.resolvedProperty;
         for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
         this.targetObject.needsUpdate = !0
      }
      _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
         const n = this.resolvedProperty;
         for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
         this.targetObject.matrixWorldNeedsUpdate = !0
      }
      _setValue_arrayElement(t, e) {
         this.resolvedProperty[this.propertyIndex] = t[e]
      }
      _setValue_arrayElement_setNeedsUpdate(t, e) {
         this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
      }
      _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
         this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
      }
      _setValue_fromArray(t, e) {
         this.resolvedProperty.fromArray(t, e)
      }
      _setValue_fromArray_setNeedsUpdate(t, e) {
         this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
      }
      _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
         this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
      }
      _getValue_unbound(t, e) {
         this.bind(), this.getValue(t, e)
      }
      _setValue_unbound(t, e) {
         this.bind(), this.setValue(t, e)
      }
      bind() {
         let t = this.node;
         const e = this.parsedPath,
            n = e.objectName,
            i = e.propertyName;
         let r = e.propertyIndex;
         if (t || (t = Va.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
         if (n) {
            let i = e.objectIndex;
            switch (n) {
               case "materials":
                  if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                  if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                  t = t.material.materials;
                  break;
               case "bones":
                  if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                  t = t.skeleton.bones;
                  for (let e = 0; e < t.length; e++)
                     if (t[e].name === i) {
                        i = e;
                        break
                     } break;
               case "map":
                  if ("map" in t) {
                     t = t.map;
                     break
                  }
                  if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                  if (!t.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                  t = t.material.map;
                  break;
               default:
                  if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                  t = t[n]
            }
            if (void 0 !== i) {
               if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
               t = t[i]
            }
         }
         const a = t[i];
         if (void 0 === a) {
            const n = e.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t)
         }
         let s = this.Versioning.None;
         this.targetObject = t, void 0 !== t.needsUpdate ? s = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate);
         let o = this.BindingType.Direct;
         if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
               if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
               if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
               void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
            }
            o = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r
         } else void 0 !== a.fromArray && void 0 !== a.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (o = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
         this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][s]
      }
      unbind() {
         this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
      }
   }

   function Ga(t, e) {
      return t.distance - e.distance
   }

   function Wa(t, e, n, i) {
      if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
         const i = t.children;
         for (let t = 0, r = i.length; t < r; t++) Wa(i[t], e, n, !0)
      }
   }
   Va.Composite = class {
      constructor(t, e, n) {
         const i = n || Va.parseTrackName(e);
         this._targetGroup = t, this._bindings = t.subscribe_(e, i)
      }
      getValue(t, e) {
         this.bind();
         const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
         void 0 !== i && i.getValue(t, e)
      }
      setValue(t, e) {
         const n = this._bindings;
         for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
      }
      bind() {
         const t = this._bindings;
         for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
      }
      unbind() {
         const t = this._bindings;
         for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
      }
   }, Va.prototype.BindingType = {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
   }, Va.prototype.Versioning = {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
   }, Va.prototype.GetterByBindingType = [Va.prototype._getValue_direct, Va.prototype._getValue_array, Va.prototype._getValue_arrayElement, Va.prototype._getValue_toArray], Va.prototype.SetterByBindingTypeAndVersioning = [
      [Va.prototype._setValue_direct, Va.prototype._setValue_direct_setNeedsUpdate, Va.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
      [Va.prototype._setValue_array, Va.prototype._setValue_array_setNeedsUpdate, Va.prototype._setValue_array_setMatrixWorldNeedsUpdate],
      [Va.prototype._setValue_arrayElement, Va.prototype._setValue_arrayElement_setNeedsUpdate, Va.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
      [Va.prototype._setValue_fromArray, Va.prototype._setValue_fromArray_setNeedsUpdate, Va.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
   ], new Float32Array(1);
   class ja {
      constructor(t = 1, e = 0, n = 0) {
         return this.radius = t, this.phi = e, this.theta = n, this
      }
      set(t, e, n) {
         return this.radius = t, this.phi = e, this.theta = n, this
      }
      copy(t) {
         return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
      }
      makeSafe() {
         const t = 1e-6;
         return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
      }
      setFromVector3(t) {
         return this.setFromCartesianCoords(t.x, t.y, t.z)
      }
      setFromCartesianCoords(t, e, n) {
         return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(U(e / this.radius, -1, 1))), this
      }
      clone() {
         return (new this.constructor).copy(this)
      }
   }
   "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
      detail: {
         revision: "145"
      }
   })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "145");
   const Xa = {
         type: "change"
      },
      qa = {
         type: "start"
      },
      Ya = {
         type: "end"
      };

   function Za(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
   }

   function Ka(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
   }
   var Ja, Qa, $a, ts, es, ns, is, rs, as, ss, os, ls, cs, us, hs, ds = {
         autoSleep: 120,
         force3D: "auto",
         nullTargetWarn: 1,
         units: {
            lineHeight: ""
         }
      },
      ps = {
         duration: .5,
         overwrite: !1,
         delay: 0
      },
      fs = 1e8,
      ms = 1e-8,
      gs = 2 * Math.PI,
      _s = gs / 4,
      vs = 0,
      xs = Math.sqrt,
      ys = Math.cos,
      bs = Math.sin,
      Ms = function(t) {
         return "string" == typeof t
      },
      Ss = function(t) {
         return "function" == typeof t
      },
      ws = function(t) {
         return "number" == typeof t
      },
      Ts = function(t) {
         return void 0 === t
      },
      Es = function(t) {
         return "object" == typeof t
      },
      As = function(t) {
         return !1 !== t
      },
      Cs = function() {
         return "undefined" != typeof window
      },
      Ls = function(t) {
         return Ss(t) || Ms(t)
      },
      Ps = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
      Rs = Array.isArray,
      Ds = /(?:-?\.?\d|\.)+/gi,
      Os = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      Is = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      zs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      Ns = /[+-]=-?[.\d]+/,
      Us = /[^,'"\[\]\s]+/gi,
      Fs = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      ks = {},
      Hs = {},
      Bs = function(t) {
         return (Hs = _o(t, ks)) && gc
      },
      Vs = function(t, e) {
         return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
      },
      Gs = function(t, e) {
         return !e && console.warn(t)
      },
      Ws = function(t, e) {
         return t && (ks[t] = e) && Hs && (Hs[t] = e) || ks
      },
      js = function() {
         return 0
      },
      Xs = {
         suppressEvents: !0,
         isStart: !0,
         kill: !1
      },
      qs = {
         suppressEvents: !0,
         kill: !1
      },
      Ys = {
         suppressEvents: !0
      },
      Zs = {},
      Ks = [],
      Js = {},
      Qs = {},
      $s = {},
      to = 30,
      eo = [],
      no = "",
      io = function(t) {
         var e, n, i = t[0];
         if (Es(i) || Ss(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (n = eo.length; n-- && !eo[n].targetTest(i););
            e = eo[n]
         }
         for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Rl(t[n], e))) || t.splice(n, 1);
         return t
      },
      ro = function(t) {
         return t._gsap || io(Zo(t))[0]._gsap
      },
      ao = function(t, e, n) {
         return (n = t[e]) && Ss(n) ? t[e]() : Ts(n) && t.getAttribute && t.getAttribute(e) || n
      },
      so = function(t, e) {
         return (t = t.split(",")).forEach(e) || t
      },
      oo = function(t) {
         return Math.round(1e5 * t) / 1e5 || 0
      },
      lo = function(t) {
         return Math.round(1e7 * t) / 1e7 || 0
      },
      co = function(t, e) {
         var n = e.charAt(0),
            i = parseFloat(e.substr(2));
         return t = parseFloat(t), "+" === n ? t + i : "-" === n ? t - i : "*" === n ? t * i : t / i
      },
      uo = function(t, e) {
         for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;);
         return i < n
      },
      ho = function() {
         var t, e, n = Ks.length,
            i = Ks.slice(0);
         for (Js = {}, Ks.length = 0, t = 0; t < n; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
      },
      po = function(t, e, n, i) {
         Ks.length && ho(), t.render(e, n, i || Qa && e < 0 && (t._initted || t._startAt)), Ks.length && ho()
      },
      fo = function(t) {
         var e = parseFloat(t);
         return (e || 0 === e) && (t + "").match(Us).length < 2 ? e : Ms(t) ? t.trim() : t
      },
      mo = function(t) {
         return t
      },
      go = function(t, e) {
         for (var n in e) n in t || (t[n] = e[n]);
         return t
      },
      _o = function(t, e) {
         for (var n in e) t[n] = e[n];
         return t
      },
      vo = function t(e, n) {
         for (var i in n) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = Es(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
         return e
      },
      xo = function(t, e) {
         var n, i = {};
         for (n in t) n in e || (i[n] = t[n]);
         return i
      },
      yo = function(t) {
         var e, n = t.parent || ts,
            i = t.keyframes ? (e = Rs(t.keyframes), function(t, n) {
               for (var i in n) i in t || "duration" === i && e || "ease" === i || (t[i] = n[i])
            }) : go;
         if (As(t.inherit))
            for (; n;) i(t, n.vars.defaults), n = n.parent || n._dp;
         return t
      },
      bo = function(t, e, n, i, r) {
         void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
         var a, s = t[i];
         if (r)
            for (a = e[r]; s && s[r] > a;) s = s._prev;
         return s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
      },
      Mo = function(t, e, n, i) {
         void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
         var r = e._prev,
            a = e._next;
         r ? r._next = a : t[n] === e && (t[n] = a), a ? a._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
      },
      So = function(t, e) {
         t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
      },
      wo = function(t, e) {
         if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n;) n._dirty = 1, n = n.parent;
         return t
      },
      To = function(t) {
         for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
         return t
      },
      Eo = function(t, e, n, i) {
         return t._startAt && (Qa ? t._startAt.revert(qs) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
      },
      Ao = function t(e) {
         return !e || e._ts && t(e.parent)
      },
      Co = function(t) {
         return t._repeat ? Lo(t._tTime, t = t.duration() + t._rDelay) * t : 0
      },
      Lo = function(t, e) {
         var n = Math.floor(t /= e);
         return t && n === t ? n - 1 : n
      },
      Po = function(t, e) {
         return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      },
      Ro = function(t) {
         return t._end = lo(t._start + (t._tDur / Math.abs(t._ts || t._rts || ms) || 0))
      },
      Do = function(t, e) {
         var n = t._dp;
         return n && n.smoothChildTiming && t._ts && (t._start = lo(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ro(t), n._dirty || wo(n, t)), t
      },
      Oo = function(t, e) {
         var n;
         if ((e._time || e._initted && !e._dur) && (n = Po(t.rawTime(), e), (!e._dur || jo(0, e.totalDuration(), n) - e._tTime > ms) && e.render(n, !0)), wo(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
               for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            t._zTime = -1e-8
         }
      },
      Io = function(t, e, n, i) {
         return e.parent && So(e), e._start = lo((ws(n) ? n : n || t !== ts ? Vo(t, n, e) : t._time) + e._delay), e._end = lo(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), bo(t, e, "_first", "_last", t._sort ? "_start" : 0), Fo(e) || (t._recent = e), i || Oo(t, e), t._ts < 0 && Do(t, t._tTime), t
      },
      zo = function(t, e) {
         return (ks.ScrollTrigger || Vs("scrollTrigger", e)) && ks.ScrollTrigger.create(e, t)
      },
      No = function(t, e, n, i, r) {
         return kl(t, e, r), t._initted ? !n && t._pt && !Qa && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && as !== vl.frame ? (Ks.push(t), t._lazy = [r, i], 1) : void 0 : 1
      },
      Uo = function t(e) {
         var n = e.parent;
         return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
      },
      Fo = function(t) {
         var e = t.data;
         return "isFromStart" === e || "isStart" === e
      },
      ko = function(t, e, n, i) {
         var r = t._repeat,
            a = lo(e) || 0,
            s = t._tTime / t._tDur;
         return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = r ? r < 0 ? 1e10 : lo(a * (r + 1) + t._rDelay * r) : a, s > 0 && !i && Do(t, t._tTime = t._tDur * s), t.parent && Ro(t), n || wo(t.parent, t), t
      },
      Ho = function(t) {
         return t instanceof Ol ? wo(t) : ko(t, t._dur)
      },
      Bo = {
         _start: 0,
         endTime: js,
         totalDuration: js
      },
      Vo = function t(e, n, i) {
         var r, a, s, o = e.labels,
            l = e._recent || Bo,
            c = e.duration() >= fs ? l.endTime(!1) : e._dur;
         return Ms(n) && (isNaN(n) || n in o) ? (a = n.charAt(0), s = "%" === n.substr(-1), r = n.indexOf("="), "<" === a || ">" === a ? (r >= 0 && (n = n.replace(/=/, "")), ("<" === a ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (r < 0 ? l : i).totalDuration() / 100 : 1)) : r < 0 ? (n in o || (o[n] = c), o[n]) : (a = parseFloat(n.charAt(r - 1) + n.substr(r + 1)), s && i && (a = a / 100 * (Rs(i) ? i[0] : i).totalDuration()), r > 1 ? t(e, n.substr(0, r - 1), i) + a : c + a)) : null == n ? c : +n
      },
      Go = function(t, e, n) {
         var i, r, a = ws(e[1]),
            s = (a ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[s];
         if (a && (o.duration = e[1]), o.parent = n, t) {
            for (i = o, r = n; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = As(r.vars.inherit) && r.parent;
            o.immediateRender = As(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1]
         }
         return new Wl(e[0], o, e[s + 1])
      },
      Wo = function(t, e) {
         return t || 0 === t ? e(t) : e
      },
      jo = function(t, e, n) {
         return n < t ? t : n > e ? e : n
      },
      Xo = function(t, e) {
         return Ms(t) && (e = Fs.exec(t)) ? e[1] : ""
      },
      qo = [].slice,
      Yo = function(t, e) {
         return t && Es(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Es(t[0])) && !t.nodeType && t !== es
      },
      Zo = function(t, e, n) {
         return $a && !e && $a.selector ? $a.selector(t) : !Ms(t) || n || !ns && xl() ? Rs(t) ? function(t, e, n) {
            return void 0 === n && (n = []), t.forEach((function(t) {
               var i;
               return Ms(t) && !e || Yo(t, 1) ? (i = n).push.apply(i, Zo(t)) : n.push(t)
            })) || n
         }(t, n) : Yo(t) ? qo.call(t, 0) : t ? [t] : [] : qo.call((e || is).querySelectorAll(t), 0)
      },
      Ko = function(t) {
         return t = Zo(t)[0] || Gs("Invalid scope") || {},
            function(e) {
               var n = t.current || t.nativeElement || t;
               return Zo(e, n.querySelectorAll ? n : n === t ? Gs("Invalid scope") || is.createElement("div") : t)
            }
      },
      Jo = function(t) {
         return t.sort((function() {
            return .5 - Math.random()
         }))
      },
      Qo = function(t) {
         if (Ss(t)) return t;
         var e = Es(t) ? t : {
               each: t
            },
            n = El(e.ease),
            i = e.from || 0,
            r = parseFloat(e.base) || 0,
            a = {},
            s = i > 0 && i < 1,
            o = isNaN(i) || s,
            l = e.axis,
            c = i,
            u = i;
         return Ms(i) ? c = u = {
               center: .5,
               edges: .5,
               end: 1
            } [i] || 0 : !s && o && (c = i[0], u = i[1]),
            function(t, s, h) {
               var d, p, f, m, g, _, v, x, y, b = (h || e).length,
                  M = a[b];
               if (!M) {
                  if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, fs])[1])) {
                     for (v = -fs; v < (v = h[y++].getBoundingClientRect().left) && y < b;);
                     y--
                  }
                  for (M = a[b] = [], d = o ? Math.min(y, b) * c - .5 : i % y, p = y === fs ? 0 : o ? b * u / y - .5 : i / y | 0, v = 0, x = fs, _ = 0; _ < b; _++) f = _ % y - d, m = p - (_ / y | 0), M[_] = g = l ? Math.abs("y" === l ? m : f) : xs(f * f + m * m), g > v && (v = g), g < x && (x = g);
                  "random" === i && Jo(M), M.max = v - x, M.min = x, M.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (y > b ? b - 1 : l ? "y" === l ? b / y : y : Math.max(y, b / y)) || 0) * ("edges" === i ? -1 : 1), M.b = b < 0 ? r - b : r, M.u = Xo(e.amount || e.each) || 0, n = n && b < 0 ? wl(n) : n
               }
               return b = (M[t] - M.min) / M.max || 0, lo(M.b + (n ? n(b) : b) * M.v) + M.u
            }
      },
      $o = function(t) {
         var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
         return function(n) {
            var i = lo(Math.round(parseFloat(n) / t) * t * e);
            return (i - i % 1) / e + (ws(n) ? 0 : Xo(n))
         }
      },
      tl = function(t, e) {
         var n, i, r = Rs(t);
         return !r && Es(t) && (n = r = t.radius || fs, t.values ? (t = Zo(t.values), (i = !ws(t[0])) && (n *= n)) : t = $o(t.increment)), Wo(e, r ? Ss(t) ? function(e) {
            return i = t(e), Math.abs(i - e) <= n ? i : e
         } : function(e) {
            for (var r, a, s = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), l = fs, c = 0, u = t.length; u--;)(r = i ? (r = t[u].x - s) * r + (a = t[u].y - o) * a : Math.abs(t[u] - s)) < l && (l = r, c = u);
            return c = !n || l <= n ? t[c] : e, i || c === e || ws(e) ? c : c + Xo(e)
         } : $o(t))
      },
      el = function(t, e, n, i) {
         return Wo(Rs(t) ? !e : !0 === n ? !!(n = 0) : !i, (function() {
            return Rs(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
         }))
      },
      nl = function(t, e, n) {
         return Wo(n, (function(n) {
            return t[~~e(n)]
         }))
      },
      il = function(t) {
         for (var e, n, i, r, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? Us : Ds), s += t.substr(a, e - a) + el(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), a = i + 1;
         return s + t.substr(a, t.length - a)
      },
      rl = function(t, e, n, i, r) {
         var a = e - t,
            s = i - n;
         return Wo(r, (function(e) {
            return n + ((e - t) / a * s || 0)
         }))
      },
      al = function(t, e, n) {
         var i, r, a, s = t.labels,
            o = fs;
         for (i in s)(r = s[i] - e) < 0 == !!n && r && o > (r = Math.abs(r)) && (a = i, o = r);
         return a
      },
      sl = function(t, e, n) {
         var i, r, a, s = t.vars,
            o = s[e],
            l = $a,
            c = t._ctx;
         if (o) return i = s[e + "Params"], r = s.callbackScope || t, n && Ks.length && ho(), c && ($a = c), a = i ? o.apply(r, i) : o.call(r), $a = l, a
      },
      ol = function(t) {
         return So(t), t.scrollTrigger && t.scrollTrigger.kill(!!Qa), t.progress() < 1 && sl(t, "onInterrupt"), t
      },
      ll = function(t) {
         var e = (t = !t.name && t.default || t).name,
            n = Ss(t),
            i = e && !n && t.init ? function() {
               this._props = []
            } : t,
            r = {
               init: js,
               render: $l,
               add: Ul,
               kill: ec,
               modifier: tc,
               rawVars: 0
            },
            a = {
               targetTest: 0,
               get: 0,
               getSetter: Zl,
               aliases: {},
               register: 0
            };
         if (xl(), t !== i) {
            if (Qs[e]) return;
            go(i, go(xo(t, r), a)), _o(i.prototype, _o(r, xo(t, a))), Qs[i.prop = e] = i, t.targetTest && (eo.push(i), Zs[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
         }
         Ws(e, i), t.register && t.register(gc, i, rc)
      },
      cl = 255,
      ul = {
         aqua: [0, cl, cl],
         lime: [0, cl, 0],
         silver: [192, 192, 192],
         black: [0, 0, 0],
         maroon: [128, 0, 0],
         teal: [0, 128, 128],
         blue: [0, 0, cl],
         navy: [0, 0, 128],
         white: [cl, cl, cl],
         olive: [128, 128, 0],
         yellow: [cl, cl, 0],
         orange: [cl, 165, 0],
         gray: [128, 128, 128],
         purple: [128, 0, 128],
         green: [0, 128, 0],
         red: [cl, 0, 0],
         pink: [cl, 192, 203],
         cyan: [0, cl, cl],
         transparent: [cl, cl, cl, 0]
      },
      hl = function(t, e, n) {
         return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * cl + .5 | 0
      },
      dl = function(t, e, n) {
         var i, r, a, s, o, l, c, u, h, d, p = t ? ws(t) ? [t >> 16, t >> 8 & cl, t & cl] : 0 : ul.black;
         if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ul[t]) p = ul[t];
            else if ("#" === t.charAt(0)) {
               if (t.length < 6 && (i = t.charAt(1), r = t.charAt(2), a = t.charAt(3), t = "#" + i + i + r + r + a + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & cl, p & cl, parseInt(t.substr(7), 16) / 255];
               p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & cl, t & cl]
            } else if ("hsl" === t.substr(0, 3))
               if (p = d = t.match(Ds), e) {
                  if (~t.indexOf("=")) return p = t.match(Os), n && p.length < 4 && (p[3] = 1), p
               } else s = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), p.length > 3 && (p[3] *= 1), p[0] = hl(s + 1 / 3, i, r), p[1] = hl(s, i, r), p[2] = hl(s - 1 / 3, i, r);
            else p = t.match(Ds) || ul.transparent;
            p = p.map(Number)
         }
         return e && !d && (i = p[0] / cl, r = p[1] / cl, a = p[2] / cl, l = ((c = Math.max(i, r, a)) + (u = Math.min(i, r, a))) / 2, c === u ? s = o = 0 : (h = c - u, o = l > .5 ? h / (2 - c - u) : h / (c + u), s = c === i ? (r - a) / h + (r < a ? 6 : 0) : c === r ? (a - i) / h + 2 : (i - r) / h + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * l + .5)), n && p.length < 4 && (p[3] = 1), p
      },
      pl = function(t) {
         var e = [],
            n = [],
            i = -1;
         return t.split(ml).forEach((function(t) {
            var r = t.match(Is) || [];
            e.push.apply(e, r), n.push(i += r.length + 1)
         })), e.c = n, e
      },
      fl = function(t, e, n) {
         var i, r, a, s, o = "",
            l = (t + o).match(ml),
            c = e ? "hsla(" : "rgba(",
            u = 0;
         if (!l) return t;
         if (l = l.map((function(t) {
               return (t = dl(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), n && (a = pl(t), (i = n.c).join(o) !== a.c.join(o)))
            for (s = (r = t.replace(ml, "1").split(Is)).length - 1; u < s; u++) o += r[u] + (~i.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (a.length ? a : l.length ? l : n).shift());
         if (!r)
            for (s = (r = t.split(ml)).length - 1; u < s; u++) o += r[u] + l[u];
         return o + r[s]
      },
      ml = function() {
         var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
         for (t in ul) e += "|" + t + "\\b";
         return new RegExp(e + ")", "gi")
      }(),
      gl = /hsl[a]?\(/,
      _l = function(t) {
         var e, n = t.join(" ");
         if (ml.lastIndex = 0, ml.test(n)) return e = gl.test(n), t[1] = fl(t[1], e), t[0] = fl(t[0], e, pl(t[1])), !0
      },
      vl = function() {
         var t, e, n, i, r, a, s = Date.now,
            o = 500,
            l = 33,
            c = s(),
            u = c,
            h = 1e3 / 240,
            d = h,
            p = [],
            f = function n(f) {
               var m, g, _, v, x = s() - u,
                  y = !0 === f;
               if (x > o && (c += x - l), ((m = (_ = (u += x) - c) - d) > 0 || y) && (v = ++i.frame, r = _ - 1e3 * i.time, i.time = _ /= 1e3, d += m + (m >= h ? 4 : h - m), g = 1), y || (t = e(n)), g)
                  for (a = 0; a < p.length; a++) p[a](_, r, v, f)
            };
         return i = {
            time: 0,
            frame: 0,
            tick: function() {
               f(!0)
            },
            deltaRatio: function(t) {
               return r / (1e3 / (t || 60))
            },
            wake: function() {
               rs && (!ns && Cs() && (es = ns = window, is = es.document || {}, ks.gsap = gc, (es.gsapVersions || (es.gsapVersions = [])).push(gc.version), Bs(Hs || es.GreenSockGlobals || !es.gsap && es || {}), n = es.requestAnimationFrame), t && i.sleep(), e = n || function(t) {
                  return setTimeout(t, d - 1e3 * i.time + 1 | 0)
               }, os = 1, f(2))
            },
            sleep: function() {
               (n ? es.cancelAnimationFrame : clearTimeout)(t), os = 0, e = js
            },
            lagSmoothing: function(t, e) {
               o = t || 1e8, l = Math.min(e, o, 0)
            },
            fps: function(t) {
               h = 1e3 / (t || 240), d = 1e3 * i.time + h
            },
            add: function(t, e, n) {
               var r = e ? function(e, n, a, s) {
                  t(e, n, a, s), i.remove(r)
               } : t;
               return i.remove(t), p[n ? "unshift" : "push"](r), xl(), r
            },
            remove: function(t, e) {
               ~(e = p.indexOf(t)) && p.splice(e, 1) && a >= e && a--
            },
            _listeners: p
         }, i
      }(),
      xl = function() {
         return !os && vl.wake()
      },
      yl = {},
      bl = /^[\d.\-M][\d.\-,\s]/,
      Ml = /["']/g,
      Sl = function(t) {
         for (var e, n, i, r = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, l = a.length; o < l; o++) n = a[o], e = o !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[s] = isNaN(i) ? i.replace(Ml, "").trim() : +i, s = n.substr(e + 1).trim();
         return r
      },
      wl = function(t) {
         return function(e) {
            return 1 - t(1 - e)
         }
      },
      Tl = function t(e, n) {
         for (var i, r = e._first; r;) r instanceof Ol ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
      },
      El = function(t, e) {
         return t && (Ss(t) ? t : yl[t] || function(t) {
            var e, n, i, r, a = (t + "").split("("),
               s = yl[a[0]];
            return s && a.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Sl(a[1])] : (e = t, n = e.indexOf("(") + 1, i = e.indexOf(")"), r = e.indexOf("(", n), e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(fo)) : yl._CE && bl.test(t) ? yl._CE("", t) : s
         }(t)) || e
      },
      Al = function(t, e, n, i) {
         void 0 === n && (n = function(t) {
            return 1 - e(1 - t)
         }), void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
         });
         var r, a = {
            easeIn: e,
            easeOut: n,
            easeInOut: i
         };
         return so(t, (function(t) {
            for (var e in yl[t] = ks[t] = a, yl[r = t.toLowerCase()] = n, a) yl[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = yl[t + "." + e] = a[e]
         })), a
      },
      Cl = function(t) {
         return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
         }
      },
      Ll = function t(e, n, i) {
         var r = n >= 1 ? n : 1,
            a = (i || (e ? .3 : .45)) / (n < 1 ? n : 1),
            s = a / gs * (Math.asin(1 / r) || 0),
            o = function(t) {
               return 1 === t ? 1 : r * Math.pow(2, -10 * t) * bs((t - s) * a) + 1
            },
            l = "out" === e ? o : "in" === e ? function(t) {
               return 1 - o(1 - t)
            } : Cl(o);
         return a = gs / a, l.config = function(n, i) {
            return t(e, n, i)
         }, l
      },
      Pl = function t(e, n) {
         void 0 === n && (n = 1.70158);
         var i = function(t) {
               return t ? --t * t * ((n + 1) * t + n) + 1 : 0
            },
            r = "out" === e ? i : "in" === e ? function(t) {
               return 1 - i(1 - t)
            } : Cl(i);
         return r.config = function(n) {
            return t(e, n)
         }, r
      };
   so("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
      var n = e < 5 ? e + 1 : e;
      Al(t + ",Power" + (n - 1), e ? function(t) {
         return Math.pow(t, n)
      } : function(t) {
         return t
      }, (function(t) {
         return 1 - Math.pow(1 - t, n)
      }), (function(t) {
         return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
      }))
   })), yl.Linear.easeNone = yl.none = yl.Linear.easeIn, Al("Elastic", Ll("in"), Ll("out"), Ll()), ls = 7.5625, us = 1 / (cs = 2.75), Al("Bounce", (function(t) {
      return 1 - hs(1 - t)
   }), hs = function(t) {
      return t < us ? ls * t * t : t < .7272727272727273 ? ls * Math.pow(t - 1.5 / cs, 2) + .75 : t < .9090909090909092 ? ls * (t -= 2.25 / cs) * t + .9375 : ls * Math.pow(t - 2.625 / cs, 2) + .984375
   }), Al("Expo", (function(t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0
   })), Al("Circ", (function(t) {
      return -(xs(1 - t * t) - 1)
   })), Al("Sine", (function(t) {
      return 1 === t ? 1 : 1 - ys(t * _s)
   })), Al("Back", Pl("in"), Pl("out"), Pl()), yl.SteppedEase = yl.steps = ks.SteppedEase = {
      config: function(t, e) {
         void 0 === t && (t = 1);
         var n = 1 / t,
            i = t + (e ? 0 : 1),
            r = e ? 1 : 0;
         return function(t) {
            return ((i * jo(0, .99999999, t) | 0) + r) * n
         }
      }
   }, ps.ease = yl["quad.out"], so("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
      return no += t + "," + t + "Params,"
   }));
   var Rl = function(t, e) {
         this.id = vs++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ao, this.set = e ? e.getSetter : Zl
      },
      Dl = function() {
         function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ko(this, +t.duration, 1, 1), this.data = t.data, $a && (this._ctx = $a, $a.data.push(this)), os || vl.wake()
         }
         var e = t.prototype;
         return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
         }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
         }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, ko(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
         }, e.totalTime = function(t, e) {
            if (xl(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
               for (Do(this, t), !n._dp || n.parent || Oo(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
               !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Io(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === ms || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), po(this, t, e)), this
         }, e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Co(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
         }, e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
         }, e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Co(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
         }, e.iteration = function(t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Lo(this._tTime, n) + 1 : 1
         }, e.timeScale = function(t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Po(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(jo(-this._delay, this._tDur, e), !0), Ro(this), To(this)
         }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (xl(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== ms && (this._tTime -= ms)))), this) : this._ps
         }, e.startTime = function(t) {
            if (arguments.length) {
               this._start = t;
               var e = this.parent || this._dp;
               return e && (e._sort || !this.parent) && Io(e, this, t - this._delay), this
            }
            return this._start
         }, e.endTime = function(t) {
            return this._start + (As(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
         }, e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Po(e.rawTime(t), this) : this._tTime : this._tTime
         }, e.revert = function(t) {
            void 0 === t && (t = Ys);
            var e = Qa;
            return Qa = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), Qa = e, this
         }, e.globalTime = function(t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
            return !this.parent && this.vars.immediateRender ? -1 : n
         }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ho(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
         }, e.repeatDelay = function(t) {
            if (arguments.length) {
               var e = this._time;
               return this._rDelay = t, Ho(this), e ? this.time(e) : this
            }
            return this._rDelay
         }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
         }, e.seek = function(t, e) {
            return this.totalTime(Vo(this, t), As(e))
         }, e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, As(e))
         }, e.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
         }, e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
         }, e.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
         }, e.resume = function() {
            return this.paused(!1)
         }, e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
         }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
         }, e.isActive = function() {
            var t, e = this.parent || this._dp,
               n = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - ms))
         }, e.eventCallback = function(t, e, n) {
            var i = this.vars;
            return arguments.length > 1 ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
         }, e.then = function(t) {
            var e = this;
            return new Promise((function(n) {
               var i = Ss(t) ? t : mo,
                  r = function() {
                     var t = e.then;
                     e.then = null, Ss(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                  };
               e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
            }))
         }, e.kill = function() {
            ol(this)
         }, t
      }();
   go(Dl.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1
   });
   var Ol = function(t) {
      function e(e, n) {
         var i;
         return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = As(e.sortChildren), ts && Io(e.parent || ts, Za(i), n), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && zo(Za(i), e.scrollTrigger), i
      }
      Ka(e, t);
      var n = e.prototype;
      return n.to = function(t, e, n) {
         return Go(0, arguments, this), this
      }, n.from = function(t, e, n) {
         return Go(1, arguments, this), this
      }, n.fromTo = function(t, e, n, i) {
         return Go(2, arguments, this), this
      }, n.set = function(t, e, n) {
         return e.duration = 0, e.parent = this, yo(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Wl(t, e, Vo(this, n), 1), this
      }, n.call = function(t, e, n) {
         return Io(this, Wl.delayedCall(0, t, e), n)
      }, n.staggerTo = function(t, e, n, i, r, a, s) {
         return n.duration = e, n.stagger = n.stagger || i, n.onComplete = a, n.onCompleteParams = s, n.parent = this, new Wl(t, n, Vo(this, r)), this
      }, n.staggerFrom = function(t, e, n, i, r, a, s) {
         return n.runBackwards = 1, yo(n).immediateRender = As(n.immediateRender), this.staggerTo(t, e, n, i, r, a, s)
      }, n.staggerFromTo = function(t, e, n, i, r, a, s, o) {
         return i.startAt = n, yo(i).immediateRender = As(i.immediateRender), this.staggerTo(t, e, i, r, a, s, o)
      }, n.render = function(t, e, n) {
         var i, r, a, s, o, l, c, u, h, d, p, f, m = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            _ = this._dur,
            v = t <= 0 ? 0 : lo(t),
            x = this._zTime < 0 != t < 0 && (this._initted || !_);
         if (this !== ts && v > g && t >= 0 && (v = g), v !== this._tTime || n || x) {
            if (m !== this._time && _ && (v += this._time - m, t += this._time - m), i = v, h = this._start, l = !(u = this._ts), x && (_ || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
               if (p = this._yoyo, o = _ + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, n);
               if (i = lo(v % o), v === g ? (s = this._repeat, i = _) : ((s = ~~(v / o)) && s === v / o && (i = _, s--), i > _ && (i = _)), d = Lo(this._tTime, o), !m && this._tTime && d !== s && (d = s), p && 1 & s && (i = _ - i, f = 1), s !== d && !this._lock) {
                  var y = p && 1 & d,
                     b = y === (p && 1 & s);
                  if (s < d && (y = !y), m = y ? 0 : _, this._lock = 1, this.render(m || (f ? 0 : lo(s * o)), e, !_)._lock = 0, this._tTime = v, !e && this.parent && sl(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                  if (_ = this._dur, g = this._tDur, b && (this._lock = 2, m = y ? _ : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                  Tl(this, f)
               }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, n) {
                  var i;
                  if (n > e)
                     for (i = t._first; i && i._start <= n;) {
                        if ("isPause" === i.data && i._start > e) return i;
                        i = i._next
                     } else
                        for (i = t._last; i && i._start >= n;) {
                           if ("isPause" === i.data && i._start < e) return i;
                           i = i._prev
                        }
               }(this, lo(m), lo(i)), c && (v -= i - (i = c._start))), this._tTime = v, this._time = i, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && i && !e && (sl(this, "onStart"), this._tTime !== v)) return this;
            if (i >= m && t >= 0)
               for (r = this._first; r;) {
                  if (a = r._next, (r._act || i >= r._start) && r._ts && c !== r) {
                     if (r.parent !== this) return this.render(t, e, n);
                     if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !l) {
                        c = 0, a && (v += this._zTime = -1e-8);
                        break
                     }
                  }
                  r = a
               } else {
                  r = this._last;
                  for (var M = t < 0 ? t : i; r;) {
                     if (a = r._prev, (r._act || M <= r._end) && r._ts && c !== r) {
                        if (r.parent !== this) return this.render(t, e, n);
                        if (r.render(r._ts > 0 ? (M - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (M - r._start) * r._ts, e, n || Qa && (r._initted || r._startAt)), i !== this._time || !this._ts && !l) {
                           c = 0, a && (v += this._zTime = M ? -1e-8 : ms);
                           break
                        }
                     }
                     r = a
                  }
               }
            if (c && !e && (this.pause(), c.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1, this._ts)) return this._start = h, Ro(this), this.render(t, e, n);
            this._onUpdate && !e && sl(this, "onUpdate", !0), (v === g && this._tTime >= this.totalDuration() || !v && m) && (h !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((t || !_) && (v === g && this._ts > 0 || !v && this._ts < 0) && So(this, 1), e || t < 0 && !m || !v && !m && g || (sl(this, v === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < g && this.timeScale() > 0) && this._prom())))
         }
         return this
      }, n.add = function(t, e) {
         var n = this;
         if (ws(e) || (e = Vo(this, e, t)), !(t instanceof Dl)) {
            if (Rs(t)) return t.forEach((function(t) {
               return n.add(t, e)
            })), this;
            if (Ms(t)) return this.addLabel(t, e);
            if (!Ss(t)) return this;
            t = Wl.delayedCall(0, t)
         }
         return this !== t ? Io(this, t, e) : this
      }, n.getChildren = function(t, e, n, i) {
         void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -fs);
         for (var r = [], a = this._first; a;) a._start >= i && (a instanceof Wl ? e && r.push(a) : (n && r.push(a), t && r.push.apply(r, a.getChildren(!0, e, n)))), a = a._next;
         return r
      }, n.getById = function(t) {
         for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
            if (e[n].vars.id === t) return e[n]
      }, n.remove = function(t) {
         return Ms(t) ? this.removeLabel(t) : Ss(t) ? this.killTweensOf(t) : (Mo(this, t), t === this._recent && (this._recent = this._last), wo(this))
      }, n.totalTime = function(e, n) {
         return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = lo(vl.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
      }, n.addLabel = function(t, e) {
         return this.labels[t] = Vo(this, e), this
      }, n.removeLabel = function(t) {
         return delete this.labels[t], this
      }, n.addPause = function(t, e, n) {
         var i = Wl.delayedCall(0, e || js, n);
         return i.data = "isPause", this._hasPause = 1, Io(this, i, Vo(this, t))
      }, n.removePause = function(t) {
         var e = this._first;
         for (t = Vo(this, t); e;) e._start === t && "isPause" === e.data && So(e), e = e._next
      }, n.killTweensOf = function(t, e, n) {
         for (var i = this.getTweensOf(t, n), r = i.length; r--;) Il !== i[r] && i[r].kill(t, e);
         return this
      }, n.getTweensOf = function(t, e) {
         for (var n, i = [], r = Zo(t), a = this._first, s = ws(e); a;) a instanceof Wl ? uo(a._targets, r) && (s ? (!Il || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (n = a.getTweensOf(r, e)).length && i.push.apply(i, n), a = a._next;
         return i
      }, n.tweenTo = function(t, e) {
         e = e || {};
         var n, i = this,
            r = Vo(i, t),
            a = e,
            s = a.startAt,
            o = a.onStart,
            l = a.onStartParams,
            c = a.immediateRender,
            u = Wl.to(i, go({
               ease: e.ease || "none",
               lazy: !1,
               immediateRender: !1,
               time: r,
               overwrite: "auto",
               duration: e.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || ms,
               onStart: function() {
                  if (i.pause(), !n) {
                     var t = e.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale());
                     u._dur !== t && ko(u, t, 0, 1).render(u._time, !0, !0), n = 1
                  }
                  o && o.apply(u, l || [])
               }
            }, e));
         return c ? u.render(0) : u
      }, n.tweenFromTo = function(t, e, n) {
         return this.tweenTo(e, go({
            startAt: {
               time: Vo(this, t)
            }
         }, n))
      }, n.recent = function() {
         return this._recent
      }, n.nextLabel = function(t) {
         return void 0 === t && (t = this._time), al(this, Vo(this, t))
      }, n.previousLabel = function(t) {
         return void 0 === t && (t = this._time), al(this, Vo(this, t), 1)
      }, n.currentLabel = function(t) {
         return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + ms)
      }, n.shiftChildren = function(t, e, n) {
         void 0 === n && (n = 0);
         for (var i, r = this._first, a = this.labels; r;) r._start >= n && (r._start += t, r._end += t), r = r._next;
         if (e)
            for (i in a) a[i] >= n && (a[i] += t);
         return wo(this)
      }, n.invalidate = function(e) {
         var n = this._first;
         for (this._lock = 0; n;) n.invalidate(e), n = n._next;
         return t.prototype.invalidate.call(this, e)
      }, n.clear = function(t) {
         void 0 === t && (t = !0);
         for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
         return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), wo(this)
      }, n.totalDuration = function(t) {
         var e, n, i, r = 0,
            a = this,
            s = a._last,
            o = fs;
         if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
         if (a._dirty) {
            for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (n = s._start) > o && a._sort && s._ts && !a._lock ? (a._lock = 1, Io(a, s, n - s._delay, 1)._lock = 0) : o = n, n < 0 && s._ts && (r -= n, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += n / a._ts, a._time -= n, a._tTime -= n), a.shiftChildren(-n, !1, -Infinity), o = 0), s._end > r && s._ts && (r = s._end), s = e;
            ko(a, a === ts && a._time > r ? a._time : r, 1, 1), a._dirty = 0
         }
         return a._tDur
      }, e.updateRoot = function(t) {
         if (ts._ts && (po(ts, Po(t, ts)), as = vl.frame), vl.frame >= to) {
            to += ds.autoSleep || 120;
            var e = ts._first;
            if ((!e || !e._ts) && ds.autoSleep && vl._listeners.length < 2) {
               for (; e && !e._ts;) e = e._next;
               e || vl.sleep()
            }
         }
      }, e
   }(Dl);
   go(Ol.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
   });
   var Il, zl, Nl = function(t, e, n, i, r, a, s) {
         var o, l, c, u, h, d, p, f, m = new rc(this._pt, t, e, 0, 1, Ql, null, r),
            g = 0,
            _ = 0;
         for (m.b = n, m.e = i, n += "", (p = ~(i += "").indexOf("random(")) && (i = il(i)), a && (a(f = [n, i], t, e), n = f[0], i = f[1]), l = n.match(zs) || []; o = zs.exec(i);) u = o[0], h = i.substring(g, o.index), c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1), u !== l[_++] && (d = parseFloat(l[_ - 1]) || 0, m._pt = {
            _next: m._pt,
            p: h || 1 === _ ? h : ",",
            s: d,
            c: "=" === u.charAt(1) ? co(d, u) - d : parseFloat(u) - d,
            m: c && c < 4 ? Math.round : 0
         }, g = zs.lastIndex);
         return m.c = g < i.length ? i.substring(g, i.length) : "", m.fp = s, (Ns.test(i) || p) && (m.e = 0), this._pt = m, m
      },
      Ul = function(t, e, n, i, r, a, s, o, l, c) {
         Ss(i) && (i = i(r || 0, t, a));
         var u, h = t[e],
            d = "get" !== n ? n : Ss(h) ? l ? t[e.indexOf("set") || !Ss(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h,
            p = Ss(h) ? l ? ql : Xl : jl;
         if (Ms(i) && (~i.indexOf("random(") && (i = il(i)), "=" === i.charAt(1) && ((u = co(d, i) + (Xo(d) || 0)) || 0 === u) && (i = u)), !c || d !== i || zl) return isNaN(d * i) || "" === i ? (!h && !(e in t) && Vs(e, i), Nl.call(this, t, e, d, i, p, o || ds.stringFilter, l)) : (u = new rc(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof h ? Jl : Kl, 0, p), l && (u.fp = l), s && u.modifier(s, this, t), this._pt = u)
      },
      Fl = function(t, e, n, i, r, a) {
         var s, o, l, c;
         if (Qs[t] && !1 !== (s = new Qs[t]).init(r, s.rawVars ? e[t] : function(t, e, n, i, r) {
               if (Ss(t) && (t = Bl(t, r, e, n, i)), !Es(t) || t.style && t.nodeType || Rs(t) || Ps(t)) return Ms(t) ? Bl(t, r, e, n, i) : t;
               var a, s = {};
               for (a in t) s[a] = Bl(t[a], r, e, n, i);
               return s
            }(e[t], i, r, a, n), n, i, a) && (n._pt = o = new rc(n._pt, r, t, 0, 1, s.render, s, 0, s.priority), n !== ss))
            for (l = n._ptLookup[n._targets.indexOf(r)], c = s._props.length; c--;) l[s._props[c]] = o;
         return s
      },
      kl = function t(e, n, i) {
         var r, a, s, o, l, c, u, h, d, p, f, m, g, _ = e.vars,
            v = _.ease,
            x = _.startAt,
            y = _.immediateRender,
            b = _.lazy,
            M = _.onUpdate,
            S = _.onUpdateParams,
            w = _.callbackScope,
            T = _.runBackwards,
            E = _.yoyoEase,
            A = _.keyframes,
            C = _.autoRevert,
            L = e._dur,
            P = e._startAt,
            R = e._targets,
            D = e.parent,
            O = D && "nested" === D.data ? D.vars.targets : R,
            I = "auto" === e._overwrite && !Ja,
            z = e.timeline;
         if (z && (!A || !v) && (v = "none"), e._ease = El(v, ps.ease), e._yEase = E ? wl(El(!0 === E ? v : E, ps.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !z && !!_.runBackwards, !z || A && !_.stagger) {
            if (m = (h = R[0] ? ro(R[0]).harness : 0) && _[h.prop], r = xo(_, Zs), P && (P._zTime < 0 && P.progress(1), n < 0 && T && y && !C ? P.render(-1, !0) : P.revert(T && L ? qs : Xs), P._lazy = 0), x) {
               if (So(e._startAt = Wl.set(R, go({
                     data: "isStart",
                     overwrite: !1,
                     parent: D,
                     immediateRender: !0,
                     lazy: As(b),
                     startAt: null,
                     delay: 0,
                     onUpdate: M,
                     onUpdateParams: S,
                     callbackScope: w,
                     stagger: 0
                  }, x))), n < 0 && (Qa || !y && !C) && e._startAt.revert(qs), y && L && n <= 0 && i <= 0) return void(n && (e._zTime = n))
            } else if (T && L && !P)
               if (n && (y = !1), s = go({
                     overwrite: !1,
                     data: "isFromStart",
                     lazy: y && As(b),
                     immediateRender: y,
                     stagger: 0,
                     parent: D
                  }, r), m && (s[h.prop] = m), So(e._startAt = Wl.set(R, s)), n < 0 && (Qa ? e._startAt.revert(qs) : e._startAt.render(-1, !0)), e._zTime = n, y) {
                  if (!n) return
               } else t(e._startAt, ms, ms);
            for (e._pt = e._ptCache = 0, b = L && As(b) || b && !L, a = 0; a < R.length; a++) {
               if (u = (l = R[a])._gsap || io(R)[a]._gsap, e._ptLookup[a] = p = {}, Js[u.id] && Ks.length && ho(), f = O === R ? a : O.indexOf(l), h && !1 !== (d = new h).init(l, m || r, e, f, O) && (e._pt = o = new rc(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach((function(t) {
                     p[t] = o
                  })), d.priority && (c = 1)), !h || m)
                  for (s in r) Qs[s] && (d = Fl(s, r, e, f, l, O)) ? d.priority && (c = 1) : p[s] = o = Ul.call(e, l, s, "get", r[s], f, O, 0, _.stringFilter);
               e._op && e._op[a] && e.kill(l, e._op[a]), I && e._pt && (Il = e, ts.killTweensOf(l, p, e.globalTime(n)), g = !e.parent, Il = 0), e._pt && b && (Js[u.id] = 1)
            }
            c && ic(e), e._onInit && e._onInit(e)
         }
         e._onUpdate = M, e._initted = (!e._op || e._pt) && !g, A && n <= 0 && z.render(fs, !0, !0)
      },
      Hl = function(t, e, n, i) {
         var r, a, s = e.ease || i || "power1.inOut";
         if (Rs(e)) a = n[t] || (n[t] = []), e.forEach((function(t, n) {
            return a.push({
               t: n / (e.length - 1) * 100,
               v: t,
               e: s
            })
         }));
         else
            for (r in e) a = n[r] || (n[r] = []), "ease" === r || a.push({
               t: parseFloat(t),
               v: e[r],
               e: s
            })
      },
      Bl = function(t, e, n, i, r) {
         return Ss(t) ? t.call(e, n, i, r) : Ms(t) && ~t.indexOf("random(") ? il(t) : t
      },
      Vl = no + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      Gl = {};
   so(Vl + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
      return Gl[t] = 1
   }));
   var Wl = function(t) {
      function e(e, n, i, r) {
         var a;
         "number" == typeof n && (i.duration = n, n = i, i = null);
         var s, o, l, c, u, h, d, p, f = (a = t.call(this, r ? n : yo(n)) || this).vars,
            m = f.duration,
            g = f.delay,
            _ = f.immediateRender,
            v = f.stagger,
            x = f.overwrite,
            y = f.keyframes,
            b = f.defaults,
            M = f.scrollTrigger,
            S = f.yoyoEase,
            w = n.parent || ts,
            T = (Rs(e) || Ps(e) ? ws(e[0]) : "length" in n) ? [e] : Zo(e);
         if (a._targets = T.length ? io(T) : Gs("GSAP target " + e + " not found. https://greensock.com", !ds.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = x, y || v || Ls(m) || Ls(g)) {
            if (n = a.vars, (s = a.timeline = new Ol({
                  data: "nested",
                  defaults: b || {},
                  targets: w && "nested" === w.data ? w.vars.targets : T
               })).kill(), s.parent = s._dp = Za(a), s._start = 0, v || Ls(m) || Ls(g)) {
               if (c = T.length, d = v && Qo(v), Es(v))
                  for (u in v) ~Vl.indexOf(u) && (p || (p = {}), p[u] = v[u]);
               for (o = 0; o < c; o++)(l = xo(n, Gl)).stagger = 0, S && (l.yoyoEase = S), p && _o(l, p), h = T[o], l.duration = +Bl(m, Za(a), o, h, T), l.delay = (+Bl(g, Za(a), o, h, T) || 0) - a._delay, !v && 1 === c && l.delay && (a._delay = g = l.delay, a._start += g, l.delay = 0), s.to(h, l, d ? d(o, h, T) : 0), s._ease = yl.none;
               s.duration() ? m = g = 0 : a.timeline = 0
            } else if (y) {
               yo(go(s.vars.defaults, {
                  ease: "none"
               })), s._ease = El(y.ease || n.ease || "none");
               var E, A, C, L = 0;
               if (Rs(y)) y.forEach((function(t) {
                  return s.to(T, t, ">")
               })), s.duration();
               else {
                  for (u in l = {}, y) "ease" === u || "easeEach" === u || Hl(u, y[u], l, y.easeEach);
                  for (u in l)
                     for (E = l[u].sort((function(t, e) {
                           return t.t - e.t
                        })), L = 0, o = 0; o < E.length; o++)(C = {
                        ease: (A = E[o]).e,
                        duration: (A.t - (o ? E[o - 1].t : 0)) / 100 * m
                     })[u] = A.v, s.to(T, C, L), L += C.duration;
                  s.duration() < m && s.to({}, {
                     duration: m - s.duration()
                  })
               }
            }
            m || a.duration(m = s.duration())
         } else a.timeline = 0;
         return !0 !== x || Ja || (Il = Za(a), ts.killTweensOf(T), Il = 0), Io(w, Za(a), i), n.reversed && a.reverse(), n.paused && a.paused(!0), (_ || !m && !y && a._start === lo(w._time) && As(_) && Ao(Za(a)) && "nested" !== w.data) && (a._tTime = -1e-8, a.render(Math.max(0, -g) || 0)), M && zo(Za(a), M), a
      }
      Ka(e, t);
      var n = e.prototype;
      return n.render = function(t, e, n) {
         var i, r, a, s, o, l, c, u, h, d = this._time,
            p = this._tDur,
            f = this._dur,
            m = t < 0,
            g = t > p - ms && !m ? p : t < ms ? 0 : t;
         if (f) {
            if (g !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
               if (i = g, u = this.timeline, this._repeat) {
                  if (s = f + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * s + t, e, n);
                  if (i = lo(g % s), g === p ? (a = this._repeat, i = f) : ((a = ~~(g / s)) && a === g / s && (i = f, a--), i > f && (i = f)), (l = this._yoyo && 1 & a) && (h = this._yEase, i = f - i), o = Lo(this._tTime, s), i === d && !n && this._initted) return this._tTime = g, this;
                  a !== o && (u && this._yEase && Tl(u, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1, this.render(lo(s * a), !0).invalidate()._lock = 0))
               }
               if (!this._initted) {
                  if (No(this, m ? t : i, n, e, g)) return this._tTime = 0, this;
                  if (d !== this._time) return this;
                  if (f !== this._dur) return this.render(t, e, n)
               }
               if (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (h || this._ease)(i / f), this._from && (this.ratio = c = 1 - c), i && !d && !e && (sl(this, "onStart"), this._tTime !== g)) return this;
               for (r = this._pt; r;) r.r(c, r.d), r = r._next;
               u && u.render(t < 0 ? t : !i && l ? -1e-8 : u._dur * u._ease(i / this._dur), e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && Eo(this, t, 0, n), sl(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && sl(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && Eo(this, t, 0, !0), (t || !f) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && So(this, 1), e || m && !d || !(g || d || l) || (sl(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()))
            }
         } else ! function(t, e, n, i) {
            var r, a, s, o = t.ratio,
               l = e < 0 || !e && (!t._start && Uo(t) && (t._initted || !Fo(t)) || (t._ts < 0 || t._dp._ts < 0) && !Fo(t)) ? 0 : 1,
               c = t._rDelay,
               u = 0;
            if (c && t._repeat && (u = jo(0, t._tDur, e), a = Lo(u, c), t._yoyo && 1 & a && (l = 1 - l), a !== Lo(t._tTime, c) && (o = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== o || Qa || i || t._zTime === ms || !e && t._zTime) {
               if (!t._initted && No(t, e, i, n, u)) return;
               for (s = t._zTime, t._zTime = e || (n ? ms : 0), n || (n = e && !s), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = u, r = t._pt; r;) r.r(l, r.d), r = r._next;
               e < 0 && Eo(t, e, 0, !0), t._onUpdate && !n && sl(t, "onUpdate"), u && t._repeat && !n && t.parent && sl(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && So(t, 1), n || Qa || (sl(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
         }(this, t, e, n);
         return this
      }, n.targets = function() {
         return this._targets
      }, n.invalidate = function(e) {
         return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
      }, n.resetTo = function(t, e, n, i) {
         os || vl.wake(), this._ts || this.play();
         var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
         return this._initted || kl(this, r),
            function(t, e, n, i, r, a, s) {
               var o, l, c, u, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
               if (!h)
                  for (h = t._ptCache[e] = [], c = t._ptLookup, u = t._targets.length; u--;) {
                     if ((o = c[u][e]) && o.d && o.d._pt)
                        for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                     if (!o) return zl = 1, t.vars[e] = "+=0", kl(t, s), zl = 0, 1;
                     h.push(o)
                  }
               for (u = h.length; u--;)(o = (l = h[u])._pt || l).s = !i && 0 !== i || r ? o.s + (i || 0) + a * o.c : i, o.c = n - o.s, l.e && (l.e = oo(n) + Xo(l.e)), l.b && (l.b = o.s + Xo(l.b))
            }(this, t, e, n, i, this._ease(r / this._dur), r) ? this.resetTo(t, e, n, i) : (Do(this, 0), this.parent || bo(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
      }, n.kill = function(t, e) {
         if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ol(this) : this;
         if (this.timeline) {
            var n = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Il && !0 !== Il.vars.overwrite)._first || ol(this), this.parent && n !== this.timeline.totalDuration() && ko(this, this._dur * this.timeline._tDur / n, 0, 1), this
         }
         var i, r, a, s, o, l, c, u = this._targets,
            h = t ? Zo(t) : u,
            d = this._ptLookup,
            p = this._pt;
         if ((!e || "all" === e) && function(t, e) {
               for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];);
               return n < 0
            }(u, h)) return "all" === e && (this._pt = 0), ol(this);
         for (i = this._op = this._op || [], "all" !== e && (Ms(e) && (o = {}, so(e, (function(t) {
               return o[t] = 1
            })), e = o), e = function(t, e) {
               var n, i, r, a, s = t[0] ? ro(t[0]).harness : 0,
                  o = s && s.aliases;
               if (!o) return e;
               for (i in n = _o({}, e), o)
                  if (i in n)
                     for (r = (a = o[i].split(",")).length; r--;) n[a[r]] = n[i];
               return n
            }(u, e)), c = u.length; c--;)
            if (~h.indexOf(u[c]))
               for (o in r = d[c], "all" === e ? (i[c] = e, s = r, a = {}) : (a = i[c] = i[c] || {}, s = e), s)(l = r && r[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Mo(this, l, "_pt"), delete r[o]), "all" !== a && (a[o] = 1);
         return this._initted && !this._pt && p && ol(this), this
      }, e.to = function(t, n) {
         return new e(t, n, arguments[2])
      }, e.from = function(t, e) {
         return Go(1, arguments)
      }, e.delayedCall = function(t, n, i, r) {
         return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: r
         })
      }, e.fromTo = function(t, e, n) {
         return Go(2, arguments)
      }, e.set = function(t, n) {
         return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
      }, e.killTweensOf = function(t, e, n) {
         return ts.killTweensOf(t, e, n)
      }, e
   }(Dl);
   go(Wl.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
   }), so("staggerTo,staggerFrom,staggerFromTo", (function(t) {
      Wl[t] = function() {
         var e = new Ol,
            n = qo.call(arguments, 0);
         return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
      }
   }));
   var jl = function(t, e, n) {
         return t[e] = n
      },
      Xl = function(t, e, n) {
         return t[e](n)
      },
      ql = function(t, e, n, i) {
         return t[e](i.fp, n)
      },
      Yl = function(t, e, n) {
         return t.setAttribute(e, n)
      },
      Zl = function(t, e) {
         return Ss(t[e]) ? Xl : Ts(t[e]) && t.setAttribute ? Yl : jl
      },
      Kl = function(t, e) {
         return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
      },
      Jl = function(t, e) {
         return e.set(e.t, e.p, !!(e.s + e.c * t), e)
      },
      Ql = function(t, e) {
         var n = e._pt,
            i = "";
         if (!t && e.b) i = e.b;
         else if (1 === t && e.e) i = e.e;
         else {
            for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
            i += e.c
         }
         e.set(e.t, e.p, i, e)
      },
      $l = function(t, e) {
         for (var n = e._pt; n;) n.r(t, n.d), n = n._next
      },
      tc = function(t, e, n, i) {
         for (var r, a = this._pt; a;) r = a._next, a.p === i && a.modifier(t, e, n), a = r
      },
      ec = function(t) {
         for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? Mo(this, i, "_pt") : i.dep || (e = 1), i = n;
         return !e
      },
      nc = function(t, e, n, i) {
         i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
      },
      ic = function(t) {
         for (var e, n, i, r, a = t._pt; a;) {
            for (e = a._next, n = i; n && n.pr > a.pr;) n = n._next;
            (a._prev = n ? n._prev : r) ? a._prev._next = a: i = a, (a._next = n) ? n._prev = a : r = a, a = e
         }
         t._pt = i
      },
      rc = function() {
         function t(t, e, n, i, r, a, s, o, l) {
            this.t = e, this.s = i, this.c = r, this.p = n, this.r = a || Kl, this.d = s || this, this.set = o || jl, this.pr = l || 0, this._next = t, t && (t._prev = this)
         }
         return t.prototype.modifier = function(t, e, n) {
            this.mSet = this.mSet || this.set, this.set = nc, this.m = t, this.mt = n, this.tween = e
         }, t
      }();
   so(no + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
      return Zs[t] = 1
   })), ks.TweenMax = ks.TweenLite = Wl, ks.TimelineLite = ks.TimelineMax = Ol, ts = new Ol({
      sortChildren: !1,
      defaults: ps,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0
   }), ds.stringFilter = _l;
   var ac = [],
      sc = {},
      oc = [],
      lc = 0,
      cc = function(t) {
         return (sc[t] || oc).map((function(t) {
            return t()
         }))
      },
      uc = function() {
         var t = Date.now(),
            e = [];
         t - lc > 2 && (cc("matchMediaInit"), ac.forEach((function(t) {
            var n, i, r, a, s = t.queries,
               o = t.conditions;
            for (i in s)(n = es.matchMedia(s[i]).matches) && (r = 1), n !== o[i] && (o[i] = n, a = 1);
            a && (t.revert(), r && e.push(t))
         })), cc("matchMediaRevert"), e.forEach((function(t) {
            return t.onMatch(t)
         })), lc = t, cc("matchMedia"))
      },
      hc = function() {
         function t(t, e) {
            this.selector = e && Ko(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
         }
         var e = t.prototype;
         return e.add = function(t, e, n) {
            Ss(t) && (n = e, e = t, t = Ss);
            var i = this,
               r = function() {
                  var t, r = $a,
                     a = i.selector;
                  return r && r !== i && r.data.push(i), n && (i.selector = Ko(n)), $a = i, t = e.apply(i, arguments), Ss(t) && i._r.push(t), $a = r, i.selector = a, i.isReverted = !1, t
               };
            return i.last = r, t === Ss ? r(i) : t ? i[t] = r : r
         }, e.ignore = function(t) {
            var e = $a;
            $a = null, t(this), $a = e
         }, e.getTweens = function() {
            var e = [];
            return this.data.forEach((function(n) {
               return n instanceof t ? e.push.apply(e, n.getTweens()) : n instanceof Wl && !(n.parent && "nested" === n.parent.data) && e.push(n)
            })), e
         }, e.clear = function() {
            this._r.length = this.data.length = 0
         }, e.kill = function(t, e) {
            var n = this;
            if (t) {
               var i = this.getTweens();
               this.data.forEach((function(t) {
                  "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function(t) {
                     return i.splice(i.indexOf(t), 1)
                  })))
               })), i.map((function(t) {
                  return {
                     g: t.globalTime(0),
                     t
                  }
               })).sort((function(t, e) {
                  return e.g - t.g || -1
               })).forEach((function(e) {
                  return e.t.revert(t)
               })), this.data.forEach((function(e) {
                  return !(e instanceof Dl) && e.revert && e.revert(t)
               })), this._r.forEach((function(e) {
                  return e(t, n)
               })), this.isReverted = !0
            } else this.data.forEach((function(t) {
               return t.kill && t.kill()
            }));
            if (this.clear(), e) {
               var r = ac.indexOf(this);
               ~r && ac.splice(r, 1)
            }
         }, e.revert = function(t) {
            this.kill(t || {})
         }, t
      }(),
      dc = function() {
         function t(t) {
            this.contexts = [], this.scope = t
         }
         var e = t.prototype;
         return e.add = function(t, e, n) {
            Es(t) || (t = {
               matches: t
            });
            var i, r, a, s = new hc(0, n || this.scope),
               o = s.conditions = {};
            for (r in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t, t) "all" === r ? a = 1 : (i = es.matchMedia(t[r])) && (ac.indexOf(s) < 0 && ac.push(s), (o[r] = i.matches) && (a = 1), i.addListener ? i.addListener(uc) : i.addEventListener("change", uc));
            return a && e(s), this
         }, e.revert = function(t) {
            this.kill(t || {})
         }, e.kill = function(t) {
            this.contexts.forEach((function(e) {
               return e.kill(t, !0)
            }))
         }, t
      }(),
      pc = {
         registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function(t) {
               return ll(t)
            }))
         },
         timeline: function(t) {
            return new Ol(t)
         },
         getTweensOf: function(t, e) {
            return ts.getTweensOf(t, e)
         },
         getProperty: function(t, e, n, i) {
            Ms(t) && (t = Zo(t)[0]);
            var r = ro(t || {}).get,
               a = n ? mo : fo;
            return "native" === n && (n = ""), t ? e ? a((Qs[e] && Qs[e].get || r)(t, e, n, i)) : function(e, n, i) {
               return a((Qs[e] && Qs[e].get || r)(t, e, n, i))
            } : t
         },
         quickSetter: function(t, e, n) {
            if ((t = Zo(t)).length > 1) {
               var i = t.map((function(t) {
                     return gc.quickSetter(t, e, n)
                  })),
                  r = i.length;
               return function(t) {
                  for (var e = r; e--;) i[e](t)
               }
            }
            t = t[0] || {};
            var a = Qs[e],
               s = ro(t),
               o = s.harness && (s.harness.aliases || {})[e] || e,
               l = a ? function(e) {
                  var i = new a;
                  ss._pt = 0, i.init(t, n ? e + n : e, ss, 0, [t]), i.render(1, i), ss._pt && $l(1, ss)
               } : s.set(t, o);
            return a ? l : function(e) {
               return l(t, o, n ? e + n : e, s, 1)
            }
         },
         quickTo: function(t, e, n) {
            var i, r = gc.to(t, _o(((i = {})[e] = "+=0.1", i.paused = !0, i), n || {})),
               a = function(t, n, i) {
                  return r.resetTo(e, t, n, i)
               };
            return a.tween = r, a
         },
         isTweening: function(t) {
            return ts.getTweensOf(t, !0).length > 0
         },
         defaults: function(t) {
            return t && t.ease && (t.ease = El(t.ease, ps.ease)), vo(ps, t || {})
         },
         config: function(t) {
            return vo(ds, t || {})
         },
         registerEffect: function(t) {
            var e = t.name,
               n = t.effect,
               i = t.plugins,
               r = t.defaults,
               a = t.extendTimeline;
            (i || "").split(",").forEach((function(t) {
               return t && !Qs[t] && !ks[t] && Gs(e + " effect requires " + t + " plugin.")
            })), $s[e] = function(t, e, i) {
               return n(Zo(t), go(e || {}, r), i)
            }, a && (Ol.prototype[e] = function(t, n, i) {
               return this.add($s[e](t, Es(n) ? n : (i = n) && {}, this), i)
            })
         },
         registerEase: function(t, e) {
            yl[t] = El(e)
         },
         parseEase: function(t, e) {
            return arguments.length ? El(t, e) : yl
         },
         getById: function(t) {
            return ts.getById(t)
         },
         exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, i, r = new Ol(t);
            for (r.smoothChildTiming = As(t.smoothChildTiming), ts.remove(r), r._dp = 0, r._time = r._tTime = ts._time, n = ts._first; n;) i = n._next, !e && !n._dur && n instanceof Wl && n.vars.onComplete === n._targets[0] || Io(r, n, n._start - n._delay), n = i;
            return Io(ts, r, 0), r
         },
         context: function(t, e) {
            return t ? new hc(t, e) : $a
         },
         matchMedia: function(t) {
            return new dc(t)
         },
         matchMediaRefresh: function() {
            return ac.forEach((function(t) {
               var e, n, i = t.conditions;
               for (n in i) i[n] && (i[n] = !1, e = 1);
               e && t.revert()
            })) || uc()
         },
         addEventListener: function(t, e) {
            var n = sc[t] || (sc[t] = []);
            ~n.indexOf(e) || n.push(e)
         },
         removeEventListener: function(t, e) {
            var n = sc[t],
               i = n && n.indexOf(e);
            i >= 0 && n.splice(i, 1)
         },
         utils: {
            wrap: function t(e, n, i) {
               var r = n - e;
               return Rs(e) ? nl(e, t(0, e.length), n) : Wo(i, (function(t) {
                  return (r + (t - e) % r) % r + e
               }))
            },
            wrapYoyo: function t(e, n, i) {
               var r = n - e,
                  a = 2 * r;
               return Rs(e) ? nl(e, t(0, e.length - 1), n) : Wo(i, (function(t) {
                  return e + ((t = (a + (t - e) % a) % a || 0) > r ? a - t : t)
               }))
            },
            distribute: Qo,
            random: el,
            snap: tl,
            normalize: function(t, e, n) {
               return rl(t, e, 0, 1, n)
            },
            getUnit: Xo,
            clamp: function(t, e, n) {
               return Wo(n, (function(n) {
                  return jo(t, e, n)
               }))
            },
            splitColor: dl,
            toArray: Zo,
            selector: Ko,
            mapRange: rl,
            pipe: function() {
               for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
               return function(t) {
                  return e.reduce((function(t, e) {
                     return e(t)
                  }), t)
               }
            },
            unitize: function(t, e) {
               return function(n) {
                  return t(parseFloat(n)) + (e || Xo(n))
               }
            },
            interpolate: function t(e, n, i, r) {
               var a = isNaN(e + n) ? 0 : function(t) {
                  return (1 - t) * e + t * n
               };
               if (!a) {
                  var s, o, l, c, u, h = Ms(e),
                     d = {};
                  if (!0 === i && (r = 1) && (i = null), h) e = {
                     p: e
                  }, n = {
                     p: n
                  };
                  else if (Rs(e) && !Rs(n)) {
                     for (l = [], c = e.length, u = c - 2, o = 1; o < c; o++) l.push(t(e[o - 1], e[o]));
                     c--, a = function(t) {
                        t *= c;
                        var e = Math.min(u, ~~t);
                        return l[e](t - e)
                     }, i = n
                  } else r || (e = _o(Rs(e) ? [] : {}, e));
                  if (!l) {
                     for (s in n) Ul.call(d, e, s, "get", n[s]);
                     a = function(t) {
                        return $l(t, d) || (h ? e.p : e)
                     }
                  }
               }
               return Wo(i, a)
            },
            shuffle: Jo
         },
         install: Bs,
         effects: $s,
         ticker: vl,
         updateRoot: Ol.updateRoot,
         plugins: Qs,
         globalTimeline: ts,
         core: {
            PropTween: rc,
            globals: Ws,
            Tween: Wl,
            Timeline: Ol,
            Animation: Dl,
            getCache: ro,
            _removeLinkedListItem: Mo,
            reverting: function() {
               return Qa
            },
            context: function(t) {
               return t && $a && ($a.data.push(t), t._ctx = $a), $a
            },
            suppressOverwrites: function(t) {
               return Ja = t
            }
         }
      };
   so("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
      return pc[t] = Wl[t]
   })), vl.add(Ol.updateRoot), ss = pc.to({}, {
      duration: 0
   });
   var fc = function(t, e) {
         for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
         return n
      },
      mc = function(t, e) {
         return {
            name: t,
            rawVars: 1,
            init: function(t, n, i) {
               i._onInit = function(t) {
                  var i, r;
                  if (Ms(n) && (i = {}, so(n, (function(t) {
                        return i[t] = 1
                     })), n = i), e) {
                     for (r in i = {}, n) i[r] = e(n[r]);
                     n = i
                  }! function(t, e) {
                     var n, i, r, a = t._targets;
                     for (n in e)
                        for (i = a.length; i--;)(r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = fc(r, n)), r && r.modifier && r.modifier(e[n], t, a[i], n))
                  }(t, n)
               }
            }
         }
      },
      gc = pc.registerPlugin({
         name: "attr",
         init: function(t, e, n, i, r) {
            var a, s, o;
            for (a in this.tween = n, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, r, 0, 0, a)).op = a, s.b = o, this._props.push(a)
         },
         render: function(t, e) {
            for (var n = e._pt; n;) Qa ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next
         }
      }, {
         name: "endArray",
         init: function(t, e) {
            for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
         }
      }, mc("roundProps", $o), mc("modifiers"), mc("snap", tl)) || pc;
   Wl.version = Ol.version = gc.version = "3.11.2", rs = 1, Cs() && xl(), yl.Power0, yl.Power1, yl.Power2, yl.Power3, yl.Power4, yl.Linear, yl.Quad, yl.Cubic, yl.Quart, yl.Quint, yl.Strong, yl.Elastic, yl.Back, yl.SteppedEase, yl.Bounce, yl.Sine, yl.Expo, yl.Circ;
   var _c, vc, xc, yc, bc, Mc, Sc, wc, Tc = {},
      Ec = 180 / Math.PI,
      Ac = Math.PI / 180,
      Cc = Math.atan2,
      Lc = /([A-Z])/g,
      Pc = /(left|right|width|margin|padding|x)/i,
      Rc = /[\s,\(]\S/,
      Dc = {
         autoAlpha: "opacity,visibility",
         scale: "scaleX,scaleY",
         alpha: "opacity"
      },
      Oc = function(t, e) {
         return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
      },
      Ic = function(t, e) {
         return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
      },
      zc = function(t, e) {
         return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
      },
      Nc = function(t, e) {
         var n = e.s + e.c * t;
         e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
      },
      Uc = function(t, e) {
         return e.set(e.t, e.p, t ? e.e : e.b, e)
      },
      Fc = function(t, e) {
         return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
      },
      kc = function(t, e, n) {
         return t.style[e] = n
      },
      Hc = function(t, e, n) {
         return t.style.setProperty(e, n)
      },
      Bc = function(t, e, n) {
         return t._gsap[e] = n
      },
      Vc = function(t, e, n) {
         return t._gsap.scaleX = t._gsap.scaleY = n
      },
      Gc = function(t, e, n, i, r) {
         var a = t._gsap;
         a.scaleX = a.scaleY = n, a.renderTransform(r, a)
      },
      Wc = function(t, e, n, i, r) {
         var a = t._gsap;
         a[e] = n, a.renderTransform(r, a)
      },
      jc = "transform",
      Xc = jc + "Origin",
      qc = function(t, e) {
         var n = this,
            i = this.target,
            r = i.style;
         if (t in Tc) {
            if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = Dc[t] || t).indexOf(",") ? t.split(",").forEach((function(t) {
                  return n.tfm[t] = hu(i, t)
               })) : this.tfm[t] = i._gsap.x ? i._gsap[t] : hu(i, t)), this.props.indexOf(jc) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Xc, e, "")), t = jc
         }(r || e) && this.props.push(t, e, r[t])
      },
      Yc = function(t) {
         t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
      },
      Zc = function() {
         var t, e, n = this.props,
            i = this.target,
            r = i.style,
            a = i._gsap;
         for (t = 0; t < n.length; t += 3) n[t + 1] ? i[n[t]] = n[t + 2] : n[t + 2] ? r[n[t]] = n[t + 2] : r.removeProperty(n[t].replace(Lc, "-$1").toLowerCase());
         if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), !(t = Sc()) || t.isStart || r[jc] || (Yc(r), a.uncache = 1)
         }
      },
      Kc = function(t, e) {
         var n = {
            target: t,
            props: [],
            revert: Zc,
            save: qc
         };
         return e && e.split(",").forEach((function(t) {
            return n.save(t)
         })), n
      },
      Jc = function(t, e) {
         var n = vc.createElementNS ? vc.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : vc.createElement(t);
         return n.style ? n : vc.createElement(t)
      },
      Qc = function t(e, n, i) {
         var r = getComputedStyle(e);
         return r[n] || r.getPropertyValue(n.replace(Lc, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, tu(n) || n, 1) || ""
      },
      $c = "O,Moz,ms,Ms,Webkit".split(","),
      tu = function(t, e, n) {
         var i = (e || bc).style,
            r = 5;
         if (t in i && !n) return t;
         for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !($c[r] + t in i););
         return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? $c[r] : "") + t
      },
      eu = function() {
         "undefined" != typeof window && window.document && (_c = window, vc = _c.document, xc = vc.documentElement, bc = Jc("div") || {
            style: {}
         }, Jc("div"), jc = tu(jc), Xc = jc + "Origin", bc.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", wc = !!tu("perspective"), Sc = gc.core.reverting, yc = 1)
      },
      nu = function t(e) {
         var n, i = Jc("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            a = this.nextSibling,
            s = this.style.cssText;
         if (xc.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
            n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
         } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
         return r && (a ? r.insertBefore(this, a) : r.appendChild(this)), xc.removeChild(i), this.style.cssText = s, n
      },
      iu = function(t, e) {
         for (var n = e.length; n--;)
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
      },
      ru = function(t) {
         var e;
         try {
            e = t.getBBox()
         } catch (n) {
            e = nu.call(t, !0)
         }
         return e && (e.width || e.height) || t.getBBox === nu || (e = nu.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +iu(t, ["x", "cx", "x1"]) || 0,
            y: +iu(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
         }
      },
      au = function(t) {
         return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ru(t))
      },
      su = function(t, e) {
         if (e) {
            var n = t.style;
            e in Tc && e !== Xc && (e = jc), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(Lc, "-$1").toLowerCase())) : n.removeAttribute(e)
         }
      },
      ou = function(t, e, n, i, r, a) {
         var s = new rc(t._pt, e, n, 0, 1, a ? Fc : Uc);
         return t._pt = s, s.b = i, s.e = r, t._props.push(n), s
      },
      lu = {
         deg: 1,
         rad: 1,
         turn: 1
      },
      cu = {
         grid: 1,
         flex: 1
      },
      uu = function t(e, n, i, r) {
         var a, s, o, l, c = parseFloat(i) || 0,
            u = (i + "").trim().substr((c + "").length) || "px",
            h = bc.style,
            d = Pc.test(n),
            p = "svg" === e.tagName.toLowerCase(),
            f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
            m = 100,
            g = "px" === r,
            _ = "%" === r;
         return r === u || !c || lu[r] || lu[u] ? c : ("px" !== u && !g && (c = t(e, n, i, "px")), l = e.getCTM && au(e), !_ && "%" !== u || !Tc[n] && !~n.indexOf("adius") ? (h[d ? "width" : "height"] = m + (g ? u : r), s = ~n.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode, l && (s = (e.ownerSVGElement || {}).parentNode), s && s !== vc && s.appendChild || (s = vc.body), (o = s._gsap) && _ && o.width && d && o.time === vl.time && !o.uncache ? oo(c / o.width * m) : ((_ || "%" === u) && !cu[Qc(s, "display")] && (h.position = Qc(e, "position")), s === e && (h.position = "static"), s.appendChild(bc), a = bc[f], s.removeChild(bc), h.position = "absolute", d && _ && ((o = ro(s)).time = vl.time, o.width = s[f]), oo(g ? a * c / m : a && c ? m / a * c : 0))) : (a = l ? e.getBBox()[d ? "width" : "height"] : e[f], oo(_ ? c / a * m : c / 100 * a)))
      },
      hu = function(t, e, n, i) {
         var r;
         return yc || eu(), e in Dc && "transform" !== e && ~(e = Dc[e]).indexOf(",") && (e = e.split(",")[0]), Tc[e] && "transform" !== e ? (r = Mu(t, i), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Su(Qc(t, Xc)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = mu[e] && mu[e](t, e, n) || Qc(t, e) || ao(t, e) || ("opacity" === e ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? uu(t, e, r, n) + n : r
      },
      du = function(t, e, n, i) {
         if (!n || "none" === n) {
            var r = tu(e, t, 1),
               a = r && Qc(t, r, 1);
            a && a !== n ? (e = r, n = a) : "borderColor" === e && (n = Qc(t, "borderTopColor"))
         }
         var s, o, l, c, u, h, d, p, f, m, g, _ = new rc(this._pt, t.style, e, 0, 1, Ql),
            v = 0,
            x = 0;
         if (_.b = n, _.e = i, n += "", "auto" == (i += "") && (t.style[e] = i, i = Qc(t, e) || i, t.style[e] = n), _l(s = [n, i]), i = s[1], l = (n = s[0]).match(Is) || [], (i.match(Is) || []).length) {
            for (; o = Is.exec(i);) d = o[0], f = i.substring(v, o.index), u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1), d !== (h = l[x++] || "") && (c = parseFloat(h) || 0, g = h.substr((c + "").length), "=" === d.charAt(1) && (d = co(c, d) + g), p = parseFloat(d), m = d.substr((p + "").length), v = Is.lastIndex - m.length, m || (m = m || ds.units[e] || g, v === i.length && (i += m, _.e += m)), g !== m && (c = uu(t, e, h, m) || 0), _._pt = {
               _next: _._pt,
               p: f || 1 === x ? f : ",",
               s: c,
               c: p - c,
               m: u && u < 4 || "zIndex" === e ? Math.round : 0
            });
            _.c = v < i.length ? i.substring(v, i.length) : ""
         } else _.r = "display" === e && "none" === i ? Fc : Uc;
         return Ns.test(i) && (_.e = 0), this._pt = _, _
      },
      pu = {
         top: "0%",
         bottom: "100%",
         left: "0%",
         right: "100%",
         center: "50%"
      },
      fu = function(t, e) {
         if (e.tween && e.tween._time === e.tween._dur) {
            var n, i, r, a = e.t,
               s = a.style,
               o = e.u,
               l = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
               for (r = (o = o.split(",")).length; --r > -1;) n = o[r], Tc[n] && (i = 1, n = "transformOrigin" === n ? Xc : jc), su(a, n);
            i && (su(a, jc), l && (l.svg && a.removeAttribute("transform"), Mu(a, 1), l.uncache = 1, Yc(s)))
         }
      },
      mu = {
         clearProps: function(t, e, n, i, r) {
            if ("isFromStart" !== r.data) {
               var a = t._pt = new rc(t._pt, e, n, 0, 0, fu);
               return a.u = i, a.pr = -10, a.tween = r, t._props.push(n), 1
            }
         }
      },
      gu = [1, 0, 0, 1, 0, 0],
      _u = {},
      vu = function(t) {
         return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
      },
      xu = function(t) {
         var e = Qc(t, jc);
         return vu(e) ? gu : e.substr(7).match(Os).map(oo)
      },
      yu = function(t, e) {
         var n, i, r, a, s = t._gsap || ro(t),
            o = t.style,
            l = xu(t);
         return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? gu : l : (l !== gu || t.offsetParent || t === xc || s.svg || (r = o.display, o.display = "block", (n = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, xc.appendChild(t)), l = xu(t), r ? o.display = r : su(t, "display"), a && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : xc.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
      },
      bu = function(t, e, n, i, r, a) {
         var s, o, l, c = t._gsap,
            u = r || yu(t, !0),
            h = c.xOrigin || 0,
            d = c.yOrigin || 0,
            p = c.xOffset || 0,
            f = c.yOffset || 0,
            m = u[0],
            g = u[1],
            _ = u[2],
            v = u[3],
            x = u[4],
            y = u[5],
            b = e.split(" "),
            M = parseFloat(b[0]) || 0,
            S = parseFloat(b[1]) || 0;
         n ? u !== gu && (o = m * v - g * _) && (l = M * (-g / o) + S * (m / o) - (m * y - g * x) / o, M = M * (v / o) + S * (-_ / o) + (_ * y - v * x) / o, S = l) : (M = (s = ru(t)).x + (~b[0].indexOf("%") ? M / 100 * s.width : M), S = s.y + (~(b[1] || b[0]).indexOf("%") ? S / 100 * s.height : S)), i || !1 !== i && c.smooth ? (x = M - h, y = S - d, c.xOffset = p + (x * m + y * _) - x, c.yOffset = f + (x * g + y * v) - y) : c.xOffset = c.yOffset = 0, c.xOrigin = M, c.yOrigin = S, c.smooth = !!i, c.origin = e, c.originIsAbsolute = !!n, t.style[Xc] = "0px 0px", a && (ou(a, c, "xOrigin", h, M), ou(a, c, "yOrigin", d, S), ou(a, c, "xOffset", p, c.xOffset), ou(a, c, "yOffset", f, c.yOffset)), t.setAttribute("data-svg-origin", M + " " + S)
      },
      Mu = function(t, e) {
         var n = t._gsap || new Rl(t);
         if ("x" in n && !e && !n.uncache) return n;
         var i, r, a, s, o, l, c, u, h, d, p, f, m, g, _, v, x, y, b, M, S, w, T, E, A, C, L, P, R, D, O, I, z = t.style,
            N = n.scaleX < 0,
            U = "px",
            F = "deg",
            k = getComputedStyle(t),
            H = Qc(t, Xc) || "0";
         return i = r = a = l = c = u = h = d = p = 0, s = o = 1, n.svg = !(!t.getCTM || !au(t)), k.translate && ("none" === k.translate && "none" === k.scale && "none" === k.rotate || (z[jc] = ("none" !== k.translate ? "translate3d(" + (k.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== k.rotate ? "rotate(" + k.rotate + ") " : "") + ("none" !== k.scale ? "scale(" + k.scale.split(" ").join(",") + ") " : "") + ("none" !== k[jc] ? k[jc] : "")), z.scale = z.rotate = z.translate = "none"), g = yu(t, n.svg), n.svg && (n.uncache ? (A = t.getBBox(), H = n.xOrigin - A.x + "px " + (n.yOrigin - A.y) + "px", E = "") : E = !e && t.getAttribute("data-svg-origin"), bu(t, E || H, !!E || n.originIsAbsolute, !1 !== n.smooth, g)), f = n.xOrigin || 0, m = n.yOrigin || 0, g !== gu && (y = g[0], b = g[1], M = g[2], S = g[3], i = w = g[4], r = T = g[5], 6 === g.length ? (s = Math.sqrt(y * y + b * b), o = Math.sqrt(S * S + M * M), l = y || b ? Cc(b, y) * Ec : 0, (h = M || S ? Cc(M, S) * Ec + l : 0) && (o *= Math.abs(Math.cos(h * Ac))), n.svg && (i -= f - (f * y + m * M), r -= m - (f * b + m * S))) : (I = g[6], D = g[7], L = g[8], P = g[9], R = g[10], O = g[11], i = g[12], r = g[13], a = g[14], c = (_ = Cc(I, R)) * Ec, _ && (E = w * (v = Math.cos(-_)) + L * (x = Math.sin(-_)), A = T * v + P * x, C = I * v + R * x, L = w * -x + L * v, P = T * -x + P * v, R = I * -x + R * v, O = D * -x + O * v, w = E, T = A, I = C), u = (_ = Cc(-M, R)) * Ec, _ && (v = Math.cos(-_), O = S * (x = Math.sin(-_)) + O * v, y = E = y * v - L * x, b = A = b * v - P * x, M = C = M * v - R * x), l = (_ = Cc(b, y)) * Ec, _ && (E = y * (v = Math.cos(_)) + b * (x = Math.sin(_)), A = w * v + T * x, b = b * v - y * x, T = T * v - w * x, y = E, w = A), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, u = 180 - u), s = oo(Math.sqrt(y * y + b * b + M * M)), o = oo(Math.sqrt(T * T + I * I)), _ = Cc(w, T), h = Math.abs(_) > 2e-4 ? _ * Ec : 0, p = O ? 1 / (O < 0 ? -O : O) : 0), n.svg && (E = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !vu(Qc(t, jc)), E && t.setAttribute("transform", E))), Math.abs(h) > 90 && Math.abs(h) < 270 && (N ? (s *= -1, h += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, h += h <= 0 ? 180 : -180)), e = e || n.uncache, n.x = i - ((n.xPercent = i && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + U, n.y = r - ((n.yPercent = r && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + U, n.z = a + U, n.scaleX = oo(s), n.scaleY = oo(o), n.rotation = oo(l) + F, n.rotationX = oo(c) + F, n.rotationY = oo(u) + F, n.skewX = h + F, n.skewY = d + F, n.transformPerspective = p + U, (n.zOrigin = parseFloat(H.split(" ")[2]) || 0) && (z[Xc] = Su(H)), n.xOffset = n.yOffset = 0, n.force3D = ds.force3D, n.renderTransform = n.svg ? Pu : wc ? Lu : Tu, n.uncache = 0, n
      },
      Su = function(t) {
         return (t = t.split(" "))[0] + " " + t[1]
      },
      wu = function(t, e, n) {
         var i = Xo(e);
         return oo(parseFloat(e) + parseFloat(uu(t, "x", n + "px", i))) + i
      },
      Tu = function(t, e) {
         e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Lu(t, e)
      },
      Eu = "0deg",
      Au = "0px",
      Cu = ") ",
      Lu = function(t, e) {
         var n = e || this,
            i = n.xPercent,
            r = n.yPercent,
            a = n.x,
            s = n.y,
            o = n.z,
            l = n.rotation,
            c = n.rotationY,
            u = n.rotationX,
            h = n.skewX,
            d = n.skewY,
            p = n.scaleX,
            f = n.scaleY,
            m = n.transformPerspective,
            g = n.force3D,
            _ = n.target,
            v = n.zOrigin,
            x = "",
            y = "auto" === g && t && 1 !== t || !0 === g;
         if (v && (u !== Eu || c !== Eu)) {
            var b, M = parseFloat(c) * Ac,
               S = Math.sin(M),
               w = Math.cos(M);
            M = parseFloat(u) * Ac, b = Math.cos(M), a = wu(_, a, S * b * -v), s = wu(_, s, -Math.sin(M) * -v), o = wu(_, o, w * b * -v + v)
         }
         m !== Au && (x += "perspective(" + m + Cu), (i || r) && (x += "translate(" + i + "%, " + r + "%) "), (y || a !== Au || s !== Au || o !== Au) && (x += o !== Au || y ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Cu), l !== Eu && (x += "rotate(" + l + Cu), c !== Eu && (x += "rotateY(" + c + Cu), u !== Eu && (x += "rotateX(" + u + Cu), h === Eu && d === Eu || (x += "skew(" + h + ", " + d + Cu), 1 === p && 1 === f || (x += "scale(" + p + ", " + f + Cu), _.style[jc] = x || "translate(0, 0)"
      },
      Pu = function(t, e) {
         var n, i, r, a, s, o = e || this,
            l = o.xPercent,
            c = o.yPercent,
            u = o.x,
            h = o.y,
            d = o.rotation,
            p = o.skewX,
            f = o.skewY,
            m = o.scaleX,
            g = o.scaleY,
            _ = o.target,
            v = o.xOrigin,
            x = o.yOrigin,
            y = o.xOffset,
            b = o.yOffset,
            M = o.forceCSS,
            S = parseFloat(u),
            w = parseFloat(h);
         d = parseFloat(d), p = parseFloat(p), (f = parseFloat(f)) && (p += f = parseFloat(f), d += f), d || p ? (d *= Ac, p *= Ac, n = Math.cos(d) * m, i = Math.sin(d) * m, r = Math.sin(d - p) * -g, a = Math.cos(d - p) * g, p && (f *= Ac, s = Math.tan(p - f), r *= s = Math.sqrt(1 + s * s), a *= s, f && (s = Math.tan(f), n *= s = Math.sqrt(1 + s * s), i *= s)), n = oo(n), i = oo(i), r = oo(r), a = oo(a)) : (n = m, a = g, i = r = 0), (S && !~(u + "").indexOf("px") || w && !~(h + "").indexOf("px")) && (S = uu(_, "x", u, "px"), w = uu(_, "y", h, "px")), (v || x || y || b) && (S = oo(S + v - (v * n + x * r) + y), w = oo(w + x - (v * i + x * a) + b)), (l || c) && (s = _.getBBox(), S = oo(S + l / 100 * s.width), w = oo(w + c / 100 * s.height)), s = "matrix(" + n + "," + i + "," + r + "," + a + "," + S + "," + w + ")", _.setAttribute("transform", s), M && (_.style[jc] = s)
      },
      Ru = function(t, e, n, i, r) {
         var a, s, o = 360,
            l = Ms(r),
            c = parseFloat(r) * (l && ~r.indexOf("rad") ? Ec : 1) - i,
            u = i + c + "deg";
         return l && ("short" === (a = r.split("_")[1]) && (c %= o) != c % 180 && (c += c < 0 ? o : -360), "cw" === a && c < 0 ? c = (c + 36e9) % o - ~~(c / o) * o : "ccw" === a && c > 0 && (c = (c - 36e9) % o - ~~(c / o) * o)), t._pt = s = new rc(t._pt, e, n, i, c, Ic), s.e = u, s.u = "deg", t._props.push(n), s
      },
      Du = function(t, e) {
         for (var n in e) t[n] = e[n];
         return t
      },
      Ou = function(t, e, n) {
         var i, r, a, s, o, l, c, u = Du({}, n._gsap),
            h = n.style;
         for (r in u.svg ? (a = n.getAttribute("transform"), n.setAttribute("transform", ""), h[jc] = e, i = Mu(n, 1), su(n, jc), n.setAttribute("transform", a)) : (a = getComputedStyle(n)[jc], h[jc] = e, i = Mu(n, 1), h[jc] = a), Tc)(a = u[r]) !== (s = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = Xo(a) !== (c = Xo(s)) ? uu(n, r, a, c) : parseFloat(a), l = parseFloat(s), t._pt = new rc(t._pt, i, r, o, l - o, Oc), t._pt.u = c || 0, t._props.push(r));
         Du(i, u)
      };
   so("padding,margin,Width,Radius", (function(t, e) {
      var n = "Top",
         i = "Right",
         r = "Bottom",
         a = "Left",
         s = (e < 3 ? [n, i, r, a] : [n + a, n + i, r + i, r + a]).map((function(n) {
            return e < 2 ? t + n : "border" + n + t
         }));
      mu[e > 1 ? "border" + t : t] = function(t, e, n, i, r) {
         var a, o;
         if (arguments.length < 4) return a = s.map((function(e) {
            return hu(t, e, n)
         })), 5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o;
         a = (i + "").split(" "), o = {}, s.forEach((function(t, e) {
            return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
         })), t.init(e, o, r)
      }
   }));
   var Iu, zu, Nu = {
      name: "css",
      register: eu,
      targetTest: function(t) {
         return t.style && t.nodeType
      },
      init: function(t, e, n, i, r) {
         var a, s, o, l, c, u, h, d, p, f, m, g, _, v, x, y, b, M, S, w, T = this._props,
            E = t.style,
            A = n.vars.startAt;
         for (h in yc || eu(), this.styles = this.styles || Kc(t), y = this.styles.props, this.tween = n, e)
            if ("autoRound" !== h && (s = e[h], !Qs[h] || !Fl(h, e, n, i, t, r)))
               if (c = typeof s, u = mu[h], "function" === c && (c = typeof(s = s.call(n, i, t, r))), "string" === c && ~s.indexOf("random(") && (s = il(s)), u) u(this, t, h, s, n) && (x = 1);
               else if ("--" === h.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(h) + "").trim(), s += "", ml.lastIndex = 0, ml.test(a) || (d = Xo(a), p = Xo(s)), p ? d !== p && (a = uu(t, h, a, p) + p) : d && (s += d), this.add(E, "setProperty", a, s, i, r, 0, 0, h), T.push(h), y.push(h, 0, E[h]);
         else if ("undefined" !== c) {
            if (A && h in A ? (a = "function" == typeof A[h] ? A[h].call(n, i, t, r) : A[h], Ms(a) && ~a.indexOf("random(") && (a = il(a)), Xo(a + "") || (a += ds.units[h] || Xo(hu(t, h)) || ""), "=" === (a + "").charAt(1) && (a = hu(t, h))) : a = hu(t, h), l = parseFloat(a), (f = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), o = parseFloat(s), h in Dc && ("autoAlpha" === h && (1 === l && "hidden" === hu(t, "visibility") && o && (l = 0), y.push("visibility", 0, E.visibility), ou(this, E, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== h && "transform" !== h && ~(h = Dc[h]).indexOf(",") && (h = h.split(",")[0])), m = h in Tc)
               if (this.styles.save(h), g || ((_ = t._gsap).renderTransform && !e.parseTransform || Mu(t, e.parseTransform), v = !1 !== e.smoothOrigin && _.smooth, (g = this._pt = new rc(this._pt, E, jc, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === h) this._pt = new rc(this._pt, _, "scaleY", l, (f ? co(l, f + o) : o) - l || 0, Oc), this._pt.u = 0, T.push("scaleY", h), h += "X";
               else {
                  if ("transformOrigin" === h) {
                     y.push(Xc, 0, E[Xc]), M = void 0, S = void 0, w = void 0, S = (M = (b = s).split(" "))[0], w = M[1] || "50%", "top" !== S && "bottom" !== S && "left" !== w && "right" !== w || (b = S, S = w, w = b), M[0] = pu[S] || S, M[1] = pu[w] || w, s = M.join(" "), _.svg ? bu(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== _.zOrigin && ou(this, _, "zOrigin", _.zOrigin, p), ou(this, E, h, Su(a), Su(s)));
                     continue
                  }
                  if ("svgOrigin" === h) {
                     bu(t, s, 1, v, 0, this);
                     continue
                  }
                  if (h in _u) {
                     Ru(this, _, h, l, f ? co(l, f + s) : s);
                     continue
                  }
                  if ("smoothOrigin" === h) {
                     ou(this, _, "smooth", _.smooth, s);
                     continue
                  }
                  if ("force3D" === h) {
                     _[h] = s;
                     continue
                  }
                  if ("transform" === h) {
                     Ou(this, s, t);
                     continue
                  }
               }
            else h in E || (h = tu(h) || h);
            if (m || (o || 0 === o) && (l || 0 === l) && !Rc.test(s) && h in E) o || (o = 0), (d = (a + "").substr((l + "").length)) !== (p = Xo(s) || (h in ds.units ? ds.units[h] : d)) && (l = uu(t, h, a, p)), this._pt = new rc(this._pt, m ? _ : E, h, l, (f ? co(l, f + o) : o) - l, m || "px" !== p && "zIndex" !== h || !1 === e.autoRound ? Oc : Nc), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = a, this._pt.r = zc);
            else if (h in E) du.call(this, t, h, a, f ? f + s : s);
            else {
               if (!(h in t)) {
                  Vs(h, s);
                  continue
               }
               this.add(t, h, a || t[h], f ? f + s : s, i, r)
            }
            m || (h in E ? y.push(h, 0, E[h]) : y.push(h, 1, a || t[h])), T.push(h)
         }
         x && ic(this)
      },
      render: function(t, e) {
         if (e.tween._time || !Sc())
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next;
         else e.styles.revert()
      },
      get: hu,
      aliases: Dc,
      getSetter: function(t, e, n) {
         var i = Dc[e];
         return i && i.indexOf(",") < 0 && (e = i), e in Tc && e !== Xc && (t._gsap.x || hu(t, "x")) ? n && Mc === n ? "scale" === e ? Vc : Bc : (Mc = n || {}) && ("scale" === e ? Gc : Wc) : t.style && !Ts(t.style[e]) ? kc : ~e.indexOf("-") ? Hc : Zl(t, e)
      },
      core: {
         _removeProperty: su,
         _getMatrix: yu
      }
   };
   gc.utils.checkPrefix = tu, gc.core.getStyleSaver = Kc, zu = so("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Iu = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
      Tc[t] = 1
   })), so(Iu, (function(t) {
      ds.units[t] = "deg", _u[t] = 1
   })), Dc[zu[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Iu, so("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
      var e = t.split(":");
      Dc[e[1]] = zu[e[0]]
   })), so("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
      ds.units[t] = "px"
   })), gc.registerPlugin(Nu);
   var Uu = gc.registerPlugin(Nu) || gc,
      Fu = (Uu.core.Tween, /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
      ku = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      Hu = Math.PI / 180,
      Bu = (Math.PI, Math.sin),
      Vu = Math.cos,
      Gu = Math.abs,
      Wu = Math.sqrt,
      ju = (Math.atan2, function(t) {
         return "number" == typeof t
      }),
      Xu = 1e5,
      qu = function(t) {
         return Math.round(t * Xu) / Xu || 0
      };

   function Yu(t, e, n, i, r, a, s, o, l) {
      if (t !== o || e !== l) {
         n = Gu(n), i = Gu(i);
         var c = r % 360 * Hu,
            u = Vu(c),
            h = Bu(c),
            d = Math.PI,
            p = 2 * d,
            f = (t - o) / 2,
            m = (e - l) / 2,
            g = u * f + h * m,
            _ = -h * f + u * m,
            v = g * g,
            x = _ * _,
            y = v / (n * n) + x / (i * i);
         y > 1 && (n = Wu(y) * n, i = Wu(y) * i);
         var b = n * n,
            M = i * i,
            S = (b * M - b * x - M * v) / (b * x + M * v);
         S < 0 && (S = 0);
         var w = (a === s ? -1 : 1) * Wu(S),
            T = w * (n * _ / i),
            E = w * (-i * g / n),
            A = (t + o) / 2 + (u * T - h * E),
            C = (e + l) / 2 + (h * T + u * E),
            L = (g - T) / n,
            P = (_ - E) / i,
            R = (-g - T) / n,
            D = (-_ - E) / i,
            O = L * L + P * P,
            I = (P < 0 ? -1 : 1) * Math.acos(L / Wu(O)),
            z = (L * D - P * R < 0 ? -1 : 1) * Math.acos((L * R + P * D) / Wu(O * (R * R + D * D)));
         isNaN(z) && (z = d), !s && z > 0 ? z -= p : s && z < 0 && (z += p), I %= p, z %= p;
         var N, U = Math.ceil(Gu(z) / (p / 4)),
            F = [],
            k = z / U,
            H = 4 / 3 * Bu(k / 2) / (1 + Vu(k / 2)),
            B = u * n,
            V = h * n,
            G = h * -i,
            W = u * i;
         for (N = 0; N < U; N++) g = Vu(r = I + N * k), _ = Bu(r), L = Vu(r += k), P = Bu(r), F.push(g - H * _, _ + H * g, L + H * P, P - H * L, L, P);
         for (N = 0; N < F.length; N += 2) g = F[N], _ = F[N + 1], F[N] = g * B + _ * G + A, F[N + 1] = g * V + _ * W + C;
         return F[N - 2] = o, F[N - 1] = l, F
      }
   }
   var Zu, Ku, Ju = function() {
         return Zu || "undefined" != typeof window && (Zu = window.gsap) && Zu.registerPlugin && Zu
      },
      Qu = function() {
         (Zu = Ju()) ? (Zu.registerEase("_CE", ih.create), Ku = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
      },
      $u = function(t) {
         return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
      },
      th = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      eh = /[cLlsSaAhHvVtTqQ]/g,
      nh = function t(e, n, i, r, a, s, o, l, c, u, h) {
         var d, p = (e + i) / 2,
            f = (n + r) / 2,
            m = (i + a) / 2,
            g = (r + s) / 2,
            _ = (a + o) / 2,
            v = (s + l) / 2,
            x = (p + m) / 2,
            y = (f + g) / 2,
            b = (m + _) / 2,
            M = (g + v) / 2,
            S = (x + b) / 2,
            w = (y + M) / 2,
            T = o - e,
            E = l - n,
            A = Math.abs((i - o) * E - (r - l) * T),
            C = Math.abs((a - o) * E - (s - l) * T);
         return u || (u = [{
            x: e,
            y: n
         }, {
            x: o,
            y: l
         }], h = 1), u.splice(h || u.length - 1, 0, {
            x: S,
            y: w
         }), (A + C) * (A + C) > c * (T * T + E * E) && (d = u.length, t(e, n, p, f, x, y, S, w, c, u, h), t(S, w, b, M, _, v, o, l, c, u, h + 1 + (u.length - d))), u
      },
      ih = function() {
         function t(t, e, n) {
            Ku || Qu(), this.id = t, this.setData(e, n)
         }
         var e = t.prototype;
         return e.setData = function(t, e) {
            e = e || {};
            var n, i, r, a, s, o, l, c, u, h = (t = t || "0,0,1,1").match(th),
               d = 1,
               p = [],
               f = [],
               m = e.precision || 1,
               g = m <= 1;
            if (this.data = t, (eh.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (h = function(t) {
                  var e, n, i, r, a, s, o, l, c, u, h, d, p, f, m, g = (t + "").replace(ku, (function(t) {
                        var e = +t;
                        return e < 1e-4 && e > -1e-4 ? 0 : e
                     })).match(Fu) || [],
                     _ = [],
                     v = 0,
                     x = 0,
                     y = 2 / 3,
                     b = g.length,
                     M = 0,
                     S = "ERROR: malformed path: " + t,
                     w = function(t, e, n, i) {
                        u = (n - t) / 3, h = (i - e) / 3, o.push(t + u, e + h, n - u, i - h, n, i)
                     };
                  if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(S), _;
                  for (e = 0; e < b; e++)
                     if (p = a, isNaN(g[e]) ? s = (a = g[e].toUpperCase()) !== g[e] : e--, i = +g[e + 1], r = +g[e + 2], s && (i += v, r += x), e || (l = i, c = r), "M" === a) o && (o.length < 8 ? _.length -= 1 : M += o.length), v = l = i, x = c = r, o = [i, r], _.push(o), e += 2, a = "L";
                     else if ("C" === a) o || (o = [0, 0]), s || (v = x = 0), o.push(i, r, v + 1 * g[e + 3], x + 1 * g[e + 4], v += 1 * g[e + 5], x += 1 * g[e + 6]), e += 6;
                  else if ("S" === a) u = v, h = x, "C" !== p && "S" !== p || (u += v - o[o.length - 4], h += x - o[o.length - 3]), s || (v = x = 0), o.push(u, h, i, r, v += 1 * g[e + 3], x += 1 * g[e + 4]), e += 4;
                  else if ("Q" === a) u = v + (i - v) * y, h = x + (r - x) * y, s || (v = x = 0), v += 1 * g[e + 3], x += 1 * g[e + 4], o.push(u, h, v + (i - v) * y, x + (r - x) * y, v, x), e += 4;
                  else if ("T" === a) u = v - o[o.length - 4], h = x - o[o.length - 3], o.push(v + u, x + h, i + (v + 1.5 * u - i) * y, r + (x + 1.5 * h - r) * y, v = i, x = r), e += 2;
                  else if ("H" === a) w(v, x, v = i, x), e += 1;
                  else if ("V" === a) w(v, x, v, x = i + (s ? x - v : 0)), e += 1;
                  else if ("L" === a || "Z" === a) "Z" === a && (i = l, r = c, o.closed = !0), ("L" === a || Gu(v - i) > .5 || Gu(x - r) > .5) && (w(v, x, i, r), "L" === a && (e += 2)), v = i, x = r;
                  else if ("A" === a) {
                     if (f = g[e + 4], m = g[e + 5], u = g[e + 6], h = g[e + 7], n = 7, f.length > 1 && (f.length < 3 ? (h = u, u = m, n--) : (h = m, u = f.substr(2), n -= 2), m = f.charAt(1), f = f.charAt(0)), d = Yu(v, x, +g[e + 1], +g[e + 2], +g[e + 3], +f, +m, (s ? v : 0) + 1 * u, (s ? x : 0) + 1 * h), e += n, d)
                        for (n = 0; n < d.length; n++) o.push(d[n]);
                     v = o[o.length - 2], x = o[o.length - 1]
                  } else console.log(S);
                  return (e = o.length) < 6 ? (_.pop(), e = 0) : o[0] === o[e - 2] && o[1] === o[e - 1] && (o.closed = !0), _.totalPoints = M + e, _
               }(t)[0]), 4 === (n = h.length)) h.unshift(0, 0), h.push(1, 1), n = 8;
            else if ((n - 2) % 6) throw "Invalid CustomEase";
            for (0 == +h[0] && 1 == +h[n - 2] || function(t, e, n) {
                  n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                  var i, r = -1 * +t[0],
                     a = -n,
                     s = t.length,
                     o = 1 / (+t[s - 2] + r),
                     l = -e || (Math.abs(+t[s - 1] - +t[1]) < .01 * (+t[s - 2] - +t[0]) ? function(t) {
                        var e, n = t.length,
                           i = 1e20;
                        for (e = 1; e < n; e += 6) + t[e] < i && (i = +t[e]);
                        return i
                     }(t) + a : +t[s - 1] + a);
                  for (l = l ? 1 / l : -o, i = 0; i < s; i += 2) t[i] = (+t[i] + r) * o, t[i + 1] = (+t[i + 1] + a) * l
               }(h, e.height, e.originY), this.segment = h, a = 2; a < n; a += 6) i = {
               x: +h[a - 2],
               y: +h[a - 1]
            }, r = {
               x: +h[a + 4],
               y: +h[a + 5]
            }, p.push(i, r), nh(i.x, i.y, +h[a], +h[a + 1], +h[a + 2], +h[a + 3], r.x, r.y, 1 / (2e5 * m), p, p.length - 1);
            for (n = p.length, a = 0; a < n; a++) l = p[a], c = p[a - 1] || l, (l.x > c.x || c.y !== l.y && c.x === l.x || l === c) && l.x <= 1 ? (c.cx = l.x - c.x, c.cy = l.y - c.y, c.n = l, c.nx = l.x, g && a > 1 && Math.abs(c.cy / c.cx - p[a - 2].cy / p[a - 2].cx) > 2 && (g = 0), c.cx < d && (c.cx ? d = c.cx : (c.cx = .001, a === n - 1 && (c.x -= .001, d = Math.min(d, .001), g = 0)))) : (p.splice(a--, 1), n--);
            if (s = 1 / (n = 1 / d + 1 | 0), o = 0, l = p[0], g) {
               for (a = 0; a < n; a++) u = a * s, l.nx < u && (l = p[++o]), i = l.y + (u - l.x) / l.cx * l.cy, f[a] = {
                  x: u,
                  cx: s,
                  y: i,
                  cy: 0,
                  nx: 9
               }, a && (f[a - 1].cy = i - f[a - 1].y);
               f[n - 1].cy = p[p.length - 1].y - i
            } else {
               for (a = 0; a < n; a++) l.nx < a * s && (l = p[++o]), f[a] = l;
               o < p.length - 1 && (f[a - 1] = p[p.length - 2])
            }
            return this.ease = function(t) {
               var e = f[t * n | 0] || f[n - 1];
               return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
            }, this.ease.custom = this, this.id && Zu && Zu.registerEase(this.id, this.ease), this
         }, e.getSVGData = function(e) {
            return t.getSVGData(this, e)
         }, t.create = function(e, n, i) {
            return new t(e, n, i).ease
         }, t.register = function(t) {
            Zu = t, Qu()
         }, t.get = function(t) {
            return Zu.parseEase(t)
         }, t.getSVGData = function(e, n) {
            var i, r, a, s, o, l, c, u, h, d, p = (n = n || {}).width || 100,
               f = n.height || 100,
               m = n.x || 0,
               g = (n.y || 0) + f,
               _ = Zu.utils.toArray(n.path)[0];
            if (n.invert && (f = -f, g = 0), "string" == typeof e && (e = Zu.parseEase(e)), e.custom && (e = e.custom), e instanceof t) i = function(t) {
               ju(t[0]) && (t = [t]);
               var e, n, i, r, a = "",
                  s = t.length;
               for (n = 0; n < s; n++) {
                  for (r = t[n], a += "M" + qu(r[0]) + "," + qu(r[1]) + " C", e = r.length, i = 2; i < e; i++) a += qu(r[i++]) + "," + qu(r[i++]) + " " + qu(r[i++]) + "," + qu(r[i++]) + " " + qu(r[i++]) + "," + qu(r[i]) + " ";
                  r.closed && (a += "z")
               }
               return a
            }(function(t, e, n, i, r, a, s) {
               for (var o, l, c, u, h, d = t.length; --d > -1;)
                  for (l = (o = t[d]).length, c = 0; c < l; c += 2) u = o[c], h = o[c + 1], o[c] = u * e + 0 * h + a, o[c + 1] = 0 * u + h * r + s;
               return t._dirty = 1, t
            }([e.segment], p, 0, 0, -f, m, g));
            else {
               for (i = [m, g], s = 1 / (c = Math.max(5, 200 * (n.precision || 1))), u = 5 / (c += 2), h = $u(m + s * p), r = ((d = $u(g + e(s) * -f)) - g) / (h - m), a = 2; a < c; a++) o = $u(m + a * s * p), l = $u(g + e(a * s) * -f), (Math.abs((l - d) / (o - h) - r) > u || a === c - 1) && (i.push(h, d), r = (l - d) / (o - h)), h = o, d = l;
               i = "M" + i.join(",")
            }
            return _ && _.setAttribute("d", i), i
         }, t
      }();
   Ju() && Zu.registerPlugin(ih), ih.version = "3.11.2";

   function rh(t) {
      if (t) {
         var e = document.querySelector(".relay-switch");
         if (console.log("switchOff Mobile found " + e), null == e) return;
         e.classList.add("relay-fade")
      }
   }

   function ah(t) {
      if (t) {
         var e = document.querySelector(".relay-switch");
         if (console.log("switchOn Mobile found " + e), null == e) return;
         e.classList.remove("relay-fade")
      }
   }
   const sh = document.querySelector("canvas.webgl"),
      oh = sh.parentElement,
      lh = new class extends _e {
         constructor() {
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
               detail: this
            }))
         }
         copy(t, e) {
            return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this
         }
         toJSON(t) {
            const e = super.toJSON(t);
            return null !== this.fog && (e.object.fog = this.fog.toJSON()), e
         }
         get autoUpdate() {
            return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate
         }
         set autoUpdate(t) {
            console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t
         }
      };
   var ch = new it(1049111);
   lh.background = ch;
   let uh = [],
      hh = !1;
   const dh = {
      fieldSize: 75,
      lines: 140,
      lineResolution: .02,
      matrixResolution: 512,
      blackHoleSize: .25,
      wellSize: 300,
      noise1: 3,
      noise2: 3.5,
      noise3: .8,
      spiralArms: 7,
      spiralAttenuation: 1.1,
      spiralTwist: -1,
      spiralSpeed: 4.3,
      spiralSize: 11.8,
      dampening: 1,
      blackHoleHeight: -2.5
   };
   oh.clientHeight > oh.clientWidth && (dh.lines = 90, dh.lineResolution *= 1.6, dh.matrixResolution = 300);
   const ph = {
      minimumAlpha: 1,
      maximumAlpha: 1,
      insideColor: new it("#36037c"),
      outsideColor: new it("#110118"),
      startInsideColor: null,
      startOutsideColor: null,
      warpColor: new it("#9c1686"),
      warpMultiplier: .6
   };
   ph.startInsideColor = ph.insideColor.clone(), ph.startOutsideColor = ph.outsideColor.clone();
   let fh = null;

   function mh() {
      if (0 != uh.length)
         for (let t = 0; t < uh.length; t++) lh.remove(uh[t]);
      uh = [];
      const t = .49 / (dh.lines + 1),
         e = dh.lineResolution;
      let n = !0;
      td && (n = !1), fh = new ma({
         vertexShader: "precision lowp float;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelMatrix;\nuniform float uFieldSize;\nuniform float uRadialPitch;\nuniform float uTime;\nuniform float uWellSize;\nuniform float uNoise1;\nuniform float uNoise2;\nuniform float uSpiralArms;\nuniform float uSpiralAttenuation;\nuniform float uSpiralSize;\nuniform float uSpiralSpeed;\nuniform float uSpiralTwist;\nattribute vec3 position;\nuniform float uAccentColorMultiplier;\nvarying float vAccentColor;\nvarying float vLineRadius;\n\nuniform float u1posX; \nuniform float u1posY; \nuniform float u1size;\nuniform float u1dense; \nuniform float u2posX; \nuniform float u2posY; \nuniform float u2size;\nuniform float u2dense; \nuniform float u3posX; \nuniform float u3posY; \nuniform float u3size;\nuniform float u3dense; \nuniform float u4posX; \nuniform float u4posY; \nuniform float u4size;\nuniform float u4dense; \nuniform float u5posX; \nuniform float u5posY; \nuniform float u5size;\nuniform float u5dense; \nuniform float u6posX; \nuniform float u6posY; \nuniform float u6size;\nuniform float u6dense; \nuniform float u7posX; \nuniform float u7posY; \nuniform float u7size;\nuniform float u7dense; \n\nfloat newHeight;\n\nvec2 pos;\n\n// Classic Perlin 3D Noise \n// by Stefan Gustavson\n//\nvec4 permute(vec4 x)\n{\n        return mod(((x*34.0)+1.0)*x, 289.0);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n        return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n        return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\nfloat cnoise(vec3 P)\n{\n        vec3 Pi0 = floor(P); // Integer part for indexing\n    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n    Pi0 = mod(Pi0, 289.0);\n    Pi1 = mod(Pi1, 289.0);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 / 7.0;\n    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 / 7.0;\n    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n    return 2.2 * n_xyz;\n}\n\nfloat planetHeight(float pX, float pY, float pSize, float pDense) {\n        vec2 posP = vec2(0,0);\n        posP.x = pX; \n        posP.y = pY;\n\n        float dist = pow(distance(posP, pos), 1.5);\n\n        float size = pSize * 5.;\n\n        return -size / (1. + pow(dist * 100.0, 2.)) * 5. * pDense;\n}\n\nvoid newCalculateMatrix() {\n    newHeight = planetHeight(u1posX, u1posY, u1size, u1dense);\n    newHeight += planetHeight(u2posX, u2posY, u2size, u2dense);\n    newHeight += planetHeight(u3posX, u3posY, u3size, u3dense);\n    newHeight += planetHeight(u4posX, u4posY, u4size, u4dense);\n    newHeight += planetHeight(u5posX, u5posY, u5size, u5dense);\n    newHeight += planetHeight(u6posX, u6posY, u6size, u6dense);\n    newHeight += planetHeight(u7posX, u7posY, u7size, u7dense);\n}\n\nvoid main()\n{\n    pos = vec2(0,0);\n    pos.x = position.y;\n    pos.y = position.z;\n\n    newCalculateMatrix();\n\n    pos.x = position.y - 0.5;\n    pos.y = position.z - 0.5;\n    float lineRadius = length(pos);\n    float matrixHeight = newHeight;\n    vLineRadius = lineRadius;\n    \n    \n    //NOISE\n    float noise1 = .5 * cnoise(vec3(pos * 2.0, uTime * 0.03)) + 0.5 * cnoise(vec3(pos * 4.0, uTime * 0.04));\n    float noise2 = cnoise(vec3(pos * 10.0, uTime * 0.)) + 0.4*cnoise(vec3(pos * 50.0, uTime * 0.0));\n    float noiseWave = max(0.0,(0.2 + 0.9 * sin(uTime * 0.4)) * (sin(lineRadius * 15.0 + uTime * 0.7 + 60.0) - 0.4 )) * (1.0 - lineRadius);\n    float noiseOnField1 = noise1 * uNoise1;\n    float noiseOnField2 = noise2 * uNoise2 * noiseWave;\n    float noiseHeight = (noiseOnField1 + noiseOnField2 * lineRadius * 2.0) / (1.0 + abs(matrixHeight * 0.0));\n    \n    //WELL\n    pos.x = uFieldSize * (pos.x);\n    pos.y = -uFieldSize * (pos.y);\n    float realRadius = lineRadius * uFieldSize;\n    float wellHeight = -1.0 / (realRadius*realRadius) * uWellSize;\n\n    noiseOnField2 *=wellHeight;\n    \n    //SPIRAL\n    float spiralArms = uSpiralArms;\n    float spiralDistanceAttenuation = uSpiralAttenuation;\n    float spiralTwist = uSpiralTwist;\n    float spiralSpeed = uSpiralSpeed;\n    float spiralSize = uSpiralSize;\n    float spiralHeight = \n        spiralSize/(1.0 + realRadius*spiralDistanceAttenuation) * \n        (\n                0.7*sin(-uTime * spiralSpeed\n            + realRadius * spiralTwist\n            + position.x * uRadialPitch * spiralArms) \n            +\n            0.7*cos(-uTime*0.5 * spiralSpeed\n            + realRadius * spiralTwist/2.0\n            + position.x * uRadialPitch * spiralArms)\n        )/(1.0 + abs(matrixHeight)*1.0);\n    \n    //TOTAL HEIGHT\n    float height = matrixHeight + noiseHeight + wellHeight + spiralHeight;\n    \n    //OPACITY\n    vAccentColor = abs(matrixHeight*uAccentColorMultiplier) + spiralHeight;\n    float waveMoveFactor = pow(noiseWave, 2.0) * 0.5;\n    \n    gl_Position = projectionMatrix * viewMatrix * modelMatrix\n    * vec4(pos.x * (1.0 - waveMoveFactor), height - 3., pos.y * (1.0 - waveMoveFactor), 1.0);\n}",
         fragmentShader: "precision lowp float;\nuniform float uMinimumAlpha;\nuniform float uMaximumAlpha;\nuniform vec3 uInsideColor;\nuniform vec3 uOutsideColor;\nuniform vec3 uAccentColor;\nvarying float vAccentColor;\nvarying float vLineRadius;\nvoid main()\n{\n    float alpha = (uMinimumAlpha + uMaximumAlpha * (1.0 - vLineRadius * 1.0)) * sin(vLineRadius*2.0*vLineRadius*2.0 * 3.14);\n    vec3 color = mix(uInsideColor, uOutsideColor, vLineRadius * 2.0);\n    vec3 accentColor = vec3(0.66, 0.25, 0.88);\n    color = mix(color, uAccentColor, vAccentColor);\n    gl_FragColor = vec4(color.rgb, alpha);\n}",
         depthTest: n,
         uniforms: {
            uTime: {
               value: gd
            },
            uRadialPitch: {
               value: e
            },
            uFieldSize: {
               value: dh.fieldSize
            },
            uWellSize: {
               value: dh.wellSize
            },
            uNoise1: {
               value: dh.noise1
            },
            uNoise2: {
               value: dh.noise2
            },
            uNoise3: {
               value: dh.noise3
            },
            uMinimumAlpha: {
               value: ph.minimumAlpha
            },
            uMaximumAlpha: {
               value: ph.maximumAlpha
            },
            uInsideColor: {
               value: ph.insideColor
            },
            uOutsideColor: {
               value: ph.outsideColor
            },
            uAccentColor: {
               value: ph.warpColor
            },
            uAccentColorMultiplier: {
               value: ph.warpMultiplier
            },
            uSpiralArms: {
               value: dh.spiralArms
            },
            uSpiralAttenuation: {
               value: dh.spiralAttenuation
            },
            uSpiralSize: {
               value: dh.spiralSize
            },
            uSpiralSpeed: {
               value: dh.spiralSpeed
            },
            uSpiralTwist: {
               value: dh.spiralTwist
            },
            u1posX: {
               value: Ih.planet0.posX
            },
            u1posY: {
               value: Ih.planet0.posZ
            },
            u1size: {
               value: Ih.planet0.size
            },
            u1dense: {
               value: Ih.planet0.density
            },
            u2posX: {
               value: Ih.planet1.posX
            },
            u2posY: {
               value: Ih.planet1.posZ
            },
            u2size: {
               value: Ih.planet1.size
            },
            u2dense: {
               value: Ih.planet1.density
            },
            u3posX: {
               value: Ih.planet2.posX
            },
            u3posY: {
               value: Ih.planet2.posZ
            },
            u3size: {
               value: Ih.planet2.size
            },
            u3dense: {
               value: Ih.planet2.density
            },
            u4posX: {
               value: Ih.planet3.posX
            },
            u4posY: {
               value: Ih.planet3.posZ
            },
            u4size: {
               value: Ih.planet3.size
            },
            u4dense: {
               value: Ih.planet3.density
            },
            u5posX: {
               value: Ih.planet4.posX
            },
            u5posY: {
               value: Ih.planet4.posZ
            },
            u5size: {
               value: Ih.planet4.size
            },
            u5dense: {
               value: Ih.planet4.density
            },
            u6posX: {
               value: Ih.planet5.posX
            },
            u6posY: {
               value: Ih.planet5.posZ
            },
            u6size: {
               value: Ih.planet5.size
            },
            u6dense: {
               value: Ih.planet5.density
            },
            u7posX: {
               value: Ih.planet6.posX
            },
            u7posY: {
               value: Ih.planet6.posZ
            },
            u7size: {
               value: Ih.planet6.size
            },
            u7dense: {
               value: Ih.planet6.density
            }
         },
         blending: 2
      });
      for (let n = 0; n < dh.lines; n++) {
         let i = .01 + n * t;
         const r = 2 * Math.PI / e;
         let a = [],
            s = 0;
         for (let t = 0; t < r + 1; t++) s = e * t, t + 1 > r + 1 && (s = 2 * Math.PI), a.push(new mt(t, i * Math.cos(s) + .5, i * Math.sin(s) + .5));
         const o = (new je).setFromPoints(a);
         uh.push(new da(o, fh)), lh.add(uh[n])
      }
   }
   const gh = new Mn(256);
   gh.mipmaps = !1;
   const _h = new yn(1, 15, gh),
      vh = new class extends Oa {
         constructor(t) {
            super(t)
         }
         load(t, e, n, i) {
            const r = new ct,
               a = new za(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, (function(t) {
               r.image = t, r.needsUpdate = !0, void 0 !== e && e(r)
            }), n, i), r
         }
      },
      xh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d90ce0bd12053a5f63_ETH06.webp"),
      yh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370a9b839109b61d203cd19_SOL06.webp"),
      bh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d9b73c8d153171b90b_BNB02.webp"),
      Mh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d9019673128bbd3656_POLY02.webp"),
      Sh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d9352e2851593165c7_AVA02.webp"),
      wh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370b3d939109bcb6504548b_SUI01.webp"),
      Th = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6372b1223e75b43deac11884_LINK07.webp"),
      Eh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370bec439109bb90304fd78_MOON01.webp");
   let Ah = [],
      Ch = [],
      Lh = [];
   Lh.push("Avalanche"), Lh.push("Binance"), Lh.push("Ethereum"), Lh.push("Sui"), Lh.push("Polygon"), Lh.push("Solana"), Lh.push("Chainlink");
   for (let t = 0; t < 7; t++) {
      Ch.push(document.createElement("canvas")), Ch[t].width = 1350, Ch[t].height = 250;
      var Ph = Ch[t].getContext("2d");
      Ph.font = "600 120px Inter, sans-serif", Ph.fillStyle = "#E6E6E6", Ph.textAlign = "center", Ph.fillText(Lh[t], 675, 200), Ah.push(new ct(Ch[t])), Ah[t].needsUpdate = !0
   }
   const Rh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370e02b0d7d569215976ff3_glow04.webp"),
      Dh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370dc1f71bc73d2b7b258a3_ring04.webp"),
      Oh = vh.load("https://uploads-ssl.webflow.com/634d79b79c1f2518cbdd7b1d/6370e0e760a89c62f4b170dd_env14.png", (() => {
         const t = new Mn(Oh.image.height);
         t.fromEquirectangularTexture(ad, Oh), lh.background = t.texture
      }));
   Oh.mipmaps = !1, xh.mipmaps = !1, yh.mipmaps = !1, bh.mipmaps = !1, Mh.mipmaps = !1, Sh.mipmaps = !1, wh.mipmaps = !1, Th.mipmaps = !1;
   const Ih = {
      planet0: {
         index: 15,
         size: .05 * .7,
         orbitRadius: .147,
         orbitSpeed: .115,
         orbitHeight: -1.8,
         orbitOffset: -.5,
         density: 2.5,
         material: null,
         geometry: null,
         object: null,
         moonQuantity: 4,
         moonObjects: [],
         matcap: Mh,
         label: Ah[4],
         labelObject: null,
         originalHeight: 0,
         posX: 0,
         posZ: 0,
         ignoreField: !1,
         insideColor: new it("#A792E6"),
         outsideColor: new it("#4F34A4")
      },
      planet1: {
         index: 25,
         size: .04 * .7,
         orbitRadius: .315,
         orbitSpeed: .09,
         orbitHeight: -1.2,
         orbitOffset: 3,
         density: 3.5,
         material: null,
         geometry: null,
         object: null,
         moonQuantity: 1,
         moonObjects: [],
         matcap: wh,
         label: Ah[3],
         labelObject: null,
         originalHeight: 0,
         posX: 0,
         posZ: 0,
         ignoreField: !0,
         insideColor: new it("#699DE2"),
         outsideColor: new it("#173FAD")
      },
      planet2: {
         index: 20,
         size: .0315,
         orbitRadius: .21,
         orbitSpeed: .06,
         orbitHeight: -.6,
         orbitOffset: 7,
         density: 2.5,
         material: null,
         geometry: null,
         object: null,
         moonQuantity: 4,
         moonObjects: [],
         matcap: Sh,
         label: Ah[0],
         labelObject: null,
         originalHeight: 0,
         posX: 0,
         posZ: 0,
         ignoreField: !1,
         insideColor: new it("#CC3333"),
         outsideColor: new it("#CC3333")
      },
      planet3: {
         index: 0,
         size: .0525,
         orbitRadius: .21,
         orbitSpeed: .06,
         orbitHeight: -.5,
         orbitOffset: 2,
         density: 4,
         material: null,
         geometry: null,
         object: null,
         moonQuantity: 4,
         moonObjects: [],
         matcap: xh,
         label: Ah[2],
         labelObject: null,
         originalHeight: 0,
         ignoreField: !1,
         insideColor: new it("#281660"),
         outsideColor: new it("#4387AE")
      },
      planet4: {
         index: 5,
         size: .0315,
         orbitRadius: .238,
         orbitSpeed: .06,
         orbitHeight: 0,
         orbitOffset: 4,
         density: 3,
         material: null,
         geometry: null,
         object: null,
         moonQuantity: 4,
         moonObjects: [],
         matcap: yh,
         label: Ah[5],
         labelObject: null,
         originalHeight: 0,
         posX: 0,
         posZ: 0,
         ignoreField: !1,
         insideColor: new it("#2C6060"),
         outsideColor: new it("#281660")
      },
      planet5: {
         index: 10,
         size: .0385,
         orbitRadius: .35 * .7,
         orbitSpeed: .06,
         orbitHeight: -.3,
         orbitOffset: 5,
         density: 2.5,
         material: null,
         geometry: null,
         object: null,
         moonQuantity: 4,
         moonObjects: [],
         matcap: bh,
         label: Ah[1],
         labelObject: null,
         originalHeight: 0,
         posX: 0,
         posZ: 0,
         ignoreField: !1,
         insideColor: new it("#C97C3C"),
         outsideColor: new it("#E3AF74")
      },
      planet6: {
         index: 30,
         size: .0315,
         orbitRadius: .105,
         orbitSpeed: .3,
         orbitHeight: -2,
         orbitOffset: 5,
         density: 2.5,
         material: null,
         geometry: null,
         object: null,
         moonQuantity: 0,
         moonObjects: [],
         matcap: Th,
         label: Ah[6],
         labelObject: null,
         originalHeight: 0,
         posX: 0,
         posZ: 0,
         ignoreField: !0,
         insideColor: new it("#88D3E2"),
         outsideColor: new it("#0728A1")
      }
   };
   let zh = new _e,
      Nh = null,
      Uh = null,
      Fh = null,
      kh = null,
      Hh = null;
   const Bh = new G;
   let Vh = null,
      Gh = null,
      Wh = null,
      jh = null,
      Xh = !1;
   document.querySelector(".point-0"), window.addEventListener("touchstart", (t => {
      var e = t.touches[0];
      Bh.x = e.clientX / $h.width * 2 - 1, Bh.y = -e.clientY / $h.height * 2 + 1, !Gd && Fd && (Xh = !0), Kh(), jh = Vh || null
   }), {
      passive: !0
   });
   var qh = 0;
   document.addEventListener("touchend", (function(t) {
      var e = (new Date).getTime();
      e - qh <= 300 && t.preventDefault(), qh = e
   }), {
      passive: !0
   }), document.addEventListener("touchmove", (function(t) {
      t.preventDefault()
   })), window.addEventListener("mousedown", (t => {
      Bh.x = t.clientX / $h.width * 2 - 1, Bh.y = -t.clientY / $h.height * 2 + 1, !Gd && Fd && (Xh = !0), Kh(), jh = Vh || null
   }), {
      passive: !0
   });
   const Yh = new class {
      constructor(t, e, n = 0, i = 1 / 0) {
         this.ray = new jt(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new ie, this.params = {
            Mesh: {},
            Line: {
               threshold: 1
            },
            LOD: {},
            Points: {
               threshold: 1
            },
            Sprite: {}
         }
      }
      set(t, e) {
         this.ray.set(t, e)
      }
      setFromCamera(t, e) {
         e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
      }
      intersectObject(t, e = !0, n = []) {
         return Wa(t, this, n, e), n.sort(Ga), n
      }
      intersectObjects(t, e = !0, n = []) {
         for (let i = 0, r = t.length; i < r; i++) Wa(t[i], this, n, e);
         return n.sort(Ga), n
      }
   };
   let Zh = !1;

   function Kh() {
      Yh.setFromCamera(Bh, id);
      const t = [];
      for (const e in Ih) t.push(Ih[e].planet);
      t.push(Nh);
      const e = Yh.intersectObjects(t);
      if (e.length) {
         for (const t in Ih) Ih[t].planet.id == e[0].object.id && (Vh = Ih[t]);
         Nh.id == e[0].object.id && (Zh = !0)
      } else Vh = null, Zh = !1
   }
   const Jh = {
         lockHeight: .8,
         lockFOV: 35,
         lockRadius: 30,
         planetLookHeight: 10,
         lockPlanetHeight: 11,
         lockOffsetTime: 2.8,
         defaultHeight: 0,
         defaultZ: 0,
         startPositionLenght: null,
         blackHoleLookHeight: 10,
         blackHoleLockHeight: 15,
         defaultFOV: 25,
         defaultLook: new mt(0, -5, 0)
      },
      Qh = {
         onethird: 1.3,
         xPos: "64%"
      },
      $h = {
         width: oh.clientWidth,
         height: oh.clientHeight
      };
   let td = !1;

   function ed() {
      $h.height > $h.width ? (Jh.defaultZ = 108, Jh.defaultHeight = 56, Jh.defaultLook = new mt(0, 6, 0), Jh.planetLookHeight = 10, Qh.xPos = "47%", td = !0) : (Jh.defaultZ = 90, Jh.defaultHeight = 35, Jh.defaultLook = new mt(0, -5, 0), Jh.planetLookHeight = 10, Qh.xPos = "64%", td = !1)
   }
   ed();
   let nd = !1;
   new ResizeObserver((function() {
      $h.width = oh.clientWidth, $h.height = oh.clientHeight, ed(), id.aspect = $h.width / $h.height, id.setViewOffset($h.width * Qh.onethird - $h.width * (Qh.onethird - 1) * td, $h.height, 0, 0, $h.width, $h.height), id.updateProjectionMatrix(), ad.setSize($h.width, $h.height), ad.setPixelRatio(Math.min(window.devicePixelRatio, 2)), nd = !0
   })).observe(oh);
   const id = new vn(Jh.defaultFOV, $h.width / $h.height, .1, 500);
   id.setViewOffset($h.width * Qh.onethird - $h.width * (Qh.onethird - 1) * td, $h.height, 0, 0, $h.width, $h.height), id.position.x = 0, id.position.y = Jh.defaultHeight, id.position.z = Jh.defaultZ, Jh.startPositionLenght = id.position.length(), lh.add(id);
   const rd = new class extends D {
      constructor(t, e) {
         super(), this.object = t, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new mt, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
         }, this.mouseButtons = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
         }, this.touches = {
            ONE: 0,
            TWO: 2
         }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
            return s.phi
         }, this.getAzimuthalAngle = function() {
            return s.theta
         }, this.getDistance = function() {
            return this.object.position.distanceTo(this.target)
         }, this.listenToKeyEvents = function(t) {
            t.addEventListener("keydown", W), this._domElementKeyEvents = t
         }, this.saveState = function() {
            n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
         }, this.reset = function() {
            n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Xa), n.update(), r = i.NONE
         }, this.update = function() {
            const e = new mt,
               h = (new ft).setFromUnitVectors(t.up, new mt(0, 1, 0)),
               d = h.clone().invert(),
               p = new mt,
               f = new ft,
               m = 2 * Math.PI;
            return function() {
               const t = n.object.position;
               e.copy(t).sub(n.target), e.applyQuaternion(h), s.setFromVector3(e), n.autoRotate && r === i.NONE && S(2 * Math.PI / 60 / 60 * n.autoRotateSpeed), n.enableDamping ? (s.theta += o.theta * n.dampingFactor, s.phi += o.phi * n.dampingFactor) : (s.theta += o.theta, s.phi += o.phi);
               let g = n.minAzimuthAngle,
                  _ = n.maxAzimuthAngle;
               return isFinite(g) && isFinite(_) && (g < -Math.PI ? g += m : g > Math.PI && (g -= m), _ < -Math.PI ? _ += m : _ > Math.PI && (_ -= m), s.theta = g <= _ ? Math.max(g, Math.min(_, s.theta)) : s.theta > (g + _) / 2 ? Math.max(g, s.theta) : Math.min(_, s.theta)), s.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, s.phi)), s.makeSafe(), s.radius *= l, s.radius = Math.max(n.minDistance, Math.min(n.maxDistance, s.radius)), !0 === n.enableDamping ? n.target.addScaledVector(c, n.dampingFactor) : n.target.add(c), e.setFromSpherical(s), e.applyQuaternion(d), t.copy(n.target).add(e), n.object.lookAt(n.target), !0 === n.enableDamping ? (o.theta *= 1 - n.dampingFactor, o.phi *= 1 - n.dampingFactor, c.multiplyScalar(1 - n.dampingFactor)) : (o.set(0, 0, 0), c.set(0, 0, 0)), l = 1, !!(u || p.distanceToSquared(n.object.position) > a || 8 * (1 - f.dot(n.object.quaternion)) > a) && (n.dispatchEvent(Xa), p.copy(n.object.position), f.copy(n.object.quaternion), u = !1, !0)
            }
         }(), this.dispose = function() {
            n.domElement.removeEventListener("contextmenu", j), n.domElement.removeEventListener("pointerdown", F), n.domElement.removeEventListener("pointercancel", B), n.domElement.removeEventListener("wheel", V), n.domElement.removeEventListener("pointermove", k), n.domElement.removeEventListener("pointerup", H), null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", W)
         };
         const n = this,
            i = {
               NONE: -1,
               ROTATE: 0,
               DOLLY: 1,
               PAN: 2,
               TOUCH_ROTATE: 3,
               TOUCH_PAN: 4,
               TOUCH_DOLLY_PAN: 5,
               TOUCH_DOLLY_ROTATE: 6
            };
         let r = i.NONE;
         const a = 1e-6,
            s = new ja,
            o = new ja;
         let l = 1;
         const c = new mt;
         let u = !1;
         const h = new G,
            d = new G,
            p = new G,
            f = new G,
            m = new G,
            g = new G,
            _ = new G,
            v = new G,
            x = new G,
            y = [],
            b = {};

         function M() {
            return Math.pow(.95, n.zoomSpeed)
         }

         function S(t) {
            o.theta -= t
         }

         function w(t) {
            o.phi -= t
         }
         const T = function() {
               const t = new mt;
               return function(e, n) {
                  t.setFromMatrixColumn(n, 0), t.multiplyScalar(-e), c.add(t)
               }
            }(),
            E = function() {
               const t = new mt;
               return function(e, i) {
                  !0 === n.screenSpacePanning ? t.setFromMatrixColumn(i, 1) : (t.setFromMatrixColumn(i, 0), t.crossVectors(n.object.up, t)), t.multiplyScalar(e), c.add(t)
               }
            }(),
            A = function() {
               const t = new mt;
               return function(e, i) {
                  const r = n.domElement;
                  if (n.object.isPerspectiveCamera) {
                     const a = n.object.position;
                     t.copy(a).sub(n.target);
                     let s = t.length();
                     s *= Math.tan(n.object.fov / 2 * Math.PI / 180), T(2 * e * s / r.clientHeight, n.object.matrix), E(2 * i * s / r.clientHeight, n.object.matrix)
                  } else n.object.isOrthographicCamera ? (T(e * (n.object.right - n.object.left) / n.object.zoom / r.clientWidth, n.object.matrix), E(i * (n.object.top - n.object.bottom) / n.object.zoom / r.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
               }
            }();

         function C(t) {
            n.object.isPerspectiveCamera ? l /= t : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * t)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
         }

         function L(t) {
            n.object.isPerspectiveCamera ? l *= t : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / t)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
         }

         function P(t) {
            h.set(t.clientX, t.clientY)
         }

         function R(t) {
            f.set(t.clientX, t.clientY)
         }

         function D() {
            if (1 === y.length) h.set(y[0].pageX, y[0].pageY);
            else {
               const t = .5 * (y[0].pageX + y[1].pageX),
                  e = .5 * (y[0].pageY + y[1].pageY);
               h.set(t, e)
            }
         }

         function O() {
            if (1 === y.length) f.set(y[0].pageX, y[0].pageY);
            else {
               const t = .5 * (y[0].pageX + y[1].pageX),
                  e = .5 * (y[0].pageY + y[1].pageY);
               f.set(t, e)
            }
         }

         function I() {
            const t = y[0].pageX - y[1].pageX,
               e = y[0].pageY - y[1].pageY,
               n = Math.sqrt(t * t + e * e);
            _.set(0, n)
         }

         function z(t) {
            if (1 == y.length) d.set(t.pageX, t.pageY);
            else {
               const e = Y(t),
                  n = .5 * (t.pageX + e.x),
                  i = .5 * (t.pageY + e.y);
               d.set(n, i)
            }
            p.subVectors(d, h).multiplyScalar(n.rotateSpeed);
            const e = n.domElement;
            S(2 * Math.PI * p.x / e.clientHeight), w(2 * Math.PI * p.y / e.clientHeight), h.copy(d)
         }

         function N(t) {
            if (1 === y.length) m.set(t.pageX, t.pageY);
            else {
               const e = Y(t),
                  n = .5 * (t.pageX + e.x),
                  i = .5 * (t.pageY + e.y);
               m.set(n, i)
            }
            g.subVectors(m, f).multiplyScalar(n.panSpeed), A(g.x, g.y), f.copy(m)
         }

         function U(t) {
            const e = Y(t),
               i = t.pageX - e.x,
               r = t.pageY - e.y,
               a = Math.sqrt(i * i + r * r);
            v.set(0, a), x.set(0, Math.pow(v.y / _.y, n.zoomSpeed)), C(x.y), _.copy(v)
         }

         function F(t) {
            !1 !== n.enabled && (0 === y.length && (n.domElement.setPointerCapture(t.pointerId), n.domElement.addEventListener("pointermove", k), n.domElement.addEventListener("pointerup", H)), function(t) {
               y.push(t)
            }(t), "touch" === t.pointerType ? function(t) {
               switch (q(t), y.length) {
                  case 1:
                     switch (n.touches.ONE) {
                        case 0:
                           if (!1 === n.enableRotate) return;
                           D(), r = i.TOUCH_ROTATE;
                           break;
                        case 1:
                           if (!1 === n.enablePan) return;
                           O(), r = i.TOUCH_PAN;
                           break;
                        default:
                           r = i.NONE
                     }
                     break;
                  case 2:
                     switch (n.touches.TWO) {
                        case 2:
                           if (!1 === n.enableZoom && !1 === n.enablePan) return;
                           n.enableZoom && I(), n.enablePan && O(), r = i.TOUCH_DOLLY_PAN;
                           break;
                        case 3:
                           if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                           n.enableZoom && I(), n.enableRotate && D(), r = i.TOUCH_DOLLY_ROTATE;
                           break;
                        default:
                           r = i.NONE
                     }
                     break;
                  default:
                     r = i.NONE
               }
               r !== i.NONE && n.dispatchEvent(qa)
            }(t) : function(t) {
               let e;
               switch (t.button) {
                  case 0:
                     e = n.mouseButtons.LEFT;
                     break;
                  case 1:
                     e = n.mouseButtons.MIDDLE;
                     break;
                  case 2:
                     e = n.mouseButtons.RIGHT;
                     break;
                  default:
                     e = -1
               }
               switch (e) {
                  case 1:
                     if (!1 === n.enableZoom) return;
                     ! function(t) {
                        _.set(t.clientX, t.clientY)
                     }(t), r = i.DOLLY;
                     break;
                  case 0:
                     if (t.ctrlKey || t.metaKey || t.shiftKey) {
                        if (!1 === n.enablePan) return;
                        R(t), r = i.PAN
                     } else {
                        if (!1 === n.enableRotate) return;
                        P(t), r = i.ROTATE
                     }
                     break;
                  case 2:
                     if (t.ctrlKey || t.metaKey || t.shiftKey) {
                        if (!1 === n.enableRotate) return;
                        P(t), r = i.ROTATE
                     } else {
                        if (!1 === n.enablePan) return;
                        R(t), r = i.PAN
                     }
                     break;
                  default:
                     r = i.NONE
               }
               r !== i.NONE && n.dispatchEvent(qa)
            }(t))
         }

         function k(t) {
            !1 !== n.enabled && ("touch" === t.pointerType ? function(t) {
               switch (q(t), r) {
                  case i.TOUCH_ROTATE:
                     if (!1 === n.enableRotate) return;
                     z(t), n.update();
                     break;
                  case i.TOUCH_PAN:
                     if (!1 === n.enablePan) return;
                     N(t), n.update();
                     break;
                  case i.TOUCH_DOLLY_PAN:
                     if (!1 === n.enableZoom && !1 === n.enablePan) return;
                     ! function(t) {
                        n.enableZoom && U(t), n.enablePan && N(t)
                     }(t), n.update();
                     break;
                  case i.TOUCH_DOLLY_ROTATE:
                     if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                     ! function(t) {
                        n.enableZoom && U(t), n.enableRotate && z(t)
                     }(t), n.update();
                     break;
                  default:
                     r = i.NONE
               }
            }(t) : function(t) {
               switch (r) {
                  case i.ROTATE:
                     if (!1 === n.enableRotate) return;
                     ! function(t) {
                        d.set(t.clientX, t.clientY), p.subVectors(d, h).multiplyScalar(n.rotateSpeed);
                        const e = n.domElement;
                        S(2 * Math.PI * p.x / e.clientHeight), w(2 * Math.PI * p.y / e.clientHeight), h.copy(d), n.update()
                     }(t);
                     break;
                  case i.DOLLY:
                     if (!1 === n.enableZoom) return;
                     ! function(t) {
                        v.set(t.clientX, t.clientY), x.subVectors(v, _), x.y > 0 ? C(M()) : x.y < 0 && L(M()), _.copy(v), n.update()
                     }(t);
                     break;
                  case i.PAN:
                     if (!1 === n.enablePan) return;
                     ! function(t) {
                        m.set(t.clientX, t.clientY), g.subVectors(m, f).multiplyScalar(n.panSpeed), A(g.x, g.y), f.copy(m), n.update()
                     }(t)
               }
            }(t))
         }

         function H(t) {
            X(t), 0 === y.length && (n.domElement.releasePointerCapture(t.pointerId), n.domElement.removeEventListener("pointermove", k), n.domElement.removeEventListener("pointerup", H)), n.dispatchEvent(Ya), r = i.NONE
         }

         function B(t) {
            X(t)
         }

         function V(t) {
            !1 !== n.enabled && !1 !== n.enableZoom && r === i.NONE && (t.preventDefault(), n.dispatchEvent(qa), function(t) {
               t.deltaY < 0 ? L(M()) : t.deltaY > 0 && C(M()), n.update()
            }(t), n.dispatchEvent(Ya))
         }

         function W(t) {
            !1 !== n.enabled && !1 !== n.enablePan && function(t) {
               let e = !1;
               switch (t.code) {
                  case n.keys.UP:
                     A(0, n.keyPanSpeed), e = !0;
                     break;
                  case n.keys.BOTTOM:
                     A(0, -n.keyPanSpeed), e = !0;
                     break;
                  case n.keys.LEFT:
                     A(n.keyPanSpeed, 0), e = !0;
                     break;
                  case n.keys.RIGHT:
                     A(-n.keyPanSpeed, 0), e = !0
               }
               e && (t.preventDefault(), n.update())
            }(t)
         }

         function j(t) {
            !1 !== n.enabled && t.preventDefault()
         }

         function X(t) {
            delete b[t.pointerId];
            for (let e = 0; e < y.length; e++)
               if (y[e].pointerId == t.pointerId) return void y.splice(e, 1)
         }

         function q(t) {
            let e = b[t.pointerId];
            void 0 === e && (e = new G, b[t.pointerId] = e), e.set(t.pageX, t.pageY)
         }

         function Y(t) {
            const e = t.pointerId === y[0].pointerId ? y[1] : y[0];
            return b[e.pointerId]
         }
         n.domElement.addEventListener("contextmenu", j), n.domElement.addEventListener("pointerdown", F), n.domElement.addEventListener("pointercancel", B), n.domElement.addEventListener("wheel", V, {
            passive: !1
         }), this.update()
      }
   }(id, sh);
   rd.target = Jh.defaultLook, rd.enableDamping = !0, rd.minPolarAngle = .08, rd.maxPolarAngle = Math.PI - .08, rd.enablePan = !1, rd.dampingFactor = .04, rd.enableZoom = !1;
   const ad = new aa({
      canvas: sh,
      antialias: !1
   });
   ad.setSize($h.width, $h.height), ad.setPixelRatio(Math.min(window.devicePixelRatio, 2));
   let sd = 0;
   const od = {
      currentPosition: new mt(0, 0, 0),
      currentFOV: 0,
      timer: 0,
      zoomInDuration: 4,
      lookTarget: new mt(0, 0, 0),
      uiOpacity: 0,
      labelOpacity: 0,
      blackHoleLockHeight: 0
   };
   Uu.registerPlugin(ih), ih.create("superSmooth", "M0,0 C0.25,-0.01 0.425,0.414 0.526,0.606 0.646,0.836 0.818,1.001 1,1 "), ih.create("custom", "M0,0 C0.25,-0.01 0.425,0.414 0.526,0.606 0.646,0.836 0.818,1.001 1,1 "), Uu.defaults({
      ease: "superSmooth",
      duration: 1.7,
      delay: 0
   });
   let ld, cd, ud = null;

   function hd(t) {
      if (1 == t) {
         if (2 == sd) {
            Uu.to(Gh, {
               orbitHeight: Gh.originalHeight
            });
            for (let t = 0; t < Gh.moonQuantity; t++) {
               Uu.to(Gh.moonScale[t], {
                  duration: 1,
                  delay: 0,
                  x: 0,
                  onComplete: fd
               }), Uu.to(Gh.moonScale[t], {
                  duration: .7,
                  delay: 1,
                  x: Gh.size * dh.fieldSize * .05 * (1 + Math.random())
               });
               var e = Gh.moonTargetHeight[t];
               Uu.to(e, {
                  duration: 1.5,
                  y: 0
               })
            }
            Wh = Gh
         }
         Gh = jh, rd.enabled = !1, od.currentPosition = id.position.clone(), od.currentFOV = id.fov, od.UIColor = new it(0, 0, 0, 0), od.timer = 0, od.currentRadius = id.position.clone(), od.currentRadius.projectOnPlane(new mt(0, 1, 0)), od.currentRadius = od.currentRadius.length(), od.lookTarget.set(0, rd.target.y, 0);
         const t = Gh.orbitRadius * dh.fieldSize + Jh.lockRadius;
         let n = id.position.clone();
         n.projectOnPlane(new mt(0, 1, 0));
         let i = n.angleTo(new mt(1, 0, 0));
         id.position.z > 0 && (i = 2 * Math.PI - i);
         let r = (gd + Jh.lockOffsetTime / (Gh.orbitSpeed * Gh.orbitRadius * dh.fieldSize)) * Gh.orbitSpeed + Gh.orbitOffset;
         r = function(t) {
            for (; t > 2 * Math.PI;) t -= 2 * Math.PI;
            for (; t < -2 * Math.PI;) t += 2 * Math.PI;
            return t
         }(r), Math.abs(i - r) > Math.PI && (r < i ? r += 2 * Math.PI : i < r && (i += 2 * Math.PI)), od.currentAngle = i, Gh.originalHeight = Gh.orbitHeight, Uu.to(od, {
            currentAngle: r
         }), Uu.to(od, {
            currentRadius: t
         }), Uu.to(Gh, {
            delay: 0,
            orbitHeight: Jh.lockPlanetHeight
         }), od.currentPosition.y = id.position.y, Uu.to(od.currentPosition, {
            y: Jh.lockHeight
         }), Uu.to(od, {
            currentFOV: Jh.lockFOV
         }), Uu.to(od, {
            timer: od.zoomInDuration
         }), Uu.to(od.lookTarget, {
            y: Jh.planetLookHeight
         });
         for (let t = 0; t < Gh.moonQuantity; t++) {
            Gh.moonTargetHeight[t].y = Gh.moonHeight[t], e = Gh.moonTargetHeight[t], Uu.to(e, {
               duration: 1.5,
               y: -2.5 - 1.8 * t
            }), Gh.moonTargetXZ[t].x = Gh.moonObjects[t].position.x, Gh.moonTargetXZ[t].y = Gh.moonObjects[t].position.z;
            const n = .5 * Gh.size * .8 * dh.fieldSize,
               i = n * Math.cos(.5 * -Math.PI - Gh.timer),
               r = n * Math.sin(.5 * -Math.PI - Gh.timer);
            Uu.to(Gh.moonTargetXZ[t], {
               delay: .7,
               duration: 1,
               x: i
            }), Uu.to(Gh.moonTargetXZ[t], {
               delay: .7,
               duration: 1,
               y: r
            })
         }
         Uu.killTweensOf(od, "uiOpacity"), od.uiOpacity = 0, Uu.to(od, {
            delay: 1.3,
            uiOpacity: 1
         }), Uu.to(od, {
            delay: 0,
            duration: 1,
            labelOpacity: 0
         }), Uu.killTweensOf(dh, "noise1"), Uu.to(dh, {
            duration: 9,
            noise1: 20 + .7 * Gh.index
         }), Uu.to(ph, {
            duration: 2,
            warpMultiplier: 0
         }), Uu.to(dh, {
            duration: 2,
            spiralSize: 3
         });
         const a = Gh.insideColor,
            s = Gh.outsideColor;
         return Uu.to(ph.insideColor, {
               delay: 0,
               duration: 2,
               r: a.r,
               g: a.g,
               b: a.b
            }), Uu.to(ph.outsideColor, {
               delay: 0,
               duration: 3,
               r: s.r,
               g: s.g,
               b: s.b
            }),
            function() {
               if (Fd) {
                  let t = 0,
                     e = 0,
                     n = Gh.index;
                  if (Ud[n][0] ? (yd.innerHTML = Ud[n][0].name, 10 == n && (yd.innerHTML = "Binance"), 25 == n && (yd.innerHTML = "Sui"), t = Ud[n][0].quote.USD.percent_change_24h.toFixed(1), e = t > 0 ? "&#x2191;" : "&#x2193;", Md.innerHTML = "$" + Ud[n][0].quote.USD.price.toFixed(1) + "&nbsp;" + e + Math.abs(t) + "%") : (yd.innerHTML = "-", Md.innerHTML = "data unavailable"), n++, Gh.moonQuantity < 1) return;
                  if (Ud[n][0]) {
                     25 != Gh.index && (wd.innerHTML = Ud[n][0].name), t = Ud[n][0].quote.USD.percent_change_24h.toFixed(1), e = t > 0 ? "&#x2191;" : "&#x2193;";
                     let i = kd(Ud[n][0].quote.USD.price);
                     Td.innerHTML = "$" + i + "&nbsp;" + e + Math.abs(t) + "%"
                  } else wd.innerHTML = "-", Td.innerHTML = "data unavailable";
                  if (n++, Gh.moonQuantity < 2) return;
                  if (Ud[n][0]) {
                     Ad.innerHTML = Ud[n][0].name, t = Ud[n][0].quote.USD.percent_change_24h.toFixed(1), e = t > 0 ? "&#x2191;" : "&#x2193;";
                     let i = kd(Ud[n][0].quote.USD.price);
                     Cd.innerHTML = "$" + i + "&nbsp;" + e + Math.abs(t) + "%"
                  } else Ad.innerHTML = "-", Cd.innerHTML = "data unavailable";
                  if (n++, Gh.moonQuantity < 3) return;
                  if (Ud[n][0]) {
                     Pd.innerHTML = Ud[n][0].name, t = Ud[n][0].quote.USD.percent_change_24h.toFixed(1), e = t > 0 ? "&#x2191;" : "&#x2193;";
                     let i = kd(Ud[n][0].quote.USD.price);
                     Rd.innerHTML = "$" + i + "&nbsp;" + e + Math.abs(t) + "%"
                  } else Pd.innerHTML = "-", Rd.innerHTML = "data unavailable";
                  if (n++, Gh.moonQuantity < 4) return;
                  if (Ud[n][0]) {
                     Od.innerHTML = Ud[n][0].name, t = Ud[n][0].quote.USD.percent_change_24h.toFixed(1), e = t > 0 ? "&#x2191;" : "&#x2193;";
                     let i = kd(Ud[n][0].quote.USD.price);
                     Id.innerHTML = "$" + i + "&nbsp;" + e + Math.abs(t) + "%"
                  } else Od.innerHTML = "-", Id.innerHTML = "data unavailable"
               }
            }(), rh(td), void(sd = 1)
      }
      if (1 != sd || 2 != t) {
         if (3 == t) {
            if (2 == sd) {
               for (let t = 0; t < Gh.moonQuantity; t++) Uu.to(Gh.moonScale[t], {
                  duration: 1,
                  delay: 0,
                  x: 0
               }), Uu.to(Gh.moonScale[t], {
                  duration: 1.5,
                  delay: 1.2,
                  x: Gh.size * dh.fieldSize * .05 * (1 + Math.random()),
                  onStart: fd
               }), Gh.moonTargetXZ[t].x = Gh.moonObjects[t].position.x, Gh.moonTargetXZ[t].y = Gh.moonObjects[t].position.z, Uu.to(Gh.moonTargetXZ[t], {
                  delay: .3 * t,
                  duration: 1 - .1 * t,
                  x: 0,
                  y: 0
               });
               Wh = Gh, Gh = null
            }
            let t = id.position.clone();
            t.projectOnPlane(new mt(0, 1, 0)), od.currentAngle = t.angleTo(new mt(1, 0, 0)), od.UIColor = new it(0, 0, 0, 0), Uu.to(Wh, {
               orbitHeight: Wh.originalHeight
            }), od.timer = 0, od.lookTarget.setY(rd.target.y), Uu.to(od, {
               timer: od.zoomInDuration
            });
            let e = id.position.clone();
            e.normalize(), e = e.multiplyScalar(Jh.startPositionLenght), e.setY(Jh.defaultHeight), Uu.to(od.currentPosition, {
               duration: 1.7,
               delay: 0,
               x: e.x,
               y: e.y,
               z: e.z
            }), Uu.to(od.lookTarget, {
               duration: 1.7,
               delay: 0,
               y: Jh.defaultLook.y
            }), Uu.to(od, {
               duration: 1.7,
               delay: 0,
               currentFOV: Jh.defaultFOV
            }), Uu.killTweensOf(od, "uiOpacity"), Uu.to(od, {
               delay: 0,
               duration: 1,
               uiOpacity: 0
            }), Uu.to(od, {
               delay: 1,
               duration: .7,
               labelOpacity: 1
            }), Uu.killTweensOf(dh, "noise1"), Uu.to(dh, {
               noise1: .8
            });
            const n = ph.startInsideColor,
               i = ph.startOutsideColor;
            return Uu.to(ph.insideColor, {
               delay: 0,
               duration: 1,
               r: n.r,
               g: n.g,
               b: n.b
            }), Uu.to(ph.outsideColor, {
               delay: 0,
               duration: 1,
               r: i.r,
               g: i.g,
               b: i.b
            }), Uu.to(ph, {
               duration: 5,
               warpMultiplier: .6
            }), Uu.to(dh, {
               duration: 2,
               spiralSize: 11.8
            }), void(sd = 3)
         }
         if (0 == t) return rd.enabled = !0, Wh = Gh, Gh = null, sd = 0, Uu.killTweensOf(od, "labelOpacity"), void ah(td);
         if (5 == t) {
            let t = id.position.clone();
            t.projectOnPlane(new mt(0, 1, 0)), od.currentAngle = t.angleTo(new mt(1, 0, 0));
            let e = id.position.clone();
            t.normalize();
            let n = 110;
            td && (n = 150), e = t.multiplyScalar(n), e.setY(Jh.defaultHeight - 10), od.currentPosition = id.position.clone(), Uu.to(od.currentPosition, {
               duration: 1.7,
               delay: 0,
               x: e.x,
               y: e.y,
               z: e.z,
               onComplete: dd
            }), od.lookTarget = rd.target.clone(), od.blackHoleLockHeight = zh.position.y, Uu.to(od.lookTarget, {
               y: Jh.blackHoleLookHeight
            });
            let i = 21;
            td && (i = 27), Uu.to(od, {
               blackHoleLockHeight: i
            }), Uu.killTweensOf(ld.style, "opacity"), Uu.killTweensOf(cd.style, "opacity"), Uu.killTweensOf(ud.style, "opacity"), Uu.to(ld.style, {
               duration: .5,
               delay: 1.2,
               ease: "power1",
               opacity: 1
            }), ld.style.display = "inline-flex", sd = 5, Xh = !1, rh(td)
         }
         6 == t && 7 == sd && (Uu.to(ld.style, {
            duration: .3,
            delay: 0,
            ease: "power1",
            opacity: 0,
            onComplete: jd
         }), Uu.to(od.lookTarget, {
            y: 0
         }), Uu.to(od, {
            blackHoleLockHeight: dh.blackHoleHeight,
            onComplete: pd
         }), rd.enabled = !0, sd = 6, ah(td))
      } else sd = 2
   }

   function dd() {
      sd = 7
   }

   function pd() {
      sd = 0
   }

   function fd() {
      Wh = null
   }
   const md = new class {
      constructor(t = !0) {
         this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
      }
      start() {
         this.startTime = Na(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
      }
      stop() {
         this.getElapsedTime(), this.running = !1, this.autoStart = !1
      }
      getElapsedTime() {
         return this.getDelta(), this.elapsedTime
      }
      getDelta() {
         let t = 0;
         if (this.autoStart && !this.running) return this.start(), 0;
         if (this.running) {
            const e = Na();
            t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
         }
         return t
      }
   }(!0);
   let gd = 0,
      _d = 0,
      vd = 0;
   mh(),
      function() {
         kh = new ga({
            roughness: 0,
            metalness: 1
         }), kh.mipmaps = !1;
         const t = new Re({
            color: "#f7e5ff",
            transparent: !0,
            premultipliedAlpha: !0,
            side: 2,
            alphaTest: !1,
            depthWrite: !1
         });
         t.map = Dh;
         const e = new Re({
               transparent: !0,
               blending: 2,
               premultipliedAlpha: !0,
               alphaTest: !1,
               depthWrite: !1
            }),
            n = new fa(9, 9, 64, 64),
            i = new Dn(11.5, 11.5),
            r = new fa(7.5, 1.2, 60, 60);
         Nh = new un(n, kh), Uh = new un(r, t), Fh = new un(i, e), Nh.scale.set(dh.blackHoleSize, dh.blackHoleSize, 1.3 * dh.blackHoleSize), zh.position.set(0, dh.blackHoleHeight, 0), lh.add(zh), lh.add(Nh), lh.add(Uh), lh.add(Fh), Nh.parent = zh, Fh.parent = zh, Uh.parent = zh, Fh.position.set(0, 0, 0), Uh.rotateX(Math.PI / 2), Uh.scale.set(1, 1, .3), e.map = Rh, e.alphaMap = Rh;
         const a = new pa(1, 30, 30);
         for (const t in Ih) {
            const e = Ih[t].size / 2 * dh.fieldSize;
            Ih[t].geometry = a;
            const n = new _a;
            n.matcap = Ih[t].matcap, Ih[t].material = n;
            const i = new _e;
            lh.add(i), Ih[t].object = i;
            const r = new un(a, n);
            r.scale.set(e, e, e), Ih[t].planet = r, i.add(r);
            const s = new Re;
            s.transparent = !0, s.depthTest = !0, s.color = new it(.9, .9, .9, 1), s.map = Ih[t].label, s.opacity = 1, s.alphaTest = .1;
            const o = new Dn(5, 1, 1, 1),
               l = new un(o, s);
            i.add(l), l.scale.set(1.2, 1.2, 1.2), Ih[t].labelObject = l, 30 == Ih[t].index && (Hh = Fh.clone(), Hh.scale.set(.257, .257, .257), i.add(Hh));
            let c = [],
               u = [],
               h = [],
               d = [],
               p = [],
               f = [],
               m = [];
            for (let n = 0; n < Ih[t].moonQuantity; n++) {
               const r = .1 * e * (1 + Math.random()),
                  s = a,
                  o = new Re({
                     color: "white"
                  });
               o.map = Eh;
               const l = new un(s, o);
               l.scale.set(r, r, r), c.push(l), i.add(l), l.rotation.set(360 * Math.random(), 360 * Math.random(), 360 * Math.random());
               const g = Ih[t].size * dh.fieldSize,
                  _ = .6 * g + .2 * (1 + n);
               u.push(_);
               const v = Ih[t].orbitSpeed * (Math.random() - .5) * 15;
               h.push(v);
               const x = (Math.random() - .5) * g * .4;
               d.push(x), p.push({
                  y: 0
               }), f.push(new G(0, 0)), m.push({
                  x: r
               })
            }
            Ih[t].moonObjects = c, Ih[t].moonSpeeds = h, Ih[t].moonOrbits = u, Ih[t].moonHeight = d, Ih[t].moonTargetHeight = p, Ih[t].moonTargetXZ = f, Ih[t].moonScale = m
         }
      }();
   let xd = null,
      yd = null,
      bd = null,
      Md = null,
      Sd = null,
      wd = null,
      Td = null,
      Ed = null,
      Ad = null,
      Cd = null,
      Ld = null,
      Pd = null,
      Rd = null,
      Dd = null,
      Od = null,
      Id = null,
      zd = null,
      Nd = null;
   ! function() {
      xd = document.createElement("div"), xd.classList.add("three-planet-container"), document.body.appendChild(xd), yd = document.createElement("div"), yd.classList.add("three-planet-title"), yd.innerHTML = "Ethereum", xd.appendChild(yd), bd = document.createElement("div"), bd.classList.add("three-planet-description"), bd.innerHTML = "24h % token variation", xd.appendChild(bd), Md = document.createElement("div"), Md.classList.add("three-planet-price"), xd.appendChild(Md), zd = document.createElement("div"), zd.classList.add("three-chainlink-description");
      const t = document.getElementsByClassName("webflow-chainlink-description")[0];
      zd.innerHTML = t ? t.innerHTML : "<br>Space and Time will leverage Chainlink services such as Off-Chain Reporting to validate the results of decentralized, trust-minimized queries. <br><br> Chainlink is building a robust ecosystem including top projects like Krypton, Truflation, dClimate, and ReputationDAO", Nd = document.createElement("div"), Nd.classList.add("three-chainlink-description");
      const e = document.getElementsByClassName("webflow-sui-description")[0];
      Nd.innerHTML = e ? e.innerHTML : "The first permissionless Layer 1 blockchain designed to enable developers to build experiences that cater to the next billion users in Web3.", Sd = document.createElement("div"), Sd.classList.add("three-moon-container"), document.body.appendChild(Sd), wd = document.createElement("div"), wd.classList.add("three-moon-title"), Sd.appendChild(wd), Td = document.createElement("div"), Td.classList.add("three-moon-price"), Sd.appendChild(Td), Ed = document.createElement("div"), Ed.classList.add("three-moon-container"), document.body.appendChild(Ed), Ad = document.createElement("div"), Ad.classList.add("three-moon-title"), Ed.appendChild(Ad), Cd = document.createElement("div"), Cd.classList.add("three-moon-price"), Ed.appendChild(Cd), Ld = document.createElement("div"), Ld.classList.add("three-moon-container"), document.body.appendChild(Ld), Pd = document.createElement("div"), Pd.classList.add("three-moon-title"), Ld.appendChild(Pd), Rd = document.createElement("div"), Rd.classList.add("three-moon-price"), Ld.appendChild(Rd), Dd = document.createElement("div"), Dd.classList.add("three-moon-container"), document.body.appendChild(Dd), Od = document.createElement("div"), Od.classList.add("three-moon-title"), Dd.appendChild(Od), Id = document.createElement("div"), Id.classList.add("three-moon-price"), Dd.appendChild(Id),
         function() {
            let t = 38;
            ld = document.createElement("div"), ld.classList.add("three-st-container"), document.body.appendChild(ld), ld.style.opacity = 0, ld.style.display = "none", cd = document.createElement("div"), cd.classList.add("three-st-title"), ld.appendChild(cd);
            const e = document.getElementsByClassName("webflow-st-title")[0];
            cd.innerHTML = e ? e.innerHTML : "Space and Time.", ud = document.createElement("div"), ud.classList.add("three-st-description"), ld.appendChild(ud);
            const n = document.getElementsByClassName("webflow-st-description")[0];
            ud.innerHTML = n ? n.innerHTML : "Enabling lightspeed-fast analytics at enterprise scale"
         }()
   }(), async function() {
      let t = await fetch("https://ancient-garden-81017.herokuapp.com/arquivo.json");
      if (t.ok) {
         let e = await t.json();
         return Fd = !0, Ud = e, Uu.to(od, {
            delay: 0,
            duration: 1,
            labelOpacity: 1
         }), e
      }
      t.status
   }();
   let Ud = null,
      Fd = !1;

   function kd(t) {
      let e = 0;
      return e = t.toFixed(1), e <= .1 && (e = t.toFixed(2), e <= .01 && (e = t.toFixed(3), e <= .001 && (e = t.toFixed(4), e <= 1e-4 && (e = t.toFixed(5))))), e
   }
   var Hd = [];
   let Bd = 0;

   function Vd() {
      for (let t = 0; t < 60; t++) Hd.push(80)
   }
   Vd();
   let Gd = !1;
   const Wd = 1;

   function jd() {
      ld.style.display = "none"
   }! function(t) {
      if (t) {
         var e = document.querySelector(".touchtointeract");
         if (console.log("TouchToInteract on Mobile found" + e), null == e) return;
         e.classList.add("center-absolute")
      }
   }(td);
   const Xd = () => {
      _d = md.getDelta(), gd += _d, hh && (mh(), hh = !1),
         function() {
            for (const t in Ih) {
               const e = gd * Ih[t].orbitSpeed + Ih[t].orbitOffset,
                  n = Ih[t].orbitRadius,
                  i = n * Math.cos(e) + .5,
                  r = n * Math.sin(e) + .5;
               Ih[t].posX = i, Ih[t].posZ = r, Ih[t].timer = e, Ih[t].object.position.set(dh.fieldSize * (i - .5), Ih[t].orbitHeight + Wd, -dh.fieldSize * (r - .5));
               const a = id.position.clone();
               a.multiplyScalar(10), Ih[t].labelObject.lookAt(a), Ih[t].labelObject.position.set(0, Ih[t].size * dh.fieldSize / 2 + 1, 0);
               for (let e = 0; e < Ih[t].moonQuantity; e++) {
                  let n = !1;
                  Gh && Gh.planet.id == Ih[t].planet.id && (n = !0), Wh && Wh.planet.id == Ih[t].planet.id && (n = !0);
                  const i = Ih[t].moonSpeeds[e];
                  if (0 == n) {
                     const n = Ih[t].moonOrbits[e];
                     Ih[t].moonObjects[e].position.set(n * Math.cos(gd * i), Ih[t].moonHeight[e], n * Math.sin(gd * i))
                  } else {
                     let n = Ih[t].moonTargetXZ[e].x,
                        i = Ih[t].moonTargetXZ[e].y;
                     if (2 == sd) {
                        const e = .5 * Ih[t].size * .8 * dh.fieldSize;
                        n = e * Math.cos(.5 * -Math.PI - Ih[t].timer), i = e * Math.sin(.5 * -Math.PI - Ih[t].timer)
                     }
                     Ih[t].moonObjects[e].position.set(n, Ih[t].moonTargetHeight[e].y, i)
                  }
                  const r = Ih[t].moonScale[e].x;
                  Ih[t].moonObjects[e].scale.set(r, r, r), Ih[t].moonObjects[e].rotateX(.3 * _d)
               }
               Ih[t].labelObject.material.opacity = od.labelOpacity
            }
            zh.lookAt(id.position), Uh.lookAt(id.position.x, 0, id.position.z), Uh.rotateX(33)
         }(), fh.uniforms.uTime.value += 1 * _d, fh.uniforms.u1posX.value = Ih.planet0.posX, fh.uniforms.u1posY.value = Ih.planet0.posZ, fh.uniforms.u2posX.value = Ih.planet1.posX, fh.uniforms.u2posY.value = Ih.planet1.posZ, fh.uniforms.u3posX.value = Ih.planet2.posX, fh.uniforms.u3posY.value = Ih.planet2.posZ, fh.uniforms.u4posX.value = Ih.planet3.posX, fh.uniforms.u4posY.value = Ih.planet3.posZ, fh.uniforms.u5posX.value = Ih.planet4.posX, fh.uniforms.u5posY.value = Ih.planet4.posZ, fh.uniforms.u6posX.value = Ih.planet5.posX, fh.uniforms.u6posY.value = Ih.planet5.posZ, fh.uniforms.u7posX.value = Ih.planet6.posX, fh.uniforms.u7posY.value = Ih.planet6.posZ, fh.uniforms.uNoise1.value = dh.noise1, fh.uniforms.uSpiralSize.value = dh.spiralSize, fh.uniforms.uAccentColorMultiplier.value = ph.warpMultiplier, fh.needsUpdate = !0,
         function() {
            if (0 == sd) return Gh = null, Wh = null, void(Xh && (Xh = !1, jh ? hd(1) : Zh && hd(5)));
            if (1 == sd && (od.currentPosition.x = od.currentRadius * Math.cos(od.currentAngle), od.currentPosition.z = -od.currentRadius * Math.sin(od.currentAngle), id.position.set(od.currentPosition.x, od.currentPosition.y, od.currentPosition.z), rd.target = new mt(od.lookTarget.x, od.lookTarget.y, od.lookTarget.z), id.fov = od.currentFOV, id.updateProjectionMatrix(), gd -= _d, Xh && (Xh = !1), od.timer >= od.zoomInDuration && hd(2)), 2 == sd) {
               if (Xh) return Xh = !1, jh && jh.planet.id != Gh.planet.id && hd(1), void(jh || hd(3));
               const t = Gh.orbitSpeed * (gd + Jh.lockOffsetTime / (Gh.orbitSpeed * Gh.orbitRadius * dh.fieldSize)) + Gh.orbitOffset;
               return od.currentPosition.x = od.currentRadius * Math.cos(t), od.currentPosition.z = -od.currentRadius * Math.sin(t), void id.position.set(od.currentPosition.x, od.currentPosition.y, od.currentPosition.z)
            }
            3 == sd && (id.position.set(od.currentPosition.x, od.currentPosition.y, od.currentPosition.z), rd.target = new mt(od.lookTarget.x, od.lookTarget.y, od.lookTarget.z), id.fov = od.currentFOV, id.updateProjectionMatrix(), od.timer >= od.zoomInDuration && hd(0)), 5 == sd && (id.position.set(od.currentPosition.x, od.currentPosition.y, od.currentPosition.z), rd.target = new mt(od.lookTarget.x, od.lookTarget.y, od.lookTarget.z), zh.position.set(0, od.blackHoleLockHeight, 0), Xh && (Xh = !1)), 6 == sd && (rd.target = new mt(od.lookTarget.x, od.lookTarget.y, od.lookTarget.z), zh.position.set(0, od.blackHoleLockHeight, 0), Xh && (Xh = !1)), 7 == sd && Xh && hd(6)
         }(),
         function() {
            if (Gh) {
               if (1 == sd || nd) {
                  nd = !1;
                  let t = Gh.object.position.clone();
                  if (t.project(id), xd.style.left = Qh.xPos, xd.style.top = .5 * (1 - t.y) * $h.height + "px", zd.parentElement === xd && xd.removeChild(zd), Nd.parentElement === xd && xd.removeChild(Nd), 30 == Gh.index ? (zd.parentElement != xd && xd.appendChild(zd), xd.style.transform = "translate(0,-15%)", xd.style.display = "inline-flex", bd.style.display = "inline-flex", Md.style.display = "inline-flex") : 25 == Gh.index ? (Nd.parentElement != xd && xd.appendChild(Nd), xd.style.transform = "translate(0,-15%)", xd.style.display = "inline-flex", bd.style.display = "none", Md.style.display = "none", wd.innerHTML = "", Td.style.display = "none") : (xd.style.transform = "translate(0,-40%)", xd.style.display = "inline-flex", bd.style.display = "inline-flex", Md.style.display = "inline-flex"), Gh.moonQuantity > 0) {
                     let t = new mt(0, 0, 0);
                     Gh.moonObjects[0].getWorldPosition(t), t.project(id), Sd.style.left = Qh.xPos, Sd.style.top = .5 * (1 - t.y) * $h.height + "px", Sd.style.display = "inline-flex", 25 != Gh.index && (Td.style.display = "inline-flex")
                  } else Sd.style.display = "none";
                  if (Gh.moonQuantity > 1) {
                     let t = new mt(0, 0, 0);
                     Gh.moonObjects[1].getWorldPosition(t), t.project(id), Ed.style.left = Qh.xPos, Ed.style.top = .5 * (1 - t.y) * $h.height + "px", Ed.style.display = "inline-flex"
                  } else Ed.style.display = "none";
                  if (Gh.moonQuantity > 2) {
                     let t = new mt(0, 0, 0);
                     Gh.moonObjects[2].getWorldPosition(t), t.project(id), Ld.style.left = Qh.xPos, Ld.style.top = .5 * (1 - t.y) * $h.height + "px", Ld.style.display = "inline-flex"
                  } else Ld.style.display = "none";
                  if (Gh.moonQuantity > 3) {
                     let t = new mt(0, 0, 0);
                     Gh.moonObjects[3].getWorldPosition(t), t.project(id), Dd.style.left = Qh.xPos, Dd.style.top = .5 * (1 - t.y) * $h.height + "px", Dd.style.display = "inline-flex"
                  } else Dd.style.display = "none"
               }
            } else 5 == sd || 7 == sd ? (ld.style.left = .5 * $h.width * Qh.onethird + "px", ld.style.top = .42 * $h.height + "px", td && (ld.style.left = .5 * $h.width + "px"), td && (ld.style.top = .35 * $h.height + "px")) : (zd.parentElement === xd && xd.removeChild(zd), Nd.parentElement === xd && xd.removeChild(Nd), xd.style.display = "none", Sd.style.display = "none", Ed.style.display = "none", Ld.style.display = "none", Dd.style.display = "none");
            xd.style.opacity = od.uiOpacity, Sd.style.opacity = od.uiOpacity, Ed.style.opacity = od.uiOpacity, Ld.style.opacity = od.uiOpacity, Dd.style.opacity = od.uiOpacity
         }(), Bd < 5 && (Hd.push(1 / _d), Hd.shift(), (Hd.reduce(((t, e) => t + e), 0) / Hd.length || 0) < 40 && (Bd++, Vd())), rd.update();
      const t = Math.abs(.01 * id.position.y);
      if (Uh.scale.set(1, 1, Math.max(Math.min(2 * t, .4), .04)), Uh.material.opacity = Math.min(.6, Math.max(.2, 2 * t)), Hh.lookAt(id.position), ad.render(lh, id), vd <= 0 && Bd < 1) {
         for (const t in Ih) {
            Ih[t].object.visible = !1, Ih[t].labelObject.visible = !1;
            for (let e = 0; e < Ih[t].moonQuantity; e++) Ih[t].moonObjects[e].visible = !1
         }
         Nh.visible = !1, Fh.visible = !1, _h.update(ad, lh), gh.needsUpdate = !0, kh.envMap = gh.texture;
         for (const t in Ih) {
            Ih[t].object.visible = !0, Ih[t].labelObject.visible = !0;
            for (let e = 0; e < Ih[t].moonQuantity; e++) Ih[t].moonObjects[e].visible = !0
         }
         Nh.visible = !0, Fh.visible = !0, vd++
      } else vd = 0;
      window.requestAnimationFrame(Xd)
   };
   Xd()
})();
//# sourceMappingURL=bundle.js.map
