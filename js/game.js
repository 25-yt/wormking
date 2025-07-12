document.documentElement.insertAdjacentHTML(
  'afterbegin',
  '\n    <style>\n        /* Preloader en pantalla completa */\n        .fixed-background {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: black;\n            display: flex;\n            flex-direction: column; /* Asegura que los elementos estén en columna */\n            justify-content: center;\n            align-items: center;\n            z-index: 99999;\n            transition: opacity 0.5s ease-out;\n        }\n\n        /* Imagen de fondo */\n        .background-image {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background: url(\'https://i.imgur.com/Np9eZas.jpeg\') no-repeat center center/cover;\n            background-size: cover;\n            background-position: center;\n            opacity: 0.3;\n            filter: blur(5px) opacity(1.5);\n        }\n\n        /* Estilos del logo */\n        .logo {\n            width: 200px;\n            animation: pulse 4s infinite;\n            margin-bottom: 70px; /* Espacio entre el logo y la barra */\n        }\n\n        /* Animación de pulso */\n        @keyframes pulse {\n            0% { transform: scale(2); opacity: 1; }\n            50% { transform: scale(2.1); opacity: 0.8; }\n            100% { transform: scale(2); opacity: 1; }\n        }\n            /* Barra de carga */\n        .progress-bar-container {\n            width: 50%;\n            height: 10px;\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 5px;\n            overflow: hidden;\n            position: relative;\n        }\n\n        .progress-bar {\n            width: 0%;\n            height: 100%;\n            background: #eea297;\n            transition: width 10s linear; /* La animación durará 10 segundos */\n        }\n    </style>\n\n    <div class="fixed-background" id="loading-screen">\n        <div class="background-image"></div>\n        <img src="https://i.imgur.com/4wnAO1M.png" alt="server logo" class="logo">\n        <div class="progress-bar-container">\n            <div class="progress-bar" id="progress-bar"></div>\n        </div>\n    </div>\n'
)
window.onload = function () {
  document.getElementById('progress-bar').style.width = '100%'
  setTimeout(() => {
    document.getElementById('loading-screen').style.opacity = '0'
    setTimeout(() => {
      document.getElementById('loading-screen').remove()
    }, 500)
  }, 10000)
}
function loadScript4(_0x251b1b, _0x4196b8, _0x1492f1) {
  if (document.getElementById(_0x4196b8)) {
    _0x1492f1()
    return
  }
  var _0x250e42 = document.createElement('script')
  _0x250e42.type = 'text/javascript'
  _0x250e42.src = _0x251b1b
  _0x250e42.id = _0x4196b8
  _0x250e42.onload = _0x1492f1
  document.head.appendChild(_0x250e42)
}
let savedDataView = null,
  savedOffset = null,
  isBufferSaved = false
var __extends =
    (this && this['__extends']) ||
    (function () {
      var _0x323b96 = (function () {
          var _0x538c78 = true
          return function (_0x403e2c, _0x1eed45) {
            var _0x513ac9 = _0x538c78
              ? function () {
                  if (_0x1eed45) {
                    var _0xad9edb = _0x1eed45.apply(_0x403e2c, arguments)
                    return (_0x1eed45 = null), _0xad9edb
                  }
                }
              : function () {}
            return (_0x538c78 = false), _0x513ac9
          }
        })(),
        _0x5d14f8 = _0x323b96(this, function () {
          return _0x5d14f8
            .toString()
            .search('(((.+)+)+)+$')
            .toString()
            .constructor(_0x5d14f8)
            .search('(((.+)+)+)+$')
        })
      _0x5d14f8()
      var _0x22864e = (function () {
        var _0x4386cd = true
        return function (_0x2be8b0, _0x538125) {
          var _0x437373 = _0x4386cd
            ? function () {
                if (_0x538125) {
                  var _0xe5991 = _0x538125.apply(_0x2be8b0, arguments)
                  return (_0x538125 = null), _0xe5991
                }
              }
            : function () {}
          return (_0x4386cd = false), _0x437373
        }
      })()
      ;(function () {
        _0x22864e(this, function () {
          var _0x25e2d1 = new RegExp('function *\\( *\\)'),
            _0x375f87 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
            _0x3d139c = _0x39c033('init')
          !_0x25e2d1.test(_0x3d139c + 'chain') ||
          !_0x375f87.test(_0x3d139c + 'input')
            ? _0x3d139c('0')
            : _0x39c033()
        })()
      })()
      var _0x57cae0 = function (_0x5511b7, _0x302589) {
        return (
          (_0x57cae0 =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (_0x437a0f, _0x5e1fc2) {
                _0x437a0f['__proto__'] = _0x5e1fc2
              }) ||
            function (_0x403d2e, _0xb2a650) {
              for (var _0x444c9f in _0xb2a650)
                if (
                  Object.prototype.hasOwnProperty.call(_0xb2a650, _0x444c9f)
                ) {
                  _0x403d2e[_0x444c9f] = _0xb2a650[_0x444c9f]
                }
            }),
          _0x57cae0(_0x5511b7, _0x302589)
        )
      }
      return function (_0x286eb1, _0x2c564a) {
        if (typeof _0x2c564a !== 'function' && _0x2c564a !== null) {
          throw new TypeError(
            'Class extends value ' +
              String(_0x2c564a) +
              ' is not a constructor or null'
          )
        }
        _0x57cae0(_0x286eb1, _0x2c564a)
        function _0x21fc04() {
          this.constructor = _0x286eb1
        }
        _0x286eb1.prototype =
          _0x2c564a === null
            ? Object.create(_0x2c564a)
            : ((_0x21fc04.prototype = _0x2c564a.prototype), new _0x21fc04())
      }
    })(),
  Direction
;(function (_0x2c5ea2) {
  var _0x1bf61e = (function () {
      var _0x2be6a0 = true
      return function (_0x53c24d, _0x189923) {
        var _0x54fdbf = _0x2be6a0
          ? function () {
              if (_0x189923) {
                var _0x51b569 = _0x189923.apply(_0x53c24d, arguments)
                return (_0x189923 = null), _0x51b569
              }
            }
          : function () {}
        return (_0x2be6a0 = false), _0x54fdbf
      }
    })(),
    _0x204c91 = _0x1bf61e(this, function () {
      var _0x390bec
      try {
        var _0x34c1b4 = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x390bec = _0x34c1b4()
      } catch (_0x4ed13c) {
        _0x390bec = window
      }
      var _0x3c7ef6 = (_0x390bec.console = _0x390bec.console || {}),
        _0x1ec3e0 = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (var _0x42367e = 0; _0x42367e < _0x1ec3e0.length; _0x42367e++) {
        var _0x4fd2f5 = _0x1bf61e.constructor.prototype.bind(_0x1bf61e),
          _0x34a9a5 = _0x1ec3e0[_0x42367e],
          _0x5e4936 = _0x3c7ef6[_0x34a9a5] || _0x4fd2f5
        _0x4fd2f5['__proto__'] = _0x1bf61e.bind(_0x1bf61e)
        _0x4fd2f5.toString = _0x5e4936.toString.bind(_0x5e4936)
        _0x3c7ef6[_0x34a9a5] = _0x4fd2f5
      }
    })
  _0x204c91()
  _0x2c5ea2.LEFT = 'left'
  _0x2c5ea2.TOP = 'top'
  _0x2c5ea2.BOTTOM = 'bottom'
  _0x2c5ea2.RIGHT = 'right'
  _0x2c5ea2.TOP_LEFT = 'top_left'
  _0x2c5ea2.TOP_RIGHT = 'top_right'
  _0x2c5ea2.BOTTOM_LEFT = 'bottom_left'
  _0x2c5ea2.BOTTOM_RIGHT = 'bottom_right'
})((Direction = {}))
var Joystick = (function (_0x27e532) {
  __extends(_0x561b5e, _0x27e532)
  function _0x561b5e(_0x452558) {
    var _0x57f0a2 = _0x27e532.call(this) || this
    _0x57f0a2.outerRadius = 0
    _0x57f0a2.innerRadius = 0
    _0x57f0a2.innerAlphaStandby = 0.5
    _0x57f0a2.settings = Object.assign(
      {
        outerScale: {
          x: 1,
          y: 1,
        },
        innerScale: {
          x: 1,
          y: 1,
        },
      },
      _0x452558
    )
    if (!_0x57f0a2.settings.outer) {
      var _0x4f5076 = new PIXI.Graphics()
      _0x4f5076.beginFill(16711680)
      _0x4f5076.drawCircle(0, 0, 60)
      _0x4f5076.alpha = 0.5
      _0x57f0a2.settings.outer = _0x4f5076
    }
    if (!_0x57f0a2.settings.inner) {
      var _0x43ce17 = new PIXI.Graphics()
      _0x43ce17.beginFill(16711680)
      _0x43ce17.drawCircle(0, 0, 35)
      _0x43ce17.alpha = _0x57f0a2.innerAlphaStandby
      _0x57f0a2.settings.inner = _0x43ce17
    }
    return _0x57f0a2.initialize(), _0x57f0a2
  }
  return (
    (_0x561b5e.prototype.initialize = function () {
      this.outer = this.settings.outer
      this.inner = this.settings.inner
      this.outer.scale.set(
        this.settings.outerScale.x,
        this.settings.outerScale.y
      )
      this.inner.scale.set(
        this.settings.innerScale.x,
        this.settings.innerScale.y
      )
      'anchor' in this.outer && this.outer.anchor.set(0.5)
      'anchor' in this.inner && this.inner.anchor.set(0.5)
      this.addChild(this.outer)
      this.addChild(this.inner)
      this.outerRadius = this.width / 2.5
      this.innerRadius = this.inner.width / 2
      this.bindEvents()
    }),
    (_0x561b5e.prototype.bindEvents = function () {
      var _0x15a1b7 = this
      this.interactive = true
      var _0x568b1b = false,
        _0xbc79e3,
        _0x19bcae,
        _0x27ac01
      this.onDragStart = function (_0x378c4f) {
        var _0x3f70db, _0x3625d1
        _0xbc79e3 = _0x378c4f
        _0x27ac01 = this.toLocal(_0xbc79e3)
        _0x568b1b = true
        _0x15a1b7.inner.alpha = 1
        ;(_0x3625d1 = (_0x3f70db = _0x15a1b7.settings).onStart) === null ||
        _0x3625d1 === void 0
          ? void 0
          : _0x3625d1.call(_0x3f70db)
      }
      this.onDragEnd = function (_0x2952a2) {
        var _0x296017, _0x2da317
        if (_0x568b1b == false) {
          return
        }
        _0x15a1b7.inner.position.set(0, 0)
        _0x568b1b = false
        _0x15a1b7.inner.alpha = _0x15a1b7.innerAlphaStandby
        ;(_0x2da317 = (_0x296017 = _0x15a1b7.settings).onEnd) === null ||
        _0x2da317 === void 0
          ? void 0
          : _0x2da317.call(_0x296017)
      }
      this.onDragMove = function (_0x1a9c21) {
        this.outerRadius = this.width / 2.5
        this.innerRadius = this.inner.width / 2
        var _0x5304b0, _0x5fe1df, _0x4fe08f, _0x3bd762, _0x157399, _0x3ac5ec
        if (_0x568b1b == false) {
          return
        }
        var _0x524e3e = this.toLocal(_0x1a9c21),
          _0x298878 = _0x524e3e.x - _0x27ac01.x,
          _0x4f62c4 = _0x524e3e.y - _0x27ac01.y,
          _0x561c60 = new PIXI.Point(0, 0),
          _0x334318 = 0
        if (_0x298878 == 0 && _0x4f62c4 == 0) {
          return
        }
        var _0x5353fd = 0
        _0x298878 * _0x298878 + _0x4f62c4 * _0x4f62c4 >=
        _0x15a1b7.outerRadius * _0x15a1b7.outerRadius
          ? (_0x5353fd = _0x15a1b7.outerRadius)
          : (_0x5353fd = _0x15a1b7.outerRadius - _0x15a1b7.innerRadius)
        var _0x25b79f = Direction.LEFT
        if (_0x298878 == 0) {
          _0x4f62c4 > 0
            ? (_0x561c60.set(
                0,
                _0x4f62c4 > _0x15a1b7.outerRadius
                  ? _0x15a1b7.outerRadius
                  : _0x4f62c4
              ),
              (_0x334318 = 270),
              (_0x25b79f = Direction.BOTTOM))
            : (_0x561c60.set(
                0,
                -(Math.abs(_0x4f62c4) > _0x15a1b7.outerRadius
                  ? _0x15a1b7.outerRadius
                  : Math.abs(_0x4f62c4))
              ),
              (_0x334318 = 90),
              (_0x25b79f = Direction.TOP))
          _0x15a1b7.inner.position.set(_0x561c60.x, _0x561c60.y)
          _0x19bcae = _0x15a1b7.getPower(_0x561c60)
          ;(_0x5fe1df = (_0x5304b0 = _0x15a1b7.settings).onChange) === null ||
          _0x5fe1df === void 0
            ? void 0
            : _0x5fe1df.call(_0x5304b0, {
                angle: _0x334318,
                direction: _0x25b79f,
                power: _0x19bcae,
              })
          return
        }
        if (_0x4f62c4 == 0) {
          _0x298878 > 0
            ? (_0x561c60.set(
                Math.abs(_0x298878) > _0x15a1b7.outerRadius
                  ? _0x15a1b7.outerRadius
                  : Math.abs(_0x298878),
                0
              ),
              (_0x334318 = 0),
              (_0x25b79f = Direction.LEFT))
            : (_0x561c60.set(
                -(Math.abs(_0x298878) > _0x15a1b7.outerRadius
                  ? _0x15a1b7.outerRadius
                  : Math.abs(_0x298878)),
                0
              ),
              (_0x334318 = 180),
              (_0x25b79f = Direction.RIGHT))
          _0x15a1b7.inner.position.set(_0x561c60.x, _0x561c60.y)
          _0x19bcae = _0x15a1b7.getPower(_0x561c60)
          ;(_0x3bd762 = (_0x4fe08f = _0x15a1b7.settings).onChange) === null ||
          _0x3bd762 === void 0
            ? void 0
            : _0x3bd762.call(_0x4fe08f, {
                angle: _0x334318,
                direction: _0x25b79f,
                power: _0x19bcae,
              })
          return
        }
        var _0x10b543 = Math.abs(_0x4f62c4 / _0x298878),
          _0x56286d = Math.atan(_0x10b543)
        _0x334318 = (_0x56286d * 180) / Math.PI
        var _0x91e48b = 0,
          _0xeee834 = 0
        _0x298878 * _0x298878 + _0x4f62c4 * _0x4f62c4 >=
        _0x15a1b7.outerRadius * _0x15a1b7.outerRadius
          ? ((_0x91e48b = _0x15a1b7.outerRadius * Math.cos(_0x56286d)),
            (_0xeee834 = _0x15a1b7.outerRadius * Math.sin(_0x56286d)))
          : ((_0x91e48b =
              Math.abs(_0x298878) > _0x15a1b7.outerRadius
                ? _0x15a1b7.outerRadius
                : Math.abs(_0x298878)),
            (_0xeee834 =
              Math.abs(_0x4f62c4) > _0x15a1b7.outerRadius
                ? _0x15a1b7.outerRadius
                : Math.abs(_0x4f62c4)))
        _0x4f62c4 < 0 && (_0xeee834 = -Math.abs(_0xeee834))
        _0x298878 < 0 && (_0x91e48b = -Math.abs(_0x91e48b))
        if (_0x298878 > 0 && _0x4f62c4 < 0) {
        } else {
          if (_0x298878 < 0 && _0x4f62c4 < 0) {
            _0x334318 = 180 - _0x334318
          } else {
            if (_0x298878 < 0 && _0x4f62c4 > 0) {
              _0x334318 = _0x334318 + 180
            } else {
              _0x298878 > 0 && _0x4f62c4 > 0 && (_0x334318 = 360 - _0x334318)
            }
          }
        }
        _0x561c60.set(_0x91e48b, _0xeee834)
        _0x19bcae = _0x15a1b7.getPower(_0x561c60)
        _0x25b79f = _0x15a1b7.getDirection(_0x561c60)
        _0x15a1b7.inner.position.set(_0x561c60.x, _0x561c60.y)
        ;(_0x3ac5ec = (_0x157399 = _0x15a1b7.settings).onChange) === null ||
        _0x3ac5ec === void 0
          ? void 0
          : _0x3ac5ec.call(_0x157399, {
              angle: _0x334318,
              direction: _0x25b79f,
              power: _0x19bcae,
            })
      }
    }),
    (_0x561b5e.prototype.getPower = function (_0x4ae0c3) {
      var _0x176f98 = _0x4ae0c3.x - 0,
        _0x501c84 = _0x4ae0c3.y - 0
      return Math.min(
        1,
        Math.sqrt(_0x176f98 * _0x176f98 + _0x501c84 * _0x501c84) /
          this.outerRadius
      )
    }),
    (_0x561b5e.prototype.getDirection = function (_0x211d68) {
      var _0xbdd92c = Math.atan2(_0x211d68.y, _0x211d68.x)
      if (
        (_0xbdd92c >= -Math.PI / 8 && _0xbdd92c < 0) ||
        (_0xbdd92c >= 0 && _0xbdd92c < Math.PI / 8)
      ) {
        return Direction.RIGHT
      } else {
        if (_0xbdd92c >= Math.PI / 8 && _0xbdd92c < (3 * Math.PI) / 8) {
          return Direction.BOTTOM_RIGHT
        } else {
          if (_0xbdd92c >= (3 * Math.PI) / 8 && _0xbdd92c < (5 * Math.PI) / 8) {
            return Direction.BOTTOM
          } else {
            if (
              _0xbdd92c >= (5 * Math.PI) / 8 &&
              _0xbdd92c < (7 * Math.PI) / 8
            ) {
              return Direction.BOTTOM_LEFT
            } else {
              if (
                (_0xbdd92c >= (7 * Math.PI) / 8 && _0xbdd92c < Math.PI) ||
                (_0xbdd92c >= -Math.PI && _0xbdd92c < (-7 * Math.PI) / 8)
              ) {
                return Direction.LEFT
              } else {
                if (
                  _0xbdd92c >= (-7 * Math.PI) / 8 &&
                  _0xbdd92c < (-5 * Math.PI) / 8
                ) {
                  return Direction.TOP_LEFT
                } else {
                  return _0xbdd92c >= (-5 * Math.PI) / 8 &&
                    _0xbdd92c < (-3 * Math.PI) / 8
                    ? Direction.TOP
                    : Direction.TOP_RIGHT
                }
              }
            }
          }
        }
      }
    }),
    _0x561b5e
  )
})(PIXI.Container)
function _typeof(_0x765ef8) {
  '@babel/helpers - typeof'
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (_0x1edf4e) {
          return typeof _0x1edf4e
        }
      : function (_0x4f5a9b) {
          return _0x4f5a9b &&
            'function' == typeof Symbol &&
            _0x4f5a9b.constructor === Symbol &&
            _0x4f5a9b !== Symbol.prototype
            ? 'symbol'
            : typeof _0x4f5a9b
        })(_0x765ef8)
}
var zwormData = {
  id_user: '',
  nickname: 'wormxt',
  teamCode: '',
  playerX: 0,
  playerY: 0,
  hs: 0,
  kill: 0,
  message: '',
  teamColor: '0xffffff',
  wssServer: '',
}
const socket = new WebSocket('wss://zworm.xyz:9950'),
  gameState = { players: new Map() }
