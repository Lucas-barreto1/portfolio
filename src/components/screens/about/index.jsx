import React from 'react'
import { motion } from 'framer-motion'

import ServiceCard from './components/ServiceCard'
import { services } from '../../../constants'
import { SectionWrapper } from '../../../hoc'

import { fadeIn, textVariant } from '../../../utils/motion'
import { styles } from '../../../styles'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Sobre mim</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Sou um desenvolvedor front-end, possuo habilidades no ecossistema
        Javascript/Typescript, incluindo frameworks como NextJS e bibliotecas
        como ReactJS. Sou capaz de me adaptar rapidamente a novas linguagens e
        projetos, entregando tarefas com velocidade e eficiência.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
