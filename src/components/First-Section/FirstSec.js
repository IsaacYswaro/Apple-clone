import React, { Component } from 'react'
import FirstSecionLinks from './FirstSecionLinks';

class FirstSec extends Component {
  render() {
    return (
      <>
        <FirstSecionLinks
          section="first"
          name="iPad Pro"
          buy="order"
          firstHighlight="true"
          topNew="true"
        />
        <FirstSecionLinks
          section="second"
          name="MacBook Air"
          buy="buy"
          description="Twice the speed. Twice the storage."
          price="From $999."
          topNew="true"
        />
        <FirstSecionLinks
          section="third"
          name="iPhone 11 Pro"
          buy="buy"
          description="Pro cameras. Pro display. Pro performance."
          price="From $24.95/mo. or $599 with trade‑in"
        />
      </>
    );
  }
}

export default FirstSec