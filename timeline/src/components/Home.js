import React from "react";
import "./Home.css";
import Scholar from "./Scholar";
function Home() {
  return (
    <div className="content">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/71/90/47/719047e8ee4eba082f4cef57e15d67e6.png"
          alt=""
        />

        <div className="home__row">
          <Scholar
            name="Abu Hanifa"
            image="https://upload.wikimedia.org/wikipedia/commons/6/65/Abu_Hanifa_Name.png"
          />
          <Scholar
            name="Imam Malik"
            image="https://upload.wikimedia.org/wikipedia/commons/0/04/Malik_Bin_Anas_Name.png"
          />
          <Scholar
            name="Al-Shafi'i"
            image="https://upload.wikimedia.org/wikipedia/commons/3/36/Al-Shafie_Name.png"
          />
          <Scholar
            name="Ahmed ibn Hanbal"
            image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Ahmad_bin_Hanbal_Name.png"
          />
          <Scholar
            name="Al-Ghazali"
            image="https://upload.wikimedia.org/wikipedia/commons/e/e9/%D8%A3%D8%A8%D9%88_%D8%AD%D8%A7%D9%85%D8%AF_%D8%A7%D9%84%D8%BA%D8%B2%D8%A7%D9%84%D9%8A.png"
          />
        </div>
        <div className="home__row">
          <Scholar
            name="Abu Hanifa"
            image="https://upload.wikimedia.org/wikipedia/commons/6/65/Abu_Hanifa_Name.png"
          />
          <Scholar
            name="Imam Malik"
            image="https://upload.wikimedia.org/wikipedia/commons/0/04/Malik_Bin_Anas_Name.png"
          />
          <Scholar
            name="Al-Shafi'i"
            image="https://upload.wikimedia.org/wikipedia/commons/3/36/Al-Shafie_Name.png"
          />
          <Scholar
            name="Ahmed ibn Hanbal"
            image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Ahmad_bin_Hanbal_Name.png"
          />
          <Scholar
            name="Al-Ghazali"
            image="https://upload.wikimedia.org/wikipedia/commons/e/e9/%D8%A3%D8%A8%D9%88_%D8%AD%D8%A7%D9%85%D8%AF_%D8%A7%D9%84%D8%BA%D8%B2%D8%A7%D9%84%D9%8A.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
