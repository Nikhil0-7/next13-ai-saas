"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c9f9c20e-3f97-401f-ad09-560f2b4296e1");
  }, []);

  return null;
};
