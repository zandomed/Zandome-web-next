import ZandomeLogo from '../public/zandome.svg';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mb-6 max-w-[200px]">
        <ZandomeLogo id="zandome-logo" width="100%" height="100%" />
      </div>
      <div className="mb-8">
        <span className="pointer-events-none animate-fadeLoadingText select-none text-[25px] font-bold">
          Coming Soon
          <span className="mx-[2px] animate-blinkDotLoadingText text-[30px] ">
            .
          </span>
          <span
            className="mx-[2px] animate-blinkDotLoadingText text-[30px]"
            style={{ animationDelay: '0.2s' }}
          >
            .
          </span>
          <span
            className="mx-[2px] animate-blinkDotLoadingText text-[30px]"
            style={{ animationDelay: '0.4s' }}
          >
            .
          </span>
        </span>
      </div>
    </div>
  );
}
