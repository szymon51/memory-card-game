import './Cards.css';

const Cards = ({ colors, handleClick }) => {
  const getRandomColors = (colors, colorAmount = 8) => {
    const usedColors = [];

    for (let i = 0; i < colorAmount; i++) {
      let randomNumber = Math.floor(Math.random() * (colors.length - 1));
      while (usedColors.includes(colors[randomNumber])) {
        randomNumber = Math.floor(Math.random() * (colors.length - 1));
      }
      usedColors.push(colors[randomNumber]);
    }
    return usedColors;
  };
  const cardGenerator = (colors) => {
    return getRandomColors(colors).map((randomColor) => {
      return (
        <div
          style={{
            backgroundColor: randomColor,
            width: '200px',
            height: '200px',
          }}
        ></div>
      );
    });
  };

  return <div className="grid">{cardGenerator(colors)}</div>;
};

export default Cards;
