import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

import ReposCard from './components/ReposCard'
import { styles } from '../../../styles'
import { SectionWrapper } from '../../../hoc'
import { textVariant } from '../../../utils/motion'

const USERNAME = 'Lucas-barreto1'

const Repositories = () => {
  const [repos, setRepos] = useState([])

  const getAllReposGithub = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${USERNAME}/repos`
      )
      const repos = response.data
      setRepos(repos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllReposGithub()
  }, [])

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Todos os meus projetos</p>
          <h2 className={styles.sectionHeadText}>Repositórios.</h2>
        </motion.div>
      </div>
      <div className={`mt-12 pb-14 ${styles.paddingX} flex flex-wrap gap-4`}>
        {repos.map((repo, index) => {
          return (
            <ReposCard
              name={repo.name}
              index={index}
              key={index}
              url={repo.svn_url}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Repositories, '')
