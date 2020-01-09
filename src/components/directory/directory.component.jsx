import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      
      sections: [
        {title: 'Fine Jewellery', imageURL: 'https://www.chanel.com/i18n/en_GB/slides/1280_EOY_jewelery_1119_.jpg',id: 1},
        {title: 'Watches', imageURL: 'https://www.chanel.com/i18n/en_GB/slides/1280_NEW_J12_WATCH_0519.jpg',id: 2},
        {title: 'Skincare', imageURL: 'https://www.chanel.com/i18n/en_GB/slides/1280_HOLIDAY_KEM_SKINCARE_1119.jpg',id: 3},
        {title: 'Fragrance', imageURL: 'https://prd-v3-i.chanel.com/content/dam/fnb/widgets/5x5-main-widget/imgs/flacon_home_desk_parfum.png?v=140120191123',id: 4,size: "large"},
        {title: 'Sunglasses', imageURL: 'https://www.chanel.com/i18n/en_GB/slides/1280_eyewear_0219_en_GB.jpg',id: 5,size: "large"}]

    }
  }


  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
