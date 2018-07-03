import React, {Component} from 'react'
import Ad1 from './BaitAd1'
import Ad2 from './BaitAd2'
import Ad3 from './BaitAd3'
import Ad4 from './BaitAd4'

class ClickBait extends Component {
    render() {
        return(

<div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        <Ad4 />
        <Ad3 />
        <Ad2 />
        <Ad1 />
      </div>
      )
    }
}

      export default ClickBait