socket.addEventListener('open', (_0x16acf2) => {
  console.log('Conectado al servidor WebSocket')
})
socket.addEventListener('message', async (_0x4137a1) => {
  if (_0x4137a1.data instanceof Blob) {
    const _0x1f2d8d = await _0x4137a1.data.text()
    try {
      const _0x224756 = JSON.parse(_0x1f2d8d)
      handleMessage(_0x224756)
    } catch (_0x196128) {
      console.error('Error al parsear el mensaje:', _0x196128)
    }
  } else {
    try {
      const _0x141707 = JSON.parse(_0x4137a1.data)
      handleMessage(_0x141707)
    } catch (_0x2af872) {
      console.error('Error al parsear el mensaje:', _0x2af872)
    }
  }
})
socket.addEventListener('close', (_0x5be17b) => {
  console.log('Desconectado del servidor WebSocket')
})
function handleMessage(_0x517619) {
  ;(_0x517619.id_user === 'gg_107164783301809303612' ||
    _0x517619.id_user === 'gg_107696732696574095850' ||
    _0x517619.id_user === 'gg_110413852592088957484') &&
    (createServerMessage('[WormXT OWNER]', _0x517619.message),
    console.log(
      'Servidor ' +
        _0x517619.id_user +
        ' ha enviado un mensaje a todos los jugadores: ' +
        _0x517619.message
    ))
  if (_0x517619.wssServer !== zwormData.wssServer) {
    return
  }
  switch (_0x517619.type) {
    case 'initialState':
      handleInitialState(_0x517619.players)
      break
    case 'playerUpdate':
      updatePlayer(_0x517619), updateTop8Hs()
      if (
        _0x517619.teamCode !== '' &&
        _0x517619.teamCode === zwormData.teamCode
      ) {
        createTeamUbication(_0x517619.teamCode, _0x517619.teamColor)
        createTeamMessage(
          _0x517619.teamCode,
          _0x517619.nickname,
          _0x517619.message
        )
        console.log(
          'Jugador ' +
            _0x517619.id_user +
            ' tiene teamCode, se crea la ubicación del equipo'
        )
      } else {
      }
      break
    case 'hsKillUpdate':
      updatePlayerHSKill(_0x517619),
        updateTop8Hs(),
        console.log(
          'Actualización de HS/Kill recibida: Jugador ' +
            _0x517619.id_user +
            ' - HS: ' +
            _0x517619.hskill.hs +
            ', Kills: ' +
            _0x517619.hskill.kill
        )
      break
    case 'playerDeath':
      updatePlayerDeath(_0x517619)
      break
    case 'playerDisconnect':
      removePlayer(_0x517619.id),
        console.log('Jugador ' + _0x517619.id + ' se ha desconectado')
      break
    default:
      console.log('Mensaje desconocido:', _0x517619)
  }
}
function handleInitialState(_0x3837bc) {
  _0x3837bc.forEach((_0x2e40b8) => {
    gameState.players.set(_0x2e40b8.id_user, _0x2e40b8)
  })
  console.log('Estado inicial recibido:', _0x3837bc)
}
function updatePlayerDeath(_0x1209c7) {
  gameState.players.has(_0x1209c7.id_user) &&
    (gameState.players.delete(_0x1209c7.id_user),
    console.log('Jugador ' + _0x1209c7.id_user + ' eliminado del juego.'),
    console.log('El jugador ' + _0x1209c7.nickname + ' ha muerto.'))
  updateTop8Hs()
  clearTeamUbication()
}
function updatePlayer(_0x2c3542) {
  gameState.players.set(_0x2c3542.id_user, {
    id: _0x2c3542.id,
    id_user: _0x2c3542.id_user,
    nickname: _0x2c3542.nickname,
    position: _0x2c3542.position,
    hskill: _0x2c3542.hskill,
    message: _0x2c3542.message,
    teamCode: _0x2c3542.teamCode,
    teamColor: _0x2c3542.teamColor,
    wssServer: _0x2c3542.wssServer,
  })
}
function updatePlayerHSKill(_0x3b9d3a) {
  const _0x662976 = gameState.players.get(_0x3b9d3a.id_user)
  _0x662976
    ? (_0x662976.hskill = _0x3b9d3a.hskill)
    : gameState.players.set(_0x3b9d3a.id_user, {
        id: _0x3b9d3a.id,
        id_user: _0x3b9d3a.id_user,
        nickname: _0x3b9d3a.nickname,
        position: {
          x: 0,
          y: 0,
        },
        hskill: _0x3b9d3a.hskill,
        teamCode: _0x3b9d3a.teamCode,
        teamColor: _0x3b9d3a.teamColor,
        wssServer: _0x3b9d3a.wssServer,
      })
}
function removePlayer(_0x1d4feb) {
  gameState.players.delete(_0x1d4feb)
}
function updateGameView() {
  console.log('Estado actual del juego:')
  gameState.players.forEach((_0x57db88, _0x40e134) => {
    console.log('Jugador ' + _0x57db88.id_user + ':')
    console.log('  Name: ' + _0x57db88.nickname)
    console.log('  teamColor: ' + _0x57db88.teamColor)
    console.log(
      '  Posición: (' +
        (_0x57db88.position?.x || 0) +
        ', ' +
        (_0x57db88.position?.y || 0) +
        ')'
    )
    console.log(
      '  HS: ' +
        (_0x57db88.hskill?.hs || 0) +
        ', Kills: ' +
        (_0x57db88.hskill?.kill || 0)
    )
  })
}
function sendPlayerUpdate(_0x466ee3, _0x1f7c22) {
  const _0xad2eae = {
    type: 'playerUpdate',
    id_user: zwormData.id_user,
    nickname: zwormData.nickname,
    hskill: {
      hs: zwormData.hs,
      kill: zwormData.kill,
    },
    position: {
      x: _0x466ee3,
      y: _0x1f7c22,
    },
    message: zwormData.message,
    teamCode: zwormData.teamCode,
    teamColor: zwormData.teamColor,
    wssServer: zwormData.wssServer,
  }
  socket.send(JSON.stringify(_0xad2eae))
}
function sendPlayerDeath(_0x389430, _0x5abbb6) {
  const _0x4a0e96 = {
    type: 'playerDeath',
    id_user: zwormData.id_user,
    nickname: zwormData.nickname,
    hskill: {
      hs: _0x389430,
      kill: _0x5abbb6,
    },
    position: {
      x: 0,
      y: 0,
    },
    message: '',
    teamCode: zwormData.teamCode,
    teamColor: zwormData.teamColor,
    wssServer: zwormData.wssServer,
  }
  socket.send(JSON.stringify(_0x4a0e96))
  console.log(
    'Enviando actualización del: Jugador ' + zwormData.id_user + ' - murio'
  )
}
function sendHSKillUpdate(_0x171fbd, _0x1078b3) {
  const _0x168489 = {
    type: 'hsKillUpdate',
    id_user: zwormData.id_user,
    nickname: zwormData.nickname,
    hskill: {
      hs: _0x171fbd,
      kill: _0x1078b3,
    },
    teamCode: zwormData.teamCode,
    teamColor: zwormData.teamColor,
    wssServer: zwormData.wssServer,
  }
  socket.send(JSON.stringify(_0x168489))
  console.log(
    'Enviando actualización de HS/Kill: Jugador ' +
      zwormData.id_user +
      ' - HS: ' +
      _0x171fbd +
      ', Kills: ' +
      _0x1078b3
  )
}
var SITE_XTHOST = 'https://swykz.theoxt.com'
const _wrmxt = {
    isSkinCustom(_0x4f67be) {
      return 'string' === typeof _0x4f67be && /[a-zA-Z]/.test(_0x4f67be)
    },
    testSkinCustom: function (_0x256255) {
      return _wrmxt.isSkinCustom(_0x256255) ? 34 || 33 : _0x256255
    },
    testSkinMod: function (_0x69d72f) {
      return 399 <= _0x69d72f && 999 > _0x69d72f
    },
    testWear: function (_0x596196) {
      return 399 <= _0x596196 && 999 > _0x596196
    },
    isNumberValid: function (_0x1ba1ad) {
      return (
        '' !== _0x1ba1ad &&
        null !== _0x1ba1ad &&
        void 0 !== _0x1ba1ad &&
        !isNaN(_0x1ba1ad)
      )
    },
    validInput: function (_0x330a95) {
      if (!_wrmxt.testSkinMod(_0x330a95) && !_wrmxt.isSkinCustom(_0x330a95)) {
        return _0x330a95
      }
      try {
        let _0x492c86 = $('#inputReplaceSkin').val()
        return encodeURI(_wrmxt.isNumberValid(_0x492c86) ? _0x492c86 : 35)
      } catch (_0x150f9f) {
        return encodeURI(35)
      }
    },
    aload: false,
    aId: 0,
  },
  setIdReplaceSkin = function (_0x89671e) {
    theoKzObjects.idReplaceSkin = _wrmxt.isNumberValid(_0x89671e.value)
      ? _0x89671e.value
      : 35
    localStorage.setItem('SaveGameXT', JSON.stringify(theoKzObjects))
  }
var intervalID = null,
  isRunning = false,
  initialInterval = 55,
  cycleCounter = 1,
  isIncrementing = true
let pixi = new Function('return PIXI;')(),
  girotexture = pixi.Texture.from('https://i.imgur.com/0aN5Zek.png'),
  ungirotexture = pixi.Texture.from('https://i.imgur.com/12MgJyy.png'),
  explotWtexture = pixi.Texture.from('https://i.imgur.com/DbWbUxD.png')
var keys = {
  zoom: 'z',
  restart: 'r',
  giro: 's',
  wormExplot: 'x',
  laserHS: 'l',
  sectores: 'q',
  background: 'c',
}
function cambiarKey(_0x1d2a5f, _0x435f9f) {
  keys.hasOwnProperty(_0x1d2a5f) && (keys[_0x1d2a5f] = _0x435f9f)
}
let lineMap = {},
  lastUpdateTimeMap = {}
const updateThreshold = 500
var lxpdupdatezoom,
  lxpdmultiplier,
  lxpdzoomtext,
  crearRegion2,
  qkq2089cen = null,
  lxpdservertext,
  lxpdlastserver,
  lxpdtoplist,
  lxpdBackground,
  ctxHeadshotLineContainer,
  lxpdzoomplustexture,
  lxpdzoomsubtracttexture,
  lxpdgiroplustexture,
  lxpdgirosubtracttexture,
  lxpdexplotWubtracttexture,
  lxpdsettingsblockbadwords,
  lxpdselectedbackground,
  lxpdjoystick,
  lxpdmobilecontrol,
  lxpdmobilecontrol2,
  lxpdmobilecontroltextures,
  lxpdmobilepredictiontextures,
  lxpdmobileprediction,
  lxpdjoysticks,
  lxpdmobilearrowtexture,
  lxpdmobilepeedtexture,
  lxpdmobilefullscreenstatus,
  lxpdmobilecheck
lxpdmultiplier = 1
window.onwheel = (_0x56df48) => {
  theoKzObjects.zoomZworm
    ? _0x56df48.deltaY > 0
      ? lxpdupdatezoom(
          Math.max(
            lxpdmultiplier - 0.75 * parseFloat(wormxt_Obj.zoomSpeed),
            0.5
          )
        )
      : lxpdupdatezoom(
          Math.min(lxpdmultiplier + 1.05 * parseFloat(wormxt_Obj.zoomSpeed), 50)
        )
    : _0x56df48.deltaY > 0
    ? lxpdupdatezoom(Math.max(lxpdmultiplier * 1.25, 1))
    : lxpdupdatezoom(Math.max(lxpdmultiplier * 0.75, 1))
}
var lxpdmobilecheck = function () {
    var _0x4d8e29 = new Function('return RegExp;')()
    return new _0x4d8e29('iPhone|iPad|iPod|Android', 'i').test(
      navigator.userAgent
    )
  },
  lxpdupdatezoom = function (_0x1d97a6) {
    lxpdmultiplier = _0x1d97a6
    lxpdzoomtext.text = Math.floor(lxpdmultiplier).toString() + 'x'
  },
  inputReplaceSkin = localStorage.getItem('inputReplaceSkin'),
  PilotoAutomatico = null,
  isPlaying = false
window.keyMove = 81
var theoEvents = {
    eventoPrincipal: null,
    joystick: {
      positionMode: 'L',
      checked: true,
      size: 90,
      mode: 'dynamic',
      position: {
        left: '110px',
        bottom: '110px',
      },
      color: '#222',
      pxy: 110,
    },
  },
  theoKzObjects = {
    FB_UserID: '',
    smoothCamera: 0.5,
    eat_animation: 0.0025,
    PortionSize: localStorage.PotenciadorSize || 2,
    PortionAura: localStorage.PotenciadorAura || 1.2,
    PortionTransparent: 0.8,
    FoodTransparent: 0.3,
    KeyCodeRespawn: localStorage.KeyRespawn || 82,
    KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
    AbilityZ: false,
    top8: true,
    zoomZworm: false,
    FoodShadow: localStorage.ComidaShadow || 2,
    FoodSize: localStorage.ComidaSize || 2,
    headshot: 0,
    idReplaceSkin: 35,
    visibleSkin: [],
    pL: [],
    gamePad: theoEvents.joystick,
    mobile: false,
    loading: false,
    kill: 0,
    totalKills: 0,
    totalHeadshots: 0,
    adblock: false,
    CLIENTE_ADMIN: 1,
    CLIENTE_ACTIVO: 3,
    CLIENTE_INACTIVO: 4,
  }
