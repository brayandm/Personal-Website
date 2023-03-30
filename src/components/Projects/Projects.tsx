'use client';

import { ProjectsQuery } from '@/generated/graphql';
import styles from './Projects.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
    projects: ProjectsQuery;
}

export default function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div id="work-id" className={styles.work}>
                <div className={styles.work_text}>
                    <div className={styles.work_init}>
                        <div>
                            <h2>{`03.`} </h2>
                            <h1>{`Some Things I've Built`}</h1>
                        </div>
                        <div className={styles.separator}></div>
                    </div>
                    <p>
                        A collection of projects I have worked on using software
                        development technologies
                    </p>
                </div>

                <div className={styles.work_all}>
                    <div className={styles.work_row}>
                        {projects?.projects.map((project, index) => (
                            <div key={index} className={styles.work_item}>
                                <Image
                                    className={styles.work_folder}
                                    src="/folder.png"
                                    alt="folder"
                                    width={30}
                                    height={30}
                                />
                                <h1>{project.name}</h1>
                                <h2>{project.description}</h2>
                                <div className={styles.work_tags_container}>
                                    <div className={styles.work_tags}>
                                        {project.skills.map((skill, index) => (
                                            <p key={index}>{skill}</p>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.url} target="_blank">
                                    <Image
                                        className={styles.work_icon}
                                        src="/link.svg"
                                        alt="link"
                                        width={25}
                                        height={25}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
