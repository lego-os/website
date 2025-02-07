import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <Link
        href="https://github.com/lego-os"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        跟随我们的脚步{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        lego-os 见证组件化的力量
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        lego-os 探索使用 Rust 语言编写操作系统，并采用组件化的开发方式
        <br/>
        借助 Rust 内存安全机制、更现代化、抽象度更高且统一的包管理系统进行编码
        <br/>
        分解OS核心功能、设计核心组件、基于组件构建OS
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          阅读文档
        </Link>
        <Link
          href="#"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