saveGameLocal = localStorage.getItem('SaveGameXT')
if (saveGameLocal && 'null' !== saveGameLocal) {
  let t = JSON.parse(saveGameLocal)
  for (let e in t) theoKzObjects[e] = t[e]
}
theoKzObjects.loading = true
let clientes = {
  clientesVencidos: [],
  clientesActivos: [],
}
async function loadUsers() {
  await fetch('https://swykz.theoxt.com/api/users.php')
    .then((_0x481fb2) => _0x481fb2.json())
    .then((_0xca08d6) => {
      console.log(_0xca08d6)
      if (_0xca08d6.success) {
        let _0x43db3c = _0xca08d6.users
        console.log(_0x43db3c)
        clientes.clientesActivos = _0x43db3c.filter((_0xc11883) => {
          return (
            _0xc11883.cliente_STATE == theoKzObjects.CLIENTE_ADMIN ||
            _0xc11883.cliente_STATE == theoKzObjects.CLIENTE_ACTIVO
          )
        })
        clientes.clientesVencidos = _0x43db3c.filter((_0x4455f0) => {
          return _0x4455f0.cliente_STATE == theoKzObjects.CLIENTE_INACTIVO
        })
        console.log(clientes)
      } else {
        clientes = {
          clientesVencidos: [],
          clientesActivos: [],
        }
        alert('OcurriÃƒÂ\xB3 un error al cargar los clientes')
      }
    })
}
loadUsers()
var top1Servers = {}
async function extractTopScores() {
  const _0x3e3d7a = 'https://zworm.xyz:3305/data?v=' + TIME
  try {
    let _0x2292e9 = await fetch(_0x3e3d7a)
    if (!_0x2292e9.ok) {
      throw new Error('HTTP error! Status: ' + _0x2292e9.status)
    }
    let _0x44d804 = await _0x2292e9.json()
    for (let _0xb6acd0 in _0x44d804) {
      if (_0x44d804[_0xb6acd0].length > 0) {
        let _0x555853 = _0x44d804[_0xb6acd0].reduce(
            (_0x2fbf80, _0x3afd48) =>
              _0x3afd48.Score > _0x2fbf80.Score ? _0x3afd48 : _0x2fbf80,
            _0x44d804[_0xb6acd0][0]
          ),
          _0x122131 = formatScore(_0x555853.Score),
          _0x2375b2 = getStatusColor(_0x555853.Score)
        top1Servers[_0xb6acd0] = {
          ServerName: _0x555853.ServerName,
          Initials: _0xb6acd0,
          Score: _0x122131,
          StatusColor: _0x2375b2,
        }
      }
    }
    console.log(top1Servers)
  } catch (_0x14bac1) {
    console.error('Error fetching server data:', _0x14bac1)
  }
}
let serverData = []
async function loadServersWormWorld() {
  const _0x201bed = Date.now(),
    _0x520f79 =
      'https://swykz.theoxt.com/api/servers_wwrld/servers.php?v=' + _0x201bed
  try {
    const _0x376f8a = await fetch(_0x520f79),
      _0x1fd555 = await _0x376f8a.json()
    serverData = _0x1fd555.map((_0x43d385) => ({
      dataCon: _0x43d385.dataCon,
      dataRoom: _0x43d385.dataRoom,
      serverName: _0x43d385.serverName,
      dataType: _0x43d385.dataType,
      imgSrc: _0x43d385.imgSrc,
    }))
    console.log(serverData)
  } catch (_0x3c833a) {
    console.error('Error al cargar los servidores:', _0x3c833a)
  }
}
async function registerUpdatePlayer(_0xe20422) {
  await fetch('https://swykz.theoxt.com/api/users/register_update_player.php', {
    method: 'POST',
    body: JSON.stringify({ data: _0xe20422 }),
  })
    .then((_0x38207c) => _0x38207c.json())
    .then((_0xeb69df) => {
      console.log(_0xeb69df)
    })
}
async function checkSubscriptionExpired(_0xd6d8b4) {
  await fetch(
    'https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php',
    {
      method: 'POST',
      body: JSON.stringify({ code: _0xd6d8b4 }),
    }
  )
    .then((_0x4e82f3) => _0x4e82f3.json())
    .then((_0xacfdf) => {
      console.log(_0xacfdf)
    })
}
function fetchCustomLogo(_0x53cc0f) {
  $.ajax({
    url: 'https://swykz.theoxt.com/api/streming.php',
    method: 'GET',
    dataType: 'json',
    success: function (_0x398431) {
      var _0x5d80d0 = _0x398431.allstreamers.streamers.filter(function (
        _0x32d676
      ) {
        return _0x32d676.id_game === _0x53cc0f
      })
      if (_0x5d80d0.length === 0) {
        console.log('No hay streamers online.')
        return
      }
      var _0x36d778 = _0x5d80d0[0]
      $('.mm-logo').attr('src', _0x36d778.logo)
      $('.loading-logo').attr('src', _0x36d778.logo)
      $('.logo-server').attr('src', _0x36d778.logo)
    },
    error: function (_0x475e0c) {
      console.error('Error al obtener los datos:', _0x475e0c)
    },
  })
}
function formatScore(_0x20f846) {
  if (_0x20f846 >= 1000000) {
    return (_0x20f846 / 1000000).toFixed(1) + 'M'
  } else {
    if (_0x20f846 >= 1000) {
      return (_0x20f846 / 1000).toFixed(1) + 'K'
    }
  }
  return _0x20f846.toString()
}
function getStatusColor(_0x531c2a) {
  if (_0x531c2a > 10000000) {
    return 'green'
  } else {
    return _0x531c2a > 2000000 ? 'orange' : 'red'
  }
}
async function init() {
  await Promise.all([extractTopScores(), loadServersWormWorld()])
  console.log('Todo listo')
  renderInterface(serverData, top1Servers)
}
function renderInterface(_0x480d8c, _0x5955f3) {
  $('.description-text').empty()
  $('.description-text').append(
    '\n        <div class="containerDoorsServers">\n            <select id="optionSelect">\n                <option value="sao-a.wormate.io">sao-a</option>\n                <option value="mum-a.wormate.io">mum-a</option>\n                <option value="dxb-a.wormate.io">dxb-a</option>\n                <option value="fra-e.wormate.io">fra-e</option>\n                <option value="fra-d.wormate.io">fra-d</option>\n                <option value="fra-c.wormate.io">fra-c</option>\n                <option value="fra-b.wormate.io">fra-b</option>\n                <option value="waw-a.wormate.io">waw-a</option>\n                <option value="dal-b.wormate.io">dal-b</option>\n                <option value="vin-a.wormate.io">vin-a</option>\n                <option value="dal-a.wormate.io">dal-a</option>\n                <option value="sao-c.wormate.io">sao-c</option>\n                <option value="bhs-a.wormate.io">bhs-a</option>\n                <option value="sao-b.wormate.io">sao-b</option>\n                <option value="hil-a.wormate.io">hil-a</option>\n                <option value="syd-a.wormate.io">syd-a</option>\n                <option value="sin-g.wormate.io">sin-g</option>\n                <option value="gra-a.wormate.io">gra-a</option>\n                <option value="sin-i.wormate.io">sin-i</option>\n                <option value="sin-h.wormate.io">sin-h</option>\n                <option value="sin-f.wormate.io">sin-f</option>\n                <option value="sin-c.wormate.io">sin-c</option>\n                <option value="sin-b.wormate.io">sin-b</option>\n                <option value="sin-a.wormate.io">sin-a</option>\n                <option value="tok-b.wormate.io">tok-b</option>\n                <option value="sin-d.wormate.io">sin-d</option>\n                <option value="sin-e.wormate.io">sin-e</option>\n            </select>\n            \n            <input type="number" id="numberInput" min="0" placeholder="ROOM NUMBER">\n            \n            <button id="connectButton">CONNECT</button>\n        </div>\n    '
  )
  $('#connectButton').click(function () {
    let _0xec6798 = $('#optionSelect').val(),
      _0x1312d0 = $('#numberInput').val()
    if (!_0xec6798 || _0x1312d0 === '') {
      alert(
        'Por favor, selecciona una opción y escribe un número antes de conectar.'
      )
      return
    }
    zw_lastserver = 'wss://' + _0xec6798 + ':' + _0x1312d0 + '/wormy'
    anApp.r.Hd()
    anApp.sa(zw_lastserver)
  })
  var _0x1936b8 = {
      sao: 'br',
      vin: 'Virginia - EEUU',
      dal: 'Dallas - EEUU',
      fra: 'Frankfurt - Alemania',
      sgp: 'sg',
      tok: 'jp',
      syd: 'au',
      lon: 'gb',
      tor: 'ca',
      mex: 'mx',
      sin: 'sg',
      hil: 'Honolulu - Hawái, EEUU',
      gra: 'de',
    },
    _0x4a5de8 = [
      {
        code: 'br',
        name: 'Peru',
      },
      {
        code: 'mx',
        name: 'Mexico',
      },
      {
        code: 'us',
        name: 'EEUU',
      },
      {
        code: 'ca',
        name: 'Canada',
      },
      {
        code: 'de',
        name: 'Germania',
      },
      {
        code: 'fr',
        name: 'Francia',
      },
      {
        code: 'sg',
        name: 'Singapur',
      },
      {
        code: 'jp',
        name: 'Japon',
      },
      {
        code: 'au',
        name: 'Australia',
      },
      {
        code: 'gb',
        name: 'Granbretana',
      },
    ],
    _0x423e0f = $('<ul class="ui-tabs-nav"></ul>'),
    _0x2eb3d5 = $('<div class="servers-container"></div>')
  _0x4a5de8.forEach(function (_0x1ee2ac, _0x417389) {
    var _0x2614f4 = $(
      '\n            <li class="ui-tabs-tab ui-tab ' +
        (_0x417389 === 0 ? 'ui-tab-active' : '') +
        '" data-country="' +
        _0x1ee2ac.code +
        '">\n                <a><span class="flag ' +
        _0x1ee2ac.code +
        '"></span></a>\n            </li>\n        '
    )
    _0x423e0f.append(_0x2614f4)
    var _0xbe2b1c = $(
      '\n            <div class="servers-' +
        _0x1ee2ac.code +
        '" style="display: ' +
        (_0x417389 === 0 ? 'block' : 'none') +
        ';">\n                <table class="server-table">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th> <!-- Nueva columna -->\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        '
    )
    _0x2eb3d5.append(_0xbe2b1c)
  })
  $('.description-text').append(_0x423e0f, _0x2eb3d5)
  $('.ui-tabs-tab').click(function () {
    var _0x8d688a = $(this).data('country')
    $('.ui-tabs-tab').removeClass('ui-tab-active')
    $(this).addClass('ui-tab-active')
    $('.servers-container > div').hide()
    $('.servers-' + _0x8d688a).fadeIn(200)
  })
  _0x480d8c.forEach(function (_0x5d3d5f) {
    var _0x16c714 = _0x5d3d5f.dataRoom.match(/[a-zA-Z]+/g).join('')
    _0x16c714 === 'ae' && (_0x16c714 = 'gb')
    var _0xa17224 = _0x5d3d5f.dataCon.match(/wss:\/\/([a-z]+)-/i),
      _0xeaac0b = _0xa17224 ? _0xa17224[1] : null,
      _0x3dc554 = _0x1936b8[_0xeaac0b]
        ? _0x1936b8[_0xeaac0b].toUpperCase()
        : 'Desconocido'
    if (!_0x4a5de8.some((_0x1fa49e) => _0x1fa49e.code === _0x16c714)) {
      return
    }
    var _0xad46e9 = _0x5d3d5f.dataRoom.trim().toLowerCase(),
      _0x24917a = _0x5955f3[_0xad46e9] || {
        Score: '???',
        StatusColor: 'gray',
      },
      _0x5b5f51 = _0x5d3d5f.dataCon.match(/wss:\/\/([^:/]+)/)[1],
      _0x4a9c29 = $(
        '\n        <tr class="server-row" data-wss="' +
          _0x5d3d5f.dataCon +
          '" value="' +
          _0x5d3d5f.dataRoom +
          '">\n                <td class="server-status">\n                    <span class="status-dot" style="background-color: ' +
          _0x24917a.StatusColor +
          ';"></span>\n                </td>\n                <td class="server-name" >' +
          _0x5d3d5f.serverName +
          '</td>\n                <td class="server-region">' +
          _0x3dc554 +
          '</td>\n                <td class="server-top1">' +
          _0x24917a.Score +
          '</td>\n                <td><img src="' +
          _0x5d3d5f.imgSrc +
          '" class="streamer-image"></td>\n                <td>\n                    <button class="btn-check-ports">\uD83D\uDCE1\uD83D\uDCF6</button>\n                </td>  \n            </tr>\n        '
      )
    $('.servers-' + _0x16c714 + ' tbody').append(_0x4a9c29)
  })
  $(document).on('click', '.server-row', function () {
    let _0x24ac58 = $(this).attr('value'),
      _0x1c63bc = $(this).find('.server-name').text(),
      _0x1398fa = $(this).attr('data-wss')
    var _0x4fd846 = anApp
    _0x1c63bc &&
      _0x1398fa &&
      (_0x4fd846.r.Hd(),
      _0x4fd846.sa(_0x1398fa),
      console.log('Conectando a:', _0x1398fa))
  })
  $(document).on('click', '.btn-check-ports', function (_0x28ca9c) {
    _0x28ca9c.stopPropagation()
    const _0x1528c7 = $(this).closest('.server-row'),
      _0x129a8e = _0x1528c7.attr('data-wss'),
      _0x4214ce = _0x129a8e.match(/wss:\/\/[^:]+:(\d+)\//)
    if (!_0x4214ce) {
      alert('Puerto no válido')
      return
    }
    const _0x3a29de = _0x4214ce[1]
    _0x55970b(_0x1528c7, _0x3a29de)
  })
  function _0x55970b(_0x24f288, _0x1fdb9c) {
    const _0x1b9e0f = _0x24f288.find('.server-name').text(),
      _0x382e12 = _0x24f288.attr('data-wss').match(/wss:\/\/([^:/]+)/)[1]
    !$('#modalPuertas').length &&
      ($('body').append(
        '\n                <div id="modalPuertas" style="position:fixed; top:20%; left:50%; transform:translateX(-50%);\n                    padding:20px; z-index:9999; display:none; background-color: rgb(78 78 114 / 75%);\n                    border-radius: 5px; border: 2px solid #252535; color: white; font-family: sans-serif;\n                    max-height: 400px; overflow-y: auto; min-width: 300px;">\n    \n                    <div id="modalCloseBtn" style="position: absolute; top: 5px; right: 10px;\n                        font-size: 18px; cursor: pointer; color: #fff;">\u2716</div>\n    \n                    <div id="modalTitle" style="font-size: 16px; font-weight: bold;\n                        margin-bottom: 10px; text-align: center; margin-top: 20px;">\n                        \uD83D\uDD13 Open doors available for: <span id="nombreServidor"></span>\n                    </div>\n    \n                    <div id="resultadoPuertas"></div>\n                </div>\n            '
      ),
      $(document)
        .off('click', '#modalCloseBtn')
        .on('click', '#modalCloseBtn', function () {
          $('#modalPuertas').fadeOut(300)
        }),
      $(document)
        .off('click', '.connect-button')
        .on('click', '.connect-button', function () {
          const _0x141f9a = $(this).data('server')
          anApp.sa(_0x141f9a)
          console.log('Conectando a:', _0x141f9a)
        }))
    $('#nombreServidor').text(_0x1b9e0f)
    $('#modalPuertas').fadeIn(200)
    $('#resultadoPuertas').html('\uD83D\uDD04 Testing ...')
    testPortOnServers(_0x1fdb9c)
  }
}
init()
function startInterval() {
  clearInterval(intervalID)
  intervalID === null &&
    (intervalID = setInterval(function () {
      var _0xb448de = anApp.s.H.sk
      let _0x5c8240 = Math.PI
      var _0x40685f = _0xb448de + (_0x5c8240 / 360) * 9
      _0x40685f >= _0x5c8240 && (_0x40685f = -_0xb448de)
      anApp.s.H.sk = _0x40685f
    }, 55))
}
function adjustInterval() {
  cycleCounter >= 40 &&
    (isIncrementing ? (initialInterval += 25) : (initialInterval -= 100),
    (cycleCounter = 1))
}
function controlIntervalAdjustment() {
  initialInterval === 55 &&
    cycleCounter >= 40 &&
    ((initialInterval += 25), (cycleCounter = 1), (isIncrementing = true))
  if (initialInterval === 80) {
    adjustInterval()
  }
  if (initialInterval === 105) {
    adjustInterval()
  }
  if (initialInterval === 130) {
    adjustInterval()
  }
  if (initialInterval === 155) {
    adjustInterval()
  }
  if (initialInterval === 180) {
    adjustInterval()
  }
  if (initialInterval === 205) {
    adjustInterval()
  }
  if (initialInterval === 230) {
    adjustInterval()
  }
  if (initialInterval === 255) {
    adjustInterval()
  }
  if (initialInterval === 280) {
    adjustInterval()
  }
  if (initialInterval === 305) {
    adjustInterval()
  }
  if (initialInterval === 330) {
    adjustInterval()
  }
  if (initialInterval === 355) {
    adjustInterval()
  }
  if (initialInterval === 380) {
    adjustInterval()
  }
  if (initialInterval === 405) {
    adjustInterval()
  }
  if (initialInterval === 430) {
    adjustInterval()
  }
  initialInterval === 455 &&
    cycleCounter >= 40 &&
    ((initialInterval -= 100), (cycleCounter = 1), (isIncrementing = false))
}
function manageIntervalCycle() {
  clearInterval(intervalID)
  if (intervalID === null) {
    let _0x56f212 = anApp.s.H.sk,
      _0x3ccc4e = Math.PI,
      _0x5270c8 = _0x56f212 + (_0x3ccc4e / 360) * 9
    _0x5270c8 >= _0x3ccc4e && (_0x5270c8 = -_0x56f212)
    anApp.s.H.sk = _0x5270c8
    cycleCounter += 1
    controlIntervalAdjustment()
    isRunning &&
      (intervalID = setInterval(manageIntervalCycle, initialInterval))
  }
}
function starAutoCircle() {
  isRunning = true
  initialInterval = 55
  cycleCounter = 1
  isIncrementing = true
  manageIntervalCycle()
}
const wormxt_5dlrs_Obj = {
  visiblePowersAll: false,
  visiblePowersSpeedZigZag: true,
}
var wormxt_Obj = {
  zoomSpeed: 1,
  PotenciadorSize: localStorage.getItem('PotenciadorSize') || 2,
  PotenciadorAura: localStorage.getItem('PotenciadorAura') || 1.2,
  ComidaShadow: localStorage.getItem('ComidaShadow') || 2,
  ComidaSize: localStorage.getItem('ComidaSize') || 2,
  laserColor: 'FFFFFF',
  colorFondo: '0D0400',
  colorBorde: 'FF0000',
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: true,
  sectores: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4,
}
const showVersionPays = async function (_0x430dd3) {
  var _0x554dbd = clientes.clientesActivos.find(function (_0x556357) {
    return (
      _0x556357.cliente_ID === _0x430dd3.user_data.userId &&
      _0x556357.cliente_SUBSCRIPTION &&
      (_0x556357.cliente_SUBSCRIPTION.description === '5$' ||
        _0x556357.cliente_SUBSCRIPTION.description === '3$')
    )
  })
  if (_0x554dbd) {
    console.log(
      'El ID ' +
        _0x430dd3.user_data.userId +
        ' coincide con un ID almacenado en la base de datos.'
    )
    if (_0x554dbd.cliente_SUBSCRIPTION.description === '5$') {
      settings5dolars(_0x554dbd.cliente_FECHA_EXPIRACION)
    } else {
      _0x554dbd.cliente_SUBSCRIPTION.description === '3$' && settings3dolars()
    }
  } else {
    console.log(
      'El ID generado no coincide con ningún ID almacenado en la base de datos.'
    )
  }
}
function setSectorsGame() {
  lxpdBackground.removeChildren()
  lxpdBackground.clear()
  if (wormxt_Obj.backgroundSolid) {
    lxpdBackground.beginFill('0x' + wormxt_Obj.colorFondo, 1)
    lxpdBackground.lineStyle(1, '0x' + wormxt_Obj.colorBorde, 1)
    lxpdBackground.drawCircle(0, 0, 500)
    lxpdBackground.endFill()
  } else {
    if (wormxt_Obj.sectores) {
      var _0x34d8c9 = 200,
        _0x1274d2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        _0x20c000 = (Math.PI * 2) / 10
      for (var _0x590df7 = 0; _0x590df7 < 5; _0x590df7++) {
        for (var _0x477354 = 0; _0x477354 < 10; _0x477354++) {
          var _0x34cd47 = _0x477354 * _0x20c000,
            _0x4c32e3 = (_0x477354 + 1) * _0x20c000,
            _0x5b36eb = 500 - (_0x590df7 + 0.01) * (_0x34d8c9 / 2),
            _0x52a00a = 0 + Math.cos(_0x34cd47) * _0x5b36eb,
            _0x132575 = 0 + Math.sin(_0x34cd47) * _0x5b36eb
          lxpdBackground.beginFill('0x' + wormxt_Obj.colorFondo, 1)
          lxpdBackground.lineStyle(0.5, '0x' + wormxt_Obj.colorBorde, 1)
          lxpdBackground.moveTo(0, 0)
          lxpdBackground.lineTo(_0x52a00a, _0x132575)
          lxpdBackground.arc(0, 0, _0x5b36eb, _0x34cd47, _0x4c32e3)
          lxpdBackground.lineTo(0, 0)
          lxpdBackground.endFill()
          if (_0x590df7 < 4) {
            var _0x5cf75f = _0x1274d2[_0x590df7] + (_0x477354 + 1)
            if (!lxpdBackground.getChildByName(_0x5cf75f)) {
              var _0x29a415 = new PIXI.TextStyle({
                  fontSize: '15px',
                  fill: '0x00243E',
                }),
                _0x3e2092 = new PIXI.Text(_0x5cf75f, _0x29a415)
              _0x3e2092.anchor.set(0.5)
              var _0x3e549a = _0x34cd47 + (_0x4c32e3 - _0x34cd47) / 2,
                _0x36e9b1 = _0x5b36eb - _0x34d8c9 / 4,
                _0x679f64 = 0 + Math.cos(_0x3e549a) * _0x36e9b1,
                _0x2302db = 0 + Math.sin(_0x3e549a) * _0x36e9b1
              _0x3e2092.position.set(_0x679f64, _0x2302db)
              _0x3e2092.name = _0x5cf75f
              lxpdBackground.addChild(_0x3e2092)
            }
          }
        }
      }
    } else {
      lxpdBackground.removeChildren()
      lxpdBackground.clear()
      lxpdBackground.lineStyle(1, 16711680, 1)
      lxpdBackground.drawCircle(0, 0, 500)
      lxpdBackground.endFill()
    }
  }
}
const settings5dolars = async function (_0x338047) {
  $('#mm-event-text').html(
    "<span style='color: #98928a;' class='settings_span'>EXP: " +
      _0x338047 +
      '</span>'
  )
  $('#wtr-settings-version').after(
    '\n        <a href="https://www.myinstants.com/en/index/us/" target="_blank">1: Download sound</a>\n        <br>\n        <a href="https://catbox.moe/" target="_blank">2: Upload sound</a>\n        <br>\n        <label for="sound-hs">Sound link HS: </label>\n        <input type="text" id="sound-hs" class="sounds-input"><br>\n        <label for="sound-hs">Sound link 10HS: </label>\n        <input type="text" id="sound-10hs" class="sounds-input"><br>\n    '
  )
  $('#sound-hs').val('https://app2.wormateturkiye.com/public/audio/hs.mp3')
  $('#sound-10hs').val('https://app2.wormateturkiye.com/public/audio/laugh.mp3')
  lxpdhssound = new Audio($('#sound-hs').val())
  lxpdlaughsound = new Audio($('#sound-10hs').val())
  $('#sound-hs').on('input', function () {
    lxpdhssound.src = $(this).val()
  })
  $('#sound-10hs').on('input', function () {
    lxpdlaughsound.src = $(this).val()
  })
  $('#settings5dolars').after(
    '<div class="settings-checkbox"><input type="checkbox" id="settings-laserHS-switch"><span class="names_settings"> : laser headshot</span></div><div class="settings-checkbox"><input type="checkbox" id="settings-sectores-switch"><span class="names_settings"> : Sectors</span></div><div class="settings-checkbox"><input type="checkbox" id="settings-notAbilityAll-switch"><span class="names_settings"> : Show All Power-Ups</span></div><div class="settings-checkbox"><input type="checkbox" id="settings-zoomWWC-switch"><span class="names_settings"> : zoom change - wwc</span></div><div class="settings-checkbox"><input type="checkbox" id="settings-Speed_ZigZag-switch"><span class="names_settings"> : Show Speed&Zigzag</span></div><!--div class="settings-checkbox"><input type="checkbox" id="settings-interactive-switch"><span class="names_settings"> : interactive buttons</span></div--><div id="display_color"><div class="container"><input id="color_paletRGB" type="color" value="#000A11"><span class="names_settings"> : Color del juego</span></div><div class="container"><input id="color_palet" type="color" value="#00243E"><span class="names_settings"> : Color laserHS</span></div><div class="container"><input id="color_palet2" type="color" value="#01D9CC"><span class="names_settings"> : Borde Del juego</span></div>'
  )
  const _0x3f6f68 = {
    color_paletRGB: (_0xe5984b) => (wormxt_Obj.colorFondo = _0xe5984b),
    color_palet: (_0x1ffa69) => (wormxt_Obj.laserColor = _0x1ffa69),
    color_palet2: (_0xd2666c) => (wormxt_Obj.colorBorde = _0xd2666c),
  }
  $('#color_paletRGB, #color_palet, #color_palet2').change(function () {
    const _0x4bfe85 = $(this).attr('id'),
      _0x2599c2 = $(this).val().replace('#', '')
    setSectorsGame()
    console.log(
      'Recibiendo el color reemplazado para ' + _0x4bfe85 + ': ' + _0x2599c2
    )
    _0x3f6f68[_0x4bfe85] && _0x3f6f68[_0x4bfe85](_0x2599c2)
    setSectorsGame()
  })
  wormxt_5dlrs_Obj.visiblePowersAll = false
  $('#settings-notAbilityAll-switch').prop(
    'checked',
    wormxt_5dlrs_Obj.visiblePowersAll
  )
  $('#settings-notAbilityAll-switch').on('click', function () {
    this.checked
      ? (wormxt_5dlrs_Obj.visiblePowersAll = true)
      : (wormxt_5dlrs_Obj.visiblePowersAll = false)
  })
  theoKzObjects.zoomZworm = false
  $('#settings-zoomWWC-switch').prop('checked', theoKzObjects.zoomZworm)
  $('#settings-zoomWWC-switch').on('click', function () {
    this.checked
      ? (theoKzObjects.zoomZworm = true)
      : (theoKzObjects.zoomZworm = false)
  })
  wormxt_5dlrs_Obj.visiblePowersSpeedZigZag = true
  $('#settings-Speed_ZigZag-switch').prop(
    'checked',
    wormxt_5dlrs_Obj.visiblePowersSpeedZigZag
  )
  $('#settings-Speed_ZigZag-switch').on('click', function () {
    this.checked
      ? (wormxt_5dlrs_Obj.visiblePowersSpeedZigZag = true)
      : (wormxt_5dlrs_Obj.visiblePowersSpeedZigZag = false)
  })
  $('#settings-laserHS-switch').prop('checked', wormxt_Obj.laserHS)
  $('#settings-laserHS-switch').on('click', function () {
    this.checked ? (wormxt_Obj.laserHS = true) : (wormxt_Obj.laserHS = false)
  })
  $('#settings-sectores-switch').prop('checked', wormxt_Obj.sectores)
  $('#settings-sectores-switch').on('click', function () {
    this.checked
      ? ((wormxt_Obj.sectores = true), setSectorsGame())
      : ((wormxt_Obj.sectores = false), setSectorsGame())
  })
}
var TIME = new Date().getTime(),
  linkCSS = 'https://swykz.theoxt.com/wormio-wormate/css/style3.css?v=' + TIME
const showServer2 = async function (_0x5c7b28) {
    lxpdgirosubtracttexture.texture = ungirotexture
    lxpdgirosubtracttexture.interactive = true
    loadStylesheet(linkCSS)
    zwormData.id_user = _0x5c7b28.u.si.userId
    loadStylesheet('https://fonts.googleapis.com/icon?family=Material+Icons')
    function _0xe11bd6() {
      $.ajax({
        url: 'https://swykz.theoxt.com/api/streming.php',
        method: 'GET',
        dataType: 'json',
        success: function (_0xacaa1c) {
          var _0x221610 = _0xacaa1c.allstreamers.streamers.filter(function (
            _0x4037ee
          ) {
            return _0x4037ee.status === 'online'
          })
          if (_0x221610.length === 0) {
            console.log('No hay streamers online.')
            return
          }
          function _0x5e76e7(_0x27ff64) {
            var _0x5ce941 =
              '\n                        <div>\n                            <span class="status-indicator ' +
              (_0x27ff64.status === 'online' ? 'online' : 'offline') +
              '"></span>\n                            <img src="' +
              _0x27ff64.url_logo +
              '" class="streamer-logo" alt="' +
              _0x27ff64.nombre +
              '">\n                            <a href="' +
              _0x27ff64.url_stream +
              '" target="_blank">live!!!</a>\n                        </div>\n                    '
            toastr.options = {
              closeButton: true,
              debug: false,
              newestOnTop: false,
              progressBar: true,
              positionClass: 'toast-top-right',
              preventDuplicates: false,
              showDuration: '300',
              hideDuration: '1000',
              timeOut: '5000',
              extendedTimeOut: '1000',
              showEasing: 'swing',
              hideEasing: 'linear',
              showMethod: 'fadeIn',
              hideMethod: 'fadeOut',
            }
            toastr.info(_0x5ce941, '' + _0x27ff64.nombre)
          }
          _0x221610.forEach(function (_0x4b225d) {
            _0x5e76e7(_0x4b225d)
          })
        },
        error: function (_0x49f363) {
          console.error('Error al obtener los datos:', _0x49f363)
        },
      })
    }
    _0xe11bd6()
    setInterval(_0xe11bd6, 900000)
    console.log(_0x5c7b28, _0x5c7b28.u.si.userId)
    lxpdhssound = new Audio(
      'https://app2.wormateturkiye.com/public/audio/hs.mp3'
    )
    lxpdlaughsound = new Audio(
      'https://app2.wormateturkiye.com/public/audio/laugh.mp3'
    )
    lxpdexplotWubtracttexture = new pixi.Sprite()
    ;(lxpdexplotWubtracttexture.texture = explotWtexture),
      (lxpdexplotWubtracttexture.interactive = true)
    lxpdexplotWubtracttexture.buttonMode = true
    lxpdexplotWubtracttexture.x = -45
    lxpdexplotWubtracttexture.y = 10
    lxpdexplotWubtracttexture.alpha = 0.25
    function _0x19c718() {
      lxpdexplotWubtracttexture.interactive = false
      var _0x16fc10 = 0.0075,
        _0x1de9df = 0,
        _0x156beb = setInterval(function () {
          var _0x2a8845 = 1 - _0x16fc10 * _0x1de9df
          lxpdexplotWubtracttexture.alpha = _0x2a8845
          _0x1de9df++
          _0x1de9df > 100 &&
            (clearInterval(_0x156beb),
            (lxpdexplotWubtracttexture.alpha = 0.25),
            (lxpdexplotWubtracttexture.interactive = true))
        }, 100)
    }
    lxpdexplotWubtracttexture.on('mouseup', function () {
      _0x19c718()
      const _0x2f7aa6 = new Uint8Array([NaN, NaN])
      anApp.o.Wb(_0x2f7aa6)
      setTimeout(() => {
        let _0x5f3be8 = lxpdlastserver
        _0x5f3be8 && (anApp.r.Hd(), anApp.sa(_0x5f3be8))
      }, 1000)
    })
    lxpdgirosubtracttexture = new pixi.Sprite()
    ;(lxpdgirosubtracttexture.texture = ungirotexture),
      (lxpdgirosubtracttexture.interactive = true)
    lxpdgirosubtracttexture.buttonMode = true
    lxpdgirosubtracttexture.x = -10
    lxpdgirosubtracttexture.y = 10
    lxpdgirosubtracttexture.alpha = 0.25
    lxpdgirosubtracttexture.on('mouseup', function () {
      _0x3d8cc9()
    })
    let _0x207173 = false
    function _0x3d8cc9() {
      _0x207173
        ? ((lxpdgirosubtracttexture.texture = ungirotexture),
          (lxpdgirosubtracttexture.alpha = 0.25),
          console.log('Giro deactivated'),
          (isRunning = false),
          (initialInterval = 55),
          (cycleCounter = 1),
          (isIncrementing = true),
          clearInterval(intervalID),
          (intervalID = null))
        : ((lxpdgirosubtracttexture.alpha = 0.75),
          console.log('Giro activated'),
          startInterval(),
          (isRunning = true))
      _0x207173 = !_0x207173
    }
    if (lxpdmobilecheck()) {
      lxpdzoomsubtracttexture.texture = _0x4683b5
      lxpdzoomsubtracttexture.interactive = true
      lxpdexplotWubtracttexture.x = -10
      lxpdexplotWubtracttexture.y = 45
      let _0xd46d44 = new Function('return PIXI;')(),
        _0x48ea19 = _0xd46d44.Texture.from('https://i.imgur.com/kGjR9yf.png'),
        _0x4683b5 = _0xd46d44.Texture.from('https://i.imgur.com/4JZUa1u.png')
      lxpdzoomplustexture = new _0xd46d44.Sprite()
      ;(lxpdzoomplustexture.texture = _0x48ea19),
        (lxpdzoomplustexture.interactive = true)
      lxpdzoomplustexture.buttonMode = true
      lxpdzoomplustexture.x = -10
      lxpdzoomplustexture.y = 10
      lxpdzoomplustexture.alpha = 0.25
      lxpdzoomplustexture.on('mouseup', function () {
        lxpdupdatezoom(Math.min(lxpdmultiplier + 0.25, 50))
      })
      lxpdzoomsubtracttexture = new _0xd46d44.Sprite()
      ;(lxpdzoomsubtracttexture.texture = _0x4683b5),
        (lxpdzoomsubtracttexture.interactive = true)
      lxpdzoomsubtracttexture.buttonMode = true
      lxpdzoomsubtracttexture.x = -43
      lxpdzoomsubtracttexture.y = 10
      lxpdzoomsubtracttexture.alpha = 0.25
      lxpdzoomsubtracttexture.on('mouseup', function () {
        lxpdupdatezoom(Math.max(lxpdmultiplier - 0.25, 0.25))
      })
    }
    $('#game-view').append(
      '\n        <button id="openVoiceChatPanel" class="open-btn" style="position: absolute;margin-left: 30px;"><span class="material-icons">volume_up</span> </button>\n        <div id="voice-chat-panel" class="hidden">\n            <button id="closeVoiceChatPanel" class="close-btn"><span class="material-icons">close</span> </button>\n\n            <h3>Voice Chat BETA 0.01</h3>\n            <div id="coming-soon-overlay" style="\n        position: absolute;\n        top: 50px;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.7);\n        color: white;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 24px;\n    ">\n        <h1>Coming Soon</h1>\n    </div>\n            \n            <!-- Controles de llamada -->\n            <div class="control-buttons">\n                <button id="startCall"><span class="material-icons">call</span> Start Call</button>\n                <button id="endCall" disabled><span class="material-icons">call_end</span> End Call</button>\n            </div>\n            \n            <!-- Información sobre la llamada -->\n            <div id="roomArea">\n                <button id="joinRoom" style="margin-left: 30%;"><span class="material-icons">group_add</span> Join Room</button>\n                <p id="roomInfo">Join a room to start chatting!</p>\n            </div>\n        </div>\n    '
    )
    $('#openVoiceChatPanel').click(function () {
      $('#voice-chat-panel').removeClass('hidden')
      _0x3d8cc9()
    })
    $('#closeVoiceChatPanel').click(function () {
      $('#voice-chat-panel').addClass('hidden')
      _0x3d8cc9()
    })
    $('#game-canvas').after(
      '<input type="text" id="chatInput" style="display: none; position: absolute;" placeholder="Escribe tu mensaje..." />'
    )
    var _0x1734fc = function () {
        $('#chatInput').css('display', 'none').val('')
        $('#game-canvas').focus()
      },
      _0x4f89c0 = function () {
        let _0x2b2740 = $('#chatInput').val()
        $.trim(_0x2b2740) !== '' &&
          (console.log('Mensaje enviado:', _0x2b2740),
          (zwormData.message = _0x2b2740),
          setTimeout(() => {
            zwormData.message = ''
          }, 1500))
      }
    $('#chatInput').on('keydown', function (_0x106d23) {
      if (_0x106d23.key === 'Enter') {
        _0x4f89c0()
        _0x1734fc()
      } else {
        _0x106d23.key === 'Escape' && _0x1734fc()
      }
    })
    $('#mm-action-play').html(
      '<i class="material-icons">play_circle_filled</i><span>PLAY</span>'
    )
    $('#mm-settings').html('<i class="material-icons">settings</i>')
    $('#mm-leaders').html('<i class="material-icons">leaderboard</i>')
    $('#mm-store').html('<i class="material-icons">store</i>')
    $('#mm-wtr-settings').html('<i class="material-icons">manage_accounts</i>')
    $('#background-canvas').replaceWith(
      '<canvas id="background-canvas"></canvas>'
    )
    let _0x33f52d = $('<div class="icon-selector"></div>')
    for (let _0x5867e2 = 1; _0x5867e2 < 42; _0x5867e2++) {
      const _0x232091 =
          'https://deltav4.gitlab.io/v7/assets/cursors/cursor_' +
          _0x5867e2.toString().padStart(2, '0') +
          '.cur',
        _0x4c5910 = _0x5867e2 === 1 ? 'active' : '',
        _0x1283fe = $('<img>').attr({ src: _0x232091 }),
        _0x173820 = $('<div>')
          .addClass('cursor-box icon-selector__item')
          .addClass(_0x4c5910)
          .append(_0x1283fe)
      _0x33f52d.append(_0x173820)
    }
    $('#wtr-settings-version').after(_0x33f52d)
    const _0x191175 = [
      'https://i.imgur.com/aHAHSh1.png',
      'https://i.imgur.com/JOXhGUu.png',
      'https://i.imgur.com/HoS883S.png',
    ]
    let _0x550619 = 0
    function _0xbbc0bc() {
      const _0x1ab21a = $('#aqnvgcpz05orkobh'),
        _0x2a0b22 = (_0x550619 + 1) % _0x191175.length,
        _0x23dc0b = $(
          '<img src="' +
            _0x191175[_0x2a0b22] +
            '" alt="Flyer" style="width: 100%; height: 65%; position: absolute; top: 0; left: 100%;">'
        )
      _0x1ab21a.append(_0x23dc0b)
      _0x1ab21a
        .find('img')
        .eq(0)
        .animate({ left: '-100%' }, 1000, function () {
          $(this).remove()
        })
      _0x23dc0b.animate({ left: '0%' }, 1000)
      _0x550619 = _0x2a0b22
    }
    $('#aqnvgcpz05orkobh')
      .css({
        position: 'relative',
        overflow: 'hidden',
        width: '300px',
        height: '400px',
      })
      .html(
        '<img src="' +
          _0x191175[0] +
          '" alt="Flyer" style="width: 100%; height: 65%; position: absolute; top: 0; left: 0;">'
      )
    setInterval(_0xbbc0bc, 3000)
    $('.cursor-box').on('click', function () {
      var _0x55034b = $(this).find('img').attr('src')
      $('body').css('cursor', 'url(' + _0x55034b + '), auto')
      $('.cursor-box').removeClass('active')
      $(this).addClass('active')
    })
    $('#social-buttons').replaceWith('')
    $('#mm-skin-prev svg').remove()
    $('#mm-skin-next svg').remove()
    $('.mm-logo').attr('src', 'https://i.imgur.com/4fFTM4l.png')
    $('.loading-logo').attr('src', 'https://i.imgur.com/4fFTM4l.png')
    $('#mm-coins-buy span').remove()
    $('#mm-coins-box .mm-coins-img').remove()
    $('#mm-action-play, #wtrplayagain, #final-replay').click(function () {})
    $('#mm-wtr-settings').click(function () {
      $('#settings-view').css('display', 'none')
    })
    $('#mm-skin-next').click(function () {
      $('#mm-skin-canv').addClass('cambio-skin')
      setTimeout(function () {
        $('#mm-skin-canv').removeClass('cambio-skin')
      }, 100)
    })
    $('#mm-skin-prev').click(function () {
      $('#mm-skin-canv').addClass('cambio-skin2')
      setTimeout(function () {
        $('#mm-skin-canv').removeClass('cambio-skin2')
      }, 100)
    })
    const _0x49ed1b = [
      '#mm-action-play',
      '#mm-settings',
      '#mm-leaders',
      '#mm-store',
      '#mm-wtr-settings',
    ]
    _0x49ed1b.forEach(function (_0x36273c) {
      $(_0x36273c).hover(
        function () {
          $(this).css({
            'box-shadow':
              'inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)',
          })
        },
        function () {
          $(this).css({ 'box-shadow': '0 1px 1px 0 rgba(0,0,0,.5)' })
        }
      )
    })
    $('.mm-merchant-cont').replaceWith('')
    $('#fullscreen').prepend('<i class="material-icons">fullscreen</i>')
    $('#wtrplayagain').prepend('<i class="material-icons">replay</i>')
    $('#game-view').append(
      '<i class="material-icons"  id="user_config" style="position: absolute;background-color: transparent;border-radius: 5px;">menu</i>'
    )
    $('#user_config').on('click', function () {
      $('#settings-container2, #clossed_Setings')
        .css('position', 'absolute')
        .css('display', 'block')
      _0x207173 = false
      _0x3d8cc9()
    })
    $('#user_config').after(
      '\n        <div id="settings-container2">\n            <button id="clossed_Setings">X</button>\n            <div class="label" id="titleSetings">Settings</div>\n            <div class="display_setting">\n                <div class="container">\n                    <span class="names_settings">Tamaño del potenciador: </span>\n                    <input id="PortionSize" class="range" type="range" min="1" max="6" value="' +
        wormxt_Obj.PotenciadorSize +
        '" step="1" oninput="rangevalue1.value=value" />\n                    <output id="rangevalue1">' +
        wormxt_Obj.PotenciadorSize +
        '</output>\n                </div>\n                <div class="container">\n                    <span class="names_settings">Aura del potenciador: </span>\n                    <input id="PortionAura" class="range" type="range" min="1.2" max="3.2" value="' +
        wormxt_Obj.PotenciadorAura +
        '" step="0.2" oninput="PortionAuravalue.value=value" />\n                    <output id="PortionAuravalue">' +
        wormxt_Obj.PotenciadorAura +
        '</output>\n                </div>\n                <div class="container">\n                    <span class="names_settings">Tamaño de comida: </span>\n                    <input id="FoodSize" class="range" type="range" min="0.5" max="3" value="' +
        wormxt_Obj.ComidaSize +
        '" step="0.5" oninput="rangevalue2.value=value" />\n                    <output id="rangevalue2">' +
        wormxt_Obj.ComidaSize +
        '</output>\n                </div>\n                <div class="container">\n                    <span class="names_settings">Brillo de comida: </span>\n                    <input id="FoodShadow" class="range" type="range" min="0.5" max="3" value="' +
        wormxt_Obj.ComidaShadow +
        '" step="0.5" oninput="FoodShadowvalue.value=value" />\n                    <output id="FoodShadowvalue">' +
        wormxt_Obj.ComidaShadow +
        '</output>\n                </div>\n                <div class="settings-checkbox">\n                    <input type="checkbox" id="settings-backgroundSolid-switch">\n                    <span class="names_settings"> : Background Solid </span>\n                </div>\n                <div id="settings5dolars"></div>\n            </div>\n        </div>\n    '
    )
    $('#settings-backgroundSolid-switch').prop(
      'checked',
      wormxt_Obj.backgroundSolid
    )
    $('#settings-backgroundSolid-switch').on('click', function () {
      this.checked
        ? ((wormxt_Obj.backgroundSolid = true), setSectorsGame())
        : ((wormxt_Obj.backgroundSolid = false), setSectorsGame())
    })
    $('#clossed_Setings').on('click', function () {
      $('#settings-container2, #clossed_Setings').css('display', 'none')
      _0x207173 = true
      _0x3d8cc9()
    })
    function _0xa81ef7(_0x1abcc4, _0x66345f, _0x300982) {
      $(_0x1abcc4).on('input', function () {
        wormxt_Obj[_0x66345f] = $(this).val()
        localStorage.setItem(_0x300982, $(this).val())
        console.log(
          'Valor guardado en localStorage:',
          localStorage.getItem(_0x300982)
        )
      })
    }
    _0xa81ef7('#PortionSize', 'PotenciadorSize', 'PotenciadorSize')
    _0xa81ef7('#PortionAura', 'PotenciadorAura', 'PotenciadorAura')
    _0xa81ef7('#FoodSize', 'ComidaSize', 'ComidaSize')
    _0xa81ef7('#FoodShadow', 'ComidaShadow', 'ComidaShadow')
    var _0x98d7af = $('<img>', {
      id: 'christmas-hat',
      src: 'https://i.imgur.com/3H1zdPS.png',
      alt: 'Christmas Hat',
    })
    $('#christmas-hat').css({
      position: 'absolute',
      top: '-11px',
      transform: 'translateX(-5%)',
      width: '40px',
      height: 'auto',
    })
    $('#mm-player-info').css('position', 'relative')
  },
  ctx = {
    fontStyle: {
      blanco: new PIXI.TextStyle({
        align: 'center',
        fill: '#FFF',
        fontSize: 12,
        lineJoin: 'round',
        stroke: '#FFF',
        strokeThickness: 1,
        whiteSpace: 'normal',
        wordWrap: true,
      }),
    },
  }
timeFontColors = [
  '#FFD500',
  '#FFC75A',
  '#00B2ED',
  '#FF4544',
  '#0094D7',
  '#CCCF81',
  '#ff0999',
]
for (let index = 0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index]
  ctx.fontStyle['tfc' + index] = new PIXI.TextStyle({
    align: 'center',
    fill: color,
    fontSize: 25,
    lineJoin: 'round',
    whiteSpace: 'normal',
    wordWrap: true,
    dropShadow: true,
    dropShadowBlur: 6,
    fontWeight: 'bold',
  })
}
ctx.ptc = {}
const portionTimes = [40, 40, 40, 120, 40, 20, 40]
for (let i = 0; i < portionTimes.length; i++) {
  let name = 'clock_ad' + i
  ctx.ptc[name] = new PIXI.Text(portionTimes[i], ctx.fontStyle['tfc' + i])
  ctx.ptc[name].y = 61
}
ctx.imgTest_desactived = PIXI.Texture.fromImage(
  'https://i.imgur.com/K7UPjJJ.jpg'
)
ctx.containerImgTest = new PIXI.Sprite(ctx.imgTest_desactived)
ctx.containerImgTest.anchor.set(0.5)
ctx.containerImgTest.x = window.innerWidth / 2
ctx.containerImgTest.y = window.innerHeight / 2
ctx.containerImgTest.alpha = 0.3
function assignPtcValues(_0x4f94f7, _0x16adc7, _0x2fac01) {
  let _0x40ce85 =
      portionTimes[_0x16adc7] -
      parseInt(
        ((0.99 == _0x2fac01 ? 1 : _0x2fac01) * portionTimes[_0x16adc7]) / 1
      ),
    _0x38ed9d = 'clock_ad' + _0x16adc7
  _0x4f94f7.Tf[_0x16adc7].addChild(ctx.ptc[_0x38ed9d])
  ctx.ptc[_0x38ed9d] &&
    ((ctx.ptc[_0x38ed9d].x = _0x40ce85 >= 100 ? 11 : _0x40ce85 >= 10 ? 18 : 26),
    (ctx.ptc[_0x38ed9d].text = _0x40ce85))
}
ctx.teamsContainer = new PIXI.Container()
var createServerMessage = function (_0x41f6b9, _0xa2eea5) {
    if (_0xa2eea5.trim() === '') {
      return
    }
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: true,
      progressBar: true,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
      toastClass: 'server-message-toast',
    }
    toastr.success(_0xa2eea5, _0x41f6b9, { iconClass: 'toast-info' })
  },
  createTeamMessage = function (_0x1e7b1a, _0xad5d57, _0x5469ff) {
    if (_0x5469ff.trim() === '') {
      return
    }
    gameState.players.forEach((_0x47801e, _0x289c9c) => {
      if (
        _0x47801e.teamCode === _0x1e7b1a &&
        _0x47801e.nickname !== _0xad5d57
      ) {
        let _0x4074e2 =
          _0x47801e.nickname.length > 12
            ? _0x47801e.nickname.slice(0, 12)
            : _0x47801e.nickname
        toastr.options = {
          closeButton: false,
          debug: false,
          newestOnTop: true,
          progressBar: true,
          positionClass: 'toast-top-center',
          preventDuplicates: true,
          onclick: null,
          showDuration: '300',
          hideDuration: '1000',
          timeOut: '5000',
          extendedTimeOut: '1000',
          showEasing: 'swing',
          hideEasing: 'linear',
          showMethod: 'fadeIn',
          hideMethod: 'fadeOut',
        }
        toastr.success('' + _0x5469ff, '' + _0xad5d57, {
          iconClass: 'toast-info',
        })
        console.log(
          'Mensaje enviado por ' +
            _0xad5d57 +
            ' recibido por el jugador ' +
            _0x4074e2 +
            ' (' +
            _0x289c9c +
            ') del equipo ' +
            _0x1e7b1a
        )
      }
    })
  }
