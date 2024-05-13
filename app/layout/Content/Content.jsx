"use client";

import ContentTop from "../../components/ContentTop/ContentTop";
import ContentMain from "../../components/ContentMain/ContentMain";

const Content = () => {
  return (
    <div className="bg-secondary flex-1 p-[32px] md:[20px] lg:[16px]">
      <ContentTop />
      <ContentMain />
    </div>
  );
};

export default Content;
