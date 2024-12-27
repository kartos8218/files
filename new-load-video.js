const a0_0x5cee06 = a0_0x5c76;
                                    (function(_0x590371, _0x3bb143) {
                                        const _0xcaf17 = a0_0x5c76,
                                            _0x530bbd = _0x590371();
                                        while (!![]) {
                                            try {
                                                const _0x46d4b2 = -parseInt(_0xcaf17(0x112)) / 0x1 + -parseInt(_0xcaf17(0xe6)) / 0x2 + parseInt(_0xcaf17(0x130)) / 0x3 + -parseInt(_0xcaf17(0xf5)) / 0x4 + parseInt(_0xcaf17(0xc6)) / 0x5 + -parseInt(_0xcaf17(0xd3)) / 0x6 * (parseInt(_0xcaf17(0xe1)) / 0x7) + parseInt(_0xcaf17(0x106)) / 0x8 * (parseInt(_0xcaf17(0xc4)) / 0x9);
                                                if (_0x46d4b2 === _0x3bb143)
                                                    break;
                                                else
                                                    _0x530bbd['push'](_0x530bbd['shift']());
                                            } catch (_0x52f137) {
                                                _0x530bbd['push'](_0x530bbd['shift']());
                                            }
                                        }
                                    }(a0_0x5df4, 0x467bb));
                                    let apiDomain = a0_0x5cee06(0x132),
                                        dir_root = document[a0_0x5cee06(0xb6)](a0_0x5cee06(0xa3)),
                                        sr = ScrollReveal(),
                                        IsCheckParameter = ![];
                                    document[a0_0x5cee06(0xb6)](a0_0x5cee06(0xf2))[a0_0x5cee06(0xfd)](a0_0x5cee06(0xd5), async () => {
                                            await fetchDataAndLog();
                                        }),
                                        window[a0_0x5cee06(0xfd)]('popstate', function(_0x3ff12a) {
                                            const _0xc22e42 = a0_0x5cee06;
                                            location[_0xc22e42(0xfa)]();
                                        });
                                    if (!IsCheckParameter) {
                                        IsCheckParameter = !![];
                                        const urlParams = new URLSearchParams(window[a0_0x5cee06(0x10e)][a0_0x5cee06(0xc3)]),
                                            q = urlParams['get']('q');
                                        document[a0_0x5cee06(0xb6)](a0_0x5cee06(0x144))[a0_0x5cee06(0xf3)] = q,
                                            fetchDataAndLog();
                                    }

                                    function addParameterWithoutRefresh(_0x5908a1, _0x17f126) {
                                        const _0x5cff6b = a0_0x5cee06,
                                            _0x44afc2 = new URLSearchParams(window[_0x5cff6b(0x10e)][_0x5cff6b(0xc3)]);
                                        _0x44afc2[_0x5cff6b(0x12b)](_0x5908a1, _0x17f126);
                                        const _0x989d70 = '' + window[_0x5cff6b(0x10e)][_0x5cff6b(0x128)] + window['location'][_0x5cff6b(0xce)] + '?' + _0x44afc2[_0x5cff6b(0xde)]();
                                        history['pushState']({
                                            'path': _0x989d70
                                        }, '', _0x989d70);
                                    }
                                    async function fetchDataAndLog() {
                                        const _0x2db93c = a0_0x5cee06,
                                            _0x5b644a = document[_0x2db93c(0xb6)](_0x2db93c(0x144))['value'][_0x2db93c(0xc8)]();
                                        _0x5b644a !== '' ? (loading(!![]),
                                            _0x5b644a[_0x2db93c(0xba)](_0x2db93c(0x11f)) ? (addParameterWithoutRefresh('q', _0x5b644a),
                                                getfileInfo(_0x5b644a)[_0x2db93c(0xa2)](_0x59eab6 => dataFrist(_0x59eab6))[_0x2db93c(0x136)](_0x3c18c7 => {
                                                    invalidErrorShow(!![], 'Please\x20ensure\x20your\x20network\x20connection\x20is\x20stable.'),
                                                        loading(![]);
                                                })) : (addParameterWithoutRefresh('q', _0x5b644a),
                                                GetSearchResults(_0x5b644a)[_0x2db93c(0xa2)](_0x230e5d => showSearchResults(_0x230e5d))['catch'](_0x94a3a3 => {
                                                    loading(![]);
                                                })),
                                            removeAllChildren(dir_root)) : Toast[_0x2db93c(0xa5)]('Error', _0x2db93c(0xb2));
                                    }

                                    function ShowSearchElem(_0x4e2d2b, _0x587937, _0x2d9ce8) {
                                        const _0x15595d = a0_0x5cee06,
                                            _0x19171e = document[_0x15595d(0x138)]('div');
                                        _0x19171e[_0x15595d(0xe4)] = 'searchResultsItem\x20flex\x20items-center\x20bg-black\x20w-[95vw]\x20rounded-[14px]\x20p-2\x20bg-black';
                                        const _0x5bce87 = document[_0x15595d(0x138)](_0x15595d(0xa9));
                                        _0x5bce87[_0x15595d(0xe4)] = 'w-10\x20h-10\x20bg-gray-300\x20rounded-[14px]\x20flex\x20justify-center\x20items-center\x20mr-2\x20flex-shrink-0';
                                        const _0x42ef23 = document['createElement'](_0x15595d(0x12e));
                                        _0x42ef23[_0x15595d(0x111)] = _0x15595d(0x11e),
                                            _0x42ef23[_0x15595d(0xa1)] = _0x587937,
                                            _0x42ef23[_0x15595d(0xe4)] = 'w-4/5\x20h-4/5',
                                            _0x42ef23[_0x15595d(0xd4)][_0x15595d(0xee)] = 'none',
                                            _0x42ef23[_0x15595d(0xb9)] = function() {
                                                const _0x31264c = _0x15595d;
                                                _0x42ef23['style']['display'] = _0x31264c(0xc9);
                                            },
                                            _0x42ef23['src'] = _0x4e2d2b,
                                            _0x5bce87[_0x15595d(0x13e)](_0x42ef23);
                                        const _0x381544 = document[_0x15595d(0x138)](_0x15595d(0xa9));
                                        _0x381544[_0x15595d(0xe4)] = _0x15595d(0xa8),
                                            _0x381544[_0x15595d(0x12c)] = _0x587937;
                                        const _0x839599 = document['createElement'](_0x15595d(0xa9));
                                        _0x839599[_0x15595d(0xe4)] = _0x15595d(0x13b),
                                            _0x839599['textContent'] = _0x15595d(0x110),
                                            _0x839599['onclick'] = function() {
                                                const _0x1a5c57 = _0x15595d;
                                                navigator[_0x1a5c57(0xdf)]['writeText'](_0x2d9ce8);
                                            },
                                            _0x19171e[_0x15595d(0x13e)](_0x5bce87),
                                            _0x19171e['appendChild'](_0x381544),
                                            _0x19171e[_0x15595d(0x13e)](_0x839599),
                                            dir_root[_0x15595d(0x13e)](_0x19171e);
                                    }
                                    async function showSearchResults(_0x5ab189) {
                                        const _0x147631 = a0_0x5cee06;
                                        sr[_0x147631(0xeb)](_0x147631(0xbd)),
                                            loading(![]),
                                            _0x5ab189 = JSON[_0x147631(0xf6)](_0x5ab189);
                                        const _0x28e3c7 = _0x5ab189[_0x147631(0xf7)][_0x147631(0x11b)][_0x147631(0x13c)];
                                        for (const _0x4213e7 of _0x28e3c7) {
                                            if (_0x4213e7[_0x147631(0x10c)] !== null) {
                                                const _0x26e059 = _0x4213e7['platform_resource']['file_name'],
                                                    _0x2425f8 = _0x4213e7[_0x147631(0x10c)][_0x147631(0x113)],
                                                    _0x84d1b7 = _0x4213e7[_0x147631(0x10c)][_0x147631(0x102)];
                                                ShowSearchElem(_0x84d1b7, _0x26e059, _0x2425f8);
                                            } else {
                                                const _0x50efff = _0x4213e7[_0x147631(0xdc)]['external_urls'][0x0],
                                                    _0x958f83 = _0x50efff[_0x147631(0xc5)],
                                                    _0x3db10e = _0x50efff[_0x147631(0x113)],
                                                    _0xaebcee = _0x50efff[_0x147631(0xca)];
                                                ShowSearchElem(_0xaebcee, _0x958f83, _0x3db10e);
                                            }
                                        }
                                        sr[_0x147631(0x140)](_0x147631(0x118), {
                                            'reset': !![]
                                        });
                                    }
                                    async function dataFrist(_0x4123e1) {
                                        const _0x55a19c = a0_0x5cee06;
                                        sr[_0x55a19c(0xeb)]('.download-prompt'),
                                            loading(![]);
                                        if (_0x4123e1 === 0x1f4)
                                            return 0x1f4;
                                        for (const _0x25f8f3 of _0x4123e1) {
                                            const _0x4d7624 = _0x25f8f3[_0x55a19c(0x115)],
                                                _0x1698af = _0x25f8f3['fs_id'],
                                                _0x2bbdde = _0x25f8f3['shareid'],
                                                _0xfed27f = _0x25f8f3['uk'],
                                                _0x5a8682 = convertSize(_0x25f8f3[_0x55a19c(0x12d)]),
                                                _0x6b58ce = parseInt(_0x25f8f3[_0x55a19c(0xd2)]),
                                                _0x4ad36f = document[_0x55a19c(0x138)](_0x55a19c(0xa9)),
                                                _0x3cfacc = document[_0x55a19c(0x138)]('div'),
                                                _0x42c105 = document[_0x55a19c(0x138)](_0x55a19c(0xa9)),
                                                _0x55f956 = document[_0x55a19c(0x138)]('div'),
                                                _0x336875 = document[_0x55a19c(0x138)](_0x55a19c(0xb1)),
                                                _0x33d24f = document[_0x55a19c(0x138)]('button');
                                            _0x4ad36f[_0x55a19c(0xbc)][_0x55a19c(0x125)](_0x55a19c(0xea)),
                                                _0x42c105[_0x55a19c(0xbc)][_0x55a19c(0x125)]('file-info'),
                                                _0x55f956[_0x55a19c(0xbc)][_0x55a19c(0x125)](_0x55a19c(0x114)),
                                                _0x336875[_0x55a19c(0xbc)][_0x55a19c(0x125)](_0x55a19c(0xec)),
                                                _0x33d24f[_0x55a19c(0xbc)][_0x55a19c(0x125)](_0x55a19c(0xec)),
                                                _0x42c105[_0x55a19c(0x12c)] = 'Filename:\x20' + _0x4d7624,
                                                _0x55f956['textContent'] = _0x55a19c(0x121) + _0x5a8682,
                                                _0x336875[_0x55a19c(0x12c)] = _0x55a19c(0x11c),
                                                _0x33d24f[_0x55a19c(0x12c)] = _0x55a19c(0xe2),
                                                _0x336875[_0x55a19c(0xcf)] = function() {
                                                    const _0x7732ec = download(_0x2bbdde, _0xfed27f, _0x1698af, !![]);
                                                },
                                                _0x33d24f[_0x55a19c(0xcf)] = function() {
                                                    const _0x28b91d = download(_0x2bbdde, _0xfed27f, _0x1698af, ![]);
                                                },
                                                _0x3cfacc[_0x55a19c(0x11d)]('id', _0x55a19c(0xd1));
                                            if (_0x6b58ce === 0x3) {
                                                const _0x4877f8 = _0x25f8f3[_0x55a19c(0x116)];
                                                var _0x5750e7 = document[_0x55a19c(0x138)](_0x55a19c(0x12e));
                                                _0x5750e7[_0x55a19c(0x111)] = _0x4877f8,
                                                    _0x5750e7['alt'] = _0x4d7624;
                                                var _0x3362fb = document['createElement'](_0x55a19c(0x12e));
                                                _0x3362fb['setAttribute']('id', _0x55a19c(0xfc)),
                                                    _0x3362fb[_0x55a19c(0x11d)](_0x55a19c(0x111), _0x55a19c(0x127)),
                                                    _0x3cfacc[_0x55a19c(0x13e)](_0x5750e7),
                                                    _0x3cfacc[_0x55a19c(0x13e)](_0x3362fb);
                                            } else {
                                                if (_0x6b58ce === 0x1) {
                                                    const _0x5d37f8 = _0x25f8f3[_0x55a19c(0x116)];
                                                    videoElement = document[_0x55a19c(0x138)](_0x55a19c(0x10d)),
                                                        videoElement[_0x55a19c(0xd4)][_0x55a19c(0x137)]('--plyr-color-main', _0x55a19c(0xaf)),
                                                        videoElement['setAttribute']('id', _0x55a19c(0x135)),
                                                        videoElement[_0x55a19c(0x11d)]('class', _0x55a19c(0xfb)),
                                                        videoElement[_0x55a19c(0x11d)](_0x55a19c(0x10b), ''),
                                                        videoElement[_0x55a19c(0x11d)](_0x55a19c(0x13d), _0x55a19c(0xe3)),
                                                        videoElement[_0x55a19c(0x11d)](_0x55a19c(0xb0), _0x5d37f8),
                                                        sourceElement = document[_0x55a19c(0x138)](_0x55a19c(0xcd));
                                                    const _0x4ffb49 = {
                                                            'shareid': _0x2bbdde,
                                                            'uk': _0xfed27f,
                                                            'fs_id': _0x1698af
                                                        },
                                                        _0x34f27e = apiDomain + _0x55a19c(0xef) + _0x55a19c(0x12f) + encrypt(JSON[_0x55a19c(0xb7)](_0x4ffb49));
                                                    console[_0x55a19c(0x13a)](_0x34f27e),
                                                        sourceElement[_0x55a19c(0x11d)](_0x55a19c(0x111), _0x34f27e),
                                                        sourceElement[_0x55a19c(0x11d)](_0x55a19c(0x139), 'application/x-mpegURL'),
                                                        videoElement[_0x55a19c(0x13e)](sourceElement),
                                                        _0x3cfacc[_0x55a19c(0x13e)](videoElement);
                                                    var _0x3362fb = document[_0x55a19c(0x138)](_0x55a19c(0x12e));
                                                    _0x3362fb[_0x55a19c(0x11d)]('id', _0x55a19c(0xfc)),
                                                        _0x3362fb['setAttribute']('src', _0x55a19c(0xd6)),
                                                        _0x3cfacc[_0x55a19c(0x13e)](_0x3362fb);
                                                } else {
                                                    var _0x5750e7 = document[_0x55a19c(0x138)]('img');
                                                    _0x5750e7[_0x55a19c(0x111)] = _0x55a19c(0x107),
                                                        _0x5750e7[_0x55a19c(0xa1)] = _0x4d7624,
                                                        _0x5750e7[_0x55a19c(0x11d)]('id', _0x55a19c(0x105)),
                                                        _0x3cfacc[_0x55a19c(0x13e)](_0x5750e7);
                                                    var _0x3362fb = document[_0x55a19c(0x138)](_0x55a19c(0x12e));
                                                    _0x3362fb[_0x55a19c(0x11d)]('id', _0x55a19c(0xfc)),
                                                        _0x3362fb[_0x55a19c(0x11d)](_0x55a19c(0x111), _0x55a19c(0xf0)),
                                                        _0x3cfacc['appendChild'](_0x3362fb);
                                                }
                                            }
                                            _0x4ad36f[_0x55a19c(0x13e)](_0x3cfacc),
                                                _0x4ad36f[_0x55a19c(0x13e)](_0x42c105),
                                                _0x4ad36f[_0x55a19c(0x13e)](_0x55f956),
                                                _0x4ad36f[_0x55a19c(0x13e)](_0x336875),
                                                _0x4ad36f[_0x55a19c(0x13e)](_0x33d24f),
                                                dir_root['appendChild'](_0x4ad36f);
                                        }
                                        players = Plyr[_0x55a19c(0xc0)](_0x55a19c(0xa7)), {
                                                'title': name,
                                                'controls': [_0x55a19c(0x104), _0x55a19c(0xe7), _0x55a19c(0xb3), 'fast-forward', 'progress', _0x55a19c(0xf4), _0x55a19c(0x148), 'mute', _0x55a19c(0x100), 'settings', _0x55a19c(0xf8)],
                                                'settings': [_0x55a19c(0x142), _0x55a19c(0x143), _0x55a19c(0x145), _0x55a19c(0xac)]
                                            },
                                            sr['reveal'](_0x55a19c(0xbd), {
                                                'reset': !![]
                                            });
                                    }

                                    function loading(_0x452037) {
                                        const _0x2c6d72 = a0_0x5cee06;
                                        a = document[_0x2c6d72(0xb6)](_0x2c6d72(0x14b)),
                                            a[_0x2c6d72(0xd4)]['opacity'] = _0x452037 ? '1' : '0',
                                            a[_0x2c6d72(0xd4)][_0x2c6d72(0xdd)] = _0x452037 ? _0x2c6d72(0x146) : _0x2c6d72(0x12a);
                                    }
                                    class Toast {
                                        static[a0_0x5cee06(0xa5)](_0x3c08a1, _0x1dae3f) {
                                            const _0x20980d = a0_0x5cee06;
                                            iziToast['info']({
                                                'id': _0x20980d(0xbf),
                                                'title': _0x3c08a1,
                                                'message': _0x1dae3f,
                                                'position': _0x20980d(0xe9)
                                            });
                                        }
                                    }

                                    function convertSize(_0xeaafa8) {
                                        const _0x5d8504 = a0_0x5cee06,
                                            _0x325f93 = ['B', 'KB', 'MB', 'GB', 'TB'];
                                        let _0x701127 = 0x0;
                                        _0xeaafa8 = parseFloat(_0xeaafa8);
                                        while (_0xeaafa8 >= 0x400 && _0x701127 < _0x325f93['length'] - 0x1) {
                                            _0xeaafa8 /= 0x400,
                                                _0x701127++;
                                        }
                                        return _0xeaafa8[_0x5d8504(0x122)](0x2) + '\x20' + _0x325f93[_0x701127];
                                    }

                                    function tohex(_0x5b5959) {
                                        const _0xdaedac = a0_0x5cee06;
                                        let _0x6a9d = '';
                                        for (let _0x402c8c = 0x0; _0x402c8c < _0x5b5959[_0xdaedac(0xbb)]; _0x402c8c++) {
                                            let _0xbb28fc = _0x5b5959[_0xdaedac(0xb5)](_0x402c8c)['toString'](0x10);
                                            _0x6a9d += ('00' + _0xbb28fc)[_0xdaedac(0xe8)](-0x2);
                                        }
                                        return _0x6a9d;
                                    }

                                    function encrypt(_0x2eb514) {
                                        const _0x437ea6 = a0_0x5cee06;
                                        var _0x1baf92 = CryptoJS[_0x437ea6(0xbe)][_0x437ea6(0xab)][_0x437ea6(0xf6)](_0x437ea6(0xa4)[_0x437ea6(0x10f)](0x20, '\x00')),
                                            _0x1940da = CryptoJS['enc'][_0x437ea6(0xab)]['parse'](_0x437ea6(0xa4)['padEnd'](0x10, '\x00')),
                                            _0x57f036 = CryptoJS[_0x437ea6(0xf1)]['encrypt'](_0x2eb514, _0x1baf92, {
                                                'iv': _0x1940da
                                            });
                                        return tohex(_0x57f036['toString']());
                                    }

                                    function download(_0x1b9f84, _0x5cbf3a, _0x306344, _0x25f048) {
                                        const _0x4b3c05 = a0_0x5cee06,
                                            _0x2c4cab = new XMLHttpRequest();
                                        _0x2c4cab[_0x4b3c05(0xfd)](_0x4b3c05(0x129), function() {
                                            const _0xe0ba05 = _0x4b3c05;
                                            if (this['readyState'] === this[_0xe0ba05(0x11a)]) {
                                                let _0x57f12f;
                                                _0x25f048 ? b = JSON['parse'](this[_0xe0ba05(0xcc)])[_0xe0ba05(0xaa)] : b = JSON[_0xe0ba05(0xf6)](this['responseText'])['downloadUrl'];
                                                var _0x32f691 = document[_0xe0ba05(0x138)]('a');
                                                _0x32f691['rel'] = _0xe0ba05(0x134),
                                                    _0x32f691[_0xe0ba05(0xd7)] = "",
                                                    _0x32f691[_0xe0ba05(0xe0)] = _0xe0ba05(0x13f),
                                                    _0x32f691[_0xe0ba05(0xd5)]();
                                            }
                                        });
                                        const _0x24f530 = {
                                            'shareid': _0x1b9f84,
                                            'uk': _0x5cbf3a,
                                            'fs_id': _0x306344
                                        };
                                        _0x2c4cab['open'](_0x4b3c05(0x103), apiDomain + '/download?data=' + encrypt(JSON[_0x4b3c05(0xb7)](_0x24f530)), !![]),
                                            _0x2c4cab[_0x4b3c05(0x109)]();
                                    }

                                    function removeAllChildren(_0x12ed4b) {
                                        const _0x146df4 = a0_0x5cee06;
                                        while (_0x12ed4b[_0x146df4(0x108)]) {
                                            _0x12ed4b['removeChild'](_0x12ed4b['firstChild']);
                                        }
                                    }
                                    async function getfileInfo(_0x1785b3) {
                                        const _0x2c5ba7 = a0_0x5cee06;
                                        let _0x4a7a22 = [],
                                            _0x155e87 = [],
                                            _0x3a6032 = await GetShortUrlInfo(_0x1785b3);
                                        if (_0x3a6032 === 0x1f4)
                                            return 0x1f4;
                                        const _0xda58fe = JSON[_0x2c5ba7(0xf6)](_0x3a6032);
                                        let _0x5dcfec = _0xda58fe[0x0],
                                            _0x155013 = _0xda58fe[0x1],
                                            _0x4c9185 = _0xda58fe[0x2];
                                        for (let _0x4d15fc of _0x5dcfec) {
                                            if (parseInt(_0x4d15fc[_0x2c5ba7(0xd0)]) === 0x1)
                                                _0x155e87['push']({
                                                    'shareid': _0x155013,
                                                    'uk': _0x4c9185,
                                                    'fs_id': _0x4d15fc[_0x2c5ba7(0x14a)]
                                                });
                                            else
                                                parseInt(_0x4d15fc[_0x2c5ba7(0xd0)]) === 0x0 && _0x4a7a22[_0x2c5ba7(0x119)]({
                                                    'shareid': _0x155013,
                                                    'uk': _0x4c9185,
                                                    'category': _0x4d15fc['category'],
                                                    'fs_id': _0x4d15fc[_0x2c5ba7(0x14a)],
                                                    'server_filename': _0x4d15fc['server_filename'],
                                                    'size': _0x4d15fc['size'],
                                                    'thumbnail': _0x4d15fc[_0x2c5ba7(0xb4)][_0x2c5ba7(0x10a)] || 'https://cdn-sc-g.sharechat.com/33d5318_1c8/11d8de0c_1715802101751_sc.png'
                                                });
                                        }
                                        async function _0x2d343a(_0x4aabc8, _0x381cc2, _0x44e88f) {
                                            const _0x177dfd = _0x2c5ba7;
                                            let _0x3d7284 = await GetChildInfo(_0x4aabc8, _0x381cc2, _0x44e88f);
                                            const _0x496da2 = JSON[_0x177dfd(0xf6)](_0x3d7284);
                                            let _0x5957f6 = [],
                                                _0x1b46e7 = [];
                                            for (let _0x569982 of _0x496da2) {
                                                if (parseInt(_0x569982[_0x177dfd(0xd0)]) === 0x1)
                                                    _0x1b46e7['push']({
                                                        'shareid': _0x4aabc8,
                                                        'uk': _0x381cc2,
                                                        'fs_id': _0x569982[_0x177dfd(0x14a)]
                                                    });
                                                else
                                                    parseInt(_0x569982['isdir']) === 0x0 && _0x5957f6['push']({
                                                        'shareid': _0x4aabc8,
                                                        'uk': _0x381cc2,
                                                        'category': _0x569982[_0x177dfd(0xd2)],
                                                        'fs_id': _0x569982[_0x177dfd(0x14a)],
                                                        'server_filename': _0x569982[_0x177dfd(0x115)],
                                                        'size': _0x569982[_0x177dfd(0x12d)],
                                                        'thumbnail': _0x569982[_0x177dfd(0xb4)][_0x177dfd(0x10a)] || _0x177dfd(0x107)
                                                    });
                                            }
                                            return {
                                                'childJsonData': _0x5957f6,
                                                'childDirData': _0x1b46e7
                                            };
                                        }
                                        for (let _0x58cbed of _0x155e87) {
                                            let {
                                                shareid: _0x47490a,
                                                uk: _0x1680f2,
                                                fs_id: _0x10629d
                                            } = _0x58cbed, {
                                                childJsonData: _0x554965,
                                                childDirData: _0x394324
                                            } = await _0x2d343a(_0x47490a, _0x1680f2, _0x10629d);
                                            _0x4a7a22[_0x2c5ba7(0x119)](..._0x554965),
                                                _0x155e87['push'](..._0x394324);
                                        }
                                        return _0x4a7a22;
                                    }
                                    async function GetShortUrlInfo(_0xe68568) {
                                        const _0x417a23 = a0_0x5cee06,
                                            _0x2a8ea1 = encrypt(_0xe68568);
                                        let _0x2801af = await fetch(apiDomain + _0x417a23(0xf9) + _0x2a8ea1);
                                        const _0x22f3a0 = await _0x2801af['text'](),
                                            _0x506894 = JSON[_0x417a23(0xf6)](_0x22f3a0)[0x1];
                                        return _0x506894 === '0' ? (invalidErrorShow(!![], _0x417a23(0x147)),
                                            0x1f4) : _0x22f3a0;
                                    }
                                    async function GetChildInfo(_0x4e716c, _0x114410, _0x57dd42) {
                                        const _0x3b2bb1 = a0_0x5cee06;
                                        let _0xf6acc7 = await fetch(apiDomain + '/list?shareid=' + _0x4e716c + _0x3b2bb1(0x120) + _0x114410 + _0x3b2bb1(0xed) + _0x57dd42);
                                        return await _0xf6acc7[_0x3b2bb1(0xc2)]();
                                    }
                                    async function GetSearchResults(_0x9793ba) {
                                        const _0x503124 = a0_0x5cee06;
                                        let _0x19bef5 = await fetch(apiDomain + '/search?q=' + _0x9793ba);
                                        return await _0x19bef5[_0x503124(0xc2)]();
                                    }
                                    document[a0_0x5cee06(0xb6)]('pasteBtn')['addEventListener'](a0_0x5cee06(0xd5), async () => pasteText());

                                    function pasteText() {
                                        const _0x2cce16 = a0_0x5cee06;
                                        let _0x5106a9 = document[_0x2cce16(0xb6)](_0x2cce16(0x144));
                                        navigator[_0x2cce16(0xdf)][_0x2cce16(0x149)]()['then'](_0xdb2e14 => {
                                            const _0x1405ca = _0x2cce16;
                                            _0x5106a9[_0x1405ca(0xf3)] = _0xdb2e14;
                                        })[_0x2cce16(0x136)](_0x450747 => {
                                            const _0x5244d1 = _0x2cce16;
                                            console[_0x5244d1(0x101)](_0x5244d1(0xc7), _0x450747);
                                        });
                                    }
                                    document[a0_0x5cee06(0xfd)](a0_0x5cee06(0x131), () => {
                                        const _0x5b209f = a0_0x5cee06,
                                            _0x19b8cd = [_0x5b209f(0x124), _0x5b209f(0xad), 'Search\x20Engine'];
                                        let _0x198d83 = 0x0;
                                        const _0x492129 = document['getElementById']('animated-text');

                                        function _0x2f06ca() {
                                            const _0x4cfd71 = _0x5b209f;
                                            gsap['to'](_0x492129, {
                                                'duration': 0.5,
                                                'opacity': 0x0,
                                                'y': -0x32,
                                                'ease': _0x4cfd71(0xd9),
                                                'onComplete': () => {
                                                    const _0x14b2ba = _0x4cfd71;
                                                    _0x198d83 = (_0x198d83 + 0x1) % _0x19b8cd[_0x14b2ba(0xbb)],
                                                        _0x492129[_0x14b2ba(0x12c)] = _0x19b8cd[_0x198d83],
                                                        gsap[_0x14b2ba(0xc1)](_0x492129, {
                                                            'y': 0x32,
                                                            'opacity': 0x0
                                                        }, {
                                                            'duration': 0.5,
                                                            'opacity': 0x1,
                                                            'y': 0x0,
                                                            'ease': _0x14b2ba(0x117)
                                                        });
                                                }
                                            });
                                        }
                                        setInterval(_0x2f06ca, 0x7d0);
                                    });
                                    const text = document[a0_0x5cee06(0x133)]('.animation-container'),
                                        words = text['textContent'][a0_0x5cee06(0xa6)]('\x20');
                                    text[a0_0x5cee06(0xdb)] = '',
                                        words[a0_0x5cee06(0xda)]((_0x7ef1d7, _0x4b3872) => {
                                            const _0x21253b = a0_0x5cee06,
                                                _0x421124 = document[_0x21253b(0x138)](_0x21253b(0xe5));
                                            _0x421124['textContent'] = _0x7ef1d7 + _0x21253b(0xae),
                                                _0x421124['classList'][_0x21253b(0x125)](_0x21253b(0xd8)),
                                                text[_0x21253b(0x13e)](_0x421124),
                                                anime[_0x21253b(0xa0)]({
                                                    'loop': ![]
                                                })[_0x21253b(0x125)]({
                                                    'targets': _0x421124,
                                                    'textShadow': [_0x21253b(0x141), _0x21253b(0xfe)],
                                                    'opacity': [0x0, 0x1],
                                                    'easing': 'easeInOutQuad',
                                                    'duration': 0x3e8,
                                                    'delay': _0x4b3872 * 0x64
                                                });
                                        });

                                    function a0_0x5c76(_0x1aebed, _0x367da1) {
                                        const _0x5df440 = a0_0x5df4();
                                        return a0_0x5c76 = function(_0x5c76a5, _0x454245) {
                                                _0x5c76a5 = _0x5c76a5 - 0xa0;
                                                let _0x575f3a = _0x5df440[_0x5c76a5];
                                                return _0x575f3a;
                                            },
                                            a0_0x5c76(_0x1aebed, _0x367da1);
                                    }

                                    function a0_0x5df4() {
                                        const _0x21196d = ['\x20&#8206;\x20', 'green', 'data-poster', 'button', 'Please\x20enter\x20a\x20URL\x20before\x20submitting.', 'play', 'thumbs', 'charCodeAt', 'getElementById', 'stringify', 'popText', 'onload', 'includes', 'length', 'classList', '.download-prompt', 'enc', 'toast_id', 'setup', 'fromTo', 'text', 'search', '7237467tTutPO', 'file_name', '428815VsDnQt', 'Failed\x20to\x20read\x20clipboard\x20contents:\x20', 'trim', 'block', 'link_icon_url', 'remove', 'responseText', 'source', 'pathname', 'onclick', 'isdir', 'video_img', 'category', '6uWeZHt', 'style', 'click', 'https://cdn-sc-g.sharechat.com/33d5318_1c8/21cf3184_1715816699018_sc.png', 'href', 'animated-text', 'power1.in', 'forEach', 'innerHTML', 'post_info', 'visibility', 'toString', 'clipboard', 'target', '1506883jOnfnz', 'NORMAL\x20DOWNLOAD', 'auto', 'className', 'span', '228398LxUebQ', 'rewind', 'slice', 'bottomCenter', 'download-prompt', 'clean', 'download-btn', '&fsId=', 'display', '/stream.m3u8?', 'https://cdn-sc-g.sharechat.com/33d5318_1c8/2611daa6_1715816667289_sc.png', 'AES', 'submit_btn', 'value', 'current-time', '754864SMpFSA', 'parse', 'data', 'fullscreen', '/shorturlinfo?url=', 'reload', 'playsinline\x20controls\x20player', 'file_type', 'addEventListener', '0\x200\x200px\x20rgba(0,0,0,0)', 'popup', 'volume', 'error', 'head_url', 'GET', 'play-large', 'noPreviewImg', '8pcKsYY', 'https://cdn-sc-g.sharechat.com/33d5318_1c8/11d8de0c_1715802101751_sc.png', 'firstChild', 'send', 'url3', 'controls', 'platform_resource', 'video', 'location', 'padEnd', 'COPY', 'src', '291625fKNNtV', 'url', 'file-info', 'server_filename', 'thumbnail', 'power1.out', '.searchResultsItem', 'push', 'DONE', 'search_result', 'FAST\x20DOWNLOAD', 'setAttribute', 'imgs/placeholder.png', '://', '&uk=', 'Size:\x20', 'toFixed', 'opacity-0', 'Downloader', 'add', 'overlay', 'https://cdn-sc-g.sharechat.com/33d5318_1c8/150e757_1715816721202_sc.png', 'origin', 'readystatechange', 'hidden', 'set', 'textContent', 'size', 'img', 'data=', '625746HqSHUk', 'DOMContentLoaded', 'https://tb-site-be.onrender.com', 'querySelector', 'noopener\x20noreferrer', 'player', 'catch', 'setProperty', 'createElement', 'type', 'log', 'h-full\x20bg-[green]\x20text-white\x20px-4\x20py-2\x20rounded-[14px]\x20font-mono\x20flex-shrink-0\x20no-select', 'resource_list', 'preload', 'appendChild', '_blank', 'reveal', '0\x200\x205px\x20rgba(0,0,0,0.5)', 'captions', 'quality', 'url-input', 'speed', 'visible', 'It\x20looks\x20like\x20the\x20URL\x20you\x20entered\x20is\x20invalid.\x20Please\x20check\x20the\x20URL\x20and\x20try\x20again.', 'duration', 'readText', 'fs_id', 'loading_bg', 'timeline', 'alt', 'then', 'dir_root', 'json', 'info', 'split', '.player', 'flex-grow\x20font-mono\x20text-lg\x20text-white\x20whitespace-nowrap\x20overflow-hidden\x20overflow-ellipsis', 'div', 'downloadUrlV2', 'Utf8', 'loop', 'Video\x20Player'];
                                        a0_0x5df4 = function() {
                                            return _0x21196d;
                                        };
                                        return a0_0x5df4();
                                    }

                                    function invalidErrorShow(_0x584194, _0x2d1171) {
                                        const _0x2c4f20 = a0_0x5cee06,
                                            _0x58f1cb = document[_0x2c4f20(0xb6)](_0x2c4f20(0xff)),
                                            _0xb1501a = document[_0x2c4f20(0xb6)](_0x2c4f20(0x126));
                                        _0x2d1171 && (document[_0x2c4f20(0xb6)](_0x2c4f20(0xb8))['textContent'] = _0x2d1171),
                                            _0x584194 ? (_0x58f1cb['classList'][_0x2c4f20(0xcb)](_0x2c4f20(0x12a)),
                                                _0xb1501a['classList'][_0x2c4f20(0xcb)](_0x2c4f20(0x12a)),
                                                setTimeout(() => {
                                                    const _0x1d5cdd = _0x2c4f20;
                                                    _0x58f1cb[_0x1d5cdd(0xbc)]['remove'](_0x1d5cdd(0x123)),
                                                        _0xb1501a[_0x1d5cdd(0xbc)][_0x1d5cdd(0xcb)](_0x1d5cdd(0x123));
                                                }, 0x32)) : (_0x58f1cb['classList'][_0x2c4f20(0x125)](_0x2c4f20(0x123)),
                                                _0xb1501a[_0x2c4f20(0xbc)]['add'](_0x2c4f20(0x123)),
                                                setTimeout(() => {
                                                    const _0x5e5017 = _0x2c4f20;
                                                    _0x58f1cb['classList'][_0x5e5017(0x125)](_0x5e5017(0x12a)),
                                                        _0xb1501a['classList'][_0x5e5017(0x125)](_0x5e5017(0x12a));
                                                }, 0x1f4));
                                    }
                                

                              
                             
    
