import React, { Component } from "react";
import ReactPaginate from "react-paginate";

export default class Pagination extends Component {
  handlePageClick = (data) => {
    this.props.change(data.selected + 1);
  };

  render() {
    const pageCount = this.props.pageCount;
    return (
      <ReactPaginate
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        pageLinkClassName={"page-link"}
        breakLinkClassName={"break-link"}
        previousLinkClassName={"prev-link"}
        nextLinkClassName={"next-link"}
        onPageChange={this.handlePageClick}
      />
    );
  }
}