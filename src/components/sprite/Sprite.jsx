import sprite from "./icons.svg";

const Sprite = ({ id, height, width, style, className, onClick }) => {
  return (
    <svg
      height={`${height}px`}
      width={`${width}px`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ ...style }}
      className={className || ""}
      onClick={onClick}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Sprite;
