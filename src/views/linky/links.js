import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";

import SearchBar from "./searchBar";
import LinkDetails from "./linkDetails";

import { getAllLinks } from "../../utils/api";
import { addLinks } from "../../actions/links";
import { addCurrentPage } from "../../actions/pageInfo";

class Links extends Component {
  static propTypes = {
    addLinks: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    addCurrentPage: PropTypes.func.isRequired
  };

  async fetchData(currentPage) {
    const response = await getAllLinks(currentPage);
    this.props.addLinks(response.data);
  }

  componentDidMount() {
    this.fetchData(this.props.currentPage);
  }

  clickHandler = () => {
    this.props.addCurrentPage();
    this.fetchData(this.props.currentPage + 1);
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-links col-sm-12">
          <div className="block-set">
            <div className="block-set__header">
              <h3 className="left">Links</h3>
              <SearchBar history={this.props.history} />
            </div>

            <div className="block-set__content">
              <ul className="block-set__list">
                {this.props.links.map(link => (
                  <LinkDetails key={link.id} link={link} />
                ))}
              </ul>
            </div>
            {this.props.links.length % 5 === 0 && (
              <p className="see-more-text" onClick={this.clickHandler}>
                See More..
              </p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ links, pageInfo }) => ({
  links: links.links,
  currentPage: pageInfo.currentPage
});

const mapDispatchToProps = dispatch => ({
  addLinks: links => {
    dispatch(addLinks(links));
  },
  addCurrentPage: currentPage => {
    dispatch(addCurrentPage(currentPage));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Links);
