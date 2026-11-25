/* ==========================================================================
   源图智能 ATSU — 站点交互
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------- icon library ---------------- */
  const I = {
    cpu: '<rect x="6.5" y="6.5" width="11" height="11" rx="1.6"/><rect x="9.8" y="9.8" width="4.4" height="4.4"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
    chip: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM4 9h-2M4 15H2M20 9h2M20 15h2M9 4V2M15 4V2M9 20v2M15 20v2"/>',
    monitor: '<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8.5 21h7M12 17v4"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    network: '<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M12 7.4v4.4M12 11.8 6.6 16M12 11.8 17.4 16"/>',
    power: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    box: '<path d="m12 2 8.5 4.8v10.4L12 22l-8.5-4.8V6.8L12 2Z"/><path d="m3.5 6.8 8.5 4.9 8.5-4.9M12 11.7V22"/>',
    module: '<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M6.5 9.5h4v5h-4zM14 9.5h3.5v2.4H14zM14 14h3.5v1.4H14z"/>',
    factory: '<path d="M2.5 21V10l6 3.5V10l6 3.5V6l7 4v11Z"/><path d="M7 17h2M12 17h2M17 17h2"/>',
    truck: '<path d="M1.5 6h11v10h-11zM12.5 9h4l3 3.5V16h-7Z"/><circle cx="5.5" cy="18" r="1.8"/><circle cx="16.5" cy="18" r="1.8"/>',
    medical: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z"/>',
    shield: '<path d="M12 2.5 20 6v6c0 4.4-3.2 7.6-8 9.5-4.8-1.9-8-5.1-8-9.5V6l8-3.5Z"/><path d="m8.5 12 2.4 2.4 4.6-4.8"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4h2.4l2.2 11h11.2l2.2-8H6"/>',
    energy: '<path d="M12 2v7M12 15v7M4.8 6.3l5 5M14.2 12.7l5 5M2 12h7M15 12h7M4.8 17.7l5-5M14.2 11.3l5-5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z"/>',
    arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
    check: '<path d="m4.5 12.5 5 5L19.5 6.5"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
    phone: '<path d="M6.4 3.5 9 2.2l2.4 4.6-1.7 1.7a13 13 0 0 0 5.8 5.8l1.7-1.7 4.6 2.4-1.3 2.6a2.4 2.4 0 0 1-2.7 1.3C11.2 17.5 6.5 12.8 5.1 6.2a2.4 2.4 0 0 1 1.3-2.7Z"/>',
    mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/>',
    pin: '<path d="M12 21s7-5.8 7-11A7 7 0 0 0 5 10c0 5.2 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    wechat: '<path d="M20.5 11.5c0 3.3-3.4 6-7.5 6-.8 0-1.6-.1-2.3-.3L6 19.5l1-3.2c-1.9-1.1-3-2.8-3-4.8C4 8 7.4 5.5 11.5 5.5s9 2.5 9 6Z"/><path d="M9 10h.01M14 10h.01"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.8 20c0-3.4 2.8-5.6 6.2-5.6s6.2 2.2 6.2 5.6"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6.2M18.4 14.8c1.8.7 2.9 2.1 2.9 4v1.2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    layers: '<path d="m12 2.5 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16.5l9 5 9-5"/>',
    wrench: '<path d="M14.5 6.5a4.5 4.5 0 1 0 5 5L21 11l-3-3-2.5 1.5-2-2L14.5 6.5Z"/><path d="m12.5 9.5-8 8a2.1 2.1 0 0 0 3 3l8-8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/>',
    home: '<path d="m3 10 9-7 9 7v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20Z"/><path d="M9 21v-7h6v7"/>',
    file: '<path d="M6 2.5h8l4 4V21H6Z"/><path d="M14 2.5V7h4M9 12h6M9 16h6"/>',
    spark: '<path d="M12 2.5 14.6 9l6.4 2.5-6.4 2.5L12 21l-2.6-7L3 11.5 9.4 9 12 2.5Z"/>',
    headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><path d="M4 13h2.5v6H5a1.5 1.5 0 0 1-1.5-1.5V13ZM20 13h-2.5v6H19a1.5 1.5 0 0 0 1.5-1.5V13Z"/><path d="M17.5 19v1a2.5 2.5 0 0 1-2.5 2.5h-2"/>',
    quote: '<path d="M9.5 6C6.4 7.4 4.5 10 4.5 13.2 4.5 16 6 18 8.4 18c2 0 3.4-1.4 3.4-3.3 0-1.9-1.3-3.2-3.1-3.2-.3 0-.6 0-.8.1.3-1.6 1.5-2.9 3.1-3.8L9.5 6Zm9 0c-3.1 1.4-5 4-5 7.2 0 2.8 1.5 4.8 3.9 4.8 2 0 3.4-1.4 3.4-3.3 0-1.9-1.3-3.2-3.1-3.2-.3 0-.6 0-.8.1.3-1.6 1.5-2.9 3.1-3.8L18.5 6Z"/>'
  };

  function icon(name, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[name] || "") + "</svg>";
  }

  /* ---------------- shared chrome ---------------- */
  const NAV = [
    { key: "home", label: "首页", href: "index.html" },
    { key: "about", label: "关于我们", href: "about.html" },
    { key: "products", label: "产品中心", href: "products.html", mega: true },
    { key: "solutions", label: "解决方案", href: "solutions.html" },
    { key: "cases", label: "工程案例", href: "cases.html" },
    { key: "news", label: "新闻资讯", href: "news.html" },
    { key: "contact", label: "联系我们", href: "contact.html" }
  ];

  const MEGA = [
    { cat: "com6", icon: "module", desc: "Type 6 · Compact / Basic" },
    { cat: "com10", icon: "chip", desc: "Type 10 · 84 × 55mm" },
    { cat: "sbc", icon: "monitor", desc: "3.5\" 单板 / 边缘控制" },
    { cat: "system", icon: "box", desc: "4U / 壁挂式整机" }
  ];

  function buildHeader(page) {
    const isHome = page === "home";
    const mega = MEGA.map(function (m) {
      const c = CATEGORIES.filter(function (x) { return x.id === m.cat; })[0];
      return '<a href="products.html?cat=' + m.cat + '"><span class="ic">' + icon(m.icon) + "</span><span><b>" + c.name + "</b><span>" + m.desc + "</span></span></a>";
    }).join("");

    const nav = NAV.map(function (n) {
      const active = n.key === page ? " active" : "";
      const caret = n.mega ? '<i class="caret"></i>' : "";
      const drop = n.mega ? '<div class="mega">' + mega + "</div>" : "";
      return '<li class="' + active.trim() + '"><a href="' + n.href + '">' + n.label + caret + "</a>" + drop + "</li>";
    }).join("");

    const drawer = NAV.map(function (n) {
      if (!n.mega) {
        return '<div class="group"><a href="' + n.href + '">' + n.label + "</a></div>";
      }
      const subs = CATEGORIES.map(function (c) {
        return '<a href="products.html?cat=' + c.id + '">' + c.name + "</a>";
      }).join("");
      return '<div class="group"><a href="' + n.href + '">' + n.label + "</a><div class=\"sub\">" + subs + '<a href="products.html">全部产品</a></div></div>';
    }).join("");

    return (
      '<a class="skip-link" href="#main">跳转到主要内容</a>' +
      '<header class="site-header ' + (isHome ? "on-transparent" : "solid") + '" id="siteHeader">' +
      '<div class="container">' +
      '<a class="brand" href="index.html" aria-label="源图智能 首页">' +
      '<img class="logo-light" src="assets/img/logo-atsu-white.png" alt="ATSU 源图智能">' +
      '<img class="logo-dark" src="assets/img/logo-atsu-blue.png" alt="ATSU 源图智能">' +
      '<span class="divider"></span>' +
      '<span class="name">源图智能<small>YUANTU INTELLIGENT</small></span>' +
      "</a>" +
      '<ul class="nav">' + nav + "</ul>" +
      '<div class="header-cta"><a class="btn small" href="contact.html">获取选型支持' + icon("arrow") + "</a></div>" +
      '<button class="menu-toggle" type="button" aria-label="打开导航菜单" aria-expanded="false"><i></i><i></i><i></i></button>' +
      "</div></header>" +
      '<div class="drawer" id="drawer">' + drawer +
      '<div class="drawer-foot"><a class="btn block" href="contact.html">获取选型支持' + icon("arrow") + "</a>" +
      '<div class="contact-line">销售热线 <b>' + HOME.phone + "</b></div>" +
      '<div class="contact-line">' + HOME.email + "</div></div></div>"
    );
  }

  function buildFooter() {
    return (
      '<footer class="site-footer">' +
      '<div class="container">' +
      '<div class="footer-top">' +
      '<div class="footer-brand">' +
      '<img src="assets/img/logo-atsu-white.png" alt="ATSU 源图智能">' +
      "<p>源图智能专注工业计算机主板与嵌入式核心模块的自主研发，以 COM 标准化架构，为智能制造、智慧交通、医疗设备等行业提供稳定、可靠、可持续供货的算力基座。</p>" +
      '<div class="contact">' +
      "<div>电话 <b>" + HOME.phone + "</b></div>" +
      "<div>邮箱 <a href=\"mailto:" + HOME.email + "\">" + HOME.email + "</a></div>" +
      "<div>地址 " + HOME.address + "</div>" +
      "</div></div>" +
      '<div class="footer-col"><h4>产品中心</h4><ul>' +
      CATEGORIES.map(function (c) { return '<li><a href="products.html?cat=' + c.id + '">' + c.name + "</a></li>"; }).join("") +
      "</ul></div>" +
      '<div class="footer-col"><h4>快速链接</h4><ul>' +
      '<li><a href="about.html">关于源图</a></li>' +
      '<li><a href="solutions.html">解决方案</a></li>' +
      '<li><a href="cases.html">工程案例</a></li>' +
      '<li><a href="news.html">新闻资讯</a></li>' +
      '<li><a href="contact.html">联系我们</a></li>' +
      "</ul></div>" +
      '<div class="footer-col"><h4>资源与支持</h4><ul>' +
      '<li><a href="assets/download/yuantu-selection-2026.pdf" target="_blank" rel="noopener">产品选型手册 2026</a></li>' +
      '<li><a href="solutions.html#faq">常见问题</a></li>' +
      '<li><a href="contact.html">获取样品与报价</a></li>' +
      '<li><a href="contact.html">载板定制咨询</a></li>' +
      "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom"><div>© 2026 江苏源图智能科技有限公司 · 保留所有权利</div>' +
      '<div class="links"><span>苏ICP12345678</span><a href="index.html">网站首页</a><a href="contact.html">联系我们</a></div></div>' +
      "</div></footer>" +
      '<div class="rail">' +
      '<a href="tel:' + HOME.phoneRaw + '" aria-label="电话咨询">' + icon("phone") + '<span class="tip">' + HOME.phone + "</span></a>" +
      '<a href="mailto:' + HOME.email + '" aria-label="邮件咨询">' + icon("mail") + '<span class="tip">' + HOME.email + "</span></a>" +
      '<a href="contact.html" aria-label="微信联系">' + icon("wechat") + '<span class="tip">微信联系</span></a>' +
      "</div>" +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>'
    );
  }

  /* ---------------- chrome mount ---------------- */
  const page = document.body.getAttribute("data-page") || "home";

  const headerSlot = document.getElementById("siteHeaderSlot");
  if (headerSlot) headerSlot.outerHTML = buildHeader(page);

  const footerSlot = document.getElementById("siteFooterSlot");
  if (footerSlot) footerSlot.outerHTML = buildFooter();

  /* inject icons */
  document.querySelectorAll("[data-icon]").forEach(function (el) {
    el.innerHTML = icon(el.getAttribute("data-icon"));
    el.removeAttribute("data-icon");
  });

  /* header states */
  const header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    const y = window.scrollY;
    if (page === "home") {
      if (y > 30) {
        header.classList.add("solid");
        header.classList.remove("on-transparent");
      } else {
        header.classList.remove("solid");
        header.classList.add("on-transparent");
      }
    }
    header.classList.toggle("scrolled", y > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* mobile menu */
  const toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "关闭导航菜单" : "打开导航菜单");
    });
  }
  document.querySelectorAll(".drawer a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.body.classList.remove("nav-open");
  });

  /* ---------------- reveal ---------------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px" })
    : null;

  function observeReveals(scope) {
    (scope || document).querySelectorAll(".reveal:not(.in)").forEach(function (el) {
      if (io) io.observe(el);
      else el.classList.add("in");
    });
  }
  observeReveals();

  /* counters */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = parseFloat(el.getAttribute("data-count"));
        const dec = parseInt(el.getAttribute("data-dec") || "0", 10);
        const dur = 1400;
        const start = performance.now();
        function tick(t) {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(dec);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toFixed(dec);
        }
        requestAnimationFrame(tick);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { co.observe(c); });
  }

  /* ---------------- helpers ---------------- */
  function catName(id) {
    const c = CATEGORIES.filter(function (x) { return x.id === id; })[0];
    return c ? c.name : "";
  }
  function productById(id) {
    return PRODUCTS.filter(function (p) { return p.id === id; })[0];
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  const toastEl = document.getElementById("toast");
  let toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 3200);
  }

  /* ---------------- home flagship ---------------- */
  const flagshipEl = document.getElementById("flagship");
  if (flagshipEl) {
    const picks = ["s201", "s301", "s101"].map(productById).filter(Boolean);
    const tabs = picks.map(function (p, i) {
      return '<button class="f-tab' + (i === 0 ? " active" : "") + '" data-idx="' + i + '">' +
        '<span class="name">' + p.name + " <i>" + (p.cat === "com6" ? "TYPE 6" : "TYPE 10") + "</i></span>" +
        "<span>" + p.tagline + "</span></button>";
    }).join("");

    function panel(p) {
      const specRows = [
        ["处理器", p.cpuShort],
        ["内存", p.memShort],
        ["尺寸", p.size],
        ["工作温度", p.tempShort]
      ].map(function (r) {
        return "<div><dt>" + r[0] + "</dt><dd>" + r[1] + "</dd></div>";
      }).join("");
      return '<div class="f-visual"><span class="chip a">' + p.badges[0] + '</span><span class="chip b">' + p.badges[2] + '</span>' +
        '<img src="' + p.image + '" alt="' + p.name + '">' +
        "</div>" +
        '<div class="f-info"><div class="cat">' + p.form + "</div><h3>" + p.name + "</h3><p class=\"sub\">" + p.tagline + "</p>" +
        '<dl class="f-specs">' + specRows + "</dl>" +
        '<div class="actions"><a class="btn small" href="product.html?id=' + p.id + '">查看完整规格' + icon("arrow") + "</a>" +
        '<a class="btn small ghost" href="contact.html">索取样品</a></div></div>';
    }

    flagshipEl.innerHTML =
      '<div class="f-tabs">' + tabs + "</div>" +
      '<div class="f-panel" id="fPanel">' + panel(picks[0]) + "</div>";

    flagshipEl.querySelectorAll(".f-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        flagshipEl.querySelectorAll(".f-tab").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        document.getElementById("fPanel").innerHTML = panel(picks[+btn.getAttribute("data-idx")]);
        observeReveals(flagshipEl);
      });
    });
  }

  /* ---------------- catalog ---------------- */
  const grid = document.getElementById("productGrid");
  if (grid) {
    const filtersEl = document.getElementById("filters");
    const searchEl = document.getElementById("catalogSearch");
    const countEl = document.getElementById("catalogCount");
    const params = new URLSearchParams(location.search);
    let state = { cat: params.get("cat") || "all", q: "" };

    const tabs = [{ id: "all", name: "全部产品" }].concat(CATEGORIES.map(function (c) {
      return { id: c.id, name: c.short };
    }));
    filtersEl.innerHTML = tabs.map(function (t) {
      return '<button class="filter' + (state.cat === t.id ? " active" : "") + '" data-cat="' + t.id + '">' + t.name + "</button>";
    }).join("");

    function card(p) {
      return '<article class="p-card reveal"><a class="visual" href="product.html?id=' + p.id + '">' +
        '<span class="cat-chip">' + catName(p.cat) + "</span>" +
        '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
        "</a><div class=\"body\"><h3><a href=\"product.html?id=" + p.id + '">' + p.name + "</a>" + (p.isNew ? '<span class="new">NEW</span>' : "") + "</h3>" +
        '<p class="desc">' + p.tagline + "</p>" +
        '<dl class="specs"><div><dt>处理器</dt><dd>' + p.cpuShort + "</dd></div>" +
        "<div><dt>内存</dt><dd>" + p.memShort + "</dd></div>" +
        "<div><dt>尺寸</dt><dd>" + p.size + "</dd></div></dl>" +
        '<div class="foot"><span>' + p.form + '</span><a class="more" href="product.html?id=' + p.id + '">详情' + icon("arrow") + "</a></div></div></article>";
    }

    function render() {
      const list = PRODUCTS.filter(function (p) {
        const okCat = state.cat === "all" || p.cat === state.cat;
        const q = state.q.trim().toLowerCase();
        const okQ = !q || (p.name + p.tagline + p.desc + p.cpuShort + catName(p.cat)).toLowerCase().indexOf(q) > -1;
        return okCat && okQ;
      });
      grid.innerHTML = list.length
        ? list.map(card).join("")
        : '<div class="empty">没有匹配的机型，试试其他关键词，或<a class="link-arrow" href="contact.html">联系工程师选型</a></div>';
      countEl.innerHTML = "共 <b>" + list.length + "</b> 款机型";
      observeReveals(grid);
    }

    filtersEl.addEventListener("click", function (e) {
      const b = e.target.closest(".filter");
      if (!b) return;
      state.cat = b.getAttribute("data-cat");
      filtersEl.querySelectorAll(".filter").forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      const url = new URL(location.href);
      if (state.cat === "all") url.searchParams.delete("cat");
      else url.searchParams.set("cat", state.cat);
      history.replaceState(null, "", url);
      render();
    });
    let t;
    searchEl.addEventListener("input", function () {
      clearTimeout(t);
      const v = searchEl.value;
      t = setTimeout(function () { state.q = v; render(); }, 160);
    });

    render();

    /* compare table */
    const table = document.getElementById("compareTable");
    if (table) {
      const rows = [
        ["类别", function (p) { return catName(p.cat); }],
        ["处理器", function (p) { return p.cpuShort; }],
        ["内存", function (p) { return p.memShort; }],
        ["显示", function (p) { return p.cat === "com6" || p.cat === "com10" ? "DDI + LVDS/eDP" : "HDMI + DP + VGA"; }],
        ["网络", function (p) { return p.cat === "system" ? "—" : p.cat === "board" ? "4 × GbE" : p.cat === "sbc" ? "2–5 × GbE" : "1 × GbE"; }],
        ["USB", function (p) { return p.cat === "system" ? "2 × USB" : "2–8 路"; }],
        ["尺寸", function (p) { return p.size; }],
        ["工作温度", function (p) { return p.tempShort; }]
      ];
      const cols = PRODUCTS.filter(function (p) { return p.cat !== "system"; });
      let html = "<thead><tr><th>规格 / 型号</th>" + cols.map(function (p) {
        return "<th><a style=\"color:#fff\" href=\"product.html?id=" + p.id + '">' + p.name + "</a></th>";
      }).join("") + "</tr></thead><tbody>";
      rows.forEach(function (r) {
        html += "<tr><th>" + r[0] + "</th>" + cols.map(function (p) { return "<td>" + r[1](p) + "</td>"; }).join("") + "</tr>";
      });
      html += "</tbody>";
      table.innerHTML = html;
    }
  }

  /* ---------------- product detail ---------------- */
  const detail = document.getElementById("productDetail");
  if (detail) {
    const id = new URLSearchParams(location.search).get("id") || "s201";
    const p = productById(id) || PRODUCTS[0];
    document.title = p.name + " " + p.tagline + " — 源图智能 ATSU";
    const bcNow = document.getElementById("bcNow");
    if (bcNow) bcNow.textContent = p.name;

    const highlights = p.highlights.map(function (h) {
      return "<li>" + icon("check") + "<span>" + h + "</span></li>";
    }).join("");

    detail.innerHTML =
      '<div class="detail-visual reveal"><img src="' + p.image + '" alt="' + p.name + '"><span class="size">' + p.size + "</span></div>" +
      '<div class="detail-info reveal" data-delay="1"><div class="cat">' + p.form + "</div><h1>" + p.name + "</h1>" +
      '<p class="subtitle">' + p.tagline + "</p>" +
      '<ul class="detail-highlights">' + highlights + "</ul>" +
      '<div class="detail-actions"><a class="btn" href="contact.html?model=' + p.id + '">获取报价与样品' + icon("arrow") + "</a>" +
      '<a class="btn ghost" href="assets/download/yuantu-selection-2026.pdf" target="_blank" rel="noopener">' + icon("download") + " 下载选型手册</a></div>" +
      '<p class="detail-note">* 以上规格以最新版本产品手册为准，支持按项目定制 I/O、结构与固件。</p></div>';

    const specsEl = document.getElementById("specGroups");
    specsEl.innerHTML = p.specs.map(function (g) {
      return '<section class="spec-card reveal"><h3>' + icon(g.icon) + g.group + "</h3><dl>" +
        g.rows.map(function (r) {
          return '<div class="row"><dt>' + r[0] + "</dt><dd>" + r[1] + "</dd></div>";
        }).join("") + "</dl></section>";
    }).join("");

    const relatedEl = document.getElementById("related");
    function relatedNeed(a, b) {
      return (a.cat === "com6" || a.cat === "com10") && (b.cat === "com6" || b.cat === "com10");
    }
    const related = PRODUCTS.filter(function (x) { return x.id !== p.id && (x.cat === p.cat || relatedNeed(p, x)); }).slice(0, 3);
    // 同系列不足 3 款时，用其他平台补齐
    if (related.length < 3) {
      PRODUCTS.forEach(function (x) {
        if (related.length >= 3) return;
        if (x.id !== p.id && related.indexOf(x) === -1) related.push(x);
      });
    }
    relatedEl.innerHTML = related.map(function (x) {
      return '<article class="p-card reveal"><a class="visual" href="product.html?id=' + x.id + '"><span class="cat-chip">' + catName(x.cat) + "</span>" +
        '<img src="' + x.image + '" alt="' + x.name + '" loading="lazy"></a>' +
        '<div class="body"><h3><a href="product.html?id=' + x.id + '">' + x.name + "</a></h3><p class=\"desc\">" + x.tagline + "</p>" +
        '<div class="foot"><span>' + x.size + '</span><a class="more" href="product.html?id=' + x.id + '">详情' + icon("arrow") + "</a></div></div></article>";
    }).join("");

    observeReveals();
  }

  /* ---------------- FAQ ---------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      const open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    });
  });

  /* ---------------- contact form ---------------- */
  const form = document.getElementById("contactForm");
  if (form) {
    const params = new URLSearchParams(location.search);
    const model = params.get("model");
    if (model) {
      const p = productById(model);
      if (p) {
        form.querySelector('[name="need"]').value = "product";
        form.querySelector('[name="message"]').value = "我对 " + p.name + "（" + p.form + "）感兴趣，希望获取报价、样品与技术支持。";
      }
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const err = document.getElementById("formError");
      const name = form.querySelector('[name="name"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      if (!name || !phone) {
        err.textContent = "请填写您的姓名与联系电话，方便工程师与您联系。";
        err.classList.add("show");
        return;
      }
      err.classList.remove("show");
      const needMap = { product: "产品选型与报价", custom: "载板 / 整机定制", sample: "样品申请", support: "技术支持", other: "其他合作" };
      const body = [
        "姓名：" + name,
        "公司：" + form.querySelector('[name="company"]').value.trim(),
        "电话：" + phone,
        "邮箱：" + form.querySelector('[name="email"]').value.trim(),
        "需求类型：" + (needMap[form.querySelector('[name="need"]').value] || ""),
        "",
        form.querySelector('[name="message"]').value.trim()
      ].join("\n");
      const href = "mailto:" + HOME.email + "?subject=" + encodeURIComponent("【官网咨询】" + name + " - " + (needMap[form.querySelector('[name="need"]').value] || "业务咨询")) + "&body=" + encodeURIComponent(body);
      toast("正在打开邮件客户端，也可直接致电 " + HOME.phone);
      setTimeout(function () { location.href = href; }, 500);
    });
  }

  /* ---------------- year ---------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
