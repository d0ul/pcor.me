import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "luod" },
    { name: "description", content: "이도울 / 루오드의 개인 홈페이지예요." },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:site", content: "@_d0ul" },
    { name: "twitter:title", content: "luod" },
    { name: "twitter:description", content: "이도울 / 루오드의 개인 홈페이지예요." },
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
          introduction
        </span>
      </h2>
      <p className="mt-8 text-lg">
        안녕하세요! 이도울 (aka. 루오드)입니다.<br/>
        2021년부터 지금까지, pcor.me 홈페이지에서 정말 많은 것들을 해 왔지만 앞으로는 여기를 제 개인 홈페이지와, 각종 프로젝트의 실험실로 사용할 예정이에요. 
        한동안 pcor.me를 접속해도 아무것도 없었기 때문에 <strong>진짜 급하게</strong> 만든 것이 이 홈페이지랍니다.<br/>
        앞으로 여러 페이지들이 추가될지도 몰라요!
      </p>
      
      <h2 className="mt-16 text-4xl font-bold">
        <span className="border-b-8 border-blue-500">
          what's my favorite?
        </span>
      </h2>
      <p className="mt-8 text-lg">
        이것저것에 관심 있어요. 몇개만 꼽아 볼까요?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-900 text-white p-6 rounded-xl">
          <img src="/Development.svg" className="h-8" alt="개발"/>
          <p className="mt-4">
            웹 개발에 관심이 많답니다.<br/>
            Python, PHP, Svelte, React 등을 주로 활용해요.<br/><br/>
            <i><strong>앗차차!</strong></i> 취미로 개발합니다.<br/>
            돈을 벌 생각도 없고, 누구랑 같이 프로젝트를 만들 생각도 없어요.
            그래서 남들 다 있는 수상 경력마저 없네요 😅
          </p>
        </div>
        <div className="bg-purple-900 text-white p-6 rounded-xl">
          <img src="/Design.svg" className="h-8" alt="디자인"/>
          <p className="mt-4">
            <strong>"와, 예쁘다!"</strong>라는 말이 나오는 디자인을 추구해요.<br/>
            주로 Figma를 사용해요.<br/><br/>
            요즘 다양한 홍보 이미지를 만들어보면서 실력을 키워 보는 중이에요.
            비단 그런 디자인 뿐 아닌, 앱 UI 구성도 즐겨 해요.
          </p>
        </div>
        <div className="bg-green-900 text-white p-6 rounded-xl">
          <img src="/Railroad.svg" className="h-8" alt="디자인"/>
          <p className="mt-4">
            철도 그 자체에 관심을 가지고 있어요.<br/>
            기차를 통한 여행, 철도와 개발을 접목하는 일 등에 관심이 있답니다.
          </p>
        </div>
        <div className="bg-gray-200 text-gray-700 text-2xl p-6 rounded-xl">
          Coming soon...
        </div>
      </div>

      <h2 className="mt-16 text-4xl font-bold">
        <span className="border-b-8 border-blue-500">
          portfolio
        </span>
      </h2>
      <p className="mt-8 text-lg">
        차근차근 채워가고 싶고, 채우고 있는 공간이에요.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-900 text-white p-6 rounded-xl">
          <img src="/kio_dark.png" className="h-12" alt="끄투리오"/>
          <p className="mt-4">
            (2024년 합류)<br/><br/>
            현재 끄투리오에서 개발/기획 팀으로 일하고 있어요.<br/>
            2017년부터 시작되어 역사가 깊은 끄투리오에서 그간 경험하지 못했던 큰 변화를 만들고 싶어요.<br/>
            사용 기술: Express, Node.js, React
            <br/><br/>
            <a href="https://kkutu.io" target="_blank">
              <span className="border-b-2 border-white text-white font-bold">
                방문하기 ↗
              </span>
            </a>
          </p>
        </div>
        <div className="bg-pink-900 text-white p-6 rounded-xl">
          <img src="/화이트_국문.svg" className="h-12" alt="레일링크"/>
          <p className="mt-4">
            Coming Soon<br/>
            철도 동호인을 위한 중고거래/소식 플랫폼이에요. 기존에 파편화되어 있던 각종 플랫폼을 하나로 묶어 가지고 있는 소장품 등을 쉽게 나눌 수 있도록 준비하고 있어요.<br/>
            사용 기술: FastAPI, Expo (React Native)
            <br/><br/>
            <a href="https://rail.ink" target="_blank">
              <span className="border-b-2 border-white text-white font-bold">
                방문하기 ↗
              </span>
            </a>
          </p>
        </div>
      </div>
      
      <h2 className="mt-16 text-4xl font-bold">
        <span className="border-b-8 border-blue-500">
          social links
        </span>
      </h2>
      <p className="mt-8 text-lg">
        <ul className="list-disc">
          <li>X (aka twitter) : @_lu0d</li>
          <li>Bluesky : @pcor.me</li>
          <li>GitHub : @_d0ul</li>
          <li>Discord : lu0d</li>
          <li>YouTube : @철도</li>
        </ul>
      </p>


      <h2 className="mt-16 text-4xl font-bold">
        <span className="border-b-8 border-blue-500">
          do not
        </span>
      </h2>
      <p className="mt-8 text-lg">
        <ul className="list-disc">
          <li>공통 프로젝트에서 자신의 이익만을 좇는 사람</li>
          <li>필연적인 변화에 고무적인 사람</li>
          <li>평소엔 관심 없다가 일이 터질 때만 관심을 가지는 사람</li>
        </ul>
      </p>
    </div>
    <footer className="w-full text-center py-4 bg-black text-white">
      &copy; 2024 luod<br/>
      <strong>이 페이지는 오픈소스입니다.</strong><br/>
      라이선스가 허가하는 선 안에서 포크하고 수정해도 됩니다.
    </footer>
    </>
  );
}
