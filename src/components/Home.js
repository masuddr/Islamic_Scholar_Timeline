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
        {/* <div className="home__row">
          <Scholar
            name="Prophet Muhammed"
            image="https://upload.wikimedia.org/wikipedia/commons/e/eb/Calligraphic_representation_of_Muhammad%27s_name.jpg"
          />
        </div> */}

        <div className="home__row">
          <Scholar
            name="Abu Bakr al-Siddiq"
            image="https://upload.wikimedia.org/wikipedia/commons/b/b6/%D8%A3%D8%A8%D9%88_%D8%A8%D9%83%D8%B1_%D8%A7%D9%84%D8%B5%D8%AF%D9%8A%D9%82.gif"
          />
          <Scholar
            name="Omar ibn al-Khattab"
            image="http://islam.ru/en/sites/default/files/img/story/2013/01/umar.jpeg"
          />
          <Scholar
            name="Uthman ibn Affan"
            image="https://upload.wikimedia.org/wikipedia/commons/7/71/Uthman.png"
          />
          <Scholar
            name="Ali ibn Abi Taleb"
            image="https://upload.wikimedia.org/wikipedia/commons/3/32/Al%C4%AB.png"
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
        <div className="home__row">
          <Scholar
            name="Al-Nawawi"
            image="https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/f/f5/%D9%8A%D8%AD%D9%8A%D9%89_%D8%A8%D9%86_%D8%B4%D8%B1%D9%81_%D8%A7%D9%84%D9%86%D9%88%D9%88%D9%8A.svg/220px-%D9%8A%D8%AD%D9%8A%D9%89_%D8%A8%D9%86_%D8%B4%D8%B1%D9%81_%D8%A7%D9%84%D9%86%D9%88%D9%88%D9%8A.svg.png"
          />
          <Scholar
            name="Ibn Hajar al-Asqalani"
            image="https://upload.wikimedia.org/wikipedia/commons/7/75/%D8%A7%D8%A8%D9%86_%D8%AD%D8%AC%D8%B1_%D8%A7%D9%84%D8%B9%D8%B3%D9%82%D9%84%D8%A7%D9%86%D9%8A.png"
          />
          <Scholar
            name="Al-Bukhari"
            image="https://upload.wikimedia.org/wikipedia/commons/4/4b/ImamBukhari1.png"
          />
          <Scholar
            name="Muslim"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f4/ImamMuslim1.png"
          />
          <Scholar
            name="Al-Baqillani"
            image="https://upload.wikimedia.org/wikipedia/commons/8/8d/%D8%A3%D8%A8%D9%88_%D8%A8%D9%83%D8%B1_%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D9%84%D8%A7%D9%86%D9%8A.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
