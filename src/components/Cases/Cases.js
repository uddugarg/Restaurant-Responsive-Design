import React from 'react'
import './Cases.css'
import { ReactComponent as CasesNext } from '../../assests/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../../assests/arrow-left.svg';

const images = [
    { id: 1, subtitle: 'Deep Dish Pizza', title: 'Serving it up, CHICAGO STYLE. DEEEEEPP', img: 'https://birthdaywishings.com/wp-content/uploads/2017/09/1344-3-large-1.jpg' },
    { id: 2, subtitle: 'Deep Dish Skillet Cookie', title: "Always trust in the 'za, brah. Any way you slice it", img: 'https://kirbiecravings.com/wp-content/uploads/2017/02/pillsbury-34-700x606.jpg' },
    { id: 3, subtitle: 'Hawaiian Deep Pizza Pasta Bake', title: "Life is not about finding yourself, it's about finding pizza.", img: 'https://img.taste.com.au/Anr9L8A_/taste/2018/08/hawaiian-pizza-pasta-bake_1908x1320-140399-1.jpg' }
]

function Cases() {
    return (
        <section className='cases'>
            <div className="cases__container">
                <div className="cases__nav">
                    <div className="cases__arrow prev disabled">
                        <CasesPrev className='cases__svg' />
                    </div>
                    <div className="cases__arrow next">
                        <CasesNext className='cases__svg' />
                    </div>
                </div>
                <div className="cases__row">
                    {images.map((i) => (
                        <div className="cases__content" key={i.id}>
                            <div className="cases__details">
                                <span>{i.subtitle}</span>
                                <h2>{i.title}</h2>
                            </div>
                            <div className="cases__img">
                                <img src={`${i.img}`} alt={i.subtitle} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cases
