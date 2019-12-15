import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = { 
            sections: 
            [
                {
                    title: 'earrings',
                    imageUrl: 'https://i.imgur.com/DvOFmW3.jpg',
                    id: 1
                },
                {
                    title: 'necklaces',
                    imageUrl: 'https://i.imgur.com/E1H2aIT.jpg?1',
                    id: 2
                },
                {
                    title: 'bracelets',
                    imageUrl: 'https://i.imgur.com/eLWdtei.jpg',
                    id: 3

                },
                {
                    title:'kids',
                    imageUrl: 'https://ae01.alicdn.com/kf/HTB1HJoTe41YBuNjy1zcq6zNcXXao/Menglina-Acrylic-Cartoon-Hairbow-Horse-Earrings-For-Children-Baby-Horse-Resin-Dangle-Earrings-Girls-Fashion-Earrings.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title:'mens',
                    imageUrl:'https://i.imgur.com/gt6EQg0.jpg',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;