import Link from "next/link";
import { Logo } from "./navbar";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <Logo />
          <p className="text-center">
            作者：{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/QIUZHILEI"
            >
              马全一 & 邱志磊
            </Link>
            &nbsp;
            我们的组织和代码存放于 {" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/lego-os"
            >
              GitHub
            </Link>
            &nbsp;
            QQ: 2925212608
            &nbsp;
            邮箱: 18304935041@163.com
          </p>
        </div>
      </div>
    </footer>
  );
}

// export function FooterButtons() {
//   return (
//     <>
//       <Link
//         href="https://vercel.com/templates/next.js/documentation-template"
//         className={buttonVariants({ variant: "outline", size: "sm" })}
//       >
//         <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
//         Deploy
//       </Link>
//       <Link
//         href="https://github.com/sponsors/nisabmohd"
//         className={buttonVariants({ variant: "outline", size: "sm" })}
//       >
//         <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
//         Sponsor
//       </Link>
//     </>
//   );
// }
