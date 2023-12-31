(function ()
{
	var g = function (s)
	{
		var t, r;
		s = s.replace(/\s+/g, "");
		var o = !1,
			n = !1,
			i = 0,
			a = 0,
			c = {
				delete: function ()
				{
					deleteElement(s)
				},
				get elt()
				{
					return s
				},
				get text()
				{
					return getText(s)
				},
				set text(e)
				{
					setText(s, e)
				},
				get num()
				{
					return getNumber(s)
				},
				set num(e)
				{
					setNumber(s, e)
				},
				get fontSize()
				{
					return getProperty(s, "font-size")
				},
				set fontSize(e)
				{
					setProperty(s, "font-size", e)
				},
				get fontFamily()
				{
					return getProperty(s, "font-family")
				},
				set fontFamily(e)
				{
					setProperty(s, "font-family", e)
				},
				get textAlign()
				{
					return getProperty(s, "text-align")
				},
				set textAlign(e)
				{
					setProperty(s, "text-align", e)
				},
				get textColor()
				{
					return getProperty(s, "text-color")
				},
				set textColor(e)
				{
					setProperty(s, "text-color", e)
				},
				get placeholder()
				{
					return getProperty(s, "placeholder")
				},
				set placeholder(e)
				{
					setProperty(s, "placeholder", e)
				},
				get backgroundColor()
				{
					return getProperty(s, "background-color")
				},
				set backgroundColor(e)
				{
					setProperty(s, "background-color", e)
				},
				get image()
				{
					return getProperty(s, "image")
				},
				set image(e)
				{
					setProperty(s, "image", e)
				},
				get fit()
				{
					return getProperty(s, "fit")
				},
				set fit(e)
				{
					setProperty(s, "fit", e)
				},
				get iconColor()
				{
					return getProperty(s, "icon-color")
				},
				set iconColor(e)
				{
					setProperty(s, "icon-color", e)
				},
				get borderColor()
				{
					return getProperty(s, "border-color")
				},
				set borderColor(e)
				{
					setProperty(s, "border-color", e)
				},
				get borderRadius()
				{
					return getProperty(s, "border-radius")
				},
				set borderRadius(e)
				{
					setProperty(s, "border-radius", e)
				},
				get borderWidth()
				{
					return getProperty(s, "border-width")
				},
				set borderWidth(e)
				{
					setProperty(s, "border-width", e)
				},
				get height()
				{
					return getProperty(s, "height")
				},
				set height(e)
				{
					setProperty(s, "height", e)
				},
				get width()
				{
					return getProperty(s, "width")
				},
				set width(e)
				{
					setProperty(s, "width", e)
				},
				get size()
				{
					return [getProperty(s, "height"), getProperty(s, "width")]
				},
				set size(e)
				{
					setProperty(s, "height", e[0]), setProperty(s, "width", e[1])
				},
				get x()
				{
					return getProperty(s, "x")
				},
				set x(e)
				{
					!1 !== c.minX && !1 !== c.maxX && e > c.minX && e < c.maxX ? setProperty(s, "x", e) : (!1 === c.minX && e < c.maxX && setProperty(s, "x", e), !1 === c.maxX && e > c.minX && setProperty(s, "x", e), !1 === c.maxX && !1 === c.minX && setProperty(s, "x", e))
				},
				get y()
				{
					return getProperty(s, "y")
				},
				set y(e)
				{
					!1 !== c.minY && !1 !== c.maxY && e > c.minY && e < c.maxY ? setProperty(s, "y", e) : (!1 === c.minY && e < c.maxY && setProperty(s, "y", e), !1 === c.maxY && e > c.minY && setProperty(s, "y", e), !1 === c.maxY && !1 === c.minY && setProperty(s, "y", e))
				},
				get position()
				{
					return [getProperty(s, "x"), getProperty(s, "y")]
				},
				set position(e)
				{
					c.x = e[0], c.y = e[1]
				},
				get value()
				{
					return getProperty(s, "value")
				},
				set value(e)
				{
					setProperty(s, "value", e)
				},
				get min()
				{
					return getProperty(s, "min")
				},
				set min(e)
				{
					setProperty(s, "min", e)
				},
				get max()
				{
					return getProperty(s, "max")
				},
				set max(e)
				{
					setProperty(s, "max", e)
				},
				get range()
				{
					return [getProperty(s, "min"), getProperty(s, "max")]
				},
				set range(e)
				{
					setProperty(s, "min", e[0]), setProperty(s, "max", e[1])
				},
				get step()
				{
					return getProperty(s, "step")
				},
				set step(e)
				{
					setProperty(s, "step", e)
				},
				get hidden()
				{
					return getProperty(s, "hidden")
				},
				set hidden(e)
				{
					setProperty(s, "hidden", e)
				},
				get groupId()
				{
					return getProperty(s, "group-id")
				},
				set groupId(e)
				{
					setProperty(s, "group-id", e)
				},
				get checked()
				{
					return getProperty(s, "checked")
				},
				set checked(e)
				{
					setProperty(s, "checked", e)
				},
				get readonly()
				{
					return getProperty(s, "readonly")
				},
				set readonly(e)
				{
					setProperty(s, "readonly", e)
				},
				get options()
				{
					return getProperty(s, "options")
				},
				set options(e)
				{
					setProperty(s, "options", e)
				},
				get index()
				{
					return getProperty(s, "index")
				},
				set index(e)
				{
					setProperty(s, "index", e)
				},
				set parent(e)
				{
					setParent(s, e)
				},
				set children(t)
				{
					"string" == typeof t ? setParent(t, s) : t.forEach(function (e)
					{
						setParent(t, e)
					})
				},
				set html(e)
				{
					innerHTML(s, e)
				},
				set CSS(e)
				{
					setStyle(s, e)
				},
				scrollable:
				{
					x: !1,
					y: !1
				},
				get scrollX()
				{
					return this.scrollable
				},
				set scrollX(e)
				{
					!0 === e ? (this.scrollable.x = !0, setStyle(s, "overflow-x:scroll")) : !1 === e && (this.scrollable.x = !1, setStyle(s, "overflow-x:none"))
				},
				get scrollY()
				{
					return this.scrollable
				},
				set scrollY(e)
				{
					!0 === e ? (this.scrollable.y = !0, setStyle(s, "overflow-y:scroll")) : !1 === e && (this.scrollable.y = !1, setStyle(s, "overflow-y:none"))
				},
				hide: function (e)
				{
					e ? setTimeout(function ()
					{
						hideElement(s)
					}, e) : hideElement(s)
				},
				show: function (e)
				{
					e ? setTimeout(function ()
					{
						showElement(s)
					}, e) : showElement(s)
				},
				set sound(e)
				{
					onEvent(s, "click", function ()
					{
						playSound(e)
					})
				},
				set speech(e)
				{
					onEvent(s, "click", function ()
					{
						playSpeech(e)
					})
				},
				set click(t)
				{
					onEvent(s, "click", function (e)
					{
						t(e)
					})
				},
				set change(t)
				{
					onEvent(s, "change", function (e)
					{
						t(e)
					})
				},
				set keyup(t)
				{
					onEvent(s, "keyup", function (e)
					{
						t(e)
					})
				},
				set keydown(t)
				{
					onEvent(s, "keydown", function (e)
					{
						t(e)
					})
				},
				set keypress(t)
				{
					onEvent(s, "keypress", function (e)
					{
						t(e)
					})
				},
				set mousemove(t)
				{
					onEvent(s, "mousemove", function (e)
					{
						t(e)
					})
				},
				set mousedown(t)
				{
					onEvent(s, "mousedown", function (e)
					{
						t(e)
					})
				},
				set mouseup(t)
				{
					onEvent(s, "mouseup", function (e)
					{
						t(e)
					})
				},
				set mouseover(t)
				{
					onEvent(s, "mouseover", function (e)
					{
						t(e)
					})
				},
				set mouseout(t)
				{
					onEvent(s, "mouseout", function (e)
					{
						t(e)
					})
				},
				set input(t)
				{
					onEvent(s, "input", function (e)
					{
						t(e)
					})
				},
				set hover(t)
				{
					this.ini = {};
					var e, r = this.ini;
					for (e in t) r[e] = this[e];
					this.mouseover = function ()
					{
						for (var e in t) g(s)[e] = t[e]
					}, this.mouseout = function ()
					{
						for (var e in r) g(s)[e] = r[e]
					}
				},
				drop: function () {},
				set drag(e)
				{
					!1 === e ? o = !1 : (o = !0, g(e).mousemove = function (e)
					{
						n && o && (c.y = e.y - i, c.x = e.x - a)
					}, g(e).mouseup = function (e)
					{
						!0 !== n || e.y === r && e.x === t || c.drop(e), n = !1
					})
				},
				dblClick: function () {},
				collides: function (e, t)
				{
					var r, o = t ? "number" == typeof t ? r = t : (r = t[0], t[1]) : r = 0,
						t = g(s),
						e = g(e);
					return t.y + t.height + o >= e.y && t.y <= e.y + e.height + o && (t.x + t.width + r >= e.x && t.x <= e.x + e.width + r || void 0)
				},
				alignX: function (e, t)
				{
					var r = c,
						o = t || 0;
					switch (e)
					{
					case "center":
						r.x = 160 + o - r.width / 2;
						break;
					case "left":
						r.x = 0 + o;
						break;
					case "right":
						r.x = 320 + o - r.width
					}
				},
				alignY: function (e, t)
				{
					var r = c,
						o = t || 0;
					switch (e)
					{
					case "center":
						r.y = 225 + o - r.height / 2;
						break;
					case "top":
						r.y = 0 + o;
						break;
					case "bottom":
						r.y = 445 + o - r.height
					}
				},
				align: function (e, t, r)
				{
					var o = t || 0,
						n = r || 0,
						i = c;
					switch (e)
					{
					case "center":
						i.alignX("center", o), i.alignY("center", n);
						break;
					case "center-right":
					case "right-center":
						i.alignX("right", o), i.alignY("right", n);
						break;
					case "center-left":
					case "left-center":
						i.alignX("left", o), i.alignY("center", n);
						break;
					case "center-top":
					case "top-center":
						i.alignX("center", o), i.alignY("top", n);
						break;
					case "center-bottom":
					case "bottom-center":
						i.alignX("center", o), i.alignY("bottom", n);
						break;
					case "top-right":
					case "right-top":
						i.alignX("right", o), i.alignY("top", n);
						break;
					case "top-left":
					case "left-top":
						i.alignX("left", o), i.alignY("top", n);
						break;
					case "bottom-right":
					case "right-bottom":
						i.alignX("right", o), i.alignY("bottom", n);
						break;
					case "bottom-left":
					case "left-bottom":
						i.alignX("left", o), i.alignY("bottom", n)
					}
				},
				alignParentX: function (e, t, r)
				{
					var o = g(s);
					o.parent = e;
					var n = g(e).width,
						i = r || 0;
					switch (t)
					{
					case "center":
						o.x = n / 2 + i - o.width / 2;
						break;
					case "left":
						o.x = 0 + i;
						break;
					case "right":
						o.x = n + i - o.width
					}
				},
				alignParentY: function (e, t, r)
				{
					var o = g(s);
					o.parent = e;
					var n = g(e).height,
						i = r || 0;
					switch (t)
					{
					case "center":
						o.y = n / 2 + i - o.height / 2;
						break;
					case "top":
						o.y = 0 + i;
						break;
					case "bottom":
						o.y = n + i - o.height
					}
				},
				alignParent: function (e, t, r, o)
				{
					var n = c;
					switch (t)
					{
					case "center":
						n.alignParentX(e, "center", r), n.alignParentY(e, "center", o);
						break;
					case "center-right":
					case "right-center":
						n.alignParentX(e, "right", r), n.alignParentY(e, "center", o);
						break;
					case "center-left":
					case "left-center":
						n.alignParentX(e, "left", r), n.alignParentY(e, "center", o);
						break;
					case "center-top":
					case "top-center":
						n.alignParentX(e, "center", r), n.alignParentY(e, "top", o);
						break;
					case "center-bottom":
					case "bottom-center":
						n.alignParentX(e, "center", r), n.alignParentY(e, "bottom", o);
						break;
					case "top-right":
					case "right-top":
						n.alignParentX(e, "right", r), n.alignParentY(e, "top", o);
						break;
					case "top-left":
					case "left-top":
						n.alignParentX(e, "left", r), n.alignParentY(e, "top", o);
						break;
					case "bottom-right":
					case "right-bottom":
						n.alignParentX(e, "right", r), n.alignParentY(e, "bottom", o);
						break;
					case "bottom-left":
					case "left-bottom":
						n.alignParentX(e, "left", r), n.alignParentY(e, "bottom", o)
					}
				},
				rateX: 10,
				speedX: 1,
				rateY: 10,
				speedY: 1,
				moveX: function (e, t)
				{
					var r = 0,
						o = timedLoop(c.rateX, function ()
						{
							0 < e ? (r += c.speedX, c.x += c.speedX, e <= r && (stopTimedLoop(o), t && t())) : (r -= c.speedX, c.x -= c.speedX, r <= e && (stopTimedLoop(o), t && t()))
						})
				},
				moveY: function (e, t)
				{
					var r = 0,
						o = timedLoop(c.rateY, function ()
						{
							0 < e ? (r += c.speedY, c.y += c.speedY, e <= r && (stopTimedLoop(o), t && t())) : (r -= c.speedY, c.y -= c.speedY, r <= e && (stopTimedLoop(o), t && t()))
						})
				},
				minX: !1,
				maxX: !1,
				minY: !1,
				maxY: !1
			};
		c.mousedown = function (e)
		{
			o && (n = !0, i = e.y - c.y, a = e.x - c.x), t = e.x, r = e.y
		};
		var l = 0;
		return c.click = function (e)
		{
			2 == ++l && c.dblClick(e), setTimeout(function ()
			{
				l = 0
			}, 250)
		}, c
	};
	return {
		$: g,
		Template: function (e)
		{
			this.props = {};
			var t, o = this.props;
			for (t in e) o[t] = e[t];
			this.Apply = function ()
			{
				for (var e = Array.isArray(arguments[0]) ? arguments[0] : arguments, t = 0; t < e.length; t++)
				{
					for (var r in o) g(e[t])[r] = o[r];
					o.callback && o.callback(g(e[t]))
				}
			}
		}
	}
})();
