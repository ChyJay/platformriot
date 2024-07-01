import React from "react";
import styles from "./Body.module.css";
import homeimage1 from "./images/homeimage1.jpg";
import homeimage2 from "./images/homepage2.jpg";
import homeimage3 from "./images/homeimage3.jpg";

export const Body = () => {
  const images = [
    { img: homeimage1 },
    { img: homeimage2 },
    { img: homeimage3 },
  ];
  return (
    <div>
      <section>
        <h1 className={styles.demo}>Demonstrating the value of Bitcoin</h1>
        <p>
          Bitcoin creates new value opportunities through the convergence of
          money and energy, radically transforming energy grids and driving new
          power generation capacity.
        </p>
        
        <button>ESS Metron</button>
        <h2>Leading the way</h2>
        <p>
          Riot Platforms owns and operates North America’s largest Bitcoin
          mining facility as measured by developed capacity.
        </p>
        <div className="bg-red-500">
        {images.map((items) => (
          <div>
            <img className={styles.photo} src={items.img} />
            <button>Bitcoin Mining</button>
          </div>
        ))}
        <button>Learn More</button>
        </div>

      </section>
    </div>
  );
};
