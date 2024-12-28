// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "lego-os Rust语言&组件化开发",
    href: "/introduction",
    noLink: true,
    items: [
      { title: "简述", href: "/description" },
      { title: "指令集架构 RISC-V", href: "/riscv" },
      { title: "现代化的系统级编程语言 Rust", href: "/rust" },
      { title: "操作系统功能分解", href: "/div_os" },
    ],
  },
  {
    title: "VisionFive 2平台快速体验",
    href: "/vf2",
    noLink: true,
    items: [
      { title: "开始", href: "/start" },
    ],

  },
  {
    title: "操作系统杂谈&核心组件",
    href: "/cores",
    noLink: true,
    items: [
      { title: "简述", href: "/description" },
      { title: "架构相关", href: "/lego_arch" },
      { title: "设备驱动", href: "/lego_device" },
      { title: "内存管理", href: "/lego_mem" },
      { title: "文件管理", href: "/lego_fs" },
      { title: "进程管理", href: "/lego_process" },
      { title: "定时器计时器", href: "/lego_timer" },
      { title: "网络协议栈", href: "/lego_net" },
      { title: "IO模型", href: "/lego_io" },
      { title: "虚拟化", href: "/lego_virt" },
    ],
  },
  {
    title: "组件案例",
    href: "/code",
    noLink: true,
    items: [
      { title: "替代VisionFive 2固件 vf2_firmware", href: "/vf2_firmware" },
      { title: "页式物理内存分配器 基于位图和队列的伙伴系统", href: "/buddy_allocator" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
