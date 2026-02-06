import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-M72SU5T2.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/GameLibrarypage.tsx
var import_react3 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.mjs
function FaPlaystation(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z" }, "child": [] }] })(props);
}
function FaDesktop(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z" }, "child": [] }] })(props);
}
function FaPlay(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" }, "child": [] }] })(props);
}

// app/components/GameCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\GameCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\GameCard.tsx"
  );
}
function GameCard({
  game,
  onPlay
}) {
  const status = game.status;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `game-card status-${status}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "game-card-image", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: game.image, alt: game.title }, void 0, false, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `status-dot ${status}`, "data-tooltip": status === "available" ? "Available" : status === "upcoming" ? "Coming Soon" : "Unavailable" }, void 0, false, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      game.adult && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge-18", children: "18+" }, void 0, false, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 38,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GameCard.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "game-title", children: game.title }, void 0, false, {
      fileName: "app/components/GameCard.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "game-subtitle", children: game.subtitle }, void 0, false, {
      fileName: "app/components/GameCard.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tag-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "tag", children: game.category }, void 0, false, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "tag", children: game.playerType }, void 0, false, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GameCard.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "platform-row", children: [
      game.platforms.includes("PS5") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "platform", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaPlaystation, {}, void 0, false, {
          fileName: "app/components/GameCard.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        " PS5"
      ] }, void 0, true, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 53,
        columnNumber: 44
      }, this),
      game.platforms.includes("PS4") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "platform", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaPlaystation, {}, void 0, false, {
          fileName: "app/components/GameCard.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        " PS4"
      ] }, void 0, true, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 56,
        columnNumber: 44
      }, this),
      game.platforms.includes("PC") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "platform", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaDesktop, {}, void 0, false, {
          fileName: "app/components/GameCard.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        " PC"
      ] }, void 0, true, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 59,
        columnNumber: 43
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GameCard.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `watch-trailer ${!game.video || status !== "available" ? "disabled" : ""}`, onClick: onPlay, disabled: !game.video || status !== "available", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaPlay, {}, void 0, false, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: !game.video || status !== "available" ? "Trailer Unavailable" : "Watch Trailer" }, void 0, false, {
        fileName: "app/components/GameCard.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GameCard.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GameCard.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = GameCard;
var _c;
$RefreshReg$(_c, "GameCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/VideoModal.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\VideoModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\VideoModal.tsx"
  );
  import.meta.hot.lastModified = "1770380510930.7126";
}
function VideoModal({
  video,
  onClose
}) {
  const renderVideo = () => {
    if (video.type === "youtube") {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "video-frame-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("iframe", { src: `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&controls=0&modestbranding=1&rel=0&disablekb=1`, allow: "autoplay; encrypted-media; fullscreen", allowFullScreen: true, sandbox: "allow-scripts allow-same-origin allow-presentation", title: "Game Trailer" }, void 0, false, {
          fileName: "app/components/VideoModal.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "iframe-blocker" }, void 0, false, {
          fileName: "app/components/VideoModal.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/VideoModal.tsx",
        lineNumber: 28,
        columnNumber: 14
      }, this);
    }
    if (video.type === "mp4" || video.type === "webm") {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("video", { src: video.src, autoPlay: true, controls: true, controlsList: "nodownload noremoteplayback", disablePictureInPicture: true }, void 0, false, {
        fileName: "app/components/VideoModal.tsx",
        lineNumber: 37,
        columnNumber: 14
      }, this);
    }
    if (video.type === "gdrive") {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "video-frame-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("iframe", { src: `https://drive.google.com/file/d/${video.id}/preview`, allow: "autoplay", sandbox: "allow-scripts allow-same-origin allow-presentation", title: "Game Trailer" }, void 0, false, {
          fileName: "app/components/VideoModal.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "iframe-blocker" }, void 0, false, {
          fileName: "app/components/VideoModal.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/VideoModal.tsx",
        lineNumber: 42,
        columnNumber: 14
      }, this);
    }
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "video-modal", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "video-overlay", onClick: onClose }, void 0, false, {
      fileName: "app/components/VideoModal.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "video-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "close-btn", onClick: onClose, children: "\u2715" }, void 0, false, {
        fileName: "app/components/VideoModal.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      renderVideo()
    ] }, void 0, true, {
      fileName: "app/components/VideoModal.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/VideoModal.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_c2 = VideoModal;
var _c2;
$RefreshReg$(_c2, "VideoModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/games.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\games.ts"
  );
  import.meta.hot.lastModified = "1770129635332.7349";
}
var games = [
  {
    id: 1,
    title: "CALL OF DUTY BLACK OPS 7",
    subtitle: "Tactical First-Person Shooter",
    category: "SHOOTING",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/cod-blackops-7.jpg",
    video: {
      type: "youtube",
      id: "ynivqJZJOH4"
    }
  },
  {
    id: 2,
    title: "GTA  ONLINE",
    subtitle: "Los Santos Crime Saga",
    category: "OPEN WORLD",
    playerType: "ONLINE MULTIPLAYER",
    platforms: ["PS5", "PS4", "PC"],
    status: "available",
    adult: true,
    image: "/images/gta-5online.jpeg",
    video: {
      type: "youtube",
      id: "olEGtoYs_8A"
    }
  },
  {
    id: 3,
    title: "VALORANT",
    subtitle: "5V5 Tactical Shooter",
    category: "SHOOTING",
    playerType: "ONLINE 5v5",
    platforms: ["PC"],
    status: "available",
    image: "/images/valorant.jpg",
    video: {
      type: "youtube",
      id: "hhlgphVf-1g"
    }
  },
  {
    id: 4,
    title: "COUNTER STRIKE 2",
    subtitle: "Competitive FPS",
    category: "SHOOTING",
    playerType: "ONLINE 5v5",
    platforms: ["PC"],
    status: "available",
    image: "/images/cs-go-2.png",
    video: {
      type: "youtube",
      id: "c80dVYcL69E"
    }
  },
  {
    id: 5,
    title: "APEX LEGENDS",
    subtitle: "The Next Evolution of Battle Royale",
    category: "SHOOTING",
    playerType: "ONLINE MULTIPLAYER",
    platforms: ["PC"],
    status: "available",
    image: "/images/apex-legends.jpg",
    video: {
      type: "youtube",
      id: "hg0_PBw1OMI"
    }
  },
  {
    id: 6,
    title: "FORTNITE",
    subtitle: "Battle Royale Adventure",
    category: "SHOOTING",
    playerType: "ONLINE MULTIPLAYER",
    platforms: ["PS4"],
    status: "available",
    image: "/images/fortnite.jpg",
    video: {
      type: "youtube",
      id: "Tv2zM8jI4gU"
    }
  },
  {
    id: 7,
    title: "CALL OF DUTY COLD WAR",
    subtitle: "Black Ops Conspiracy",
    category: "SHOOTING",
    playerType: "MULTIPLAYER",
    platforms: ["PS4"],
    status: "available",
    image: "/images/cod-blackops-coldwar.jpg",
    video: {
      type: "youtube",
      id: "3iSBx_m9ej8"
    }
  },
  {
    id: 8,
    title: "CALL OF DUTY BLACK OPS III",
    subtitle: "Cybernetic Future Warfare",
    category: "SHOOTING",
    playerType: "MULTIPLAYER",
    platforms: ["PS5", "PS4"],
    status: "available",
    image: "/images/cod-blackops-3.jpg",
    video: {
      type: "youtube",
      id: "qAUYNIDEJ6o"
    }
  },
  {
    id: 9,
    title: "BACK 4 BLOOD",
    subtitle: "Co-op Zombie Survival",
    category: "SHOOTING",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/back-4-blood.jpg",
    video: {
      type: "youtube",
      id: "piY-dwt4eCw"
    }
  },
  {
    id: 10,
    title: "WORLD WAR Z AFTERMATH",
    subtitle: "Turn the Tide of the Apocalypse",
    category: "SHOOTING",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/world-war-z-aftermath.jpeg",
    video: {
      type: "youtube",
      id: "d3ciw_v7MF0"
    }
  },
  {
    id: 11,
    title: "MARVEL RIVALS",
    subtitle: "Super Hero Team-Based PVP",
    category: "SHOOTING",
    playerType: "ONLINE 5v5",
    platforms: ["PC"],
    status: "available",
    image: "/images/marvel-rivals.jpeg",
    video: {
      type: "youtube",
      id: "DA4iVv4MARE"
    }
  },
  {
    id: 12,
    title: "BLACK MYTH WUKONG",
    subtitle: "Confront Your Destiny",
    category: "ACTION",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/black-myth-wukong.jpeg",
    video: {
      type: "youtube",
      id: "pnSsgRJmsCc"
    }
  },
  {
    id: 13,
    title: "GOD WAR RAGNAROK",
    subtitle: "The Norse Saga Finale",
    category: "ACTION",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5", "PS4"],
    status: "available",
    image: "/images/god-of-war- regnarok.jpg",
    video: {
      type: "youtube",
      id: "EE-4GvjKcfs"
    }
  },
  {
    id: 14,
    title: "SPIDER MAN 2",
    subtitle: "Be Greater. Together",
    category: "ACTION",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/spider-man-2.jpeg",
    video: {
      type: "youtube",
      id: "ZRhJT2nmvA4"
    }
  },
  {
    id: 15,
    title: "GHOST OF TSUSHIMA",
    subtitle: "The Way of the Ghost",
    category: "ACTION",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/ghost-of-tsushima.jpg",
    video: {
      type: "youtube",
      id: "kSAvzeopPC8"
    }
  },
  {
    id: 16,
    title: "NFS HEAT",
    subtitle: "Hustle by Day, Risk it All by Night",
    category: "RACING",
    playerType: "LAN & ONLINE",
    platforms: ["PS4"],
    status: "available",
    image: "/images/nfs-heat.jpg",
    video: {
      type: "youtube",
      id: "04KPiGmC7Lc"
    }
  },
  {
    id: 17,
    title: "NFS HOT PURSUIT REMASTERED",
    subtitle: "Feel the Thrill of the Chase",
    category: "RACING",
    playerType: "LAN & ONLINE",
    platforms: ["PS4"],
    status: "available",
    image: "/images/nfs-hot-persuit -remastered.jpg",
    video: {
      type: "youtube",
      id: "HLiY6wwfGX4"
    }
  },
  {
    id: 18,
    title: "F1 23",
    subtitle: "Be the Last to Brake",
    category: "RACING",
    playerType: "ONLINE MULTIPLAYER",
    platforms: ["PS4"],
    status: "available",
    image: "/images/f1-23.jpg",
    video: {
      type: "youtube",
      id: "ewOZTzM3vUY"
    }
  },
  {
    id: 19,
    title: "ASPHALT LEGENDS UNITE",
    subtitle: "Spark Your Pulse",
    category: "RACING",
    playerType: "LAN & ONLINE",
    platforms: ["PS5", "PS4", "PC"],
    status: "available",
    image: "/images/asphalt.jpeg",
    video: {
      type: "youtube",
      id: "rH-eZd01NEQ"
    }
  },
  {
    id: 20,
    title: "THE CREW 2",
    subtitle: "The Ultimate Racing Experience",
    category: "RACING",
    playerType: "LAN & ONLINE",
    platforms: ["PS4"],
    status: "available",
    image: "/images/the-crew-2.jpg",
    video: {
      type: "youtube",
      id: "vrVS9dgsn70"
    }
  },
  {
    id: 21,
    title: "BEECH BUGGY RACING 2",
    subtitle: "Fast-Paced Offroad Racing",
    category: "RACING",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/beech-bugy-2.jpeg",
    video: {
      type: "youtube",
      id: "h9N2Fz2dx6k"
    }
  },
  {
    id: 22,
    title: "SPEEDSTORM",
    subtitle: "High-Octane Arcade Racing",
    category: "RACING",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/speedstorm.jpeg",
    video: {
      type: "youtube",
      id: "bXOd3Pue-NA"
    }
  },
  {
    id: 23,
    title: "ROAD REDEMPTION",
    subtitle: "Brutal Combat Racing",
    category: "RACING",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/road-redumption.jpg",
    video: {
      type: "youtube",
      id: "BNQsy_X0C7o"
    }
  },
  {
    id: 24,
    title: "FC 25",
    subtitle: "For the Club",
    category: "SPORTS",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/fc-25.jpg",
    video: {
      type: "youtube",
      id: "pBM2xyco_Kg"
    }
  },
  {
    id: 25,
    title: "FC 26",
    subtitle: "The Future of Football",
    category: "SPORTS",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/fc-26.jpeg",
    video: {
      type: "youtube",
      id: "TSi0iJYSQ24"
    }
  },
  {
    id: 26,
    title: "CRICKET 24",
    subtitle: "The Official Game of the Ashes",
    category: "SPORTS",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/cricket-24.jpg",
    video: {
      type: "youtube",
      id: "krR9UjeTc0w"
    }
  },
  {
    id: 27,
    title: "CRICKET 26",
    subtitle: "The Future of Cricket",
    category: "SPORTS",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/cricket-26.jpeg",
    video: {
      type: "youtube",
      id: "fHk8dumSLbU"
    }
  },
  {
    id: 28,
    title: "WWE 2K25",
    subtitle: "Feel the Power of Wrestling",
    category: "SPORTS",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/wwe-2k25.jpg",
    video: {
      type: "youtube",
      id: "i7ZGSUP7wws"
    }
  },
  {
    id: 29,
    title: "ROCKET LEAGUE",
    subtitle: "Soccer with Rocket-Powered Cars",
    category: "SPORTS",
    playerType: "MULTIPLAYER",
    platforms: ["PS5", "PS4"],
    status: "available",
    image: "/images/rocket-league.jpg",
    video: {
      type: "youtube",
      id: "OSZi1duGpIQ"
    }
  },
  {
    id: 30,
    title: "NBA 2K25",
    subtitle: "Experience the Excitement of Basketball",
    category: "SPORTS",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/nba-2k25.jpeg",
    video: {
      type: "youtube",
      id: "TFELJqAvl8I"
    }
  },
  {
    id: 31,
    title: "TOPSPIN 2K25",
    subtitle: "Ultimate Tennis Experience",
    category: "SPORTS",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/topspin-2k25.jpeg",
    video: {
      type: "youtube",
      id: "hlIGNumuNT4"
    }
  },
  {
    id: 32,
    title: "TEKKEN 8",
    subtitle: "The Next Generation of Fighting Games",
    category: "FIGHTING",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/tekken-8.png",
    video: {
      type: "youtube",
      id: "2hPuRQz6IlM"
    }
  },
  {
    id: 33,
    title: "MORTAL KOMBAT 1",
    subtitle: "Return to the Beginning",
    category: "FIGHTING",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/mortal-kombat-1.webp",
    video: {
      type: "youtube",
      id: "lBYvt1_t6Q4"
    }
  },
  {
    id: 34,
    title: "UFC 5",
    subtitle: "Realism Redefined",
    category: "FIGHTING",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/ufc-5.jpeg",
    video: {
      type: "youtube",
      id: "pGT2HGue-Hc"
    }
  },
  {
    id: 35,
    title: "RED DEAD REDEMPTION 2",
    subtitle: "The Wild West is Calling",
    category: "ADVENTURE",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/red-dead-redemption-2.jpg",
    video: {
      type: "youtube",
      id: "Dw_oH5oiUSE"
    }
  },
  {
    id: 36,
    title: "FAR CRY 6",
    subtitle: "The Future of First-Person Shooters",
    category: "ADVENTURE",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/farcry-6.jpg",
    video: {
      type: "youtube",
      id: "-IJuKT1mHO8"
    }
  },
  {
    id: 37,
    title: "UNCHARTED LEGACY OF THIEVES",
    subtitle: "The Next Chapter in the Uncharted Saga",
    category: "ADVENTURE",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/uncharted.jpeg",
    video: {
      type: "youtube",
      id: "F3Wl-OiZCO4"
    }
  },
  {
    id: 38,
    title: "STRAY",
    subtitle: "The Story of a Lost Cat",
    category: "ADVENTURE",
    playerType: "SINGLE PLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/stray.jpg",
    video: {
      type: "youtube",
      id: "u84hRUQlaio"
    }
  },
  {
    id: 39,
    title: "RIDERS REPUBLIC",
    subtitle: "Extreme Sports Playground",
    category: "ADVENTURE",
    playerType: "MULTIPLAYER",
    platforms: ["PS5"],
    status: "available",
    image: "/images/riders-republic.jpeg",
    video: {
      type: "youtube",
      id: "pqiGmaXiSDo"
    }
  },
  {
    id: 40,
    title: "MINECRAFT LEGENDS",
    subtitle: "The Next Generation of Minecraft",
    category: "OPEN WORLD",
    playerType: "ONLINE MULTIPLAYER",
    platforms: ["PS4"],
    status: "available",
    image: "/images/minecraft-legacy.jpeg",
    video: {
      type: "youtube",
      id: "lw6f-tJKoao"
    }
  }
];