ctx.titleRec = new PIXI.Text('Top 8 (\uD83D\uDC51)', ctx.fontStyle.blanco)
ctx.titleRec.y = -5
ctx.containerHsRec = new PIXI.Container()
ctx.containerHsRec.x = -55
ctx.containerHsRec.y = 155
const colors = [
    16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215,
    16777215,
  ],
  textStyle = {
    align: 'center',
    fontSize: 12,
    lineJoin: 'round',
    strokeThickness: 1,
    whiteSpace: 'normal',
    wordWrap: true,
  }
for (let index = 0; index < 8; index++) {
  let wallBounce = index + 1,
    deltaCoordinate = new PIXI.Text(wallBounce + '.', ctx.fontStyle.blanco)
  deltaCoordinate.x = index >= 9 ? -5 : 0
  deltaCoordinate.y = 13 * wallBounce
  ctx.containerHsRec.addChild(deltaCoordinate)
  let playerNameText = new PIXI.Text('--', {
    fill: colors[index % colors.length],
    ...textStyle,
  })
  playerNameText.x = 15
  playerNameText.y = 13 * wallBounce
  ctx.containerHsRec.addChild(playerNameText)
  let playerHsText = new PIXI.Text('--', {
    fill: colors[index % colors.length],
    ...textStyle,
  })
  playerHsText.x = 100
  playerHsText.y = 13 * wallBounce
  ctx.containerHsRec.addChild(playerHsText)
}
ctx.containerHsRec.addChild(ctx.titleRec)
const updateTop8Hs = function () {
  const _0x2082df = gameState.players,
    _0x439c96 = Array.from(_0x2082df.values()),
    _0x10f902 = _0x439c96.filter(
      (_0x580f5e) => _0x580f5e.hskill.hs > 0 && _0x580f5e.nickname.trim() !== ''
    )
  _0x10f902.sort(
    (_0x1e72f9, _0x247440) => _0x247440.hskill.hs - _0x1e72f9.hskill.hs
  )
  console.log(_0x10f902)
  const _0x1b2afd = []
  for (let _0x3cc223 = 0; _0x3cc223 < 8; _0x3cc223++) {
    const _0x54dc15 = _0x10f902[_0x3cc223]
    _0x54dc15
      ? _0x1b2afd.push({
          nombre: _0x54dc15.nickname.substring(0, 10),
          nombre2: _0x54dc15.nickname.split('ㅤ')[0],
          enemyNameHs: _0x54dc15.enemyNameHs
            ? _0x54dc15.enemyNameHs.split('ㅤ')[0]
            : '--',
          hs: _0x54dc15.hskill.hs,
          teamCode: _0x54dc15.teamCode,
          teamColor: _0x54dc15.teamColor,
          position: _0x54dc15.position,
        })
      : _0x1b2afd.push({
          nombre: '--',
          nombre2: '--',
          enemyNameHs: '--',
          hs: '--',
          teamCode: '',
          teamColor: '',
          position: null,
        })
  }
  for (let _0x244dd8 = 0; _0x244dd8 < 8; _0x244dd8++) {
    ctx.containerHsRec.children[3 * _0x244dd8 + 1] &&
      (ctx.containerHsRec.children[3 * _0x244dd8 + 1].text =
        _0x1b2afd[_0x244dd8].nombre)
    ctx.containerHsRec.children[3 * _0x244dd8 + 2] &&
      (ctx.containerHsRec.children[3 * _0x244dd8 + 2].text =
        _0x1b2afd[_0x244dd8].hs)
  }
  const _0x45a13e = _0x1b2afd[0]
}
var createTeamUbication = function (_0xeb3c57, _0x271c26) {
    updatePlayerTable(gameState)
    gameState.players.forEach((_0x489bbb, _0x42a85f) => {
      if (_0x489bbb.teamCode === _0xeb3c57) {
        console.log(_0x489bbb)
        let _0x1bd7e0 = _0x489bbb.teamColor
          ? parseInt(_0x489bbb.teamColor)
          : _0x271c26
        !ctx[_0x42a85f] &&
          ((ctx[_0x42a85f] = new PIXI.Graphics()),
          (ctx[_0x42a85f].zIndex = 2),
          (ctx[_0x42a85f].alpha = 0.9),
          ctx.teamsContainer
            ? ctx.teamsContainer.addChild(ctx[_0x42a85f])
            : console.error('Error: ctx.teamsContainer is not defined.'))
        ctx[_0x42a85f].clear()
        ctx[_0x42a85f].beginFill(_0x1bd7e0)
        ctx[_0x42a85f].drawCircle(0, 0, 2.4)
        ctx[_0x42a85f].endFill()
        ctx[_0x42a85f].lineStyle(1, 0)
        ctx[_0x42a85f].drawCircle(0, 0, 2.4)
        ctx[_0x42a85f].endFill()
        ctx[_0x42a85f].x = _0x489bbb.position.x
        ctx[_0x42a85f].y = _0x489bbb.position.y
      }
    })
  },
  clearTeamUbication = function () {
    ctx.teamsContainer
      ? Object.keys(ctx).forEach((_0x4a1084) => {
          ctx[_0x4a1084] instanceof PIXI.Graphics &&
            ctx[_0x4a1084].parent === ctx.teamsContainer &&
            (ctx.teamsContainer.removeChild(ctx[_0x4a1084]),
            ctx[_0x4a1084].destroy(true),
            delete ctx[_0x4a1084])
          ctx[_0x4a1084 + '_text'] &&
            ctx[_0x4a1084 + '_text'].parent === ctx.teamsContainer &&
            (ctx.teamsContainer.removeChild(ctx[_0x4a1084 + '_text']),
            ctx[_0x4a1084 + '_text'].destroy(true),
            delete ctx[_0x4a1084 + '_text'])
        })
      : console.error('Error: ctx.teamsContainer is not defined.')
  }
