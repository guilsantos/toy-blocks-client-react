import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const Blocks = ({
  node: {
    blocks: { list, status },
  },
}) => {
  const classes = useStyles();

  if (status === "failure")
    return <div>We find a error retrieving the data, try again later</div>;

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className={classes.blocks}>
      {list.map((block) => (
        <div key={block.id} className={classes.container}>
          <span className={classes.header}>{block.attributes.index}</span>
          <div className={classes.body}>{block.attributes.data}</div>
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  blocks: {
    width: "100%",
  },
  container: {
    backgroundColor: "lightgray",
    borderRadius: "2px",
    marginBottom: "5px",
    padding: "8px",
  },
  header: {
    color: "blue",
    fontWeight: "bold",
    fontSize: "10px",
  },
  body: {},
}));

Blocks.propTypes = {
  node: PropTypes.object.isRequired,
};

export default Blocks;
