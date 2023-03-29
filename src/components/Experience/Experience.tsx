'use client';

import { ExperiencesQuery } from '@/generated/graphql';
import styles from './Experience.module.css';
import { sdk } from '@/graphql/client';
import { useState } from 'react';

export default function Experience() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [experiences, setExperiences] = useState<
        ExperiencesQuery | undefined
    >();

    if (!isLoaded) {
        sdk.experiences().then((res) => {
            setExperiences(res);
            setIsLoaded(true);
        });
        return <></>;
    }

    return (
        <div id="experience-id" className={styles.experience}>
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
                            className={styles.experience_button}
                        >
                            {experience.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
