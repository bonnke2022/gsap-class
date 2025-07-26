"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  gsap.registerEffect({
    name: "explode",
    effect: (targets, config) => {
      return gsap.to(targets, {
        y: config.direction === "up" ? "-=100" : "+=100",
        opacity: 0,
        scale: 2,
        duration: config.duration,
        ease: "power1.out",
      });
    },
    defaults: { direction: "up", duration: 1 },
    extendTimeline: true,
  });

  gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
      return gsap.to(targets, { duration: config.duration, opacity: 0 });
    },
    defaults: { duration: 2 },
    extendTimeline: true,
  });

  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.effects.explode("#white-box", {
      direction: "up",
      duration: 2,
    });
    gsap.effects.fade("#red-box");
    gsap.effects.explode(".para", { direction: "up", duration: 3 });
  }, []);

  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="para mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
        <div id="white-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
