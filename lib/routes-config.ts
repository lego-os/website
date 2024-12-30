// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "概述",
    href: "/overview",
  },
  {
    title: "Rust语言 & 组件化开发",
    href: "/introduction",
    noLink: true,
    items: [
      { title: "选择Rust语言", href: "/rust" },
      { title: "指令集架构 RISC-V", href: "/riscv" },
      { title: "为什么组件化", href: "/why_mod" },
      { title: "如何组件化", href: "/mod_div" },
      { title: "开发组件", href: "/mod_dev" },
      { title: "构建操作系统", href: "/build" },
      { title: "资料推荐", href: "/mermaid" },
    ],
  },
  {
    title: "核心组件 & OS杂谈",
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
    title: "OS 启动！",
    href: "/start",
    noLink: true,
    items: [
      { title: "操作系统的启动", href: "/boot" },
      { title: "VisionFive 2开发板", href: "/vf2" },
      { title: "Qemu 模拟器", href: "/qemu" },
      { title: "伙伴系统", href: "/buddy" },
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
