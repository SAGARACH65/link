import queryString from "query-string";
import React, { Component } from "react";

import Tags from "./tags";
import Links from "./links";
import Header from "../../components/header";

import { store } from "../../store";
import {
  addCurrentPage,
  addQueryString,
  addQueryTag
} from "../../actions/pageInfo";

export default class Linky extends Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);

    const { q, tag, page } = parsed;
    console.log(q, tag, page);

    if (q) store.dispatch(addQueryString(q));
    if (tag) store.dispatch(addQueryTag(tag));

    //if no page give default to page 1
    page
      ? store.dispatch(addCurrentPage(page))
      : this.props.history.push("/linky?page=2");
  }

  componentWillReceiveProps(nextProps) {
    const prevParsed = queryString.parse(this.props.location.search);
    const parsed = queryString.parse(nextProps.location.search);

    const { q, tag, page } = parsed;
    if (prevParsed.q !== q || prevParsed.tag !== tag || prevParsed.page !== page) {
      console.log(q, tag, page);

      if (q) store.dispatch(addQueryString(q));
      if (tag) store.dispatch(addQueryTag(tag));
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <div className="container">
          <div className="row">
            <Links history={this.props.history} />
            <Tags history={this.props.history} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
