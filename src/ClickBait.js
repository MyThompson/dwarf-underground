import React, {Component} from 'react'
import Ad1 from './BaitAd1'
import Ad2 from './BaitAd2'
import Ad3 from './BaitAd3'
import Ad4 from './BaitAd4'


class ClickBait extends Component {
    constructor() {
        super()
        
        this.state = {
          Ads:[
              Ad4,
              Ad3,
              Ad2,
              Ad1,
          ]
        }
      }
    render() {
        return(

<div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        <ul>
          { this.state.Ads.map(Ad => <Ad/>) }
        </ul>
      </div>
      )
    }
}

      export default ClickBait