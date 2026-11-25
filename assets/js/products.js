/* ==========================================================================
   产品数据 — 源图智能 ATSU
   数据来源：《源图智能 产品选型手册 2026》/ 上海炫移在售机型资料
   ========================================================================== */

const CATEGORIES = [
  { id: "com6", name: "COM Express Type 6", short: "Type 6 核心模块", desc: "高性能、高扩展的 Compact / Basic 标准模块" },
  { id: "com10", name: "COM Express Type 10", short: "Type 10 核心模块", desc: "84×55mm Mini 尺寸，低功耗与宽压输入" },
  { id: "sbc", name: "嵌入式单板", short: "3.5\" 单板", desc: "集成显示、网络与串口的行业单板" },
  { id: "board", name: "工业主板", short: "Micro ATX / 国产化", desc: "面向网安、视觉与边缘服务器的标准主板" },
  { id: "system", name: "工控整机", short: "4U / 壁挂机箱", desc: "标准上架与壁挂式工业计算机整机" }
];

const PRODUCTS = [
  {
    id: "s201",
    name: "ATSU-S201",
    cat: "com6",
    tagline: "Intel Alder Lake-P / Raptor Lake-P 高性能核心模块",
    desc: "面向视觉检测、边缘 AI 与多屏控制的高性能 COM Express Compact 模块，兼顾算力、接口密度与长期供货。",
    image: "assets/img/product-s201.webp",
    badges: ["Type 6", "95 × 95 mm", "28W"],
    form: "COM Express Compact Type 6",
    size: "95 × 95 mm",
    cpuShort: "Intel Core i5-1340P",
    memShort: "2 × DDR5 / 64GB",
    tempShort: "0 ~ 60℃",
    featured: true,
    isNew: true,
    highlights: [
      "第 13 代 Intel Core i5-1340P，4P+8E 共 16 线程",
      "2 × DDR5 SO-DIMM 5200MT/s，最高支持 64GB",
      "3 路 DDI（HDMI/DP）+ LVDS/eDP，最多三显",
      "2 × PCIe Gen4 x4 + 6 × PCIe Gen3 x1 扩展",
      "4 × USB 3.1、8 × USB 2.0、2 × SATA 3.0",
      "标准 95 × 95mm Compact 尺寸，-40~80℃ 存储"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU Type", "Intel Core i5-1340P"],
          ["性能核最大睿频", "4.6GHz"],
          ["能效核最大睿频", "3.4GHz"],
          ["Core / Thread", "4P + 8E / 16T"],
          ["Graphic", "Intel Iris Xe Graphics eligible"],
          ["CPU TDP", "28W"]
        ]
      },
      {
        group: "内存",
        icon: "chip",
        rows: [
          ["插槽", "2 × DDR5 SO-DIMM"],
          ["速率", "5200MT/s"],
          ["最大容量", "64GB"],
          ["ECC", "Non-ECC"]
        ]
      },
      {
        group: "显示",
        icon: "monitor",
        rows: [
          ["DDI", "3 × DDI（HDMI / DP）4096 × 2160 @60Hz"],
          ["LCD", "LVDS 18/24bit（eDP 可选）"],
          ["显示数量", "最多 3 路同时显示"]
        ]
      },
      {
        group: "扩展与 I/O",
        icon: "expand",
        rows: [
          ["PCIe", "2 × PCIe Gen4 x4；6 × PCIe Gen3 x1（1 路与 I210 复用）"],
          ["USB", "4 × USB 3.1，8 × USB 2.0"],
          ["SATA", "2 × SATA 3.0"],
          ["串口", "2 × 2-Wire UART"],
          ["CAN", "1 × CAN 2.0（可选，与 1 路 UART 复用）"],
          ["GPIO", "8-bit"]
        ]
      },
      {
        group: "网络与音频",
        icon: "network",
        rows: [
          ["LAN", "1 × Intel I210-AT GbE（可选）"],
          ["Audio", "High-Definition Audio Interface"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["电源", "AT/ATX 上电，VIN 12–20V，VSB 4.75–5.25V"],
          ["工作温度", "0 ~ 60℃"],
          ["存储温度", "-40 ~ 80℃"],
          ["操作系统", "WIN10 / WIN11 / Linux"],
          ["BIOS", "AMI UEFI 256Mbit"],
          ["尺寸", "95 × 95 mm"]
        ]
      }
    ]
  },
  {
    id: "s301",
    name: "ATSU-S301",
    cat: "com6",
    tagline: "海光 34XX 系列国产化高性能核心模块",
    desc: "面向信息安全、轨道交通与工业控制的高可靠国产化平台，支持 8~16 核海光处理器与丰富 PCIe 通道。",
    image: "assets/img/product-s301.webp",
    badges: ["Type 6", "125 × 95 mm", "国产化"],
    form: "COM Express 3.0 Type 6",
    size: "125 × 95 mm",
    cpuShort: "海光 3450E / 3490",
    memShort: "2 × DDR5 / 64GB",
    tempShort: "0 ~ 60℃",
    featured: true,
    highlights: [
      "海光 34XX 系列处理器，3450E 为 8 核 16 线程 3.6GHz",
      "2 × DDR5 SO-DIMM 5200MT/s，最高支持 64GB",
      "A/B：PCIe x8×1 / x4×2 / x2×4 / x1×8；C/D：x16、x8×2",
      "4 × SATA 3.0，8 × USB 2.0 + 4 × USB 3.0",
      "SM768 显示，DP + VGA / LVDS 双显方案",
      "125 × 95mm，支持麒麟 / UOS 国产化系统"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU Type", "海光 3450E / 3490"],
          ["频率", "3.6GHz / 2.8GHz"],
          ["Core / Thread", "8 核 16 线程（3450E）"],
          ["CPU TDP", "75W / 135W"],
          ["Graphic", "SM768，DP + VGA / LVDS"]
        ]
      },
      {
        group: "内存",
        icon: "chip",
        rows: [
          ["插槽", "2 × DDR5 SO-DIMM"],
          ["速率", "5200MT/s"],
          ["最大容量", "64GB"],
          ["ECC", "Non-ECC"]
        ]
      },
      {
        group: "显示",
        icon: "monitor",
        rows: [
          ["DDI", "DP + VGA / LVDS"],
          ["LCD", "LVDS 18/24bit"],
          ["显示数量", "双显"]
        ]
      },
      {
        group: "扩展与 I/O",
        icon: "expand",
        rows: [
          ["PCIe（A/B）", "x8×1 / x4×2 / x2×4 / x1×8"],
          ["PCIe（C/D）", "x16×1 / x8×2"],
          ["USB", "8 × USB 2.0 + 4 × USB 3.0"],
          ["SATA", "4 × SATA 3.0"],
          ["串口", "2 × UART"],
          ["GPIO / I2C", "GPIO ×8 / I2C ×2"]
        ]
      },
      {
        group: "网络与音频",
        icon: "network",
        rows: [
          ["LAN", "1 × Intel I210-AT GbE（可选）"],
          ["Audio", "High-Definition Audio Interface"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["电源", "AT/ATX 上电，VIN 12–20V，VSB 4.75–5.25V"],
          ["工作温度", "0 ~ 60℃"],
          ["存储温度", "-40 ~ 80℃"],
          ["操作系统", "WIN10 64bit / Ubuntu / 麒麟 / UOS"],
          ["BIOS", "AMI UEFI"],
          ["尺寸", "125 × 95 mm"]
        ]
      }
    ]
  },
  {
    id: "s203",
    name: "ATSU-S203",
    cat: "com6",
    tagline: "Intel Alder Lake-N / Amston Lake 高集成核心模块",
    desc: "以单芯片平台实现低功耗与高集成，覆盖 N50 到 i3-N305 多档算力，适合网关、HMI 与瘦终端。",
    image: "assets/img/product-s203.webp",
    badges: ["Type 6", "95 × 95 mm", "6–15W"],
    form: "COM Express Type 6",
    size: "95 × 95 mm",
    cpuShort: "N50 ~ i3-N305",
    memShort: "LPDDR5 / 16GB",
    tempShort: "0 ~ 60℃",
    isNew: true,
    highlights: [
      "8 款处理器可选，TDP 6–15W，无风扇设计友好",
      "板载 LPDDR5，最高 16GB，4000MT/s",
      "2.5G / 1000M / 100M 自适应网口（Intel I210）",
      "2 × USB 3.2 + 8 × USB 2.0，2 × SATA Gen3",
      "默认 4 × PCIe Gen3 x1，可选 x4 / x2 组合",
      "95 × 95mm，支持 -40~85℃ 扩展温度"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU Type", "N50 / N97 / N200 / i3-N305 / X7425E / X7835RE / X7433RE / X7211RE"],
          ["主频", "1.0 ~ 3.4GHz"],
          ["核心数", "2 / 4 / 8"],
          ["LLC", "6MB"],
          ["CPU TDP", "6 ~ 15W"]
        ]
      },
      {
        group: "内存",
        icon: "chip",
        rows: [
          ["类型", "板载 LPDDR5"],
          ["最大容量", "16GB"],
          ["速率", "4000MT/s"]
        ]
      },
      {
        group: "显示",
        icon: "monitor",
        rows: [
          ["LVDS", "1366 × 768 @60Hz"],
          ["eDP", "1920 × 1080 @60Hz（最高 4096 × 2304）"],
          ["DDI", "1 路 DDI 支持 HDMI / DP"],
          ["HDMI", "2.0b，4096 × 2034 @60Hz"],
          ["DP", "1.4，4096 × 2034 @60Hz"],
          ["显示数量", "最多 2 路同时显示"]
        ]
      },
      {
        group: "网络与存储",
        icon: "network",
        rows: [
          ["LAN", "1 路 2.5G / 1000M / 100M 网口（I210）"],
          ["存储", "N/A（无板载存储）"]
        ]
      },
      {
        group: "扩展与 I/O",
        icon: "expand",
        rows: [
          ["USB", "2 × USB 3.1，8 × USB 2.0"],
          ["SATA", "2 × SATA Gen3（6Gb/s）"],
          ["PCIe", "默认 4 × PCIe Gen3 x1；可选 1 × x4 / 2 × x2"],
          ["GPIO", "8-bit"],
          ["UART", "2 ports"],
          ["LPC / eSPI", "支持 LPC，板载 SPI FLASH 启动"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["电源", "AT/ATX，VIN 4.75–20V，5VSB（仅 ATX）"],
          ["工作温度", "0 ~ 60℃（扩展 -40 ~ 85℃）"],
          ["存储温度", "-40 ~ 85℃"],
          ["操作系统", "WIN10 / WIN11"],
          ["BIOS", "AMI UEFI 256Mbit"],
          ["尺寸", "95 × 95 mm"]
        ]
      }
    ]
  },
  {
    id: "s101",
    name: "ATSU-S101",
    cat: "com10",
    tagline: "Intel Elkhart Lake 低功耗 Mini 核心模块",
    desc: "84 × 55mm 标准 Mini 尺寸，板载内存与 eMMC，适合手持测试设备、医疗与移动终端。",
    image: "assets/img/product-s101.webp",
    badges: ["Type 10 Mini", "84 × 55 mm", "9–10W"],
    form: "COM Express Mini Type 10",
    size: "84 × 55 mm",
    cpuShort: "J6412 / X6413E / X6425E",
    memShort: "LPDDR4 / 16GB",
    tempShort: "0 ~ 60℃",
    featured: true,
    highlights: [
      "J6412 / X6413E / X6425E 三档 Elkhart Lake 平台",
      "板载 LPDDR4 3200MHz，最高 16GB",
      "板载 eMMC，最高 64GB",
      "6 × USB 2.0 + 2 × USB 3.1（10Gbps）",
      "4 × PCIe Gen3 x1、2 × SATA 3.0、可选双千兆",
      "84 × 55mm，宽压 12–20V 输入，适合移动设备"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU", "J6412 / X6413E / X6425E"],
          ["主频 / 超频", "2.0/2.6GHz；1.5/3.0GHz；2.0/3.0GHz"],
          ["Core / Thread", "4C / 4T"],
          ["Graphic", "Intel UHD Graphics 16EU"],
          ["CPU TDP", "10W / 9W / 9W"]
        ]
      },
      {
        group: "内存与存储",
        icon: "chip",
        rows: [
          ["内存", "板载 LPDDR4 3200MHz，最高 16GB"],
          ["存储", "板载 eMMC，最高 64GB"]
        ]
      },
      {
        group: "显示",
        icon: "monitor",
        rows: [
          ["LVDS", "LVDS 18/24bit（eDP 可选）"],
          ["DDI", "HDMI + DP，4096 × 2160 @60Hz"]
        ]
      },
      {
        group: "扩展与 I/O",
        icon: "expand",
        rows: [
          ["USB", "6 × USB 2.0，2 × USB 3.1（10Gbps）"],
          ["SATA", "2 × SATA 3.0"],
          ["PCIe", "4 × PCIe Gen3 x1"],
          ["串口", "2 × 2-Wire UART"],
          ["GPIO", "8-bit"],
          ["TPM", "TPM 2.0（可选）"]
        ]
      },
      {
        group: "网络与音频",
        icon: "network",
        rows: [
          ["LAN", "1 × Intel I210-AT GbE"],
          ["Audio", "High-Definition Audio Interface"],
          ["SMBUS / I2C / LPC", "支持"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["电源", "VIN 12–20V，VSB 4.75–5.25V"],
          ["操作系统", "WIN10 / WIN11 / Linux"],
          ["BIOS", "AMI UEFI 256Mbit"],
          ["尺寸", "84 × 55 mm"]
        ]
      }
    ]
  },
  {
    id: "s102",
    name: "ATSU-S102",
    cat: "com10",
    tagline: "Intel Alder Lake-N Mini 核心模块",
    desc: "在 84 × 55mm 尺寸上引入 Alder Lake-N 与 2.5G 网络，为下一代低功耗终端提供更长生命周期。",
    image: "assets/img/product-s102.webp",
    badges: ["Type 10 Mini", "84 × 55 mm", "2.5G LAN"],
    form: "COM Express Mini Type 10",
    size: "84 × 55 mm",
    cpuShort: "N50 ~ X7211RE",
    memShort: "LPDDR5 / 16GB",
    tempShort: "0 ~ 60℃",
    isNew: true,
    highlights: [
      "8 款 Alder Lake-N / Amston Lake 处理器可选",
      "板载 LPDDR5 16GB，4000MT/s",
      "板载 eMMC，最高 64GB",
      "2.5G / 1000M / 100M 自适应网口",
      "2 × USB 3.1、8 × USB 2.0、2 × SATA Gen3",
      "84 × 55mm，支持 -40~85℃ 扩展温度"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU Type", "N50 / N97 / N200 / i3-N305 / X7425E / X7835RE / X7433RE / X7211RE"],
          ["主频", "1.0 ~ 3.4GHz"],
          ["核心数", "2 / 4 / 8"],
          ["LLC", "6MB"],
          ["CPU TDP", "6 ~ 15W"]
        ]
      },
      {
        group: "内存与存储",
        icon: "chip",
        rows: [
          ["内存", "板载 LPDDR5，最高 16GB，4000MT/s"],
          ["存储", "板载 eMMC，最高 64GB"]
        ]
      },
      {
        group: "显示",
        icon: "monitor",
        rows: [
          ["LVDS", "1366 × 768 @60Hz"],
          ["eDP", "1920 × 1080 @60Hz（最高 4096 × 2304）"],
          ["DDI", "1 路 DDI 支持 HDMI / DP"],
          ["HDMI", "2.0b，4096 × 2034 @60Hz"],
          ["DP", "1.4，4096 × 2034 @60Hz"],
          ["显示数量", "最多 2 路同时显示"]
        ]
      },
      {
        group: "扩展与 I/O",
        icon: "expand",
        rows: [
          ["USB", "2 × USB 3.1，8 × USB 2.0"],
          ["SATA", "2 × SATA Gen3（6Gb/s，与 PCIe x4 复用）"],
          ["PCIe", "默认 4 × PCIe Gen3 x1；可选 1 × x4 / 2 × x2"],
          ["GPIO", "8-bit"],
          ["UART", "2 ports"]
        ]
      },
      {
        group: "网络与音频",
        icon: "network",
        rows: [
          ["LAN", "1 路 2.5G / 1000M / 100M 网口"],
          ["Audio", "High-Definition Audio Interface"],
          ["SW API", "I2C、GPIO、SMBUS"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["电源", "AT/ATX，VIN 4.75–20V，5VSB（仅 ATX）"],
          ["工作温度", "0 ~ 60℃（扩展 -40 ~ 85℃）"],
          ["存储温度", "-40 ~ 85℃"],
          ["操作系统", "WIN10 / WIN11"],
          ["BIOS", "AMI UEFI 256Mbit"],
          ["尺寸", "84 × 55 mm"]
        ]
      }
    ]
  },
  {
    id: "s103",
    name: "ATSU-S103",
    cat: "com10",
    tagline: "Intel Skylake-U 成熟平台核心模块",
    desc: "面向长期供货与存量平台升级，兼容 Win7 系统，适合医疗、金融与工业终端。",
    image: "assets/img/product-s103.webp",
    badges: ["Type 10 Mini", "84 × 55 mm", "Win7"],
    form: "COM Express Mini Type 10",
    size: "84 × 55 mm",
    cpuShort: "i7-6500U / i5-6300U / i3-6100U",
    memShort: "LPDDR4 / 32GB",
    tempShort: "0 ~ 60℃",
    highlights: [
      "Skylake-U 平台，i7 / i5 / i3 三档可选",
      "板载 LPDDR4，最高 32GB",
      "板载 eMMC，最高 64GB",
      "2 × USB 3.0、8 × USB 2.0、2 × SATA Gen3",
      "PCIe Gen3 x8、I219LM 千兆网口",
      "84 × 55mm，支持 WIN7 / WIN10 / Linux"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU", "i7-6500U / i5-6300U / i3-6100U"],
          ["主频 / 超频", "2.5–3.1GHz / 2.4–3.0GHz / 2.3GHz"],
          ["核心数", "2 核 4 线程"],
          ["三级缓存", "4MB / 3MB / 3MB"],
          ["CPU TDP", "15W"]
        ]
      },
      {
        group: "内存与存储",
        icon: "chip",
        rows: [
          ["内存", "板载 LPDDR4，最高 32GB，4000MT/s"],
          ["存储", "板载 eMMC，最高 64GB"]
        ]
      },
      {
        group: "显示",
        icon: "monitor",
        rows: [
          ["LVDS", "1920 × 1080 @60Hz（eDP 可选）"],
          ["DDI", "3 路 DDI，支持 HDMI / DP，3840 × 2400"]
        ]
      },
      {
        group: "扩展与 I/O",
        icon: "expand",
        rows: [
          ["USB", "2 × USB 3.0，8 × USB 2.0"],
          ["SATA", "2 × SATA Gen3（6Gb/s）"],
          ["PCIe", "PCIe Gen3 x8；PCIe 0–3 / 4–7"],
          ["GPIO", "8-bit"],
          ["UART", "2 ports"]
        ]
      },
      {
        group: "网络与音频",
        icon: "network",
        rows: [
          ["LAN", "1 × 1000M / 100M / 10M 网口（I219LM）"],
          ["Audio", "High-Definition Audio Interface"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["电源", "AT/ATX，VIN 4.75–20V，5VSB（仅 ATX）"],
          ["工作温度", "0 ~ 60℃（扩展 -40 ~ 85℃）"],
          ["存储温度", "-40 ~ 85℃"],
          ["操作系统", "WIN7 / WIN10 / WIN11"],
          ["BIOS", "AMI UEFI 256Mbit"],
          ["尺寸", "84 × 55 mm"]
        ]
      }
    ]
  },
  {
    id: "b201",
    name: "ATSU-B201",
    cat: "sbc",
    tagline: "3.5 英寸边缘控制单板（X7425E / N97 / X7211E）",
    desc: "集成 UPS、双/五网口与 6 路串口的 3.5 英寸单板，面向边缘控制、收银与自助终端。",
    image: "assets/img/product-b201.webp",
    badges: ["3.5\" SBC", "146 × 102 mm", "UPS"],
    form: "3.5 英寸嵌入式单板",
    size: "146 × 102 mm",
    cpuShort: "X7425E / N97 / X7211E",
    memShort: "DDR5 / 16GB",
    tempShort: "-20 ~ 60℃",
    featured: true,
    highlights: [
      "Intel X7425E / N97 / X7211E，TDP 6–12W",
      "1 × SO-DIMM DDR5 / DDR4，最高 16GB",
      "2 或 5 × Intel I210 千兆网口，6 × RS232/RS485",
      "HDMI + DP + VGA + LVDS 四选三显示",
      "内置 UPS（10 秒备电），9–36V 宽压输入",
      "146 × 102mm，-20~60℃ 工作温度"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU", "Intel X7425E / N97 / X7211E"],
          ["内核数", "4C/4T / 4C/4T / 2C/2T"],
          ["频率", "1.5–3.4GHz / 2.0–3.6GHz / 1.0–3.2GHz"],
          ["TDP", "12W / 12W / 6W"],
          ["Graphic", "Intel UHD Graphics for 12th Gen"]
        ]
      },
      {
        group: "内存",
        icon: "chip",
        rows: [
          ["速率", "DDR5 4800MHz / DDR4 3200MHz"],
          ["插槽", "1 × SO-DIMM"],
          ["最大容量", "16GB"]
        ]
      },
      {
        group: "显示",
        icon: "monitor",
        rows: [
          ["HDMI", "2.0，最高 4K @60Hz"],
          ["DP", "1.4a，最高 4K @60Hz"],
          ["VGA", "2048 × 1536 @75Hz"],
          ["LVDS", "24-bit 双通道，1920 × 1080 @120Hz（eDP 可选）"],
          ["三显", "HDMI + DP + VGA + LVDS 四选三"]
        ]
      },
      {
        group: "网络与存储",
        icon: "network",
        rows: [
          ["LAN", "2 / 5 × RJ45 Intel I210-AT GbE，支持网络唤醒"],
          ["M.2", "1 × M.2 2242 SATA（PCIe 3.0 x1/x4 可选）"],
          ["SATA", "1 × SATA 7pin"]
        ]
      },
      {
        group: "I/O 与扩展",
        icon: "expand",
        rows: [
          ["USB", "2 × USB 3.2 Type-A + 2 × USB 2.0 Type-A + 2 × USB 2.0（pin header）"],
          ["串口", "6 × RS232 或 3 × RS232 + 3 × RS485（可选隔离）"],
          ["GPIO", "8-bit 可编程 DIO"],
          ["M.2 2230", "Wi-Fi（默认 USB2.0，预留 PCIe x1）"],
          ["M.2 3052", "5G（默认 USB2.0，预留 PCIe x1）"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["输入电压", "9–36V"],
          ["电源适配", "60W 选配"],
          ["UPS", "10 秒（DCIN 12–36V，选配）"],
          ["功耗", "12W 典型 / 26.5W 最大"],
          ["工作温度", "-20 ~ 60℃"],
          ["存储温度", "-40 ~ 85℃"],
          ["尺寸", "146 × 102 mm"]
        ]
      }
    ]
  },
  {
    id: "b202",
    name: "ATSU-B202",
    cat: "sbc",
    tagline: "3.5 英寸边缘控制单板（Intel N97）",
    desc: "N97 平台的 3.5 英寸单板，标配 5 网口与 6 串口，适合网关、零售与工业边缘节点。",
    image: "assets/img/product-b202.webp",
    badges: ["3.5\" SBC", "N97", "5 × LAN"],
    form: "3.5 英寸嵌入式单板",
    size: "146 × 102 mm",
    cpuShort: "Intel N97",
    memShort: "DDR4 / 16GB",
    tempShort: "-20 ~ 60℃",
    highlights: [
      "Intel N97，4 核 4 线程，TDP 12W",
      "1 × SO-DIMM DDR4 3200MHz，最高 16GB",
      "5 × Intel I210 千兆网口，6 × RS232/RS485",
      "HDMI + DP + VGA + LVDS 四选三显示",
      "M.2 2242 存储 + SATA，支持 5G / Wi-Fi 扩展",
      "9–36V 宽压输入，内置 UPS 选配"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU", "Intel N97"],
          ["内核数", "4C / 4T"],
          ["频率", "2.0–3.6GHz"],
          ["TDP", "12W"],
          ["Graphic", "Intel UHD Graphics for 12th Gen"]
        ]
      },
      {
        group: "内存与显示",
        icon: "chip",
        rows: [
          ["内存", "1 × SO-DIMM DDR4 3200MHz，最高 16GB"],
          ["HDMI / DP", "最高 4K @60Hz"],
          ["VGA", "2048 × 1536 @75Hz"],
          ["LVDS", "24-bit 双通道，1920 × 1080 @120Hz（eDP 可选）"]
        ]
      },
      {
        group: "网络与存储",
        icon: "network",
        rows: [
          ["LAN", "5 × RJ45 Intel I210-AT GbE，支持网络唤醒"],
          ["M.2", "1 × M.2 2242 SATA（PCIe 3.0 x1/x4 可选）"],
          ["SATA", "1 × SATA 7pin"]
        ]
      },
      {
        group: "I/O 与扩展",
        icon: "expand",
        rows: [
          ["USB", "2 × USB 3.2 Type-A + 2 × USB 2.0 Type-A + 2 × USB 2.0（pin header）"],
          ["串口", "6 × RS232 或 3 × RS232 + 3 × RS485（可选隔离）"],
          ["GPIO", "8-bit 可编程 DIO"],
          ["M.2 2230 / 3052", "Wi-Fi / 5G 扩展"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["输入电压", "9–36V"],
          ["功耗", "12W 典型 / 26.5W 最大"],
          ["工作温度", "-20 ~ 60℃"],
          ["存储温度", "-40 ~ 85℃"],
          ["尺寸", "146 × 102 mm"]
        ]
      }
    ]
  },
  {
    id: "b501",
    name: "ATSU-B501",
    cat: "board",
    tagline: "Micro ATX 国产化工业主板",
    desc: "海光 34XX 平台 Micro ATX 主板，4 通道 DDR5 与 4 网口配置，面向网安、边缘服务器与工业视觉。",
    image: "assets/img/product-b501.webp",
    badges: ["Micro ATX", "240 × 240 mm", "国产化"],
    form: "Micro ATX 工业主板",
    size: "240 × 240 mm",
    cpuShort: "海光 3450E / 3490",
    memShort: "4 × DDR5 / 128GB",
    tempShort: "0 ~ 60℃",
    isNew: true,
    highlights: [
      "海光 34XX 系列，3450E 8 核 / 3490 16 核",
      "4 × DDR5 U-DIMM，最高 128GB，支持 ECC",
      "4 × Intel I350 千兆网口，M.2 2280 NVMe",
      "1 × PCIe Gen4 x16、2 × PCIe 4.0 x4",
      "4 × SATA 3.0，支持 RAID 0/1/5",
      "240 × 240mm，ATX 3.1 或 12–28V DCIN 供电"
    ],
    specs: [
      {
        group: "处理器系统",
        icon: "cpu",
        rows: [
          ["CPU", "海光 3450E / 3490"],
          ["内核数", "8 / 16"],
          ["频率", "3.6GHz / 2.8GHz"],
          ["TDP", "75W / 135W"],
          ["Graphic", "SM768，HDMI + VGA 双显"]
        ]
      },
      {
        group: "内存",
        icon: "chip",
        rows: [
          ["类型", "ECC / Non-ECC"],
          ["速率", "DDR5 5600MT/s"],
          ["插槽", "4 × DDR5 U-DIMM"],
          ["最大容量", "4 × 32GB，最高 128GB"]
        ]
      },
      {
        group: "显示",
        icon: "monitor",
        rows: [
          ["HDMI", "4K @30Hz"],
          ["VGA", "4K @30Hz"],
          ["双显", "HDMI + VGA"]
        ]
      },
      {
        group: "网络与存储",
        icon: "network",
        rows: [
          ["LAN", "4 × RJ45 Intel I350AM4，10/100/1000Mbps"],
          ["M.2", "1 × M.2 2280 NVMe（PCIe x1）"],
          ["SATA", "4 × SATA 3.0，支持 RAID 0/1/5"]
        ]
      },
      {
        group: "I/O 与扩展",
        icon: "expand",
        rows: [
          ["USB", "4 × USB 3.0 + 1 × Audio"],
          ["串口", "2 × RS232/RS422/RS485，DB9"],
          ["PCIe", "1 × PCIe Gen4 x16，2 × PCIe 4.0 x4"],
          ["Mini PCIe / M.2", "1 × Mini PCIe；M.2 2230 Wi-Fi"],
          ["GPIO", "8-bit 可编程 DIO"]
        ]
      },
      {
        group: "电源与环境",
        icon: "power",
        rows: [
          ["输入电压", "ATX 3.1 或 12–28V DCIN（支持冗余电源）"],
          ["上电模式", "ATX / AT"],
          ["工作温度", "0 ~ 60℃"],
          ["存储温度", "-40 ~ 85℃"],
          ["操作系统", "WIN10 64bit / Ubuntu / 麒麟 / UOS"],
          ["尺寸", "240 × 240 mm"]
        ]
      }
    ]
  },
  {
    id: "ipc450",
    name: "ATSU-IPC-450",
    cat: "system",
    tagline: "4U 标准上架式工控机箱",
    desc: "标准 4U 19 英寸机箱，8 个前置 3.5 英寸硬盘位与 7 个全高扩展槽，适配 12\"×9.6\" 及以下主板。",
    image: "assets/img/product-ipc450.webp",
    badges: ["4U", "450 × 430 × 177 mm", "7 槽"],
    form: "4U 上架式工控机箱",
    size: "450 × 430 × 177 mm",
    cpuShort: "支持标准 ATX 主板",
    memShort: "8 × 3.5\" 硬盘位",
    tempShort: "—",
    highlights: [
      "4U 19 英寸标准上架，深 450 × 宽 430 × 高 177mm",
      "8 个前置 3.5\" 硬盘位，兼容 2 个 2.5\" SSD",
      "7 个全高 PCI/PCIe 扩展槽，竖插",
      "前置 1 × 12025 风扇 + 后置 2 × 8025 风扇",
      "1.2mm SGCC 马钢，净重 11.4kg",
      "适用云存储、云计算、大数据与安防监控"
    ],
    specs: [
      {
        group: "结构与材质",
        icon: "box",
        rows: [
          ["尺寸", "450 × 430 × 177mm"],
          ["材质", "1.2mm SGCC 环保耐指纹马钢"],
          ["表面处理", "内部不喷，外部喷粉"],
          ["重量", "净重 11.4kg / 毛重 13.8kg"]
        ]
      },
      {
        group: "存储与扩展",
        icon: "expand",
        rows: [
          ["硬盘位", "8 × 前置 3.5\"（兼容 2 × 2.5\" SSD）"],
          ["光驱位", "2 × 前置 5.25\""],
          ["软驱位", "1 × 3.5\"（兼容 3.5\" 硬盘）"],
          ["扩展槽", "7 × 全高 PCI/PCIe，竖插"],
          ["适用主板", "标准 12\" × 9.6\" 及以下"]
        ]
      },
      {
        group: "散热与电源",
        icon: "power",
        rows: [
          ["风扇", "前置 12025S × 1 + 后置 8025S × 2"],
          ["电源", "4U 标准 ATX 电源"],
          ["外置接口", "2 × USB 2.0（可选 2 × USB 3.0）"],
          ["系统控制", "POWER LED / HDD LED / KB-LK / RESET / POWER"]
        ]
      },
      {
        group: "包装与领域",
        icon: "box",
        rows: [
          ["包装尺寸", "595 × 535 × 290mm"],
          ["适用领域", "云存储、云计算、大数据、安防监控"],
          ["安装方式", "19 英寸机架上架"]
        ]
      }
    ]
  },
  {
    id: "ipc718",
    name: "ATSU-IPC-718",
    cat: "system",
    tagline: "七槽加固式壁挂机箱",
    desc: "330 × 330 × 180mm 紧凑壁挂机箱，支持卧式/立式安装，7 槽扩展与 8 个 DB9 后窗位。",
    image: "assets/img/product-ipc718.webp",
    badges: ["壁挂式", "330 × 330 × 180 mm", "7 槽"],
    form: "七槽加固式壁挂机箱",
    size: "330 × 330 × 180 mm",
    cpuShort: "支持标准 ATX 主板",
    memShort: "3.5\" + 2.5\" 硬盘位",
    tempShort: "—",
    highlights: [
      "七槽加固式结构，支持卧式 / 立式安装",
      "7 个全高 PCI/PCIe 扩展槽，竖插",
      "后板 8 × DB9 + 1 × DB37 安装孔",
      "前置 2 × 9cm 风扇位，标配 9225B 风扇",
      "1.0mm SGCC 马钢，外表面喷涂",
      "适用工业控制、智能交通、机械自动化"
    ],
    specs: [
      {
        group: "结构与材质",
        icon: "box",
        rows: [
          ["尺寸", "330 × 330 × 180mm"],
          ["材质", "1.0mm SGCC 马钢"],
          ["表面处理", "外表面喷涂，内部配件不喷"],
          ["安装方式", "卧式 / 立式"]
        ]
      },
      {
        group: "存储与扩展",
        icon: "expand",
        rows: [
          ["硬盘位", "侧边 1 × 3.5\"（兼容 2.5\"），硬盘架 1 × 3.5\" + 2 × 2.5\""],
          ["扩展槽", "7 × 全高 PCI/PCIe，竖插"],
          ["适用主板", "标准 12\" × 9.6\" 及以下"],
          ["电源", "4U 标准 ATX 电源"]
        ]
      },
      {
        group: "散热与接口",
        icon: "power",
        rows: [
          ["风扇", "前置 2 × 9cm 风扇位，配 1 × 9225B"],
          ["外置接口", "前置 2 × USB 2.0（可选 2 × USB 3.0）"],
          ["后板扩展孔", "8 × DB9、1 × DB37、1 × 4PIN 凤凰端子"],
          ["系统控制", "POWER LED / HDD LED / RESET / POWER"]
        ]
      },
      {
        group: "包装与领域",
        icon: "box",
        rows: [
          ["包装尺寸", "435 × 435 × 290mm"],
          ["适用领域", "工业控制、智能交通、机械自动化、AI"]
        ]
      }
    ]
  }
];