// app/components/GameLibrarypage.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\GameLibrarypage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\GameLibrarypage.tsx"
  );
  import.meta.hot.lastModified = "1770380469985.284";
}
var CATEGORIES = ["ALL", "SHOOTING", "ACTION", "RACING", "SPORTS", "FIGHTING", "ADVENTURE", "OPEN WORLD"];
var STATUSES = ["ALL", "available", "upcoming", "unavailable"];
function GameLibraryPage() {
  _s();
  const [activeGame, setActiveGame] = (0, import_react3.useState)(null);
  const [category, setCategory] = (0, import_react3.useState)("ALL");
  const [status, setStatus] = (0, import_react3.useState)("ALL");
  const [search, setSearch] = (0, import_react3.useState)("");
  const filteredGames = games.filter((game) => {
    const matchCategory = category === "ALL" || game.category.toUpperCase() === category;
    const matchStatus = status === "ALL" || game.status === status;
    const matchSearch = game.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchStatus && matchSearch;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "game-library-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "library-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "library-title", children: "GAME LIBRARY" }, void 0, false, {
        fileName: "app/components/GameLibrarypage.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "library-controls", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "category-bar", children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: `category-btn ${category === cat ? "active" : ""}`, onClick: () => setCategory(cat), children: cat }, cat, false, {
          fileName: "app/components/GameLibrarypage.tsx",
          lineNumber: 48,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/components/GameLibrarypage.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "category-bar", children: STATUSES.map((st) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: `category-btn ${status === st ? "active" : ""}`, onClick: () => setStatus(st), children: st.toUpperCase() }, st, false, {
          fileName: "app/components/GameLibrarypage.tsx",
          lineNumber: 55,
          columnNumber: 33
        }, this)) }, void 0, false, {
          fileName: "app/components/GameLibrarypage.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", className: "game-search", placeholder: "Search games...", value: search, onChange: (e) => setSearch(e.target.value) }, void 0, false, {
          fileName: "app/components/GameLibrarypage.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/GameLibrarypage.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GameLibrarypage.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "game-grid", children: filteredGames.map((game) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GameCard, { game, onPlay: () => game.video && setActiveGame(game) }, game.id, false, {
      fileName: "app/components/GameLibrarypage.tsx",
      lineNumber: 67,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/GameLibrarypage.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    activeGame && activeGame.video && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VideoModal, { video: activeGame.video, onClose: () => setActiveGame(null) }, void 0, false, {
      fileName: "app/components/GameLibrarypage.tsx",
      lineNumber: 71,
      columnNumber: 42
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GameLibrarypage.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(GameLibraryPage, "6v0B5Bru7xCuYFuoo3bwo2q8C/I=");
_c3 = GameLibraryPage;
var _c3;
$RefreshReg$(_c3, "GameLibraryPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/games.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\games.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\games.tsx"
  );
  import.meta.hot.lastModified = "1769656080131.7886";
}
function GamesRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GameLibraryPage, {}, void 0, false, {
    fileName: "app/routes/games.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c4 = GamesRoute;
var _c4;
$RefreshReg$(_c4, "GamesRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GamesRoute as default
};
//# sourceMappingURL=/build/routes/games-RUBXFLYA.js.map
