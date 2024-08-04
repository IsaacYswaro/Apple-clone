import React, { Component } from 'react'

 class FirstSecionLinks extends Component {
  render() {
    const { section, topNew, name, price, buy, description} = this.props;
    return (
      <div>
        <section className={`${section}-hightlight-wrapper`}>
          <div className="container">
            {topNew && <div className="new-alert">New</div>}


            <div className="title-wraper bold">{name}</div>
            {description && (
              <div className="description-wrapper">
                {description}
              </div>
            )}
            {price && (
              <div className="price-wrapper">{price}</div>
            )}
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">{buy}</a>
                </li>
              </ul>
            </div>
            {this.props.firstHighlight && (
              <div className="ipod-caption row">
                <div className="col-sm-12 col-md-6 text-md-right">
                  iPad Pro available starting 3.25
                </div>
                <div className="col-sm-12 col-md-6 text-md-left">
                  Magic Keyboard coming in May
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default FirstSecionLinks