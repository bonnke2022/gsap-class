"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  const timeline = gsap.timeline();
  useGSAP(() => {
    // gsap.to("#blue-box", {
    //   x: 250,
    //   repeat: -1,
    //   yoyo: true,
    //   rotation: 360,
    //   duration: 2,
    //   ease: "elastic",
    // });

    // gsap.to(".box", {
    //   rotation: 27,
    //   x: 100,
    //   duration: 1,
    // });

    gsap.to("#box", { rotation: 27, x: 100, duration: 1 });

    timeline
      .to("#pink-box", { duration: 1, x: 300 })
      .to("#pink-box", { duration: 1, y: 300 })
      .to("#pink-box", { duration: 1, x: 0 })
      .to("#pink-box", { duration: 1, y: 0 });

    const tl = gsap.timeline();
    tl.to("#green", { duration: 1, x: 786 }, "blueSpin+=0.5")
      .to("#blue", { duration: 2, x: 786 }, "-=0.75")
      .to("#orange", { duration: 1, x: 786 }, "+=1")
      .addLabel("step2", 3)
      .seek("step2");
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>
      <div className="">
        <div className="flair flair--25"></div>
        <div className="nav light">
          <button
            id="play"
            onClick={() => {
              timeline.play();
            }}
          >
            play()
          </button>
          <button
            id="pause"
            onClick={() => {
              timeline.pause();
            }}
          >
            pause()
          </button>
          <button
            id="resume"
            onClick={() => {
              timeline.resume();
            }}
          >
            resume()
          </button>
          <button id="reverse" onClick={() => timeline.reverse()}>
            reverse()
          </button>
          <button id="restart" onClick={() => timeline.restart()}>
            restart()
          </button>
        </div>
      </div>
      <div id="pink-box" className="w-20 h-20 bg-blue-500 rounded-lg" />

      <div className="mt-20">
        <div id="green" className="box w-20 h-20 bg-blue-500 rounded-lg" />
        <div id="blue" className="box w-20 h-20 bg-blue-500 rounded-lg" />
        <div id="orange" className="box w-20 h-20 bg-blue-500 rounded-lg" />
      </div>

      <div id="box" className="w-20 h-20 bg-blue-500 rounded-lg" />

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
