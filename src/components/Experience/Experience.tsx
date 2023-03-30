'use client';

import { ExperiencesQuery } from '@/generated/graphql';
import styles from './Experience.module.css';
import { useState } from 'react';
import Image from 'next/image';

interface Props {
    experiences: ExperiencesQuery;
}

export default function Experience({ experiences }: Props) {
    const [selectedExperience, setSelectedExperience] = useState(0);

    return (
        <div id="experience-id" className={styles.experience}>
            <div className={styles.experience_container}>
                <div className={styles.experience_text}>
                    <div className={styles.experience_init}>
                        <div>
                            <h2>02. </h2>
                            <h1>{`Where I've Worked`}</h1>
                        </div>
                        <div className={styles.separator}></div>
                    </div>
                </div>
                <div className={styles.experience_list}>
                    <div className={styles.experience_buttons}>
                        {experiences?.experiences.map((experience, index) => (
                            <button
                                key={index}
                                id="experience-button-backend"
                                className={
                                    selectedExperience == index
                                        ? `${styles.experience_button} ${styles.clicked}`
                                        : styles.experience_button
                                }
                                onClick={() => setSelectedExperience(index)}
                            >
                                {experience.title}
                            </button>
                        ))}
                    </div>
                    <div className={styles.experience_description}>
                        <div className={styles.experience_description_section}>
                            <div className={styles.title}>
                                <h1
                                    className={
                                        styles.experience_description_section_text
                                    }
                                >
                                    {
                                        experiences?.experiences[
                                            selectedExperience
                                        ].title
                                    }
                                </h1>
                                <a
                                    href={
                                        experiences?.experiences[
                                            selectedExperience
                                        ].companyUrl
                                    }
                                    target="_blank"
                                >
                                    <h2
                                        className={
                                            styles.experience_description_section_company
                                        }
                                    >
                                        @
                                        {
                                            experiences?.experiences[
                                                selectedExperience
                                            ].company
                                        }
                                    </h2>
                                </a>
                            </div>
                            <h3
                                className={
                                    styles.experience_description_section_date
                                }
                            >
                                {
                                    experiences?.experiences[selectedExperience]
                                        .startAt
                                }{' '}
                                -{' '}
                                {
                                    experiences?.experiences[selectedExperience]
                                        .endAt
                                }
                            </h3>
                            <div className={styles.experience_description_list}>
                                {experiences?.experiences[
                                    selectedExperience
                                ].tasks.map((task, index) => (
                                    <div
                                        key={index}
                                        className={styles.experience_element}
                                    >
                                        <Image
                                            src={'/arrow.png'}
                                            alt={'arrow'}
                                            width={15}
                                            height={15}
                                        />
                                        <p>{task}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
