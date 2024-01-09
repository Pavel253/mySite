import React, { useState } from 'react';
import './Skills.scss';

import img1 from '../../Img/skill/frontend.jpg'
import img2 from '../../Img/skill/bnackend.jpg'
import img3 from '../../Img/skill/tg-bot.jpg'
import img4 from '../../Img/skill/bez.jpg'

const Skills = () => {

  const [activeOne, setActiveOne] = useState(false)
  const [activeTwo, setActiveTwo] = useState(false)
  const [activeThree, setActiveThree] = useState(false)
  const [activeFour, setActiveFour] = useState(false)

  const handleClickOne = () => {
    setActiveOne(true)
    setActiveTwo(false)
    setActiveThree(false)
    setActiveFour(false)
  }

  const handleClickTwo = () => {
    setActiveOne(false)
    setActiveTwo(true)
    setActiveThree(false)
    setActiveFour(false)
  }

  const handleClickThree = () => {
    setActiveOne(false)
    setActiveTwo(false)
    setActiveThree(true)
    setActiveFour(false)
  }

  const handleClickFour = () => {
    setActiveOne(false)
    setActiveTwo(false)
    setActiveThree(false)
    setActiveFour(true)
  }

  return (
    <section className='skills__me' id="section2">
      <div className="container">
        <h2 className='title__h2'>Мои навыки</h2>
        <div className="container__skill">

          <div className="line" />

          <div className={activeOne ? 'skill__active active' : 'skill__active'}>
            <h3 onClick={handleClickOne} className='title__h3'>frontend </h3>
            <div className="container__tt">
              <span className={activeOne ? 'span active' : 'span'}>область разработки программного обеспечения, которая отвечает за создание пользовательского интерфейса и взаимодействие с пользователем. Она включает в себя разработку и программирование веб-страниц, веб-приложений и мобильных приложений, обеспечивая их внешний вид и функциональность. В область frontend также входит работа с HTML, CSS и JavaScript, а также с фреймворками и библиотеками, которые упрощают процесс разработки пользовательского интерфейса.</span>
              <img className={activeOne ? 'img active' : 'img'} src={img1} alt="" />
            </div>
          </div>

          <div className="line" />

          <div className={activeTwo ? 'skill__active active' : 'skill__active'}>
            <h3 onClick={handleClickTwo} className='title__h3'>backend  </h3>
            <div className="container__tt">
              <span className={activeTwo ? 'span active' : 'span'}>это разработка серверной части веб-приложений с использованием языка программирования Python. В отличие от фронтенда, который отвечает за визуальную часть и взаимодействие с пользователем, бэкенд отвечает за обработку запросов от клиента, обращение к базам данных, бизнес-логику приложения и другие серверные операции.</span>
              <img className={activeTwo ? 'img active' : 'img'} src={img2} alt="" />
            </div>
          </div>

          <div className="line" />

          <div className={activeThree ? 'skill__active active' : 'skill__active'}>
            <h3 onClick={handleClickThree} className='title__h3'>бОТЫ В ТЕЛЕГРАММЕ </h3>
            <div className="container__tt">
              <span className={activeThree ? 'span active' : 'span'}>это автоматизированные аккаунты, которые выполняют определенные функции в мессенджере Telegram, без участия реальных пользователей. Они могут выполнять различные задачи, такие как отвечать на вопросы пользователей, предоставлять информацию, играть в игры, отправлять уведомления и многое другое.</span>
              <img className={activeThree ? 'img active' : 'img'} src={img3} alt="" />
            </div>
          </div>

          <div className="line" />

          <div className={activeFour ? 'skill__active active' : 'skill__active'}>
            <h3 onClick={handleClickFour} className='title__h3'>безопасность сайта </h3>
            <div className="container__tt">
              <span className={activeFour ? 'span active' : 'span'}>Обеспечиваю высокий уровень безопасности нашего сайта, используя самые надежные системы защиты данных и шифрования, чтобы гарантировать конфиденциальность вашей информации и защиту от внешних угроз.</span>
              <img className={activeFour ? 'img active' : 'img'} src={img4} alt="" />
            </div>
          </div>

          <div className="line" />

        </div>
      </div>
    </section >
  );
};

export default Skills;