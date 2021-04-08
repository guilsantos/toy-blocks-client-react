import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as nodeActions from "../actions/nodes";
import * as blockActions from "../actions/blocks";
import Node from "../components/Node";
import { Typography, Box } from "@material-ui/core";

export class Nodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedNodeURL: null,
    };
    this.toggleNodeExpanded = this.toggleNodeExpanded.bind(this);
  }

  componentDidMount() {
    this.props.nodeActions.checkNodeStatuses(this.props.nodes.list);
    this.props.blockActions.getBlocksLists(this.props.nodes.list);
  }

  toggleNodeExpanded(node) {
    this.setState({
      expandedNodeURL:
        node.url === this.state.expandedNodeURL ? null : node.url,
    });
  }

  render() {
    const { nodes } = this.props;
    return (
      <Box paddingTop={7}>
        <Typography variant="h4" component="h1">
          <strong style={{ color: "#000" }}>Nodes</strong>
        </Typography>
        {nodes.list.map((node) => (
          <Node
            node={node}
            key={node.url}
            expanded={node.url === this.state.expandedNodeURL}
            toggleNodeExpanded={this.toggleNodeExpanded}
          />
        ))}
      </Box>
    );
  }
}

Nodes.propTypes = {
  nodeActions: PropTypes.object.isRequired,
  blockActions: PropTypes.object.isRequired,
  nodes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    nodes: state.nodes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nodeActions: bindActionCreators(nodeActions, dispatch),
    blockActions: bindActionCreators(blockActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
