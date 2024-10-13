import React, { Component } from 'react';
import classes from './App.module.css';
import ProductDetails from './ProductDetalis/ProductDetails'; // Corectat numele importului
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './TopBar/TopBar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    showHeartBeatSection: false,
  };

  // Funcție pentru schimbarea imaginii de previzualizare
  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  }

  // Funcție pentru schimbarea secțiunii de ritm cardiac
  onFeatureItemClick = (pos) => {
    // Actualizează starea în funcție de opțiunea selectată
    let updatedState = pos === 1;
    this.setState({ showHeartBeatSection: updatedState });
  }

  render() {
    const { productData, currentPreviewImagePos, showHeartBeatSection } = this.state;

    return (
      <div className="App">
        <Topbar />

        <div className={classes.MainContain}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={productData.colorOptions[currentPreviewImagePos].imageUrl}
              showHeartBeatSection={showHeartBeatSection}
            />
          </div>
          <div className={classes.ProductData}>
            <ProductDetails
              data={productData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              showHeartBeatSection={showHeartBeatSection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
