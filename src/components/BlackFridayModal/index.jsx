import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function BlackFridayModal({
  delay = 8000,
  imgSrc = "/img/geme-bio-composter.jpg",
  href = "https://www.geme.bio/product/geme?utm_medium=blog&utm_source=geme_website&utm_campaign=black_friday&utm_content=black_friday_modal",
  onClose
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // 设置定时器，延迟显示
    const timer = setTimeout(() => {
      setIsMounted(true);
      // 使用 setTimeout 来触发 CSS 动画
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsMounted(false);
      if (onClose) {
        onClose();
      }
    }, 300);
  };

  // 点击背景关闭
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black bg-opacity-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={handleBackdropClick}
    >
      <div
        className={clsx(
          "relative bg-white rounded-lg shadow-2xl",
          "w-full h-full md:w-auto md:h-auto md:max-w-[1024px]",
          "flex flex-col md:flex-row",
          "transition-all duration-300",
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
          "overflow-hidden"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className={clsx(
            "absolute top-4 right-4 z-10",
            "w-8 h-8 md:w-10 md:h-10",
            "flex items-center justify-center",
            "bg-white rounded-full shadow-lg",
            "hover:bg-gray-100 transition-colors",
            "text-gray-600 hover:text-gray-900"
          )}
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 移动端布局：内容在上，按钮在中间，图片在下 */}
        {/* PC端布局：图片在左，内容在右，按钮在内容底部 */}
        <div className="flex flex-col md:flex-row h-full">
          {/* PC端：左侧图片，移动端：下方图片 */}
          <div className="order-3 md:order-1 w-full md:w-1/2 h-1/3 md:h-auto flex-shrink-0">
            <img
              src={imgSrc}
              alt="GEME Composter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* PC端：右侧内容区域，移动端：上方内容区域 */}
          <div className="order-1 md:order-2 flex-1 flex flex-col p-6 md:p-8 overflow-y-auto">
            {/* 标题和内容 */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left mb-4 md:mb-6 text-gray-900">
                Black Friday Discount: 20% off!
              </h2>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="text-base md:text-lg font-semibold text-gray-800">
                  <p className="mb-2">GEME Composter x 1</p>
                  <p className="mb-2">GEME Kobold x 1 + Quarterly Supply x 1</p>
                  <p>Shovel & Scraper x 1</p>
                </div>

                <div className="space-y-2 text-sm md:text-base text-gray-600">
                  <p>Warranty: 2 years</p>
                  <p>Shipping: Free</p>
                </div>
              </div>

              {/* 价格信息 */}
              <div className="mb-6 md:mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4">
                  <span className="text-lg md:text-xl text-gray-500 line-through">
                    Price: $1098
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600">
                    $899 Only!
                  </span>
                </div>
              </div>
            </div>

            {/* 按钮 - 移动端在中间（独立显示），PC端在内容底部 */}
            <div className="order-2 md:order-none mt-4 md:mt-0">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "block w-full",
                  "bg-black text-white",
                  "text-center py-4 md:py-3",
                  "text-base md:text-lg font-semibold",
                  "rounded-md",
                  "hover:bg-gray-800 transition-colors",
                  "uppercase tracking-wide"
                )}
              >
                GET YOUR GEME DISCOUNT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

