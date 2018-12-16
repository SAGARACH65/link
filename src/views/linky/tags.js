import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react'


import Links from './links'
import Header from '../../components/header'
import { PlusIcon } from '../../components/icons';


import {getAllTags} from '../../utils/api'
import {  addTags} from '../../actions/tags';



class Tags extends Component {

  static propTypes = {
    addTags: PropTypes.func.isRequired, 
    tags: PropTypes.array.isRequired, 
}

onPressHandler=tag=>{
  this.props.history.push(`/linky?page=1&tag=${tag.replace(' ','%20')}`)

}

async componentDidMount(){
const response =await getAllTags();
this.props.addTags(response.data)
}

    render() {
        return (
 <React.Fragment>
            <div className="col-lg-tags col-sm-12">
    <div className="block-set">
      <div className="block-set__header">
        <h3 className="left">Tags</h3>
        <button type="button" className="right btn btn--alternate btn--curved">
        
          <PlusIcon width={20} height={21} />
        </button>
      </div>

      <div className="block-set__content">
      {this.props.tags.map(tag => (
         <button
          className="tag tag-linky tag--xsm tag-linky--xsm" 
          key={tag.id}
          onClick={() => this.onPressHandler(tag.tag)}
          >
          {tag.tag}
          </button>
          ))}
      </div>

    </div>
  </div>
 </React.Fragment>
        )
    }
}

const mapStateToProps = ({ tags}) => ({
  tags: tags.tags,
});

const mapDispatchToProps = dispatch => ({
  addTags: tags => { dispatch(addTags(tags)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);

