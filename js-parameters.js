  ! function(c, i, t) {
            var f, o = /^data-(.+)/,
                u = 'IntersectionObserver',
                r = /p/.test(i.readyState),
                s = [],
                a = s.slice,
                d = 'lazied',
                n = 'load',
                e = 'pageshow',
                l = 'forEach',
                m = 'hasAttribute',
                h = 'shift';

            function p(e) {
                i.head.appendChild(e)
            }

            function v(e, n) {
                a.call(e.attributes)[l](n)
            }

            function y(e, n, t, o) {
                return o = (o = n ? i.getElementById(n) : o) || i.createElement(e), n && (o.id = n), t && (o.onload = t), o
            }

            function b(e, n) {
                return a.call((n || i).querySelectorAll(e))
            }

            function g(t, e) {
                b('source', t)[l](g), v(t, function(e, n) {
                    (n = o.exec(e.name)) && (t[n[1]] = e.value)
                }), e && (t.className += ' ' + e), n in t && t[n]()
            }

            function I(e) {
                f(function(o) {
                    o = b(e || '[type=deferjs]'),
                        function e(n, t) {
                            (n = o[h]()) && (n.parentNode.removeChild(n), (t = y(n.nodeName)).text = n.text, v(n, function(e) {
                                'type' != e.name && (t[e.name] = e.value)
                            }), t.src && !t[m]('async') ? (t.onload = t.onerror = e, p(t)) : (p(t), e()))
                        }()
                })
            }(f = function(e, n) {
                r ? t(e, n) : s.push(e, n)
            }).all = I, f.js = function(n, t, e, o) {
                f(function(e) {
                    (e = y('SCRIPT', t, o)).src = n, p(e)
                }, e)
            }, f.css = function(n, t, e, o) {
                f(function(e) {
                    (e = y('LINK', t, o)).rel = 'stylesheet', e.href = n, p(e)
                }, e)
            }, f.dom = function(e, n, t, o, i) {
                function r(e) {
                    o && !1 === o(e) || g(e, t)
                }
                f(function(t) {
                    t = u in c && new c[u](function(e) {
                        e[l](function(e, n) {
                            e.isIntersecting && (n = e.target) && (t.unobserve(n), r(n))
                        })
                    }, i), b(e || '[data-src]')[l](function(e) {
                        e[m](d) || (e.setAttribute(d, ''), t ? t.observe(e) : r(e))
                    })
                }, n)
            }, f.reveal = g, c.Defer = f, c.addEventListener('on' + e in c ? e : n, function() {
                for (I(); s[0]; t(s[h](), s[h]())) r = 1
            })
        }(this, document, setTimeout),
        function(e, n) {
            e.defer = n = e.Defer, e.deferscript = n.js, e.deferstyle = n.css, e.deferimg = e.deferiframe = n.dom
        }(this);
