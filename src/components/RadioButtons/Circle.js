function Circle(props) {
  let backgroundColor = "#f06292";
  switch (props.bg) {
    case "brand.200":
      backgroundColor = "#ba68c8";
      break;
    case "brand.300":
      backgroundColor = "#ffd54f";
      break;
    case "brand.400":
      backgroundColor = "#4fc3f7";
      break;
    case "brand.500":
      backgroundColor = "#aed581";
      break;
  }

  const styles = {
    height: 20,
    width: 20,
    borderRadius: "50%",
    display: "inline-block",
    cursor: "pointer",
    marginTop: "auto",
    marginBottom: "auto",
  };

  return (
    <div
      className="dot"
      style={{
        ...styles,
        backgroundColor,
      }}
    >
      {props.checked && (
        <svg viewBox="0 0 24.00 24.00" fill="none">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M17 9L9.99998 16L6.99994 13"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      )}
    </div>
  );
}

export default Circle;
