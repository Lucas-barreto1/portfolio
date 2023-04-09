import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../../styles'

import ProjectCard from './components/ProjectCard'
import { SectionWrapper } from '../../../hoc'
import { projects } from '../../../constants'
import { fadeIn, textVariant } from '../../../utils/motion'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Meu trabalho</p>
        <h2 className={`${styles.sectionHeadText}`}>Projetos.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Os seguintes projetos demonstram minhas habilidades e experiências
          através de exemplos reais do meu trabalho. Cada projeto é brevemente
          descrito com links para repositórios de código e demos ao vivo.
          Refletem minha capacidade de resolver problemas complexos, trabalhar
          com diferentes tecnologias e gerenciar projetos de forma eficaz.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