ctx.titleRec2 = new PIXI.Text('Friends', ctx.fontStyle.blanco)
ctx.titleRec2.y = -5
ctx.containerHsRec2 = new PIXI.Container()
ctx.containerHsRec2.x = 30
ctx.containerHsRec2.y = 170
let playersTexts = []
for (let index = 0; index < 5; index++) {
  let wallBounce = index + 1,
    deltaCoordinate = new PIXI.Text(' ', ctx.fontStyle.blanco)
  deltaCoordinate.x = 0
  deltaCoordinate.y = 13 * wallBounce
  ctx.containerHsRec2.addChild(deltaCoordinate)
  let playerNameText = new PIXI.Text('--', {
    fill: '#FFFFFF',
    fontSize: 12,
  })
  playerNameText.x = 15
  playerNameText.y = 13 * wallBounce
  ctx.containerHsRec2.addChild(playerNameText)
  playersTexts.push(playerNameText)
}
ctx.containerHsRec2.addChild(ctx.titleRec2)
function updatePlayerTable(_0x3ea8d9) {
  const _0x377b71 = _0x3ea8d9.players,
    _0x31ab36 = Array.from(_0x377b71.values()),
    _0x3cb5a6 = _0x31ab36.filter(
      (_0x5d44cd) => _0x5d44cd.teamCode === zwormData.teamCode
    )
  playersTexts.forEach((_0x3899ca, _0x368dfc) => {
    if (_0x3cb5a6[_0x368dfc]) {
      let _0x21c75c = _0x3cb5a6[_0x368dfc]
      _0x3899ca.text = _0x21c75c.nickname.substring(0, 20)
      _0x3899ca.style.fill = _0x21c75c.teamColor
    } else {
      _0x3899ca.text = '--'
      _0x3899ca.style.fill = '#FFFFFF'
    }
  })
}
function account() {
  $('.servers-container > div').hide()
  $('.ui-tab').on('click', function () {
    var _0x2304eb = $(this).attr('data-country-name')
    $('.ui-tab').removeClass('ui-tab-active')
    $(this).addClass('ui-tab-active')
    $('.servers-container > div').hide()
    $('.servers-' + _0x2304eb.toLowerCase()).fadeIn(500)
    $('.servers-container > div')
      .not('.servers-' + _0x2304eb.toLowerCase())
      .fadeOut(100)
  })
}
function obtieneUSER() {
  var _0x8c220e = {},
    _0x52140a = {}
  window.onclick = function () {
    _0x52140a = window.nodes
    if (_0x52140a && Object.keys(_0x52140a).length > 0) {
      console.log(_0x52140a)
      if (_0x52140a) {
        var _0x26ea9c = window.mouseX - _0x52140a.qj.If.x,
          _0x786141 = window.mouseY - _0x52140a.qj.If.y,
          _0x269c72 = _0x52140a.Mb.ad,
          _0x122b16 = Math.sqrt(_0x26ea9c * _0x26ea9c + _0x786141 * _0x786141)
        console.log(
          'Cell:',
          _0x52140a,
          'nickname: ',
          _0x269c72,
          'Distance:',
          _0x122b16
        )
      }
    }
  }
}
function loadScript2(_0x1cca00, _0x5dccb5 = true) {
  return new Promise((_0x3a5ccc, _0xac40af) => {
    var _0x49be60 = document.createElement('script')
    _0x49be60.type = 'text/javascript'
    _0x49be60.src = _0x1cca00
    _0x49be60.defer = _0x5dccb5
    _0x49be60.onload = _0x3a5ccc
    _0x49be60.onerror = _0xac40af
    document.head.appendChild(_0x49be60)
  })
}
function loadStylesheet(_0x324105) {
  return new Promise((_0x99f24c, _0x507912) => {
    var _0x2f5cf1 = document.createElement('link')
    _0x2f5cf1.rel = 'stylesheet'
    _0x2f5cf1.type = 'text/css'
    _0x2f5cf1.href = _0x324105
    _0x2f5cf1.onload = _0x99f24c
    _0x2f5cf1.onerror = _0x507912
    document.head.appendChild(_0x2f5cf1)
  })
}
loadStylesheet(
  'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap'
)
loadScript2(
  'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js'
)
loadStylesheet(
  'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css'
)
;('use strict')
var _typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (_0x5e8363) {
          return typeof _0x5e8363
        }
      : function (_0x25864c) {
          return _0x25864c &&
            'function' == typeof Symbol &&
            _0x25864c.constructor === Symbol &&
            _0x25864c !== Symbol.prototype
            ? 'symbol'
            : typeof _0x25864c
        },
  GoogleAuth
