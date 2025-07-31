import { useState } from "react";

function Card() {
//   const [isHover, setIsHover] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    width: "330px",
    border: "2px solid #9d9a9a",
    textAlign: "center",
    borderRadius: "5%",
    // boxShadow: isHover ? '0 16px 32px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "box-shadow 0.1s ease-in-out",
  });

  const updateTheme = (bgColor, textColor) => {
    console.log(bgColor, textColor)
    setCardStyle({...cardStyle, backgroundColor: bgColor, color: textColor});

  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap",gap: "20px" }}>


      <div
        style={{
          width: "330px",
          border: "2px solid #9d9a9a",
          textAlign: "center",
          borderRadius: "5%",
          // boxShadow: isHover ? '0 16px 32px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.1s ease-in-out",
        }}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        <h1
          style={{
            color: "red",
          }}
        >
          Inline style in react JS
        </h1>
        <img
          style={{
            width: "200px",
            borderRadius: "50%",
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="Avatar Image"
        />
        <h3>Agam Partap Singh</h3>
        <p>Software Developer</p>
      </div>



      <div
        style={cardStyle}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        <button style={{borderRadius:'10%'}} onClick={() => updateTheme("grey", "white")}>Grey Theme</button>
        <button style={{borderRadius:'10%'}} onClick={() => updateTheme("white", "black")}>Default Theme</button>
        <h1
          style={{
            color: "red",
          }}
        >
          Inline style in react JS
        </h1>
        <img
          style={{
            width: "200px",
            borderRadius: "50%",
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="Avatar Image"
        />
        <h3>Agam Partap Singh</h3>
        <p>Software Developer</p>
      </div>




      <div
        style={cardStyle}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        <h1
          style={{
            color: "red",
          }}
        >
          Inline style in react JS
        </h1>
        <img
          style={{
            width: "200px",
            borderRadius: "50%",
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="Avatar Image"
        />
        <h3>Agam Partap Singh</h3>
        <p>Software Developer</p>
      </div>




      <div
        style={cardStyle}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        <h1
          style={{
            color: "red",
          }}
        >
          Inline style in react JS
        </h1>
        <img
          style={{
            width: "200px",
            borderRadius: "50%",
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="Avatar Image"
        />
        <h3>Agam Partap Singh</h3>
        <p>Software Developer</p>
      </div>




      <div
        style={cardStyle}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        <h1
          style={{
            color: "red",
          }}
        >
          Inline style in react JS
        </h1>
        <img
          style={{
            width: "200px",
            borderRadius: "50%",
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="Avatar Image"
        />
        <h3>Agam Partap Singh</h3>
        <p>Software Developer</p>
      </div>

      
    </div>
  );
}

export default Card;
