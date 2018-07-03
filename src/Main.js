import React, {Component} from 'react'
import Article from './Article';
import Advert from './Advert';
import ClickBait from './ClickBait';

class Main extends Component {
    render() {
        return(
            <main className="expanded row">
      <Article />
      <Advert />
      <ClickBait />
    </main>
        )
    }
}

      export default Main