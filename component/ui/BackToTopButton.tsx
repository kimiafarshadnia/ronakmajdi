"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="animate-bounce fixed bottom-6 right-6 z-50 p-2 w-10 h-10 cursor-pointer rounded-full bg-[#E5E1DA] text-black shadow-md hover:bg-[#E5E1DA]/40 transition"
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </>
  );
};
