import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "luod" },
    { name: "description", content: "이도울의 개인 홈페이지예요." },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "pcor.me" },
    { name: "twitter:title", content: "doul" },
    { name: "twitter:description", content: "이도울의 개인 홈페이지예요." },
  ];
};

export default function Index() {
  return (
    <>
    <header className="top-0 fixed w-full z-10">
      <div className="bg-white/70 dark:bg-black/80 backdrop-blur-sm shadow py-4">
        <nav className="max-w-screen-xl mx-auto flex items-center justify-center px-4 lg:px-8 lg:py-0" aria-label="Global">
          <div className="flex">
            <a href="/">
              <img className="dark:hidden h-8" src="/LightMode.svg" alt="pcor.me"/>
              <img className="hidden dark:block h-8" src="/DarkMode.svg" alt="pcor.me"/>
            </a>
          </div>
        </nav>
      </div>
    </header>

    <div className="bg-black py-36 pt-48 text-center">
      <h1 className="flex items-center text-white justify-center flex-col">
        <img src="/mottoMask.svg" alt="everything is Plus." className="h-8 md:h-12 lg:h-24"/>
        <img src="/since2021.svg" alt="Since 2021" className="h-4 md:h-8 mt-8"/>
      </h1>
    </div>
    <div className="mx-auto max-w-screen-lg px-4 lg:px-8 py-8">
      <h2 className="mt-16 text-4xl font-bold">
        <span className="border-b-8 border-blue-500">
          리뉴얼 중입니다.
        </span>
      </h2> 
    </div>
    <footer className="w-full text-center py-4 bg-black text-white">
      &copy; 2024 doul<br/>
      <strong>이 페이지는 오픈소스입니다.</strong><br/>
      라이선스가 허가하는 선 안에서 포크하고 수정해도 됩니다.
    </footer>
    </>
  );
}
