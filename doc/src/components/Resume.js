import React from 'react';

import Bar from './Bar';
import {motion} from 'framer-motion'
import {tools, languages} from './data/resume_data'

const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.6
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit">
            

           
        </motion.div>
    );
};

export default Resume;
