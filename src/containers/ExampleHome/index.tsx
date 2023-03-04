import { useEffect, useState } from 'react'

import styles from  './styles.module.css'

import 'two-up-element'

import kids from '../../assets/examples/niños.jpg'
import kidsRb from '../../assets/examples/niños-rb.png'
import shoes from '../../assets/examples/adidas.png'
import shoesRb from '../../assets/examples/adidasBg.png'
import animals from '../../assets/examples/animal.png'
import animalsBr from '../../assets/examples/animalBg.png'
import auto from '../../assets/examples/car.png'
import autoBr from '../../assets/examples/carBg.png'
import graphics from '../../assets/examples/graphics.png'
import graphicsBr from '../../assets/examples/graphicsBg.png'

const ListButton = ({text, active, value}:{text:string, active:boolean, value:number}) => {
  const [isActive, setIsActive] = useState(active)
  return (
    <button value={value} onClick={() => setIsActive(true)} className={`${isActive && styles.active} buttonExample`}>{text}</button>
  );
}

const index = () => {
  const [image, setImage] = useState(kids)
  const [imageExample, setImageExample] = useState(kidsRb)

  const handleSelectButtonExample = (e:any) => {
    const buttons = document.querySelectorAll('.buttonExample')
    buttons.forEach(button => {
      if (button !== e.target) {
        button.classList.remove(`${styles.active}`)
      }
    })
    e.target.classList.add(`${styles.active}`)
    return e.target.value
  }
  const handleSetExample = (e:any) => {
    const exampleValue = handleSelectButtonExample(e)
    exampleValue === '0' && (setImage(kids), setImageExample(kidsRb))
    exampleValue === '1' && (setImage(shoes), setImageExample(shoesRb))
    exampleValue === '2' && (setImage(animals), setImageExample(animalsBr))
    exampleValue === '3' && (setImage(auto), setImageExample(autoBr))
    exampleValue === '4' && (setImage(graphics), setImageExample(graphicsBr))
  }

  return (
    <article className={styles.test}>
          <div className={styles.testContainer}>
            <h3>Fast and Easy</h3>
            <div className={styles.example}>
              <ul className={styles.options}>
                <li onClick={handleSetExample} className={styles.optionItem}>
                  <ListButton value={0} text='People' active={true} />
                </li>
                <li onClick={handleSetExample} className={styles.optionItem}>
                  <ListButton value={1} text='Products' active={false} />
                </li>
                <li onClick={handleSetExample} className={styles.optionItem}>
                  <ListButton value={2} text='Animals' active={false} />
                </li>
                <li onClick={handleSetExample} className={styles.optionItem}>
                  <ListButton value={3} text='Automobile' active={false} />
                </li>
                <li onClick={handleSetExample} className={styles.optionItem}>
                  <ListButton value={4} text='Graphics' active={false} />
                </li>
              </ul>
              <div className={styles.exampleContainer}>
                <two-up className='my-two-up'>
                  <img src={image} alt="kids" />
                  <img src={imageExample} alt="kids without background" />
                </two-up>
              </div>
            </div>
          </div>
        </article>
  );
}

export default index;