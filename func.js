var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

function n(e) {
    return e < 10 ? "0" + e : e;
}

module.exports = {
    formatTime: function(n) {
        var t = n.getFullYear(), r = n.getMonth() + 1, a = n.getDate(), u = n.getHours(), i = n.getMinutes(), o = n.getSeconds();
        return [ t, r, a ].map(e).join("/") + " " + [ u, i, o ].map(e).join(":");
    },
    sha1: function(e) {
        var n, t, r = new Uint8Array(function(e) {
            var n, t, r, a = [];
            for (n = 0; n < e.length; n++) (t = e.charCodeAt(n)) < 128 ? a.push(t) : t < 2048 ? a.push(192 + (t >> 6 & 31), 128 + (63 & t)) : ((r = 55296 ^ t) >> 10 == 0 ? (t = (r << 10) + (56320 ^ e.charCodeAt(++n)) + 65536, 
            a.push(240 + (t >> 18 & 7), 128 + (t >> 12 & 63))) : a.push(224 + (t >> 12 & 15)), 
            a.push(128 + (t >> 6 & 63), 128 + (63 & t)));
            return a;
        }(e)), a = 16 + (r.length + 8 >>> 6 << 4);
        for ((e = new Uint8Array(a << 2)).set(new Uint8Array(r.buffer)), e = new Uint32Array(e.buffer), 
        t = new DataView(e.buffer), s = 0; s < a; s++) e[s] = t.getUint32(s << 2);
        e[r.length >> 2] |= 128 << 24 - 8 * (3 & r.length), e[a - 1] = r.length << 3;
        var u = [], i = [ function() {
            return g[1] & g[2] | ~g[1] & g[3];
        }, function() {
            return g[1] ^ g[2] ^ g[3];
        }, function() {
            return g[1] & g[2] | g[1] & g[3] | g[2] & g[3];
        }, function() {
            return g[1] ^ g[2] ^ g[3];
        } ], o = function(e, n) {
            return e << n | e >>> 32 - n;
        }, f = [ 1518500249, 1859775393, -1894007588, -899497514 ], g = [ 1732584193, -271733879, null, null, -1009589776 ];
        for (g[2] = ~g[0], g[3] = ~g[1], s = 0; s < e.length; s += 16) {
            var c = g.slice(0);
            for (n = 0; n < 80; n++) u[n] = n < 16 ? e[s + n] : o(u[n - 3] ^ u[n - 8] ^ u[n - 14] ^ u[n - 16], 1), 
            t = o(g[0], 5) + i[n / 20 | 0]() + g[4] + u[n] + f[n / 20 | 0] | 0, g[1] = o(g[1], 30), 
            g.pop(), g.unshift(t);
            for (n = 0; n < 5; n++) g[n] = g[n] + c[n] | 0;
        }
        t = new DataView(new Uint32Array(g).buffer);
        for (var s = 0; s < 5; s++) g[s] = t.getUint32(s << 2);
        return Array.prototype.map.call(new Uint8Array(new Uint32Array(g).buffer), function(e) {
            return (e < 16 ? "0" : "") + e.toString(16);
        }).join("");
    },
    todayData: function() {
        var e = new Date(), t = (e.getFullYear(), e.getMonth() + 1), r = e.getDate();
        return e.getHours(), e.getMinutes(), e.getSeconds(), n(t) + "月" + n(r) + "日";
    },
    tabBarOpen: function(e) {
        var n;
        switch (e) {
          case 0:
            n = "/page/index/index";
            break;

          case 1:
            n = "/page/match/match";
            break;

          case 2:
            n = "/page/news/news";
            break;

          case 3:
            n = "/page/myCenter/myCenter";
            break;

          default:
            n = "/page/index/index";
        }
        wx.navigateTo({
            url: n
        });
    }
};