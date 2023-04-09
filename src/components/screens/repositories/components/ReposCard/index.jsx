import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '../../../../../utils/motion'

import { github } from '../../../../../assets'

const ReposCard = ({ index, name, url }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.1, 0.75)}
    className='bg-black-200 p-4 rounded-3xl xs:w-[320px] w-full'>
    <div className='mt-1 flex justify-between items-center'>
      <p className='text-white tracking-wider text-[18px]'>{name}</p>
      <div
        onClick={() => window.open(url, '_blank')}
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
        <img
          src={github}
          alt='source code'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>
  </motion.div>
)

export default ReposCard
