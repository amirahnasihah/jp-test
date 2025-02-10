"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { getClientCookie, setClientCookie } from "@/lib/clientCookies";
import { COOKIE_CONSENT_NAME } from "@/lib/cookieConfig";
import { RiCloseLargeLine } from "react-icons/ri";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getClientCookie(COOKIE_CONSENT_NAME);
    setIsVisible(consent === undefined);
  }, []);

  const handleAccept = () => {
    setClientCookie(COOKIE_CONSENT_NAME, "true");
    setIsVisible(false);
  };

  // const handleDecline = () => {
  //   setClientCookie("cookie-consent", "false");
  //   setIsVisible(false);
  // };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%-40px)] grid sm:grid-cols-[1fr_auto] gap-[10px] md:gap-[40px] px-[20px] pt-[80px] pb-[30px] md:p-[40px] bg-black/80 backdrop-blur-[8px] items-center text-white rounded-t-[20px] z-50"
    >
      <Button
        variant="ghost"
        onClick={() => setIsVisible(false)}
        // onClick={handleDecline}
        className="text-gray-400 hover:text-white absolute top-4 right-4 p-2"
      >
        <RiCloseLargeLine className="h-[32px] w-[32px]" />
      </Button>
      <div className="flex-1 space-y-[20px]">
        <p className="font-semibold text-[12px] md:text-[13.5px] xl:text-[18px] tracking-[0%] leading-[120%]">
          This website uses cookies to enhance user experience. You can modify
          your browser settings to change how cookies function. For more
          details, please refer to our Cookie Policy. By continuing to browse
          the site, you agree to our use of cookies. If you consent to the use
          of cookies, please click the &ldquo;Agree&rdquo; button.
        </p>
        <p className="font-regular text-[10px] md:text-[10.5px] xl:text-[14px] tracking-[5%] leading-[150%]">
          このウェブサイトでは、サイトの利便性向上を目的に、クッキーを使用しています。ブラウザの設定によりクッキーの機能を変更することもできます。詳細はクッキーポリシーをご覧ください。サイトを閲覧いただくには、クッキーの使用に同意いただく必要があります。Cookieの利用に同意頂ける場合は、「同意する」ボタンを押してください。
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <Button
          variant="ghost"
          onClick={handleAccept}
          className="text-white hover:text-gray-200 flex md:flex-col font-semibold text-[30px] md:text-[42px] xl:text-[56px] tracking-[-2%] leading-[100%]l p-0 w-[245px]"
        >
          Agree
          <span className="block font-bold text-[14px] md:text-[24px] xl:text-[16px] tracking-[-2%] leading-[100%]">
            同意する
          </span>
        </Button>
      </div>
    </div>
  );
}
