import React from "react";

const Title = (props) => {
  const {
    fontSize,
    fontWeight,
    fontColor,
    pt,
    pb,
    width,
    pl,
    pr,
    p,
    textAlign,
  } = props;
  // console.log(props);
  const titleStyle = {
    fontSize: fontSize ? fontSize : "1rem",
    fontWeight: fontWeight ? fontWeight : "bold",
    color: fontColor ? fontColor : "black",
    padding: p ? p : 0,
    paddingTop: pt ? pt : 0,
    paddingBottom: pb ? pb : 0,
    paddingLeft: pl ? pl : 0,
    paddingRight: pr ? pr : 0,
    width: width ? width : null,
    textAlign: textAlign ? textAlign : null,
  };

  return (
    <span style={titleStyle} className="title-container">
      {props.children}
    </span>
  );
};

export default Title;
