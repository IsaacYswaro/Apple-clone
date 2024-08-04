import React, { Component } from "react";
import ColumnFooter from "./ColumnFooter";
import footerDataSections from "./Data/footerData";

class FooterLinkWrapper extends Component {
  render() {
    return (
      <div className="footer-links-wrapper row">
        {footerDataSections.map((section, i) => (
          <div className={`links${i + 1} col-sm-12 col-md`} key={i}>
            <ColumnFooter data={section} />
          </div>
        ))}
      </div>
    );
  }
}

export default FooterLinkWrapper;
