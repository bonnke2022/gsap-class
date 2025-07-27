"use client";
import { cocktailLists, CocktailsProps, mockTailLists } from "@/utils/links";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <Image
        src="/images/cocktail-left-leaf.png"
        alt="l-leaf"
        id="c-left-leaf"
        width={100}
        height={100}
      />
      <Image
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
        width={100}
        height={100}
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails</h2>
          <ul>
            {cocktailLists.map((cocktail: CocktailsProps) => {
              return (
                <li key={cocktail.name}>
                  <div className="md:me-28">
                    <h3>{cocktail.name}</h3>
                    <p>
                      {cocktail.country} | {cocktail.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails</h2>
          <ul>
            {mockTailLists.map((cocktail: CocktailsProps) => {
              return (
                <li key={cocktail.name}>
                  <div className="md:me-28">
                    <h3>{cocktail.name}</h3>
                    <p>
                      {cocktail.country} | {cocktail.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
