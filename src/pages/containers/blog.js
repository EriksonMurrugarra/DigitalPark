import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBlogEntries } from '../../actions';

class Blog extends Component {

  componentDidMount () {
    this.props.loadBlogEntries();
  }

  render() {
    const { blogEntries } = this.props;

    return (
      <div>
        <div> Blog </div>
        {
          blogEntries && (
            blogEntries.map(entry => {
              return (
                <div key={entry.id}>
                  <h2>{entry.title}</h2>
                  <p>{entry.content}</p>
                </div>
              );
            })
          )
        }
        {
          !blogEntries &&
            <h1> Loading ...</h1>
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    blogEntries: state.blogEntries
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadBlogEntries
   }
  , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
