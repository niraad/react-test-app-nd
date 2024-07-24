import React from "react";
import PropTypes from "prop-types";
import { Grid, Column } from "carbon-components-react";
import "./LeadSpace.scss";

const LeadSpace = ({ backgroundColor, title, messageTop, messageBottom }) => {
  return (
    <div className="lead-space" style={{ backgroundColor }}>
      <Grid fullWidth>
          <Column Column lg={16} md={8} sm={4}>
            {messageTop && (
              <p className="lead-space__messageTop">{messageTop}</p>
            )}
            {title && <h1 className="lead-space__title">{title}</h1>}
            {messageBottom && (
              <p className="lead-space__messageBottom">{messageBottom}</p>
            )}
          </Column>
      </Grid>
    </div>
  );
};

LeadSpace.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  messageTop: PropTypes.string,
  messageBottom: PropTypes.string,
};

export default LeadSpace;
