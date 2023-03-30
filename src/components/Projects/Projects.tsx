import { ProjectsQuery } from '@/generated/graphql';
import styles from './Projects.module.css';

interface Props {
    projects: ProjectsQuery;
}

export default function Projects({ projects }: Props) {
    return (
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
                            {/* <i
                            class="fa fa-folder-o work-folder fa-2x"
                            aria-hidden="true"
                        ></i> */}
                            <h1>{project.name}</h1>
                            <h2>{project.description}</h2>
                            <div className={styles.work_tags_container}>
                                <div className={styles.work_tags}>
                                    {project.skills.map((skill, index) => (
                                        <p key={index}>{skill}</p>
                                    ))}
                                </div>
                            </div>
                            {/* <a
                            href="https://github.com/brayandm/CP-snippets"
                            target="_blank"
                        >
                            <i
                                class="fa fa-external-link work-icon fa-lg"
                                aria-hidden="true"
                            ></i>
                        </a> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
