import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import {connect} from "react-redux";
import {fetchData}from "../actions";
import Pagination from "./Pagination";

 class Display extends Component {
  state = {
    data: [],
    displayData: []
  };

  componentDidMount() {
    this.props.fetchData();
    console.log(this.props.fetchData(),"data");
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && this.props.tableData !== nextProps.tableData)
      this.setState(
        {
          data: nextProps.tableData,
        },
        () => {
          this.setViewableData(1);
        }
      );
  }
      setViewableData = (pageNum) => {
        this.setState({
          displayData: this.paginate(this.state.data, 5, pageNum),
        });
      }
      paginate = (array, page_size, page_number) => {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
      };
    
      handlePageChange = (page) => {
        this.setViewableData(page);
      }; 
      handleClick = (index)=>{
        var displayData = [...this.state.displayData];
        displayData.splice(index, 0);
        this.setState({displayData});
      }
    render() {
      const { displayData } = this.state;
        return (
            <div>
                   <Table responsive>
                <thead>
                  <tr>
                    <th>Album-id</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Thumbnail</th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((item)=>{
                    console.log(item.id)
                    return(
                      <tr key={item.id}>  
                      <td>{item.albumId}</td>
                      <td>{item.title}</td>
                      <td>{item.url}</td>
                      <td>{item.thumbnailUrl}</td>
                      <td onClick={()=>this.handleClick(item.id)}>X</td>
                    </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Pagination
                pageCount={Math.ceil(this.props.tableData.length / 100)}
                change={this.handlePageChange}
              />
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
  console.log(state,"state");
  return { tableData: state.tableData};
  
}
export default connect(mapStateToProps,{fetchData})( Display);