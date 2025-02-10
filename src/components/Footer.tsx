export default function Footer() {
  return (
    <footer className="container mx-auto px-5 pb-5 pt-[100px] md:py-[100px]">
      <div className="flex flex-col gap-[40px]">
        <h2 className="font-medium text-[18px] md:text-[24px] xl:text-[32px] tracking-[5%] leading-[180%]">
          業務実績のある国・地域
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[20px] xl:gap-[100px]">
          <div className="">
            <h3 className="font-bold text-[16px] md:text-[15px] xl:text-[20px] tracking-[0%] leading-[180%]">
              東南アジア
            </h3>
            <ul className="list-disc list-inside font-regular text-[14px] md:text-[12px] xl:text-[16px] tracking-[0%] leading-[180%]">
              <li>ベトナム（全域）</li>
              <li>フィリピン（マニラ、セブ）</li>
              <li>マレーシア（KL、ペナン）</li>
              <li>インドネシア（ジャカルタ、バリ）</li>
              <li>カンボジア（プノンペン）</li>
              <li>シンガポール、タイ</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold text-[16px] md:text-[15px] xl:text-[20px] tracking-[0%] leading-[180%]">
              東アジア・西アジア
            </h3>
            <ul className="list-disc list-inside font-regular text-[14px] md:text-[12px] xl:text-[16px] tracking-[0%] leading-[180%]">
              <li>中国（北京、上海）</li>
              <li>香港</li>
              <li>韓国</li>
              <li>インド（ムンバイ）</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold text-[16px] md:text-[15px] xl:text-[20px] tracking-[0%] leading-[180%]">
              ヨーロッパ
            </h3>
            <ul className="list-disc list-inside font-regular text-[14px] md:text-[12px] xl:text-[16px] tracking-[0%] leading-[180%]">
              <li>フランス</li>
              <li>イギリス</li>
              <li>ドイツ（ベルリン、デュッセルドルフ）</li>
              <li>ベルギー</li>
              <li>スペイン</li>
              <li>イタリア（ミラノ、リミニ）</li>
              <li>スイス</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold text-[16px] md:text-[15px] xl:text-[20px] tracking-[0%] leading-[180%]">
              アメリカ
            </h3>
            <ul className="list-disc list-inside font-regular text-[14px] md:text-[12px] xl:text-[16px] tracking-[0%] leading-[180%]">
              <li>アメリカ（NY、LA）</li>
            </ul>
            <h3 className="font-bold text-[16px] md:text-[15px] xl:text-[20px] tracking-[0%] leading-[180%] mt-6">
              オセアニア
            </h3>
            <ul className="list-disc list-inside font-regular text-[14px] md:text-[12px] xl:text-[16px] tracking-[0%] leading-[180%]">
              <li>オーストラリア（パース）</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold text-[16px] md:text-[15px] xl:text-[20px] tracking-[0%] leading-[180%]">
              中東
            </h3>
            <ul className="list-disc list-inside font-regular text-[14px] md:text-[12px] xl:text-[16px] tracking-[0%] leading-[180%]">
              <li>ドバイ</li>
            </ul>
            <h3 className="font-bold text-[16px] md:text-[15px] xl:text-[20px] tracking-[0%] leading-[180%] mt-6">
              その他
            </h3>
            <ul className="list-disc list-inside font-regular text-[14px] md:text-[12px] xl:text-[16px] tracking-[0%] leading-[180%]">
              <li>ロシア</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