/* 在售的其他机型（来自原厂产品线） */
const LEGACY = [
  { name: "HY-2303", cat: "工业主板", note: "飞腾腾锐 E2000-Q" },
  { name: "HY-2117", cat: "工业主板", note: "飞腾 FT-2000/4" },
  { name: "HY-2022", cat: "工业主板", note: "Intel Atom C3000" },
  { name: "HY-1704", cat: "工业主板", note: "Intel 6/7 代 Core" },
  { name: "HY-IQ67-XA01", cat: "工业主板", note: "ATX 工业主板" },
  { name: "HY-PELK-LW01", cat: "无风扇工控机", note: "Elkhart Lake BOX" },
  { name: "HY-RTLU-LW01", cat: "无风扇工控机", note: "紧凑型 BOX PC" },
  { name: "HY-W21R-LD01", cat: "平板电脑", note: "21.5\" 工业平板" },
  { name: "HY-4LAN-350A", cat: "网安设备", note: "4 网口网安平台" }
];

const HOME = {
  phone: "189 3063 3465",
  phoneRaw: "18930633465",
  tel: "0512-57567108",
  email: "blue.wang@hip-hytech.com",
  address: "江苏省昆山市吴淞江南路 888 号 8 楼",
  addressShort: "昆山 · 吴淞江南路 888 号"
};