!(function () {
  try {
    console.log(
      (function (_0x357193, _0x1a3e4d) {
        for (var _0x4c82c1 = 0; _0x4c82c1 < _0x1a3e4d.length; _0x4c82c1 += 2) {
          _0x357193 = _0x357193.replaceAll(
            _0x1a3e4d[_0x4c82c1],
            _0x1a3e4d[_0x4c82c1 + 1]
          )
        }
        return _0x357193
      })(
        'N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN',
        [
          'W',
          'hhhh',
          'Q',
          'ssss',
          'M',
          'mmm',
          'Y',
          'yyy',
          'H',
          'hh',
          'S',
          'ss',
          '6',
          '      ',
          '3',
          '   ',
          '2',
          '  ',
          'N',
          '\n',
        ]
      )
    )
  } catch (_0x180c2d) {}
})()
window.addEventListener('load', function () {
  function _0x1c0206() {
    return (
      (function (_0x453bb9, _0x8d0d82, _0x3be077) {
        function _0x35c92b(_0xbf5b79, _0x3734b2) {
          return (
            (void 0 === _0xbf5b79 ? 'undefined' : _typeof(_0xbf5b79)) ===
            _0x3734b2
          )
        }
        function _0x3a385e() {
          return 'function' != typeof _0x8d0d82.createElement
            ? _0x8d0d82.createElement(arguments[0])
            : _0x30f2ca
            ? _0x8d0d82.createElementNS.call(
                _0x8d0d82,
                'http://www.w3.org/2000/svg',
                arguments[0]
              )
            : _0x8d0d82.createElement.apply(_0x8d0d82, arguments)
        }
        var _0x1bdfe2 = [],
          _0x3e1305 = [],
          _0x52177b = {
            _version: '3.3.1',
            _config: {
              classPrefix: '',
              enableClasses: true,
              enableJSClass: true,
              usePrefixes: true,
            },
            _q: [],
            on: function (_0x3e3eb3, _0x4ce4bd) {
              var _0x308a81 = this
              setTimeout(function () {
                _0x4ce4bd(_0x308a81[_0x3e3eb3])
              }, 0)
            },
            addTest: function (_0x1ef607, _0x2af38d, _0x3c9d80) {
              _0x3e1305.push({
                name: _0x1ef607,
                fn: _0x2af38d,
                options: _0x3c9d80,
              })
            },
            addAsyncTest: function (_0x47ab08) {
              _0x3e1305.push({
                name: null,
                fn: _0x47ab08,
              })
            },
          },
          _0x41dd91 = function () {}
        _0x41dd91.prototype = _0x52177b
        _0x41dd91 = new _0x41dd91()
        var _0x8be894 = false
        try {
          _0x8be894 =
            'WebSocket' in _0x453bb9 && 2 === _0x453bb9.WebSocket.CLOSING
        } catch (_0x52ee67) {}
        _0x41dd91.addTest('websockets', _0x8be894)
        var _0x393815 = _0x8d0d82.documentElement,
          _0x30f2ca = 'svg' === _0x393815.nodeName.toLowerCase()
        _0x41dd91.addTest('canvas', function () {
          var _0x403c09 = _0x3a385e('canvas')
          return !(!_0x403c09.getContext || !_0x403c09.getContext('2d'))
        })
        _0x41dd91.addTest('canvastext', function () {
          return (
            false !== _0x41dd91.canvas &&
            'function' == typeof _0x3a385e('canvas').getContext('2d').fillText
          )
        })
        ;(function () {
          var _0xec0225,
            _0x140bf2,
            _0x49e7b6,
            _0x3afdce,
            _0xe02c47,
            _0x46b330,
            _0x271570
          for (var _0x4bd254 in _0x3e1305)
            if (_0x3e1305.hasOwnProperty(_0x4bd254)) {
              if (
                ((_0xec0225 = []),
                (_0x140bf2 = _0x3e1305[_0x4bd254]),
                _0x140bf2.name &&
                  (_0xec0225.push(_0x140bf2.name.toLowerCase()),
                  _0x140bf2.options &&
                    _0x140bf2.options.aliases &&
                    _0x140bf2.options.aliases.length))
              ) {
                for (
                  _0x49e7b6 = 0;
                  _0x49e7b6 < _0x140bf2.options.aliases.length;
                  _0x49e7b6++
                ) {
                  _0xec0225.push(
                    _0x140bf2.options.aliases[_0x49e7b6].toLowerCase()
                  )
                }
              }
              for (
                _0x3afdce = _0x35c92b(_0x140bf2.fn, 'function')
                  ? _0x140bf2.fn()
                  : _0x140bf2.fn,
                  _0xe02c47 = 0;
                _0xe02c47 < _0xec0225.length;
                _0xe02c47++
              ) {
                _0x46b330 = _0xec0225[_0xe02c47]
                _0x271570 = _0x46b330.split('.')
                1 === _0x271570.length
                  ? (_0x41dd91[_0x271570[0]] = _0x3afdce)
                  : (!_0x41dd91[_0x271570[0]] ||
                      _0x41dd91[_0x271570[0]] instanceof Boolean ||
                      (_0x41dd91[_0x271570[0]] = new Boolean(
                        _0x41dd91[_0x271570[0]]
                      )),
                    (_0x41dd91[_0x271570[0]][_0x271570[1]] = _0x3afdce))
                _0x1bdfe2.push((_0x3afdce ? '' : 'no-') + _0x271570.join('-'))
              }
            }
        })()
        ;(function (_0x40cd30) {
          var _0x5b88f8 = _0x393815.className,
            _0x49ad91 = _0x41dd91['_config'].classPrefix || ''
          if (
            (_0x30f2ca && (_0x5b88f8 = _0x5b88f8.baseVal),
            _0x41dd91['_config'].enableJSClass)
          ) {
            var _0x5d38cb = new RegExp('(^|\\s)' + _0x49ad91 + 'no-js(\\s|$)')
            _0x5b88f8 = _0x5b88f8.replace(_0x5d38cb, '$1' + _0x49ad91 + 'js$2')
          }
          _0x41dd91['_config'].enableClasses &&
            ((_0x5b88f8 += ' ' + _0x49ad91 + _0x40cd30.join(' ' + _0x49ad91)),
            _0x30f2ca
              ? (_0x393815.className.baseVal = _0x5b88f8)
              : (_0x393815.className = _0x5b88f8))
        })(_0x1bdfe2)
        delete _0x52177b.addTest
        delete _0x52177b.addAsyncTest
        for (
          var _0x320aee = 0;
          _0x320aee < _0x41dd91['_q'].length;
          _0x320aee++
        ) {
          _0x41dd91['_q'][_0x320aee]()
        }
        _0x453bb9.Modernizr = _0x41dd91
      })(window, document),
      Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
    )
  }
  if (
    ((document[_0x1eab7b(570)](_0x1eab7b(1185)).style[_0x1eab7b(1677)] =
      _0x1eab7b(1470)),
    !_0x1c0206())
  ) {
    return void (document[_0x1eab7b(570)](_0x1eab7b(723)).style[
      _0x1eab7b(1677)
    ] = _0x1eab7b(1470))
  }
  !(function () {
    function _0x243186() {
      return (window.anApp = _0x312d18)
    }
    function _0x2763a0(_0xc25182) {
      const _0x225523 = _0xc25182 + '=',
        _0x3ce2bc = document.cookie.split(';')
      for (let _0x49f129 = 0; _0x49f129 < _0x3ce2bc.length; _0x49f129++) {
        let _0x272bb5 = _0x3ce2bc[_0x49f129]
        while (_0x272bb5.charAt(0) === ' ') {
          _0x272bb5 = _0x272bb5.substring(1)
        }
        if (_0x272bb5.indexOf(_0x225523) === 0) {
          return _0x272bb5.substring(_0x225523.length, _0x272bb5.length)
        }
      }
      return ''
    }
    function _0x483a04(_0x4bf33c, _0x3eae1e, _0xd60ffb) {
      var _0x1d47c3 = new Date()
      _0x1d47c3.setTime(_0x1d47c3.getTime() + 86400000 * _0xd60ffb)
      var _0x573b8e = 'expires=' + _0x1d47c3.toUTCString()
      document.cookie =
        _0x4bf33c + '=' + _0x3eae1e + '; ' + _0x573b8e + '; path=/'
    }
    function _0x8f3db1(_0x2f9d20) {
      return window.I18N_MESSAGES[_0x2f9d20]
    }
    function _0x23ea69(_0x4faa67) {
      return _0x4faa67[_0x5b3ad3]
        ? _0x4faa67[_0x5b3ad3]
        : _0x4faa67.en
        ? _0x4faa67.en
        : _0x4faa67.x
    }
    function _0x41f5c2(_0x3235ce) {
      var _0x375afc = (Math.floor(_0x3235ce) % 60).toString(),
        _0x85d6ff = (Math.floor(_0x3235ce / 60) % 60).toString(),
        _0x864be5 = (Math.floor(_0x3235ce / 3600) % 24).toString(),
        _0x4adcea = Math.floor(_0x3235ce / 86400).toString(),
        _0xc58188 = _0x8f3db1('util.time.days'),
        _0x46012b = _0x8f3db1('util.time.hours'),
        _0x4a69f2 = _0x8f3db1('util.time.min'),
        _0x1efe24 = _0x8f3db1('util.time.sec')
      return _0x4adcea > 0
        ? _0x4adcea +
            ' ' +
            _0xc58188 +
            ' ' +
            _0x864be5 +
            ' ' +
            _0x46012b +
            ' ' +
            _0x85d6ff +
            ' ' +
            _0x4a69f2 +
            ' ' +
            _0x375afc +
            ' ' +
            _0x1efe24
        : _0x864be5 > 0
        ? _0x864be5 +
          ' ' +
          _0x46012b +
          ' ' +
          _0x85d6ff +
          ' ' +
          _0x4a69f2 +
          ' ' +
          _0x375afc +
          ' ' +
          _0x1efe24
        : _0x85d6ff > 0
        ? _0x85d6ff + ' ' + _0x4a69f2 + ' ' + _0x375afc + ' ' + _0x1efe24
        : _0x375afc + ' ' + _0x1efe24
    }
    function _0x4ec0b9(_0x289983) {
      return _0x289983.includes('href')
        ? _0x289983.replaceAll('href', 'target="_black" href')
        : _0x289983
    }
    function _0x48fbee(_0x1af6e3, _0x47fbc0, _0x4aa0b6) {
      var _0x28810a = document.createElement('script'),
        _0x3c048b = true
      _0x47fbc0 && (_0x28810a.id = _0x47fbc0)
      _0x28810a.async = 'async'
      _0x28810a.type = 'text/javascript'
      _0x28810a.src = _0x1af6e3
      _0x4aa0b6 &&
        (_0x28810a.onload = _0x28810a.onreadystatechange =
          function () {
            _0x3c048b = false
            try {
              _0x4aa0b6()
            } catch (_0x31a77f) {
              console.log(_0x31a77f)
            }
            _0x28810a.onload = _0x28810a.onreadystatechange = null
          })
      ;(document.head || document.getElementsByTagName('head')[0]).appendChild(
        _0x28810a
      )
    }
    function _0x107c5f(_0x535d5d, _0x608024) {
      var _0x2ccb1e = _0x608024
      return (
        (_0x2ccb1e.prototype = Object.create(_0x535d5d.prototype)),
        (_0x2ccb1e.prototype.constructor = _0x2ccb1e),
        (_0x2ccb1e.parent = _0x535d5d),
        _0x2ccb1e
      )
    }
    function _0x23f443(_0x10ed69) {
      return (
        (_0x10ed69 %= _0x151922),
        _0x10ed69 < 0 ? _0x10ed69 + _0x151922 : _0x10ed69
      )
    }
    function _0xc66e9d(_0x55b31b, _0xb98bcb, _0x27dce7) {
      return _0x49568a(_0x27dce7, _0x55b31b, _0xb98bcb)
    }
    function _0x49568a(_0x1986be, _0x3b2ca1, _0x2f2041) {
      return _0x1986be > _0x2f2041
        ? _0x2f2041
        : _0x1986be < _0x3b2ca1
        ? _0x3b2ca1
        : Number.isFinite(_0x1986be)
        ? _0x1986be
        : 0.5 * (_0x3b2ca1 + _0x2f2041)
    }
    function _0x3aadc7(_0x23550e, _0x249a8c, _0x3120fe, _0x543808) {
      return _0x249a8c > _0x23550e
        ? Math.min(_0x249a8c, _0x23550e + _0x3120fe * _0x543808)
        : Math.max(_0x249a8c, _0x23550e - _0x3120fe * _0x543808)
    }
    function _0x1811b0(_0x4e73fb, _0xdcc6cc, _0x12710d, _0x59e89b, _0x545b99) {
      return (
        _0xdcc6cc +
        (_0x4e73fb - _0xdcc6cc) * Math.pow(1 - _0x59e89b, _0x12710d / _0x545b99)
      )
    }
    function _0x2e3b71(_0x579d37, _0x8a92cc, _0x2eb408) {
      return _0x579d37 * (1 - _0x2eb408) + _0x8a92cc * _0x2eb408
    }
    function _0x54fcf4(_0x4269c2, _0x4eb22a, _0x17fe42, _0x22f4f5) {
      var _0x53ee01 = _0x17fe42,
        _0x5eb233 = _0x4eb22a,
        _0x599324 = _0x4eb22a + _0x22f4f5
      if (null == _0x4269c2) {
        throw new TypeError('this is null or not defined')
      }
      var _0x22c3f7 = _0x4269c2.length >>> 0,
        _0x421ccb = _0x53ee01 >> 0,
        _0x35b3a6 =
          _0x421ccb < 0
            ? Math.max(_0x22c3f7 + _0x421ccb, 0)
            : Math.min(_0x421ccb, _0x22c3f7),
        _0x58953e = _0x5eb233 >> 0,
        _0x327175 =
          _0x58953e < 0
            ? Math.max(_0x22c3f7 + _0x58953e, 0)
            : Math.min(_0x58953e, _0x22c3f7),
        _0x5495de = void 0 === _0x599324 ? _0x22c3f7 : _0x599324 >> 0,
        _0x249f7e =
          _0x5495de < 0
            ? Math.max(_0x22c3f7 + _0x5495de, 0)
            : Math.min(_0x5495de, _0x22c3f7),
        _0x3cc5f4 = Math.min(_0x249f7e - _0x327175, _0x22c3f7 - _0x35b3a6),
        _0x2503d1 = 1
      for (
        _0x327175 < _0x35b3a6 &&
        _0x35b3a6 < _0x327175 + _0x3cc5f4 &&
        ((_0x2503d1 = -1),
        (_0x327175 += _0x3cc5f4 - 1),
        (_0x35b3a6 += _0x3cc5f4 - 1));
        _0x3cc5f4 > 0;

      ) {
        _0x327175 in _0x4269c2
          ? (_0x4269c2[_0x35b3a6] = _0x4269c2[_0x327175])
          : delete _0x4269c2[_0x35b3a6]
        _0x327175 += _0x2503d1
        _0x35b3a6 += _0x2503d1
        _0x3cc5f4--
      }
      return _0x4269c2
    }
    function _0x351ee7(_0x87ca7c) {
      return _0x87ca7c.getContext('2d')
    }
    function _0x2aedf9(_0x58449b) {
      null != _0x58449b.parent && _0x58449b.parent.removeChild(_0x58449b)
    }
    function _0x12c25c(_0x3f4415) {
      return _0x3f4415[parseInt(Math.random() * _0x3f4415.length)]
    }
    function _0x38de6e() {
      return Math.random().toString(36).substring(2, 15)
    }
    function _0x414e47(_0x49b5af, _0x5e06a8, _0x4b6bca) {
      var _0x81b199 = (1 - Math.abs(2 * _0x4b6bca - 1)) * _0x5e06a8,
        _0x442412 = _0x81b199 * (1 - Math.abs(((_0x49b5af / 60) % 2) - 1)),
        _0x5eb91b = _0x4b6bca - _0x81b199 / 2
      return 0 <= _0x49b5af && _0x49b5af < 60
        ? [_0x5eb91b + _0x81b199, _0x5eb91b + _0x442412, _0x5eb91b + 0]
        : 60 <= _0x49b5af && _0x49b5af < 120
        ? [_0x5eb91b + _0x442412, _0x5eb91b + _0x81b199, _0x5eb91b + 0]
        : 120 <= _0x49b5af && _0x49b5af < 180
        ? [_0x5eb91b + 0, _0x5eb91b + _0x81b199, _0x5eb91b + _0x442412]
        : 180 <= _0x49b5af && _0x49b5af < 240
        ? [_0x5eb91b + 0, _0x5eb91b + _0x442412, _0x5eb91b + _0x81b199]
        : 240 <= _0x49b5af && _0x49b5af < 300
        ? [_0x5eb91b + _0x442412, _0x5eb91b + 0, _0x5eb91b + _0x81b199]
        : [_0x5eb91b + _0x81b199, _0x5eb91b + 0, _0x5eb91b + _0x442412]
    }
    function _0x58cc52() {
      function _0x1c41a7() {
        let _0x36e660 = theoKzObjects.adblock ? 1 : 5
        $('#adbl-1').text(_0x8f3db1('index.game.antiadblocker.msg1'))
        $('#adbl-2').text(_0x8f3db1('index.game.antiadblocker.msg2'))
        $('#adbl-3').text(_0x8f3db1('index.game.antiadblocker.msg3'))
        $('#adbl-4').text(
          _0x8f3db1('index.game.antiadblocker.msg4').replace('{0}', 10)
        )
        $('#adbl-continue span').text(
          _0x8f3db1('index.game.antiadblocker.continue')
        )
        $('#adbl-continue').hide()
        $('#' + _0x23d05b).fadeIn(500)
        for (
          var _0x2989be = _0x36e660, _0x116e1a = 0;
          _0x116e1a < _0x36e660;
          _0x116e1a++
        ) {
          setTimeout(function () {
            if (
              (_0x2989be--,
              $('#adbl-4').text(
                _0x8f3db1('index.game.antiadblocker.msg4').replace(
                  '{0}',
                  _0x2989be
                )
              ),
              0 === _0x2989be)
            ) {
              console.log('aipAABC')
              try {
                ga(
                  'send',
                  'event',
                  'antiadblocker',
                  window.runtimeHash + '_complete'
                )
              } catch (_0x42d34d) {}
              $('#adbl-continue').fadeIn(200)
            }
          }, 1000 * (_0x116e1a + 1))
        }
      }
      var _0x217e79 = false,
        _0x56a00b = function () {},
        _0x76795a = {},
        _0x23d05b = 'JDHnkHtYwyXyVgG9'
      return (
        $('#adbl-continue').click(function () {
          $('#' + _0x23d05b).fadeOut(500)
          _0x56a00b(false)
        }),
        (_0x76795a.a = function (_0x5ba6de) {
          if (((_0x56a00b = _0x5ba6de), !_0x217e79)) {
            try {
              aiptag.cmd.player.push(function () {
                aiptag.adplayer = new aipPlayer({
                  AD_WIDTH: 960,
                  AD_HEIGHT: 540,
                  AD_FULLSCREEN: true,
                  AD_CENTERPLAYER: false,
                  LOADING_TEXT: 'loading advertisement',
                  PREROLL_ELEM: function () {
                    return document.getElementById('1eaom01c3pxu9wd3')
                  },
                  AIP_COMPLETE: function (_0x2d6c2f) {
                    console.log('aipC')
                    _0x56a00b(true)
                    $('#1eaom01c3pxu9wd3').hide()
                    $('#' + _0x23d05b).hide()
                    try {
                      ga(
                        'send',
                        'event',
                        'preroll',
                        window.runtimeHash + '_complete'
                      )
                    } catch (_0x19a4f5) {}
                  },
                  AIP_REMOVE: function () {},
                })
              })
              _0x217e79 = true
            } catch (_0x2fc8da) {}
          }
        }),
        (_0x76795a.b = function () {
          if (void 0 !== aiptag.adplayer) {
            console.log('aipS')
            try {
              ga('send', 'event', 'preroll', window.runtimeHash + '_request')
            } catch (_0x27b68d) {}
            _0x1c41a7()
          } else {
            console.log('aipAABS')
            try {
              ga(
                'send',
                'event',
                'antiadblocker',
                window.runtimeHash + '_start'
              )
            } catch (_0xc40896) {}
            _0x1c41a7()
          }
        }),
        _0x76795a
      )
    }
    function _0xd78627(_0x3a37c5, _0x1d7f30) {
      var _0x593fac = $('#' + _0x3a37c5),
        _0x10f170 = _0x1d7f30,
        _0xe93692 = {},
        _0xa9733d = false
      return (
        (_0xe93692.a = function () {
          if (!_0xa9733d) {
            _0x593fac.empty()
            _0x593fac.append("<div id='" + _0x10f170 + "'></div>")
            try {
              try {
                ga('send', 'event', 'banner', window.runtimeHash + '_display')
              } catch (_0x2a7ce9) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(_0x10f170)
              })
              _0xa9733d = true
            } catch (_0x2fdcdc) {}
          }
        }),
        (_0xe93692.c = function () {
          try {
            try {
              ga('send', 'event', 'banner', window.runtimeHash + '_refresh')
            } catch (_0x1a0e41) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x10f170)
            })
          } catch (_0x275b78) {}
        }),
        _0xe93692
      )
    }
    function _0x527750() {
      function _0x9b07ab(_0x5ecf20) {
        var _0x5e7cae = _0x5ecf20 + 37 * Math.floor(65535 * Math.random())
        _0x483a04(_0x1f898b.d, _0x5e7cae, 30)
      }
      function _0x2bf49d() {
        return parseInt(_0x2763a0(_0x1f898b.d)) % 37
      }
      return (function () {
        var _0x93822b = _0x2bf49d()
        console.log('init1 pSC: ' + _0x93822b)
        !(_0x93822b >= 0 && _0x93822b < _0x2bfe8a.e) &&
          ((_0x93822b = Math.max(0, _0x2bfe8a.e - 2)),
          console.log('init2 pSC: ' + _0x93822b))
        var _0x7a4bbc = {
          f: _0x2bfe8a,
          g: false,
          i: Date.now(),
          j: 0,
          k: 0,
          l: null,
          m: _0x3bdd75,
          n: _0x5b3ad3,
          o: null,
          p: null,
          q: null,
          r: null,
          s: null,
          t: null,
          u: null,
          p: new _0x57d163(),
          q: new _0x1d273d(),
          r: new _0x2d9e22(),
          s: new _0x4f5eee(),
          t: new _0xdcffeb(),
          u: new _0x5cbba7(),
          o: new _0x1f921f(),
          g: _0x324dcd,
          j: Date.now(),
          k: _0x7a4bbc.j - _0x7a4bbc.i,
          i: _0x7a4bbc.j,
        }
        _0x312d18 = _0x7a4bbc
        try {
          navigator &&
            navigator.geolocation &&
            navigator.geolocation.getCurrentPosition(
              function (_0x1e88e3) {
                if (void 0 !== _0x1e88e3.coords) {
                  var _0x5e48f1 = _0x1e88e3.coords
                  void 0 !== _0x5e48f1.latitude &&
                    void 0 !== _0x5e48f1.longitude &&
                    (_0x7a4bbc.l = _0x1e88e3)
                }
              },
              function (_0x331385) {}
            )
        } catch (_0x554450) {}
        return (
          (_0x7a4bbc.v = function () {
            _0x7a4bbc.o.z = new _0x1578dc(_0x7a4bbc.o)
            window.MessageProcessor = new _0x1578dc(_0x7a4bbc.o)
            _0x7a4bbc.a()
          }),
          (_0x7a4bbc.a = function () {
            try {
              ga('send', 'event', 'app', window.runtimeHash + '_init')
            } catch (_0x26ce73) {}
            _0x7a4bbc.o.A = function () {
              _0x7a4bbc.o.B()
            }
            _0x7a4bbc.o.C = function () {
              var _0x212c2d = _0x7a4bbc.s.F.D()
              try {
                ga(
                  'send',
                  'event',
                  'game',
                  window.runtimeHash + '_start',
                  _0x212c2d
                )
              } catch (_0x35f162) {}
              _0x7a4bbc.r.G(_0x2d9e22.AudioState.H)
              _0x7a4bbc.s.I(_0x7a4bbc.s.H.J())
            }
            _0x7a4bbc.o.B = function () {
              try {
                ga('send', 'event', 'game', window.runtimeHash + '_end')
              } catch (_0x2cf76e) {}
              $('body').height() >= 430 && _0x7a4bbc.f.K.c()
              _0x7a4bbc.p.L()
              ;(function () {
                var _0x134e34 = Math.floor(_0x7a4bbc.o.N.M),
                  _0x353488 = _0x7a4bbc.o.O
                _0x7a4bbc.u.P()
                  ? _0x7a4bbc.u.Q(function () {
                      _0x7a4bbc.R(_0x134e34, _0x353488)
                    })
                  : _0x7a4bbc.R(_0x134e34, _0x353488)
              })()
            }
            _0x7a4bbc.o.S = function (_0xe3fa7d) {
              _0xe3fa7d(_0x7a4bbc.s.H.T(), _0x7a4bbc.s.H.U())
            }
            _0x7a4bbc.u.V(function () {
              if (
                (_0x7a4bbc.p.W &&
                  (_0x7a4bbc.r.G(_0x2d9e22.AudioState.F),
                  _0x7a4bbc.s.I(_0x7a4bbc.s.F)),
                _0x7a4bbc.u.P())
              ) {
                try {
                  var _0x483e3a = _0x7a4bbc.u.X()
                  ga('set', 'userId', _0x483e3a)
                } catch (_0x4e2b7c) {}
              }
              _0x7a4bbc.Y() && _0x7a4bbc.u.P() && !_0x7a4bbc.u.Z()
                ? (_0x7a4bbc['$'](false, false),
                  _0x7a4bbc.s.aa['_'](new _0x14730c()))
                : _0x7a4bbc.ba(true)
            })
            _0x7a4bbc.p.ca(function () {
              _0x7a4bbc.r.G(_0x2d9e22.AudioState.F)
              _0x7a4bbc.s.I(_0x7a4bbc.s.F)
            })
            _0x7a4bbc.q.a(function () {
              _0x7a4bbc.o.a()
              _0x7a4bbc.r.a()
              _0x7a4bbc.s.a()
              _0x7a4bbc.t.a()
              _0x7a4bbc.p.a()
              _0x7a4bbc.u.a()
              _0x7a4bbc.Y() && !_0x7a4bbc.Z()
                ? _0x7a4bbc.s.aa['_'](new _0x14730c())
                : _0x7a4bbc.ba(true)
            })
          }),
          (_0x7a4bbc.da = function (_0x478da1) {
            if (_0x7a4bbc.u.P()) {
              var _0x717bc1 = _0x7a4bbc.u.ea()
              $.get(
                _0x4435a1 +
                  '/pub/wuid/' +
                  _0x717bc1 +
                  '/consent/change?value=' +
                  encodeURI(_0x478da1),
                function (_0x3fdeb0) {}
              )
            }
          }),
          (_0x7a4bbc.fa = function (_0x4f2f48) {
            var _0x43bc3e = _0x7a4bbc.u.ea(),
              _0x458bab = _0x7a4bbc.s.F.D(),
              _0x25ad4a = _0x7a4bbc.s.F.ga(),
              _0x4687f5 = _0x7a4bbc.t.ha(_0x4c3f31.ia),
              _0x17ec6c = _0x7a4bbc.t.ha(_0x4c3f31.ja),
              _0x318f94 = _0x7a4bbc.t.ha(_0x4c3f31.ka),
              _0x5119b5 = _0x7a4bbc.t.ha(_0x4c3f31.la),
              _0x2bf8b2 = _0x7a4bbc.t.ha(_0x4c3f31.ma),
              _0x507051 = 0
            if (null != _0x7a4bbc.l) {
              var _0x5836d2 = _0x7a4bbc.l.coords.latitude,
                _0x4be150 = _0x7a4bbc.l.coords.longitude
              _0x507051 =
                1 |
                (Math.max(
                  0,
                  Math.min(32767, ((_0x5836d2 + 90) / 180) * 32768)
                ) <<
                  1) |
                (Math.max(
                  0,
                  Math.min(65535, ((_0x4be150 + 180) / 360) * 65536)
                ) <<
                  16)
            }
            _wrmxt.testSkinCustom(_0x4687f5)
            let _0x58dc21 =
              'XТ_' +
              (999 < _0x4687f5 ? '000' : _0x4687f5.toString().padStart(3, 0)) +
              (999 < _0x2bf8b2 ? '000' : _0x2bf8b2.toString().padStart(3, 0))
            _0x25ad4a =
              (32 <= _0x25ad4a.length
                ? _0x25ad4a.substr(0, 16)
                : _0x25ad4a.substr(0, 16).padEnd(16)) + _0x58dc21
            _0x25ad4a = _0x25ad4a.trim().replace(/\s/g, 'ㅤ')
            console.log(_0x25ad4a)
            zwormData.nickname = _0x25ad4a
            var _0x32b204 =
              _0x4435a1 +
              '/pub/wuid/' +
              _0x43bc3e +
              '/start?gameMode=' +
              encodeURI(_0x458bab) +
              '&gh=' +
              _0x507051 +
              '&nickname=' +
              encodeURI(_0x25ad4a) +
              '&skinId=' +
              _wrmxt.validInput(_0x4687f5) +
              '&eyesId=' +
              encodeURI(_0x17ec6c) +
              '&mouthId=' +
              encodeURI(_0x318f94) +
              '&glassesId=' +
              encodeURI(_0x5119b5) +
              '&hatId=' +
              encodeURI(_0x2bf8b2)
            console.log('urlRequest: ' + _0x32b204)
            $.get(_0x32b204, function (_0x37e9ea) {
              var _0x174a5e = _0x37e9ea.server_url
              _0x4f2f48(_0x174a5e)
            })
          }),
          (_0x7a4bbc.na = function () {
            _0x93822b++
            console.log('start pSC: ' + _0x93822b)
            !_0x7a4bbc.f.oa && _0x93822b >= _0x7a4bbc.f.e
              ? (_0x7a4bbc.s.I(_0x7a4bbc.s.pa),
                _0x7a4bbc.r.G(_0x2d9e22.AudioState.qa),
                _0x7a4bbc.f.ra.b())
              : (_0x9b07ab(_0x93822b),
                _0x7a4bbc.sa(),
                (lxpdservertext.text = ''))
          }),
          (_0x7a4bbc.sa = function (_0x2a187a) {
            lxpdkillcount = 0
            lxpdhscount = 0
            if (_0x7a4bbc.o.ta()) {
              _0x7a4bbc.s.I(_0x7a4bbc.s.ua)
              _0x7a4bbc.r.G(_0x2d9e22.AudioState.ua)
              var _0x54ada0 = _0x7a4bbc.s.F.D()
              _0x483a04(_0x1f898b.va, _0x54ada0, 30)
              console.log('save gm: ' + _0x54ada0)
              var _0x58c95c = _0x7a4bbc.s.xa.wa()
              if (
                (_0x483a04(_0x1f898b.ya, _0x58c95c, 30),
                console.log('save sPN: ' + _0x58c95c),
                _0x7a4bbc.u.P())
              ) {
                _0x7a4bbc.fa(function (_0x18fd2b) {
                  lxpdlastserver = _0x2a187a ? _0x2a187a : _0x18fd2b
                  zwormData.wssServer = lxpdlastserver
                  _0x7a4bbc.o.za(_0x2a187a || _0x18fd2b, _0x7a4bbc.u.ea())
                })
              } else {
                var _0x26a264 = _0x7a4bbc.s.F.ga()
                _0x483a04(_0x1f898b.Aa, _0x26a264, 30)
                var _0x158046 = _0x7a4bbc.t.ha(_0x4c3f31.ia)
                _0x483a04(_0x1f898b.Ba, _0x158046, 30)
                _0x7a4bbc.fa(function (_0x21890e) {
                  lxpdlastserver = _0x2a187a ? _0x2a187a : _0x21890e
                  zwormData.wssServer = lxpdlastserver
                  _0x7a4bbc.o.Ca(_0x2a187a || _0x21890e, _0x26a264, _0x158046)
                })
              }
            }
          }),
          (_0x7a4bbc.R = function (_0x3bc7ba, _0x167b62) {
            var _0x5836af = _0x7a4bbc.s.F.ga()
            _0x7a4bbc.s.H.Da(_0x3bc7ba, _0x167b62, _0x5836af)
            _0x7a4bbc.r.G(_0x2d9e22.AudioState.Ea)
            _0x7a4bbc.s.I(_0x7a4bbc.s.H.Fa())
          }),
          (_0x7a4bbc.Ga = function () {
            if (!_0x7a4bbc.Ha()) {
              return _0x7a4bbc.t.Ia()
            }
            var _0x19fcee = parseInt(_0x2763a0(_0x1f898b.Ba))
            return null != _0x19fcee && _0x7a4bbc.t.Ja(_0x19fcee, _0x4c3f31.ia)
              ? _0x19fcee
              : _0x7a4bbc.t.Ia()
          }),
          (_0x7a4bbc.Ka = function (_0x4c6590) {
            _0x483a04(_0x1f898b.La, !!_0x4c6590, 1800)
          }),
          (_0x7a4bbc.Ha = function () {
            return 'true' === _0x2763a0(_0x1f898b.La)
          }),
          (_0x7a4bbc.ba = function (_0x324dcd) {
            if (_0x324dcd != _0x7a4bbc.g) {
              var _0x514039 = _0x514039 || {}
              _0x514039.consented = _0x324dcd
              _0x514039.gdprConsent = _0x324dcd
              _0x7a4bbc.f.Ma.a()
              _0x7a4bbc.f.K.a()
              _0x7a4bbc.f.ra.a(function (_0x2952c8) {
                _0x2952c8 && _0x9b07ab((_0x93822b = 0))
                _0x7a4bbc.sa()
              })
            }
          }),
          (_0x7a4bbc['$'] = function (_0x4d7f8d, _0x78b2a4) {
            _0x483a04(_0x1f898b.Na, _0x4d7f8d ? 'true' : 'false')
            _0x78b2a4 && _0x7a4bbc.da(_0x4d7f8d)
            _0x7a4bbc.ba(_0x4d7f8d)
          }),
          (_0x7a4bbc.Z = function () {
            switch (_0x2763a0(_0x1f898b.Na)) {
              case 'true':
                return true
              default:
                return false
            }
          }),
          (_0x7a4bbc.Y = function () {
            try {
              return (
                !!window.isIPInEEA ||
                !(
                  null == _0x7a4bbc.l ||
                  !_0x49a029.Oa(
                    _0x7a4bbc.l.coords.latitude,
                    _0x7a4bbc.l.coords.longitude
                  )
                )
              )
            } catch (_0x275fa4) {
              return true
            }
          }),
          (_0x7a4bbc.Pa = function () {
            _0x7a4bbc.o.Qa(_0x7a4bbc.j, _0x7a4bbc.k)
            _0x7a4bbc.s.Qa(_0x7a4bbc.j, _0x7a4bbc.k)
          }),
          (_0x7a4bbc.Ra = function () {
            _0x7a4bbc.s.Ra()
          }),
          _0x7a4bbc
        )
      })()
    }
    function _0x1f921f() {
      var _0x8c9a6 = {
        lb: _0x544a9d,
        mb: _0x1b75aa,
        nb: _0x2ef4f2,
        ob: _0x32ddfa,
        kb: _0x37a681,
        pb: _0x8c9a6.lb - _0x8c9a6.kb,
        qb: _0x8c9a6.mb + _0x8c9a6.kb,
        rb: _0x8c9a6.nb - _0x8c9a6.kb,
        sb: _0x8c9a6.ob + _0x8c9a6.kb,
        Za: 0.2 * _0x8c9a6.Ya * _0x21c8cf,
        Wa: (_0x529cec + _0x2521dc) / _0x8c9a6.Xa.length,
        bb: _0x3a580d,
        Ya: (_0x3e526f - _0x8c9a6['_a']) / (_0x8c9a6.ab - _0x8c9a6['_a']),
        cb: 3,
        db: null,
        cb: 0,
        eb: _0x3aab76,
      }
      return (
        (_0x8c9a6.Wa = 30),
        (_0x8c9a6.Xa = new Float32Array(100)),
        (_0x8c9a6.Ya = 0),
        (_0x8c9a6.Za = 0),
        (_0x8c9a6['$a'] = 0),
        (_0x8c9a6['_a'] = 0),
        (_0x8c9a6.ab = 0),
        (_0x8c9a6.bb = 0),
        (_0x8c9a6.cb = 0),
        (_0x8c9a6.db = null),
        (_0x8c9a6.eb = 300),
        (_0x8c9a6.C = function () {}),
        (_0x8c9a6.B = function () {}),
        (_0x8c9a6.S = function () {}),
        (_0x8c9a6.A = function () {}),
        (_0x8c9a6.fb = new _0x4f0bd3()),
        (_0x8c9a6.z = null),
        (_0x8c9a6.N = null),
        (_0x8c9a6.gb = {}),
        (_0x8c9a6.hb = {}),
        (_0x8c9a6.ib = 12.5),
        (_0x8c9a6.jb = 40),
        (_0x8c9a6.kb = 1),
        (_0x8c9a6.lb = -1),
        (_0x8c9a6.mb = 1),
        (_0x8c9a6.nb = 1),
        (_0x8c9a6.ob = -1),
        (_0x8c9a6.pb = -1),
        (_0x8c9a6.qb = 1),
        (_0x8c9a6.rb = 1),
        (_0x8c9a6.sb = -1),
        (_0x8c9a6.O = 500),
        (_0x8c9a6.tb = 500),
        (_0x8c9a6.fb.ub = 500),
        (_0x8c9a6.N = new _0x591c7d(_0x8c9a6.fb)),
        (_0x8c9a6.a = function () {
          _0x8c9a6.N.vb(_0x243186().s.H.wb)
          setInterval(function () {
            _0x8c9a6.S(function (_0x255aac, _0x1c80c8) {
              _0x8c9a6.xb(_0x255aac, _0x1c80c8)
            })
          }, 100)
        }),
        (_0x8c9a6.yb = function (_0x544a9d, _0x1b75aa, _0x2ef4f2, _0x32ddfa) {
          _0x8c9a6.zb()
        }),
        (_0x8c9a6.Ab = function (_0x37a681) {
          _0x8c9a6.zb()
        }),
        (_0x8c9a6.zb = function () {}),
        (_0x8c9a6.Qa = function (_0x255523, _0x21c8cf) {
          _0x8c9a6['$a'] += _0x21c8cf
          _0x8c9a6.z.Bb()
          !(null == _0x8c9a6.db || (_0x8c9a6.cb !== 2 && _0x8c9a6.cb !== 3)) &&
            (_0x8c9a6.Cb(_0x255523, _0x21c8cf),
            (_0x8c9a6.jb = 4 + _0x8c9a6.ib * _0x8c9a6.N.Db))
          var _0x2521dc = 1000 / Math.max(1, _0x21c8cf),
            _0x529cec = 0,
            _0x4bf115 = 0
          for (; _0x4bf115 < _0x8c9a6.Xa.length - 1; _0x4bf115++) {
            _0x529cec = _0x529cec + _0x8c9a6.Xa[_0x4bf115]
            _0x8c9a6.Xa[_0x4bf115] = _0x8c9a6.Xa[_0x4bf115 + 1]
          }
          _0x8c9a6.Xa[_0x8c9a6.Xa.length - 1] = _0x2521dc
        }),
        (_0x8c9a6.Eb = function (_0x5312f5, _0x25cf86) {
          return (
            _0x5312f5 > _0x8c9a6.pb &&
            _0x5312f5 < _0x8c9a6.qb &&
            _0x25cf86 > _0x8c9a6.rb &&
            _0x25cf86 < _0x8c9a6.sb
          )
        }),
        (_0x8c9a6.Cb = function (_0x29dec2, _0x3be40a) {
          var _0x2be3ee = _0x8c9a6['$a'] + _0x8c9a6.Za,
            _0x38887e =
              (_0x2be3ee - _0x8c9a6['_a']) / (_0x8c9a6.ab - _0x8c9a6['_a'])
          _0x8c9a6.N.Fb(_0x29dec2, _0x3be40a)
          _0x8c9a6.N.Gb(_0x29dec2, _0x3be40a, _0x38887e, _0x8c9a6.Eb)
          var _0x202942 = 0,
            _0x34202d
          for (_0x34202d in _0x8c9a6.hb) {
            var _0x55346c = _0x8c9a6.hb[_0x34202d]
            _0x55346c.Fb(_0x29dec2, _0x3be40a)
            _0x55346c.Gb(_0x29dec2, _0x3be40a, _0x38887e, _0x8c9a6.Eb)
            _0x55346c.Hb &&
              _0x55346c.Db > _0x202942 &&
              (_0x202942 = _0x55346c.Db)
            !(_0x55346c.Ib || (!(_0x55346c.Jb < 0.005) && _0x55346c.Hb)) &&
              (_0x55346c.Kb(), delete _0x8c9a6.hb[_0x55346c.Mb.Lb])
          }
          _0x8c9a6.Ab(3 * _0x202942)
          var _0x3a6413
          for (_0x3a6413 in _0x8c9a6.gb) {
            var _0x1f202d = _0x8c9a6.gb[_0x3a6413]
            _0x1f202d.Fb(_0x29dec2, _0x3be40a)
            _0x1f202d.Gb(_0x29dec2, _0x3be40a, _0x8c9a6.Eb)
            _0x1f202d.Nb &&
              (_0x1f202d.Jb < 0.005 ||
                !_0x8c9a6.Eb(_0x1f202d.Ob, _0x1f202d.Pb)) &&
              (_0x1f202d.Kb(), delete _0x8c9a6.gb[_0x1f202d.Mb.Lb])
          }
        }),
        (_0x8c9a6.Qb = function (_0x3a580d, _0x3bf772) {
          _0x8c9a6.cb === 1 && ((_0x8c9a6.cb = 2), _0x8c9a6.C())
          var _0x29ff84 = _0x243186().j
          0 === _0x3a580d
            ? ((_0x8c9a6['_a'] = _0x29ff84 - 95),
              (_0x8c9a6.ab = _0x29ff84),
              (_0x8c9a6['$a'] = _0x8c9a6['_a']),
              (_0x8c9a6.Za = 0))
            : ((_0x8c9a6['_a'] = _0x8c9a6.ab),
              (_0x8c9a6.ab = _0x8c9a6.ab + _0x3bf772))
          var _0x3e526f = _0x8c9a6['$a'] + _0x8c9a6.Za
        }),
        (_0x8c9a6.Rb = function () {
          if (_0x8c9a6.cb === 1 || _0x8c9a6.cb === 2) {
            var _0x5e41bc = _0x8c9a6.db
            setTimeout(function () {
              _0x8c9a6.cb === 3 && (_0x8c9a6.cb = 0)
              null != _0x5e41bc &&
                _0x5e41bc === _0x8c9a6.db &&
                (_0x8c9a6.db.close(), (_0x8c9a6.db = null))
            }, 5000)
            _0x8c9a6.B()
          }
        }),
        (_0x8c9a6.ta = function () {
          return (
            _0x8c9a6.cb !== 2 &&
            ((_0x8c9a6.cb = 1),
            _0x8c9a6.z.Sb(),
            (_0x8c9a6.gb = {}),
            (_0x8c9a6.hb = {}),
            _0x8c9a6.N.Tb(),
            null != _0x8c9a6.db && (_0x8c9a6.db.close(), (_0x8c9a6.db = null)),
            true)
          )
        }),
        (_0x8c9a6.Ub = function () {
          _0x8c9a6.z.Sb()
          _0x8c9a6.cb !== 3 && _0x8c9a6.A()
        }),
        (_0x8c9a6.za = function (_0x481ca9, _0x13b672) {
          _0x8c9a6.Vb(_0x481ca9, function () {
            console.log(_0x13b672)
            if (wormxt_Obj.spawnInfinity) {
              var _0x66c985 =
                  document.getElementById('mm-params-nickname').value,
                _0x3da781 = Math.min(32, _0x66c985.length),
                _0x4719fb = new ArrayBuffer(7 + 2 * _0x3da781),
                _0x5c1288 = new DataView(_0x4719fb),
                _0x2c337b = 0
              _0x5c1288.setInt8(_0x2c337b, 129)
              _0x2c337b = _0x2c337b + 1
              _0x5c1288.setInt16(_0x2c337b, 2800)
              _0x2c337b = _0x2c337b + 2
              _0x5c1288.setInt8(_0x2c337b, 0)
              _0x2c337b = _0x2c337b + 1
              _0x5c1288.setInt16(_0x2c337b, 128)
              _0x2c337b = _0x2c337b + 2
              _0x5c1288.setInt8(_0x2c337b, _0x3da781)
              _0x2c337b++
              var _0x2bbf85 = 0
              for (; _0x2bbf85 < _0x3da781; _0x2bbf85++) {
                _0x5c1288.setInt16(_0x2c337b, _0x66c985.charCodeAt(_0x2bbf85))
                _0x2c337b = _0x2c337b + 2
              }
              _0x8c9a6.Wb(_0x4719fb)
            } else {
              var _0x3da781 = Math.min(2048, _0x13b672.length),
                _0x4719fb = new ArrayBuffer(6 + 2 * _0x3da781),
                _0x3f9bc8 = new DataView(_0x4719fb),
                _0x2c337b = 0
              _0x3f9bc8.setInt8(_0x2c337b, 129)
              _0x2c337b = _0x2c337b + 1
              _0x3f9bc8.setInt16(_0x2c337b, 2800)
              _0x2c337b = _0x2c337b + 2
              _0x3f9bc8.setInt8(_0x2c337b, 1)
              _0x2c337b = _0x2c337b + 1
              _0x3f9bc8.setInt16(_0x2c337b, _0x3da781)
              _0x2c337b = _0x2c337b + 2
              var _0x2bbf85 = 0
              for (; _0x2bbf85 < _0x3da781; _0x2bbf85++) {
                _0x3f9bc8.setInt16(_0x2c337b, _0x13b672.charCodeAt(_0x2bbf85))
                _0x2c337b = _0x2c337b + 2
              }
              _0x8c9a6.Wb(_0x4719fb)
            }
          })
        }),
        (_0x8c9a6.Ca = function (_0xe85025, _0x323210, _0x5e2b94) {
          _0x8c9a6.Vb(_0xe85025, function () {
            console.log(_0x323210)
            var _0x2c7357 = Math.min(32, _0x323210.length),
              _0x336a04 = new ArrayBuffer(7 + 2 * _0x2c7357),
              _0x292702 = new DataView(_0x336a04),
              _0x1a6940 = 0
            _0x292702.setInt8(_0x1a6940, 129)
            _0x1a6940 = _0x1a6940 + 1
            _0x292702.setInt16(_0x1a6940, 2800)
            _0x1a6940 = _0x1a6940 + 2
            _0x292702.setInt8(_0x1a6940, 0)
            _0x1a6940 = _0x1a6940 + 1
            _0x292702.setInt16(_0x1a6940, _0x5e2b94)
            _0x1a6940 = _0x1a6940 + 2
            _0x292702.setInt8(_0x1a6940, _0x2c7357)
            _0x1a6940++
            var _0x305c02 = 0
            for (; _0x305c02 < _0x2c7357; _0x305c02++) {
              _0x292702.setInt16(_0x1a6940, _0x323210.charCodeAt(_0x305c02))
              _0x1a6940 = _0x1a6940 + 2
            }
            _0x8c9a6.Wb(_0x336a04)
            console.log(_0x336a04)
          })
        }),
        (_0x8c9a6.Wb = function (_0x375eca) {
          try {
            null != _0x8c9a6.db &&
              _0x8c9a6.db.readyState === WebSocket.OPEN &&
              _0x8c9a6.db.send(_0x375eca)
          } catch (_0x28e7bd) {
            console.log('Socket send error: ' + _0x28e7bd)
            _0x8c9a6.Ub()
          }
        }),
        (_0x8c9a6.xb = function (_0x45df44, _0x434c90) {
          var _0x395b72 = _0x434c90 ? 128 : 0,
            _0x4761a6 = ((_0x23f443(_0x45df44) / _0x151922) * 128) & 127,
            _0x3aab76 = 255 & (_0x395b72 | _0x4761a6)
          if (_0x8c9a6.eb !== _0x3aab76) {
            var _0x6c7905 = new ArrayBuffer(1)
            new DataView(_0x6c7905).setInt8(0, _0x3aab76)
            _0x8c9a6.Wb(_0x6c7905)
          }
        }),
        (_0x8c9a6.Vb = function (_0x5314b3, _0x33acf1) {
          var _0x393d96 = (_0x8c9a6.db = new WebSocket(_0x5314b3))
          _0x393d96.binaryType = 'arraybuffer'
          window.onOpen = _0x393d96.onopen = function () {
            _0x4f0ee0('open')
            _0x8c9a6.db === _0x393d96 &&
              (console.log('Socket opened'), _0x33acf1())
            isPlaying = true
          }
          window.onclose = _0x393d96.onclose = function () {
            _0x4f0ee0('closed')
            _wrmxt.aload = false
            _0x8c9a6.db === _0x393d96 &&
              (console.log('Socket closed'), _0x8c9a6.Ub())
            isPlaying = false
          }
          _0x393d96.onerror = function (_0x53c88e) {
            _0x8c9a6.db === _0x393d96 &&
              (console.log('Socket error'), _0x8c9a6.Ub())
            isPlaying = false
          }
          _0x393d96.onmessage = function (_0x4ed4e7) {
            _0x8c9a6.db === _0x393d96 && _0x8c9a6.z.Xb(_0x4ed4e7.data)
          }
        }),
        _0x8c9a6
      )
    }
    _0x5b3ad3 || (_0x5b3ad3 = 'en')
    switch (_0x5b3ad3) {
      case 'uk':
        _0x3bdd75 = _0x3e0689(1120)
        break
      case 'de':
        _0x3bdd75 = _0x3e0689(1053)
        break
      case 'fr':
        _0x3bdd75 = _0x3e0689(672)
        break
      case 'ru':
        _0x3bdd75 = 'ru_RU'
        break
      case 'es':
        _0x3bdd75 = _0x3e0689(1293)
        break
      default:
        _0x3bdd75 = _0x3e0689(1208)
    }
    moment[_0x3e0689(1170)](_0x3bdd75)
    !(function () {
      var _0x52ed94 = _0x3e0689,
        _0x5cf8d5 = _0x52ed94(483),
        _0x279d03 = _0x5cf8d5 + _0x52ed94(826),
        _0x30e0de = _0x5cf8d5 + _0x52ed94(1540),
        _0x548601 = [
          atob(_0x279d03 + _0x52ed94(1325)),
          atob(_0x279d03 + 'MTY' + '='),
          atob(_0x279d03 + _0x52ed94(1504) + '='),
          atob(_0x30e0de + 'zMg=='),
          atob(_0x30e0de + _0x52ed94(870)),
        ]
      DataView.prototype.mc = function (_0x2c2c9a) {
        return this[_0x548601[0]](_0x2c2c9a)
      }
      DataView[_0x52ed94(675)].nc = function (_0xde97ab) {
        return this[_0x548601[1]](_0xde97ab)
      }
      DataView[_0x52ed94(675)].oc = function (_0x4715d2) {
        return this[_0x548601[2]](_0x4715d2)
      }
      DataView[_0x52ed94(675)].pc = function (_0x2c1eef) {
        return this[_0x548601[3]](_0x2c1eef)
      }
      DataView[_0x52ed94(675)].qc = function (_0x130fd7) {
        return this[_0x548601[4]](_0x130fd7)
      }
    })()
    _0x4c8147[_0x3e0689(697)] = {
      Ma: _0xd78627(_0x3e0689(999), atob(_0x3e0689(565))),
      K: _0xd78627('ltmolilci1iurq1i', atob(_0x3e0689(1730))),
      ra: _0x58cc52(),
      e: 4,
      oa: false,
      qk: true,
    }
    _0x4c8147[_0x3e0689(1237)] = {
      Ma: _0xd78627(_0x3e0689(999), atob(_0x3e0689(565))),
      K: _0xd78627('ltmolilci1iurq1i', atob(_0x3e0689(1730))),
      ra: _0x58cc52(),
      e: 4,
      oa: false,
      qk: false,
    }
    _0x2bfe8a || (_0x2bfe8a = _0x4c8147.main)
    $(function () {
      var _0x332130 = _0x3e0689
      FastClick[_0x332130(1181)](document[_0x332130(819)])
    })
    addEventListener(_0x3e0689(1483), function (_0x44ae00) {
      var _0x4f9207 = _0x3e0689
      return _0x44ae00[_0x4f9207(903)](), _0x44ae00.stopPropagation(), false
    })
    _0x48fbee(
      '//connect.facebook.net/' + _0x3bdd75 + _0x3e0689(1323),
      _0x3e0689(851),
      function () {
        var _0xed03c6 = _0x3e0689
        FB[_0xed03c6(1103)]({
          appId: atob(_0xed03c6(1156)),
          cookie: true,
          xfbml: true,
          status: true,
          version: _0xed03c6(655),
        })
      }
    )
    _0x48fbee(_0x3e0689(1451), null, function () {
      gapi.load('auth2', function () {
        GoogleAuth = gapi.auth2.init({
          client_id: atob(
            'OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t'
          ),
        })
      })
    })
    _0x312d18 = _0x527750()
    _0x312d18.v()
    $(_0x3e0689(772))[_0x3e0689(913)](_0x3e0689(1677), _0x3e0689(1470))
    theoKzObjects.loading = true
    !Number.prototype.dotFormat &&
      (Number[_0x3e0689(675)][_0x3e0689(996)] = function () {
        var _0x3ce4f2 = _0x3e0689
        return this[_0x3ce4f2(1242)]()[_0x3ce4f2(1620)](
          /\B(?=(\d{3})+(?!\d))/g,
          '.'
        )
      })
    !Number[_0x3e0689(675)][_0x3e0689(1116)] &&
      (Number[_0x3e0689(675)].customFormat = function () {
        var _0x360b8a = _0x3e0689
        if (this >= 1000000) {
          return (this / 1000000).toFixed(1) + 'M\uD83C\uDF70'
        } else {
          return this >= 100000
            ? (this / 1000)[_0x360b8a(688)](0) + _0x360b8a(1746)
            : this.dotFormat()
        }
      })
    _0x1132ef()
    _0x185811()
    $(window)[_0x3e0689(1232)](_0x185811)
  })()
})
const servers = [
  'sao-a.wormate.io',
  'mum-a.wormate.io',
  'dxb-a.wormate.io',
  'fra-e.wormate.io',
  'fra-d.wormate.io',
  'fra-c.wormate.io',
  'fra-b.wormate.io',
  'waw-a.wormate.io',
  'dal-b.wormate.io',
  'vin-a.wormate.io',
  'dal-a.wormate.io',
  'sao-c.wormate.io',
  'bhs-a.wormate.io',
  'sao-b.wormate.io',
  'hil-a.wormate.io',
  'syd-a.wormate.io',
  'sin-g.wormate.io',
  'gra-a.wormate.io',
  'sin-i.wormate.io',
  'sin-h.wormate.io',
  'sin-f.wormate.io',
  'sin-c.wormate.io',
  'sin-b.wormate.io',
  'sin-a.wormate.io',
  'tok-b.wormate.io',
  'sin-d.wormate.io',
  'sin-e.wormate.io',
]
async function testPortOnServers(_0x244ecb) {
  console.log(
    '\n\uD83D\uDD0D Probando servidores Wormate.io (puerto ' +
      _0x244ecb +
      ')...\n'
  )
  const _0x4f7fae = [],
    _0x558f5d = $('<ul></ul>')
  $('#resultadoPuertas').html('')
  $('#resultadoPuertas').append(_0x558f5d)
  for (const _0x3001db of servers) {
    const _0x3dbfe5 = 'wss://' + _0x3001db + ':' + _0x244ecb + '/wormy',
      _0x2ae943 = performance.now()
    let _0x418926 = false
    const _0x2ea91b = await new Promise((_0x4be1f2) => {
      const _0x5acc59 = new WebSocket(_0x3dbfe5),
        _0x2abb49 = (_0x58f378, _0x4ddfe1 = null) => {
          if (_0x418926) {
            return
          }
          _0x418926 = true
          _0x5acc59.close()
          _0x4be1f2({
            host: _0x3001db,
            status: _0x58f378,
            latency: _0x4ddfe1,
          })
        }
      _0x5acc59.onerror = () => _0x2abb49('\u274C Cerrado')
      _0x5acc59.onclose = () => _0x2abb49('\u274C Cerrado')
      _0x5acc59.onopen = () => {
        const _0x255230 = Math.round(performance.now() - _0x2ae943)
        _0x2abb49('\u2705 ', _0x255230)
      }
      setTimeout(() => _0x2abb49('\u23F1️ Timeout'), 10000)
    })
    if (_0x2ea91b.status === '\u2705 ') {
      _0x4f7fae.push(_0x2ea91b)
      const _0x5761da =
          _0x2ea91b.latency !== null
            ? ' - Ping: ' + _0x2ea91b.latency + ' ms'
            : '',
        _0x3ce7bc = 'wss://' + _0x2ea91b.host + ':' + _0x244ecb + '/wormy',
        _0x23768b = $(
          '\n                    <li>\n                        ' +
            _0x2ea91b.status +
            _0x5761da +
            '\n                        <button class="connect-button" data-server="' +
            _0x3ce7bc +
            '" style="margin-left: 10px;">Connect</button>\n                    </li>\n                '
        )
      _0x558f5d.append(_0x23768b)
    }
    await new Promise((_0x39f982) => setTimeout(_0x39f982, 200))
  }
  if (_0x4f7fae.length > 0) {
    _0x4f7fae.sort(
      (_0xb671f7, _0x538c7d) => _0xb671f7.latency - _0x538c7d.latency
    )
    const _0x384906 = _0x4f7fae[0],
      _0x492e41 =
        '<strong>\uD83C\uDFC6 Best server: ' +
        _0x384906.host +
        ' - Ping: ' +
        _0x384906.latency +
        ' ms</strong>'
    _0x558f5d.append('<li style="margin-top:10px;">' + _0x492e41 + '</li>')
  } else {
    _0x558f5d.append(
      '<li><strong>\u274C No se encontraron puertas abiertas.</strong></li>'
    )
  }
  $(document)
    .off('click', '.connect-button')
    .on('click', '.connect-button', function () {
      const _0x2cfc5f = $(this).data('server')
      anApp.sa(_0x2cfc5f)
      console.log('Conectando a:', _0x2cfc5f)
    })
}
console.log('Core 2022 THEO Prueba')
function _0x39c033(_0x3d3ae1) {
  function _0x304e0f(_0x40e099) {
    if (typeof _0x40e099 === 'string') {
      return function (_0x1a0871) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x40e099 / _0x40e099).length !== 1 || _0x40e099 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x304e0f(++_0x40e099)
  }
  try {
    if (_0x3d3ae1) {
      return _0x304e0f
    } else {
      _0x304e0f(0)
    }
  } catch (_0x387781) {}
}
#
